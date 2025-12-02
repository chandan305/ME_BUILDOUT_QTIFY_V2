import Section from "../Section/Section";
import { fetchTopAlbums, fetchNewAlbums } from "../../api/api";

export default function HomePage() {
  return (
    <>
      <Section title="Top Albums" fetchData={fetchTopAlbums} />
      <Section title="New Albums" fetchData={fetchNewAlbums} />
    </>
  );
}
