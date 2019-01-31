import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Typography from "../../components/Typography/Typography";
import Avatar from "../../components/Avatar/Avatar";
import { Item, Box, Container, Area } from "../../components/Layout/Layout";

const StyledWrapper = styled.div`
  width: 100vw;

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
  } */

  .box-name {
  }
`;

const users = [
  {
    name: "Gal Gadot",
    username: "galgadot20",
    score: "12"
  },
  {
    name: "Gal Gadot",
    username: "galgadot20",
    score: "12"
  },
  {
    name: "Gal Gadot",
    username: "galgadot20",
    score: "12"
  }
];

export default class extends Component {
  render() {
    return (
      <StyledWrapper>
        <Box padding="inset-m">
          <Item padding="inset-m" margin="inline-base">
            <Typography size={2}>Today</Typography>
          </Item>
          <Item padding="inset-m" margin="inline-base">
            <Typography>Month</Typography>
          </Item>
          <Item padding="inset-m">
            <Typography>All Time</Typography>
          </Item>
        </Box>

        <Container padding="inset-m">
          {users.map((user, index) => (
            <Box key={index} column margin="stack-m">
              <Box>
                <Item center padding="inset-m">
                  <Typography>{index + 1}</Typography>
                </Item>
                <Item center margin="inline-s">
                  <Avatar>
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY256_CR42,0,172,256_AL_.jpg"
                      alt=""
                    />
                  </Avatar>
                </Item>

                <Box name="name" grow column padding="inset-s">
                  <Item margin="stack-s">
                    <Typography>{user.name}</Typography>
                  </Item>
                  <Item>
                    <Typography>{user.username}</Typography>
                  </Item>
                </Box>

                <Item center padding="inset-m">
                  <Typography>&#9733;</Typography>
                </Item>
                <Item center padding="inset-m">
                  <Typography>{user.score}</Typography>
                </Item>
              </Box>
            </Box>
          ))}
        </Container>
      </StyledWrapper>
    );
  }
}
