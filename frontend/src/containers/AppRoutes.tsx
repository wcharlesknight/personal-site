import React, { lazy, Suspense } from "react";

import { BrowserRouter as Redirect, Route, Routes } from "react-router-dom";
import Login from "./Login";

//Home
const Home = lazy(() => import("./Home"));

function withSuspense(Component: React.FunctionComponent) {
    return (props: any) => (
        <Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </Suspense>
    );
}

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path={"/login"} element={<Login />} />
                {/* <Route path={`*`} element={<Home />} /> */}
            </Routes>
        </>
    );
}
export default AppRoutes;
