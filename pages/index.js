import React, { Component, Fragment } from "react";
import Link from "next/link";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Link href="/examples/showcase">
          <a>Showcase</a>
        </Link>

        <Link href="/examples/leaderboard">
          <a>Leaderboard</a>
        </Link>

        <Link href="/examples/card">
          <a>Card</a>
        </Link>
      </Fragment>
    );
  }
}
