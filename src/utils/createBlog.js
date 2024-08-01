import getBaseUrl from "./getBaseUrl";
import accessAuthToken from "./accessAuthToken";

const createBlog = async (user_id, blog_title, blog_content) => {
  const access_token = accessAuthToken();
  const data = await fetch(getBaseUrl() + "/v2/blogs/create/", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + access_token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: blog_title,
      content: blog_content,
      author_id: user_id,
    }),
  });
};

export default createBlog;
