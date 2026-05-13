import React from "react";
import Card from "../Card/Card";

const AlbumCard = ({ album }) => {
  if (!album) return null;
  if (!album) return null; 
  return <Card album={album} />;
};
export default AlbumCard;
