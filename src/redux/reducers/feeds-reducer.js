import { BOOKMARK_FEED, UNBOOKMARK_FEED, FETCH_FEED, ADD_FEED_URL, REMOVE_FEED_URL, ADD_LOCAL_FEED, REMOVE_LOCAL_FEED } from "../actions/types";
import initialState from '../store/state';

function feedReducer(state = initialState, action) {
  switch (action.type) {
    case BOOKMARK_FEED:
      return state;
    case UNBOOKMARK_FEED:
      return state;
    case FETCH_FEED:
      return state;
    case ADD_FEED_URL:
      return state;
    case REMOVE_FEED_URL:
      return state;
    case ADD_LOCAL_FEED:
      return state;
    case REMOVE_LOCAL_FEED:
      return state;
    default:
      return state;
  }
}
export default feedReducer;
