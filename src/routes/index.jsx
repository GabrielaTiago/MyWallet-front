import { Navigate, Route, Routes } from "react-router-dom";
import { Expense, Income, SignIn, SignUp, Wallet } from "../pages";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />}></Route>
      <Route path="/sign-up" element={<SignUp />}></Route>
      <Route path="/personal-wallet" element={<Wallet />}></Route>
      <Route path="/new-entry" element={<Income />}></Route>
      <Route path="/new-exit" element={<Expense />}></Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}
