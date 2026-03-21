import { FileText, Users, Handshake, Store, Package, MonitorPlay } from 'lucide-react'

const steps = [
    { icon: FileText, title: '1. Assinatura do Contrato', desc: 'Assinatura do contrato de licença de uso da marca + sistema.' },
    { icon: Users, title: '2. Prospecção de Clientes', desc: 'Prospecção de condomínios + de 80 apartamentos ou empresas + de 100 colaboradores.' },
    { icon: Handshake, title: '3. Fechamento com Cliente', desc: 'Assinatura do contrato entre o licenciado, MercadimUai e o cliente.' },
    { icon: Store, title: '4. Implantação do Mercado', desc: 'Elaboração de projeto 100% personalizado para o espaço do cliente.' },
    { icon: Package, title: '5. Compra e Abastecimento', desc: 'Oferta de produtos de qualidade com reposição em um prazo adequado.' },
    { icon: MonitorPlay, title: '6. Monitoramento Constante', desc: 'Observação das vendas e melhoria contínua do mix de produtos.' },
]

export const StepsSection = () => (
    <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Principais etapas do franqueado</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {steps.map((step, i) => {
                    const IconComponent = step.icon
                    return (
                        <div key={i} className="flex gap-4 p-6 border border-zinc-800 rounded-2xl bg-[#111] hover:bg-[#1a1a1a] hover:border-zinc-700 transition-all">
                            <div className="shrink-0">
                                <div className="w-14 h-14 bg-[#FF6B00] text-white rounded-xl flex items-center justify-center">
                                    <IconComponent className="w-7 h-7" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2 text-white">{step.title}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
)
