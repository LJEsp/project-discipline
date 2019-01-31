import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Typography from "../../components/Typography/Typography";
import { Item, Box, Container, Area } from "../../components/layout";

const StyledWrapper = styled.div`
  .area {
    border: 2px dashed red;
  }

  .container {
    border: 2px dashed green;
  }

  .box {
    border: 2px dashed blue;
    background-color: rgba(200, 220, 255, 1);
  }

  .item {
    border: 1px dashed grey;
    background-color: rgba(200, 200, 200, 1);
  }

  .box-header {
    border: 1px solid magenta;
  }

  .item-heading {
    background-color: aquamarine;
  }
`;

export default class extends Component {
  render() {
    return (
      <Fragment>
        <StyledWrapper>
          <Area name="1" padding="inset-base">
            <Container name="fruits" margin="stack-base">
              <Item name="heading" padding="inset-m" margin="stack-base">
                <Typography>Padding &mdash; Inset</Typography>
              </Item>

              <Box row align="flex-start" margin="stack-xl">
                <Item center padding="inset-base">
                  <Typography>Inset Base</Typography>
                </Item>
                <Item center padding="inset-xs">
                  <Typography>Inset XS</Typography>
                </Item>
                <Item center padding="inset-s">
                  <Typography>Inset S</Typography>
                </Item>
                <Item center padding="inset-m">
                  <Typography>Inset M</Typography>
                </Item>
                <Item center padding="inset-l">
                  <Typography>Inset L</Typography>
                </Item>
                <Item center padding="inset-xl">
                  <Typography>Inset XL</Typography>
                </Item>
              </Box>

              <Item name="heading" padding="inset-m" margin="stack-base">
                <Typography>Padding &mdash; Squish</Typography>
              </Item>

              <Box row wrap align="flex-start" margin="stack-xl">
                <Item center padding="squish-s">
                  <Typography>Squish S</Typography>
                </Item>
                <Item center padding="squish-m">
                  <Typography>Squish M</Typography>
                </Item>
                <Item center padding="squish-l">
                  <Typography>Squish L</Typography>
                </Item>
              </Box>

              <Item name="heading" padding="inset-m" margin="stack-base">
                <Typography>Padding &mdash; Stretch</Typography>
              </Item>

              <Box row align="flex-start" margin="stack-xl">
                <Item center padding="stretch-s">
                  <Typography>Stretch S</Typography>
                </Item>
                <Item center padding="stretch-m">
                  <Typography>Stretch M</Typography>
                </Item>
              </Box>

              <Item name="heading" padding="inset-m" margin="stack-base">
                <Typography>Margin &mdash; Stack</Typography>
              </Item>

              <Box column margin="stack-xl">
                <Item center margin="stack-base">
                  <Typography>Stack Base</Typography>
                </Item>
                <Item center margin="stack-xs">
                  <Typography>Stack XS</Typography>
                </Item>
                <Item center margin="stack-s">
                  <Typography>Stack S</Typography>
                </Item>
                <Item center margin="stack-m">
                  <Typography>Stack M</Typography>
                </Item>
                <Item center margin="stack-l">
                  <Typography>Stack L</Typography>
                </Item>
                <Item center margin="stack-xl">
                  <Typography>Stack XL</Typography>
                </Item>
              </Box>

              <Item name="heading" padding="inset-m" margin="stack-base">
                <Typography>Margin &mdash; Inline</Typography>
              </Item>

              <Box row>
                <Item center margin="inline-base">
                  <Typography>Inline Base</Typography>
                </Item>
                <Item center margin="inline-xs">
                  <Typography>Inline XS</Typography>
                </Item>
                <Item center margin="inline-s">
                  <Typography>Inline S</Typography>
                </Item>
                <Item center margin="inline-m">
                  <Typography>Inline M</Typography>
                </Item>
                <Item center margin="inline-l">
                  <Typography>Inline L</Typography>
                </Item>
                <Item center margin="inline-xl">
                  <Typography>Inline XL</Typography>
                </Item>
              </Box>
            </Container>
          </Area>
        </StyledWrapper>
      </Fragment>
    );
  }
}
