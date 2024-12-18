// import React, { Suspense, lazy } from "react";
// import {
//   Navigate,
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import { Path } from "../constants/path";
// import Login from "../pages/login";
// import NotFound from "../pages/not-found";
// import CreateTicket from "../pages/ticket/components/create-ticket";

// const Layout = lazy(() => import("../components/layout"));
// const Dashboard = lazy(() => import("../pages/dashboard"));
// const Ticket = lazy(() => import("../pages/ticket"));
// import { LinkedInCallback } from "react-linkedin-login-oauth2";

// const routes = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="*" element={<NotFound />} />
//       <Route path={Path.LOGIN} element={<Login />} />
//       <Route
//         exact
//         path={Path.LINKEDIN_CALLBACK}
//         element={<LinkedInCallback />}
//       />
//       <Route
//         path="/"
//         element={
//           <Suspense fallback={<>Loading ...</>}>
//             <Layout />
//           </Suspense>
//         }
//       >
//         <Route index element={<Navigate to={Path.DASHBOARD} />} replace />
//         <Route path={Path.DASHBOARD} element={<Dashboard />} />
//         <Route path={Path.TICKET} element={<Ticket />} />
//         <Route path={Path.CREATE_TICKET} element={<CreateTicket />} />
//         <Route path={`${Path.UPDATE_TICKET}/:id`} element={<CreateTicket />} />
//       </Route>
//     </>
//   )
// );

// export default routes;
