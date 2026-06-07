import { Building2, ClipboardList, FileCheck, Wrench, Rocket } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Step = {
    num: string
    title: string
    desc: string
    Icon: LucideIcon
}

const steps: Step[] = [
    { num: '01', title: 'Visita ao condomínio ou empresa', desc: 'Nossa equipe visita o local para entender o espaço e as necessidades do cliente.', Icon: Building2 },
    { num: '02', title: 'Elaboração do projeto e envio da proposta', desc: 'Desenvolvemos um projeto 100% personalizado e enviamos a proposta comercial.', Icon: ClipboardList },
    { num: '03', title: 'Aprovação da proposta', desc: 'Cliente aprova e assinamos o contrato entre o licenciado, MercadimUai e o cliente.', Icon: FileCheck },
    { num: '04', title: 'Instalação da estrutura', desc: 'Montagem completa do mercado no espaço definido, sem custo para o condomínio.', Icon: Wrench },
    { num: '05', title: 'Inauguração da loja', desc: 'Seu mercado autônomo entra em operação 24h, abastecido e pronto para vender.', Icon: Rocket },
]

export const StepsSection = () => (
    <section id="como-funciona" className="bg-[#0a0a0a] pt-20 md:pt-28 pb-10 px-4">
        <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 uppercase leading-tight">
                5 passos para implantar<br />
                <span className="text-[#FF6300]">seu ponto de venda</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {steps.map((step, i) => {
                    const { Icon } = step
                    const isLast = i === 4

                    if (isLast) {
                        return (
                            <div
                                key={i}
                                className="md:col-span-2 relative bg-[#FF6300] rounded-2xl p-8 md:p-10 overflow-hidden"
                            >
                                {/* Decorative circles */}
                                <div className="absolute -right-10 -bottom-10 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
                                <div className="absolute -right-4 -bottom-4 w-36 h-36 rounded-full bg-white/5 pointer-events-none" />

                                {/* Watermark */}
                                <span className="absolute top-4 right-6 text-8xl md:text-9xl font-black text-white/10 leading-none select-none pointer-events-none">
                                    {step.num}
                                </span>

                                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                                        <Icon size={32} className="text-white" />
                                    </div>

                                    <div>
                                        <span className="text-white/70 text-xs font-bold tracking-widest uppercase">
                                            Passo {step.num}
                                        </span>
                                        <h3 className="text-white font-bold text-2xl md:text-3xl mt-1.5 mb-2 leading-snug">
                                            {step.title}
                                        </h3>
                                        <p className="text-white/80 text-base leading-relaxed max-w-2xl">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                    return (
                        <div
                            key={i}
                            className="relative bg-[#1a1a1a] border border-zinc-800 hover:border-[#FF6300]/50 transition-all duration-300 rounded-2xl p-7 overflow-hidden group hover:-translate-y-1"
                        >
                            {/* Watermark */}
                            <span className="absolute top-3 right-5 text-7xl font-black text-zinc-800 leading-none select-none pointer-events-none group-hover:text-[#FF6300]/10 transition-colors duration-300">
                                {step.num}
                            </span>

                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-[#FF6300]/10 flex items-center justify-center mb-5 relative z-10 group-hover:bg-[#FF6300]/20 transition-colors duration-300">
                                <Icon size={22} className="text-[#FF6300]" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <span className="text-[#FF6300] text-xs font-bold tracking-widest uppercase">
                                    Passo {step.num}
                                </span>
                                <h3 className="text-white font-bold text-lg mt-1.5 mb-2 leading-snug">
                                    {step.title}
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
)
