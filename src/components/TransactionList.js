import React, {useContext}from 'react';
import { GlobalContext } from '../context/GlobalState';
import {Transaction} from './Transaction';
import {useTranslation} from 'react-i18next';

export const TransactionList = () =>{

    const [t, i18n] = useTranslation("global");

    const {transactions} = useContext(GlobalContext);


    console.log(transactions);

    return(
        <div>
            <h3>{t("transactionList.message")}</h3>
            <ul id='list' className='list'>
                {transactions.map(transaction => (
                  <Transaction key={transaction.id} transaction={transaction}/>
                ))}
            </ul>
        </div>
    )
}