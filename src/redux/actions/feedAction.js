import { BOOKMARK_FEED, UNBOOKMARK_FEED, FETCH_FEED, ADD_FEED_URL, REMOVE_FEED_URL, ADD_LOCAL_FEED, REMOVE_LOCAL_FEED } from "../actions/types";

export const bookmarkFeedAction = feedId => dispatch => {
  dispatch({ type: BOOKMARK_FEED, payload: { feedId: feedId } });
};

export const unbookmarkFeedAction = feedId => dispatch => {
  dispatch({ type: UNBOOKMARK_FEED, payload: { feedId: feedId } });
};

export const fetchFeedAction = feeds => dispatch => {
  dispatch({ type: FETCH_FEED, payload: { feeds: { ...feeds } } });
};

export const addFeedUrlAction = feedUrl => dispatch => {
  dispatch({ type: ADD_FEED_URL, payload: { feedUrl: feedUrl } });
};

export const removeFeedUrlAction = feedUrl => dispatch => {
  dispatch({ type: REMOVE_FEED_URL, payload: { feedUrl: feedUrl } });
};

export const addLocalFeedAction = feeds => dispatch => {
  dispatch({ type: ADD_LOCAL_FEED, payload: { feeds } });
};

export const removeLocalFeedAction = _ => dispatch => {
  dispatch({ type: REMOVE_LOCAL_FEED, payload: {} });
};
