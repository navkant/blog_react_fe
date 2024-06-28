const Header = () => {
  return (
    <div className="header flex justify-between bg-black">
      <div className="log flex justify-around m-1 p-2 ">
        <h1 className="text-6xl text-white ">TechBlog</h1>
      </div>

      <div className="menu">
        <ul className="flex m-4 p-4 text-white">
          <li className="px-2">first element</li>
          <li className="px-2">second element</li>
          <li className="px-2">third element</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
