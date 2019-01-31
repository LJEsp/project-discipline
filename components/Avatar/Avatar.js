import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledAvatar = styled.figure`
  /* border: 1px solid magenta; */
  border-radius: 1000em;
  overflow: hidden;
  /* width: ${p => p.theme.size.xl};
  height: ${p => p.theme.size.xl}; */
  /* width: var(--size-base);
  height: var(--size-base); */

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const Avatar = props => {
  return <StyledAvatar>{props.children}</StyledAvatar>;
};

Avatar.propTypes = {};

export default Avatar;
