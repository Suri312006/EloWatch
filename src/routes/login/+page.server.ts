import { fail } from '@sveltejs/kit'

export const actions = {
    signup: async(event) => {

        let formdata = await event.request.formData()

        let email = formdata.get('email')
        let password = formdata.get("password")
 
        let { data, error } = await event.locals.supabase.auth.signInWithPassword({
            email: email!.toString(),
            password: password!.toString()
          })
        
        //todo need some sort of error handling
          console.log(data)

        //best way to handle this??
        if (data.user?.aud == 'authenticated'){
            return {user: data.user} 
        }
        else {
            return {user: false}
        }

        



  
    }
}
