import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex-1 flex flex-col'>

      {children}
    </div>
  )
}

export default Layout
