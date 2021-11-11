import { render, queryByTestId, findByTestId } from "@testing-library/react";
import { Login } from "./Login";

function renderLogin() {
  return render(<Login />);
}

//renders login page for testing
describe("Login", () => {
  it("renders login page", () => {
    const { container } = renderLogin();
    expect(container).toBeInTheDocument();
  });

  it("renders login form", () => {
    const { container } = renderLogin();
    expect(container.querySelector("form")).toBeInTheDocument();
  });

  it("renders email input", () => {
    const { container } = renderLogin();
    expect(container.querySelector("input[type='email']")).toBeInTheDocument();
  });

  it("renders password input", () => {
    const { container } = renderLogin();
    expect(
      container.querySelector("input[type='password']")
    ).toBeInTheDocument();
  });

  it("renders submit button", () => {
    const { container } = renderLogin();
    expect(container.querySelector("input[type='submit']")).toBeInTheDocument();
  });
});
