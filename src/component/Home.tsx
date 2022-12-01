import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { Button,Table } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const Home = (props: any) => {
  const [trackingTickets, setTrackingTickets] = useState<any[]>([]);
  const navigateTo = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigateTo('/login')
    }
  }, []);
  useEffect(() => {
    Axios({
     // url: "http://localhost:3004/track",
      url: "http://64.227.181.5:3010/track",
      method: "GET",
    }).then((res) => {
      console.log(res.data.data.order_tracking_details);
      setTrackingTickets(res.data.data.order_tracking_details);
    });
  }, []);

  console.log({trackingTickets})
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
   
      <div>
        <h1 className="text-white text-4xl mb-4 font-bold text-center mt-16">         
          Loan Application Details
        </h1>
        <Table className="font-regular bg-white bg-opacity-70 rounded mb-16">
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
                      <Button variant="primary" size="sm"  type="submit" > Review</Button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Home;
