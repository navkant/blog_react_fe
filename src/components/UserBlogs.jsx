import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

const UserBlogs = () => {
  const [listBlogs, setListOfBlogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const access_token = localStorage.getItem("token");
    console.log(localStorage.getItem("token"));
    const data = await fetch("http://127.0.0.1:8000/blogs/user/", {
      headers: { Authorization: "Bearer " + access_token },
    });
    const json = await data.json();
    setListOfBlogs(json.items);
  };

  if (localStorage.getItem("token")) {
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
