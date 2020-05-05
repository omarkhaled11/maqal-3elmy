import Link from 'next/link';
import styled from 'styled-components'
import { theme } from '../theme';

const Header = () => (
  <Container>
    <Link href="/">
      <LinkHref>Home</LinkHref>
    </Link>
    <Link href="/about">
      <LinkHref>About</LinkHref>
    </Link>
  </Container>
);

const Container = styled.div`
  padding: ${theme.metrics.m2};
  margin-bottom: ${theme.metrics.m2};
  border-bottom: 1px solid ${theme.colors.border};
`

const LinkHref = styled.a`
  padding: ${theme.metrics.m2};
  font-size: ${theme.fonts.large};
  color: ${theme.colors.primary};
  :hover {
    color: ${theme.colors.secondary};
    cursor: pointer;
  };
`


export default Header;
