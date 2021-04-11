import React, { useState, Fragment } from "react";
import { get } from "../../tools/methods";
import NewsCard from "../../components/NewsCard";
import withLayout from "../../layout/default";
import { connect } from "react-redux";

const Home = props => {
  const [itemsToBeLoaded, setItemsToLoaded] = useState(21);
  const handleLoadMore = () => setItemsToLoaded(itemsToBeLoaded + 9);

  const feeds = get(props, "feed.feeds", null);
  if (!feeds) {
    return <h1>No Feeds Available</h1>;
  }
  const feedGuids = Object.keys(feeds).slice(0, itemsToBeLoaded);
  return (
    <Fragment>
      <div className="flex flex-wrap -mx-2 mb-8">
        {feedGuids.length > 0 &&
          feedGuids.map((guid, i) => {
            const item = feeds[guid];
            return (
              <Fragment key={i}>
                <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                  <div className="flex items-center justify-center">
                    <NewsCard data={item} />
                  </div>
                </div>
              </Fragment>
            );
          })}
      </div>
      {itemsToBeLoaded < Object.keys(feeds).length && (
        <div className="pb-40">
          <button
            className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </Fragment>
  );
};

function mapStateToProps(state) {
  const { feed = {} } = state;
  return { feed };
}

const Temp = withLayout(Home);
export default connect(mapStateToProps, {})(Temp);
