import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { animated } from "react-spring";

/*
  >>> spacingProperties
  Padding — Inset: base, xs, s, m, l, xl
  Padding — Squish: s, m, l
  Padding — Stretch: s, m
  Margin — Stack: base, xs, s, m, l, xl
  Margin — Inline: base, xs, s, m, l, xl
*/
const spacingProperties = ({ padding, margin, theme: { size } }) => {
  // >>> CSS shorthand reference: top, right, bottom, left
  // >>> Padding — Inset: base, xs, s, m, l, xl
  const insetBase = `${size.base} ${size.base} ${size.base} ${size.base}`;
  const insetXs = `${size.xs} ${size.xs} ${size.xs} ${size.xs}`;
  const insetS = `${size.s} ${size.s} ${size.s} ${size.s}`;
  const insetM = `${size.m} ${size.m} ${size.m} ${size.m}`;
  const insetL = `${size.l} ${size.l} ${size.l} ${size.l}`;
  const insetXl = `${size.xl} ${size.xl} ${size.xl} ${size.xl}`;

  // >>> Padding — Squish: s, m, l
  const squishS = `${size.xs} ${size.s} ${size.xs} ${size.s}`;
  const squishM = `${size.s} ${size.m} ${size.s} ${size.m}`;
  const squishL = `${size.m} ${size.l} ${size.m} ${size.l}`;

  // >>> Padding — Stretch: s, m
  const stretchS = `${size.m} ${size.s} ${size.m} ${size.s}`;
  const stretchM = `${size.base} ${size.m} ${size.base} ${size.m}`;

  // >>> Margin — Stack: base, xs, s, m, l, xl
  const stackBase = `0 0 ${size.base} 0`;
  const stackXs = `0 0 ${size.xs} 0`;
  const stackS = `0 0 ${size.s} 0`;
  const stackM = `0 0 ${size.m} 0`;
  const stackL = `0 0 ${size.l} 0`;
  const stackXl = `0 0 ${size.xl} 0`;

  // >>> Margin — Inline: base, xs, s, m, l, xl
  const inlineBase = `0 ${size.base} 0 0`;
  const inlineXs = `0 ${size.xs} 0 0`;
  const inlineS = `0 ${size.s} 0 0`;
  const inlineM = `0 ${size.m} 0 0`;
  const inlineL = `0 ${size.l} 0 0`;
  const inlineXl = `0 ${size.xl} 0 0`;

  return css`
    padding: ${(padding === "inset-base" && insetL) ||
      (padding === "inset-xs" && insetXs) ||
      (padding === "inset-s" && insetS) ||
      (padding === "inset-m" && insetM) ||
      (padding === "inset-l" && insetBase) ||
      (padding === "inset-xl" && insetXl) ||
      (padding === "squish-base" && squishBase) ||
      (padding === "squish-s" && squishS) ||
      (padding === "squish-m" && squishM) ||
      (padding === "squish-l" && squishL) ||
      (padding === "stretch-s" && stretchS) ||
      (padding === "stretch-m" && stretchM)};

    margin: ${(margin === "stack-base" && stackBase) ||
      (margin === "stack-xs" && stackXs) ||
      (margin === "stack-s" && stackS) ||
      (margin === "stack-m" && stackM) ||
      (margin === "stack-l" && stackL) ||
      (margin === "stack-xl" && stackXl) ||
      (margin === "inline-base" && inlineBase) ||
      (margin === "inline-xs" && inlineXs) ||
      (margin === "inline-s" && inlineS) ||
      (margin === "inline-m" && inlineM) ||
      (margin === "inline-l" && inlineL) ||
      (margin === "inline-xl" && inlineXl)};
  `;
};

/* 
  >>> Item
  (positioning) topleft, top, topright, right, center, bottomleft, bottom, bottomright
  padding: [refer to spacingProperties]
  margin: [refer to spacingProperties]
  animate: Boolean
*/
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
  return props.animate ? (
    <AnimatedItem className={name ? `item-${name}` : "item"} {...props}>
      {props.children}
    </AnimatedItem>
  ) : (
    <StyledItem className={name ? `item-${name}` : "item"} {...props}>
      {props.children}
    </StyledItem>
  );
};

/* 
  >>> Box
  row / column
  wrap / nowrap
  justify: [ justify-content values]
  align: [ align-items values ]
  padding: [refer to spacingProperties]
  margin: [refer to spacingProperties]
  animate: Boolean
*/
const StyledBox = styled.div`
  ${spacingProperties}
  display: flex;
  flex-flow: ${props => (props.row && "row") || (props.column && "column")};
  flex-wrap: ${props => (props.wrap && "wrap") || (props.nowrap && "nowrap")};
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`;

const AnimatedBox = animated(StyledBox);

const Box = ({ name, wrap, ...props }) => {
  return props.animate ? (
    <AnimatedBox
      className={name ? `box-${name}` : "box"}
      wrap={wrap ? "true" : "false"}
      {...props}
    >
      {props.children}
    </AnimatedBox>
  ) : (
    <StyledBox
      className={name ? `box-${name}` : "box"}
      wrap={wrap ? "true" : "false"}
      {...props}
    >
      {props.children}
    </StyledBox>
  );
};

/* 
  >>> Container
  padding: [refer to spacingProperties]
  margin: [refer to spacingProperties]
  animate: Boolean
*/
const StyledContainer = styled.div`
  ${spacingProperties};
`;

const AnimatedContainer = animated(StyledContainer);

const Container = props => {
  return props.animate ? (
    <AnimatedContainer
      className={name ? `container-${name}` : "container"}
      {...props}
    >
      {props.children}
    </AnimatedContainer>
  ) : (
    <StyledContainer
      className={name ? `container-${name}` : "container"}
      {...props}
    >
      {props.children}
    </StyledContainer>
  );
};

/* 
  >>> Area
  padding: [refer to spacingProperties]
  margin: [refer to spacingProperties]
  animate: Boolean
*/
const StyledArea = styled.div`
  ${spacingProperties};
`;

const AnimatedArea = animated(StyledArea);

const Area = props => {
  return props.animate ? (
    <AnimatedArea className={name ? `area-${name}` : "area"} {...props}>
      {props.children}
    </AnimatedArea>
  ) : (
    <StyledArea className={name ? `area-${name}` : "area"} {...props}>
      {props.children}
    </StyledArea>
  );
};

export { Item, Box, Container, Area };
