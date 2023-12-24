import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowDownToLine } from 'lucide-react'
import Link from 'next/link'

const perks = [
  {
    name: 'Instant Delivery',
    Icon: ArrowDownToLine,
    description: ''
  }
]

export default function Home() {
  return (
    <>
    <MaxWidthWrapper className=''>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>Your marketplace for high-quality{' '}<span className='text-red-600'>digital assets</span>.</h1>

        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>Welcome to Barik&apos;s Marketplace, your one-stop destination for high-quality digital assets. Whether you&apos;re looking for unique graphics, stunning templates, or innovative software solutions, we&apos;ve got you covered. Our marketplace is dedicated to providing you with the best digital assets from talented creators around the world. Start exploring now and elevate your digital projects to the next level.</p>

        <div className='flex flex-col sm:flex-row gap-4 mt-6'>
          <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
          <Button variant='ghost'>Our quality promise &rarr;</Button>
        </div>
      </div>

      {/* TODO: display list product */}
    </MaxWidthWrapper>

    <section className='border-t border-gray-200 bg-gray-50'>
      <MaxWidthWrapper className='py-20'>
        <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>

        </div>
      </MaxWidthWrapper>
    </section>
    </>
  )
}
