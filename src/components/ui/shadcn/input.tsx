import * as React from 'react'
import { cn } from '@/lib/utils'

// Envolva seu componente com forwardRef para aceitar a ref
const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & { icon?: React.ElementType }
>(({ className, type, icon: Icon, ...props }, ref) => {
  return (
    <div className="relative flex items-center w-full">
      {Icon && (
        <Icon className="absolute left-3 text-muted-foreground w-5 h-5" />
      )}
      {/* Ícone opcional */}
      <input
        ref={ref} // Passando a ref para o input
        type={type}
        data-slot="input"
        className={cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          Icon ? 'pl-10' : '', // Adiciona padding-left se houver um ícone
          className,
        )}
        {...props}
      />
    </div>
  )
})

Input.displayName = 'Input' // Importante para facilitar a identificação no React DevTools
export { Input }

// import * as React from 'react'
// import { cn } from '@/lib/utils'

// function Input({
//   className,
//   type,
//   icon: Icon,
//   ...props
// }: React.ComponentProps<'input'> & { icon?: React.ElementType }) {
//   return (
//     <div className="relative flex items-center w-full">
//       {Icon && (
//         <Icon className="absolute left-3 text-muted-foreground w-5 h-5" />
//       )}{' '}
//       {/* Ícone opcional */}
//       <input
//         type={type}
//         data-slot="input"
//         className={cn(
//           'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
//           'focus-visible:outline-none focus-visible:ring-0 focus-visible:border-none',
//           'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
//           Icon ? 'pl-10' : '', // Adiciona padding-left se houver um ícone
//           className,
//         )}
//         {...props}
//       />
//     </div>
//   )
// }

// export { Input }
