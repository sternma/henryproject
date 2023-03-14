import { FETCH_AT_DATE, CREATE } from "../constants/actionTypes";

export default (posts=[], action) => {
    switch (action.type) {
        case FETCH_AT_DATE:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default:
            return posts;
    }
}