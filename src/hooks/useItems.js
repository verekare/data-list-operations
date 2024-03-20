import axios from "axios"
import { md5 } from "js-md5";
// 'X-Auth': 'md5("Valantis_20240310")'
// if incorrect – 401 error
// address: http://api.valantis.store:40000/

// POST request – Body:
// {
    //     "action": "filter",
    //     "params": {"price": 17500.0}
    // }
// if incorrect – 400 error

const URL = 'http://api.valantis.store:40000/'
const PASSWORD = 'Valantis'
const TIMESTAMP = 20240310

export const config = axios.create({
    baseURL: URL,
    headers: {
        method: "POST",
        'X-Auth': md5(`${PASSWORD}_${TIMESTAMP}`),
        'Content-Type': 'application/json',
    },
    body: {
        'action': 'get_ids',
        'params': {'offset': 10, 'limit': 3}
    }
});

// Get IDs
// {
//   "action": "get_ids",
//   "params": {"offset": 10, "limit": 3}
// }

// if same IDs – return only the first one

export const useItems = async () => {
    try {
        const response = axios.post(config);
        console.log(response)
    } catch (error) {
        
    }
}



// METHODS / params: {}
// get_ids / offset, limit
// get_items / ids
// get_fields / field? sorted by field
// filter / field: value 