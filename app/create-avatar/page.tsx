'use client'

import { useState } from "react";
import AvatarInitialize from "@/components/custom/AvatarInitialize";
import AvatarDetails from "@/components/custom/AvatarDetails";
import AvatarUsage from "@/components/custom/AvatarUsage";

const CreateAvatar = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    birthDate: "",
    hobbies: "",
  });

  // Function to update formData based on input name
  const updateFormData = (name: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStepContent = () => {
    if (step === 1) return <AvatarInitialize onNext={handleNext} updateFormData={updateFormData} formData={formData} />;
    if (step === 2) return <AvatarDetails onBack={handleBack} onNext={handleNext} />;
    if (step === 3) return <AvatarUsage onBack={handleBack} />;
  };

  return (
    <div>
      {renderStepContent()}
    </div>
  );
};

export default CreateAvatar;
