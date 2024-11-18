"use client";

import React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "./button";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button onClick={() => toggleTheme()} variant="ghost" size="icon">
      {resolvedTheme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeToggle;
