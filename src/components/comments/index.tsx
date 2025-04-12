import { IResponse } from '@/interfaces/IResponse'
import { getByParams } from '@/services/get-by-params'
import { useQuery } from '@tanstack/react-query'
import { Heart } from 'lucide-react'

export default function Comments() {
  const { data: comments } = useQuery<IResponse>({
    queryKey: ['comments'],
    queryFn: () => getByParams('comments?limit=10') as Promise<IResponse>,
  })

  return (
    <div className="relative w-full ">
      <div className="pointer-events-none absolute left-0 top-0 h-full z-10 w-44 bg-gradient-to-r from-white via-white/75 to-transparent" />

      <div className="pointer-events-none absolute right-0 top-0 h-full z-10 w-44 bg-gradient-to-l from-white via-white/75 to-transparent" />

      <div className="overflow-x-auto w-full">
        <div className="flex gap-4 px-4 py-6 min-w-max">
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
    </div>
  )
}
