const initialState = {
    users: [
        { name: 'Ivan', follow: true, id: 0, },
        { name: 'Masha', follow: true, id: 1, },
        { name: 'Petya', follow: false, id: 2, },
        { name: 'Kirill', follow: false, id: 3, },
        { name: 'Lera', follow: true, id: 4, },
        { name: 'Jack', follow: false, id: 5, },
        { name: 'Pete', follow: false, id: 6, },
    ],
};

const homeReducer = (state = initialState, action) => {
    return state;
}

export default homeReducer;