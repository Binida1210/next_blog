"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser, SignOutButton } from "@clerk/nextjs";
import { PlusCircle, BookOpen, Mail, LogOut, ArrowLeft } from "lucide-react";

/**
 * AdminSideBar Component
 * Navigation sidebar for admin dashboard with user profile and menu items
 * Features Clerk authentication integration and active route highlighting
 *
 * @param {Function} onNavigate - Optional callback when navigation occurs
 */
const AdminSideBar = ({ onNavigate }) => {
  // Get current route path for highlighting active menu item
  const pathname = usePathname();

  // Get authenticated user data from Clerk
  const { user } = useUser();

  // Define navigation menu items with icons and routes
  const menuItems = [
    {
      href: "/admin/addProduct",
      icon: PlusCircle,
      label: "Add New",
    },
    {
      href: "/admin/blogList",
      icon: BookOpen,
      label: "Blog List",
    },
    {
      href: "/admin/subscriptions",
      icon: Mail,
      label: "Subscriptions",
    },
  ];

  return (
    <aside className="w-full sm:w-64 bg-white border-r border-black min-h-screen flex flex-col">
      {/* Logo Section - Brand identity and page title */}
      <div className="p-6 border-b border-black bg-[#DBF3FF]">
        <Link href="/" className="block">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-[120px] sm:w-[140px] mx-auto sm:mx-0"
          />
        </Link>
        <p className="mt-3 text-xs text-gray-600 text-center sm:text-left font-medium">
          Admin Dashboard
        </p>
      </div>

      {/* User Profile Section - Display Clerk authenticated user info */}
      {user && (
        <div className="p-4 border-b border-black bg-white">
          <div className="flex items-center gap-3">
            {/* User Avatar - Synced from Clerk */}
            <div className="w-12 h-12 border-2 border-black rounded-full overflow-hidden bg-gray-100 shadow-[-2px_2px_0_rgba(0,0,0,0.2)]">
              <Image
                src={user.imageUrl || assets.profile_icon}
                alt={user.fullName || "User"}
                width={48}
                height={48}
                className="object-cover w-full h-full"
              />
            </div>
            {/* User Details */}
            <div className="flex-1 min-w-0">
              <p className="font-bold text-sm text-gray-900 truncate">
                {user.fullName || user.username || "User"}
              </p>
              <p className="text-xs text-gray-600 truncate">
                {user.primaryEmailAddress?.emailAddress || ""}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Menu */}
      <nav className="p-4 flex-1 overflow-y-auto">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-2">
          Content
        </h3>
        <ul className="space-y-2 mb-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => onNavigate?.()}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-none
                    border border-black font-medium text-sm
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#65BBDF] text-white shadow-[-4px_4px_0_#DBF3FF]"
                        : "bg-white text-gray-800 shadow-[-3px_3px_0_#DBF3FF] hover:shadow-[-4px_4px_0_#65BBDF] hover:bg-[#DBF3FF]"
                    }
                  `}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Account Section */}
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 px-2">
          Account
        </h3>
        <ul className="space-y-2">
          {/* Profile Link with Avatar */}
          <li>
            <Link
              href="/admin"
              onClick={() => onNavigate?.()}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-none
                border border-black font-medium text-sm
                transition-all duration-200
                ${
                  pathname === "/admin"
                    ? "bg-[#65BBDF] text-white shadow-[-4px_4px_0_#DBF3FF]"
                    : "bg-white text-gray-800 shadow-[-3px_3px_0_#DBF3FF] hover:shadow-[-4px_4px_0_#65BBDF] hover:bg-[#DBF3FF]"
                }
              `}
            >
              <div className="w-5 h-5 flex-shrink-0 rounded-full overflow-hidden border border-black">
                <Image
                  src={user?.imageUrl || assets.profile_icon}
                  alt="Profile"
                  width={20}
                  height={20}
                  className="w-full h-full object-cover"
                />
              </div>
              <span>Edit Profile</span>
            </Link>
          </li>

          {/* Logout Button */}
          <li>
            <SignOutButton redirectUrl="/">
              <button
                className="w-full flex items-center gap-3 px-4 py-3 rounded-none
                  border border-black font-medium text-sm
                  bg-white text-red-600 shadow-[-3px_3px_0_#DBF3FF] 
                  hover:shadow-[-4px_4px_0_#FFE5E5] hover:bg-red-50
                  transition-all duration-200"
              >
                <LogOut className="w-5 h-5 flex-shrink-0" />
                <span>Logout</span>
              </button>
            </SignOutButton>
          </li>
        </ul>
      </nav>

      {/* Bottom Section - Quick Actions */}
      <div className="p-4 border-t border-black bg-gray-50 mt-auto">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 px-4 py-2 border border-black bg-white text-sm font-medium shadow-[-3px_3px_0_#DBF3FF] hover:shadow-[-4px_4px_0_#65BBDF] hover:bg-[#DBF3FF] transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>
      </div>
    </aside>
  );
};

export default AdminSideBar;
