import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full">
      <header className="w-full flex justify-between items-center border p-2 shadow-lg mb-4 rounded-lg">
        <Link href={"/"}>Logo</Link>
        <Button>Login</Button>
      </header>
    </nav>  
  );
};

export default Navbar;
