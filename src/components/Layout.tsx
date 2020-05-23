import styled from 'styled-components'
import { theme } from '../theme';
import Header from './Header';


const LayoutContainer = styled.div`
  display: flex;
  flex: 1;
  margin-right: ${theme.metrics.sideMargin};
  margin-left: ${theme.metrics.sideMargin};
`

const Layout = props => (
  <>
    <Header />
    <LayoutContainer>
      {props.children}
    </LayoutContainer>
  </>
);

export default Layout;
