import { IResponse } from '@/interfaces/IResponse'
import { getByParams } from '@/services/get-by-params'
import { useQuery } from '@tanstack/react-query'
import { Heart, MoveLeft, MoveRight } from 'lucide-react'
import { useRef } from 'react'

export default function Comments() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const { data: comments } = useQuery<IResponse>({
    queryKey: ['comments'],
    queryFn: () => getByParams('comments?limit=10') as Promise<IResponse>,
  })

  return (
    <>
      <div className="flex justify-between items-center px-4 container mx-auto">
        <h1 className=" whitespace-nowraptext-[20px] md:text-5xl font-integral-bold">
          OUR HAPPY CUSTOMERS
        </h1>
        <span className="flex">
          <button
            className="p-2 transition-all duration-500 cursor-pointer hover:bg-gray-200 rounded-full"
            onClick={() => {
              if (scrollRef.current)
                scrollRef.current.scrollTo({
                  left: scrollRef.current.scrollLeft - 330, // rolando para a esquerda
                  behavior: 'smooth',
                })
            }}
          >
            <MoveLeft className="hover:scale-110 transition-all" />
          </button>

          <button
            className="p-2 transition-all duration-500 cursor-pointer hover:bg-gray-200 rounded-full"
            onClick={() => {
              if (scrollRef.current)
                scrollRef.current.scrollTo({
                  left: scrollRef.current.scrollLeft + 330, // rolando para a direita
                  behavior: 'smooth',
                })
            }}
          >
            <MoveRight className="hover:scale-110 transition-all" />
          </button>
        </span>
      </div>

      <div className="relative w-full ">
        {/* Gradiente à esquerda */}
        <div className="pointer-events-none absolute left-0 top-0 h-full z-20 w-8 md:w-44 bg-gradient-to-r from-white via-white/75 to-transparent" />
        {/* Gradiente à direita */}
        <div className="pointer-events-none absolute right-0 top-0 h-full z-20 w-8 md:w-44 bg-gradient-to-l from-white via-white/75 to-transparent" />

        {/* <div className="pointer-events-none absolute left-0 top-0 h-full z-10 w-8 md:84 bg-gradient-to-r from-white via-white/75 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full z-10 w-8 md:w-44 bg-gradient-to-l from-white via-white/75 to-transparent" /> */}

        <div
          className="flex gap-4 px-4 py-6 max-w-screen overflow-x-auto"
          ref={scrollRef}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {comments?.comments.map(({ id, user, likes, body }) => (
            <div
              key={id}
              className="bg-white border border-neutral-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-2xl p-4 w-[320px] flex-shrink-0 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 rounded-full border border-gray-200"
                  src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                  alt={`${user.fullName} profile`}
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {user.fullName}
                  </h3>
                  <p className="text-xs text-gray-500">@{user.username}</p>
                </div>
              </div>

              <p className="text-sm text-gray-700 line-clamp-4">{body}</p>

              <div className="flex justify-end items-center text-sm text-gray-600 mt-auto gap-1">
                <span className="font-medium">{likes}</span>
                <Heart size={16} className="text-red-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
