export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
        for(let value of data.values()){
            console.log(value)
        }
		
	}
};