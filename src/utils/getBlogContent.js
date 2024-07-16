import { useEffect, useState } from "react";
import refreshAuthTOken from "./refresh_auth_token";

const getBlogContent = (blog_id) => {
  const [blogContent, setBlogContent] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const access_token = localStorage.getItem("token");
    const data = await fetch("http://127.0.0.1:8000/blogs/" + blog_id + "/", {
      headers: { Authorization: "Bearer " + access_token },
    });
    if (data.status === 200) {
      const json = await data.json();
      console.log(json);
      setBlogContent(json);
    } else {
      refreshAuthTOken();
      const data = await fetch("http://127.0.0.1:8000/blogs/" + blog_id + "/", {
        headers: { Authorization: "Bearer " + access_token },
      });
      const json = await data.json();
      console.log(json);
      setBlogContent(json);
    }
  };
  return blogContent;
};

export default getBlogContent;
