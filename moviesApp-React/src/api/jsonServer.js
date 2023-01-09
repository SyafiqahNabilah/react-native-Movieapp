import axios from "axios";


export default axios.create({
    //Need to change each time want run
    baseURL: 'http://fed4-183-171-131-230.ngrok.io',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        // 'Retry-After': 1
      },
})