import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Home = (props: any) => {
  const [trackingTickets, setTrackingTickets] = useState<any[]>([]);

  useEffect(() => {
    Axios({
      url: "http://localhost:3004/track",
      method: "GET",
    }).then((res) => {
      console.log(res.data.data.order_tracking_details);
      setTrackingTickets(res.data.data.order_tracking_details);
    });
  }, []);

  return (
    <div>
      <div>
        <h1> Loan Application Details </h1>
        <table>
          <thead>
            <tr>
              <th> Application Number </th>
              <th> Status </th>
              <th> Comments </th>
              <th> Review </th>
            </tr>
          </thead>
          <tbody>
            {trackingTickets.map((ticket) => {
              return (
                <tr>
                  <td> {ticket.order_id} </td>
                  <td> {ticket.status} </td>
                  <td> {ticket.review} </td>
                  <td>
                    <Link to={`/review/${ticket.order_id}`}>
                      <button> Review </button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
