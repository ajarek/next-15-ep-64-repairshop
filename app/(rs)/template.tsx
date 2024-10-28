export default async function Template({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-[calc(100vh-64px)] flex-col items-center justify-center  max-w-7xl mx-auto'>
     {children}
    </div>
  )
}