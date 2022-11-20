import { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
import LoanApplication from "./Component/LoanApplication";

function App() {
  const [loanApplications, setLoanApplications] = useState<any[]>([]);

  useEffect(() => {
    Axios({
      url: "http://localhost:3004/applications",
      method: "GET",
      // withCredentials: true,
    }).then((res) => {
      console.log(res.data.data.loan_applications);
      setLoanApplications(res.data.data.loan_applications);
    });
  }, []);

  return (
    <div className="App">
      <div>
        {loanApplications.map((loanApplication) => {
          return <LoanApplication loanApplication={loanApplication} />;
        })}
      </div>
    </div>
  );
}

export default App;
