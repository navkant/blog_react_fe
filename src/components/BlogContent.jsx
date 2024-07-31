import { useParams } from "react-router";
import getBlogContent from "../utils/getBlogContent";
import accessAuthToken from "../utils/accessAuthToken";
import getDateMonDDYYYY from "../utils/getDateMonDDYYYY";

const BlogContent = () => {
  const params = useParams();

  if (accessAuthToken()) {
    const blogContent = getBlogContent(params.blogId);
    let dateMDY = getDateMonDDYYYY(blogContent.created);

    return (
      <div className="mx-40 my-5 bg-gray-100 hover:bg-gray-200 rounded-3xl">
        <div className="p-5">
          <h1 className="text-4xl">{blogContent.title}</h1>
        </div>
        <div className="flex flex-wrap px-5">
          <div>
            <h2 className="mr-2">{dateMDY + " |"}</h2>
          </div>
          <div>
            <h2 className="">
              <strong>{blogContent.author_name}</strong>
            </h2>
          </div>
        </div>

        <div className="p-5">
          <h5>{blogContent.content}</h5>
        </div>
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

export default BlogContent;
