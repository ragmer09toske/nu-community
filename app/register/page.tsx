"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  MailIcon,
  PhoneIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
const Register = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [form, setForm] = useState({
    name: "",
    surname: "",
    number: "",
    email: "",
    password: "",
  });

  const handleChange =
    (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  };

  const passwordStrength = () => {
    const { password } = form;
    if (!password) return { strength: 0, text: "" };

    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    const strengthText = ["Weak", "Fair", "Good", "Strong"];
    return {
      strength,
      text: strengthText[strength - 1],
    };
  };

  const { strength, text } = passwordStrength();

  return (
    <div className="flex flex-col gap-6">
      <Card className="w-full border-none bg-transparent shadow-none dark:bg-transparent">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Create an account
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Enter your details to create your AquaGuardAI account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                id="name"
                value={form.name}
                onChange={handleChange("name")}
                placeholder="Raymond"
              />
              <Input
                id="surname"
                value={form.surname}
                onChange={handleChange("surname")}
                placeholder="Shao"
              />
            </div>

            <Input
              id="number"
              value={form.number}
              onChange={handleChange("number")}
              placeholder="+26650123456"
            />

            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              placeholder="raymond@example.com"
            />

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange("password")}
                  required
                  className="pl-10"
                />
                <LockIcon className="text-muted-foreground absolute top-2.5 left-3 h-4 w-4" />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOffIcon className="text-muted-foreground h-4 w-4" />
                  ) : (
                    <EyeIcon className="text-muted-foreground h-4 w-4" />
                  )}
                </Button>
              </div>

              {form.password && (
                <div className="mt-2">
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">
                      Password strength:
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        strength === 4
                          ? "text-green-500"
                          : strength >= 2
                          ? "text-amber-500"
                          : "text-red-500"
                      }`}
                    >
                      {text}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`h-1.5 flex-1 rounded-full ${
                          level <= strength
                            ? level === 4
                              ? "bg-green-500"
                              : level >= 2
                              ? "bg-amber-500"
                              : "bg-red-500"
                            : "bg-muted"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Button
              className="w-full rounded-full"
              type="submit"
              disabled={isLoading || strength < 2}
            >
              {isLoading ? "Creating account..." : "Create account"}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-secondary font-medium hover:underline"
            >
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
