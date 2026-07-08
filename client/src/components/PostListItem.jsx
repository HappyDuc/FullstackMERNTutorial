import { Link } from "react-router";
import DisplayImage from "./DisplayImage";

const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8">
            {/* image */}
            <div className="md:hidden xl:block xl:w-1/3">
                <DisplayImage
                    src="postImg.jpeg"
                    className="rounded-2xl object-cover"
                    w="735" // Maximum image size, the size of image that can fit in the small screen space (767) minus the padding either side (16+16)
                />
            </div>
            {/* details */}
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to="/test" className="text-4xl font-semibold">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Written by</span>
                    <Link className="text-blue-800">John Doe</Link>
                    <span>on</span>
                    <Link className="text-blue-800">Web Deisgn</Link>
                    <span>2 days ago</span>
                </div>
                <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident ea recusandae magnam odio labore ratione quis quae reprehenderit totam. Alias suscipit hic dolore itaque aspernatur dolorem tenetur ipsa ea sint.</p>
                <Link to="/test" className="underline text-blue=800 text-sm">Read More</Link>
            </div>
        </div>
    );
};

export default PostListItem;
