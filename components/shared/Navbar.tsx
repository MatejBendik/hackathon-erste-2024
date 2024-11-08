import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className="flex justify-end m-4 ">
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  )
}

export default Navbar