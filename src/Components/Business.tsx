import React from "react";
import { RestaurantInterface } from "../Types/Interfaces";

interface businessProp {
  aBusiness: RestaurantInterface;
}

export default function Business({ aBusiness }: businessProp) {
  return (
    <div>
      <img src={aBusiness.imageSrc} alt="Image of the business" />
      <h1>{aBusiness.name}</h1>
      <p>{aBusiness.address}</p>
      <p>{aBusiness.city}</p>
      <p>{aBusiness.state}</p>
      <p>{aBusiness.zipCode}</p>
      <p>{aBusiness.category}</p>
      <p>{aBusiness.rating}</p>
      <p>{aBusiness.reviewCount}</p>
    </div>
  );
}
