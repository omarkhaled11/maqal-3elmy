import styled from 'styled-components'

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
