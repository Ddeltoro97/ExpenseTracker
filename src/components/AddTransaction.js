import React, {useState, useContext}from 'react'
import { GlobalContext } from '../context/GlobalState';
import { useTranslation } from 'react-i18next';

export const AddTransaction = () =>{

    const [t, i18n] = useTranslation("global");

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e) =>{
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }

        addTransaction(newTransaction);
        setText("");
        setAmount("");
    }

    return(
        <div>
            <h3>{t("addTransaction.title")}</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">{t("addTransaction.text")}</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...'/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >{t("addTransaction.amount")} <br/>
                    {t("addTransaction.neg")}</label>
                    <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...'/>
                </div>
                <button className="btn">{t("addTransaction.button")}</button>
            </form>
        </div>
    )
}