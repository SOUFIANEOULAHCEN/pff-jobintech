"use client";

import React, { useEffect } from "react";
import { toast } from "sonner";
import { useState } from "react";
import { Eye, EyeOff, LoaderCircle, ShoppingBag, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [userType, setUserType] = useState("customer");
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [loading, setLoading] = useState(false);
  const navigate = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [agreed, setAgreed] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (user?.email === formData.email) {
        setLoading(false);
        return toast.error("an account with this email already exists");
      } else {
        setTimeout(() => {
          localStorage.setItem(
            "user",
            JSON.stringify({ ...formData, userType }),
          );
          setLoading(false);
        }, 4000);
        toast.success(`User created seccessfuly! welcome ${formData.fullName}`);
        navigate.push("/login");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  console.log(user);
  return (
    <div className="w-full max-w-full lg:max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Create your account
        </h1>
        <p className="text-gray-500">Join our community today.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="text-sm font-medium text-gray-900 mb-3 block">
            I am a...
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setUserType("customer")}
              className={`p-4 rounded-lg border-2 transition-colors text-left ${
                userType === "customer"
                  ? "border-[#39FF35] bg-purple-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <ShoppingBag className="w-6 h-6 text-gray-600 mb-2" />
              <p className="font-semibold text-gray-900">Customer</p>
              <p className="text-sm text-gray-600">I want to buy products.</p>
            </button>

            {/* Vendor Card */}
            <button
              type="button"
              onClick={() => setUserType("vendor")}
              className={`p-4 rounded-lg border-2 transition-colors text-left ${
                userType === "vendor"
                  ? "border-[#39FF35] bg-purple-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <Store className="w-6 h-6 text-gray-600 mb-2" />
              <p className="font-semibold text-gray-900">Vendor</p>
              <p className="text-sm text-gray-600">I want to sell my work.</p>
            </button>
          </div>
        </div>

        <div>
          <Label
            htmlFor="fullName"
            className="text-sm font-medium text-gray-900 mb-2 block"
          >
            Full Name
          </Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleInputChange}
            className="border-gray-200"
          />
        </div>

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
          <p className="text-xs text-gray-600 mt-2">
            Must be at least 8 characters
          </p>
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            id="terms"
            className="mt-1"
            onClick={() => setAgreed(!agreed)}
          />
          <label htmlFor="terms" className="text-sm text-gray-700">
            I agree to the{" "}
            <a href="#" className="text-purple-600 hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-purple-600 hover:underline">
              Privacy Policy
            </a>
          </label>
        </div>

        <Button
          type="submit"
          className="w-full bg-[#39FF35] hover:bg-[#39FF35] text-white font-semibold py-3 rounded-lg"
          disabled={loading || !agreed}
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            "Create Account"
          )}
        </Button>
      </form>
    </div>
  );
}
