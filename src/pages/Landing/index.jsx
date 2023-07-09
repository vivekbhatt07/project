import React from "react";
import { PageContainer, Card } from "../../Components";
import { data } from "../../Data";

const Landing = () => {
  return (
    <PageContainer className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl text-center font-semibold">
          Welcome to Trip Advisor
        </h1>
        <p className="text-center text-xl font-semibold">
          Top Continents for your next holiday
        </p>
      </div>
      <div className="flex justify-between">
        {data.continents.map((currentContinent) => {
          return <Card {...currentContinent} key={currentContinent.id} />;
        })}
      </div>
    </PageContainer>
  );
};

export default Landing;
