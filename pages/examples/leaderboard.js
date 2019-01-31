import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Typography from "../../components/Typography/Typography";
import Avatar from "../../components/Avatar/Avatar";
import { Item, Box, Container, Area } from "../../components/Layout/Layout";
import { Spring, Trail } from "react-spring";

const StyledWrapper = styled.div`
  width: calc(100% / 1.618);
  margin: 0 auto;
  @media (max-width: ${p => p.theme.breakpoint[2]}) {
    width: 100%;
  }

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
`;

const users = [
  {
    name: "Gal Gadot",
    username:
      "Lorem irure velit aute dolor mollit. Lorem commodo Lorem irure dolor proident. Aliquip occaecat esse amet excepteur sit magna laborum ex do exercitation adipisicing consequat magna velit. Aute consectetur cupidatat minim nostrud occaecat ex cillum veniam commodo sint tempor ipsum nostrud. Nulla excepteur et amet do quis tempor dolor ex velit.",
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
        <Spring native from={{ opacity: "0" }} to={{ opacity: "1" }}>
          {props => (
            <Box
              name="test"
              animate
              style={props}
              justify="center"
              align="center"
              padding="inset-m"
            >
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
          )}
        </Spring>

        <Container padding="inset-m">
          <Trail
            native
            delay={150}
            items={users}
            // keys={(item, index) => index}
            from={{ opacity: "0", transform: "scale(0)" }}
            to={{ opacity: "1", transform: "scale(1)" }}
          >
            {(user, index) => props => (
              <Box style={props} key={index} animate column margin="stack-m">
                <Box>
                  <Item padding="stretch-m">
                    <Typography>{index + 1}</Typography>
                  </Item>
                  <Item margin="inline-s">
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

                  <Item padding="stretch-m">
                    <Typography>&#9733;</Typography>
                  </Item>
                  <Item padding="stretch-m">
                    <Typography>{user.score}</Typography>
                  </Item>
                </Box>
              </Box>
            )}
          </Trail>

          {/* {users.map((user, index) => (
            <Box key={index} column margin="stack-m">
              <Box>
                <Item padding="stretch-m">
                  <Typography>{index + 1}</Typography>
                </Item>
                <Item margin="inline-s">
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

                <Item padding="stretch-m">
                  <Typography>&#9733;</Typography>
                </Item>
                <Item padding="stretch-m">
                  <Typography>{user.score}</Typography>
                </Item>
              </Box>
            </Box>
          ))} */}
        </Container>
      </StyledWrapper>
    );
  }
}
