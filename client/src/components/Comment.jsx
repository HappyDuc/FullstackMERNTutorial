import { format } from "timeago.js";
import DisplayImage from "./DisplayImage";

const Comment = ({ comment }) => {
    return (
        <div className="p-4 bg-slate-50 rounded-xl">
            <div className="flex items-center gap-4">
                {comment.user.img && (
                    <DisplayImage
                        src={comment.user.img}
                        className="w-10 h-10 rounded-full object-cover"
                        w="40"
                    />
                )}
                <span className="text-medium">{comment.user.username}</span>
                <span className="text-sm text-gray-500">{format(comment.createdAt)}</span>
            </div>
            <div className="mt-4">
                <p>
                    {comment.desc}
                </p>
            </div>
        </div>
    );
};

export default Comment;
