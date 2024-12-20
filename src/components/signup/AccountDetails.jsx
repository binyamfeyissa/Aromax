import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import StepIndicator from "./StepIndicator";

function AccountDetails({ onNext }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(formData);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
      <StepIndicator
        currentStep={1}
        steps={["Account", "Address", "Company", "Finish"]}
      />

      <h2 className="text-2xl font-bold text-center mb-6">Let's Sign you Up</h2>
      <p className="text-center text-gray-600 mb-8">
        Please Enter your account detailss
      </p>

      <Input
        label="Full Name"
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
      />

      <Input
        label="Email address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <Input
        label="Phone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
        helperText="Your phone will be used to receive WhatsApp text"
      />

      <Input
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <Button type="submit">Next</Button>

      <p className="text-center mt-4 text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-primary hover:underline">
          Sign in
        </a>
      </p>
    </form>
  );
}

export default AccountDetails;
