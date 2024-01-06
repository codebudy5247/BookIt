import React, { ReactNode } from "react";

interface CustomBoxProps {
  children: ReactNode;
  className?: string;
  isDragOver?: boolean;
}

const CustomBox: React.FC<CustomBoxProps> = ({
  children,
  className,
  isDragOver,
}: CustomBoxProps) => {
  const baseStyles =
    "bg-white rounded-2xl shadow-md p-4 transition-opacity duration-300";
  const hoverStyles = "hover:opacity-60";
  const dragOverStyles = "dragover:opacity-60";

  return (
    <div
      className={`${baseStyles} ${className ? className : ""} ${
        isDragOver ? dragOverStyles : hoverStyles
      }`}
    >
      {children}
    </div>
  );
};

export default CustomBox;
