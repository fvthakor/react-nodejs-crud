import axios from "axios";

export default axios.create({
    baseURL: "https://react-crud-fv.herokuapp.com/api",
    headers: {
      "Content-type": "application/json"
    }
});