import React, { Component, Fragment } from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: var(--size-base);

  * {
    margin-bottom: var(--size-base);
  }
`;

export default class extends Component {
  render() {
    return (
      <StyledWrapper>
        <Link href="/examples/showcase">
          <a>Showcase</a>
        </Link>

        <Link href="/examples/leaderboard">
          <a>Leaderboard</a>
        </Link>

        <Link href="/examples/card">
          <a>Card</a>
        </Link>
      </StyledWrapper>
    );
  }
}
