import { whatsapp } from '@/constants/links'
import Image from 'next/image'
import Link from 'next/link'

const WhatsApp = () => (
  <div className="fixed bottom-6 right-6 z-50 animate-in animate-out">
    <Link href={whatsapp.main} target="_blank">
      <div className="bg-[#25D366] p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Image
          width={40}
          height={40}
          src="/logos/whatsapp.png"
          alt="Fale no WhatsApp"
          className="transition-transform transform hover:scale-110"
        />
      </div>
    </Link>
  </div>
)

export default WhatsApp
