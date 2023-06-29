import React from "react";
import { UserAuth } from "../context/AuthContext";

import { Link, Outlet } from "react-router-dom";

// import MemberTwoSub from "./components/MemberTwoSub";
// import MemberTwoSub2 from "./components/MemberTwoSub2";

function MemberTwo() {
  const { user } = UserAuth();
  return (
    <div>
      <h1>MemeberTwo (protected route)</h1>
      <p>You are logged in by User Email: {user && user.email}</p>

      {/* nested routes */}
      <nav>
        <Link to="membertwosub">MemberTwoSub</Link>
        <Link to="membertwosub2">MemberTwoSub2</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default MemberTwo;
