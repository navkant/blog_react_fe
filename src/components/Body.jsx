import BlogCard from "./BlogCard";
import { useState, useEffect } from "react";
import getBaseUrl from "../utils/getBaseUrl";

// const BlogCardLatest = withLatestLabel(BlogCard);

const Body = () => {
  const [listBlogs, setListOfBlogs] = useState([]);

  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(getBaseUrl() + "/v2/blogs/");
    const json = await data.json();
    setListOfBlogs(json.items);
  };
  console.log("Body rendered");
  return (
    <div className="">
      <div className="flex justify-between m-auto my-5 w-3/4">
        <div
          className="px-2 border-2 rounded-md border-black focus:outline-none"
          onClick={() => {
            console.log("top rated clicked");
            setListOfBlogs(listBlogs.filter((blog) => blog.rating >= 2.5));
          }}
        >
          <button>Top Rated</button>
        </div>
      </div>

      <div>
        {listBlogs.map((blog) => (
          <BlogCard key={blog.id} blogData={blog} />
        ))}
      </div>

      {/* {listBlogs.map((blog) =>
        blog.is_latest ? (
          <BlogCardLatest key={blog.id} blogData={blog} />
        ) : (
          <BlogCard key={blog.id} blogData={blog} />
        )
      )} */}
    </div>
  );
};

export default Body;
