"use client";
import type React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Separator } from "../ui/separator";
import { useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { MdOutlineAttachFile } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const Links = [
  { item: "Product Details", state: "infos", icon: IoIosInformationCircle },
  { item: "Media & Files", state: "media", icon: MdOutlineAttachFile },
  { item: "Pricing & Terms", state: "pricing", icon: FaMoneyBillWave },
  { item: "Advanced Options", state: "options", icon: FaGear },
];

function ProductModal({ mode = "add" }: { mode?: string }): React.ReactNode {
  const [activeSide, setActiveSide] = useState("infos");
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-12 lg:w-auto h-12 shadow">
          <Plus />
          <span className="hidden lg:block">Create New Product</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[80%]">
        <DialogHeader className="h-fit">
          <DialogTitle className="text-xl font-bold">
            Add New Product
          </DialogTitle>
          <DialogDescription>
            create and list a new digital asset on Sellaura
          </DialogDescription>
        </DialogHeader>
        <div className="flex h-[80vh] ">
          <aside className="w-[25%] h-full bg-sidebar flex flex-col gap-1.5 p-2">
            {Links.map((link, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group cursor-pointer ${
                  activeSide === link.state.toLocaleLowerCase()
                    ? "bg-primary/15 border border-primary/30 text-primary font-medium hover:bg-primary/20"
                    : "text-muted-foreground hover:bg-primary/5 hover:text-secondary-foreground"
                }`}
              >
                <span>
                  <link.icon size={15} />
                </span>
                {link.item}
              </div>
            ))}
          </aside>
          <section className="w-full">
            <form action="" className="w-full flex flex-col p-5 gap-4">
              <h1 className="text-2xl font-semibold flex items-center gap-3">
                {" "}
                <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-full text-white">
                  1
                </div>{" "}
                Product Details
              </h1>
              <div className="flex flex-col gap-2">
                <Label>Product Title</Label>
                <Input
                  className="h-12"
                  placeholder="eg. Masterclassin Advanced UI Design"
                />
              </div>
              <div className="w-full flex gap-2">
                <div className="flex flex-col gap-2 w-full">
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <Label>Product Title</Label>
                  <Input
                    className="h-12"
                    placeholder="eg. Masterclassin Advanced UI Design"
                  />
                </div>
              </div>
            </form>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductModal;
