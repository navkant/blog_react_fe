import { useParams } from "react-router";
import getBlogContent from "../utils/getBlogContent";
import accessAuthToken from "../utils/accessAuthToken";

const BlogContent = () => {
  var hash_map = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };
  const params = useParams();

  if (accessAuthToken()) {
    const blogContent = getBlogContent(params.blogId);
    let date = new Date(blogContent.created);

    let dateMDY = `${
      hash_map[date.getMonth() + 1]
    } ${date.getDate()}, ${date.getFullYear()}`;
    return (
      <div className="flex justify-center">
        <div className="m-5 px-64">
          <div className="p-10 bg-gray-100 w-auto rounded-3xl ">
            <h1 className="text-4xl">{blogContent.title}</h1>
            <br />
            <div className="flex">
              <h2 className="m-1 p-1">{dateMDY}</h2>
              <h2 className="m-1 p-1">
                <strong>{blogContent.author_name}</strong>
              </h2>
            </div>
            <br />
            <h5>{blogContent.content}</h5>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center">
        <div className="m-5 px-64">
          <div className="p-10 bg-gray-100 w-auto rounded-3xl ">
            <h1 className="text-4xl">Please login to read full blog.</h1>
          </div>
        </div>
      </div>
    );
  }
};

export default BlogContent;
