import { Link } from "react-router-dom";

import BlogCard, { withLatestLabel } from "./BlogCard";
import { useState, useEffect } from "react";
import getBaseUrl from "../utils/getBaseUrl";
import refreshAuthTOken from "../utils/refresh_auth_token";

const BlogCardLatest = withLatestLabel(BlogCard);

const Body = () => {
  const [listBlogs, setListOfBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(getBaseUrl() + "/blogs/");
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
