import { TypeAccountEnum, UserModel } from "models";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuDesktop from "./components/MenuDesktop";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuDesktop />} />
        <Route
          path="/pro-account"
          element={
            <MenuDesktop
              loggedUser={
                new UserModel(
                  1,
                  TypeAccountEnum.PRO_ACCOUNT,
                  "Jhon doe",
                  "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                )
              }
            />
          }
        />
        <Route
          path="/main-account"
          element={
            <MenuDesktop
              loggedUser={
                new UserModel(
                  1,
                  TypeAccountEnum.MAIN_ACCOUNT,
                  "Jhon doe",
                  "https://mdbcdn.b-cdn.net/img/new/avatars/3.webp"
                )
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
