export const AllComments = () => ({
    method: 'get',
    url: 'comments/api/listcreate/'
});

export const SendComment = (name, opinion, rate) => ({
    method: 'post',
    url: 'comments/api/listcreate/',
    data: {
        game: "میراژ",
        name: name,
        opinion: opinion,
        rate: rate
    }
});