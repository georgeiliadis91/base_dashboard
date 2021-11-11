import { render } from "@testing-library/react";
import { Login } from "./Login";

function renderLogin() {
  return render(<Login />);
}

//renders login page for testing
describe("Login", () => {
  it("renders login page and its components", () => {
    const { container } = renderLogin();
    expect(container).toBeInTheDocument();
    expect(container.querySelector("form")).toBeInTheDocument();
    expect(container.querySelector("input[type='email']")).toBeInTheDocument();
    expect(
      container.querySelector("input[type='password']")
    ).toBeInTheDocument();
    expect(container.querySelector("input[type='submit']")).toBeInTheDocument();
  });
});
