import React from "react";
import { Box, Grid2 } from "@mui/material";
import { DataRibbon, TransactionBottomRow, TransactionsPerDay } from "@/components/data";

const Dashboard = () => {
  return (
    <Box>
      <Grid2 container gap={4} marginTop={2}>
        <DataRibbon />
        <TransactionsPerDay />
      </Grid2>
      <TransactionBottomRow />
    </Box>
  );
};
export default Dashboard;

