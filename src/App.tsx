import { HocMenuDesktop } from "hoc";
import { TypeAccountEnum, UserModel } from "models/";
import { BrowserRouter, Route, Routes } from "react-router-dom";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HocMenuDesktop user={new UserModel()} />} />
        <Route
          path="/pro-account"
          element={
            <HocMenuDesktop
              user={
                new UserModel(
                  1,
                  TypeAccountEnum.PRO,
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
            <HocMenuDesktop
              user={
                new UserModel(
                  1,
                  TypeAccountEnum.MAIN,
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
