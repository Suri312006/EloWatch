// src/routes/+page.server.ts
import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { AuthApiError, type Provider } from '@supabase/supabase-js';

export const load: PageServerLoad = async ({ url, locals: { supabase } }) => {
	console.log('ran');
	const code = url.searchParams.get('code');

	let session;
	if (code) {
		session = await supabase.auth.exchangeCodeForSession(code);
	}

	// if the user is already logged in return them to the account page
	if (session) {
		throw redirect(303, '/');

	}

	return { url: url.origin };
};

const OAUTH_PROVIDERS = ['google'];
export const actions = {
	signup: async (event) => {
		let formdata = await event.request.formData();

		let email = formdata.get('email');
		let password = formdata.get('password');

		let { data, error } = await event.locals.supabase.auth.signInWithPassword({
			email: email!.toString(),
			password: password!.toString()
		});

		//todo need some sort of error handling
		console.log(data);

		//best way to handle this??
		if (data.user?.aud == 'authenticated') {
			return { user: data.user };
		} else {
			return { user: false };
		}
	},
	login: async ({ request, locals, url }) => {
		const provider = url.searchParams.get('provider') as Provider;

		if (provider) {
			if (!OAUTH_PROVIDERS.includes(provider)) {
				return fail(400, {
					error: 'Provider not supported.'
				});
			}
			const { data, error: err } = await locals.supabase.auth.signInWithOAuth({
				provider: provider
			});

			if (err) {
				console.log(err);
				return fail(400, {
					message: 'Something went wrong.'
				});
			}

			console.log(data.url);

			throw redirect(303, data.url);
		}

		const body = Object.fromEntries(await request.formData());

		const { data, error: err } = await locals.supabase.auth.signInWithPassword({
			email: body.email as string,
			password: body.password as string
		});

		if (err) {
			if (err instanceof AuthApiError && err.status === 400) {
				return fail(400, {
					error: 'Invalid credentials'
				});
			}
			return fail(500, {
				message: 'Server error. Try again later.'
			});
		}

		throw redirect(303, '/');
	}
};
