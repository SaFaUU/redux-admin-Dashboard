import { useEffect } from "react";
import BlogCard from "./component/BlogCard";
import { useDispatch, useSelector } from "react-redux";
import fetchBlogData from "../../Redux/thunk/fetchBlog";
import { setFilterCategory, setSort } from "../../Redux/actions/blogActions";

const Home = () => {
    const dispatch = useDispatch()
    const filterCategory = useSelector((state) => state.filterCategory)
    const blogs = useSelector((state) => state.blogs)
    const sort = useSelector((state) => state.sort)
    useEffect(() => {
        dispatch(fetchBlogData())
    }, [dispatch])
    const handleDropDown = (e) => {
        console.log(e.target.value);
        dispatch(setSort(e.target.value))
    }

    let content;

    if (sort == "Last Upload") {
        content = blogs?.sort((a, b) => new Date(b.time) - new Date(a.time))
    }
    else if (sort === "First Upload") {
        content = blogs?.sort((a, b) => new Date(a.time) - new Date(b.time))
    }
    else {
        content = blogs;
    }

    return (
        <div className="mt-20">
            <div className="flex justify-between">
                <div className="space-x-4">
                    <button className={`border px-2 rounded-lg py-1 ${filterCategory.includes("Thriller") && "bg-blue-600 text-white"}`} onClick={() => dispatch(setFilterCategory("Thriller"))}>Thriller</button>
                    <button className={`border px-2 rounded-lg py-1 ${filterCategory.includes("Psychology") && "bg-blue-600 text-white"}`} onClick={() => dispatch(setFilterCategory("Psychology"))}>Psychology</button>
                    <button className={`border px-2 rounded-lg py-1 ${filterCategory.includes("Science Fiction") && "bg-blue-600 text-white"}`} onClick={() => dispatch(setFilterCategory("Science Fiction"))}>Science Fiction</button>
                    <button className={`border px-2 rounded-lg py-1 ${filterCategory.includes("Slice of Life") && "bg-blue-600 text-white"}`} onClick={() => dispatch(setFilterCategory("Slice of Life"))}>Slice of Life</button>
                </div>
                <div>
                    <select className="select w-full max-w-xs border-black text-xs" defaultValue={"Sort by"} onChange={handleDropDown}>
                        <option disabled value="Sort by">Sort by</option>
                        <option value="Last Upload">Last Upload</option>
                        <option value="First Upload">First Upload</option>
                    </select>
                </div>
            </div>
            <div className="space-y-4 mt-4">
                {
                    filterCategory.length === 0 ?
                        content.map((blog, index) => <BlogCard key={index} blog={blog}></BlogCard>)
                        :
                        content.filter((blog) => filterCategory.every(category => blog.genre.includes(category))).map((blog, index) => <BlogCard key={index} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Home;