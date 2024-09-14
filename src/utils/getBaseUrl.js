import { LOCAL_URL, DEV_URL } from "./constants";

const getBaseUrl = () => {
  if (process.env.RUNNING_ENV === "local") {
    return LOCAL_URL;
  } else {
    return DEV_URL;
  }
};

export default getBaseUrl;
