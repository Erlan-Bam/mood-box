"use client";

import { useState } from "react";
import AuthModal from "./AuthModal";
import { useAuth } from "../hooks/useAuth";

export default function Navigation() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, login, logout } = useAuth();

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <span className="text-3xl">📦</span>
              <span className="text-2xl font-bold bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mood Box
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#how-it-works"
                className="hover:text-purple-600 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#themes"
                className="hover:text-purple-600 transition-colors"
              >
                Themes
              </a>
              <a
                href="#customize"
                className="hover:text-purple-600 transition-colors"
              >
                Customize
              </a>
              <a
                href="#pricing"
                className="hover:text-purple-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#metrics"
                className="hover:text-purple-600 transition-colors"
              >
                Business
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <div className="hidden sm:flex items-center gap-2 bg-purple-50 dark:bg-purple-900/20 px-4 py-2 rounded-full">
                    <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                      {user?.email}
                    </span>
                  </div>
                  <button
                    onClick={logout}
                    className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-4 sm:px-6 py-2 rounded-full font-semibold transition-all"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-2 rounded-full font-semibold transition-all transform hover:scale-105"
                >
                  Get Started
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-gray-900 dark:text-white"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <a
                href="#how-it-works"
                className="block hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#themes"
                className="block hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Themes
              </a>
              <a
                href="#customize"
                className="block hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Customize
              </a>
              <a
                href="#pricing"
                className="block hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#metrics"
                className="block hover:text-purple-600 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Business
              </a>
            </div>
          )}
        </div>
      </nav>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onAuthSuccess={login}
      />
    </>
  );
}
