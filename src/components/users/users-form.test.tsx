import UserForm from "./user-form";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';

describe("UserForm Component", () => {
  // 1️⃣ Render Test
  it("renders all fields and the submit button", () => {
    render(<UserForm />);
    // Check all inputs and select exist
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/department/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/designation/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/status/i)).toBeInTheDocument();

    // Submit button exists
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  })

  // 2️⃣ Validation Test
  it("shows validation when all the textboxes are empty and form is submitted", async () => {
    render(<UserForm />);
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    await waitFor(() => {
      expect(screen.getByText(/name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/department is required/i)).toBeInTheDocument();
      expect(screen.getByText(/designation is required/i)).toBeInTheDocument();
    });
  })
});
