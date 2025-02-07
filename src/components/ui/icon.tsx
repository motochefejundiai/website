import { LucideProps, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { icons } from 'lucide-react'

export type IconNames = keyof typeof icons

interface Props extends LucideProps {
  name: IconNames
  size: number
}

const Icon = ({ name, className, size = 3.5, ...props }: Props) => {
  const LucideIcon = icons[name] || X

  return <LucideIcon className={cn(`w-${size} h-${size}`, className)} {...props} />
}

export default Icon
