import { loadBlog } from "../actions/blogActions"

const fetchBlogData = () => {
    return async (dispatch, getState) => {
        const res = await fetch(`${import.meta.env.VITE_BASE_URL}/get-blogs`)
        const data = await res.json()

        if (data.length) {
            console.log(data)
            dispatch(loadBlog(data))
        }
    }
}

export default fetchBlogData;