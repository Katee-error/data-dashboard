import { Grid2 } from "@mui/material";
import scss from "./DataRibbon.module.scss";
import { DataCard } from "../data-card";

export const DataRibbon = () => {
  return (
    <Grid2 container gap={2} className={scss.dataRibbon}>
      <Grid2>
        <DataCard
          title={"Total Sales"}
          value={"462"}
          description={
            "The totals of all DataSoft products in the current financial year"
          }
        />
      </Grid2>
      <Grid2>
        <DataCard
          title={"Total Value"}
          value={"$25,732.53"}
          description={"The total sales of the current financial year"}
        />
      </Grid2>
      <Grid2>
        <DataCard
          title={"Avg. Order Value"}
          value={"$159.30"}
          description={
            "The average order value for all sales this current financial year"
          }
        />
      </Grid2>
      <Grid2>
        <DataCard
          title={"Conversion rate"}
          value={"0.61%"}
          description={"How many pitches become sales"}
        />
      </Grid2>
    </Grid2>
  );
};
