export const RevenueSection = () => (
    <section className="bg-[#111] py-24 px-4 border-t border-b border-zinc-800">
        <div className="max-w-4xl mx-auto bg-[#1a1a1a] border border-zinc-800 p-10 md:p-16 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-bold mb-6 text-center text-white">Quanto vou faturar?</h2>
            <p className="text-zinc-400 text-center mb-10 text-lg">
                O faturamento de cada loja está relacionado com alguns aspectos, como quantidade de unidades no condomínio, oferta de comércios próximos, e perfil dos moradores. No geral, estima-se um faturamento mensal de <strong className="text-zinc-200">R$ 120,00 por unidade habitacional</strong>.
            </p>

            <div className="bg-[#111] border border-zinc-800 rounded-2xl p-8">
                <p className="text-center font-bold text-zinc-500 mb-6">Considerando um exemplo de uma loja em condomínio de 100 unidades:</p>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center">
                        <div className="text-3xl font-black text-white">R$ 12.000,00</div>
                        <div className="text-sm text-zinc-500 font-bold uppercase mt-1">Faturamento Bruto</div>
                    </div>
                    <div className="text-2xl font-bold text-[#FF6B00] bg-[#FF6B00]/10 px-4 py-2 rounded-lg">x 20%</div>
                    <div className="text-center">
                        <div className="text-3xl font-black text-green-500">R$ 2.400,00</div>
                        <div className="text-sm text-zinc-500 font-bold uppercase mt-1">Lucro Líquido / mês</div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
                    <p className="text-lg font-medium text-zinc-300">
                        Rendimento aproximado de <strong className="text-[#FF6B00] text-xl">6,85% a.m</strong> sob o investimento inicial.
                        <br />
                        <span className="text-sm text-zinc-500">(Equivalente a 552% do CDI atual)</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
)
