import { useState, useEffect } from "react";
import axios from "axios";
import { ArtistCard } from "./utils/Card_Artist";
import styled from "styled-components";
import { Navbar } from "./comman/Navbar";
import { FilterSec } from "./utils/FilterSec";
export const Home = () => {
  const [fetchData, setFetchData] = useState([]);
  const [search, setSearch] = useState("");
  const [artist, setArtist] = useState([]);

  const Fetching = async (url) => {
    let x = await axios.get(url);
    let artistfetch = x.data[0].artist;
    let data = x.data[1].output;
    setFetchData(data);

    setArtist(artistfetch);
  };

  const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  `;

  useEffect(() => {
    Fetching(`http://localhost:4000/song`);
  }, []);
  return (
    <div>
      <Navbar
        search={search}
        setSearch={setSearch}
        fetchData={fetchData}
        setFetchData={setFetchData}
      />
      <FilterSec artist={artist} />

      <CardGrid>
        {fetchData ? (
          fetchData.map((x) => (
            <ArtistCard
              image={x.album_image}
              song_name={x.album_name}
              singer={x.album_artist}
              year={x.year}
              id={x.album_id}
            />
          ))
        ) : (
          <>loading</>
        )}
      </CardGrid>
    </div>
  );
};
