import React from "react";
import { useHistory } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const LanguageDropdown: React.FC = () => {
  const { i18n } = useDocusaurusContext();
  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value;
    const { pathname } = window.location;
    const newPathname = `/${newLocale}${pathname.replace(
      i18n.currentLocale,
      ""
    )}`;
    history.push(newPathname);
  };

  return (
    <select onChange={handleChange} value={i18n.currentLocale}>
      {i18n.locales.map((locale) => (
        <option key={locale} value={locale}>
          {i18n.localeConfigs[locale].label}
        </option>
      ))}
    </select>
  );
};

export default LanguageDropdown;
