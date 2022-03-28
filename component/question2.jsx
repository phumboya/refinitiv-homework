import React, { useEffect, useState } from "react";
import axios from "axios";

export default function question2() {
  const [list, setChecklist] = useState({
    count: 0,
    rawData: [],
  });
  const [checkValues, setcheckValues] = useState("");
  const [listFilter, setListFilter] = useState({
    dataFilter: [],
  });

  const callService = async () => {
    await axios
      .get("https://api.publicapis.org/categories")
      .then((res) => {
        if (res.status === 200) {
          setChecklist({
            count: res.data.count,
            rawData: res.data.categories,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    callService();
  }, []);

  const changeFilter = (values) => {
    const bedrooms = list.rawData?.filter((name) => name.includes(values));
    setListFilter({
      dataFilter: bedrooms,
    });
    setcheckValues(values);
  };

  return (
    <div className="container">
      <div>
        <input
          type="text"
          value={checkValues}
          onChange={(e) => changeFilter(e.target.value)}
          placeholder="Search"
        />
      </div>

      <div className="mt-5 mb-5">
        <p className="text-search">Search : {checkValues}</p>
        <h5 className="mb-3">Count: {list.count}</h5>
        <h3 className="mb-3">Categories</h3>
        {checkValues.length > 0 ? (
          <>
            <div className="row">
              {listFilter.dataFilter?.map((data, id) => {
                return (
                  <div className="col-4" key={id}>
                    <p className="mb-0 custom-box-row">{data}</p>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className="row ">
              {list.rawData?.map((data, id) => {
                return (
                  <div className="col-4" key={id}>
                    <p className="mb-0 custom-box-row">{data}</p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      <style jsx>{`
        .text-search {
          min-height: 20px;
        }

        .custom-box-row {
          padding: 10px;
          margin: 10px;
          border: 1px solid;
        }

        .active {
          color: red;
        }
      `}</style>
    </div>
  );
}
