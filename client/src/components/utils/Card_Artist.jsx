import styled from "styled-components";

const MusicCard = styled.div`
  box-sizing: border-box;
  width: 22%;
  height: 320px;
  border-radius: 15px;
  background: #242424;
  padding: 25px 20px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: white;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
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

export const ArtistCard = () => {
  return (
    <>
      <MusicCard>
        <CardImg
          src="http://c.saavncdn.com/382/Rockstar-Telugu-2021-20210503221958-500x500.jpg"
          alt=""
        />
        <center>
          <CardHeading>let me love you</CardHeading>
          <CardDes>Arijit Singh | 2020</CardDes>
        </center>
      </MusicCard>
    </>
  );
};
