"use client"
import { useState } from "react";
import { Button } from "./ui/button";

const CommentSection = ({ postId }: { postId: number }) => {
  const [comments, setComments] = useState([
    { id: 1, text: "Great post!", user: "User1" },
    { id: 2, text: "Thanks for sharing.", user: "User2" },
  ]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, text: newComment, user: "CurrentUser" }]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-4">
      <h3 className="font-semibold">Comments</h3>
      <div className="space-y-2">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-100 p-2 rounded-md">
            <strong>{comment.user}:</strong> {comment.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        className="w-full mt-2 p-2 border border-gray-300 rounded-md"
        placeholder="Add a comment..."
      />
      <Button onClick={addComment} className="mt-2 bg-black text-white py-2 px-4 rounded-md">
        Post Comment
      </Button>
    </div>
  );
};

export default CommentSection;
