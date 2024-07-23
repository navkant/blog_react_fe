import { useLocation } from "react-router";
import { useState } from "react";
import getDateMonDDYYYY from "../utils/getDateMonDDYYYY";

const Editor = () => {
  const location = useLocation();
  const data = location.state;
  const [blogContent, setBlogContent] = useState(data.content);

  return (
    <div className="p-8">
      <div className="text-2xl m-2">
        <strong>{data.title}</strong>
      </div>
      <div className="m-2">{getDateMonDDYYYY(data.created)}</div>
      <div className="m-2">
        <textarea
          className="w-full h-96 border-2 rounded-lg border-black focus:outline-none"
          id="blogContent"
          value={blogContent}
          onChange={(e) => {
            setBlogContent(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
};

export default Editor;
