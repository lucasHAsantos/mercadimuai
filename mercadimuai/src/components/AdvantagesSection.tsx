import { CheckCircle2 } from 'lucide-react'

const advantages = [
    { title: 'Zero Custo Adicional', desc: 'Montagem gratuita, sem taxa de instalação e sem mensalidades. Todos os custos operacionais ficam por conta do franqueado. O consumidor paga apenas pelo que consumir.' },
    { title: 'Cashback', desc: 'Ao atingir um volume mínimo de vendas mensais, o condomínio ou empresa recebe cashback. O valor é depositado diretamente na conta do local.' },
    { title: 'Qualidade de Vida', desc: 'Mais praticidade e comodidade no dia a dia. Faltou um ingrediente? Acabou a cerveja? Em menos de 5 minutos, o problema está resolvido.' },
    { title: 'Valorização', desc: 'Um mercadinho interno bem estruturado é um grande diferencial. Ele aumenta a percepção de qualidade e modernidade da sua empresa ou condomínio.' },
    { title: 'Conveniência 24/7', desc: 'O minimercado opera 24 horas por dia, 7 dias por semana, sem filas, oferecendo total comodidade com um sistema de autoatendimento simples.' },
    { title: 'Limpeza', desc: 'Limpeza e manutenção totalmente inclusas. Sem dores de cabeça para o síndico, moradores ou funcionários da empresa. Você só tem que aproveitar!' },
]

export const AdvantagesSection = () => (
    <section className="bg-[#111] py-24 px-4 border-t border-b border-zinc-800">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
                Vantagens para o <span className="text-[#FF6B00]">condomínio</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {advantages.map((item, i) => (
                    <div key={i} className="bg-[#1a1a1a] p-8 rounded-2xl shadow-sm border border-zinc-800 hover:border-zinc-700 hover:shadow-lg transition-all">
                        <CheckCircle2 className="w-10 h-10 text-[#FF6B00] mb-6" />
                        <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                        <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
)
