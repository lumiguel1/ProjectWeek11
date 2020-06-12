import React from 'react';
import { MdFastRewind } from 'react-icons/md';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './styles.css';

export default function NewIncident(){
    return (
        <div className="new-incident-container">

            <div className="content">
                <section>
                    <img className="edit" src={logo} alt="Heroi" />

                    <h1>Cadastro novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encontrar um herói para resolver isso.
                    </p>

                    <Link className="back-link" to="/profile">
                        <MdFastRewind size={16} color="E02041"/>
                        Voltar para Página Inicial
                    </Link>
                </section>

                <form>
                    <input placeholder="Titulo do caso"/>
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em R$" />

                    <button className="button" type="">Cancelar</button>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>
    );
}