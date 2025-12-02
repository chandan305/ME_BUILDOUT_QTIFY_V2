import React from "react";
import { useParams } from "react-router-dom";

const AlbumSongsPage = () => {
  const { id } = useParams();

  return <div>Album Songs Page for album id: {id}</div>;
};

export default AlbumSongsPage;
