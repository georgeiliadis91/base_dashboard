import { fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { useForm } from "./useForm";

describe("useForm", () => {
  const testFormData = { name: "test@mail.com", password: "p@ssW0rd" };

  it("Returns default given state", () => {
    const { result } = renderHook(() => useForm(testFormData));
    expect(result.current.formValues).toMatchObject(testFormData);
  });

  it("Updates hook state", () => {
    const { result } = renderHook(() => useForm(testFormData));

    act(() => {
      const event = {
        target: {
          name: "name",
          value: "georgy@mail.com",
        },
      };
      result.current.handleChange(event as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formValues).toMatchObject({
      name: "georgy@mail.com",
      password: "p@ssW0rd",
    });
  });
});
