import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components/index";
import appwriteService from "../appwrite/config";
function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);
  // console.log(posts);
  return posts ? (
    <div className="w-full min-h-[80vh] text-center flex-col items-center justify-center bg-bgLight text-textColor">
      <Container>
        <div className="flex flex-col md:flex-row py-10">
          {posts?.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  ) : (
    <div className="text-xl">Loading...</div>
  );
}

export default AllPosts;
