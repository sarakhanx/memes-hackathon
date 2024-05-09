import React from "react";

const MaxWidth = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <div className="max-w-3xl mx-auto px-4 w-full">
    {children}
  </div>
);


export default MaxWidth;