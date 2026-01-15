import styled from 'styled-components';

const HeaderContainer = styled.header`
  margin-bottom: 15px;
`;

const Title = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Asian Countries Explorer</Title>
    </HeaderContainer>
  );
};

export default Header;
