import { useOutletContext } from "react-router-dom";
import HeroComponent from "../../components/Hero/HeroComponent";
import Section from "../../components/Section/Section";
import CardComponent from "../../components/card/card";

const HomePage = () => {
  const { data } = useOutletContext();
  // console.log("data fro home", data);

  const { topAlbums, newAlbums, songs } = data;
  return (
    <div>
      <HeroComponent />
      <Section title="Top Albums" data={topAlbums} type="album" />
      <Section title="New Albums" data={newAlbums} type="album" />
      {/* <Section title="Songs" data={songs} type="songs" /> */}
    </div>
  );
};

export default HomePage;
