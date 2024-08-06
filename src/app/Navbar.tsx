import { Button } from "@/components/ui/button";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full">
      <header className="w-full flex justify-between items-center border p-2 shadow-lg mb-4 rounded-lg">
        <h1>Logo</h1>
        <Button>Login</Button>
      </header>
    </nav>
  );
};

export default Navbar;
