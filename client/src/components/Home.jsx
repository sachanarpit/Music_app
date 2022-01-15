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
  const [paginationData, setPaginationData] = useState([]);
  const [pages, setPages] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const Fetching = async (url) => {
    let x = await axios.get(url);
    let artistfetch = x.data[0].artist;
    let data = x.data[1].output;
    setFetchData(data);

    setArtist(artistfetch);
    // console.log(data.length);
    setPages(data.length / 8);
  };

  const Pagination = () => {
    const startIndex = currentPage * 8 - 8;
    const endIndex = startIndex + 8;
    let paginationData = fetchData.slice(startIndex, endIndex);
    setPaginationData(paginationData);
  };

  const CardGrid = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  `;

  useEffect(() => {
    Fetching(`http://localhost:4000/song`);
  }, []);

  useEffect(() => {
    Pagination();
  }, [fetchData, currentPage]);

  return (
    <div>
      <Navbar
        search={search}
        setSearch={setSearch}
        fetchData={fetchData}
        setFetchData={setFetchData}
      />
      <FilterSec
        artist={artist}
        fetchData={fetchData}
        setFetchData={setFetchData}
      />

      <CardGrid>
        {fetchData ? (
          paginationData.map((x) => (
            <ArtistCard
              image={x.album_image}
              song_name={x.album_name}
              singer={x.album_artist}
              year={x.year}
              id={x.album_id}
              key={x.id}
            />
          ))
        ) : (
          <>loading</>
        )}
      </CardGrid>
      <div>
        <center>
          {currentPage <= 1 ? (
            <button disabled>⏮️</button>
          ) : (
            <button
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            >
              ⏮️
            </button>
          )}
          <p>
            <b>{currentPage}</b>
          </p>
          {currentPage > pages ? (
            <button disabled>⏭️</button>
          ) : (
            <button
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            >
              ⏭️
            </button>
          )}
        </center>
      </div>
    </div>
  );
};
