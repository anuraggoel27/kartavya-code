import React, { useEffect, useState } from "react";
import QueryCard from "./queryCard";
import axios from "axios";
import moment from "moment";
import Loading from "../Loading";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SimpleTabs from "./Tab";
function AdminContent() {
  const [queries, setQueries] = useState([]);
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();
  const [done, setDone] = useState(undefined);
  useEffect(() => {
    if (isAuthenticated) {
      return databaseContent();
    }
  });

  async function databaseContent() {
    await axios
      .get("https://kartavya-academy-backend.herokuapp.com/api/query")
      .then((response) => {
        const data = response.data;
        return setQueries(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="admin-body">
      <h1 className="query-heading">Admin</h1>

      {isLoading ? (
        <Loading />
      ) : (
        <div className="admin-buttons">
          <LoginButton />
          <LogoutButton />
        </div>
      )}
      {isAuthenticated && (
        <div>
          <SimpleTabs />
        </div>
      )}
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
