import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {

    const dispatch = useDispatch();
    const { msgError } = useSelector(state => state.ui);

    const [formValues, handleInputChange] = useForm({
        nombre: 'Hernando',
        email: 'hernando@gmail.com',
        password: '123',
        password2: '123'
    });

    const { nombre, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, nombre));
        }
    }

    const isFormValid = () => {

        if(nombre.trim().length === 0) {
            dispatch(setError('Nombre es requerido'));
            return false;
        } else if(!validator.isEmail(email)) {
            dispatch(setError('Email es requerido y debe ser un email valido'));
            return false;
        } else if(password !== password2) {
            dispatch(setError('Los passwords deben coincidir'));
            return false;
        } else if(password.length < 6) {
            dispatch(setError('El password debe tener al menos 6 caracteres'));
            return false;
        }
        

        dispatch(removeError());

        return true;

    }

    return (
        <>
            <h3 className="auth__title">Registro</h3>

            {
                msgError && 
                (
                    <div className="auth__alert-error">
                        { msgError }
                    </div>
                )
            }
            

            <form onSubmit={handleRegister}>

                <input 
                   type="text"
                   placeholder="Tu nombre"
                   name="nombre"
                   className="auth__input"
                   autoComplete="off"
                   value={nombre}
                   onChange={handleInputChange}
                />

                <input 
                   type="text"
                   placeholder="email@dominio.com"
                   name="email"
                   className="auth__input"
                   autoComplete="off"
                   value={email}
                   onChange={handleInputChange}
                />

                <input 
                   type="password"
                   placeholder="Contraseña"
                   name="password"
                   className="auth__input"
                   value={password}
                   onChange={handleInputChange}
                />

                <input 
                   type="password"
                   placeholder="Condirmar Contraseña"
                   name="password2"
                   className="auth__input"
                   value={password2}
                   onChange={handleInputChange}
                />

                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                >
                    Registrar
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
