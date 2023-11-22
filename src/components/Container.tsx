import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "my-10 mx-auto w-full max-w-screen-xl px-2.5 md:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
