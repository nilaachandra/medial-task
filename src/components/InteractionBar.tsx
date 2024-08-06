import { LuHeart, LuShare } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa6";
import { LiaRetweetSolid } from "react-icons/lia";
import { CiBookmark } from "react-icons/ci";

const InteractionBar = ({ postId }: { postId: number }) => {
  return (
    <div className="flex justify-between items-center my-4">
      <LuHeart size={24} className="cursor-pointer" />
      <FaRegCommentDots size={24} className="cursor-pointer" />
      <LiaRetweetSolid size={24} className="cursor-pointer" />
      <CiBookmark size={24} className="cursor-pointer" />
      <LuShare size={24} className="cursor-pointer" />
    </div>
  );
};

export default InteractionBar;
