import React from "react";
import '../components/Hello.css'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import projeto1 from '../assets/logo.png'
import projeto2 from '../assets/logo.png'
import projeto3 from '../assets/projeto1.png'

function Hello() {
    return(
        <div className="container">
            <div className="header">
            <li>
              <Link className="h-b" to="/">Home</Link>
           </li>
                <a href="https://discord.gg/PtRPubtm5z" className="h-b" target={'_blank'}>Contact</a>
            </div>
            <div className="informacoes">
                <h1>INFORMATIONS:</h1>
                <div className="infos">
                    <img src={logo} />
                    <p className="i-text">Olá, sou o Nicolas mais conhecido como Drukas, estou aprendendo programação, mas objetivamente <span>React JS, HTML, CSS.</span> Esse é meu primeiro site em ReactJS, espero que goste! Caso queira ver meus projetos clique no botão abaixo.</p>
                </div>
                <a href="https://discord.gg/PtRPubtm5z" className="portfolio" target={'_blank'}>Portfólio</a>
            </div>
            <div className="informacoes2">
                <h1 className="projetos-h1" >ALGUNS DOS MEUS PROJETOS:</h1>
                <div className="projetos">
                    <div className="quadrado">
                        <p className="name-p">ARSENAL</p>
                        <p className="desc">O Arsenal é uma nui de fivem que consiste em automatizar o processo do policial pegar seu equipamento.</p>
                        <a href="https://discord.gg/PtRPubtm5z" className="preview" target={'_blank'}>Preview</a>
                    </div>
                    <div className="quadrado">
                    <p className="name-p">GARAGEM</p>
                        <p className="desc">A garagem é uma nui de fivem para retirada de carros, uma nui simples bonita e otimizada, perfeita para seu Academy/RP</p>
                        <a href="https://discord.gg/PtRPubtm5z" className="preview" target={'_blank'}>Preview</a>
                    </div>
                    <div className="quadrado">
                    <p className="name-p">TRADE</p>
                        <p className="desc">O Trade é uma nui de fivem para realizar trocas dentro de jogo, uma nui simples bonita e otimizada, perfeita para seu Academy.</p>
                        <a href="https://discord.gg/PtRPubtm5z" className="preview" target={'_blank'}>Preview</a>
                    </div>
                </div>
            </div>
            <div className="baixo">
                <p className="b-t">Todos os direitos reservados para <span>@Drukas</span></p>
                <p className="b-t">drukas<span>#0011</span></p>
            </div>
        </div>
    )
}

export default Hello
