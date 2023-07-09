import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Link, useLocation, useParams } from "react-router-dom";

const Card = (props) => {
  const { continentName } = useParams();
  const { id, name, image, countries, destinations } = props;
  const location = useLocation();

  let pathName = "";

  if (location.pathname == `/continent/${continentName}`) {
    pathName = `/continent/${continentName}/${name}`;
  } else {
    pathName = `/continent/${name}`;
  }

  return (
    <Link
      to={pathName}
      className="flex flex-col min-w-[350px] max-w-[350px] max-h-[300px] border border-stone-400 rounded-sm relative overflow-hidden"
    >
      <img src={image} alt={name} className="w-full h-full object-cover" />

      <div className="flex py-2 px-4 gap-2 absolute bg-stone-900 text-stone-50 text-center">
        <LocationOnIcon />
        <span className="font-normal text-stone-400">{name}</span>
      </div>
    </Link>
  );
};

export default Card;
