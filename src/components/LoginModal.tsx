import type { Dispatch, SetStateAction } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import Image from 'next/image'
import { Button, buttonVariants } from './ui/button'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'
import { SignInGoogle } from './auth/sign-in-goole'

const LoginModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {

  const router = useRouter()
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className='absolute z-[9999999]'>
        <DialogHeader>
          <div className='relative mx-auto w-24 h-24 mb-2'>
            <Image
              src='/snake-1.png'
              alt='snake image'
              className='object-contain'
              fill
            />
          </div>
          <DialogTitle className='text-3xl text-center font-bold tracking-tight text-gray-900'>
            Log in to continue
          </DialogTitle>
          <DialogDescription className='text-base text-center py-2'>
            <span className='font-medium text-zinc-900'>
              Your configuration was saved!
            </span>{' '}
            Please login or create an account to complete your purchase.
          </DialogDescription>
        </DialogHeader>

        <div className='flex gap-6 divide-x divide-gray-200'>
          <Button className={buttonVariants({ variant: 'outline' }) } onClick={() => router.push(`/auth/signin`)} >
            <div className='flex gap-6'>
              <div>

            Sign in with Google
              </div>
              <div>
              <FcGoogle />
              </div>
            </div>
          </Button>
          {/* <SignInGoogle /> */}
          {/* <Button className={buttonVariants({ variant: 'default' })}>
            Sign up
          </Button> */}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default LoginModal
