import axios from "axios";

const apiNews = axios.create({

    baseURL: "https://6245b0fa2cfed1881725c1cf.mockapi.io/api/v1"
})

export default apiNews;