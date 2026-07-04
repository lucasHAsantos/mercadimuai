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
            clipPath: 'inset(0 0 22px 0)',
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

    </section>
)
