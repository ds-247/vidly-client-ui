import React, { useState, useEffect } from "react";
import NoData from "./NoData";
import CTable from "./Table/CTable";
import SmoothScrollingToTop from "./moviesTableUtil/SmoothScrollingToTop";
import { getCurRentals, getPrevRentals } from "../services/rentalService";
import "../componentStyle/ordersTable.css";
import MovieDivider from "./MovieDivider";

function Orders() {
  const [currentRentals, setCurrentRentals] = useState([]);
  const [oldRentals, setOldRentals] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: curRentalData } = await getCurRentals();
        const { data: prevRentalData } = await getPrevRentals();

        setCurrentRentals(curRentalData);
        setOldRentals(prevRentalData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchData();
  }, []);

  SmoothScrollingToTop();

  const oldRentalHeader = [
    { label: "Name", pathName: "title" },
    { label: "Rented On", pathName: "rentedOn" },
    { label: "Returned On", pathName: "returnedOn" },
    { label: "Days rented" },
    { label: "Rate", pathName: "rate" },
    { label: "Amount (₹)" },
  ];

  const curRentalHeader = [
    { label: "Name", pathName: "movieTitle" },
    { label: "Rented On", pathName: "rentedOn" },
    { label: "Rate", pathName: "rate" },
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
