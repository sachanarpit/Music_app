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
        <SearchSec className="mt-3">
          <SearchBar className="input-group flex-nowrap">
            <SearchInput
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control"
            />
            <SearchBtn
              onClick={() => {
                let res = fetchData.filter((x) =>
                  x.album_name.includes(search)
                );
                setFetchData(res);
              }}
              className="input-group-text"
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
