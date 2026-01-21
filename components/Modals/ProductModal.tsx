"use client";
import type React from "react";

import { Edit, Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { MdOutlineAttachFile } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

import { GrCloudUpload } from "react-icons/gr";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "../ui/input-group";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { InitialDataProps } from "@/types";

const Links = [
  { item: "Product Details", state: "infos", icon: IoIosInformationCircle },
  { item: "Media & Files", state: "media", icon: MdOutlineAttachFile },
  { item: "Pricing & Terms", state: "pricing", icon: FaMoneyBillWave },
];

function ProductModal({
  mode = "add",
  InitialData,
}: {
  mode?: string;
  InitialData?: InitialDataProps;
}): React.ReactNode {
  const [activeSide, setActiveSide] = useState("infos");
  const [applyDiscount, setApplyDiscount] = useState(true);
  const [data, setData] = useState({
    title: InitialData?.title || "",
    category: InitialData?.category || "",
    tags: InitialData?.tags || [],
    description: InitialData?.description || "",
    coverImage: InitialData?.coverImage || "",
    imgs: InitialData?.imgs || ([] as { url: string; name: string }[]),
    pricingModel: InitialData?.pricingModel || "paid",
    discount: InitialData?.discount || 0,
    basePrice: InitialData?.basePrice || 5,
  });

  const onChangeInputs = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    fileType: "coverImage" | "imgs",
  ) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (fileType === "coverImage") {
          setData((prev) => ({ ...prev, coverImage: result }));
        } else if (fileType === "imgs") {
          setData((prev) => ({
            ...prev,
            imgs: [...prev.imgs, { url: result, name: file.name }],
          }));
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeImage = (index: number) => {
    setData((prev) => ({
      ...prev,
      imgs: prev.imgs.filter((_, i) => i !== index),
    }));
  };

  const removeCoverImage = () => {
    setData((prev) => ({ ...prev, coverImage: "" }));
  };

  const finalPrice = useMemo(() => {
    if (data.pricingModel === "free") return 0;

    const discount = data.discount ? data.discount / 100 : 0;
    return Number((data.basePrice * (1 - discount)).toFixed(2));
  }, [data.basePrice, data.discount, data.pricingModel]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        {mode === "add" ? (
          <Button className="w-12 lg:w-auto h-12 shadow">
            <Plus />
            <span className="hidden lg:block">Create New Product</span>
          </Button>
        ) : (
          <Button className="w-full h-12 shadow">
            <Edit />
            <span className="hidden lg:block">Edit Product</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="w-[95%] max-w-4xl h-full max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="h-fit px-6 pt-6 pb-2 border-b">
          <DialogTitle className="text-2xl font-bold">
            {mode === "edit" ? "Edit Product" : "Add New Product"}
          </DialogTitle>
          <DialogDescription>
            create and list a new digital asset on Sellaura
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col lg:flex-row h-[calc(90vh-120px)] overflow-hidden">
          <aside className="w-full lg:w-56 h-auto lg:h-full bg-sidebar flex lg:flex-col flex-row gap-1 p-2 overflow-x-auto lg:overflow-x-visible border-b lg:border-b-0 lg:border-r">
            {Links.map((link, idx) => (
              <div
                key={idx}
                onClick={() => setActiveSide(link.state.toLocaleLowerCase())}
                className={`flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-2 px-3 py-2.5 rounded-lg transition-all duration-200 group cursor-pointer whitespace-nowrap lg:whitespace-normal text-xs lg:text-sm flex-shrink-0 lg:flex-shrink ${
                  activeSide === link.state.toLocaleLowerCase()
                    ? "bg-primary/15 border border-primary/30 text-primary font-medium hover:bg-primary/20"
                    : "text-muted-foreground hover:bg-primary/5 hover:text-secondary-foreground"
                }`}
              >
                <span className="flex-shrink-0">
                  <link.icon size={18} />
                </span>
                <span className="hidden lg:inline">{link.item}</span>
              </div>
            ))}
          </aside>
          <section className="w-full overflow-y-auto">
            <form
              action=""
              className="w-full h-full relative flex flex-col p-4 lg:p-6 gap-4"
            >
              {activeSide === "infos" && (
                <div className="w-full flex flex-col gap-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-full text-white text-xs font-semibold">
                      1
                    </div>
                    <h1 className="text-xl lg:text-2xl font-semibold">
                      Product Details
                    </h1>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div>
                      <Label className="text-sm font-medium">
                        Product Title
                      </Label>
                      <Input
                        name="title"
                        value={data.title}
                        onChange={onChangeInputs}
                        className="h-10 mt-1.5"
                        placeholder="eg. Masterclass in Advanced UI Design"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium">Category</Label>
                        <Select
                          value={data.category}
                          onValueChange={(value) =>
                            setData((prev) => ({ ...prev, category: value }))
                          }
                        >
                          <SelectTrigger className="w-full h-10 mt-1.5">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="design">Design</SelectItem>
                            <SelectItem value="development">
                              Development
                            </SelectItem>
                            <SelectItem value="business">Business</SelectItem>
                            <SelectItem value="marketing">Marketing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-sm font-medium">Tags</Label>
                        <Input
                          name="tags"
                          value={data.tags}
                          onChange={onChangeInputs}
                          className="h-10 mt-1.5"
                          placeholder="eg. UI, Design, Figma"
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Description</Label>
                      <Textarea
                        name="description"
                        value={data.description}
                        onChange={onChangeInputs}
                        className="h-24 mt-1.5 resize-none"
                        placeholder="Describe what makes your product amazing"
                      />
                    </div>
                  </div>
                </div>
              )}
              {activeSide === "media" && (
                <div className="w-full flex flex-col gap-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-full text-white text-xs font-semibold">
                      2
                    </div>
                    <h1 className="text-xl lg:text-2xl font-semibold">
                      Media & Files
                    </h1>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium mb-2 block">
                        Product Cover
                      </Label>
                      {data.coverImage ? (
                        <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden group">
                          <img
                            src={data.coverImage || "/placeholder.svg"}
                            alt="cover"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Button
                              type="button"
                              onClick={removeCoverImage}
                              variant="destructive"
                              className="text-sm"
                            >
                              Remove Cover
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <label className="w-full cursor-pointer hover:bg-primary/15 transition-colors h-48 md:h-64 border-2 rounded-lg border-dashed gap-2 border-primary/40 bg-primary/5 flex flex-col items-center justify-center group block">
                          <input
                            type="file"
                            accept="image/png,image/jpeg"
                            onChange={(e) => handleFileUpload(e, "coverImage")}
                            className="hidden"
                          />
                          <GrCloudUpload
                            size={48}
                            className="text-primary/60 group-hover:text-primary transition-colors"
                          />
                          <div className="text-center">
                            <h3 className="text-primary font-semibold text-sm md:text-base">
                              Upload Product Cover
                            </h3>
                            <p className="text-xs text-muted-foreground mt-1">
                              PNG, JPG up to 5MB
                            </p>
                          </div>
                        </label>
                      )}
                    </div>
                    <div>
                      <Label className="text-sm font-medium mb-2 block">
                        Product Images
                      </Label>
                      <label className="block">
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full h-10 bg-transparent"
                          asChild
                        >
                          <span>
                            <GrCloudUpload className="mr-2" />
                            Upload Product Images
                          </span>
                        </Button>
                        <input
                          type="file"
                          multiple
                          accept="image/png,image/jpeg"
                          onChange={(e) => handleFileUpload(e, "imgs")}
                          className="hidden"
                        />
                      </label>
                      {data.imgs.length > 0 && (
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {data.imgs.map((img, idx) => (
                            <div
                              key={idx}
                              className="relative group rounded-lg overflow-hidden h-32"
                            >
                              <img
                                src={img.url || "/placeholder.svg"}
                                alt={img.name}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Button
                                  type="button"
                                  onClick={() => removeImage(idx)}
                                  variant="destructive"
                                  className="text-xs"
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {activeSide === "pricing" && (
                <div className="w-full flex flex-col gap-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-full text-white text-xs font-semibold">
                      3
                    </div>
                    <h1 className="text-xl lg:text-2xl font-semibold">
                      Pricing & Terms
                    </h1>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium">
                        Pricing Model
                      </Label>
                      <Select
                        value={data.pricingModel}
                        onValueChange={(value) =>
                          setData((prev) => ({ ...prev, pricingModel: value }))
                        }
                      >
                        <SelectTrigger className="w-full h-10 mt-1.5">
                          <SelectValue placeholder="Choose pricing model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="paid">Paid (one-time)</SelectItem>
                          <SelectItem value="free">Free</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Base Price</Label>
                      <InputGroup className="h-10 mt-1.5">
                        <InputGroupAddon>
                          <InputGroupText>$</InputGroupText>
                        </InputGroupAddon>
                        <InputGroupInput
                          name="basePrice"
                          disabled={data.pricingModel === "free"}
                          value={data.basePrice}
                          onChange={onChangeInputs}
                          placeholder="0.00"
                          type="number"
                        />
                        <InputGroupAddon align="inline-end">
                          <InputGroupText>USD</InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </div>
                    <div className="border border-primary/20 rounded-lg p-4 bg-primary/5 mt-2 relative flex flex-col gap-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <Switch
                          onClick={() => setApplyDiscount(!applyDiscount)}
                          className="absolute right-5"
                        />
                        <div className="flex flex-col gap-1">
                          <h3 className="font-semibold text-sm lg:text-base">
                            Apply Discount
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Run a temporary promotion for this product
                          </p>
                        </div>
                      </div>
                      <div className="w-full py-2 flex flex-col gap-2 lg:flex-row lg:justify-between">
                        <div className="w-full flex flex-col gap-1.5">
                          <h3>Discount Value</h3>
                          <Input
                            disabled={
                              applyDiscount || data.pricingModel === "free"
                            }
                            type="number"
                            value={data.discount}
                            onChange={onChangeInputs}
                            name="discount"
                            placeholder="Enter Discount Value"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Card className="w-full bg-primary/10 border border-primary">
                    <CardContent className="flex flex-col lg:flex-row">
                      <div className="w-full flex flex-col">
                        <h1 className="text-lg font-semibold text-primary">
                          Final Customer Price
                        </h1>
                        <p>
                          This is what your customers will see at your checkout
                        </p>
                      </div>
                      <div className="w-full flex flex-col justify-start items-end gap-1">
                        <div className="flex gap-3 items-end">
                          {!applyDiscount && (
                            <h2 className="text-muted-foreground line-through">
                              {`$${data.basePrice}`}
                            </h2>
                          )}
                          <h1 className="text-2xl font-semibold leading-none">
                            {data.pricingModel === "free"
                              ? "Free"
                              : `$${finalPrice}`}
                          </h1>
                        </div>
                        {!applyDiscount && <Badge>Save {data.discount}%</Badge>}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
              {activeSide === "options" && (
                <div className="w-full flex flex-col gap-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-full text-white text-xs font-semibold">
                      4
                    </div>
                    <h1 className="text-xl lg:text-2xl font-semibold">
                      Advanced Options
                    </h1>
                  </div>
                  <div className="space-y-4">
                    <div className="border border-primary/20 rounded-lg p-4 bg-primary/5">
                      <p className="text-sm text-muted-foreground">
                        Additional settings and options for your product will
                        appear here
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <Button>
                {mode === "edit" ? "Edit Product" : "Add Product"}
              </Button>
            </form>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductModal;
