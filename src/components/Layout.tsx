import styled from 'styled-components';
import { theme } from '../theme';
import Header from './Header';
import Footer from './Footer';

const LayoutContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-right: ${theme.metrics.sideMargin};
  margin-left: ${theme.metrics.sideMargin};
`;

const Layout = (props) => (
  <>
    <Header />
    <LayoutContainer>{props.children}</LayoutContainer>
    <Footer />
  </>
);

export default Layout;
