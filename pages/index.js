import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Text from "../components/Text/Text";
import { Item, Box } from "../components/Layout/Layout";
import { Spring } from "react-spring";

const StyledWrapper = styled.div`
  display: grid;
  /* grid-template-columns: ; */
`;

export default class extends Component {
  render() {
    return (
      <StyledWrapper>
        <Spring native from={{ opacity: "0" }} to={{ opacity: "1" }}>
          {props => (
            <Box style={props} animated column nowrap>
              <Spring native from={{ opacity: "0" }} to={{ opacity: "1" }}>
                {props => (
                  <Item animated style={props}>
                    <Text>Discpline</Text>
                  </Item>
                )}
              </Spring>
              <Item>
                <Text>Cupidatat irure est nisi cillum elit. Labore pariatur qui elit irure esse elit officia consequat Lorem id id id. Nisi laboris pariatur laborum culpa.</Text>
              </Item>
              <Item padding="inset-xs">
                <Text>Discpline</Text>
              </Item>
              <Item>
                <Text>Discpline</Text>
              </Item>
            </Box>
          )}
        </Spring>

        <Box>
          <Box>
            <Item>
              <Text>Item 1</Text>
            </Item>
            <Item>
              <Text>Item 2</Text>
            </Item>
            <Item>
              <Text>Item 3</Text>
            </Item>
          </Box>

          <Box>
            <Item>
              <Text>Item 1</Text>
            </Item>
            <Item>
              <Text>Item 2</Text>
            </Item>
            <Item>
              <Text>Item 3</Text>
            </Item>
          </Box>
        </Box>
      </StyledWrapper>
    );
  }
}
