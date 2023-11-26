const actions = {
  getRandomNumber: async ({ request }) => {
    const data = await request.formData();
    let total = 0;
    for (let value of data.values()) {
      console.log(value);
    }
    return { total };
  }
};
export {
  actions
};
