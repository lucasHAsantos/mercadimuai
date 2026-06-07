const advantages = [
    { title: 'Zero Custo Adicional', desc: 'Montagem gratuita, sem taxa de instalação e sem mensalidades. Todos os custos operacionais ficam por conta do franqueado. O consumidor paga apenas pelo que consumir.' },
    { title: 'Cashback', desc: 'Ao atingir um volume mínimo de vendas mensais, o condomínio ou empresa recebe cashback. O valor é depositado diretamente na conta do local.' },
    { title: 'Qualidade de Vida', desc: 'Mais praticidade e comodidade no dia a dia. Faltou um ingrediente? Acabou a cerveja? Em menos de 5 minutos, o problema está resolvido.' },
    { title: 'Valorização', desc: 'Um mercadinho interno bem estruturado é um grande diferencial. Ele aumenta a percepção de qualidade e modernidade da sua empresa ou condomínio.' },
    { title: 'Conveniência 24/7', desc: 'O minimercado opera 24 horas por dia, 7 dias por semana, sem filas, oferecendo total comodidade com um sistema de autoatendimento simples.' },
    { title: 'Limpeza', desc: 'Limpeza e manutenção totalmente inclusas. Sem dores de cabeça para o síndico, moradores ou funcionários da empresa. Você só tem que aproveitar!' },
]

const CheckIcon = () => (
    <div
        className="w-10 h-10 rounded-full border-2 border-[#FF6300] flex items-center justify-center mb-5 shrink-0"
        style={{ background: 'rgba(255,99,0,0.08)' }}
    >
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
            <path d="M1 6.5L5.5 11.5L15 1" stroke="#FF6300" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    </div>
)

export const AdvantagesSection = () => (
    <section id="vantagens" className="bg-[#1a1a1a] py-20 md:py-28 px-4">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                Vantagens para o <span className="text-[#FF6300]">condomínio</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((item, i) => (
                    <div key={i} className="bg-[#252525] p-8 rounded-2xl border border-zinc-700 hover:border-[#FF6300]/50 transition-all">
                        <CheckIcon />
                        <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
)
