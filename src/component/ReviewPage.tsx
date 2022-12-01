import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import { JsonToTable } from "react-json-to-table";

const ReviewPage = (props: any) => {
  // application form states
  const { orderId } = useParams();
  const [loanApplication, setLoanApplication] = useState<any>({});

  // review states
  const [status, setStatus] = useState<string>();
  const [review, setReview] = useState<string>("");
  const [updateTargets, setUpdateTargets] = useState<string[]>([]);

  const formFiels = [
    "project_type",
    "district",
    "block",
    "branch",
    "loan_amount",
    "first_name",
    "middle_name",
    "last_name",
    "gender",
    "marital_status",
    "age",
    "mothers_name",
    "fathers_name",
    "date_of_birth",
    "educational_qualitfication",
    "PAN_Number",
    "Aadhar_Number",
    "Address",
    "Pin_Code",
    "Phone_number",
    "Email_Id",
    "Permanent_Address",
    "Permanent_Pin_Code",
    "Permanent_Phone_number",
    "Permanent_Email_Id",
    "Agricultural_Income_Source",
    "Agricultural_Income",
    "Other_Income_Source",
    "Other_Income",
    "Total_Income",
    "Guarantor_Name",
    "Relationship_with_Guarantor",
    "Mobile_number_of_the_guarantor",
    "Email_ID_of_the_Guarantor",
    "PAN_card_number_of_guarantor",
  ];

  useEffect(() => {
    Axios({
      url: `http://localhost:3004/applications/${orderId}`,
      method: "GET",
    }).then((res) => {
      console.log(res.data.data.loan_applications);
      setLoanApplication(res.data.data.loan_applications);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-white text-4xl mb-4 font-bold text-center mt-16">
        Application for #: {orderId}
      </h1>
      <div className="min-w-2/5 font-regular bg-white bg-opacity-70 rounded mb-16 px-11 py-16">
        <div>
          <JsonToTable json={loanApplication} />
        </div>
        <div>
          <div>
            <label htmlFor="status"> Status </label>
            <select
              id="status"
              name="status"
              onChange={(e) => {
                console.log("status value on change: ", e.target.value);
                setStatus(e.target.value);
              }}
            >
              <option value="Pending Processing"> Pending Processing </option>
              <option value="Approved"> Approved </option>
              <option value="Needs further clarification">
                Needs further clarification
              </option>
              <option value="Rejected"> Rejected </option>
            </select>
          </div>
          <div>
            <label htmlFor="updateFields"> Select Fields To Update </label>
            <table>
              <thead>
                <tr>
                  <th> Field </th>
                  <th> Should be updated? </th>
                </tr>
              </thead>
            </table>
            {formFiels.map((field) => {
              return (
                <form>
                  <label className="block text-gray-700 text-md font-regular mb-2">
                    {" "}
                    {field}{" "}
                  </label>
                  <input
                    type="checkbox"
                    value={field}
                    className="shadow appearance-none border rounded py-2 px-2 text-gray-700 focus:outline-none focus:shadow-outline bg-white"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setUpdateTargets([...updateTargets, e.target.value]);
                      } else {
                        setUpdateTargets(
                          updateTargets.filter(
                            (item) => item !== e.target.value
                          )
                        );
                      }
                    }}
                  />
                </form>
              );
            })}
          </div>
          <div>
            <label
              htmlFor="review"
              className="block text-gray-700 text-md font-regular mb-2"
            >
              {" "}
              Review{" "}
            </label>
            <input
              type="text"
              id="review"
              name="review"
              onChange={(e) => setReview(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-800 hover:bg-blue-900 text-white font-medium py-1 px-4 rounded focus:outline-none focus:shadow-outline my-2 w-full text-lg mt-8"
              onClick={(e) => {
                const payload = {
                  review: review,
                  status: status,
                  update_targets: updateTargets,
                };
                Axios({
                  method: "POST",
                  url: `http://localhost:3004/applications/review/${orderId}`,
                  data: payload,
                }).then((res) => {
                  alert(res.data);
                });
              }}
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
