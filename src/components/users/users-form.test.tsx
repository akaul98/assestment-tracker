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
  it("shows validation when email is invalid and form is submitted", async () => {
    render(<UserForm />);
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "adarsh.kaul" }
    });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    await waitFor(() => {
      expect(screen.getByText(/Invalid email address/i)).toBeInTheDocument();
    });
  })
  it("shows submit successful when form is filled correctly and submitted", async () => {
    render(<UserForm />);
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Adarsh Kaul" }
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "adarsh.kaul@example.com" }
    });
    fireEvent.change(screen.getByLabelText(/department/i), {
      target: { value: "Engineering" }
    });
    fireEvent.change(screen.getByLabelText(/designation/i), {
      target: { value: "Software Engineer" }
    });
    fireEvent.change(screen.getByLabelText(/status/i), {
      target: { value: "active" }
    });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    await waitFor(() => {
      expect(screen.getByText(/Submitted Data/i)).toBeInTheDocument();
    });
  })
  it("shows validation when only some fields are filled and form is submitted", async () => {
    render(<UserForm />);
    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Adarsh Kaul" }
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "adarsh.kaul@example.com" }
    });
    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    await waitFor(() => {
      expect(screen.getByText(/department is required/i)).toBeInTheDocument();
      expect(screen.getByText(/designation is required/i)).toBeInTheDocument();
    });
  })

  it("resets form after successful submission", async () => {
  render(<UserForm />);
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Adarsh" } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "adarsh@test.com" } });
  fireEvent.change(screen.getByLabelText(/department/i), { target: { value: "Engineering" } });
  fireEvent.change(screen.getByLabelText(/designation/i), { target: { value: "Engineer" } });
  fireEvent.change(screen.getByLabelText(/status/i), { target: { value: "inactive" } });

  fireEvent.click(screen.getByRole("button", { name: /submit/i }));

  await waitFor(() => {
    expect(screen.getByText(/submitted data/i)).toBeInTheDocument();
  });

  expect(screen.getByLabelText(/name/i)).toHaveValue(""); // reset worked
  expect(screen.getByLabelText(/status/i)).toHaveValue("active"); // default reset
});

it("error disappears after correcting the input and resubmitting", async () => {
  render(<UserForm />);
  fireEvent.click(screen.getByRole("button", { name: /submit/i }));
  expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Adarsh" } });
  fireEvent.click(screen.getByRole("button", { name: /submit/i }));
})
})