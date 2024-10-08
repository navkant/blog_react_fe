import { Link } from "react-router-dom";
import accessUserDetails from "../utils/accessUserDetails";
import accessAuthToken from "../utils/accessAuthToken";
import getDateMonDDYYYY from "../utils/getDateMonDDYYYY";

const BlogCard = (props) => {
  var accessToken = accessAuthToken();

  let dateMDY = getDateMonDDYYYY(props.blogData.created);

  if (props.blogData.is_latest) {
    return (
      <div className="flex justify-between m-auto my-5 w-3/4 h-80 bg-gray-100 hover:bg-gray-200 rounded-3xl">
        <div className="flex flex-col justify-between m-4">
          <div className="flex flex-col">
            <div className="w-16 px-2 bg-black text-white rounded-md">
              <label htmlFor="">Latest</label>
            </div>
            <div className=" m-1">
              <Link key={props.blogData.id} to={"/blogs/" + props.blogData.id}>
                <h1 className="text-4xl">{props.blogData.title}</h1>
              </Link>
            </div>
            <div className="m-1">
              <h3>{dateMDY}</h3>
            </div>

            <div className="m-1">
              <h3>{props.blogData.author_name}</h3>
            </div>
          </div>
          <div className="flex">
            <div>
              <h1>{props.blogData.content.slice(0, 100)}</h1>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-end m-2">
            {accessToken &&
            accessUserDetails().user_id === props.blogData.author_id ? (
              <div className="m-2 p-1 rounded-2xl bg-gray-300 hover:bg-gray-400">
                <Link to="/editor" state={props.blogData}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </Link>
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div className="p-4 m-4">
            <img className="" src={props.blogData.image_url} alt="" />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex ">
        <div className="flex justify-between m-auto my-5 w-3/4 h-80 bg-gray-100 hover:bg-gray-200 rounded-3xl">
          <div className="flex flex-col justify-between m-4">
            <div className="flex flex-col">
              <div className=" m-1">
                <Link
                  key={props.blogData.id}
                  to={"/blogs/" + props.blogData.id}
                >
                  <h1 className="text-4xl">{props.blogData.title}</h1>
                </Link>
              </div>
              <div className="m-1">
                <h3>{dateMDY}</h3>
              </div>

              <div className="m-1">
                <h3>{props.blogData.author_name}</h3>
              </div>
            </div>
            <div className="flex">
              <div>
                <h1>{props.blogData.content.slice(0, 100)}</h1>
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-end m-2">
              {accessToken &&
              accessUserDetails().user_id === props.blogData.author_id ? (
                <div className="m-2 p-1 rounded-2xl bg-gray-300 hover:bg-gray-400">
                  <Link to="/editor" state={props.blogData}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                      />
                    </svg>
                  </Link>
                </div>
              ) : (
                <div></div>
              )}
            </div>

            <div className="p-4 m-4">
              <img className="" src={props.blogData.image_url} alt="" />
            </div>
          </div>
        </div>
      </div>
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
