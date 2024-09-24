import React, { useEffect, useState } from "react";
import Styles from "../Component/Table.module.css";

const Table = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        console.log(result);
      })
      .catch((err) => {
        console.error(err);
        alert("failed to fetch data");
      });
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <div className={Styles.container}>
      <h1>Employee Data Table</h1>
      <table className={Styles.tableContainer}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
        {data.map((data, index) => {
          return (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.role}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Table;
