import { useState } from 'react'

const estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG',
    'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
]

export const LeadFormSection = () => {
    const [formData, setFormData] = useState({ nome: '', email: '', telefone: '', estado: '', cidade: '' })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (typeof (window as any).gtag === 'function') {
            (window as any).gtag('event', 'generate_lead', { event_category: 'form', event_label: 'franqueado_whatsapp' })
        }
        const msg = `Olá! Tenho interesse em ser franqueado MercadimUai.%0ANome: ${formData.nome}%0AE-mail: ${formData.email}%0ATelefone: ${formData.telefone}%0AEstado: ${formData.estado}%0ACidade: ${formData.cidade}`
        window.open(`https://wa.me/5531975426698?text=${msg}`, '_blank')
    }

    return (
        <section id="contato" className="bg-white pt-10 pb-20 md:pt-14 md:pb-28 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Badge */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 border border-[#FF6300] text-[#FF6300] bg-[#FF6300]/5 text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-[#FF6300] animate-pulse" />
                        Cadastre-se e seja um franqueado!
                    </div>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 text-center mb-6 leading-tight">
                    Saiba tudo sobre o modelo de negócio mais promissor do mercado e{' '}
                    <span className="relative inline-block">
                        <span className="relative z-10 text-[#FF6300]">seja um franqueado!</span>
                        <span className="absolute bottom-1 left-0 right-0 h-2 bg-[#FF6300]/10 rounded -z-0" />
                    </span>
                </h2>

                {/* Trust signals */}
                <p className="text-zinc-500 text-center mb-10">
                    Preencha seus dados e receba nossa apresentação completa
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-zinc-700 text-sm font-medium mb-2">Nome Completo</label>
                        <input
                            type="text"
                            placeholder="Nome"
                            required
                            value={formData.nome}
                            onChange={e => setFormData({ ...formData, nome: e.target.value })}
                            className="w-full bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6300] transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-zinc-700 text-sm font-medium mb-2">E-mail</label>
                        <input
                            type="email"
                            placeholder="E-mail"
                            required
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6300] transition-colors"
                        />
                    </div>
                    <div>
                        <label className="block text-zinc-700 text-sm font-medium mb-2">Telefone com DDD</label>
                        <input
                            type="tel"
                            placeholder="Digite o telefone sem código de país e apenas os 2 dígitos do código de área, ex: 11988776655"
                            required
                            value={formData.telefone}
                            onChange={e => setFormData({ ...formData, telefone: e.target.value })}
                            className="w-full bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6300] transition-colors text-sm"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-zinc-700 text-sm font-medium mb-2">Estado</label>
                            <div className="relative">
                                <select
                                    value={formData.estado}
                                    onChange={e => setFormData({ ...formData, estado: e.target.value })}
                                    required
                                    className="w-full bg-white border border-zinc-300 text-zinc-900 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6300] transition-colors appearance-none"
                                >
                                    <option value="" disabled />
                                    {estados.map(uf => (
                                        <option key={uf} value={uf}>{uf}</option>
                                    ))}
                                </select>
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">▾</div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-zinc-700 text-sm font-medium mb-2">Cidade</label>
                            <input
                                type="text"
                                placeholder="Nome da sua cidade"
                                required
                                value={formData.cidade}
                                onChange={e => setFormData({ ...formData, cidade: e.target.value })}
                                className="w-full bg-white border border-zinc-300 text-zinc-900 placeholder-zinc-400 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6300] transition-colors"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#FF6300] hover:bg-[#e05800] transition-colors text-white font-bold text-lg py-4 rounded-lg flex items-center justify-center gap-3 shadow-lg shadow-[#FF6300]/20"
                    >
                        Enviar
                    </button>
                </form>
            </div>
        </section>
    )
}
