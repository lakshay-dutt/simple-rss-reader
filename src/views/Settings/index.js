import React, { Fragment, useState } from "react";
import withLayout from "../../layout/default";
import { parseXmlToJSON } from "../../tools/methods";
import { SettingsIcon, FileUploadIcon } from "../../assets/svg";
import { connect } from "react-redux";
import { addLocalFeeds, removeLocalFeeds, addFeedUrl } from "../../redux/helpers";
import { withRouter } from "react-router-dom";
const Settings = ({ feed, history }) => {


  const onFileSelect = e => {
    const data = e.currentTarget.files[0];
    var reader = new FileReader();
    const response = {};
    reader.readAsText(data, "UTF-8");
    reader.onload = async function (evt) {
      let result = await parseXmlToJSON(evt.target.result);
      result = ((result || {} || {}).rss || {}).channel || {};
      [...result.item].forEach(item => {
        const temp = { [item.guid]: { ...item, image: result.image } };
        Object.assign(response, temp);
      });
      addLocalFeeds(response);
      localStorage.setItem("localRssFeeds", JSON.stringify(response));
      history.push("/");
    };
  };

  const [urlSrc, setUrlSrc] = useState("");

  const pushNewUrl = () => {
    var expression = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if (urlSrc.match(regex)) {
      addFeedUrl(urlSrc);
    }
  };

  return (
    <Fragment>
      <div className="">
        <div className="container my-4 text-center">
          <h2 className="text-4xl font-bold">Settings</h2>
        </div>
        <div className="container mx-auto px-32 mt-24">
          <div className="flex justify-between">
            <div className="relative inline-block mr-12 xl:mr-0 w-1/2">
              <SettingsIcon className="absolute text-purple-700 fill-current search-icon cursor-pointer" onClick={pushNewUrl} />
              <input
                className="appearance-none rounded-full shadow-lg w-full py-4 px-6 pr-16 text-xl text-gray-700 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Add URL"
                onChange={e => setUrlSrc(e.target.value)}
                value={urlSrc}
              />
            </div>
            <label className="rounded-full bg-purple-700 text-white text-xl rounded-1xl h-20 w-56 shadow-lg cursor-pointer" htmlFor="select-file">
              <span className="upload-button py-6">
                Upload File &nbsp;
                <FileUploadIcon className="text-white fill-current" />
              </span>
            </label>
            <input type="file" className="hidden" id="select-file" accept=".rss,.xml" onChange={onFileSelect} />
            <div
              className="rounded-full bg-purple-700 text-white text-xl rounded-1xl h-20 w-56 shadow-lg cursor-pointer"
              htmlFor="select-file"
              onClick={removeLocalFeeds}
            >
              <span className="upload-button py-6">Clear Feeds</span>
            </div>
          </div>

          {feed && feed.urls && [...feed.urls].length > 0 && (
            <div className="w-full mt-24">
              <div className="block w-full">
                <h4>Registered Feed Sources</h4>
              </div>
              <div className="mb-8 w-full block">
                <ul className="list-inside bg-rose-200 list-disc">
                  {[...feed.urls].map(function (item, i) {
                    return (
                      <li className="text-lg text-indigo-900 cursor-pointer" key={i} title="Click to delete" onClick={() => null}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

function mapStateToProps(state) {
  const { feed = {} } = state;
  return { feed };
}
const Temp = withLayout(Settings);
export default connect(mapStateToProps, {})(withRouter(Temp));
