import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import { Header } from "../Components/Header";
import { Activity } from "../Pages/Activity";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { SchoolsHome } from "../Pages/SchoolsHome";
import { TeamTrial } from "../Pages/TeamTrial";

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/" />

        <Route
          path="/israelita"
          element={
            <>
              <Header type="lp" schoolName="israelita" />
              <SchoolsHome schoolNameUrl="Israelita" />
            </>
          }
        />
        <Route
          path="/maplebear"
          element={
            <>
              <Header type="lp" schoolName="maplebear" />
              <SchoolsHome schoolNameUrl="MapleBear" />
            </>
          }
        />

        <Route path="/israelita/login" element={<Login />} />
        <Route path="/maplebear/login" element={<Login />} />

        <Route
          path="/maplebear/home"
          element={
            <>
              <Header type="inside" schoolName="maplebear" />
              <Home />
            </>
          }
        />
        <Route
          path="/israelita/home"
          element={
            <>
              <Header type="inside" schoolName="israelita" />
              <Home />
            </>
          }
        />

        <Route
          path="/maplebear/trail/:trail"
          element={
            <>
              <Header type="inside" schoolName="maplebear" />
              <TeamTrial />
            </>
          }
        />
        <Route
          path="/israelita/trail/:trail"
          element={
            <>
              <Header type="inside" schoolName="israelita" />
              <TeamTrial />
            </>
          }
        />

        <Route path="/maplebear/atividade/:atividade" element={<Activity />} />
        <Route path="/israelita/atividade/:atividade" element={<Activity />} />
      </Router>
    </BrowserRouter>
  );
}
