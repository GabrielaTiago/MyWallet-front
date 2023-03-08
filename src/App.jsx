import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AuthContext from "./Contexts/AuthContext";
import { AppRoutes } from "./routes";

export default function App() {
  const [user, setUser] = useState([]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
