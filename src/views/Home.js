import React, { useEffect, useState, Fragment } from "react";
import NewsCard from "../components/NewsCard";
import parser from "fast-xml-parser";
import { get } from "../tools/methods";
import xml from "../xml";
import withLayout from "../layout/default"
const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    var jsonObj = parser.parse(xml);
    const t = get(jsonObj, "rss.channel.item", []);
    setItems([...t]);
  }, []);

  return (
    <Fragment>
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-2 mb-8">
          {items &&
            items.length > 0 &&
            items.map((item) => (
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="flex items-center justify-center">
                  <NewsCard data={item} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
