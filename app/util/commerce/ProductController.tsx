"use client"
import React, { useContext, useEffect, useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
import {
  ChevronLeft,
  PlusCircle,
  Upload,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from "@/components/ui/select"
import {
Table,
TableBody,
TableCell,
TableHead,
TableHeader,
TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
ToggleGroup,
ToggleGroupItem,
} from "@/components/ui/toggle-group"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import { UploadDropzone } from '@/app/utils/uploadthing';
import { ProductContext } from '@/app/academy/AppContex'
import axios from 'axios'
import useStore from "@/app/Store"

import { nu_api_base_url } from '@/app/Contants'
import { FileResponse } from '../Types'


const ProductController = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [quantity, setQuantity] = useState<any>();
  const [price, setPrice] = useState<any>();
  const [size, setSize] = useState<any>();
  const [category, setCategory] = useState<string>('');
  const [store_id, setStore_id] = useState<string | any>('');
  const [subcategory, setSubcategory] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<string | undefined>(undefined);
  const [color, setColor] = useState<any>();
  const [thumbnail, setThumbnail] = useState<string>('');
  const [image_one, setImageOne] = useState<string | undefined>(undefined);
  const [image_two, setImageTwo] = useState<string | undefined>(undefined);
  const [image_three, setImageThree] = useState<string | undefined>(undefined);
  const [fileResponses, setFileResponses] = useState<FileResponse[]>([]);
  const [fileResponses1, setFileResponses1] = useState<FileResponse[]>([]);
  const [fileResponses2, setFileResponses2] = useState<FileResponse[]>([]);
  const [fileResponses3, setFileResponses3] = useState<FileResponse[]>([]);
  const fileResponses_len = fileResponses.length;
  const fileResponses_len1 = fileResponses1.length;
  const fileResponses_len2 = fileResponses2.length;
  const fileResponses_len3 = fileResponses3.length;
  const fileResponsesArray = fileResponses[0];
  const fileResponses_Array1 = fileResponses1[0];
  const fileResponses_Array2 = fileResponses2[0];
  const fileResponses_Array3 = fileResponses3[0];
  const {setView} = useContext(ProductContext);
  const [Variant,setVariant]  = useState<string>("")
  const [savedVariant,setSavedVariant]  = useState<string>("")
  const { toast } = useToast()
  const UserDetails = useStore((state) => state.user);

  const handleAddVariant = () => {
    setSavedVariant(Variant)
    toast({
      title: "Variant",
      description: "Selected variant will apply on the Stock table",
      action: (
        <ToastAction altText="Goto schedule to undo" onClick={()=>{setSavedVariant("")}}>Undo</ToastAction>
      ),
    })
  }

  useEffect(() => {
    setThumbnail(fileResponsesArray?.url);
    setImageOne(fileResponses_Array1?.url);
    setImageTwo(fileResponses_Array2?.url);
    setImageThree(fileResponses_Array3?.url);
  }, [fileResponsesArray, fileResponses_Array1, fileResponses_Array2, fileResponses_Array3]);
  
 useEffect(()=>{
  setStore_id(UserDetails?.acount)
 },[])
  const postProduct = async () => {
    try {
      // Ensure that the state variables are correctly updated
      const productData = {
        name,
        description,
        quantity,
        price,
        size,
        category,
        subcategory,
        status,
        color,
        thumbnail,
        image_one,
        image_two,
        image_three,
        store_id
      };
  
      // Log the data being sent to check correctness
      console.log('Posting product data:', productData);
  
      // Send the POST request
      const response = await axios.post(`${nu_api_base_url}/nu-commerce`, productData, {
        headers: {
          'Content-Type': 'application/json',
          // Add other headers if required by your API
        },
      });
  
      // Log the response from the server
      console.log('Product posted successfully:', response.data);
  
      // Optionally, show a success message to the user
      toast({
        title: "Success",
        description: "Product has been posted successfully!",
      });
  
    } catch (error) {
      // Log and handle the error
      console.error('Error posting product:', error);
  
      // Optionally, show an error message to the user
      toast({
        title: "Error",
        description: "Failed to post the product. Please try again.",
      });
    }
  };

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
    <div className="mx-auto grid  flex-1 auto-rows-max gap-4">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" className="h-7 w-7" onClick={()=>{setView("")}}>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Pro Controller
        </h1>
        <Badge variant="outline" className="ml-auto sm:ml-0">
          In stock
        </Badge>
        <div className="hidden items-center gap-2 md:ml-auto md:flex">
          <Button variant="outline" size="sm">
            Discard
          </Button>
          <Button size="sm" onClick={postProduct}>Save Product</Button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
          <Card x-chunk="dashboard-07-chunk-0">
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
              <CardDescription>
                Highlight key features, materials, and dimensions for clear, engaging product information.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    className="w-full"
                    defaultValue="Gamer Gear Pro Controller"
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    defaultValue="Provide clear, concise details highlighting key features and benefits. Include materials, dimensions, and unique selling points to inform and engage customers."
                    className="min-h-32"
                    onChange={(e)=>setDescription(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-07-chunk-1">
            <CardHeader>
              <CardTitle>Stock</CardTitle>
              <CardDescription>
                Stock details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Stock</TableHead>
                    <TableHead>Price</TableHead>
                    {savedVariant !=="shoe sizes" && (<TableHead className="w-[100px]">Size</TableHead>)}
                    {savedVariant && (<TableHead className="w-[100px]">{Variant}</TableHead>)}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Label htmlFor="stock-1" className="sr-only">
                        Stock
                      </Label>
                      <Input
                        id="stock-1"
                        type="number"
                        defaultValue="100"
                        onChange={(e)=>{setQuantity(e.target.value)}}
                      />
                    </TableCell>
                    <TableCell>
                      <Label htmlFor="price-1" className="sr-only">
                        Price
                      </Label>
                      <Input
                        id="price-1"
                        type="number"
                        defaultValue="99.99"
                        onChange={(e)=>setPrice(e.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      {savedVariant !=="shoe sizes" && (<ToggleGroup
                        type="single"
                        defaultValue="s"
                        variant="outline"
                        onChange={(v)=>setSize(v)}
                      >
                        <ToggleGroupItem value="s">S</ToggleGroupItem>
                        <ToggleGroupItem value="m">M</ToggleGroupItem>
                        <ToggleGroupItem value="l">L</ToggleGroupItem>
                      </ToggleGroup>)}

                      {savedVariant ==="shoe sizes" && (<ToggleGroup
                        type="single"
                        defaultValue="7"
                        variant="outline"
                      >
                        <Input
                            id="price-1"
                            type="number"
                            defaultValue="7"
                            onChange={(v)=>setSize(v)}
                        />
                      </ToggleGroup>)}
                    </TableCell>
                    {savedVariant ==="colors" && (<TableCell>
                      <ToggleGroup
                        type="single"
                        defaultValue="s"
                        variant="outline"
                        onChange={(v)=>setColor(v)}
                        >
                        <ToggleGroupItem value="blue">
                            <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
                        </ToggleGroupItem>
                        <ToggleGroupItem value="yellow">
                            <div className="w-5 h-5 bg-yellow-500 rounded-full"></div>
                        </ToggleGroupItem>
                        <ToggleGroupItem value="red">
                            <div className="w-5 h-5 bg-red-500 rounded-full"></div>
                        </ToggleGroupItem>
                      </ToggleGroup>
                    </TableCell>)}
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="justify-center border-t p-4">
            <Dialog>
                <DialogTrigger asChild>
                <Button size="sm" variant="ghost" className="gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    Add Variant
                </Button>
                </DialogTrigger>
                <DialogContent className="p-10">
                    <DialogHeader>
                    <DialogTitle>Variants</DialogTitle>
                    <DialogDescription>
                        Selected variant will apply on the Stock table
                    </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <Select onValueChange={(v)=>setVariant(v)}>
                            <SelectTrigger
                            id="category"
                            aria-label="Select category"
                            >
                              <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="shoe sizes">Shoe Sizes</SelectItem>
                              <SelectItem value="colors">Colors</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <DialogFooter>
                        <Button size="sm" variant="ghost" className="gap-1" onClick={handleAddVariant}>
                            <PlusCircle className="h-3.5 w-3.5" />
                            Add Variant
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            </CardFooter>
          </Card>
          <Card x-chunk="dashboard-07-chunk-2">
            <CardHeader>
              <CardTitle>Product Category</CardTitle>
            </CardHeader>
            <CardContent className='w-full'>
              <div className="sm:w-full grid gap-6 sm:grid-cols-3">
                <div className="grid gap-3">
                  <Label htmlFor="category">Category</Label>
                  <Select onValueChange={(v)=>setCategory(v)}>
                    <SelectTrigger
                      id="category"
                      aria-label="Select category"
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clothing">Clothing</SelectItem>
                      <SelectItem value="electronics">
                        Electronics
                      </SelectItem>
                      <SelectItem value="accessories">
                        Accessories
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="subcategory">
                    Subcategory (optional)
                  </Label>
                  <Select onValueChange={(v)=>setSubcategory(v)}>
                    <SelectTrigger
                      id="subcategory"
                      aria-label="Select subcategory"
                    >
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="t-shirts">T-Shirts</SelectItem>
                      <SelectItem value="hoodies">Hoodies</SelectItem>
                      <SelectItem value="sweatshirts">
                        Sweatshirts
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <Card x-chunk="dashboard-07-chunk-3">
            <CardHeader>
              <CardTitle>Product Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="status">Status</Label>
                  <Select onValueChange={(v)=>setStatus(v)}>
                    <SelectTrigger id="status" aria-label="Select status">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Active</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card
            className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
          >
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
              <CardDescription>
              Opt for high-quality, clear images with neutral backgrounds. Use varied angles and good graphics to enhance product appeal
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2 items-center">
               {fileResponses.map((file, index) => (
                    <Image
                    key={index}
                      alt="Product image"
                      className="aspect-square w-full rounded-md object-cover"
                      height="84"
                      src={file.url}
                      width="84"
                    />
                ))}
                {fileResponses_len === 0 && (<button className="flex items-center justify-center  border border-dashed aspect-square w-full rounded-md object-cover">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Upload className="h-4 w-4 text-muted-foreground" />
                        </DialogTrigger>
                        <DialogContent className="p-10">
                            <DialogHeader>
                                <DialogTitle>Thumbnail</DialogTitle>
                                <DialogDescription>
                                  Select a presentable picture, preferably with a white background.
                                </DialogDescription>
                            </DialogHeader>
                            <UploadDropzone
                              endpoint="mediaPost"
                              onClientUploadComplete={(res: FileResponse[]) => {
                              // Do something with the response array
                              console.log("Files: ", res);

                              // Update the fileResponses state variable
                              setFileResponses(res);

                              // Accessing the name of each file
                              res.forEach(file => {
                                const fileName = file.name;
                                console.log("File Name: ", fileName);
                                // Do something with the file name
                              });
                              }}
                              onUploadError={(error: Error) => {
                              // Do something with the error.
                              
                              }}
                            />
                        </DialogContent>
                    </Dialog>
                </button>)}

                <div className="grid grid-cols-3 gap-2">
                {fileResponses1.map((file, index) => (
                    <Image
                    key={index}
                      alt="Product image"
                      className="aspect-square w-full rounded-md object-cover"
                      height="84"
                      src={file.url}
                      width="84"
                    />
                ))} 
                  {fileResponses_len1 === 0 &&(<button className="flex items-center justify-center  border border-dashed aspect-square w-full rounded-md object-cover">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Upload className="h-4 w-4 text-muted-foreground" />
                        </DialogTrigger>
                        <DialogContent className="p-10">
                            <DialogHeader>
                            <DialogTitle>Variants</DialogTitle>
                            <DialogDescription>
                                Selected variant will apply on the Stock table
                            </DialogDescription>
                            </DialogHeader>
                            <UploadDropzone
                              endpoint="mediaPost"
                              onClientUploadComplete={(res: FileResponse[]) => {
                              // Do something with the response array
                              console.log("Files: ", res);

                              // Update the fileResponses state variable
                              setFileResponses1(res);

                              // Accessing the name of each file
                              res.forEach(file => {
                                const fileName = file.name;
                                console.log("File Name: ", fileName);
                                // Do something with the file name
                              });

                              }}
                              onUploadError={(error: Error) => {
                              // Do something with the error.
                              
                              }}
                            />
                        </DialogContent>
                    </Dialog>
                  </button>)}

                  {fileResponses2.map((file, index) => (
                    <Image
                    key={index}
                      alt="Product image"
                      className="aspect-square w-full rounded-md object-cover"
                      height="84"
                      src={file.url}
                      width="84"
                    />
                  ))}
                  {fileResponses_len2 === 0 &&(<button className="flex items-center justify-center  border border-dashed aspect-square w-full rounded-md object-cover">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Upload className="h-4 w-4 text-muted-foreground" />
                        </DialogTrigger>
                        <DialogContent className="p-10">
                            <DialogHeader>
                            <DialogTitle>Variants</DialogTitle>
                            <DialogDescription>
                              Selected variant will apply on the Stock table
                            </DialogDescription>
                            </DialogHeader>
                            <UploadDropzone
                              endpoint="mediaPost"
                              onClientUploadComplete={(res: FileResponse[]) => {
                              // Do something with the response array
                              console.log("Files: ", res);

                              // Update the fileResponses state variable
                              setFileResponses2(res);

                              // Accessing the name of each file
                              res.forEach(file => {
                                const fileName = file.name;
                                console.log("File Name: ", fileName);
                                // Do something with the file name
                              });

                              }}
                              onUploadError={(error: Error) => {
                              // Do something with the error.
                              
                              }}
                            />
                        </DialogContent>
                    </Dialog>
                  </button>)}

                  {fileResponses3.map((file, index) => (
                    <Image
                    key={index}
                      alt="Product image"
                      className="aspect-square w-full rounded-md object-cover"
                      height="84"
                      src={file.url}
                      width="84"
                    />
                  ))}
                  {fileResponses_len3 === 0 && (<button className="flex items-center justify-center  border border-dashed aspect-square w-full rounded-md object-cover">
                    <Dialog>
                        <DialogTrigger asChild>
                          <Upload className="h-4 w-4 text-muted-foreground" />
                        </DialogTrigger>
                        <DialogContent className="w-[40%] h-[50%] p-10">
                            <DialogHeader>
                            <DialogTitle>Variants</DialogTitle>
                            <DialogDescription>
                                Selected variant will apply on the Stock table
                            </DialogDescription>
                            </DialogHeader>
                            <UploadDropzone
                                endpoint="mediaPost"
                                onClientUploadComplete={(res: FileResponse[]) => {
                                // Do something with the response array
                                console.log("Files: ", res);

                                // Update the fileResponses state variable
                                setFileResponses3(res);

                                // Accessing the name of each file
                                res.forEach(file => {
                                  const fileName = file.name;
                                  console.log("File Name: ", fileName);
                                  // Do something with the file name
                                });

                                }}
                                onUploadError={(error: Error) => {
                                // Do something with the error.
                                
                                }}
                            />
                        </DialogContent>
                    </Dialog>
                  </button>)}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-07-chunk-5">
            <CardHeader>
              <CardTitle>Your Store</CardTitle>
              <CardDescription>
                Manage discontinued items for future reference and analytics.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div></div>
              <Button size="sm" variant="secondary">
                {UserDetails?.acount}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 md:hidden">
        <Button variant="outline" size="sm">
          Discard
        </Button>
        <Button size="sm" onClick={postProduct}>Save Product</Button>
      </div>
    </div>
  </main>
  )
}

export default ProductController