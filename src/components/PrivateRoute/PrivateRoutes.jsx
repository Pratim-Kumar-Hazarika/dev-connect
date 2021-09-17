import { Navigate, Route,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
export function TestRoute({ path, ...props }) {
// const [token,setToken] = useState(false)

console.log("called from private route")
  return true ? (
    <Navigate   to="/login" />
  ) : (
    <Navigate   to="/login" />
  );
}
