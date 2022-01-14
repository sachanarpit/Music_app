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

export const Navbar = () => {
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
            <SearchInput type="text" />
            <SearchBtn>🔍</SearchBtn>
          </SearchBar>
        </SearchSec>
        <div></div>
      </NavbarSec>
    </>
  );
};
