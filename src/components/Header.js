import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const Header = () =>{

    const [t, i18n] = useTranslation("global");

    const [selectedL, setSelectedL] = useState(i18n.language);

    const handleChangeLanguage = (event) =>{
        const language = event.target.value;
        i18n.changeLanguage(language);
        setSelectedL(language);
    }

    return(
     <div>
        <select value={selectedL} onChange={handleChangeLanguage}>
            <option value="en">English</option>
            <option value="es">Español</option>
        </select>
        <h2>{t("header.message")}</h2>
     </div>
    )
}
