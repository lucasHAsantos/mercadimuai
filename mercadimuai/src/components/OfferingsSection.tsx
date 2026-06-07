import { TrendingUp, LifeBuoy, Scaling } from 'lucide-react'

export const OfferingsSection = () => (
    <section id="servicos" className="bg-white py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <span className="inline-block bg-[#FF6300]/10 text-[#FF6300] text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                    Nosso modelo
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-zinc-900">O que oferecemos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-[#FF6300]/10 rounded-full flex items-center justify-center mb-6">
                        <TrendingUp className="w-10 h-10 text-[#FF6300]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-zinc-900">Lucratividade e retorno rápido</h3>
                    <p className="text-zinc-600">Payback menor que 24 meses e margens atrativas para a operação.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-[#FF6300]/10 rounded-full flex items-center justify-center mb-6">
                        <LifeBuoy className="w-10 h-10 text-[#FF6300]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-zinc-900">Suporte e Treinamento</h3>
                    <p className="text-zinc-600">Suporte e treinamento para operacionar o negócio, além de consultoria contínua.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-[#FF6300]/10 rounded-full flex items-center justify-center mb-6">
                        <Scaling className="w-10 h-10 text-[#FF6300]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-zinc-900">Negócio escalável</h3>
                    <p className="text-zinc-600">Possibilidade de expansão rápida em função do baixo custo operacional.</p>
                </div>
            </div>
        </div>
    </section>
)
