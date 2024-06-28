const Card = () => {
  return (
    <div className="flex m-8 p-2 h-96 justify-between bg-gray-100 hover:bg-gray-200 rounded-3xl ">
      <div className="px-5 py-6">
        <h1 className="text-4xl">Blog Title</h1>
        <h3>Blog Date</h3>
        <h3 className="mt-56">Blog Author</h3>
        <h3>Blog Content</h3>
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
};

export default Card;
