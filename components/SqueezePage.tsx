
import React, { useState } from 'react';
import CountdownTimer from './CountdownTimer';
import { ClippersLogo } from './icons/ClippersLogo';
import { CheckIcon } from './icons/CheckIcon';

interface SqueezePageProps {
    onSuccess: () => void;
}

const SqueezePage: React.FC<SqueezePageProps> = ({ onSuccess }) => {
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim() || !whatsapp.trim()) {
            setError('Por favor, completa ambos campos.');
            return;
        }
        setError('');
        console.log({ name, whatsapp });
        onSuccess();
    };
    
    // Set timer for 13 hours, 59 minutes
    const thirteenHoursFiftyNineMinutesInSeconds = (13 * 60 * 60) + (59 * 60);

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4 pt-16 sm:pt-20">
            <CountdownTimer initialSeconds={thirteenHoursFiftyNineMinutesInSeconds} />
            
            <header className="text-center mb-8">
                <div className="flex justify-center mb-6">
                    <ClippersLogo className="w-32 h-auto" />
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
                    Deja de Crear Contenido Gratis.
                </h1>
                <h2 className="text-xl md:text-3xl font-bold text-gray-200 max-w-4xl mx-auto">
                    Descubre el "Método Clipper" para Convertir tus Vistas en Dinero <span className="text-yellow-300">(incluso si empiezas desde cero).</span>
                </h2>
                <p className="text-md md:text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                    Accede al Entrenamiento 100% Gratuito donde revelamos cómo nuestros mejores creadores generan ingresos diarios con sus videos... sin depender de agencias ni tener millones de seguidores.
                </p>
            </header>

            <main className="w-full max-w-lg mx-auto">
                <div className="bg-gray-800 border border-blue-500/30 rounded-2xl shadow-2xl shadow-blue-500/10 p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-center mb-6">RECIBE TU ACCESO INSTANTÁNEO</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">Nombre *</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Escribe tu nombre"
                                className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-300 mb-2">Tu Mejor WhatsApp *</label>
                            <input
                                id="whatsapp"
                                type="tel"
                                value={whatsapp}
                                onChange={(e) => setWhatsapp(e.target.value)}
                                placeholder="Ej: +1 123 456 7890"
                                className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                                required
                            />
                        </div>
                        {error && <p className="text-red-400 text-sm text-center">{error}</p>}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 text-white font-bold text-lg py-4 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                            >
                                QUIERO ACCEDER AL ENTRENAMIENTO AHORA
                            </button>
                            <p className="text-xs text-gray-500 text-center mt-3">
                                *Al registrarte, aceptas recibir comunicaciones por WhatsApp. 100% libre de spam.
                            </p>
                        </div>
                    </form>
                </div>
            </main>

            <section className="w-full max-w-3xl mx-auto mt-12 md:mt-16">
                 <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-center mb-6">En este Entrenamiento Gratuito aprenderás:</h3>
                    <ul className="space-y-4 text-gray-300">
                        <li className="flex items-start">
                           <CheckIcon className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                            <span><span className="font-bold text-white">El Método de 3 Pasos (Editar, Crecer, Monetizar):</span> La fórmula exacta para crear videos que el algoritmo ama y construir una marca personal que atrae ofertas de alto valor.</span>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                            <span><span className="font-bold text-white">El "Vehículo Secreto" de Monetización:</span> Cómo acceder a las mejores ofertas de marcas (incluso con pocos seguidores) usando nuestra plataforma interna "Clippers".</span>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon className="w-6 h-6 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                            <span><span className="font-bold text-white">El Error Fatal:</span> Por qué el 99% de los creadores fracasa al intentar vivir de esto (y cómo asegurarte de que tú no seas uno de ellos).</span>
                        </li>
                    </ul>
                 </div>
            </section>
        </div>
    );
};

export default SqueezePage;
