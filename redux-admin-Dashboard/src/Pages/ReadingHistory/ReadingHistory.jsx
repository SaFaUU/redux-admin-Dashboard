import { useSelector } from "react-redux";
import BlogCard from "../Home/component/BlogCard";

const ReadingHistory = () => {
    const readHistory = useSelector((state) => state.readHistory)
    return (
        <div className="mt-20">

            {
                readHistory.length ?
                    <>
                        <div className="space-y-4">
                            {
                                readHistory?.map((blog, index) => <BlogCard key={index} blog={blog}></BlogCard>)
                            }
                        </div>
                    </>
                    :
                    <p>There is currently no history</p>
            }
        </div>
    );
};

export default ReadingHistory;