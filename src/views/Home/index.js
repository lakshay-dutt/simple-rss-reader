import React, { useEffect, useState, Fragment } from "react";
import NewsCard from "../../components/NewsCard/index";
import parser from "fast-xml-parser";
import { get } from "../../tools/methods";
import withLayout from "../../layout/default";
import xml from "../../xml";

const Home = () => {
  const [data, setData] = useState(null);
  const [itemsToBeLoaded, setItemsToLoaded] = useState(21);
  useEffect(() => {
    var jsonObj = parser.parse(xml);
    const t = get(jsonObj, "rss.channel", null);
    setData(t);
  }, []);

  const items = data && data.item && data.item.length > 0 ? data.item : [];

  const handleLoadMore = () => setItemsToLoaded(itemsToBeLoaded + 9);

  return (
    <Fragment>
      <div className="flex flex-wrap -mx-2 mb-8">
        {items.length > 0 &&
          items.slice(0, itemsToBeLoaded).map((item, i) => (
            <Fragment key={i}>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="flex items-center justify-center">
                  <NewsCard data={{ ...item, urlToImage: get(data, "image.url", "https://www.k-online.com/cache/pica/4/1/2/8/5/1/150081534242697/icon_rss_K_hintergrund_transparent_4-3.png") }} />
                </div>
              </div>
            </Fragment>
          ))}
      </div>
      {items.length > itemsToBeLoaded && (
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

export default withLayout(Home);
