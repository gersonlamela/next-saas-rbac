import Header from '@/components/header'
import { Tabs } from '@/components/tabs'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4">
      <div className="py-6">
        <Header />
        <Tabs />
      </div>

      <main className="mx-auto w-full max-w-[1200px] ">{children}</main>
    </div>
  )
}
