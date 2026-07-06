import DisplayImage from "./DisplayImage";

const Comment = () => {
    return (
        <div className="p-4 bg-slate-50 rounded-xl">
            <div className="flex items-center gap-4">
                <DisplayImage
                    src="userImg.jpeg"
                    className="w-10 h-10 rounded-full object-cover"
                    w="40"
                />
                <span className="text-medium">John Doe</span>
                <span className="text-sm text-gray-500">2 days ago</span>
            </div>
            <div className="mt-4">
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Fuga temporibus itaque eos consequatur magni reprehenderit
                    quaerat eius totam animi aliquam quia dolores in laborum,
                    minima delectus ipsum dicta nesciunt excepturi?
                </p>
            </div>
        </div>
    );
};

export default Comment;
