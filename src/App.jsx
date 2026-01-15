import { useState, useEffect } from 'react';
import { GlobalStyle } from './globalStyles';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CountryCardList from './components/CountryCardList';

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(false);

  useEffect(() => {
    let active = true;
    const fetchData = async () => {
      const resp = await fetch(
        'https://restcountries.com/v3.1/region/asia?fields=name,capital,region,population,flags,cca3'
      );
      const data = await resp.json();

      if (active) {
        setCountries(data);
      }
    };
    fetchData();

    return () => {
      active = false;
    };
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedCountry(true);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <GlobalStyle />
      <Header />
      <SearchBar onSearch={handleSearch} />
      <CountryCardList
        countries={filteredCountries}
        selectedCountry={selectedCountry}
      />
    </>
  );
}

export default App;
