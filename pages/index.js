import React, { Component, Fragment } from "react";
import Link from "next/link";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Link href="/examples/showcase">
          <a>Showcase</a>
        </Link>
      </Fragment>
    );
  }
}
