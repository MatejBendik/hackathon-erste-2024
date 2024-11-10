import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

interface AvatarInitializeProps {
  onNext: () => void;
  updateFormData: (name: string, value: string) => void;
  formData: {
    name: string;
    gender: string;
    age: string;
    futureAge: string;
    hobbies: string;
    currentHairIndex: number;
    currentBodyIndex: number;
    currentMouthIndex: number;
  };
  mode: string;
}

const AvatarInitialize = ({
  onNext,
  updateFormData,
  formData,
  mode,
}: AvatarInitializeProps) => {
  const hairImages = [
    "/Hair1.png",
    "/Hair2.png",
    "/Hair3.png",
    "/Hair4.png",
    "/Hair5.png",
  ];
  const bodyImages = ["/Body1.png", "/Body2.png", "/Body3.png", "/Body4.png"];
  const mouthImages = [
    "/Mouth1.png",
    "/Mouth2.png",
    "/Mouth3.png",
    "/Mouth4.png",
    "/Mouth5.png",
    "/Mouth6.png",
  ];

  const handleNextHair = () => {
    const newHairIndex =
      (Number(formData.currentHairIndex) + 1) % hairImages.length;
    updateFormData("currentHairIndex", newHairIndex.toString());
  };

  const handlePrevHair = () => {
    const newHairIndex =
      (Number(formData.currentHairIndex) - 1 + hairImages.length) %
      hairImages.length;
    updateFormData("currentHairIndex", newHairIndex.toString());
  };

  const handleNextBody = () => {
    const newBodyIndex =
      (Number(formData.currentBodyIndex) + 1) % bodyImages.length;
    updateFormData("currentBodyIndex", newBodyIndex.toString());
  };

  const handlePrevBody = () => {
    const newBodyIndex =
      (Number(formData.currentBodyIndex) - 1 + bodyImages.length) %
      bodyImages.length;
    updateFormData("currentBodyIndex", newBodyIndex.toString());
  };

  const handleNextMouth = () => {
    const newMouthIndex =
      (Number(formData.currentMouthIndex) + 1) % mouthImages.length;
    updateFormData("currentMouthIndex", newMouthIndex.toString());
  };

  const handlePrevMouth = () => {
    const newMouthIndex =
      (Number(formData.currentMouthIndex) - 1 + mouthImages.length) %
      mouthImages.length;
    updateFormData("currentMouthIndex", newMouthIndex.toString());
  };

  const handleRandomizeAvatar = () => {
    const randomHairIndex = Math.floor(Math.random() * hairImages.length);
    const randomBodyIndex = Math.floor(Math.random() * bodyImages.length);
    const randomMouthIndex = Math.floor(Math.random() * mouthImages.length);

    updateFormData("currentHairIndex", randomHairIndex.toString());
    updateFormData("currentBodyIndex", randomBodyIndex.toString());
    updateFormData("currentMouthIndex", randomMouthIndex.toString());
  };

  return (
    <BackgroundBeamsWithCollision className="inset-0 z-0">
      <div className="z-10 flex items-center justify-center h-screen px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Main Content */}
          <div className="flex flex-col items-center w-auto h-[530px] rounded-[25px] bg-[#F3F3F3] dark:bg-gray-800 p-8 shadow-[0px_8px_18px_11px_rgba(0,_0,_0,_0.1)]">
            {/* Header */}
            <span className="whitespace-nowrap text-[48px] mb-16 font-bold bg-gradient-to-r tracking-normal from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text">
              {mode === "edit" ? "Edit your avatar" : "Create your own avatar"}
            </span>

            {/* Avatar and Form Fields */}
            <div className="flex w-full justify-between">
              {/* Avatar Customization */}
              <div className="flex flex-col items-center p-4 mr-0 md:mr-8 bg-white dark:bg-gray-700 border-[3px] border-[#2870ED] rounded-[25px] w-[328px] h-[320px] relative">
                {/* Avatar Image */}
                <img
                  src={bodyImages[formData.currentBodyIndex]}
                  alt="avatar"
                  className="mt-10 absolute scale-75 translate-y-[90px] rounded-lg"
                />
                {/* Hair Image */}
                <img
                  src={hairImages[formData.currentHairIndex]}
                  alt="hair"
                  className="bottom-20 mb-5 absolute translate-x-[-1px] rounded-lg scale-75"
                />
                {/* Mouth Image */}
                <img
                  src={mouthImages[formData.currentMouthIndex]}
                  alt="mouth"
                  className="mt-10 absolute scale-75 translate-y-[80px] rounded-lg"
                />

                {/* Arrow Controls */}
                <div className="flex w-full justify-between items-center mt-6 mb-6">
                  <Button
                    onClick={handleNextHair}
                    className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE] dark:hover:scale-[110%] hover:scale-[110%] "
                    variant="outline"
                    size="icon"
                  >
                    <ChevronLeft />
                  </Button>
                  <Button
                    onClick={handlePrevHair}
                    className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE] dark:hover:scale-[110%] hover:scale-[110%] "
                    variant="outline"
                    size="icon"
                  >
                    <ChevronRight />
                  </Button>
                </div>
                <div className="flex w-full justify-between items-center mb-6">
                  <Button
                    onClick={handlePrevMouth}
                    className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE] dark:hover:scale-[110%] hover:scale-[110%] "
                    variant="outline"
                    size="icon"
                  >
                    <ChevronLeft />
                  </Button>
                  <Button
                    onClick={handleNextMouth}
                    className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE] dark:hover:scale-[110%] hover:scale-[110%] "
                    variant="outline"
                    size="icon"
                  >
                    <ChevronRight />
                  </Button>
                </div>

                <div className="flex w-full justify-between items-center">
                  <Button
                    onClick={handleNextBody}
                    className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE] dark:hover:scale-[110%] hover:scale-[110%] "
                    variant="outline"
                    size="icon"
                  >
                    <ChevronLeft />
                  </Button>
                  <Button
                    onClick={handlePrevBody}
                    className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE] dark:hover:scale-[110%] hover:scale-[110%] "
                    variant="outline"
                    size="icon"
                  >
                    <ChevronRight />
                  </Button>
                </div>

                <div className="flex justify-end w-full mt-4">
                  <Button
                    onClick={handleRandomizeAvatar}
                    className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE] dark:hover:scale-[110%] hover:scale-[110%]"
                    variant="outline"
                    size="icon"
                  >
                    <img src="/Dice.png" alt="dice" className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col w-[300px] space-y-4">
                <div className="flex space-x-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) =>
                      updateFormData(e.target.name, e.target.value)
                    }
                    className="border-[3px] border-[#2870ED] dark:bg-gray-700"
                  />

                  <Select
                    value={formData.gender}
                    onValueChange={(value) => updateFormData("gender", value)}
                  >
                    <SelectTrigger className="w-full border-[3px] border-[#2870ED] dark:bg-gray-700">
                      <SelectValue placeholder="Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/*  Age of user */}
                <div className="flex space-x-4 items-center w-full">
                  <Input
                    value={formData.age}
                    type="number"
                    placeholder="Age"
                    onChange={(e) => updateFormData("age", e.target.value)}
                    className="border-[3px] border-[#2870ED] dark:bg-gray-700 "
                  />
                </div>

                {/* Age of future user */}
                <div className="flex space-x-4 items-center w-full">
                  <Input
                    value={formData.futureAge}
                    type="number"
                    placeholder="Age in the future"
                    onChange={(e) =>
                      updateFormData("futureAge", e.target.value)
                    }
                    className="border-[3px] border-[#2870ED] dark:bg-gray-700 "
                  />
                </div>

                <Textarea
                  name="hobbies"
                  value={formData.hobbies}
                  placeholder="Enter hobbies"
                  onChange={(e) =>
                    updateFormData(e.target.name, e.target.value)
                  }
                  className="border-[3px] border-[#2870ED] dark:bg-gray-700"
                />
              </div>
            </div>
          </div>

          {/* Next Button */}
          <Button
            className="w-[50px] h-[50px] text-[#2F74EE] bg-gray-100 hover:bg-gray-200 dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE] dark:hover:scale-[110%] hover:scale-[110%]"
            onClick={onNext}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};

export default AvatarInitialize;
