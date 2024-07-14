import { useParams } from "react-router";
import getBlogContent from "../utils/getBlogContent";

const BlogContent = () => {
  const params = useParams();
  const blogContent = getBlogContent(params.blogId);
  let date = new Date(blogContent.created);
  let dateMDY = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  return (
    <div className="flex justify-center">
      <div className="m-5 px-64">
        <div className="p-10 bg-gray-100 rounded-3xl ">
          <h1 className="text-4xl">{blogContent.title}</h1>
          <br />
          <h2>{dateMDY}</h2>
          <br />
          <h5>{blogContent.content}</h5>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
