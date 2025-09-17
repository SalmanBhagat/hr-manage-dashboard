"use client";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="text-center space-y-10">
        {/* Big Title */}
        <h1 className="text-4xl md:text-7xl font-bold text-slate-800">
          Welcome to My App 🎉
        </h1>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <Button asChild className="px-9 py-6 bg-slate-900 hover:bg-slate-800 text-white rounded-lg">
            <Link to="/login">Login</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="px-9 py-6 border-slate-300 text-slate-700 hover:bg-slate-100 rounded-lg"
          >
           <Link to="/register">Register</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
