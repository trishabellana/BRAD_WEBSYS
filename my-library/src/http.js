import axios from "axios";
export default axios.create({
    baseURL: "http://localhost/BRAD/BRAD_WEBSYS/BRAD_app/public/api/",
    headers:{
        "Content-type": "application/json",
    },
});