import axios from "axios";
import { nu_api_base_url } from "../Contants";

const getAllCodiacs = async () => {
    try {
    const response = await axios.get(`${nu_api_base_url}/codiac/registerers`, {
        // Headers
    });
    } catch (error) {
    if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
    } else {
        console.log(error);
    }
    }
};
getAllCodiacs();