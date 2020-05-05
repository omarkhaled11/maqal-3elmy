import styled from 'styled-components'
import Header from './Header';


const LayoutContainer = styled.div`
  display: flex;
  flex: 1;
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
