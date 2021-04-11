import React, { Fragment, useState } from "react";
import withLayout from "../../layout/default";
import { removeElement } from "../../tools/methods";
import { SettingsIcon, FileUploadIcon } from "../../assets/svg";
const Settings = () => {
  const [items, setItems] = useState(["Lorem ipsum dolor sit amet, consectetur adipisicing elit", "Lorem ipsum dolor sit amet, consectetur adipisicing elit2"]);
  const handleDelete = i => {
    let temp = items;
    temp = removeElement(temp, i);
    setItems([...temp]);
  };

  const onFileSelect = e => {
    const data = e.currentTarget.files[0];
    var reader = new FileReader();
    reader.readAsText(data, "UTF-8");
    // reader.onload = function (evt) {
    //     const result = evt.target.result;
    // }
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
              <SettingsIcon className="absolute text-purple-700 fill-current search-icon" />
              <input
                className="appearance-none rounded-full shadow-lg w-full py-4 px-6 pr-16 text-xl text-gray-700 focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Add URL"
              />
            </div>
            <label className="rounded-full bg-purple-700 text-white text-xl rounded-1xl h-20 w-56 shadow-lg" htmlFor="select-file">
              <span className="upload-button py-6">
                Upload File &nbsp;
                <FileUploadIcon className="text-white fill-current" />
              </span>
            </label>
            <input type="file" className="hidden" id="select-file" accept=".rss" onChange={onFileSelect} />
          </div>

          {[...items].length > 0 && (
            <div className="w-full mt-24">
              <div className="block w-full">
                <h4>Registered Feed Sources (Click to delete source)</h4>
              </div>
              <div className="mb-8 w-full block">
                <ul className="list-inside bg-rose-200 list-disc">
                  {[...items].map(function (item, i) {
                    return (
                      <li className="text-lg text-indigo-900 cursor-pointer" key={i} title="Click to delete" onClick={() => handleDelete(i)}>
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
export default withLayout(Settings);
