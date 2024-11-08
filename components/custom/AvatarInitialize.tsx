
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft, CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns";

interface AvatarInitializeProps {
    onNext: () => void;
    updateFormData: (name: string, value: string) => void;
    formData: { name: string; gender: string; birthDate: string; hobbies: string, currentHairIndex: number, currentBodyIndex: number, currentMouthIndex: number };
}

const AvatarInitialize = ({ onNext, updateFormData, formData }: AvatarInitializeProps) => {
    const hairImages = ["/Hair1.png", "/Hair2.png", "/Hair3.png", "/Hair4.png"];
    const bodyImages = ["/Body1.png", "/Body2.png", "/Body3.png", "/Body4.png"];
    const mouthImages = ["/Mouth1.png", "/Mouth2.png", "/Mouth3.png", "/Mouth4.png"];


    const handleNextHair = () => {
        const newHairIndex = (Number(formData.currentHairIndex) + 1) % hairImages.length;
        updateFormData("currentHairIndex", newHairIndex.toString());
    };

    const handlePrevHair = () => {
        const newHairIndex = (Number(formData.currentHairIndex) - 1 + hairImages.length) % hairImages.length;
        updateFormData("currentHairIndex", newHairIndex.toString());
    };

    const handleNextBody = () => {
        const newBodyIndex = (Number(formData.currentBodyIndex) + 1) % bodyImages.length;
        updateFormData("currentBodyIndex", newBodyIndex.toString());
    };

    const handlePrevBody = () => {
        const newBodyIndex = (Number(formData.currentBodyIndex) - 1 + bodyImages.length) % bodyImages.length;
        updateFormData("currentBodyIndex", newBodyIndex.toString());
    };

    const handleNextMouth = () => {
        const newMouthIndex = (Number(formData.currentMouthIndex) + 1) % mouthImages.length;
        updateFormData("currentMouthIndex", newMouthIndex.toString());
    };

    const handlePrevMouth = () => {
        const newMouthIndex = (Number(formData.currentMouthIndex) - 1 + mouthImages.length) % mouthImages.length;
        updateFormData("currentMouthIndex", newMouthIndex.toString());
    };


    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-700">
            <div className="flex flex-col items-center w-auto h-[530px] rounded-[25px] bg-[#F3F3F3] dark:bg-gray-800 p-8 shadow-[0px_8px_18px_11px_rgba(0,_0,_0,_0.1)]">

                {/* Header */}
                <span className="whitespace-nowrap text-[48px] mb-16 font-bold bg-gradient-to-r tracking-normal from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text">
                    Create your own avatar
                </span>

                {/* Main Content */}
                <div className="flex w-full justify-between">

                    {/* Avatar Customization */}
                    <div className="flex flex-col items-center p-4 mr-28 bg-white dark:bg-gray-700 border-[3px] border-[#2870ED] rounded-[25px] w-[328px] h-[320px] relative">
                        {/* Avatar Image */}
                        <img src={bodyImages[formData.currentBodyIndex]} alt="avatar" className="mt-10 absolute scale-75 translate-y-[90px] rounded-lg" />
                        {/* Hair Image */}
                        <img src={hairImages[formData.currentHairIndex]} alt="hair" className="bottom-20 mb-5 absolute translate-x-[-1px] rounded-lg scale-75" />
                        {/* Avatar Image */}
                        <img src={mouthImages[formData.currentMouthIndex]} alt="avatar" className="mt-10 absolute scale-75 translate-y-[80px] rounded-lg" />
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
                            <Button onClick={handlePrevMouth} className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE]" variant="outline" size="icon">
                                <ChevronLeft />
                            </Button>
                            <Button onClick={handleNextMouth} className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE]" variant="outline" size="icon">
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
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={(e) => updateFormData(e.target.name, e.target.value)}
                                className="border-[3px] border-[#2870ED] dark:bg-gray-700"
                            />

                            <Select value={formData.gender} onValueChange={(value) => updateFormData("gender", value)}>
                                <SelectTrigger className="w-[180px] border-[3px] border-[#2870ED] dark:bg-gray-700">
                                    <SelectValue placeholder="Gender" />
                                </SelectTrigger>
                                <SelectContent className=" dark:bg-gray-700">
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="ine">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(" justify-start text-left font-normal text-muted-foreground border-[3px] border-[#2870ED] dark:bg-gray-700")}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {formData.birthDate ? format(formData.birthDate, "PPP") : <span>Pick a date</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={formData.birthDate ? new Date(formData.birthDate) : undefined}
                                    onSelect={(date) => { if (date) updateFormData("birthDate", date.toISOString()) }}
                                    initialFocus
                                    className="dark:bg-gray-800"
                                />
                            </PopoverContent>
                        </Popover>

                        <Textarea
                            name="hobbies"
                            placeholder="Hobbies..."
                            value={formData.hobbies}
                            onChange={(e) => updateFormData(e.target.name, e.target.value)}
                            className="border-[3px] border-[#2870ED] dark:bg-gray-700"
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
