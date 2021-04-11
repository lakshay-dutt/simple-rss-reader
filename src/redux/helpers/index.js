import { bookmarkFeedAction, unbookmarkFeedAction, fetchFeedAction, addFeedUrlAction, removeFeedUrlAction } from "../actions/feedAction";
import { store } from "../store";

export const addFeedUrl = (type, payload) => store.dispatch(addFeedUrlAction(type, payload));
export const removeFeedUrl = (type, payload) => store.dispatch(removeFeedUrlAction(type, payload));

