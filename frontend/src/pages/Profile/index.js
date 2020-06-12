import React from 'react';
import { Link } from 'react-router-dom';
import { MdPower, MdDelete } from 'react-icons/md';

import './styles.css';
import logo from '../../assets/logo.svg';

export default function Profile(){
    return (
        <div className="profile-container">
            <header>
                <img src={logo} alt="Heroi" />
                <span>Bem vindo, APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <MdPower size={16} color="#E02041" />
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO: </strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO: </strong>
                    <p>Decriçao Teste</p>
                    <strong>VALOR: </strong>
                    <p>R$ 100,000</p>
                    <button type="button">
                        <MdDelete size={20} color="#666" />
                    </button>
                </li>
                <li>
                    <strong>CASO: </strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO: </strong>
                    <p>Decriçao Teste</p>
                    <strong>VALOR: </strong>
                    <p>R$ 100,000</p>
                    <button type="button">
                        <MdDelete size={20} color="#666" />
                    </button>
                </li>
                <li>
                    <strong>CASO: </strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO: </strong>
                    <p>Decriçao Teste</p>
                    <strong>VALOR: </strong>
                    <p>R$ 100,000</p>
                    <button type="button">
                        <MdDelete size={20} color="#666" />
                    </button>
                </li>
                <li>
                    <strong>CASO: </strong>
                    <p>Caso teste</p>
                    <strong>DESCRIÇÃO: </strong>
                    <p>Decriçao Teste</p>
                    <strong>VALOR: </strong>
                    <p>R$ 100,000</p>
                    <button type="button">
                        <MdDelete size={20} color="#666" />
                    </button>
                </li>
            </ul>
        </div>
    );
}