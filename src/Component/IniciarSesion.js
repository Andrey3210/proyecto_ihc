import React, { useState } from 'react';
import { Mail, Lock, CheckCircle } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";

export const IniciarSesion = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log('Login:', { email, password });

        // Mostrar animación de éxito
        setShowSuccess(true);

        // Redirigir después de 2 segundos
        setTimeout(() => {
            navigate('/menuPrincipal');
        }, 2000);
    };

    // Permitir iniciar sesión con la tecla Enter
    React.useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === "Enter") {
                handleSubmit();
            }
        };

        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [email, password]);


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">

            {/* Decoración */}
            <div className="absolute top-40 left-20 opacity-10 hidden lg:block">
                <img src="/popcorn.png" alt="" className="w-80 h-80 object-contain" />
            </div>
            <div className="absolute bottom-32 right-32 opacity-10 hidden lg:block">
                <img src="/cine.png" alt="" className="w-80 h-80 object-contain" />
            </div>

            {/* Modal de éxito */}
            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn">
                    <div className="bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700 max-w-md w-full mx-4 animate-scaleIn">
                        <div className="flex flex-col items-center text-center">
                            {/* Icono de check con animación */}
                            <div className="relative mb-6">
                                <div className="absolute inset-0 bg-green-500/20 rounded-full animate-ping"></div>
                                <CheckCircle className="w-20 h-20 text-green-500 relative animate-checkMark" />
                            </div>

                            {/* Texto */}
                            <h2 className="text-2xl font-bold text-white mb-2 animate-slideDown">
                                ¡Inicio de sesión exitoso!
                            </h2>
                            <p className="text-xl text-gray-300 animate-slideDown animation-delay-200">
                                Bienvenido, <span className="text-red-500 font-semibold">{email || 'Usuario'}</span>
                            </p>
                        </div>
                    </div>
                </div>
            )}

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
                            <Mail className="w-5 h-5 text-red-500 mr-2" /> Email o Nombre de usuario
                        </label>
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3.5 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3.5 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                            placeholder="Contraseña"
                        />
                    </div>

                    {/* Botones */}
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-full transition-all duration-300 shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transform hover:scale-105">
                        Iniciar sesión
                    </button>
                    <p className="text-center mt-6 text-gray-400">
                        ¿No tienes cuenta?{' '}
                        <Link to="/registro">
                            <button className="text-red-500 hover:text-red-400 font-semibold transition-colors">
                                Regístrate
                            </button>
                        </Link>
                    </p>

                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes scaleIn {
                    from { 
                        transform: scale(0.8);
                        opacity: 0;
                    }
                    to { 
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                
                @keyframes checkMark {
                    0% { 
                        transform: scale(0) rotate(0deg);
                        opacity: 0;
                    }
                    50% { 
                        transform: scale(1.2) rotate(10deg);
                    }
                    100% { 
                        transform: scale(1) rotate(0deg);
                        opacity: 1;
                    }
                }
                
                @keyframes slideDown {
                    from {
                        transform: translateY(-20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                
                .animate-scaleIn {
                    animation: scaleIn 0.5s ease-out;
                }
                
                .animate-checkMark {
                    animation: checkMark 0.6s ease-out;
                }
                
                .animate-slideDown {
                    animation: slideDown 0.6s ease-out;
                }
                
                .animation-delay-200 {
                    animation-delay: 0.2s;
                    opacity: 0;
                    animation-fill-mode: forwards;
                }
            `}</style>
        </div>
    );
};

export default IniciarSesion;