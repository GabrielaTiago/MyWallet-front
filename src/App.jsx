import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { UserContextProvider } from "./shared/contexts";

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </UserContextProvider>
  );
}
