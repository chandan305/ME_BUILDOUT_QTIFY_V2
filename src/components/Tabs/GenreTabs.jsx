import { Tabs, Tab } from "@mui/material";
import "./GenreTabs.css";

function GenreTabs({ genres, selected, onChange }) {
  return (
    <Tabs
      value={selected}
      onChange={(e, val) => onChange(val)}
      variant="scrollable"
      scrollButtons={false}
      className="genre-tabs"
    >
      <Tab label="All" value="All" />
      {genres.map(g => (
        <Tab label={g.label} value={g.key} key={g.key} />
      ))}
    </Tabs>
  );
}

export default GenreTabs;
