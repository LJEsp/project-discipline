import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import textCrop from "../utils/textCrop";

const baseStyle = css``;

const StyledText = styled.span`
  ${props => textCrop(props.theme.font.lineHeight)}
  font-size: ${props => props.theme.font.scale[props.size]};;

`;

export class Typography extends Component {
  static propTypes = {
    as: PropTypes.string,
    size: PropTypes.number
  };

  static defaultProps = {
    as: "span",
    size: 0
  };

  render() {
    return <StyledText {...this.props}>{this.props.children}</StyledText>;
  }
}

export default Typography;
