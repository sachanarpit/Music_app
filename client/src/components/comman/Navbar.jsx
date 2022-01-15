import styled from "styled-components";

const NavbarSec = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
`;

const SearchSec = styled.div``;

const SearchBar = styled.div``;

const SearchInput = styled.input``;

const SearchBtn = styled.button``;

const handleSubmit = () => {};

export const Navbar = ({ search, setSearch, fetchData, setFetchData }) => {
  return (
    <>
      <NavbarSec>
        <div>
          <img
            src="https://img.icons8.com/wired/64/000000/musical-notes.png"
            alt="logo"
          />
        </div>
        <SearchSec>
          <SearchBar className="searchbar">
            <SearchInput
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <SearchBtn
              onClick={() => {
                let res = fetchData.filter((x) =>
                  x.album_name.includes(search)
                );
                setFetchData(res);
              }}
            >
              🔍
            </SearchBtn>
          </SearchBar>
        </SearchSec>
        <div></div>
      </NavbarSec>
    </>
  );
};
