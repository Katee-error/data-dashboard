import React from "react";
import Paper from "@mui/material/Paper";
import scss from "./TransactionsBottomRow.module.scss";
import { DataChart } from "../data-charts";
import { doughnutChartData } from "../mock-data/mock-data";
import { Grid2 } from "@mui/material";

export const TransactionBottomRow = () => {
  return (
    <Grid2 container className={scss.bottomRow}>
      <Grid2>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid2>
      <Grid2>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid2>
      <Grid2>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid2>
      <Grid2>
        <Paper className={scss.dataCard}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid2>
    </Grid2>
  );
};
