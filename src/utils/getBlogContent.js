import { useEffect, useState } from "react";

const getBlogContent = (blog_id) => {
  const [blogContent, setBlogContent] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://127.0.0.1:8000/blogs/" + blog_id + "/");
    const json = await data.json();
    console.log(json);
    setBlogContent(json);
  };
  return blogContent;
};

export default getBlogContent;
