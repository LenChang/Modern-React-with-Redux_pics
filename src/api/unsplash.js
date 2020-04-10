import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID -RdhjBxv7liTWwTZZHgI5wdfKGtWeJT-jkQcxA8HGXw",
  },
});
