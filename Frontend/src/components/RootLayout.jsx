import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">

      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-6 sm:py-8">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
}

export default RootLayout;