import React, { Component } from "react";
import styled from "styled-components";
import { Spring } from "react-spring";
import { Item, Box, Container, Area } from "../../components/layout";
import Typography from "../../components/Typography/Typography";

const StyledCard = styled.article`
  /* border: 1px solid magenta; */

  /* .area {
    border: 2px dashed red;
  }

  .container {
    border: 2px dashed green;
  }

  .box {
    border: 1px dashed blue;
    background-color: rgba(200, 220, 255, 1);
  }

  .item {
    border: 1px dashed grey;
    background-color: rgba(200, 200, 200, 1);
  }*/
  width: ${p => p.theme.increment(16)};
  background-color: ${p => p.theme.color.light};
  position: relative;

  @media (max-width: ${p => p.theme.breakpoint.tabletSmall}) {
    width: 100%;
  }

  .item-image {
    height: ${p => p.theme.increment(8)};

    img {
      object-fit: cover;
      width: 100%;
      height: auto;
    }
  }

  .item-tag {
    background-color: ${p => p.theme.color.grey.dark};
    color: ${p => p.theme.color.light};
    border-radius: ${p => p.theme.size.xs};
    height: var(--size-button);
  }

  .item-button {
    background-color: ${p => p.theme.color.dark};
    color: ${p => p.theme.color.light};
    border-radius: ${p => p.theme.size.xs};
    height: ${p => p.theme.incrementFixed(2)};
    width: 100%;
  }

  .container-main {
    border: 0.125em solid ${p => p.theme.color.dark};
    position: relative;
    top: 0;
    box-shadow: ${p => p.theme.shadow[1]};
  }
`;

const Card = () => {
  return (
    <StyledCard>
      <Spring
        native
        from={{
          transform: "perspective(500px) rotateX(8deg)",
          opacity: "0",
          transformOrigin: "top"
        }}
        to={{
          transform: "perspective(500px) rotateX(0deg)",
          opacity: "1",
          transformOrigin: "top"
        }}
      >
        {props => (
          <Container style={props} animate name="main">
            <Item name="image">
              <img src="https://via.placeholder.com/350x150" alt="" />
            </Item>

            <Container padding="inset-m">
              <Item margin="stack-m">
                <Typography uppercase>Video</Typography>
              </Item>

              <Item margin="stack-base">
                <Typography as="h1" size={1} bold>
                  With line-height cropping :)
                </Typography>
              </Item>

              <Item margin="stack-base">
                <Typography as="p">
                  Lorem ut elit sint consequat aliquip est proident. Enim
                  incididunt non quis aliqua pariatur consectetur consectetur
                  officia occaecat reprehenderit ex enim ut qui. Excepteur
                  occaecat exercitation culpa nostrud ad quis aliquip laborum
                  minim laboris. Commodo in tempor duis mollit ut est voluptate
                  nostrud nulla laboris consectetur labore esse ullamco.
                </Typography>
              </Item>

              <Box row wrap margin="stack-s">
                <Item name="tag" center padding="squish-m" margin="wrap-s">
                  <Typography>Galaxies</Typography>
                </Item>

                <Item name="tag" center padding="squish-m" margin="wrap-s">
                  <Typography>Milky Way</Typography>
                </Item>

                <Item name="tag" center padding="squish-m" margin="wrap-s">
                  <Typography>Speed of Light</Typography>
                </Item>

                <Item name="tag" center padding="squish-m" margin="wrap-s">
                  <Typography>Supernova</Typography>
                </Item>
              </Box>

              <Item center name="button" as="button" padding="squish-m">
                <Typography>View</Typography>
              </Item>
            </Container>
          </Container>
        )}
      </Spring>
    </StyledCard>
  );
};

const StyledWrapper = styled.div`
  .container-card {
    /* border: 1px solid magenta; */
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    grid-column-gap: var(--size-base);
  }
`;

export default class extends Component {
  render() {
    return (
      <StyledWrapper>
        <Container name="card" padding="inset-base">
          <Item>
            <Card />
          </Item>
        </Container>
      </StyledWrapper>
    );
  }
}
