import { useRef } from 'react';
import styled from 'styled-components';

const SearchForm = styled.form`
  text-align: center;
  margin-bottom: 30px;
`;

const SearchInput = styled.input`
  margin-right: 5px;
  font-size: 20px;
`;

const SearchButton = styled.button`
  font-size: 20px;
`;

const SearchBar = ({ onSearch }) => {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current.value) {
      onSearch(inputRef.current.value);
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchInput
        type="search"
        placeholder="Search countries..."
        ref={inputRef}
      />
      <SearchButton>Search</SearchButton>
    </SearchForm>
  );
};

export default SearchBar;
