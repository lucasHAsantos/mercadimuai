import type { ModalType } from './ContactModal'

interface Props {
    onOpenModal: (type: ModalType) => void
}

export const SiteLinksSection = ({ onOpenModal }: Props) => (
    <section className="bg-[#111] py-14 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-5">
            <button
                onClick={() => onOpenModal('licenciado')}
                className="flex-1 bg-[#2ecc40] hover:bg-[#27ae34] transition-colors text-white text-center font-bold text-lg px-10 py-4 rounded-lg shadow-lg shadow-green-500/20"
            >
                Quero ser um licenciado
            </button>
            <button
                onClick={() => onOpenModal('condominio')}
                className="flex-1 bg-[#FF6300] hover:bg-[#e05800] transition-colors text-white text-center font-bold text-lg px-10 py-4 rounded-lg shadow-lg shadow-[#FF6300]/20"
            >
                Quero no meu condomínio ou empresa
            </button>
        </div>
    </section>
)
