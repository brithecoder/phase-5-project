import React from "react";
import BrandCard from "./BrandCard";

function ExplorePage({brands,currentBrand,HandleBrandClickTwo }){
  console.log(brands)
    return(
        <div>
           <h1 className="explorePagetitle">Explore Popular Locations</h1>
          <div className="ExplorepageBrands">  {brands.map((brand)=> <BrandCard key={brand.id} brand={brand} HandleBrandClickTwo={HandleBrandClickTwo}  />)} </div>
        </div>
    )
  }
export default ExplorePage;