export const AboutSection = () => (
    <section id="quem-somos" className="py-20 md:py-28 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2">
                    <span className="inline-block bg-[#FF6300]/10 text-[#FF6300] text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                        Quem Somos
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 leading-tight">
                        O mercado autônomo que chegou pra <span className="text-[#FF6300]">ficar</span>
                    </h2>
                    <div className="space-y-4 text-lg text-zinc-600 leading-relaxed">
                        <p>
                            O MercadimUai nasceu pra facilitar a vida de quem quer praticidade sem abrir mão da confiança.
                        </p>
                        <p>
                            Somos uma rede de mercados autônomos pensados para estar onde você precisa — no seu condomínio, empresa ou espaço compartilhado — funcionando <strong className="text-zinc-800">24 horas por dia, todos os dias da semana.</strong>
                        </p>
                        <p>
                            Unimos tecnologia, conveniência e preço justo para oferecer uma experiência rápida, segura e descomplicada. Aqui, você entra, escolhe, paga e segue seu dia. <strong className="text-zinc-800">Sem filas, sem complicação.</strong>
                        </p>
                        <p>
                            Mais do que vender produtos, o MercadimUai entrega autonomia, proximidade e aquele jeitinho mineiro de resolver tudo com simplicidade.
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src="/images/store-2.jpeg"
                        alt="Interior do MercadimUai — mercado autônomo com prateleiras abastecidas e sistema de autoatendimento"
                        className="w-full h-full object-cover"
                        style={{ maxHeight: '480px' }}
                        loading="lazy"
                        width="720"
                        height="480"
                    />
                </div>
            </div>
        </div>
    </section>
)
