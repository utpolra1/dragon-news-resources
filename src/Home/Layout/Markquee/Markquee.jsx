import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Markquee = () => {
  return (
    <div className="flex mb-5">
      <div>
        <button className="btn bg-red-600 w-32">Latest Post</button>
      </div>
      <Marquee>
        <Link> I can be a React component, multiple React components, or just some
        text.</Link>
      </Marquee>
    </div>
  );
};

export default Markquee;
