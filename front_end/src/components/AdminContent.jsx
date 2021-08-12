import React, { useEffect, useState } from "react";
import QueryCard from "./queryCard";
import axios from "axios";
import moment from "moment";
// import {useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { CircularProgress } from "@material-ui/core";

function AdminContent() {
  const [queries, setQueries] = useState([]);
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      databaseContent();
    }
  });

  function databaseContent() {
    axios
      .get("https://kartavya-academy-backend.herokuapp.com/api/query")
      .then((response) => {
        const data = response.data;
        return setQueries(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // if (isLoading) {
  //   return (
  //     <div className="admin-body">
  //       <CircularProgress />
  //     </div>
  //   );
  // }
  return (
    <div className="admin-body">
      <h1 className="query-heading">Queries</h1>
      <div className="admin-buttons">
      <LoginButton />
      <LogoutButton />
      </div>
      
      {queries.map(function (Query, i) {
        const time = moment(Query.date);
        const date = time.format("DD/MM/YYYY");
        return (
          <QueryCard
            class="query-card"
            key={i}
            name={Query.name}
            email={Query.email}
            contact={Query.contact}
            course={Query.course}
            date={date}
          />
        );
      })}
    </div>
  );
}
export default AdminContent;
