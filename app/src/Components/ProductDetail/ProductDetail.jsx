import React from "react";
import { NavLink } from "react-router-dom";

const ProductDetail = ({ routes }) => {
  const activeStyle = "underline underline-offset-4";
  return (
    <div
      className="divide-y divide-dashed flex flex-col m-8 rounded-lg"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
    >
      {routes.map((data, i) => (
        <div className="p-8 flex justify-center w-96 hover:bg-slate-50 hover:decoration-1 hover:underline">
          <NavLink
            to={data.link}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            {data.title}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default ProductDetail;
