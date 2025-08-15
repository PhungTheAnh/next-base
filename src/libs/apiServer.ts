import axios from "axios";

const createApiServer = () => {
    return axios.create({
        baseURL: process.env.NEXT_PUBLIC_API,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        timeout: 10000,
    });
};

export default createApiServer;
