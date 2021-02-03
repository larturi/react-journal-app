import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Registro</h3>

            <form action="">

                <input 
                   type="text"
                   placeholder="Tu nombre"
                   name="nombre"
                   className="auth__input"
                   autoComplete="off"
                />

                <input 
                   type="text"
                   placeholder="email@dominio.com"
                   name="email"
                   className="auth__input"
                   autoComplete="off"
                />

                <input 
                   type="password"
                   placeholder="Contraseña"
                   name="password"
                   className="auth__input"
                />

                <input 
                   type="password"
                   placeholder="Condirmar Contraseña"
                   name="password2"
                   className="auth__input"
                />

                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                >
                    Login
                </button>

                <div className="mt-5">

                    <span>Ya tienes cuenta? </span>

                    <Link 
                        to="/auth/login"
                        className="link"
                    >
                        Ir al Login
                    </Link>

                </div>

            </form>
        </>
    )
}
