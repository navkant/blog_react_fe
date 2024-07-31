import { useEffect, useState } from "react";

import getBaseUrl from "./getBaseUrl";
import accessAuthToken from "./accessAuthToken";

const updateBlogContent = async (blog_id, blog_content) => {
  //   const [blogContent, setBlogContent] = useState({});

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const access_token = accessAuthToken();
  const data = await fetch(getBaseUrl() + "/v2/blogs/" + blog_id + "/", {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + access_token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: blog_content }),
  });
  const json = await data.json();
  //   setBlogContent(json);
  return json;
};

export default updateBlogContent;
