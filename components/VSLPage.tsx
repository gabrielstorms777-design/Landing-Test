import React, { useState, useEffect, useRef } from 'react';
import { ClippersLogo } from './icons/ClippersLogo';
import { LockIcon } from './icons/LockIcon';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

// --- Placeholder 3D Icons ---
const Icon3D: React.FC<{ icon: string; className?: string }> = ({ icon, className }) => (
    <div className={`w-16 h-16 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center text-3xl mb-4 ${className}`}>
        {icon}
    </div>
);

const CTAButton: React.FC<{ isPulsing?: boolean, className?: string }> = ({ isPulsing = false, className = "" }) => (
    <div className={`flex flex-col items-center w-full ${className}`}>
        <button className={`w-full max-w-2xl bg-gradient-to-b from-yellow-400 to-[#FFD700] text-gray-900 font-extrabold text-xl md:text-2xl py-5 px-8 rounded-xl border-b-4 border-yellow-700 hover:from-yellow-300 hover:to-yellow-500 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_10px_40px_-10px_rgba(255,215,0,0.4)] ${isPulsing ? 'animate-pulse-gold' : ''}`}>
            SÍ, QUIERO ACCEDER A LA COMUNIDAD CLIPPER AHORA
        </button>
        <p className="text-md font-semibold text-gray-200 mt-4">(Pago Único de $147 USD)</p>
        <p className="text-sm text-gray-400 mt-1">Acceso Inmediato</p>
        <div className="flex items-center space-x-6 mt-4 text-gray-400 text-xs">
            <div className="flex items-center space-x-1.5">
                <LockIcon className="w-4 h-4 text-cyan-300" />
                <span>100% Secure Checkout</span>
            </div>
            <div className="flex items-center space-x-1.5">
                <ShieldCheckIcon className="w-4 h-4 text-cyan-300" />
                <span>SSL Encrypted</span>
            </div>
             <div className="flex items-center space-x-1.5">
                <ShieldCheckIcon className="w-4 h-4 text-cyan-300" />
                <span>Garantía de 7 Días</span>
            </div>
        </div>
    </div>
);

