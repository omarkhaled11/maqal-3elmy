import styled from 'styled-components'
import Header from './Header';


const LayoutContainer = styled.div`
  display: flex;
  flex: 1;

  margin: 20;
  padding: 20;
  /* border: 1px solid #DDD; */
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