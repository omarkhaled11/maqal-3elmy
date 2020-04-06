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
  /* margin-left: 10px;
  margin-right: 10px; */
  font-size: ${({ theme }) => theme.fonts.medium};
`

export default PageContainer;
