import React, { Fragment } from "react";
const NewsCard = ({ data }) => {
  return (
    <Fragment>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto my-8">
        <div
          className="bg-cover bg-center h-56 p-4"
          style={{
            backgroundImage:
              "url(https://cdn-images-1.medium.com/proxy/1*TGH72Nnw24QL3iV9IOm4VA.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-end">
            <svg
              className="h-6 w-6 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
            </svg>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data.title}</div>
          <p className="text-gray-600 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 py-4">
          {data.category &&
            data.category.length > 0 &&
            data.category.map((category) => (
              <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">
                #{category}
              </span>
            ))}
        </div>
        <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
          <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">
            Creator
          </div>
          <p className="font-bold text-gray-900">{data["dc:creator"]}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default NewsCard;
