import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import AlbumCard from "../AlbumCard/AlbumCard";
<<<<<<< HEAD
// import Grid from "../Grid/Grid";
import Grid from "../grid/Grid";
=======
import Grid from "../Grid/Grid";
>>>>>>> 4ebb67960c40085aaa962f263308181885b66846

const TopAlbums = ({ albums }) => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <section>
      <div className="section-header">
        <h3>Top Albums</h3>

        <button onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? "Show All" : "Collapse"}
        </button>
      </div>

      {collapsed ? (
        <Carousel
          items={albums}
          renderItem={(album) => <AlbumCard album={album} />}
        />
      ) : (
        <Grid items={albums} />
      )}
    </section>
  );
};

export default TopAlbums;