const VSLPage: React.FC = () => {
    const [isCtaVisible, setIsCtaVisible] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    // NOTE: This should be set to 15-20 minutes (900-1200 seconds) in production.
    const CTA_APPEAR_TIME_IN_SECONDS = 15; 

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const timer = setTimeout(() => {
            if (!isCtaVisible) setIsCtaVisible(true);
        }, CTA_APPEAR_TIME_IN_SECONDS * 1000);

        const handleTimeUpdate = () => {
            if (video.currentTime >= CTA_APPEAR_TIME_IN_SECONDS && !isCtaVisible) {
                setIsCtaVisible(true);
            }
        };
        video.addEventListener('timeupdate', handleTimeUpdate);

        return () => {
            clearTimeout(timer);
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, [isCtaVisible]);

    const faqs = [
        { q: "¿El pago de $147 es mensual?", a: "No. Este es un pago único de acceso a la formación y a la comunidad. Nuestro equipo te contactará después de la compra para presentarte, si lo deseas, opciones de actualización a planes superiores como mentorías o membresías anuales." },
        { q: "¿Qué necesito para empezar? ¿Un equipo profesional?", a: "Absolutamente no. Solo necesitas un smartphone y conexión a internet. Te enseñamos a crear contenido de alta calidad y monetizable sin equipos costosos." },
        { q: "¿Cuánto tardaré en ganar dinero?", a: "Seremos honestos: esto no es un esquema para hacerse rico rápido. Es una profesión que requiere aplicación y dedicación. Dicho esto, hemos visto miembros conseguir su primera oferta en la plataforma Clippers en su primera semana. El resultado depende de tu aplicación constante del método." },
        { q: "¿Y si ya tengo seguidores? ¿Esto sirve para mí?", a: "¡Definitivamente! Esta comunidad es especialmente poderosa para ti. Si ya tienes audiencia pero no sabes cómo monetizarla efectivamente o escalar tu marca, el Método C.M.A. te dará la estructura y la plataforma para transformar tus seguidores en ingresos y construir un negocio digital sostenible." },
        { q: "¿Qué pasa exactamente después de pagar?", a: "Inmediatamente después de tu pago, recibirás un correo electrónico y un WhatsApp con 3 cosas esenciales: 1) Tu acceso personal al portal de formación completo. 2) El enlace de invitación exclusivo a la comunidad privada. 3) Las instrucciones detalladas para activar y optimizar tu perfil en la plataforma Clippers para empezar a recibir ofertas." },
        { q: "¿Tendré soporte si tengo dudas?", a: "Sí, tendrás soporte completo y constante. Contarás con soporte 24/7 en la comunidad privada (Discord/Telegram) donde nuestro equipo y otros Clippers te ayudarán. Además, realizamos sesiones grupales de preguntas y respuestas en vivo cada semana para resolver cualquier duda." },
    ];

    return (
        <div className="bg-[#0A0A1F] text-white overflow-x-hidden">
            <header className="py-4 px-6 md:px-12 flex items-center justify-between bg-[#0A0A1F]/60 backdrop-blur-sm sticky top-0 z-50 border-b border-white/10">
                <ClippersLogo className="w-28 h-auto" />
                <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-300">
                    <a href="#inicio" className="hover:text-white transition-colors">Inicio</a>
                    <a href="#comunidad" className="hover:text-white transition-colors">Comunidad</a>
                    <a href="#contacto" className="hover:text-white transition-colors">Contacto</a>
                </nav>
            </header>

            <main className="container mx-auto px-4">
                {/* SECTION 1: VSL & Main CTA */}
                <section id="inicio" className="text-center py-16 md:py-24">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-100 leading-tight">Acceso Concedido.</h1>
                    <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 mt-2">Estás a un clic de tu nueva economía.</h2>
                    <p className="mt-4 text-gray-400">Tu futuro como creador rentable comienza aquí. Dale PLAY.</p>
                    <div className="mt-10 aspect-video w-full max-w-5xl mx-auto bg-black rounded-2xl shadow-2xl shadow-[#FFD700]/10 overflow-hidden p-2 bg-white/5 border border-white/10 backdrop-blur-lg">
                        <video ref={videoRef} src="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4" className="w-full h-full rounded-lg" autoPlay playsInline muted loop />
                    </div>
                    <div className={`transition-all duration-700 ease-in-out mt-12 ${isCtaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {isCtaVisible && <CTAButton isPulsing />}
                    </div>
                </section>

                {/* SECTION 2: Intro & Promise Reinforcement */}
                <section className="max-w-3xl mx-auto py-16 md:py-24 text-lg text-gray-300 leading-relaxed space-y-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Si prefieres leer, estás en el lugar correcto.</h2>
                    <p>Lo que acabas de ver en el video no es una "fórmula mágica". <span className="text-yellow-300 font-semibold">Es un sistema.</span></p>
                    <p>Un sistema diseñado para solucionar el mayor problema del creador moderno: la monetización.</p>
                    <div className="bg-white/5 backdrop-blur-md border border-cyan-400/30 rounded-xl p-6 my-8 shadow-lg">
                       <p className="text-xl font-semibold text-cyan-300">"Crear contenido sin una estrategia de monetización es un hobby caro."</p>
                    </div>
                    <p className="text-2xl font-bold">Nosotros no construimos un curso. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Construimos un ecosistema.</span></p>
                    <p>Te damos la habilidad (la caña de pescar), la autoridad (el barco) y las ofertas (el océano lleno de peces).</p>
                </section>

                {/* SECTION 3: Who We Are */}
                <section className="max-w-5xl mx-auto py-16 md:py-24 p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">¿Quiénes Somos? La Fuerza Detrás de Clippers</h2>
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="w-full md:w-1/2 h-80 bg-gray-800 rounded-xl flex items-center justify-center border border-white/10 shadow-2xl">
                           <p className="text-gray-500">[Imagen AI: Colaboración y éxito tecnológico]</p>
                        </div>
                        <div className="md:w-1/2 text-gray-300 space-y-5 text-center md:text-left">
                            <p>No somos "gurús" que venden humo. Somos los fundadores de Clippers, una plataforma tecnológica que ya conecta a cientos de creadores con marcas de primer nivel, pagando miles de dólares cada mes.</p>
                            <p>Vimos un problema: las marcas querían creadores de calidad, y los creadores talentosos no sabían cómo encontrarlas ni cómo crear contenido que realmente generara un retorno.</p>
                            <p className="font-semibold text-white text-lg">Decidimos cerrar ese círculo. Así nació la Comunidad Clipper.</p>
                        </div>
                    </div>
                </section>

                {/* SECTION 4: The C.M.A. Method */}
                <section className="max-w-6xl mx-auto py-16 md:py-32 text-center">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Tu Transformación: El Método C.M.A.</h2>
                    <p className="text-lg text-gray-400 mb-20 max-w-3xl mx-auto">De Creador confundido (Punto A) a Clipper profesional con un flujo constante de ingresos (Punto B).</p>
                    <div className="grid md:grid-cols-3 gap-8 items-start">
                         {[
                            { title: "CREAR", subtitle: "La Habilidad", icon: "🎬", description: "No solo 'edición viral'. Te enseñamos a pensar como un estratega de contenido. Dominarás el storytelling, la edición que retiene y la psicología de las plataformas.", result: "Contenido de Nivel Profesional" },
                            { title: "MONETIZAR", subtitle: "La Plataforma", icon: "📈", description: "Aquí es donde todo cambia. Acceso directo a nuestro 'panel de ofertas'. Te enseñamos a negociar, entender métricas y conseguir tus primeros pagos por vistas.", result: "Primeros Ingresos y Contratos", featured: true },
                            { title: "AUTORIDAD", subtitle: "La Marca", icon: "👑", description: "El dinero sigue a la autoridad. Te enseñamos a construir una Marca Personal magnética que atrae seguidores de calidad y te posiciona como un experto.", result: "Un Negocio Digital Sostenible" }
                        ].map((phase, i) => (
                            <div key={phase.title} className={`bg-white/5 p-8 rounded-2xl border backdrop-blur-xl text-left transition-all duration-300 ${phase.featured ? 'border-yellow-400/50 shadow-2xl shadow-yellow-400/10 transform md:scale-110' : 'border-white/10'}`}>
                                <Icon3D icon={phase.icon} />
                                <span className="font-bold text-yellow-400">FASE {i+1}</span>
                                <h3 className="text-3xl font-bold mt-1 mb-4 text-white">{phase.title} <span className="text-gray-400 font-medium">({phase.subtitle})</span></h3>
                                <p className="text-gray-400 min-h-[140px]">{phase.description}</p>
                                <p className="mt-6 font-semibold text-cyan-300 text-lg">Resultado: {phase.result}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                {/* SECTION 5: Social Proof */}
                <section id="comunidad" className="max-w-6xl mx-auto py-16 md:py-24">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-center text-white mb-16">La Prueba No Miente: Conoce a los Clippers</h2>
                    <h3 className="text-3xl font-bold text-center text-gray-200 mb-8">Galería de la Fama (Video Testimonios)</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[1, 2, 3, 4].map(i => (
                          <div key={i} className="aspect-w-9 aspect-h-16 bg-gray-800 rounded-xl overflow-hidden relative group border-2 border-white/10">
                            <div className="w-full h-full bg-gray-700 flex items-center justify-center text-gray-500">[Video {i}]</div>
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                               <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path></svg>
                               </div>
                            </div>
                          </div>
                        ))}
                    </div>
                    
                    <h3 className="text-3xl font-bold text-center text-gray-200 mt-24 mb-8">Pagos Reales de la Plataforma</h3>
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-xl">
                        <div className="w-full h-80 bg-gray-800 rounded-xl flex items-center justify-center border border-white/10 shadow-inner">
                            <p className="text-gray-500">[Imagen AI: Dashboard de Clippers con pagos reales]</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4 text-center mt-6">
                            <div className="bg-white/5 p-4 rounded-lg">"De $0 a $1,200 en 6 semanas" <span className="font-semibold text-white block mt-1">- Carlos R.</span></div>
                            <div className="bg-yellow-400/10 p-4 rounded-lg border border-yellow-400/30 text-yellow-300">"Mi primer pago de $300 por 1 video" <span className="font-semibold text-white block mt-1">- Ana G.</span></div>
                            <div className="bg-white/5 p-4 rounded-lg">"Facturación total: $4,800" <span className="font-semibold text-white block mt-1">- David L.</span></div>
                        </div>
                    </div>

                    <h3 className="text-3xl font-bold text-center text-gray-200 mt-24 mb-10">Estudios de Caso: De la Frustración al Éxito</h3>
                     <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
                            <div className="w-28 h-28 rounded-full flex-shrink-0 border-4 border-gray-600 bg-gray-700 flex items-center justify-center text-gray-500 text-sm">[María]</div>
                            <div>
                                <h4 className="font-bold text-2xl text-white">EL CASO DE MARÍA</h4>
                                <p className="text-yellow-300 my-2 text-lg">"De empleada a Creadora con $2,500/mes."</p>
                                <p className="text-gray-400">María usó la Fase 1 para pulir sus videos de cocina y la Fase 2 para conectar con 3 marcas de alimentos. Ahora, su contenido le paga las facturas.</p>
                            </div>
                        </div>
                         <div className="bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center text-center sm:text-left gap-6">
                            <div className="w-28 h-28 rounded-full flex-shrink-0 border-4 border-gray-600 bg-gray-700 flex items-center justify-center text-gray-500 text-sm">[Javier]</div>
                            <div>
                                <h4 className="font-bold text-2xl text-white">EL CASO DE JAVIER</h4>
                                <p className="text-yellow-300 my-2 text-lg">"Tenía 15k seguidores pero $0 ingresos."</p>
                                <p className="text-gray-400">Javier ya sabía crear, pero estaba perdido en la monetización. El Método C.M.A. le dio la estructura para construir su Marca Personal (Fase 3).</p>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* SECTION 6: Value Stack */}
                 <section className="max-w-5xl mx-auto my-16 md:my-24 bg-white/10 p-8 md:p-12 rounded-3xl border-2 border-yellow-400 shadow-2xl shadow-yellow-500/10 backdrop-blur-2xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-10">Tu Arsenal Completo: Lo que Recibes Hoy</h2>
                    <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
                         <div>
                            <h3 className="font-bold text-2xl text-cyan-300 mb-6">EL PROGRAMA "MÉTODO C.M.A."</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center"><Icon3D icon="📖" className="w-12 h-12 mr-4 text-xl mb-0" /><div><span className="font-semibold text-white">Módulo 1: Maestría en Storytelling</span><span className="text-gray-400 block text-sm">(Valor: $197)</span></div></li>
                                <li className="flex items-center"><Icon3D icon="🚀" className="w-12 h-12 mr-4 text-xl mb-0" /><div><span className="font-semibold text-white">Módulo 2: Monetización Inmediata</span><span className="text-gray-400 block text-sm">(Valor: $497)</span></div></li>
                                <li className="flex items-center"><Icon3D icon="👑" className="w-12 h-12 mr-4 text-xl mb-0" /><div><span className="font-semibold text-white">Módulo 3: Construcción de Autoridad</span><span className="text-gray-400 block text-sm">(Valor: $297)</span></div></li>
                            </ul>
                        </div>
                         <div>
                            <h3 className="font-bold text-2xl text-yellow-300 mb-6">ACCESOS Y BONIFICACIONES (SOLO HOY)</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center"><Icon3D icon="🔑" className="w-12 h-12 mr-4 text-xl mb-0" /><div><span className="font-semibold text-white">BONUS 1: Acceso a Plataforma Clippers</span><span className="text-gray-400 block text-sm">(Valor: $97)</span></div></li>
                                <li className="flex items-center"><Icon3D icon="💬" className="w-12 h-12 mr-4 text-xl mb-0" /><div><span className="font-semibold text-white">BONUS 2: Comunidad Privada</span><span className="text-gray-400 block text-sm">(Valor: $197)</span></div></li>
                                <li className="flex items-center"><Icon3D icon="🧰" className="w-12 h-12 mr-4 text-xl mb-0" /><div><span className="font-semibold text-white">BONUS 3: Librería de Recursos</span><span className="text-gray-400 block text-sm">(Valor: $99)</span></div></li>
                                <li className="flex items-center"><Icon3D icon="🗓️" className="w-12 h-12 mr-4 text-xl mb-0" /><div><span className="font-semibold text-white">BONUS 4: Sesiones Grupales</span><span className="text-gray-400 block text-sm">(Valor: $397)</span></div></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-12 pt-10 border-t-2 border-dashed border-white/20">
                        <p className="text-gray-400 text-lg">VALOR TOTAL REAL: <span className="line-through">$1,681 USD</span></p>
                        <p className="text-2xl font-bold text-white mt-4">Tu Inversión Hoy: Un Único Pago de</p>
                        <p className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 my-4">$147</p>
                         <CTAButton />
                    </div>
                </section>

                {/* SECTION 7: Guarantee */}
                <section className="max-w-4xl mx-auto py-16 md:py-24 text-center">
                    <div className="w-24 h-24 bg-green-500/10 border-2 border-green-500/30 rounded-full flex items-center justify-center mx-auto text-5xl mb-6">🛡️</div>
                    <h2 className="text-4xl font-bold text-white mb-4">Tu Riesgo es Cero. Nuestra Garantía es Total.</h2>
                    <p className="text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">Confiamos plenamente en nuestro método. Te ofrecemos una <span className="font-bold text-white">Garantía Incondicional de Devolución de 7 Días.</span> Si sientes que no es para ti, te reembolsaremos el 100% de tu dinero. Sin preguntas.</p>
                     <div className="bg-white/5 border border-white/10 rounded-xl p-6 max-w-md mx-auto backdrop-blur-lg">
                        <h3 className="text-xl font-bold text-white mb-2">Pago 100% Seguro y Protegido</h3>
                        <p className="text-sm text-gray-400 mb-4">Tus datos están protegidos con encriptación SSL de nivel bancario.</p>
                        <img src="https://i.imgur.com/28EAb34.png" alt="Payment methods" className="h-8 mx-auto" />
                    </div>
                </section>
                
                {/* SECTION 8: FAQ */}
                <section id="contacto" className="max-w-3xl mx-auto py-16 md:py-24">
                    <h2 className="text-4xl font-bold text-center text-white mb-12">Preguntas Frecuentes</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white/5 rounded-lg border border-white/10 backdrop-blur-md">
                                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full flex justify-between items-center text-left p-6 font-semibold text-white text-lg">
                                    <span className={openFaq === index ? 'text-yellow-300' : ''}>{faq.q}</span>
                                    <span className={`transform transition-transform duration-300 text-yellow-300 text-3xl font-light ${openFaq === index ? 'rotate-45' : ''}`}>+</span>
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}>
                                    <div className="p-6 pt-0 text-gray-400"><p>{faq.a}</p></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SECTION 9: Final CTA */}
                <section className="max-w-4xl mx-auto py-16 md:py-32 text-center p-8 bg-gradient-to-b from-blue-500/10 to-transparent rounded-t-3xl">
                     <h2 className="text-4xl font-extrabold text-white mb-8">Elige tu Camino</h2>
                     <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                         <div className="bg-red-900/20 p-6 rounded-lg border border-red-500/30">
                            <h3 className="text-xl font-bold text-red-400 mb-3">El Camino Difícil</h3>
                            <p className="text-gray-400">Seguir creando gratis, luchando contra el algoritmo y esperando "tener suerte".</p>
                         </div>
                         <div className="bg-yellow-800/20 p-6 rounded-lg border border-yellow-500/50">
                            <h3 className="text-xl font-bold text-yellow-300 mb-3">El Camino Inteligente</h3>
                            <p className="text-gray-300">Unirte a un ecosistema probado que te garantiza la monetización.</p>
                         </div>
                     </div>
                     <p className="mt-10 text-2xl font-semibold text-yellow-300">Elige convertirte en un Clipper.</p>
                     <div className="mt-12">
                        <CTAButton isPulsing />
                     </div>
                </section>
            </main>
        </div>
    );
};

export default VSLPage;