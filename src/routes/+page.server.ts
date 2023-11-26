export const actions = {


	getRandomNumber: async ({ request }) => {
		const data = await request.formData();
       let total = 0
        
        async function roll() {
            const response = await fetch('/api/random');
            total = await response.json();
        }

        
        
        for(let value of data.values()){
            console.log(value)
        }

        return {total}
		
	}
};