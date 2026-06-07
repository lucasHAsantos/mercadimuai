import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

// Crie suas forms em formspree.io e cole os IDs abaixo
const FORMSPREE_LICENCIADO_ID = import.meta.env.VITE_FORMSPREE_LICENCIADO_ID as string
const FORMSPREE_CONDOMINIO_ID = import.meta.env.VITE_FORMSPREE_CONDOMINIO_ID as string

const estados = [
    'AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG',
    'PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'
]

export type ModalType = 'licenciado' | 'condominio'

interface Props {
    type: ModalType
    onClose: () => void
}

const inputClass = 'w-full bg-[#0d0d0d] border border-zinc-700 text-white placeholder-zinc-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6300] transition-colors'
const labelClass = 'block text-white text-sm font-medium mb-1.5'

export const ContactModal = ({ type, onClose }: Props) => {
    const isLicenciado = type === 'licenciado'
    const formId = isLicenciado ? FORMSPREE_LICENCIADO_ID : FORMSPREE_CONDOMINIO_ID

    const [form, setForm] = useState({
        nome: '', email: '', telefone: '',
        estado: '', cidade: '', mensagem: '',
        condominio: '', unidades: '',
    })
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const set = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
        setForm(prev => ({ ...prev, [field]: e.target.value }))

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = '' }
    }, [])

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [onClose])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        const payload = isLicenciado
            ? { tipo: 'Licenciado', nome: form.nome, email: form.email, telefone: form.telefone, estado: form.estado, cidade: form.cidade, mensagem: form.mensagem }
            : { tipo: 'Condomínio', nome: form.nome, email: form.email, telefone: form.telefone, condominio: form.condominio, cidade: form.cidade, unidades: form.unidades }

        try {
            const res = await fetch(`https://formspree.io/f/${formId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(payload),
            })
            if (res.ok && typeof (window as any).gtag === 'function') {
                (window as any).gtag('event', 'generate_lead', {
                    event_category: 'form',
                    event_label: isLicenciado ? 'licenciado_modal' : 'condominio_modal',
                })
            }
            setStatus(res.ok ? 'success' : 'error')
        } catch {
            setStatus('error')
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/75 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-[#141414] border border-zinc-800 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl shadow-black/60">
                {/* Header */}
                <div className="sticky top-0 bg-[#141414] flex items-start justify-between p-4 sm:p-6 border-b border-zinc-800 z-10">
                    <div>
                        <h2 className="text-xl font-bold text-white leading-tight">
                            {isLicenciado ? 'Quero ser um licenciado' : 'Quero o MercadimUai no meu condomínio'}
                        </h2>
                        <p className="text-zinc-400 text-sm mt-1">
                            {isLicenciado
                                ? 'Preencha seus dados e entraremos em contato.'
                                : 'Conte sobre seu condomínio e nossa equipe entrará em contato.'}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-zinc-500 hover:text-white transition-colors p-1 ml-4 shrink-0 rounded-lg hover:bg-zinc-800"
                        aria-label="Fechar"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-4 sm:p-6">
                    {status === 'success' ? (
                        <div className="text-center py-10">
                            <div className="w-16 h-16 bg-[#FF6300]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-[#FF6300]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Recebemos seu contato!</h3>
                            <p className="text-zinc-400 text-sm">
                                Em breve nossa equipe entrará em contato com você.
                            </p>
                            <button
                                onClick={onClose}
                                className="mt-6 bg-[#FF6300] hover:bg-[#e05800] text-white font-bold px-8 py-3 rounded-lg transition-colors"
                            >
                                Fechar
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className={labelClass}>Nome Completo</label>
                                <input type="text" required placeholder="Seu nome completo" value={form.nome} onChange={set('nome')} className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>E-mail</label>
                                <input type="email" required placeholder="seu@email.com" value={form.email} onChange={set('email')} className={inputClass} />
                            </div>
                            <div>
                                <label className={labelClass}>Telefone com DDD</label>
                                <input type="tel" required placeholder="11988776655" value={form.telefone} onChange={set('telefone')} className={inputClass} />
                            </div>

                            {isLicenciado ? (
                                <>
                                    <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-3">
                                        <div>
                                            <label className={labelClass}>Estado</label>
                                            <div className="relative">
                                                <select required value={form.estado} onChange={set('estado')}
                                                    className="w-full bg-[#0d0d0d] border border-zinc-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6300] transition-colors appearance-none">
                                                    <option value="" disabled />
                                                    {estados.map(uf => <option key={uf} value={uf}>{uf}</option>)}
                                                </select>
                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">▾</div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className={labelClass}>Cidade</label>
                                            <input type="text" required placeholder="Sua cidade" value={form.cidade} onChange={set('cidade')} className={inputClass} />
                                        </div>
                                    </div>
                                    <div>
                                        <label className={labelClass}>Mensagem <span className="text-zinc-500 font-normal">(opcional)</span></label>
                                        <textarea
                                            placeholder="Dúvidas, expectativas ou contexto sobre você..."
                                            value={form.mensagem}
                                            onChange={set('mensagem')}
                                            rows={3}
                                            className="w-full bg-[#0d0d0d] border border-zinc-700 text-white placeholder-zinc-600 rounded-lg px-4 py-3 focus:outline-none focus:border-[#FF6300] transition-colors resize-none"
                                        />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <label className={labelClass}>Nome do Condomínio</label>
                                        <input type="text" required placeholder="Ex: Residencial das Flores" value={form.condominio} onChange={set('condominio')} className={inputClass} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>Cidade</label>
                                        <input type="text" required placeholder="Cidade do condomínio" value={form.cidade} onChange={set('cidade')} className={inputClass} />
                                    </div>
                                    <div>
                                        <label className={labelClass}>
                                            Nº aproximado de unidades <span className="text-zinc-500 font-normal">(opcional)</span>
                                        </label>
                                        <input type="number" min="1" placeholder="Ex: 120" value={form.unidades} onChange={set('unidades')} className={inputClass} />
                                    </div>
                                </>
                            )}

                            {status === 'error' && (
                                <p className="text-red-400 text-sm text-center bg-red-500/10 rounded-lg py-3 px-4">
                                    Ocorreu um erro ao enviar. Tente novamente ou fale pelo WhatsApp.
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="w-full bg-[#FF6300] hover:bg-[#e05800] disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-white font-bold text-lg py-4 rounded-lg shadow-lg shadow-[#FF6300]/20 mt-2"
                            >
                                {status === 'sending' ? 'Enviando...' : 'Enviar'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}
