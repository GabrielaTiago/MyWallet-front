import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContext from "./Contexts/AuthContext";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

export default function App() {
    const [user, setUser] = useState([]);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/sign-in" element={<SignIn />}></Route>
                    <Route path="/sign-up" element={<SignUp />}></Route>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}