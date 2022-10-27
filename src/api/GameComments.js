export const AllComments = () => ({
    method: 'get',
    url: 'comments/api/listcreate/'
});

export const SendComment = (name, opinion, rate, game) => ({
    method: 'post',
    url: 'comments/api/listcreate/',
    data: {
        game: "mirage",
        name: name,
        opinion: opinion,
        rate: rate
    }
});