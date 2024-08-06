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

type PostCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
};

const PostCard: React.FC<PostCardProps> = ({
  title,
  description,
  imageUrl,
  slug,
}) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title,
          text: description,
          url: window.location.origin + "/" + slug,
        })
        .then(() => console.log("Post shared successfully"))
        .catch((error) => console.error("Error sharing post:", error));
    } else {
      // Fallback for browsers that do not support the Share API
      alert("Sharing is not supported in your browser. Copy the URL instead.");
    }
  };

  return (
    <Card className="p-4 shadow-lg">
      <Link href={`/${slug}`}>
        <CardTitle className="font-bold text-xl">{title}</CardTitle>
        <CardDescription>WitchCraft Media • 800 years ago</CardDescription>
        <Image
          priority
          src={imageUrl}
          width={1200}
          height={630}
          alt=""
          className="w-full bg-cover bg-center  mt-2"
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
          onClick={handleShare}
        />
        <LuInfo size={24} className="cursor-pointer" />
      </div>
    </Card>
  );
};

export default PostCard;
