import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import getBaseUrl from "../utils/getBaseUrl";
import accessAuthToken from "../utils/accessAuthToken";

const UserBlogs = () => {
  const [listBlogs, setListOfBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const access_token = accessAuthToken();
    const data = await fetch(getBaseUrl() + "/blogs/user/", {
      headers: { Authorization: "Bearer " + access_token },
    });
    const json = await data.json();
    setListOfBlogs(json.items);
  };

  if (accessAuthToken()) {
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
  } else {
    return (
      <div>
        <h1>Nothing to see here. Please login first to see your blogs</h1>
      </div>
    );
  }
};

export default UserBlogs;
