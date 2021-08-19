import React from "react";
import BrandCard from "./BrandCard";


function BrandContainer({brands,HandleBrandClickTwo}){
    console.log(brands)
    return(
        <div>
            {brands.map((brand)=> <BrandCard key={brand.id} brand={brand} HandleBrandClickTwo={HandleBrandClickTwo} /> )}
        </div>
    )
}
export default BrandContainer;