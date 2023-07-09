import React from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, Card, IconActionBtn } from "../../Components";
import { useParams } from "react-router-dom";
import { data } from "../../Data";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Destination = () => {
  const { continentName, countryName } = useParams();
  const navigate = useNavigate();

  const getContinent = data.continents.find((currentContinent) => {
    return currentContinent.name == continentName;
  });
  console.log(getContinent);

  const getCountry = getContinent.find((currentCountry) => {
    return currentCountry.name == countryName;
  });

  return (
    <PageContainer className="flex flex-col gap-12">
      <IconActionBtn handleClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconActionBtn>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl text-center font-semibold">
          Welcome to Trip Advisor
        </h1>
      </div>
      <div className="flex justify-between">
        {getCountry?.destinations?.map((currentCountry) => {
          return <Card {...currentCountry} key={currentCountry.id} />;
        })}
      </div>
    </PageContainer>
  );
};

export default Destination;
