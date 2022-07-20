import React from "react";
import Price from "./price";
import OldPrice from "./old-price";

function FullPrice({price, oldprice}){
  const showOldPrice= oldprice && price<oldprice;

  return (
    <React.Fragment>
      {showOldPrice && <OldPrice value={oldprice} />}
      {showOldPrice && " "}
      <Price value={price} />
    </React.Fragment>
  );

}

export default FullPrice;