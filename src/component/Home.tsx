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
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div>
        <h1 className="text-white text-4xl mb-4 font-bold text-center mt-16">
          {" "}
          Loan Application Details{" "}
        </h1>
        <table className="table-auto font-regular bg-white bg-opacity-70 rounded mb-16">
          <thead className="bg-gray-200 px-4">
            <tr>
              <th className="py-3 px-4"> Application Number </th>
              <th className="py-3 px-4"> Status </th>
              <th className="py-3 px-4"> Comments </th>
              <th className="py-3 px-4"> Review </th>
            </tr>
          </thead>
          <tbody>
            {trackingTickets.map((ticket) => {
              return (
                <tr className="text-center">
                  <td className="py-3 px-7"> {ticket.order_id} </td>
                  <td className="py-3 px-7"> {ticket.status} </td>
                  <td className="py-3 px-7"> {ticket.review} </td>
                  <td className="px-4">
                    <Link to={`/review/${ticket.order_id}`}>
                      <button className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-1 px-4 rounded focus:outline-none focus:shadow-outline my-2 w-full text-lg">
                        {" "}
                        Review{" "}
                      </button>
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
