import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import textCrop from "../utils/textCrop";

const baseStyle = css``;

const StyledText = styled.span`
  /* ${p => textCrop()} */
  ${p => textCrop(p.theme.font.lineHeight)}
  /* line-height: ${p => (p.as === "p" ? p.theme.font.lineHeight : null)}; */
  font-size: ${p => p.theme.font.scale[p.size]};
  font-weight: ${p => (p.bold ? "700" : "300")};
  text-transform: ${p => (p.uppercase ? "uppercase" : null)};
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
