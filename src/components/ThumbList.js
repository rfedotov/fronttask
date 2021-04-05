import React from "react";
import { connect } from "react-redux";
import Thumb from "./Thumb";

const ThumbList = ({ thumbs }) => (
  <div className="thumbs-list">
    {thumbs && thumbs.length
      ? thumbs.map((thumb, index) => {
          return <Thumb key={thumb.ts} thumb={thumb} />;
        })
      : "No thumbs, yay!"}
  </div>
);

const mapStateToProps = (state) => ({ thumbs: state.thumbs })
export default connect(mapStateToProps)(ThumbList);