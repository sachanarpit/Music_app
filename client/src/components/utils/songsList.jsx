export const SongList = ({ songs }) => {
  return (
    <>
      <ul className="music-list">
        {songs ? (
          songs.map((x) => (
            <li>
              <p>{x.song_name}</p>
              <p className="sm-hide">{x.song_language}</p>
              <p className="sm-text-right">{x.song_play_count}</p>
              <p className="">
                <button
                  onClick={() => {
                    const audioElement = new Audio(x.download_links[2]);
                    audioElement.pause();
                    audioElement.play();
                  }}
                >
                  {" "}
                  Play now
                </button>
                <span className="cloud">
                  <a href={x.download_links[0]} target="_blank">
                    <b>download Now</b>
                  </a>
                </span>
              </p>
            </li>
          ))
        ) : (
          <h1> song not found</h1>
        )}
        {/* {fetchData.songs.map((x) => (
              <li>
                <p>{x.song_name}</p>
                <p className="sm-hide">{x.song_language}</p>
                <p className="sm-text-right">{x.song_play_count}</p>
                <p className="">
                  <span className="cloud">
                    <a href={x.download_links[0]} target="_blank">
                      <b>download Now</b>
                    </a>
                  </span>
                </p>
              </li>
            ))} */}
      </ul>
    </>
  );
};
