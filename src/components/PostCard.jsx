import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  const imageUrl = featuredImage
    ? appwriteService.getFilePreview(featuredImage)
    : undefined;

  // console.log($id, title, featuredImage);
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-64 bg-bgColor rounded-xl p-3 border border-gray-400 ">
        <div className="w-full justify-center mb-4">
          <img src={imageUrl} alt={title} className="rounded-md" />
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
