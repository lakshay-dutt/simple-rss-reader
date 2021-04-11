import React, { Fragment, useEffect, useState } from "react";
import DOMPurify from "dompurify";
import withLayout from "../../layout/default";
import { withRouter } from "react-router-dom";
import { get } from "../../tools/methods";
import { connect } from "react-redux";
import Spinner from "../../components/Spinner";
import "./style.css";
const DetailPage = props => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let id = get(props, "match.params.id", null);
    try {
      id = atob(id);
    } catch (e) {
      id = null;
      setError("Wrong path");
    }
    if (id) {
      const temp = (props.feed || {}).feeds || {};
      const selectedFeed = temp[id];
      if (selectedFeed["content:encoded"]) setData(selectedFeed);
      else {
        setError("No Content");
      }
    }
    setLoading(false);
    return () => null;
  }, [props]);

  if (loading) return <Spinner />;

  if (error) {
    return (
      <Fragment>
        <div className="mx-auto mt-32 text-center ">
          <h2 className="text-3xl font-semibold">{error}</h2>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <div className="mx-auto mt-6">
        <div className="flex flex-wrap -mx-2 mb-8 border-2">
          <div className="text-center" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data["content:encoded"]) }} />
        </div>
      </div>
    </Fragment>
  );
};

const Temp = withLayout(DetailPage);

function mapStateToProps(state) {
  const { feed = {} } = state;
  return { feed };
}

export default connect(mapStateToProps, {})(withRouter(Temp));
