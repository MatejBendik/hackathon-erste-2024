import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

interface AvatarDetailsProps {
  onBack: () => void;
  onNext: () => void;
  updateFormData: (name: string, value: string) => void;
  formData: {
    education_and_work_experience: string;
    long_term_goals_and_dreams: string;
    health_preferences_and_habits: string;
    financial_situation_and_goals: string;
    relationships_and_family: string;
    preffered_hobbies_and_activities: string;
  };
}

const AvatarDetails = ({
                         onBack,
                         onNext,
                         updateFormData,
                         formData,
                       }: AvatarDetailsProps) => {
  return (
      <BackgroundBeamsWithCollision className="inset-0 z-0 flex justify-center items-center">
        <div className="flex items-center justify-center pb-5 z-10 space-x-4">

          {/* Back Button */}
          <Button
              onClick={onBack}
              className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE] dark:hover:scale-[110%] hover:scale-[110%]"
              variant="outline"
              size="icon"
          >
            <ChevronLeft />
          </Button>

          {/* Main Content */}
          <div className="flex flex-col items-center rounded-[25px] w-[750px] max-w-full mt-28 bg-[#F3F3F3] dark:bg-gray-800 p-8 shadow-[0px_8px_18px_11px_rgba(0,_0,_0,_0.1)]">
            {/* Header */}
            <span className="whitespace-nowrap text-[48px] font-bold bg-gradient-to-r tracking-normal from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text">
            Let's get to know you better
          </span>

            {/* Form Fields */}
            <div className="flex flex-col w-full gap-5 mt-5">
              <Textarea
                  name="education_and_work_experience"
                  placeholder="Education and work experience"
                  className="border-[3px] border-[#2870ED] rounded-lg p-2 resize-none dark:bg-gray-700"
                  value={formData.education_and_work_experience}
                  onChange={(e) => updateFormData(e.target.name, e.target.value)}
              />
              <Textarea
                  name="long_term_goals_and_dreams"
                  placeholder="Long-term goals and dreams"
                  className="border-[3px] border-[#2870ED] rounded-lg p-2 resize-none dark:bg-gray-700"
                  value={formData.long_term_goals_and_dreams}
                  onChange={(e) => updateFormData(e.target.name, e.target.value)}
              />
              <Textarea
                  name="health_preferences_and_habits"
                  placeholder="Health preferences and habits"
                  className="border-[3px] border-[#2870ED] rounded-lg p-2 resize-none dark:bg-gray-700"
                  value={formData.health_preferences_and_habits}
                  onChange={(e) => updateFormData(e.target.name, e.target.value)}
              />
              <Textarea
                  name="financial_situation_and_goals"
                  placeholder="Financial situation and goals"
                  className="border-[3px] border-[#2870ED] rounded-lg p-2 resize-none dark:bg-gray-700"
                  value={formData.financial_situation_and_goals}
                  onChange={(e) => updateFormData(e.target.name, e.target.value)}
              />
              <Textarea
                  name="relationships_and_family"
                  placeholder="Relationships and family"
                  className="border-[3px] border-[#2870ED] rounded-lg p-2 resize-none dark:bg-gray-700"
                  value={formData.relationships_and_family}
                  onChange={(e) => updateFormData(e.target.name, e.target.value)}
              />
              <Textarea
                  name="preffered_hobbies_and_activities"
                  placeholder="Preferred hobbies and activities"
                  className="border-[3px] border-[#2870ED] rounded-lg p-2 resize-none dark:bg-gray-700"
                  value={formData.preffered_hobbies_and_activities}
                  onChange={(e) => updateFormData(e.target.name, e.target.value)}
              />
            </div>
          </div>

          {/* Next Button */}
          <Button
              onClick={onNext}
              className="w-[50px] h-[50px] text-[#2F74EE] dark:text-white dark:bg-gray-800 dark:hover:text-[#2F74EE] dark:hover:scale-[110%] hover:scale-[110%]"
              variant="outline"
              size="icon"
          >
            <ChevronRight />
          </Button>
        </div>
      </BackgroundBeamsWithCollision>
  );
};

export default AvatarDetails;
