import React from "react";
import "./SongCard.css";

const SongCard = ({ image, title, likes }) => {
  return (
    <div className="song-card">
      <div className="song-img-wrapper">
        <img src={image} alt={title} className="song-img" />
      </div>

      <div className="song-info">
        <p className="song-title">{title}</p>
        <p className="song-likes">{likes} Likes</p>
      </div>
    </div>
  );
};

export default SongCard;
