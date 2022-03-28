import React, { useState } from "react";

export default function question1() {
  const [values, setValues] = useState("");
  const [isPrime, setIsPrime] = useState("isprime");
  const [listAdd, setListAdd] = useState([]);

  const CheckInput = () => {
    if (values.length > 0) {
      const inputdata = parseFloat(values);
      const cal = Math.round(parseFloat(inputdata));
      setValues(cal.toString());
    }
  };

  const addValue = (valuesData) => {
    const values = new RegExp(/^-?[0-9,]*\.?[0-9,]*$/g).test(valuesData);
    if (values) {
      setValues(valuesData);
    }
  };

  const enterValue = (e) => {
    // if (e.keyCode === 13) {
    const str = values.replace("-", "1");
    const inputdata = parseFloat(str);
    const cal = Math.round(parseFloat(inputdata));
    setListAdd([...listAdd, cal]);
    setValues("");
    // }
  };

  const checkFib = (n) => {
    if (n <= 1) {
      return <p>False</p>;
    }
    return <p>True</p>;
  };

  const checkIsPrime = (n, status) => {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return <p>False</p>;
      }
    }
    return <p>True</p>;
  };

  return (
    <div>
      <div className="d-flex">
        <div className="custom-row-1">
          <input
            type="text"
            value={values}
            onBlur={() => CheckInput()}
            onChange={(e) => addValue(e.target.value)}
            // onKeyDown={(e) => enterValue(e)}
          />
          <input
            className="mt-2"
            type="button"
            onClick={(e) => enterValue(e)}
            value="Submit"
          />
          <div className="mt-2 box-show-add">
            {listAdd.map((data, id) => {
              return (
                <div key={id}>
                  <p>{data}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="custom-row-2">
          <select onChange={(e) => setIsPrime(e.target.value)}>
            <option value="isprime">isPrime</option>
            <option value="isfibonacci">isFibonacci</option>
          </select>
        </div>
        <div className="custom-row-3">
          <div className="mt-4">
            {listAdd.map((data, k) => {
              return (
                <div key={k}>
                  {isPrime === "isprime" && <div>{checkIsPrime(data)}</div>}
                  {isPrime === "isfibonacci" && <div>{checkFib(data)}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-row-1 {
          border: 1px solid;
          width: 200px;
        }

        .box-show-add {
          height: 600px;
          overflow-y: scroll;
        }

        .custom-row-2 {
          border: 1px solid;
          min-width: 100px;
          // height: 100vh;
          overflow-x: scroll;
        }

        .custom-row-3 {
          border: 1px solid;
          width: 300px;
        }

        @media screen and (min-width: 600px) {
          .custom-row-2 {
            width: 100%;
            overflow-x: unset;
          }
        }
      `}</style>
    </div>
  );
}
