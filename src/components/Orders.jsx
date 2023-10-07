import React, { useState, useEffect } from "react";
import {
  getCurRentals,
  getPrevRentals,
  returnMovie,
} from "../services/rentalService";
import SmoothScrollingToTop from "./moviesTableUtil/SmoothScrollingToTop";
import Confirmation from "./Confirmation";
import NoData from "./NoData";
import CTable from "./Table/CTable";
import MovieDivider from "./MovieDivider";
import "../componentStyle/ordersTable.css";

function Orders() {
  const [currentRentals, setCurrentRentals] = useState([]);
  const [oldRentals, setOldRentals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: curRentalData } = await getCurRentals();
        const { data: prevRentalData } = await getPrevRentals();
        console.log(prevRentalData);
        setCurrentRentals(curRentalData);
        setOldRentals(prevRentalData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []);

  SmoothScrollingToTop();

  const handleReturn = async (rentalData) => {
    console.log("returned", rentalData);
    await returnMovie(rentalData);
  };

  const oldRentalHeader = [
    { label: "Name", pathName: "movieTitle" },
    { label: "Rented On", pathName: "rentedOn" },
    { label: "Returned On", pathName: "returnedOn" },
    { label: "Days rented", pathName: "duration" },
    { label: "Rate", pathName: "rate" },
    { label: "Amount (₹)", pathName: "rentalFee" },
  ];

  const curRentalHeader = [
    { label: "Name", pathName: "movieTitle" },
    { label: "Rented On", pathName: "rentedOn" },
    { label: "Rate", pathName: "rate" },
    {
      component: (rentalData) => (
        <Confirmation
          label={"Return"}
          title={"movieTitle"}
          rate={"rate"}
          movie={rentalData}
          onClick={handleReturn}
        />
      ),
    },
  ];

  return (
    <>
      {currentRentals.length === 0 && oldRentals.length === 0 && <NoData />}
      {currentRentals.length !== 0 && (
        <CTable header={curRentalHeader} data={currentRentals} />
      )}
      {oldRentals.length !== 0 && (
        <>
          {" "}
          <MovieDivider text={"Previous Rentals "} />
          <CTable header={oldRentalHeader} data={oldRentals} />{" "}
        </>
      )}
    </>
  );
}

export default Orders;
