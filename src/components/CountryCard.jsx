import styled from 'styled-components';

const CountryMeta = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #16c172;
  border-radius: 5%;
  padding: 10px;
`;
const FlagImage = styled.img`
  width: 100%;
  aspect-ratio: 1.5 / 1;
  object-fit: fill;
  box-shadow: 0px 1px 5px #16c172;
  border-radius: 5% 5% 0 0;
`;
const CountryName = styled.h2``;
const CountryLabel = styled.span``;

const CountryCard = ({
  flagsPng,
  flagsAlt,
  name,
  capital,
  region,
  population,
}) => {
  return (
    <>
      <CountryMeta>
        <FlagImage src={flagsPng} alt={flagsAlt} />
        <CountryName>Name: {name}</CountryName>
        <CountryLabel>Capital: {capital}</CountryLabel>
        <CountryLabel>Region: {region}</CountryLabel>
        <CountryLabel>Population: {population}</CountryLabel>
      </CountryMeta>
    </>
  );
};

export default CountryCard;
