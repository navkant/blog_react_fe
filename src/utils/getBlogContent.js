import { useEffect, useState } from "react";

import getBaseUrl from "./getBaseUrl";
import accessAuthToken from "./accessAuthToken";

const getBlogContent = (blog_id) => {
  const [blogContent, setBlogContent] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const access_token = accessAuthToken();
    console.log("accesss_token: ", access_token);
    const data = await fetch(getBaseUrl() + "/blogs/" + blog_id + "/", {
      headers: { Authorization: "Bearer " + access_token },
    });
    const json = await data.json();
    setBlogContent(json);
  };
  return blogContent;
};

export default getBlogContent;
