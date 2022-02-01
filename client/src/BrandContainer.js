import React from "react";
import BrandCard from "./BrandCard";


function BrandContainer({brands,HandleBrandClickTwo}){
    console.log(brands)
    if (brands.length === 0) {
        return (
           <div className="noBrands">
                <h1>There are no brands in this state</h1>
                <h3>(Check back soon for more !!!!)</h3>
            </div>
        );
    }
    return(
        <div>
            {brands.map((brand)=> <BrandCard key={brand.id} brand={brand} HandleBrandClickTwo={HandleBrandClickTwo} /> )}
        </div>
    )
}
export default BrandContainer;