import BreadcrumbPagination from '@/components/breadcrumb'
import Container from '@/components/container'

import { Outlet } from 'react-router'

export default function Shop() {
  return (
    <Container classname="flex flex-col gap-4 p-4 overflow-hidden">
      <BreadcrumbPagination />
      <Outlet />
    </Container>
  )
}
