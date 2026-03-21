import { BadgePercent } from 'lucide-react'

export const MarketDataSection = () => (
    <section className="bg-[#0a0a0a] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-6">Um mercado em<br /><span className="text-[#FF6B00]">grande expansão</span></h2>
                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                    Os minimercados autônomos consolidam-se como uma oportunidade de alto potencial, unindo conveniência, inovação e operação sem equipe física. Com baixos custos e margens atrativas, o setor já soma mais de 12 mil unidades no Brasil, movimentando entre R$ 1.5 e 2 bilhões anualmente, e apresentando crescimento de até 42% ao ano.
                </p>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                <div className="bg-[#111] p-8 rounded-2xl border border-zinc-800">
                    <div className="text-[#FF6B00] text-4xl font-bold mb-2">+12 mil</div>
                    <div className="text-zinc-300 font-medium mb-1">Mercados autônomos</div>
                    <div className="text-zinc-500 text-sm">atualmente instalados no país</div>
                </div>
                <div className="bg-[#111] p-8 rounded-2xl border border-zinc-800">
                    <div className="text-[#FF6B00] text-4xl font-bold mb-2">R$ 600 BI</div>
                    <div className="text-zinc-300 font-medium mb-1">Volume de vendas</div>
                    <div className="text-zinc-500 text-sm">do setor de supermercados (2024)</div>
                </div>
                <div className="bg-[#111] p-8 rounded-2xl border border-zinc-800 sm:col-span-2">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-[#FF6B00]/10 rounded-full">
                            <BadgePercent className="w-8 h-8 text-[#FF6B00]" />
                        </div>
                        <div>
                            <div className="text-white font-bold text-xl mb-1">TICKET MÉDIO</div>
                            <div className="text-zinc-400">Entre R$ 15 e R$ 35 por compra (alta recorrência)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
