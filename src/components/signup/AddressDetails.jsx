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

const stateOptions = [
  { value: "ny", label: "New York" },
  { value: "ca", label: "California" },
  { value: "tx", label: "Texas" },
];

function AddressDetails({ onNext, onBack }) {
  const [formData, setFormData] = useState({
    streetAddress: "",
    country: "",
    city: "",
    state: "",
    zipCode: "",
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
        currentStep={2}
        steps={["Account", "Address", "Company", "Finish"]}
      />

      <h2 className="text-2xl font-bold text-center mb-6">
        Fill up you're Address
      </h2>

      <Input
        label="Street address"
        type="text"
        name="streetAddress"
        value={formData.streetAddress}
        onChange={handleChange}
        required
      />

      <Select
        label="Country"
        name="country"
        value={formData.country}
        onChange={handleChange}
        options={countryOptions}
        required
      />

      <Input
        label="City"
        type="text"
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
      />

      <Select
        label="State"
        name="state"
        value={formData.state}
        onChange={handleChange}
        options={stateOptions}
        required
      />

      <Input
        label="Zip code"
        type="text"
        name="zipCode"
        value={formData.zipCode}
        onChange={handleChange}
        required
      />

      <div className="flex gap-4">
        {/* <Button type="button" variant="secondary" onClick={onBack}>Back</Button> */}
        <Button type="submit">Next</Button>
      </div>

      <p className="text-center mt-4 text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="text-primary hover:underline">
          Sign in
        </a>
      </p>
    </form>
  );
}

export default AddressDetails;
