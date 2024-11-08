import React, {useState} from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AvatarInitializeProps {
    onNext: () => void;
}

const AvatarInitialize = ({ onNext }: AvatarInitializeProps) => {
    // Define hair images and state to track the current image
    const hairImages = ["/Hair1.png", "/Hair2.png", "/Hair3.png", "/Hair4.png"];
    const bodyImages = ["/Body1.png", "/Body2.png", "/Body3.png", "/Body4.png"];
    const [currentHairIndex, setCurrentHairIndex] = useState(0);
    const [currentBodyIndex, setCurrentBodyIndex] = useState(0);

    // Function to go to the next hair image
    const handleNextHair = () => {
        setCurrentHairIndex((prevIndex) => (prevIndex + 1) % hairImages.length);
    };

    const handleNextBody = () => {
        setCurrentBodyIndex((prevIndex2) => (prevIndex2 + 1) % bodyImages.length);
    };



    // Function to go to the previous hair image
    const handlePrevHair = () => {
        setCurrentHairIndex((prevIndex) =>
            prevIndex === 0 ? hairImages.length - 1 : prevIndex - 1
        );
    };


    const handlePrevBody = () => {
        setCurrentBodyIndex((prevIndex2) =>
            prevIndex2 === 0 ? bodyImages.length - 1 : prevIndex2 - 1
        );
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-700">
            <div className="flex flex-col items-center w-auto h-[530px] rounded-[25px] bg-[#F3F3F3] dark:bg-gray-800 p-8 shadow-[0px_8px_18px_11px_rgba(0,_0,_0,_0.1)]">

                {/* Header */}
                <span className="whitespace-nowrap text-[48px] mb-16 font-bold bg-gradient-to-r tracking-normal from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text">
                    Vytvor si svojho Avatara
                </span>

                {/* Main Content */}
                <div className="flex w-full justify-between">

                    {/* Avatar Customization */}
                    <div className="flex flex-col items-center p-4 mr-28 bg-white dark:bg-gray-700 border-[3px] border-[#2870ED] rounded-[25px] w-[328px] h-[320px] relative">
                        {/* Avatar Image */}
                        <img src={bodyImages[currentBodyIndex]} alt="avatar" className="mt-10 absolute scale-75 translate-y-[90px] rounded-lg" />
                        {/* Hair Image */}
                        <img src={hairImages[currentHairIndex]} alt="hair" className="bottom-20 mb-5 absolute translate-x-[-1px] rounded-lg scale-75" />

                        {/* Arrow Controls */}
                        <div className="flex w-full justify-between items-center mt-6 mb-6">
                            <Button onClick={handleNextHair} className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE]" variant="outline" size="icon">
                                <ChevronLeft />
                            </Button>
                            <Button onClick={handlePrevHair} className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE]" variant="outline" size="icon">
                                <ChevronRight />
                            </Button>
                        </div>
                        <div className="flex w-full justify-between items-center mb-6">
                            <Button className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE]" variant="outline" size="icon">
                                <ChevronLeft />
                            </Button>
                            <Button className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE]" variant="outline" size="icon">
                                <ChevronRight />
                            </Button>
                        </div>
                        <div className="flex w-full justify-between items-center">
                            <Button onClick={handleNextBody} className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE]" variant="outline" size="icon">
                                <ChevronLeft />
                            </Button>
                            <Button onClick={handlePrevBody} className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE]" variant="outline" size="icon">
                                <ChevronRight />
                            </Button>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="flex flex-col w-[300px] space-y-4">
                        <div className="flex space-x-4">
                            <Input
                                type="text"
                                placeholder="Meno"
                                className="border-[3px] border-[#2870ED] dark:bg-gray-700"
                            />
                            <Select>
                                <SelectTrigger className="w-[180px] border-[3px] border-[#2870ED] dark:bg-gray-700">
                                    <SelectValue placeholder="Pohlavie" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="muz">Muž</SelectItem>
                                    <SelectItem value="zena">Žena</SelectItem>
                                    <SelectItem value="ine">Iné</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Input
                            type="date"
                            placeholder="Dátum narodenia"
                            className="border-[3px] border-[#2870ED] dark:bg-gray-700"
                        />
                        <Textarea
                            placeholder="Záľuby"
                            className="border-[3px] border-[#2870ED] rounded-lg p-2 h-[120px]  resize-none dark:bg-gray-700 "
                        />
                    </div>
                </div>

                {/* Dice Icon */}
                <div className="mt-4">
                    {/* Optional: Uncomment and add dice icon here */}
                    {/* <img src="/path-to-dice-icon.png" alt="dice" className="w-8 h-8" /> */}
                </div>
            </div>

            <Button onClick={onNext} className="ml-10 absolute left-3/4 w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE]" variant="outline" size="icon">
                <ChevronRight />
            </Button>
        </div>
    );
};

export default AvatarInitialize;
