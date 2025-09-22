
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

export type UserFormValues = {
  name: string;
  email: string;
  department: string;
  designation: string;
  status: "active" | "inactive";
};


export default function UserForm() {
  const [submittedData, setSubmittedData] = useState<UserFormValues | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormValues>({
    defaultValues: {
      name: "",
      email: "",
      department: "",
      designation: "",
      status: "active",
    },
  });

  const onSubmit = (data: UserFormValues) => {
    setSubmittedData(data);
    reset(); // Optional: clear the form after submit
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 bg-white shadow-md rounded"
    >
      <h2 className="text-2xl font-bold mb-4">User Form</h2>

      {/* Name */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">Name</label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Name is required" })}
          className={`w-full px-3 py-2 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          className={`w-full px-3 py-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Department */}
      <div className="mb-4">
        <label htmlFor="department" className="block text-gray-700">Department</label>
        <input
          id="department"
          type="text"
          {...register("department", { required: "Department is required" })}
          className={`w-full px-3 py-2 border ${
            errors.department ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.department && (
          <p className="text-red-500 text-sm mt-1">{errors.department.message}</p>
        )}
      </div>

      {/* Designation */}
      <div className="mb-4">
        <label htmlFor="designation" className="block text-gray-700">Designation</label>
        <input
          id="designation"
          type="text"
          {...register("designation", { required: "Designation is required" })}
          className={`w-full px-3 py-2 border ${
            errors.designation ? "border-red-500" : "border-gray-300"
          } rounded`}
        />
        {errors.designation && (
          <p className="text-red-500 text-sm mt-1">{errors.designation.message}</p>
        )}
      </div>

      {/* Status */}
      <div className="mb-4">
        <label htmlFor="status" className="block text-gray-700">Status</label>
        <select
          id="status"
          {...register("status", { required: "Status is required" })}
          className={`w-full px-3 py-2 border ${
            errors.status ? "border-red-500" : "border-gray-300"
          } rounded`}
        >
          <option value="">Select status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        {errors.status && (
          <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Submit
      </button>

      {/* Submitted Data */}
      {submittedData && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 rounded">
          <h3 className="text-lg font-bold mb-2">Submitted Data:</h3>
          <pre className="whitespace-pre-wrap">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </form>
  );
}
