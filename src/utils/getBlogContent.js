import { useEffect, useState } from "react";
import refreshAuthTOken from "./refresh_auth_token";
import getBaseUrl from "./getBaseUrl";

const getBlogContent = (blog_id) => {
  const [blogContent, setBlogContent] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const access_token = localStorage.getItem("token");
    const data = await fetch(getBaseUrl() + "/blogs/" + blog_id + "/", {
      headers: { Authorization: "Bearer " + access_token },
    });
    if (data.status === 200) {
      const json = await data.json();
      console.log(json);
      setBlogContent(json);
    } else {
      refreshAuthTOken();
      const data = await fetch(getBaseUrl() + "/blogs/" + blog_id + "/", {
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
