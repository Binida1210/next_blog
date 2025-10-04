"use client";
import AdminSideBar from "@/ui/AdminSideBar";
import { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col sm:flex-row">
      {/* Mobile Header */}
      <div className="sm:hidden flex items-center justify-between p-4 bg-white border-b border-black">
        <Image
          src={assets.logo}
          alt="Logo"
          width={100}
          height={30}
          className="w-[100px]"
        />
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="px-4 py-2 border border-black bg-[#DBF3FF] shadow-[-3px_3px_0_#65BBDF] active:shadow-none"
        >
          <span className="text-xl">☰</span>
        </button>
      </div>

      {/* Sidebar - Desktop always visible, Mobile toggleable */}
      <div
        className={`
          fixed sm:static inset-0 z-50 sm:z-auto
          transform transition-transform duration-300
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
          }
        `}
      >
        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="sm:hidden fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className="relative z-10">
          <AdminSideBar onNavigate={() => setSidebarOpen(false)} />
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto">
        <div className="p-4 sm:p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
