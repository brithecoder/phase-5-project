import React from "react";
import BrandCard from "./BrandCard";

function ExplorePage({brands,currentBrand,HandleBrandClickTwo }){
  console.log(brands)
    return(
        <div>
           <h1 className="explorePagetitle">Explore Popular Locations</h1>
           {brands.map((brand)=> <BrandCard key={brand.id} brand={brand} HandleBrandClickTwo={HandleBrandClickTwo}  />)}
        </div>
    )
  }
export default ExplorePage;