'use client'

import AvatarDetails from "@/components/custom/AvatarDetails";
import AvatarInitialize from "@/components/custom/AvatarInitialize";
import AvatarUsage from "@/components/custom/AvatarUsage";

const CreateAvatar = () => {
  return <div>
    <AvatarInitialize />
    <AvatarDetails />
    <AvatarUsage />
  </div>;
};

export default CreateAvatar;
