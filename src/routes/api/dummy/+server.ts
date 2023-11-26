import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
export const GET: RequestHandler = async () => {

    let data:any = "hello"
    
    console.log("the towers have been hit")

    return new Response(JSON.stringify({"message": "hi"}), {status: 200});
};