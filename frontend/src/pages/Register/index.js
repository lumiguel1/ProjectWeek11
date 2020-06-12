import React from 'react';
import { Link } from 'react-router-dom';
import { MdFastRewind } from 'react-icons/md';

import './styles.css';

import logo from '../../assets/logo.svg';

export default function Register(){
    return (
        <div className="register-container">

            <div className="content">
                <section>
                    <img className="edit" src={logo} alt="Heroi" />

                    <h1>Cadastro</h1>
                    <p>
                        Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
                    </p>

                    <Link className="back-link" to="/">
                        <MdFastRewind size={16} color="E02041"/>
                        Voltar para Página Inicial
                    </Link>
                </section>

                <form>
                    <input placeholder="Nome da ONG"/>
                    <input type="email" placeholder="Email@exemplo.com" />
                    <input placeholder="Whatsapp" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" width={{ width: 80 }}/>
                    </div>
                    <button className="button" type="submit">Concluir Cadastro</button>
                </form>
            </div>

        </div>
    );
}