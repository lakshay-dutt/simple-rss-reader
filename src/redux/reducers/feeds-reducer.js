import { BOOKMARK_FEED, UNBOOKMARK_FEED, FETCH_FEED, ADD_FEED_URL, REMOVE_FEED_URL, ADD_LOCAL_FEED, REMOVE_LOCAL_FEED } from "../actions/types";
import initialState from "../store/state";

function feedReducer(state = initialState, action) {
  let feedId, selectedFeed, feeds;
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
      const localFeeds = JSON.parse(localStorage.getItem("localRssFeeds") || "{}");
      return { ...state, feeds: { ...action.payload.feeds, ...localFeeds } };
    case ADD_FEED_URL:
      let feedUrl = action.payload.feedUrl;
      return [...state.urls].indexOf(feedUrl) > -1 ? { ...state } : { ...state, urls: [...state.urls, action.payload.feedUrl] };
    case REMOVE_FEED_URL:
      return state;
    case ADD_LOCAL_FEED:
      feeds = action.payload.feeds;
      return { ...state, feeds: { ...state.feeds, ...feeds } };
    case REMOVE_LOCAL_FEED:
      return initialState;
    default:
      return state;
  }
}
export default feedReducer;
