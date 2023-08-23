import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import { Header } from "../Components/Header";
import { Login } from "../Pages/Login";
import { SchoolsHome } from "../Pages/SchoolsHome";

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route
          path="/"
          element={
            <>
              <Header type="lp" schoolName="israelita" />
              <SchoolsHome schoolNameUrl="Israelita" />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
      </Router>
    </BrowserRouter>
  );
}
