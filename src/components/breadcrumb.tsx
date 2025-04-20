import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/shadcn/breadcrumb'
import { Link, useLocation } from 'react-router'

export default function BreadcrumbPagination() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter(Boolean)
  const visibleSegments = pathnames.filter((seg) => isNaN(Number(seg)))

  function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  }

  return (
    <Breadcrumb className="w-full text-sm text-zinc-600">
      <BreadcrumbList className="flex gap-1 items-center flex-wrap">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link
              to="/"
              className="hover:underline hover:text-zinc-800 transition"
            >
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {visibleSegments.map((segment, index) => {
          const pathTo = `/${visibleSegments.slice(0, index + 1).join('/')}`
          const isLast = index === visibleSegments.length - 1

          return (
            <div key={pathTo} className="flex items-center gap-1">
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="font-medium text-zinc-900">
                    {capitalize(decodeURIComponent(segment))}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      to={pathTo}
                      className="hover:underline hover:text-zinc-800 transition"
                    >
                      {capitalize(decodeURIComponent(segment))}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </div>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
