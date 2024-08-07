import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image 
            src="/assets/images/eventLogo.svg" width={128} height={38}
            alt="Evently logo" 
          />
        </Link>

        <SignedIn>
        <nav className="hidden md:flex items-center ml-auto">
  <div className="flex items-center justify-center w-full mb-4 md:mb-0">
    <Link href="/events/create" className="create-event-button">
      Create Event
      <div className="animated-border-box-glow"></div>
      <div className="animated-border-box"></div>
    </Link>
  </div>
  <NavItems />
</nav>

        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            
            <MobileNav />
          </SignedIn>
          <SignedOut>
            <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header
