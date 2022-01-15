import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./utils/music.css";
import { SongList } from "./utils/songsList";

export const MusicPage = ({ id }) => {
  const { state } = useLocation();
  const [fetchData, setFetchData] = useState([]);

  const Fetching = async (url) => {
    let x = await axios.get(url);

    let data = x.data;
    setFetchData(data);
    console.log(data);
  };

  useEffect(() => {
    Fetching(`https://saavn.me
/album?id=${state}`);
  }, []);

  return (
    <>
      {fetchData ? (
        <section class="content">
          <div class="music-head">
            <img src={fetchData.album_image} alt="" />

            <section class="music-details">
              <div>
                <h1 class="h1">{fetchData.album_name}f</h1>
                <p class="sm-hide">{fetchData.album_artist}</p>
                <p class="sm-hide">{fetchData.year}</p>
              </div>
              <div slass="sm-text-center">
                <i class="fa fa-play"> &nbsp;Play all</i>
                <i class="fa fa-plus"> &nbsp;Add to</i>
                <i class="fa fa-ellipsis-h">&nbsp;&nbsp;More</i>
              </div>
            </section>
          </div>
          <SongList songs={fetchData.songs} />
        </section>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};
