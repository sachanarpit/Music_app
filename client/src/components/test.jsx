import { Navbar } from "./comman/Navbar";
import { Home } from "./Home";
import { ArtistCard } from "./utils/Card_Artist";

export const TestComp = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <ArtistCard />
    </div>
  );
};
