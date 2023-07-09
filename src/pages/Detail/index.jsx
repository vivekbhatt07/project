import React from "react";
import { PageContainer, IconActionBtn } from "../../Components";
import { useParams } from "react-router-dom";
import { data } from "../../Data";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Detail = () => {
  const navigate = useNavigate();

  const { continentName, countryName, destinationName } = useParams();

  const getContinent = data.continents.find((currentContinent) => {
    return currentContinent.name == continentName;
  });

  const getCountry = getContinent?.countries?.find((currentCountry) => {
    return currentCountry.name == countryName;
  });

  const getDestination = getCountry?.destinations.find((currentDestination) => {
    return currentDestination.name.split(" ").join("") == destinationName;
  });
  return (
    <PageContainer className="flex flex-col gap-8">
      <IconActionBtn handleClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconActionBtn>
      <h1 className="text-4xl text-center">{getDestination?.name}</h1>
      <div className="flex gap-4">
        <div className="w-[400px]">
          <img src={getDestination?.image} alt={getDestination.name} />
        </div>
        <div>
          <div>
            <strong className="text-2xl font-bold">Description</strong>
            <p>{getDestination?.description}</p>
          </div>
          <div>
            <strong className="text-2xl font-bold">Ratings</strong>
            <p>{getDestination?.ratings}</p>
          </div>
          <div>
            <strong className="text-2xl font-bold">Reviews</strong>
            <p>{getDestination?.reviews}</p>
          </div>
          <div>
            <strong className="text-2xl font-bold">Location</strong>
            <p>{getDestination?.location}</p>
          </div>
          <div>
            <strong className="text-2xl font-bold">Open Hours</strong>
            <p>{getDestination?.openingHours}</p>
          </div>
          <div>
            <strong className="text-2xl font-bold">Ticket Time</strong>
            <p>{getDestination?.ticketPrice}</p>
          </div>
          <a href={getDestination.location} target="_blank">
            Website
          </a>
        </div>
      </div>
    </PageContainer>
  );
};

export default Detail;
