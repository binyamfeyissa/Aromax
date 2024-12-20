import { useState } from "react";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import StepIndicator from "./StepIndicator";

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
];

function CompanyDetails({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    companyTel: "",
    companyCountry: "",
    companyCity: "",
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
        currentStep={3}
        steps={["Account", "Address", "Company", "Finish"]}
      />

      <h2 className="text-2xl font-bold text-center mb-6">
        Fill in your company details
      </h2>

      <Input
        label="Company Name"
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        required
      />

      <Input
        label="Company Email"
        type="email"
        name="companyEmail"
        value={formData.companyEmail}
        onChange={handleChange}
        required
      />

      <Input
        label="Company Tel"
        type="tel"
        name="companyTel"
        value={formData.companyTel}
        onChange={handleChange}
        required
      />

      <Select
        label="Company Country"
        name="companyCountry"
        value={formData.companyCountry}
        onChange={handleChange}
        options={countryOptions}
        required
      />

      <Input
        label="Company City"
        type="text"
        name="companyCity"
        value={formData.companyCity}
        onChange={handleChange}
        required
      />

      <div className="flex gap-4">
        {/* <Button type="button" variant="secondary" onClick={onBack}>Back</Button> */}
        <Button type="submit">Sign Up</Button>
      </div>
    </form>
  );
}

export default CompanyDetails;
