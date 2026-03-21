import { TrendingUp, LifeBuoy, Scaling } from 'lucide-react'

export const OfferingsSection = () => (
    <section className="bg-[#111] py-24 px-4 border-t border-b border-zinc-800">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">O que oferecemos no nosso modelo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-[#FF6B00]/10 rounded-full flex items-center justify-center mb-6">
                        <TrendingUp className="w-10 h-10 text-[#FF6B00]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Lucratividade e retorno rápido</h3>
                    <p className="text-zinc-400">Payback menor que 24 meses e margens atrativas para a operação.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-[#FF6B00]/10 rounded-full flex items-center justify-center mb-6">
                        <LifeBuoy className="w-10 h-10 text-[#FF6B00]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Suporte e Treinamento</h3>
                    <p className="text-zinc-400">Suporte e treinamento para operacionar o negócio, além de consultoria contínua.</p>
                </div>
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 bg-[#FF6B00]/10 rounded-full flex items-center justify-center mb-6">
                        <Scaling className="w-10 h-10 text-[#FF6B00]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">Negócio escalável</h3>
                    <p className="text-zinc-400">Possibilidade de expansão rápida em função do baixo custo operacional.</p>
                </div>
            </div>
        </div>
    </section>
)
