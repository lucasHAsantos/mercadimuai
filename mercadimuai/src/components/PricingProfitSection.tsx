import { ArrowRight } from 'lucide-react'

export const PricingProfitSection = () => (
    <section className="bg-[#050505] py-20 md:py-28 px-4">
        <div className="max-w-5xl mx-auto">
            <div className="mb-24">
                <div className="text-center mb-12">
                    <span className="inline-block bg-[#FF6300]/10 text-[#FF6300] text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                        Financeiro
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">Como funciona a precificação?</h2>
                </div>
                <p className="text-center text-zinc-400 text-lg max-w-3xl mx-auto mb-12">
                    O % de margem aplicada pode variar de item para item, mas em geral, os produtos são vendidos em média <strong className="text-zinc-200">50% acima do preço de mercado</strong> (valor dentro da referência de mercados autônomos pela comodidade).
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                    <div className="bg-[#1a1a1a] text-white p-8 w-full max-w-[256px] text-center rounded-xl border border-zinc-800">
                        <div className="text-3xl font-bold mb-2">R$ 11,00</div>
                        <div className="text-sm text-zinc-500">Supermercado</div>
                    </div>
                    <ArrowRight className="w-10 h-10 text-[#FF6300] hidden md:block rotate-0" />
                    <div className="text-[#FF6300] font-bold text-3xl md:hidden">↓</div>
                    <div className="bg-[#FF6300] text-white p-8 w-full max-w-[256px] text-center rounded-xl shadow-lg shadow-[#FF6300]/20 md:scale-110">
                        <div className="text-4xl font-bold mb-2">R$ 16,50</div>
                        <div className="text-sm text-white/90 font-bold">MercadimUai</div>
                    </div>
                </div>
                <p className="text-center text-sm text-zinc-500 mt-6 italic">* Exemplo: Coca Cola Pet 2L</p>
            </div>

            <div>
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">E quanto consigo ter de lucro?</h2>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12">
                    <div className="bg-[#FF6300] text-white w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center text-center p-2 rounded-lg">
                        <span className="text-2xl md:text-3xl font-bold">61%</span>
                        <span className="text-[10px] md:text-xs font-bold leading-tight mt-1">MERCADORIA</span>
                    </div>
                    <span className="hidden md:block text-2xl font-bold text-zinc-600">+</span>

                    <div className="bg-[#1a1a1a] border border-zinc-800 text-white w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center text-center p-2 rounded-lg">
                        <span className="text-2xl md:text-3xl font-bold">5%</span>
                        <span className="text-[10px] md:text-xs font-bold leading-tight mt-1 text-zinc-400">CUSTOS OPERACIONAIS</span>
                    </div>
                    <span className="hidden md:block text-2xl font-bold text-zinc-600">+</span>

                    <div className="bg-[#FF6300] text-white w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center text-center p-2 rounded-lg">
                        <span className="text-2xl md:text-3xl font-bold">4%</span>
                        <span className="text-[10px] md:text-xs font-bold leading-tight mt-1">IMPOSTOS</span>
                    </div>
                    <span className="hidden md:block text-2xl font-bold text-zinc-600">+</span>

                    <div className="bg-[#1a1a1a] border border-zinc-800 text-white w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center text-center p-2 rounded-lg">
                        <span className="text-2xl md:text-3xl font-bold">4%</span>
                        <span className="text-[10px] md:text-xs font-bold leading-tight mt-1 text-zinc-400">ROYALTIES</span>
                    </div>
                    <span className="hidden md:block text-2xl font-bold text-zinc-600">+</span>

                    <div className="bg-[#FF6300] text-white w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center text-center p-2 rounded-lg">
                        <span className="text-2xl md:text-3xl font-bold">3%</span>
                        <span className="text-[10px] md:text-xs font-bold leading-tight mt-1">PAGAMENTO ONLINE</span>
                    </div>
                    <span className="hidden md:block text-2xl font-bold text-zinc-600">+</span>

                    <div className="bg-[#1a1a1a] border border-zinc-800 text-white w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center text-center p-2 rounded-lg">
                        <span className="text-2xl md:text-3xl font-bold">3%</span>
                        <span className="text-[10px] md:text-xs font-bold leading-tight mt-1 text-zinc-400">CASHBACK COND.</span>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="text-4xl text-[#FF6300] font-bold mb-4">=</div>
                    <div className="border-4 border-[#FF6300] bg-[#1a1a1a] text-white px-8 py-6 rounded-xl text-center shadow-xl shadow-[#FF6300]/10">
                        <span className="text-4xl md:text-5xl font-black text-[#FF6300]">20%</span>
                        <span className="text-2xl md:text-3xl font-bold ml-2">LUCRO LÍQUIDO</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
