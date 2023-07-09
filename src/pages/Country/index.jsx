import React from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, Card, IconActionBtn } from "../../Components";
import { useParams } from "react-router-dom";
import { data } from "../../Data";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Country = () => {
  const { continentName } = useParams();
  const navigate = useNavigate();

  const getContinent = data.continents.find((currentContinent) => {
    return currentContinent.name == continentName;
  });

  return (
    <PageContainer className="flex flex-col gap-12">
      <IconActionBtn handleClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconActionBtn>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl text-center font-semibold">
          Top Countries in Asia for your next holiday
        </h1>
      </div>
      <div className="flex justify-between">
        {getContinent?.countries?.map((currentContinent) => {
          return <Card {...currentContinent} key={currentContinent.id} />;
        })}
      </div>
    </PageContainer>
  );
};

export default Country;
