import React, { useState } from "react";

export default function question3() {
  const [openSwitch, setOpenSwitch] = useState(false);
  return (
    <div>
      <div className="mt-5 container">
        <h1>Code Quiz</h1>
        {openSwitch ? (
          <>
            <p className="mt-3">Funds NAV</p>
            <table>
              <thead>
                <td>
                  <b className="px-3">Fund Name</b>
                </td>
                <td>
                  <b>Nav</b>
                </td>
                <td>
                  <b>Bid</b>
                </td>
                <td>
                  <b>Offer</b>
                </td>
                <td>
                  <b>Change</b>
                </td>
              </thead>
              <tbody>
                <tr>
                  <td>B-INCOMESSF</td>
                  <td>10.0548</td>
                  <td>10.0549</td>
                  <td>10.0548</td>
                  <td>0.0107</td>
                </tr>
                <tr>
                  <td>BM70SSF</td>
                  <td>9.9774</td>
                  <td>9.9775</td>
                  <td>9.9774</td>
                  <td>0.0927</td>
                </tr>
                <tr>
                  <td>BEQSSF</td>
                  <td>11.247</td>
                  <td>11.2471</td>
                  <td>11.247</td>
                  <td>0.1319</td>
                </tr>
                <tr>
                  <td>B-FUTURESSF</td>
                  <td>11.443</td>
                  <td>11.4431</td>
                  <td>11.443</td>
                  <td>0.1488</td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <>
            <p className="mt-3">Welcome to Code Quiz</p>
            <p>You need to accept cookie to continue</p>
          </>
        )}
        <input
          type="button"
          onClick={() => setOpenSwitch((pre) => !pre)}
          value={openSwitch ? "Logout" : "Accept"}
        />
      </div>
      <style>
        {`
        thead td {
          padding-right: 5px;
        }
        tbody tr td {
          padding-right: 20px;
        }
        `}
      </style>
    </div>
  );
}
