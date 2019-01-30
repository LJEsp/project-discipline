import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { animated } from "react-spring";

const spacingProperties = ({ padding, theme: { size } }) => css`
  padding: ${padding === "inset-xs" && size.l};
`;

// >>> Item <<<
const StyledItem = styled.div`
  ${spacingProperties}
  display: flex;
  justify-content: ${props =>
    ((props.topleft || props.left || props.bottomleft) && "flex-start") ||
    ((props.top || props.center || props.bottom) && "center") ||
    ((props.topright || props.right || props.bottomright) && "flex-end")};
  align-items: ${props =>
    ((props.topleft || props.top || props.topright) && "flex-start") ||
    ((props.left || props.center || props.right) && "center") ||
    ((props.bottomleft || props.bottom || props.bottomright) && "flex-end")};
`;

const AnimatedItem = animated(StyledItem);

const Item = props => {
  return props.animated ? (
    <AnimatedItem {...props}>{props.children}</AnimatedItem>
  ) : (
    <StyledItem {...props}>{props.children}</StyledItem>
  );
};

// >>> Box <<<
const StyledBox = styled.div`
  display: flex;
  flex-flow: ${props => (props.row && "row") || (props.column && "column")};
  flex-wrap: ${props => (props.wrap && "wrap") || (props.nowrap && "nowrap")};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-grow: 1;
`;

const AnimatedBox = animated(StyledBox);

const Box = props => {
  return props.animated ? (
    <AnimatedBox {...props}>{props.children}</AnimatedBox>
  ) : (
    <StyledBox {...props}>{props.children}</StyledBox>
  );
};

// >>> Container <<<
const StyledContainer = styled.div``;

const Container = props => {};

export { Item, Box };
