import { LOCAL_URL } from "./constants";

const getBaseUrl = () => {
  if (process.env.RUNNING_ENV === "local") {
    return LOCAL_URL;
  } else {
    return LOCAL_URL;
  }
};

export default getBaseUrl;
