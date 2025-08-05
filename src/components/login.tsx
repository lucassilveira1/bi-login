import React, { useState } from "react";
import "./style.css";
import logo from "../assets/logo-cmp.png";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Preencha todos os campos.");
            return;
        }
    };

    return (
        <div className="login-wrapper">
            <img src={logo} alt="Logo" className="login-logo" />

            <div className="login-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <label className="login-label">Usuário</label>
                    <input
                        type="email"
                        className="login-input"
                        placeholder="Informe seu usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label className="login-label">Senha</label>
                    <input
                        type="password"
                        className="login-input"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className="login-error">{error}</p>}

                    <button type="submit" className="login-button">
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
