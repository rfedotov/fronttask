import React from "react";
import { connect } from "react-redux";

const Thumb = ({ thumb }) => (
  <div className="thumb-item">
    <img src={thumb.url} width="320" height="240" alt="lorem"/>
    <span>{thumb.filename}</span>
  </div>
);

// export default Todo;
export default connect(
    null
  )(Thumb);
