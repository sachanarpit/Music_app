import { Link } from "react-router-dom";
import styled from "styled-components";
import { MusicPage } from "../Music_Page";

const MusicCard = styled.div`
  box-sizing: border-box;
  width: 98%;

  max-height: 360px;
  border-radius: 15px;
  background: #242424;
  padding: 25px 20px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  margin-bottom: 10px;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
    transition: cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;

const CardImg = styled.img`
  width: 90%;
  height: 220px;
  background-size: center;
`;

const CardHeading = styled.h4`
  font-size: 16px;
  margin: 10px 0px 5px 0px;
`;

const CardDes = styled.p`
  width: 200px;
  height: 17px;
  margin: 0;
  margin-top: 3px;
  font-size: 12px;
  overflow: hidden;
`;

export const ArtistCard = ({ image, song_name, singer, year, id }) => {
  return (
    <>
      <Link
        to={{
          pathname: "/music",
          state: id,
        }}
      >
        <MusicCard className="fadeIn">
          <CardImg src={image} alt="" />
          <center>
            <CardHeading>{song_name}</CardHeading>
            <CardDes>
              {singer} | {year}
            </CardDes>
            <br />
            <button
              onClick={() => {
                console.log(id);
              }}
            >
              Explore Now
            </button>
          </center>
        </MusicCard>
      </Link>
    </>
  );
};
