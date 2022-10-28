export const AddNewsletter = (name, email) => ({
    method: 'post',
    url: 'newsletter/api/add/',
    data: {
        name: name,
        email: email,
    }
});