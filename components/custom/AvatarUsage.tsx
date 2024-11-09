import React from 'react'
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ChevronLeft } from 'lucide-react';

interface AvatarUsageProps {
  onBack: () => void;
  formData: {
    name: string,
    gender: string,
    birthDate: string,
    hobbies: string,
    currentHairIndex: number,
    currentBodyIndex: number,
    currentMouthIndex: number,
    education_and_work_experience: string,
    long_term_goals_and_dreams: string,
    health_preferences_and_habits: string,
    financial_situation_and_goals: string,
    relationships_and_family: string,
    preffered_hobbies_and_activities: string
  };
}

const AvatarUsage = ({ onBack, formData }: AvatarUsageProps) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-700">
      <div className="flex flex-col items-center w-auto  h-[530px] rounded-[25px] bg-[#F3F3F3] dark:bg-gray-800 p-8 shadow-[0px_8px_18px_11px_rgba(0,_0,_0,_0.1)]">
        {/* Header */}
        <span className="whitespace-nowrap text-[48px] mb-16 font-bold bg-gradient-to-r tracking-normal from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text">
          Let's talk with your future you
        </span>

        {/* Main Content */}
        {/* Button to sumbit */}
        <Button className="mt-8" onClick={() => { console.log(formData) }} size="lg">
          Submit
        </Button>

      </div>
      <Button onClick={onBack} className="ml-8s absolute left-[12%]  w-[50px] h-[50px] text-[#2F74EE] dark:hover:scale-[110%] hover:scale-[110%]" variant="outline" size="icon">
        <ChevronLeft />
      </Button>
    </div>
  )
}

export default AvatarUsage