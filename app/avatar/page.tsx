'use client';

import { useState, useEffect } from "react";
import AvatarInitialize from "@/components/custom/AvatarInitialize";
import AvatarDetails from "@/components/custom/AvatarDetails";
import AvatarUsage from "@/components/custom/AvatarUsage";
import { useSearchParams } from "next/navigation";

const CreateAvatar = () => {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode") || "";

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    birthDate: "",
    hobbies: "",
    currentHairIndex: 0,
    currentBodyIndex: 0,
    currentMouthIndex: 0,
    education_and_work_experience: "",
    long_term_goals_and_dreams: "",
    health_preferences_and_habits: "",
    financial_situation_and_goals: "",
    relationships_and_family: "",
    preffered_hobbies_and_activities: ""
  });

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData && mode === "edit") {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  const updateFormData = (name: string, value: string) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      localStorage.setItem("formData", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const renderStepContent = () => {
    if (step === 1) return <AvatarInitialize onNext={handleNext} updateFormData={updateFormData} formData={formData} mode={mode} />;
    if (step === 2) return <AvatarDetails onBack={handleBack} onNext={handleNext} updateFormData={updateFormData} formData={formData} />;
    if (step === 3) return <AvatarUsage onBack={handleBack} formData={formData} />;
  };

  return (
    <div>
      {renderStepContent()}
    </div>
  );
};

export default CreateAvatar;