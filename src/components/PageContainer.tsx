import styled from 'styled-components'
import { theme } from '../theme';

const PageContainer = ({ children }) => (
  <Container>
    <Block>
      {children}
    </Block>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding-bottom: ${theme.metrics.m4};
`

const Block = styled.div`
  max-width: 700px;
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
