import React, { Component } from "react";
import HomeCategoryAccordion from "./HomeCategoryAccordion";
import HomeHeroCarousel from "./HomeHeroCarousel";
import SearchBox from "./SearchBox";

class HomeHeroSection extends Component {
  render() {
    return (
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-4">
            <HomeCategoryAccordion />
          </div>
          <div className="col-md-8">
            <HomeHeroCarousel />
            <SearchBox />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHeroSection;
