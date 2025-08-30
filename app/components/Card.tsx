"use client";

import React from "react";

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl shadow-sm ${className}`}>{children}</div>
  );
}

export function CardContent({ children, className = "p-6" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}
