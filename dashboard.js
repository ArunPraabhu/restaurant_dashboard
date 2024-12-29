import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";

const Dashboard = () => {
  const profitData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        label: "Profit (₹)",
        data: [200000, 220000, 250000, 300000, 350000, 370000, 400000, 450000, 480000],
        borderColor: "#4b7bec",
        backgroundColor: "rgba(75, 123, 236, 0.2)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Visitors</Typography>
              <Typography variant="h4">580</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Orders</Typography>
              <Typography variant="h4">1080</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Earnings</Typography>
              <Typography variant="h4">₹3,50,000</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Satisfaction</Typography>
              <Typography variant="h4">4.0/5</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Card style={{ marginTop: "20px", padding: "20px" }}>
        <Typography variant="h6">Profit Trends</Typography>
        <Line data={profitData} />
      </Card>
    </div>
  );
};

export default Dashboard;
