import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContext from "./Contexts/AuthContext";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import PersonalWallet from "./Pages/PersonalWallet/PersonalWallet";
import NewEntry from "./Pages/NewEntry/NewEntry";
import NewExit from "./Pages/NewExit/NewExit";

export default function App() {
    const [user, setUser] = useState([]);

    return (
        <AuthContext.Provider value={{user, setUser}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn />}></Route>
                    <Route path="/sign-up" element={<SignUp />}></Route>
                    <Route path="/personal-wallet" element={<PersonalWallet />}></Route>
                    <Route path="/new-entry" element={<NewEntry/>}></Route>
                    <Route path="/new-exit" element={<NewExit/>}></Route>
                </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}