import { Link } from "react-router-dom";

import BlogCard, { withLatestLabel } from "./BlogCard";
import { useState, useEffect } from "react";

const BlogCardLatest = withLatestLabel(BlogCard);

const Body = () => {
  const [listBlogs, setListOfBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://127.0.0.1:8000/blogs/");
    const json = await data.json();
    setListOfBlogs(json.items);
  };

  return (
    <div className="justify-center px-96 m-2">
      {listBlogs.map((blog) => (
        <Link key={blog.id} to={"/blogs/" + blog.id}>
          <BlogCard blogData={blog} />
        </Link>
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
