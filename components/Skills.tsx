"use client";
import { IconCloud } from "@/components/ui/IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "react-native",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "linux",
  "postgresql",
  "vercel",
  "supabase",
  "docker",
  "azure",
  "aws",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "mongodb",
  "python",
  "c",
  "cplusplus",
  "android",
  "androidtools",
];

function Skills() {
  return (
    <div className="my-10 py-10">
      
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default Skills;
