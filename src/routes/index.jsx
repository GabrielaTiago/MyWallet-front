import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn, SignUp, Transaction, Wallet } from "../pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/wallet" element={<Wallet />}></Route>
      <Route path="/transaction" element={<Transaction />}></Route>

      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
