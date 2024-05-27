import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components/index";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoader(false);
    });
  }, []);
  // console.log(posts);
  return !loader ? (
    <div className="w-full min-h-[80vh] text-center flex-col items-center justify-center bg-bgLight text-textColor">
      <h1 className="text-2xl p-10 font-bold inline-block mt-10">
        No posts available{" "}
        <span className="text-textHover inline-block">
          <Link to="/add-post">Create post</Link>
        </span>
      </h1>
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
    <div className="text-xl p-10 font-semibold h-[80vh]">Loading...</div>
  );
}

export default AllPosts;
