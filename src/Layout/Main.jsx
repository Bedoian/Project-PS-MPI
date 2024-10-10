import { Outlet } from "react-router-dom";
import Nav from "../Components/Navigation/Nav";

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;