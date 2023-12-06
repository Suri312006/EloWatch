import { fail } from '@sveltejs/kit'

export const actions = {
    signup: async(event) => {

        let formdata = await event.request.formData()

        let email = formdata.get('email')
        let password = formdata.get("password")
        let password_check = formdata.get("password_check")
        //* need a simple password check here, and then send off data to supabase
        if (password != password_check){
            return fail(400, {email, password_mismatch: true})
        }
        
        let { data, error } = await event.locals.supabase.auth.signUp({
            email: email!.toString(),
            password: password!.toString()
          })
        
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
