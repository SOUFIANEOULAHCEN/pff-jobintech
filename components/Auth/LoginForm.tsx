"use client";

import React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useRouter();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (formData.email !== user?.email) {
        setLoading(false);
        return toast.error("User not found");
      } else if (formData.password !== user?.password) {
        setLoading(false);
        return toast.error("Password Wrong");
      } else {
        setLoading(false);
        toast.success(`Welcome back!`)
        localStorage.setItem("currentUser", JSON.stringify({ ...formData }));
        navigate.push("/");
      }
    } catch (error) {}
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
        <p className="text-gray-500">Sign in to your account to continue.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label
            htmlFor="email"
            className="text-sm font-medium text-gray-900 mb-2 block"
          >
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleInputChange}
            className="border-gray-200"
          />
        </div>

        <div>
          <Label
            htmlFor="password"
            className="text-sm font-medium text-gray-900 mb-2 block"
          >
            Password
          </Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={formData.password}
              onChange={handleInputChange}
              className="border-gray-200 pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <label htmlFor="remember" className="text-sm text-gray-700">
            Remember me
          </label>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#39FF35] hover:bg-[#39FF35] text-white font-semibold py-3 rounded-lg"
        >
          Sign In
        </Button>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="text-purple-600 hover:underline font-medium"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
