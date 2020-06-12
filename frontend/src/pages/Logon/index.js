import React from 'react';
import { Link } from 'react-router-dom';
import { MdWarning } from 'react-icons/md';

import './styles.css';

import logo from '../../assets/logo.svg';
import hero from '../../assets/heroi.png';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
               <img className="edit" src={logo} alt="LOGO" />
    
                <form>
                    <h1> Faça Login </h1>

                    <input placeholder="Seu ID"/>
                    <button className="button" type="submit">
                        Logar
                    </button>

                    <Link className="back-link" to="/register">
                        <MdWarning size={16} color="E02041"/>
                        Não sou cadastrado
                    </Link>
                </form>
            </section>

            <img src={hero} alt="Heroi" />
        </div>
    );
}