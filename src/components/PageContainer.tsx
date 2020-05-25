import styled from 'styled-components'
import { theme } from '../theme';

const PageContainer = ({ children }) => (
  <Container>
    {children}
  </Container>
);

const Container = styled.div`
  border: 1px solid black;
  display: flex;
  flex: 1;
  justify-content: center;
  padding-right: ${theme.metrics.m5};
  padding-left: ${theme.metrics.m5};
  padding-top: ${theme.metrics.m3};
  padding-bottom: ${theme.metrics.m5};
  margin-top: ${theme.metrics.m5};
  overflow: auto;
  display: flex;
  flex-direction: column;
  @media (max-width: 450px) {
    max-width: 400px;
    img {
      max-width: 400px;
    }
  }
  img {
    margin-left: auto !important;
    margin-right: auto !important;
    max-width: 700px;
  }
  font-size: ${({ theme }) => theme.fonts.medium};
`

export default PageContainer;
