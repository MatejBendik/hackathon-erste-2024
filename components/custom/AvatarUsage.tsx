import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '../ui/button';
import { ChevronLeft } from 'lucide-react';
import ChatComponent from './ChatComponent';
import { MutatingDots } from 'react-loader-spinner';
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

interface AvatarUsageProps {
  onBack: () => void;
  formData: {
    name: string;
    gender: string;
    birthDate: string;
    hobbies: string;
    currentHairIndex: number;
    currentBodyIndex: number;
    currentMouthIndex: number;
    education_and_work_experience: string;
    long_term_goals_and_dreams: string;
    health_preferences_and_habits: string;
    financial_situation_and_goals: string;
    relationships_and_family: string;
    preffered_hobbies_and_activities: string;
  };
}

const AvatarUsage = ({ onBack, formData }: AvatarUsageProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [apiResponse, setApiResponse] = useState<string | null>(null);

  const handleSubmit = async () => {
    setIsLoading(true); // Start loader
    setShowChat(false); // Ensure ChatComponent is hidden while loading

    try {
      const response = await axios.post('/api/ai', {
        name: formData.name,
        gender: formData.gender,
        date_of_birth: formData.birthDate,
        interests: formData.hobbies.split(','),
        job: formData.education_and_work_experience,
        goals: formData.long_term_goals_and_dreams.split(','),
        habits: formData.health_preferences_and_habits.split(','),
        financial_situation: formData.financial_situation_and_goals,
        relationships: formData.relationships_and_family.split(','),
        lifestyle: formData.preffered_hobbies_and_activities,
      });

      // Save the API response and set to show ChatComponent
      setApiResponse(response.data.choices[0].message.content);
      setShowChat(true);
    } catch (error) {
      console.error('Error submitting data:', error);
    } finally {
      setIsLoading(false); // Stop loader
    }
  };

  // Conditional rendering: show loader, ChatComponent, or form
  if (showChat && apiResponse) {
    return <ChatComponent formData={formData} initialAnswer={apiResponse} />;
  }

  return (
      <BackgroundBeamsWithCollision className="inset-0 z-0">
    <div className="z-10 flex items-center justify-center h-screen ">
      <div className="flex flex-col items-center w-auto h-[530px] rounded-[25px] bg-[#F3F3F3] dark:bg-gray-800 p-8 shadow-[0px_8px_18px_11px_rgba(0,_0,_0,_0.1)]">
        <span className="whitespace-nowrap text-[48px] mb-16 font-bold bg-gradient-to-r tracking-normal from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text">
          Let's talk with your future you
        </span>

        {isLoading ? (
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
          />
        ) : (
          <Button className="mt-8" onClick={handleSubmit} size="lg">
            Submit
          </Button>
        )}
      </div>

      <Button
        onClick={onBack}
        className="ml-8 absolute left-[20%] w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE] dark:hover:scale-[110%] hover:scale-[110%]"
        variant="outline"
        size="icon"
      >
        <ChevronLeft />
      </Button>
    </div>
      </BackgroundBeamsWithCollision>
  );
};

export default AvatarUsage;
