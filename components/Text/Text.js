import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import textCrop from "../utils/textCrop";

const baseStyle = css``;

const StyledText = styled.span`
  ${props => textCrop(props.theme.font.lineHeight)}

  color: ${props => (props.as === "h1" ? "red" : "green")};
  font-size: ${props => props.theme.font.scale[3]};
`;

export class Text extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired
  };

  static defaultProps = {
    as: "span"
  };

  render() {
    return <StyledText {...this.props}>{this.props.children}</StyledText>;
  }
}

export default Text;
