import { BlurFade } from './ui/magic-ui/blur-fade'

interface iTitle {
  className?: string
  children: string
}

export default function Title({ className, children }: iTitle) {
  return (
    <BlurFade
      className={`text-[32px] md:text-5xl font-integral-bold ${className}`}
      delay={0.25}
      inView
    >
      <h1>{children}</h1>
    </BlurFade>
  )
}
