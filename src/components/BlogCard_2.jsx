import { Link } from "react-router-dom";

const BlogCard = (props) => {
  let date = new Date(props.blogData.created);
  let dateMDY = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

  if (props.blogData.is_latest) {
    return (
      <Link key={props.blogData.id} to={"/blogs/" + props.blogData.id}>
        <div className="flex justify-between mx-40 my-5 h-96 bg-gray-100 hover:bg-gray-200 rounded-3xl">
          <div className="flex flex-col justify-between m-4">
            <div className="flex flex-col">
              <div className="w-16 px-2 bg-black text-white rounded-md">
                <label htmlFor="">Latest</label>
              </div>
              <div className=" m-1">
                <h1 className="text-4xl">{props.blogData.title}</h1>
              </div>
              <div className="m-1">
                <h3>{dateMDY}</h3>
              </div>

              <div className="m-1">
                <h3>{props.blogData.author_name}</h3>
              </div>
            </div>
            <div>
              <h1>{props.blogData.content.slice(0, 100)}</h1>
            </div>
          </div>

          <div className="w-64 m-16">
            <img className="" src={props.blogData.image_url} alt="" />
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link key={props.blogData.id} to={"/blogs/" + props.blogData.id}>
        <div className="flex justify-between mx-40 my-5 h-96 bg-gray-100 hover:bg-gray-200 rounded-3xl">
          <div className="flex flex-col justify-between m-4">
            <div className="flex flex-col">
              <div className=" m-1">
                <h1 className="text-4xl">{props.blogData.title}</h1>
              </div>
              <div className="m-1">
                <h3>{dateMDY}</h3>
              </div>

              <div className="m-1">
                <h3>{props.blogData.author_name}</h3>
              </div>
            </div>
            <div>
              <h1>{props.blogData.content.slice(0, 100)}</h1>
            </div>
          </div>

          <div className="w-64 m-16">
            <img className="" src={props.blogData.image_url} alt="" />
          </div>
        </div>
      </Link>
    );
  }
};

export const withLatestLabel = (BlogCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-black text-white mx-2 px-2 rounded-lg ">
          Latest
        </label>
        <BlogCard {...props} />
      </div>
    );
  };
};

export default BlogCard;
