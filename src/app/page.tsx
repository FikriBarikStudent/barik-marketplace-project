import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Image from 'next/image'

export default function Home() {
  return (
    <MaxWidthWrapper className=''>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold tracking-tight  text-gray-900 sm:text-6xl'>Your marketplace for high-quality{' '}<span className='text-red-600'>digital assets</span>.</h1>

        <p className='mt-6 text-lg max-w-prose text-muted-foreground'>Welcome to Barik&apos;s Marketplace, your one-stop destination for high-quality digital assets. Whether you&apos;re looking for unique graphics, stunning templates, or innovative software solutions, we&apos;ve got you covered. Our marketplace is dedicated to providing you with the best digital assets from talented creators around the world. Start exploring now and elevate your digital projects to the next level.</p>
      </div>
    </MaxWidthWrapper>
  )
}
