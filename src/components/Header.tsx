import Link from 'next/link';
import styled from 'styled-components'
import { theme } from '../theme';
const LogoSvg = require("../svg/logo.svg");


const Header = () => (
  <Container>
    <LogoSvg height={70} width={85} />
    <MenuButton>
      <MenuText>
        القائمة
      </MenuText>
    </MenuButton>
  </Container>
);

const Container = styled.div`
  padding-top: ${theme.metrics.m2};
  padding-bottom: ${theme.metrics.m2};
  padding-right: ${theme.metrics.sideMargin};
  padding-left: ${theme.metrics.sideMargin};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${theme.metrics.navbarHeight};
  /* border-bottom: 1px solid black; */
`;

const MenuButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.secondary};
  height: ${theme.metrics.m4};
  padding-right: ${theme.metrics.m3};
  padding-left: ${theme.metrics.m3};
`;
const MenuText = styled.span`
  margin-top: ${theme.metrics.m1};
  font-size: ${theme.fonts.large};
  font-family: ${theme.fonts.bold};
  text-align: center;
  color: ${theme.colors.secondary};
`;

/* // menu old */

{/* <div />
<LinksContainer>
  <Link href="/">
    <LinkHref style={{ fontWeight: 'bold' }}>Home</LinkHref>
  </Link>
  <Link href="/about">
    <LinkHref>Clusters</LinkHref>
  </Link>
  <Link href="/about">
    <LinkHref>About</LinkHref>
  </Link>
  <Link href="/about">
    <SmallContainer>
      <LinkHref style={{ color: 'white' }}>Contact us</LinkHref>
    </SmallContainer>
  </Link>
</LinksContainer> */}


const LinksContainer = styled.div`
  /* padding: ${theme.metrics.m2}; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${theme.metrics.navbarHeight};
`

const SmallContainer = styled.div`
  margin-left: ${theme.metrics.m3};
  margin-right: ${theme.metrics.m3};
  padding: ${theme.metrics.m1};
  border-radius: 100px;
  height:25px;
  background-color: ${theme.colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const LinkHref = styled.a`
  text-align: center;
  margin-left: ${theme.metrics.m2};
  margin-right: ${theme.metrics.m2};
  padding: ${theme.metrics.m1};
  font-size: ${theme.fonts.small};
  :hover {
    color: ${theme.colors.secondary};
    cursor: pointer;
  };
`


export default Header;
