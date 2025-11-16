import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { Link } from "react-router-dom";

export const IniciarSesion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log('Login:', { email, password });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">

            {/* Decoración */}
            <div className="absolute top-40 left-20 opacity-10 hidden lg:block">
                <img src="/popcorn.png" alt="" className="w-80 h-80 object-contain" />
            </div>
            <div className="absolute bottom-32 right-32 opacity-10 hidden lg:block">
                <img src="/cine.png" alt="" className="w-80 h-80 object-contain" />
            </div>

            {/* CONTENEDOR RESPONSIVE POR ALTURA */}
            <div className="
        w-full max-w-4xl relative z-10
        flex flex-col 
        short:flex-row                 
        items-center justify-center 
        gap-10">

                {/* Logo */}
                <div className="flex justify-center w-full short:w-1/2">
                    <img
                        src="/logoTrans (2).png"
                        alt="Filmate Logo"
                        className="w-[40vw] max-w-[250px] mx-auto"
                    />
                </div>

                {/* Formulario */}
                <div className="w-full max-w-md short:w-1/2 bg-slate-800/50 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-slate-700/50">

                    {/* Email */}
                    <div className="mb-6">
                        <label className="flex items-center text-white font-medium mb-3 text-lg">
                            <Mail className="w-5 h-5 text-red-500 mr-2" /> Email
                        </label>
                        <input
                            className="w-full px-4 py-3.5 bg-slate-700/50 border border-slate-600 rounded-xl text-white"
                            placeholder="Correo Electrónico"
                        />
                    </div>

                    {/* Contraseña */}
                    <div className="mb-8">
                        <label className="flex items-center text-white font-medium mb-3 text-lg">
                            <Lock className="w-5 h-5 text-red-500 mr-2" /> Contraseña
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-3.5 bg-slate-700/50 border border-slate-600 rounded-xl text-white"
                            placeholder="Contraseña"
                        />
                    </div>

                    {/* Botones */}
                    <Link to="/menuPrincipal">
                        <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-full">
                            Iniciar sesión
                        </button>
                    </Link>
                    <p className="text-center mt-6 text-gray-400">
                        ¿No tienes cuenta?{' '}
                        <Link to="/registro">
                            <button className="text-red-500 hover:text-red-400 font-semibold">
                                Regístrate
                            </button>
                        </Link>
                    </p>

                </div>
            </div>
        </div>

    );
};

export default IniciarSesion;
