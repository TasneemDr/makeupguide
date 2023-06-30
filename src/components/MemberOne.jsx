import React from "react";
import { UserAuth } from "../context/AuthContext";

function MemberOne() {
  const { user } = UserAuth();
  const {posts} = UserAuth();
  // console.log(posts);

  return (
    <div className="">
      <h1 className="">Member One (protected route)</h1>
      <p>You are logged in by User Email: {user && user.email}</p>

      <h1>Blog Posts</h1>
      
        {/* loop through the Json "posts" */}
        {posts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <h2 className="">{post.title}</h2>
              <p className="">{post.content}</p>
              <img src={post.url} alt="Logo" width="100"/>
            </div>
          )
        })}
        
      
    </div>
  );
}

export default MemberOne