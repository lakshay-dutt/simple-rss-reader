import React, { Fragment, useState } from "react";
import { Fb, Whatsapp, Email, LinkedIn, Twitter } from "../../assets/svg";
const NewsCard = ({ data }) => {
  const [bookmark, setBookmark] = useState(false);
  const handleClick = link => () => {
    window.open(link, "_blank");
  };

  const handleSocialClick = socialProfile => {
    let link = "";
    switch (socialProfile) {
      case "fb":
        link = `https://www.facebook.com/sharer.php?caption=${data.title}&description=${data.description}&u=${data.link}&picture=${data.urlToImage}`;
        break;
      case "email":
        link = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(data.link)}&title=${data.title}&summary=${data.description}`;
        break;
      case "whatsapp":
        link = `https://api.whatsapp.com/send?text=${encodeURIComponent(data.link)}`;
        break;
      default:
        break;
    }
    if (link) {
      window.open(link, "_blank");
    }
  };

  const icons = [
    {
      Component: Fb,
      className: "fill-current text-blue-600",
      handler: () => handleSocialClick("fb"),
    },
    {
      Component: Whatsapp,
      className: "fill-current text-green-600",
      handler: () => handleSocialClick("whatsapp"),
    },
    {
      Component: Twitter,
      className: "fill-current text-blue-600",
      handler: () => handleSocialClick("twitter"),
    },
    {
      Component: Email,
      className: "fill-current text-red-600",
      handler: () => handleSocialClick("email"),
    },
    {
      Component: LinkedIn,
      className: "fill-current text-blue-600",
      handler: () => handleSocialClick("linkedin"),
    },
  ];
  return (
    <Fragment>
      <div className="min-w-full min-h-full max-h-full max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto my-8 news-card bg-white">
        <div
          className="bg-cover bg-center h-56 p-4"
          style={{
            backgroundImage: `url(${data.urlToImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="flex justify-end">
            <svg
              className={`h-6 w-6 ${bookmark ? "text-red-500" : "text-black"} fill-current cursor-pointer`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setBookmark(!bookmark)}
            >
              <path d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"></path>
            </svg>
          </div>
        </div>
        <div className="px-6 py-4 cursor-pointer" onClick={handleClick(data.link)}>
          <div className="font-bold text-xl mb-2" title={data.title}>
            <span className="ellipsis">{data.title}</span>
          </div>
        </div>
        {data.category && data.category.length > 0 && Array.isArray(data.category) && (
          <div className="px-6 py-4">
            {data.category.map((category, i) => (
              <Fragment key={i}>
                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2">#{category}</span>
              </Fragment>
            ))}
          </div>
        )}
        {(data["dc:creator"] || data["itunes:author"] || data.author) && (
          <div className="px-6 pt-3 pb-4 border-t border-gray-300 bg-gray-100 flex justify-between">
            <div className="pt-2 text-sm uppercase font-bold text-gray-600 tracking-wide inline-block mr-2">Creator</div>
            <p className="pt-1 text-sm font-bold text-gray-900 inline-block">{data["dc:creator"] || data["itunes:author"] || data.author}</p>
          </div>
        )}
        <div className="flex justify-center items-center p-4 border-t border-gray-300 text-gray-600">
          {icons.map((icon, i) => (
            <Fragment key={i + icon.className}>
              <div className="flex items-center mx-3" onClick={icon.handler}>
                <icon.Component className={icon.className} />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default NewsCard;
