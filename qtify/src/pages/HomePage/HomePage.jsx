import { useOutletContext } from "react-router-dom";
import HeroComponent from "../../components/Hero/HeroComponent";
import Section from "../../components/Section/Section";
import CardComponent from "../../components/card/card";

const HomePage = () => {
  const { data } = useOutletContext();
  // console.log("data fro home", data);

  const { topAlbums, newAlbums, songs, genres } = data;
  return (
    <div>
      <HeroComponent />
      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />
      <div
        style={{
          backgroundColor: "var(--color-primary)",
          width: "100%",
          height: "2px",
          marginTop: "20px",
        }}
      ></div>
      <Section title="Songs" data={songs} type="songs" genres={genres} />
    </div>
  );
};

export default HomePage;
