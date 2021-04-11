import { bookmarkFeedAction, unbookmarkFeedAction, fetchFeedAction, addFeedUrlAction, removeFeedUrlAction } from "../actions/feedAction";
import { store } from "../store";
import { parseXmlToJSON } from "../../tools/methods";
import fetchFeedXml from "../../api";
export const addFeedUrl = (type, payload) => store.dispatch(addFeedUrlAction(type, payload));
export const removeFeedUrl = (type, payload) => store.dispatch(removeFeedUrlAction(type, payload));

export const fetchFeeds = (urls = []) => {
  if (urls.length > 0) {
    const response = {};
    [...urls].forEach(url => {
      fetchFeedXml(url)
        .then(res => {
          let temp = null;

          if (res && res.data) {
            temp = parseXmlToJSON(res.data);
          }
          temp.rss.channel.item.map(item => {
            Object.assign(response, { [item.guid]: { image: temp.rss.channel.image, ...item } });
            return null;
          });
          if (Object.keys(response).length > 0) {
            store.dispatch(fetchFeedAction(response));
          }
        })
        .catch(err => {});
    });
  }
};

export const toggleBookmark = (feedId, action) => {
  return action ? store.dispatch(bookmarkFeedAction(feedId)) : store.dispatch(unbookmarkFeedAction(feedId));
};
