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
    const data = await fetch(getBaseUrl() + "/v2/blogs/user/", {
      headers: { Authorization: "Bearer " + access_token },
    });
    const json = await data.json();
    setListOfBlogs(json.items);
  };

  if (accessAuthToken()) {
    return (
      <div className="">
        {listBlogs.map((blog) => (
          <Link key={blog.id} to={"/blogs/" + blog.id}>
            <BlogCard blogData={blog} />
          </Link>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex justify-center mx-40 my-5 bg-gray-100 hover:bg-gray-200 rounded-3xl">
        <div className="m-4">
          <h1 className="text-4xl">Please login to read full blog.</h1>
        </div>
      </div>
    );
  }
};

export default UserBlogs;
