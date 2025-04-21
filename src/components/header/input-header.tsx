import { Search } from 'lucide-react'
import { Input } from '../ui/shadcn/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/shadcn/form'
import { useNavigate } from 'react-router'
import { Button } from '../ui/shadcn/button'

const formSchema = z.object({
  search: z
    .string()
    .min(2, {
      message: 'Search must be at least 2 characters long.',
    })
    .max(30, {
      message: 'Search must be at most 30 characters long.',
    })
    .trim()
    .regex(/^[a-zA-Z0-9À-ÿ\s\-_,.?!]+$/, {
      message: 'Search contains invalid characters.',
    }),
})

type FormData = z.infer<typeof formSchema>

export default function InputHeader() {
  const navigate = useNavigate()
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      search: '',
    },
  })
  const searchValue = form.watch('search')

  function onSubmit(data: FormData) {
    navigate(`/shop?search=${data.search}`)
  }

  return (
    <Form {...form}>
      <form
        className="flex-grow max-w-sm "
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="search"
          render={({ field }) => (
            <FormItem className="w-full relative space-y-0">
              <FormControl>
                <Input
                  placeholder="Buscar produtos..."
                  icon={Search}
                  {...field}
                  className="rounded-full bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-white placeholder:text-zinc-500"
                />
              </FormControl>
              {searchValue && (
                <Button
                  type="reset"
                  variant={'link'}
                  className="absolute top-0 right-0"
                  onClick={() => form.setValue('search', '')}
                >
                  Clear
                </Button>
              )}
              <FormMessage className="absolute" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
