"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { LuHeart, LuInfo, LuShare } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa6";
import { LiaRetweetSolid } from "react-icons/lia";
import { CiBookmark } from "react-icons/ci";
import { BsSend } from "react-icons/bs";
import Link from "next/link";

// Define the type for the props
type PostCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  slug: string; // Add slug here
};

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  imageUrl,
  slug, // Add slug here
}) => {
  return (
    <Card className="p-4 shadow-lg">
      <Link href={`/${slug}`}>
        <CardTitle className="font-bold text-xl">{title}</CardTitle>
        <CardDescription>WitchCraft Media • 800 years ago</CardDescription>
        <Image
          priority
          src={imageUrl}
          width={400}
          height={400}
          alt=""
          className="w-full h-[200px] mt-2"
        />
        <p>{description}</p>
      </Link>
      <div className="icons flex w-full items-center cursor-pointer justify-between mt-3">
        <LuHeart size={24} className="cursor-pointer" />
        <FaRegCommentDots size={24} className="cursor-pointer" />
        <LiaRetweetSolid size={24} className="cursor-pointer" />
        <CiBookmark size={24} className="cursor-pointer" />
        <BsSend
          size={24}
          className="cursor-pointer"
          onClick={() => {
            console.log("clicked");
          }}
        />
        <LuInfo size={24} className="cursor-pointer" />
      </div>
    </Card>
  );
};

export default PostCard;
