import type { ModalType } from './ContactModal'

interface Props {
    onOpenModal: (type: ModalType) => void
}

export const LicensingSection = ({ onOpenModal }: Props) => (
    <section id="investimento" className="bg-white py-20 md:py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-3">
                Investimento <span className="text-[#FF6300]">acessível</span> para quem quer empreender
            </h2>
            <p className="text-zinc-500 text-lg mb-12">
                Faça parte de um modelo de negócio que <strong className="text-zinc-700">não para de crescer</strong>
            </p>

            {/* Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 max-w-xl mx-auto">
                <div className="border-2 border-[#FF6300] rounded-xl p-6 text-left">
                    <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-[#FF6300] flex items-center justify-center mt-0.5 shrink-0">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FF6300]" />
                        </div>
                        <div>
                            <p className="font-bold text-zinc-800 text-sm leading-tight mb-1">Royalties</p>
                            <p className="text-[#FF6300] text-2xl font-black">4%</p>
                            <p className="text-zinc-400 text-xs mt-1">Sobre o faturamento</p>
                        </div>
                    </div>
                </div>
                <div className="border-2 border-[#FF6300] rounded-xl p-6 text-left">
                    <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-[#FF6300] flex items-center justify-center mt-0.5 shrink-0">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#FF6300]" />
                        </div>
                        <div>
                            <p className="font-bold text-zinc-800 text-sm leading-tight mb-1">Taxa única de licenciamento</p>
                            <p className="text-[#FF6300] text-2xl font-black">R$ 15 mil</p>
                            <p className="text-zinc-400 text-xs mt-1">+R$ 5 mil por loja adicional</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <button
                onClick={() => onOpenModal('licenciado')}
                className="block w-full sm:inline-block sm:w-auto bg-[#2ecc40] hover:bg-[#27ae34] transition-colors text-white px-10 py-4 rounded-lg font-bold text-lg mb-12 shadow-lg shadow-green-500/20"
            >
                Quero ser um licenciado
            </button>

            {/* Bullet points */}
            <div className="flex flex-col sm:flex-row gap-8 text-left max-w-2xl mx-auto">
                <div className="flex gap-3">
                    <span className="text-[#FF6300] text-xl font-bold shrink-0">›</span>
                    <p className="text-zinc-700">
                        Aproximadamente <strong>8 horas de trabalho semanais</strong> com logística, facilitando a operação de cada unidade.
                    </p>
                </div>
            </div>
        </div>
    </section>
)
