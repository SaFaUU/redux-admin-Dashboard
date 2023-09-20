import { actionTypes } from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
    readHistory: [],
    sort: "",
    filterCategory: [],
}

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CONTENT:
            return {
                ...state,
                blogs: action.payload
            }
        case actionTypes.READ_BLOG:
            if (action.payload) {
                const newHistory = state.readHistory.filter((blog) => blog._id !== action.payload._id)
                return {
                    ...state,
                    readHistory: [action.payload, ...newHistory]
                }
            }
            return state;
        case actionTypes.DELETE_CONTENT:
            return {
                ...state,
                blogs: state.blogs.filter((blog) => blog._id !== action.payload._id)
            }
        case actionTypes.UPDATE_CONTENT:
            return {
                ...state,
                blogs: state.blogs.map((blog) => blog._id === action.payload._id ? action.payload : blog)
            }
        case actionTypes.SET_SORT:
            return {
                ...state,
                sort: action.payload
            }
        case actionTypes.FILTER_CATEGORY:
            if (state.filterCategory.includes(action.payload)) {
                const filterCategoryData = state.filterCategory.filter((filter) => filter !== action.payload)
                return {
                    ...state,
                    filterCategory: filterCategoryData
                }
            }

            return {
                ...state,
                filterCategory: [...state.filterCategory, action.payload]
            }
        default:
            return state
    }
}

export default blogReducer;

