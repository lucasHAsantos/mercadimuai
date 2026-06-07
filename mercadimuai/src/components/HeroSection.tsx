import type { ModalType } from './ContactModal'

interface Props {
    onOpenModal: (type: ModalType) => void
}

export const HeroSection = ({ onOpenModal }: Props) => (
    <section
        className="hero-section relative overflow-hidden md:min-h-screen"
        role="img"
        aria-label="MercadimUai — mercado autônomo 24h instalado em condomínios e empresas"
        style={{
            backgroundImage: "url('/images/hero-bg-1700.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
        }}
    >
        {/* Content — vertically centered, left half */}
        <div
            className="relative w-full max-w-[1440px] mx-auto flex items-start md:items-center pl-0 pr-4 sm:pr-8 lg:pr-8 pt-10 pb-10 sm:pt-24 lg:pt-[60px] md:min-h-screen"
        >
            <div className="hero-content w-full md:w-[62%] flex flex-col items-center md:items-start pt-4 pb-8 md:py-12">

                {/* Logo — mobile */}
                <div className="md:hidden overflow-hidden mb-2" style={{ height: '100px', width: '248px' }}>
                    <img
                        src="/images/logo.png"
                        alt="MercadimUai"
                        loading="eager"
                        style={{ width: '248px', marginTop: '-96px' }}
                    />
                </div>

                {/* Logo — desktop */}
                <div className="hidden md:block w-full mb-4">
                    <div className="overflow-hidden" style={{ height: '156px', width: '380px', marginLeft: '-20px' }}>
                        <img
                            src="/images/logo.png"
                            alt="MercadimUai"
                            loading="eager"
                            style={{ width: '380px', marginTop: '-146px' }}
                        />
                    </div>
                </div>

                {/* Badge */}
                <div className="bg-[#FF6300] text-black font-black px-6 py-4 text-xs md:text-sm tracking-[0.24em] mb-8 uppercase">
                    MERCADO AUTÔNOMO • 24H
                </div>

                {/* Headline */}
                <h1 className="text-white text-3xl md:text-4xl xl:text-[46px] font-light leading-snug md:leading-[1.1] mb-8 text-center md:text-left" style={{ maxWidth: '560px' }}>
                    Invista no seu futuro com um negócio
                    autônomo, inteligente e que fatura
                    <br />
                    <strong className="font-black text-[#FF6300]">24 horas por dia</strong>
                </h1>

                {/* Sub + CTAs */}
                <div className="bg-black/40 backdrop-blur-sm rounded-2xl px-4 py-3 md:py-5 w-full" style={{ maxWidth: '450px' }}>
                    <p className="text-zinc-300 text-sm md:text-lg mb-3 md:mb-5 text-center md:text-left">
                        Seu mercadim, seu lucro, do seu jeito.{' '}
                        <strong className="text-white font-bold">Uai!</strong>
                    </p>
                    <div className="flex flex-row gap-2">
                        <button
                            onClick={() => onOpenModal('licenciado')}
                            className="flex-1 bg-[#FF6300] hover:bg-[#e05800] text-white px-4 py-3 rounded font-bold text-xs uppercase tracking-wide shadow-md shadow-[#FF6300]/40 text-center transition-all"
                        >
                            Quero ser um licenciado
                        </button>
                        <button
                            onClick={() => onOpenModal('condominio')}
                            className="flex-1 border border-zinc-500 hover:border-zinc-300 hover:bg-white/5 text-white px-4 py-3 rounded font-bold text-xs uppercase tracking-wide text-center transition-all"
                        >
                            Quero no meu condomínio
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* WhatsApp fixed button */}
        <a
            href="https://wa.me/5531975426698"
            target="_blank" rel="noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] shadow-lg hover:bg-[#1ebe5a] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-transform hover:scale-110"
            style={{ boxShadow: '0 8px 24px rgba(37,211,102,0.4)' }}
            aria-label="WhatsApp"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8">
                <path fill="currentColor" d="M20.52 3.48A11.8 11.8 0 0 0 12.55 1c-6.29 0-11.29 5.1-11.29 11.4 0 2.02.53 3.93 1.53 5.64L1 23l5.2-1.36a11.32 11.32 0 0 0 6.35 1.84h.02c6.27 0 11.29-5.1 11.29-11.4 0-2.99-1.18-5.8-3.11-7.95Zm-7.96 16.43h-.01a9.92 9.92 0 0 1-5.05-1.38l-.36-.22-3.07.8.82-3.01-.24-.38a9.8 9.8 0 0 1-1.49-5.34c0-5.47 4.45-9.93 9.92-9.93 2.65 0 5.13 1.03 6.99 2.9 1.86 1.82 2.9 4.27 2.9 6.9 0 5.48-4.43 9.95-9.88 9.95Zm5.41-7.37c-.29-.15-1.7-.83-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.9 1.12-.16.19-.33.22-.62.08-.29-.15-1.22-.45-2.33-1.44-.86-.76-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.44-.5.14-.19.19-.33.29-.55.1-.22.05-.41-.02-.57-.08-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.29-1 1-1 2.43 0 1.42 1.03 2.79 1.17 2.98.15.19 2.02 3.08 4.9 4.32.68.29 1.21.46 1.62.58.68.19 1.3.16 1.79.1.55-.07 1.7-.69 1.94-1.37.24-.68.24-1.26.17-1.37-.07-.1-.26-.15-.55-.29Z" />
            </svg>
        </a>
    </section>
)
