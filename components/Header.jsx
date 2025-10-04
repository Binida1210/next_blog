import { assets } from "../assets/assets";
import Image from "next/image";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ArrowRight, PlusCircle } from "lucide-react";

/**
 * Header Component
 * Main site header with authentication-aware navigation
 * Shows different content for signed in/out users
 *
 * Features:
 * - Logo/brand link to home
 * - Sign in button for guests
 * - Add New Post button for authenticated users
 * - User profile menu (Clerk UserButton)
 */
const Header = () => {
  return (
    <div className="p-5 md:px-12 lg:px-28">
      <div className="flex justify-between items-center">
        {/* Logo - Links to homepage */}
        <Link href="/">
          <Image
            src={assets.logo}
            alt="Logo"
            width={130}
            height={40}
            className="w-[130px] sm:w-auto"
          />
        </Link>

        {/* Right side navigation - Authentication-aware */}
        <div className="flex justify-end items-center gap-4 h-16">
          {/* Show for non-authenticated users */}
          <SignedOut>
            {/* Sign In Button - Opens Clerk authentication modal */}
            <SignInButton>
              <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0_#DBF3FF] hover:shadow-[-6px_6px_0_#65BBDF] transition-all duration-200">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </SignInButton>
          </SignedOut>

          {/* Show for authenticated users */}
          <SignedIn>
            {/* Quick Add Post Button - Links to admin create page */}
            <Link href="/admin/addProduct">
              <button className="flex items-center gap-2 font-medium py-1 px-2.5 sm:py-2 sm:px-3.5 border border-black bg-white hover:bg-[#DBF3FF] transition-all duration-200 rounded-md shadow-sm hover:shadow-md">
                <PlusCircle className="w-[18px] h-[18px]" />
                {/* Hide text on mobile, show on larger screens */}
                <span className="hidden sm:inline text-sm">Add New Post</span>
              </button>
            </Link>

            {/* User Profile Button - Clerk's built-in component */}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 sm:w-11 sm:h-11",
                  userButtonPopoverCard: "shadow-lg border border-gray-200",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Header;
