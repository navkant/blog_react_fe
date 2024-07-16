const BlogCard = (props) => {
  let date = new Date(props.blogData.created);
  let dateMDY = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

  if (props.blogData.is_latest) {
    return (
      <div className="flex m-8 p-2 h-96 justify-between bg-gray-100 hover:bg-gray-200 rounded-3xl ">
        <label className="absolute bg-black text-white m-1 p-1 rounded-lg ">
          Latest
        </label>

        <div className="px-5 py-6">
          <div className="my-2">
            <h1 className="text-4xl">{props.blogData.title}</h1>
          </div>
          <h3>{dateMDY}</h3>

          <div className="mt-56">
            <h3>Author</h3>
          </div>
        </div>

        <div className="flex items-center pr-10">
          <img
            className="w-40 "
            src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg"
            alt=""
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex m-8 p-2 h-96 justify-between bg-gray-100 hover:bg-gray-200 rounded-3xl ">
        <div className="px-5 py-6">
          <h1 className="text-4xl">{props.blogData.title}</h1>
          <h3>{dateMDY}</h3>
          <div className="mt-56">
            <h3>{props.blogData.author_name}</h3>
          </div>
        </div>
        <div className="flex items-center pr-10">
          <img
            className="w-40 "
            src="https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg"
            alt=""
          />
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
