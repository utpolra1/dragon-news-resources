import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import RightSite from "./Layout/RightSite";
import Hooks from "../Hooks/Hooks";

const NewsDetails = () => {
  const { data, loading } = Hooks();

  const { id } = useParams();
  const [datas, setData] = useState(null);

  useEffect(() => {
    if (data) {
      const singleData = data.find((item) => item.id === id);
      setData(singleData);
    }
  }, [data, id]);

  return (
    <div>
      <Navbar />
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          {datas && (
            <>
              <div className="card glass">
                <figure>
                  <img
                  src={datas.image_url}
                    alt="car!"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{datas.title}</h2>
                  <p>{datas.details}</p>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="">
          <RightSite />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
