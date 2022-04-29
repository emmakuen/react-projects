import React from "react";
import "./contributorImages.css";
import {
  getContributorImagesByIds,
  getContributorNamesByIds,
} from "../../helpers/dataHelpers";

export default function ContributorImages({ ids }) {
  const imgs = getContributorImagesByIds(ids);
  const assigneeNames = getContributorNamesByIds(ids);
  return (
    <div className="contributor-imgs">
      {imgs.map((imgUrl, idx) => (
        <img src={imgUrl} alt={assigneeNames[idx]} key={ids[idx]} />
      ))}
    </div>
  );
}
