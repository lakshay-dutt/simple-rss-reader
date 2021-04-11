import { BOOKMARK_FEED, UNBOOKMARK_FEED, FETCH_FEED, ADD_FEED_URL, REMOVE_FEED_URL, ADD_LOCAL_FEED, REMOVE_LOCAL_FEED } from "../actions/types";
import initialState from "../store/state";

function feedReducer(state = initialState, action) {
  let feedId, selectedFeed;
  switch (action.type) {
    case BOOKMARK_FEED:
      feedId = action.payload.feedId;
      selectedFeed = state.feeds[feedId];
      return { ...state, feeds: { ...state.feeds, [feedId]: { ...selectedFeed, bookmarked: true } } };
    case UNBOOKMARK_FEED:
      feedId = action.payload.feedId;
      selectedFeed = state.feeds[feedId];
      return { ...state, feeds: { ...state.feeds, [feedId]: { ...selectedFeed, bookmarked: false } } };
    case FETCH_FEED:
      return { ...state, feeds: action.payload.feeds };
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
