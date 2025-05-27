// import axios from "axios";
import axios from "./customize-axios";

// Tạo instance axios với cấu hình mặc định


const fetchAllUser = (page) => {
    return axios.get(`/api/users?page=${page}`);
}

const postCreateUser = (name, job) => {
    return axios.post("/api/users", { name, job })
}

export { fetchAllUser, postCreateUser };