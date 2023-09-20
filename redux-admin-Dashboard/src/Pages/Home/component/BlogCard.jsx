/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { readBlog } from "../../../Redux/actions/blogActions";

const ProductCard = ({ blog }) => {
    const dispatch = useDispatch()
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <img src={blog.image} alt="Album" className="object-fill h-56" />
            <div className="card-body">
                <h2 className="card-title">{blog.title}</h2>
                <p className="text-left">{blog.content.slice(0, 200)}</p>
                <div className="card-actions justify-between items-center" >
                    <div className="flex space-x-4">
                        {blog.genre.map((genre, index) => <button key={index} className="px-2 py-1 rounded-lg bg-lime-500 text-white font-semibold">{genre}</button>)}
                    </div>
                    <button className="btn btn-primary" onClick={() => dispatch(readBlog(blog))}>Read</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;