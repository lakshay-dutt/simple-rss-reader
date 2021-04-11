import {
  bookmarkFeedAction,
  unbookmarkFeedAction,
  fetchFeedAction,
  addFeedUrlAction,
  removeFeedUrlAction,
  addLocalFeedAction,
  removeLocalFeedAction,
} from "../actions/feedAction";
import { store } from "../store";
import { parseXmlToJSON } from "../../tools/methods";
import fetchFeedXml from "../../api";
export const addFeedUrl = (url) => {
  store.dispatch(addFeedUrlAction(url));
}
export const removeFeedUrl = (type, payload) => store.dispatch(removeFeedUrlAction(type, payload));

export const fetchFeeds = (urls = []) => {
  if (urls.length > 0) {
    const response = {};
    [...urls].forEach(url => {
      fetchFeedXml(url)
        .then(async res => {
          let temp = null;

          if (res && res.data) {
            temp = await parseXmlToJSON(res.data);
          }
          temp.rss.channel.item.map(item => {
            Object.assign(response, { [item.guid]: { image: temp.rss.channel.image, ...item } });
            return null;
          });
          if (Object.keys(response).length > 0) {
            store.dispatch(fetchFeedAction(response));
          }
        })
        .catch(err => {
        });
    });
  }
};

export const toggleBookmark = (feedId, action) => {
  return action ? store.dispatch(bookmarkFeedAction(feedId)) : store.dispatch(unbookmarkFeedAction(feedId));
};

export const addLocalFeeds = feeds => {
  store.dispatch(addLocalFeedAction(feeds));
};

export const removeLocalFeeds = () => {
  localStorage.clear();
  store.dispatch(removeLocalFeedAction());
  window.location = "/";
};
