import { BadgePercent, Store } from 'lucide-react'
import type { ModalType } from './ContactModal'

interface Props {
    onOpenModal: (type: ModalType) => void
}

export const MarketDataSection = ({ onOpenModal }: Props) => (
    <section className="bg-[#0a0a0a] text-white py-20 md:py-28 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center mb-16">
            <div className="lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Um mercado em<br /><span className="text-[#FF6300]">grande expansão</span></h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                    Os minimercados autônomos consolidam-se como uma oportunidade de alto potencial, unindo conveniência, inovação e operação sem equipe física. Com baixos custos e margens atrativas, o setor já soma mais de 12 mil unidades no Brasil, movimentando entre R$ 1.5 e 2 bilhões anualmente, e apresentando crescimento de até 42% ao ano.
                </p>
            </div>

            <div className="lg:w-1/2 grid grid-cols-1 gap-6 w-full">
                <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-zinc-800 hover:border-[#FF6300]/30 transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-[#FF6300]/10 rounded-full">
                            <Store className="w-8 h-8 text-[#FF6300]" />
                        </div>
                        <div>
                            <div className="text-[#FF6300] text-4xl font-bold mb-1">+12 mil</div>
                            <div className="text-zinc-300 font-medium mb-1">Mercados autônomos</div>
                            <div className="text-zinc-500 text-sm">atualmente instalados no país</div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#1a1a1a] p-8 rounded-2xl border border-zinc-800 hover:border-[#FF6300]/30 transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-[#FF6300]/10 rounded-full">
                            <BadgePercent className="w-8 h-8 text-[#FF6300]" />
                        </div>
                        <div>
                            <div className="text-white font-bold text-xl mb-1">TICKET MÉDIO</div>
                            <div className="text-zinc-400">Entre R$ 15 e R$ 35 por compra (alta recorrência)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* CTA button */}
        <div className="px-4 sm:px-0 flex justify-center">
            <button
                onClick={() => onOpenModal('licenciado')}
                className="block w-full sm:w-auto text-center bg-[#2ecc40] hover:bg-[#27ae34] transition-colors text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg shadow-green-500/20"
            >
                Quero ser um licenciado
            </button>
        </div>
    </section>
)
