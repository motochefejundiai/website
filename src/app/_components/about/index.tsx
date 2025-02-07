import Icon, { IconNames } from '@/components/ui/icon'
import { scooterBenefits } from '@/constants/scooters'
import Image from 'next/image'
import { memo } from 'react'

const BenefitItem = memo(function Item({
  icon,
  label,
  value
}: {
  icon: IconNames
  label: string
  value: string
}) {
  return (
    <li
      className="relative z-[2] text-white text-3xl flex flex-col items-center gap-3 text-center bg-[#4D4D4D] p-6 rounded-xl border border-primary shadow-lg transition-transform duration-300 hover:scale-105 focus-visible:scale-105"
      aria-label={`${label}: ${value}`}
    >
      <Icon
        name={icon}
        size={12}
        className="text-primary drop-shadow-[0_0_10px_rgba(219,180,44,0.8)]"
      />
      <span className="text-lg font-semibold">{label}</span>
      <span className="text-2xl font-normal">{value}</span>
    </li>
  )
})

function About() {
  return (
    <section id="sobre" className="relative bg-foreground px-10 py-16">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center">
        <span className="text-white text-center font-light text-3xl mb-4 tracking-wide">
          ECONOMIA COM ELETRICIDADE
        </span>
        <h1 className="text-7xl lg:text-8xl text-center text-primary mb-3 drop-shadow-[0_0_15px_rgba(219,180,44,0.9)]">
          Scooters Elétricas
        </h1>
        <h2 className="text-2xl lg:text-4xl text-white text-center max-w-3xl leading-snug">
          Mais autonomia, praticidade e garantia.
          <br />
          Descubra a scooter elétrica ideal para o seu dia a dia.
        </h2>
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10 w-full max-w-5xl"
          aria-label="Benefícios das scooters elétricas"
        >
          {scooterBenefits.map(({ icon, label, value }) => (
            <BenefitItem
              key={label}
              icon={icon as IconNames}
              label={label}
              value={value}
            />
          ))}
        </ul>
        <div className="flex justify-around items-end relative grid-cols-1 lg:grid-cols-2">
          <Image
            width={525}
            height={525}
            alt="Scooter Elétrica modelo x11"
            src="/about/grid.webp"
            className="-mb-36 z-[2] relative hidden lg:block"
            loading="lazy"
          />
          <Image
            width={400}
            height={400}
            alt="Scooter Elétrica modelo x11"
            src="/about/x11.png"
            className="-mb-28 z-[2] relative"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default About
