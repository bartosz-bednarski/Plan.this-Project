import { screen, render } from "@testing-library/react";
import Header from "../../welcomePage/Header";
import "@testing-library/jest-dom";
import App from "../../../App";
import Home from "../../welcomePage/Home";
import userEvent from "@testing-library/user-event";
describe("Home component", () => {
  test("sets text 'login' when userId is not in localStorage.", () => {
    render(
      <App>
        <Home />
      </App>
    );

    const userId = localStorage.getItem("userId");
    //   const buttonElement = screen.getByText("Plan.This", { exact: false });
    if (!userId) {
      const loginButton = screen.getByText("Login");
      expect(loginButton).toBeInTheDocument();
    }
  });

  test("sets text 'logout' when userId is in localStorage", () => {
    render(
      <App>
        <Home />
      </App>
    );

    const userId = localStorage.getItem("userId");
    //   const buttonElement = screen.getByText("Plan.This", { exact: false });
    if (userId != undefined) {
      const logoutButton = screen.getByText("Logout");
      expect(logoutButton).toBeInTheDocument();
    }
  });
  test("'create account' button navigates to registration website.", async () => {
    render(
      <App>
        <Home />
      </App>
    );
    const registerButton = screen.getByText("Create account");
    userEvent.click(registerButton);
    const registerElement = await screen.findByText(
      "Already have an account ? Log in."
    );
    expect(registerElement).toBeInTheDocument();
  });
  test("'login' button navigates to login website.", async () => {
    render(
      <App>
        <Header />
      </App>
    );
    const userId = localStorage.getItem("userId");
    if (!userId) {
      const loginButton = screen.getByRole("link");
      userEvent.click(loginButton);

      const loginOutput = await screen.findByText(
        "Don't have an account ? Register now for free."
      );
      expect(loginOutput).toBeInTheDocument();
    }
  });
});
