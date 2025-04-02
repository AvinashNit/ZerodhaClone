import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated, checkAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyAuth = async () => {
      const authStatus = await checkAuth();
      console.log("ProtectedRoute auth status:", authStatus);
      setLoading(false);
    };
    if (!isAuthenticated) {
      verifyAuth();
    } else {
      console.log("Already authenticated, skipping check");
      setLoading(false);
    }
  }, [isAuthenticated, checkAuth]);

  if (loading) return <p>Loading...</p>;
  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;