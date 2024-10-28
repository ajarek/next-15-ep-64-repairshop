import Header from '@/components/Header'

export default async function RSLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex  flex-col items-center justify-center  max-w-7xl mx-auto'>
      <Header />
      <div className='px-4 py-2'>{children}</div>
    </div>
  )
}
