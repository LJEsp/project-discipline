import React, { Component } from "react";
import styled from "styled-components";
import { Item, Box, Container, Area } from "../../components/layout";
import Typography from "../../components/Typography/Typography";

const StyledCard = styled.article`
  border: 1px solid magenta;
  width: ${p => p.theme.increment(16)};

  .item-image {
    height: ${p => p.theme.increment(8)};

    img {
      object-fit: cover;
      width: 100%;
      height: auto;
    }
  }
`;

const Card = () => {
  return (
    <StyledCard>
      <Container>
        <Item name="image">
          <img src="https://via.placeholder.com/350x150" alt="" />
        </Item>

        <Container padding="inset-m">
          <Item margin="stack-s">
            <Typography>Video</Typography>
          </Item>

          <Item margin="stack-m">
            <Typography>Supernova</Typography>
          </Item>

          <Item margin="stack-m">
            <Typography>
              Lorem ut elit sint consequat aliquip est proident. Enim incididunt
              non quis aliqua pariatur consectetur consectetur officia occaecat
              reprehenderit ex enim ut qui. Excepteur occaecat exercitation
              culpa nostrud ad quis aliquip laborum minim laboris. Commodo in
              tempor duis mollit ut est voluptate nostrud nulla laboris
              consectetur labore esse ullamco.
            </Typography>
          </Item>

          <Box row wrap margin="stack-m">
            <Item padding="inset-s" margin="inline-s">
              <Typography>Galaxies</Typography>
            </Item>

            <Item padding="inset-s" margin="inline-s">
              <Typography>Milky Way</Typography>
            </Item>

            <Item padding="inset-s" margin="inline-s">
              <Typography>Speed of Light</Typography>
            </Item>
          </Box>

          <Item padding="squish-m">
            <Typography>View</Typography>
          </Item>
        </Container>
      </Container>
    </StyledCard>
  );
};

const StyledWrapper = styled.div`
  .container-card {
    border: 1px solid magenta;
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

          <Item>
            <Card />
          </Item>

          <Item>
            <Card />
          </Item>
        </Container>
      </StyledWrapper>
    );
  }
}
