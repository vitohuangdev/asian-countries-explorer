import styled from 'styled-components';
import CountryCard from './CountryCard';

const CountryCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const CountryCardList = ({ countries, selectedCountry }) => {
  const countryCards = countries.map((country) => {
    return (
      <CountryCard
        key={country.cca3}
        flagsPng={country.flags.png}
        flagsAlt={country.flags.alt}
        name={country.name.common}
        capital={country.capital[0]}
        region={country.region}
        population={country.population}
      />
    );
  });

  return (
    selectedCountry && (
      <CountryCardContainer>{countryCards}</CountryCardContainer>
    )
  );
};

export default CountryCardList;
