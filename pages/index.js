import React, { Component, Fragment } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Text from "../components/Text/Text";
import { Item, Box, Container, Area } from "../components/Layout/Layout";
import { Spring } from "react-spring";

// >>> GlobalStyle
const GlobalStyle = createGlobalStyle`
  html, body, #__next {
    height: 100%;
  }
`;

const StyledWrapper = styled.div`
  .area {
    border: 2px dashed red;
    /* background-color: rgba(255, 0, 0, 0.5); */
  }

  .container {
    border: 2px dashed green;
    /* background-color: rgba(0, 255, 0, 0.5); */
  }

  .box {
    border: 2px dashed blue;
    background-color: rgba(200, 220, 255, 1);
  }

  .item {
    border: 1px dashed grey;
    background-color: rgba(200, 200, 200, 1);
  }
`;

export default class extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />

        <StyledWrapper>
          <Area padding="inset-base">
            <Container margin="stack-base">
              <Box name="test" row align="flex-start" margin="stack-base">
                <Item center padding="inset-base">
                  <Text>Inset Base</Text>
                </Item>
                <Item center padding="inset-xs">
                  <Text>Inset XS</Text>
                </Item>
                <Item center padding="inset-s">
                  <Text>Inset S</Text>
                </Item>
                <Item center padding="inset-m">
                  <Text>Inset M</Text>
                </Item>
                <Item center padding="inset-l">
                  <Text>Inset L</Text>
                </Item>
                <Item center padding="inset-xl">
                  <Text>Inset XL</Text>
                </Item>
              </Box>

              <Box row wrap align="flex-start" margin="stack-base">
                <Item center padding="squish-s">
                  <Text>Squish S</Text>
                </Item>
                <Item center padding="squish-m">
                  <Text>Squish M</Text>
                </Item>
                <Item center padding="squish-l">
                  <Text>Squish L</Text>
                </Item>
              </Box>

              <Box row align="flex-start" margin="stack-base">
                <Item center padding="stretch-s">
                  <Text>Stretch S</Text>
                </Item>
                <Item center padding="stretch-m">
                  <Text>Stretch M</Text>
                </Item>
              </Box>

              <Box column margin="stack-base">
                <Item center margin="stack-base">
                  <Text>Stack Base</Text>
                </Item>
                <Item center margin="stack-s">
                  <Text>Stack S</Text>
                </Item>
                <Item center margin="stack-m">
                  <Text>Stack M</Text>
                </Item>
                <Item center margin="stack-l">
                  <Text>Stack L</Text>
                </Item>
                <Item center margin="stack-xl">
                  <Text>Stack XL</Text>
                </Item>
              </Box>

              <Box row>
                <Item center margin="inline-base">
                  <Text>Inline Base</Text>
                </Item>
                <Item center margin="inline-s">
                  <Text>Inline S</Text>
                </Item>
                <Item center margin="inline-m">
                  <Text>Inline M</Text>
                </Item>
                <Item center margin="inline-l">
                  <Text>Inline L</Text>
                </Item>
                <Item center margin="inline-xl">
                  <Text>Inline XL</Text>
                </Item>
              </Box>
            </Container>

            <Container>
              <Box>
                <Item>
                  <Text>Test</Text>
                </Item>
              </Box>
            </Container>
          </Area>
        </StyledWrapper>
      </Fragment>
    );
  }
}
