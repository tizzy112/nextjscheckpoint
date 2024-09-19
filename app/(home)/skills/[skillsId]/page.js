"use client";
import { useParams } from "next/navigation";
const Skill = () => {
  const { SkillId } = useParams();
  console.log("SkillId", SkillId);
  return <div>{SkillId}</div>;
};

export default Skill;
