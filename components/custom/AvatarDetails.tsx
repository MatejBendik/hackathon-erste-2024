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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Button onClick={onBack} className="ml-10 absolute left-3/4 w-[50px] h-[50px] text-[#2F74EE]" variant="outline" size="icon">
        <ChevronLeft />
      </Button>
      <div className="flex flex-col items-center w-auto  h-[530px] rounded-[25px] bg-[#F3F3F3] p-8 shadow-[0px_8px_18px_11px_rgba(0,_0,_0,_0.1)]">

        {/* Header */}
        <h1 className="text-[48px] font-bold text-[#2870ED] mb-16">
          Poďme do detailov...
        </h1>

        {/* Main Content */}
        <div className="flex w-full justify-between">

          {/* Avatar Customization */}
          <div className="flex flex-col items-center p-4 mr-28 bg-white border-[3px] border-[#2870ED] rounded-lg w-[328px] h-[320px]">
            {/* Avatar Image */}


            {/* Arrow Controls */}

          </div>

          {/* Form Fields */}
          <div className="flex flex-col w-[300px] space-y-4">
            <div className="flex space-x-4">
              <Input
                type="text"
                placeholder="Meno"
                className="border-[3px] border-[#2870ED]"
              />
              <Input
                type="text"
                placeholder="Pohlavie"
                className="border-[3px] border-[#2870ED]"
              />
            </div>
            <Input
              type="date"
              placeholder="Dátum narodenia"
              className="border-[3px] border-[#2870ED]"

            />
            <Textarea
              placeholder="Záľuby"
              className="border-[3px] border-[#2870ED] rounded-lg p-2 h-[120px] resize-none"
            />
          </div>

        </div>

        {/* Dice Icon */}
        <div className="mt-4">
          {/*<img src="/path-to-dice-icon.png" alt="dice" className="w-8 h-8" />*/}
        </div>

      </div>
      <Button onClick={onNext} className="ml-10 absolute left-3/4 w-[50px] h-[50px] text-[#2F74EE]" variant="outline" size="icon">
        <ChevronRight />
      </Button>
    </div>
  )
}

export default AvatarDetails