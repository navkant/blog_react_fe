import BlogCard, { withLatestLabel } from "./BlogCard_2";
import { useState, useEffect } from "react";
import getBaseUrl from "../utils/getBaseUrl";

// const BlogCardLatest = withLatestLabel(BlogCard);

const Body = () => {
  const [listBlogs, setListOfBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(getBaseUrl() + "/v2/blogs/");
    const json = await data.json();
    setListOfBlogs(json.items);
  };

  return (
    <div className="">
      {listBlogs.map((blog) => (
        <BlogCard key={blog.id} blogData={blog} />
      ))}

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
