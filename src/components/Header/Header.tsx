import * as React from "react";

const Header: React.FC = () => {
    return (
      <header className="w-1920 h-78 flex justify-between items-center">
        <h1 className="text-xl font-bold">HOME</h1>
        <h1 className="text-xl font-bold">ABOUT</h1>
        <h1 className="text-xl font-bold">NEWS</h1>
        <h1 className="text-xl font-bold">SUPPORT</h1>
        <h1 className="text-xl font-bold">COC</h1>
      </header>
    );
  };

  export default Header;