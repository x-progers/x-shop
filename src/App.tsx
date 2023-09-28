import React from 'react';

import './App.css';
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string | undefined) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="App">
       <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("ru")}>RU</button>
      <hr />
      <div><h1>{t("title")}</h1></div>
      <h1>X-Progers</h1>
      <h2>New-Progers</h2>
    </div>
  );
}

export default App;
