"use client";
import { useTheme } from "next-themes";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="hover:cursor-pointer">
      {theme === "dark" ? (
        <Sun onClick={() => setTheme("light")} />
      ) : (
        <Moon onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}
