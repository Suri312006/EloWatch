export const actions = {
    signup: async(event) => {

        let lol = await event.request.formData()
        console.log( lol )

        //* need a simple password check here, and then send off data to supabase

        // event.locals.supabase.auth.signUp()
    }
}