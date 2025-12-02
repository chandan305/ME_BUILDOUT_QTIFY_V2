import React from "react";
import Card from "../Card/Card";

const AlbumCard = ({ album }) => {
  if (!album) return null; // 🔥 prevent crash if album missing

  return <Card album={album} />;
};

export default AlbumCard;
