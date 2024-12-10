import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import {useTranslation} from 'react-i18next';

export const Balabce = () =>{

    const [t, i18n] = useTranslation("global");

    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


    return(
        <div>
            <h4>{t("balance.message")}</h4>
            <h1>${total}</h1>
        </div>
    )
}