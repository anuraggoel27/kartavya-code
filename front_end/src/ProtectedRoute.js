// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Route, Redirect } from "react-router-dom";
// export const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   useEffect(() => {
//     axios
//       .get("localhost:3001/admin")
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   });

//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (isAuthenticated) {
//           return <Component {...props} />;
//         } else {
//           return (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: {
//                   from: props.location,
//                 },
//               }}
//             />
//           );
//         }
//       }}
//     />
//   );
// };
