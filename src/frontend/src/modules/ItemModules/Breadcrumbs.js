import React, { Component } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";

class BreadcrumbsComponent extends Component {
  render() {
    return (
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ padding: "2px", fontWeight: "bolder", fontSize: "larger" }}
      >
        <Link color="inherit" href="/">
          Home
        </Link>
        <Link color="inherit" href="/explore">
          Product
        </Link>
        <Link
          color="textPrimary"
          href={`/product/${this.props.proid}`}
          aria-current="page"
        >
          {this.props.proid}
        </Link>
      </Breadcrumbs>
    );
  }
}

export default BreadcrumbsComponent;
