import React from "react";
import Avatar from "../images/Imagem.png";

export default function Skeleton({ type, key }) {
  const COUNTER = 18;
  const FeedSkeleton = () => (
    <div key={key} className="peopleData">
      <div className="peopleImageeSk">
        <img src={Avatar} alt="" className="peopleImgSk" />
      </div>
      <div className="peopleTiltleSk"></div>
      <div className="peopleStateSk"></div>
      <div className="peopleStateSk"></div>
    </div>
  );

  if (type === "feed") return Array(COUNTER).fill(<FeedSkeleton />);
}
