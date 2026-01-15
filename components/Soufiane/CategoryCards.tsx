"use client";
import type React from "react";
import { BookOpen, Play, Code, Zap } from "lucide-react";

interface Category {
  id: number;
  name: string;
  icon: React.ReactNode;
  description?: string;
}

const CategoryCards = () => {
  const categories: Category[] = [
    { id: 1, name: "Ebooks", icon: <BookOpen className="w-8 h-8" /> },
    { id: 2, name: "Courses", icon: <Play className="w-8 h-8" /> },
    { id: 3, name: "Software", icon: <Code className="w-8 h-8" /> },
    { id: 4, name: "Tools", icon: <Zap className="w-8 h-8" /> },
  ];

  return (
    <section className="py-12 px-36">
      <div className="grid grid-cols-4 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-card border border-border rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md hover:border-primary/20 transition-all duration-200"
          >
            <div className="text-primary mb-4">{category.icon}</div>
            <h3 className="text-lg font-semibold text-foreground">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCards;
