import React from 'react'
import { Input } from "@/components/ui/input"

interface AvatarInitializeProps {
    onNext: () => void;
}

const AvatarInitialize = ({ onNext }: AvatarInitializeProps) => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-col items-center w-auto  h-[530px] rounded-[25px] bg-[#F3F3F3] p-8 shadow-[0px_8px_18px_11px_rgba(0,_0,_0,_0.1)]">

                {/* Header */}
                <h1 className="text-[48px] font-bold text-[#2870ED] mb-16">
                    Vytvor si svojho Avatara
                </h1>

                {/* Main Content */}
                <div className="flex w-full justify-between">

                    {/* Avatar Customization */}
                    <div className="flex flex-col items-center p-4 mr-28 bg-white border-2 border-[#2870ED] rounded-lg w-[328px] h-[320px]">
                        {/* Avatar Image */}


                        {/* Arrow Controls */}

                    </div>

                    {/* Form Fields */}
                    <div className="flex flex-col w-[300px] space-y-4">
                        <div className="flex space-x-4">
                            <Input
                                type="text"
                                placeholder="Meno"
                            />
                            <Input
                                type="text"
                                placeholder="Pohlavie"
                            />
                        </div>
                        <Input
                            type="date"
                            placeholder="Dátum narodenia"
                            className="border-2  rounded-lg p-2"
                        />
                        <textarea
                            placeholder="Záľuby"
                            className="border-2 rounded-lg p-2 h-[120px] resize-none"
                        ></textarea>
                    </div>

                </div>

                {/* Dice Icon */}
                <div className="mt-4">
                    {/*<img src="/path-to-dice-icon.png" alt="dice" className="w-8 h-8" />*/}
                </div>

            </div>
        </div>
    );
}

export default AvatarInitialize