import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../components/store/appStore";

it('Should Contain 7 list items', () => {
    render(<BrowserRouter>
        <Provider store={appStore}>
            <NavBar />
        </Provider>
    </BrowserRouter>);


})