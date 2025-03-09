import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';

interface FormLayoutProps {
  children: ReactNode;
  title: string;
}

export function FormLayout({ children, title }: FormLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isLoggedIn={false} username="" onLogout={() => {}} transparent={true} />
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
}