import { FC } from "react";

export const Default:FC = () => {
    return (
      <>
        <button className="font-semibold text-sm">Créer un compte</button>
        <button className="bg-[#04F2F2] rounded-3xl p-3 text-base font-semibold">
          <i className="fas fa-sign-in mr-2"></i>
          Se connecter
        </button>
      </>
    );
  };