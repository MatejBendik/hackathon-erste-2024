import React from 'react'
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Textarea } from '../ui/textarea';
import { Input } from '../ui/input';

interface AvatarDetailsProps {
  onBack: () => void;
  onNext: () => void;
}

const AvatarDetails = ({ onBack, onNext }: AvatarDetailsProps) => {
  return (
    <div className="flex items-center justify-center bg-gray-100 dark:bg-gray-700">
      <div className="flex flex-col items-center w-auto rounded-[25px] w-[800px] mt-28 bg-[#F3F3F3] dark:bg-gray-800 p-8 shadow-[0px_8px_18px_11px_rgba(0,_0,_0,_0.1)]">

        {/* Header */}
        <span className="whitespace-nowrap text-[48px] font-bold bg-gradient-to-r tracking-normal from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text">
          Poďme do detailov...
        </span>

        {/* Main Content */}
        <div className="flex w-full justify-between">
          {/* Form Fields */}
          <div className="flex flex-col w-full gap-5">
            <Textarea
              placeholder="Vzdelanie a profesia"
              className="border-[3px] border-[#2870ED] rounded-lg p-2 resize-none"
            />
            <Textarea
              placeholder="Dlhodobé ciele"
              className="border-[3px] border-[#2870ED] rounded-lg p-2 resize-none"
            />
            <Textarea
              placeholder="Zdravotné preferencie a návyky"
              className="border-[3px] border-[#2870ED] rounded-lg p-2 resize-none"
            />
            <Textarea
              placeholder="Finančná situácia"
              className="border-[3px] border-[#2870ED] rounded-lg p-2 resize-none"
            />
            <Textarea
              placeholder="Vzťahy a rodinný status"
              className="border-[3px] border-[#2870ED] rounded-lg p-2 resize-none"
            />
            <Textarea
              placeholder="Preferovaný životný štýl a hodnoty"
              className="border-[3px] border-[#2870ED] rounded-lg p-2 resize-none"
            />
          </div>
        </div>

        {/* Dice Icon */}
        <div className="mt-4">
          {/*<img src="/path-to-dice-icon.png" alt="dice" className="w-8 h-8" />*/}
        </div>

      </div>
      <Button onClick={onBack} className="ml-8s absolute left-[19%] w-[50px] h-[50px] text-[#2F74EE]" variant="outline" size="icon">
        <ChevronLeft />
      </Button>
      <Button onClick={onNext} className="ml-10 absolute left-3/4 w-[50px] h-[50px] text-[#2F74EE]" variant="outline" size="icon">
        <ChevronRight />
      </Button>
    </div>
  )
}

export default AvatarDetails