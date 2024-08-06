import axios from "axios";

const getAllCodiacs = async () => {
    try {
    const response = await axios.get(`https://nu-com-0e51cf02b2c8.herokuapp.com/codiac/registerers`, {
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