import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { theme } from '../../theme';

const ArticleCard = () => {
  return (
    <Container>
      <JumbotronTextContainer>
        <JumbotronText>
          نحن ١٠٠ باحث و باحثة نكتب عن المقالات العلمية بشكل مبسط
          </JumbotronText>
      </JumbotronTextContainer>
      <ReadMoreButtonContainer>
        {/* <ReadMoreText>

            </ReadMoreText> */}
        {/* Icon */}
      </ReadMoreButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: flex-start;
  /* border: 1px solid ${theme.colors.border}; */
`

const JumbotronTextContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: ${theme.metrics.m6};
  padding-bottom: ${theme.metrics.m6};
  -moz-box-shadow: 0 25px 22px -45px rgba(233, 75, 60, 0.8) inset;
  -webkit-box-shadow: 0 25px 22px -45px rgba(233, 75, 60, 0.8) inset;
  box-shadow: 0 30px 40px -60px rgba(233, 75, 60, 0.8) inset;
`

const JumbotronText = styled.span`
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.primary};
  font-size: ${theme.fonts.h2};
`

const ReadMoreButtonContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-top: ${theme.metrics.m4};
`

export default ArticleCard;
