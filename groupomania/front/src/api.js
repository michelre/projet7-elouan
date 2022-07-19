export const signup = () => {
    return fetch()
}

export const login = (userData) => {
    return fetch({
        method: 'POST',
        body: userData
    })
}

export const getAllPosts = () => {
    return fetch({
        method: 'GET',
        headers: {
            "Authorization": localStorage.getItem('token'),
        },
    })
}

export const getOnePost = () => {
    return fetch()
}

export const createPost = () => {
    return fetch()
}

export const deletePost = () => {
    return fetch()
}

export const updatePost = () => {
    return fetch()
}
