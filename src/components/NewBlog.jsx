import { useState } from "react";
import getDateMonDDYYYY from "../utils/getDateMonDDYYYY";
import createBlog from "../utils/createBlog";
import accessUserDetails from "../utils/accessUserDetails";

const NewBlog = () => {
  const [blogTitle, setBlogTitle] = useState("Title your blog");
  const [blogContent, setBlogContent] = useState("Write your blog here");
  const userDetails = accessUserDetails();

  return (
    <div className="p-8">
      <div className="flex ">
        <div>
          <input
            className="text-6xl m-2 px-2 border-2 rounded-md border-grey focus:outline-none"
            type="text"
            id="title"
            value={blogTitle}
            onChange={(e) => {
              setBlogTitle(e.target.value);
            }}
          />
        </div>
        <div className="m-2 relative">
          <div className="static bottom-0 left-0 text-2xl">
            <h1>{getDateMonDDYYYY(Date().toString())}</h1>
          </div>
        </div>
      </div>
      <div className="m-2">
        <textarea
          className="w-full h-96 border-2 rounded-lg border-gray-200 focus:outline-none"
          id="blogContent"
          value={blogContent}
          onChange={(e) => {
            setBlogContent(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="m-2">
        <button
          className="px-2 border-2 rounded-md border-black focus:outline-none"
          onClick={async () => {
            await createBlog(userDetails.user_id, blogTitle, blogContent);
            window.location.href = "/";
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewBlog;
