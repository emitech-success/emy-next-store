'use client'
import { SignOutButton } from "@clerk/nextjs"
import Link from "next/link"
import { toast } from "sonner"


function SignOutLink() {
  toast("Event has been created.")
  const handleLogout = () =>{
    toast("Logout successfully");

  }
  return (
    <SignOutButton >
      <Link href='/' className="w-full text-left" onClick={handleLogout}>
      Logout
      </Link>
    </SignOutButton>
  )
}
export default SignOutLink