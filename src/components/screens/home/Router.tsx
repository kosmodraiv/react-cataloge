import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import CarDetail from "../car-details/CarDetail"

const Router = () => {
    return <BrowserRouter>
    <Routes>
        <Route element={<Home />} path="/"></Route>
        <Route element={<CarDetail />} path="/car/:id"></Route>

        <Route element={<div>Not Found</div>} path="*"></Route>
    </Routes>
    </BrowserRouter>
}

export default Router