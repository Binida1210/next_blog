import { Outfit } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Blogo - Share Your Stories",
  description:
    "A modern blogging platform built with Next.js featuring neo-brutalism design",
};

// Global Clerk appearance configuration for neo-brutalism theme
const clerkAppearance = {
  elements: {
    // Primary buttons (Sign In, Sign Up, Continue, etc.)
    formButtonPrimary:
      "bg-[#65BBDF] hover:bg-[#4A9FC9] text-white border-2 border-black shadow-[-3px_3px_0_rgba(0,0,0,0.8)] hover:shadow-[-2px_2px_0_rgba(0,0,0,0.8)] font-bold rounded-lg transition-all",

    // Modal/Card styling
    card: "border-4 border-black shadow-[-8px_8px_0_rgba(0,0,0,0.8)] rounded-xl",

    // Headers
    headerTitle: "font-black text-2xl text-gray-900",
    headerSubtitle: "font-semibold text-gray-600",

    // Social buttons (Google, GitHub, etc.)
    socialButtonsBlockButton:
      "border-2 border-black shadow-[-3px_3px_0_rgba(0,0,0,0.3)] hover:shadow-[-2px_2px_0_rgba(0,0,0,0.3)] font-semibold rounded-lg transition-all",
    socialButtonsBlockButtonText: "font-semibold",

    // Form inputs
    formFieldInput:
      "border-2 border-black rounded-lg focus:border-[#65BBDF] focus:ring-2 focus:ring-[#DBF3FF] font-medium",
    formFieldLabel: "font-semibold text-gray-700",

    // Links and footer
    footerActionLink: "text-[#65BBDF] hover:text-[#4A9FC9] font-bold underline",

    // User button popup
    userButtonPopoverCard:
      "border-4 border-black shadow-[-6px_6px_0_rgba(0,0,0,0.8)] rounded-lg",
    userButtonPopoverActionButton: "hover:bg-[#DBF3FF] font-semibold",
    userButtonPopoverActionButtonText: "font-semibold",

    // Avatar
    avatarBox: "border-2 border-black",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={clerkAppearance}>
      <html lang="en" className="bg-white">
        <body
          className={`${outfit.variable} antialiased bg-white text-gray-900`}
        >
          {children}
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            style={{
              zIndex: 9999,
            }}
            toastStyle={{
              border: "2px solid black",
              boxShadow: "-4px 4px 0 rgba(0,0,0,0.8)",
              borderRadius: "8px",
            }}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}
