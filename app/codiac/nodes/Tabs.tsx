"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, ChevronsUpDown, Filter, MoreVertical, RefreshCwIcon } from "lucide-react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
 
import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import React, { useEffect, useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { DatePickerWithRange } from "@/components/Datetime"
import {  Plus, X } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Loader2, Send } from 'lucide-react';
import {
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';

import axios from "axios"
import { sendContactForm } from "@/app/api/sendEmail"
import { IconReload } from "@tabler/icons-react"
import RsvpPagination from "./pagination"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
 
const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)
const frameworks = [
  {
    value: "codiacs",
    label: "Codiacs",
  },
]

const Venue = [
  {
    value: "leap",
    label: "Leap",
  },
  {
    value: "holberton",
    label: "Holberton",
  },
  {
    value: "limkokwing university",
    label: "Limkokwing university",
  },
]
interface Person {
  firstname: string;
  lastname: string;
  email: string;
  number: number;
  reason: string;
}
interface MyComponentProps {
  codiacs: Person[];
}
export function RSVP() {
  const [create, setCreate] = useState<boolean>(false)
  const [open, setOpen] = useState(false)
  const [startIndex, setStartIndex] = useState<number>(0);
  const [search,setSearch] = useState<string>("")
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(2);
  const [codiacs, setCodiacs] = useState<any[]>([]);
  const { toast } = useToast();
  const [loading,setLoading] = useState<boolean>(false);
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = React.useState(false)
  const [openCalender, setOpenCalender] = useState(false);
  const [valueCalender, setValueCalender] = useState("");
  const arrayLength = codiacs.length;
  // State to track selected persons
  const [selectedPersons, setSelectedPersons] = useState<Person[]>([]);

  // Handle checkbox change
  const handleCheckboxChange = (person: Person, isChecked: boolean) => {
    if (isChecked) {
        // Add person to selectedPersons if checkbox is checked
        setSelectedPersons((prev) => [...prev, person]);
    } else {
        // Remove person from selectedPersons if checkbox is unchecked
        setSelectedPersons((prev) => prev.filter((item) => item !== person));
    }
    console.log(selectedPersons)
  };

  const handleShowMore = () => {
    setStartIndex(prevIndex => prevIndex + 10);
  };
  const handleShowLess = () => {
    setStartIndex(prevIndex => prevIndex - 10);
  };
  const handleSearch = ()=>{
    const getAllCodiacs = async()  => {
      setLoading(true)
      try{
        const response = await axios.get(`https://nu-com-0e51cf02b2c8.herokuapp.com/codiac/search/?searchParam=${search}`)
        if (response.data.length !== 0) {
          // console.log(response.data)
          setCodiacs(response.data);
          toast({
            title: `Search results (${response.data.length})`,
            description: "See results in table",
          })
          setLoading(false);
        }else{
          setLoading(false);
          toast({
            title: `Search results (${response.data.length})`,
            description: "Dololo",
          })
        }
      }
      catch(error){
        setLoading(false)
        // console.log(error)
      }
    }
    getAllCodiacs()
  }
  
  const getAllCodiacs = async()  => {
    setLoading(true)
    try{
      const response = await axios.get("https://nu-com-0e51cf02b2c8.herokuapp.com/codiac/registerers")
      setCodiacs(response.data)
      setLoading(false)
    }
    catch(error){
      console.log(error)
      setLoading(false)
    }
  }
  
  useEffect(()=>{
    const getAllCodiacs = async()  => {
      try{
        const response = await axios.get("https://nu-com-0e51cf02b2c8.herokuapp.com/codiac/registerers")
        if(response.data){
        // console.log(response.data)
          setCodiacs(response.data)
          setLoading(false)
        }
      }
      catch(error){
        console.log(error)
      }
    }
    getAllCodiacs()
  },[])

  const EmailSender = () => {
    const sendEmail = async () => {
        // The data you want to send
        const data = {
            name: 'Codiac test',
            message: 'Hello, this is a test email from Nucleus Creative Studio.',
            emailList: [
                'retsepile.raymondshao@gmail.com',
                'nucleusdevs@gmail.com'
            ]
        };

        try {
            // Send a POST request to your server
            const response = await fetch('https://nu-com-0e51cf02b2c8.herokuapp.com/mailing', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Specify the content type as JSON
                },
                body: JSON.stringify(data), // Convert the data to a JSON string
            });

            // Check the response status
            if (response.ok) {
                // The request was successful
                const result = await response.text();
                console.log('Emails sent successfully:', result);
            } else {
                // The request failed
                console.error('Failed to send emails:', response.statusText);
            }
        } catch (error) {
            // Handle any other errors
            console.error('Error:', error);
        }
    };
    sendEmail();
  }

  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <div className="relative flex justify-between items-center">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Campaigning</TabsTrigger>
          <TabsTrigger value="password">Subscribers</TabsTrigger>
        </TabsList>
        <div className="absolute -right-80">
          <Popover>
            <PopoverTrigger asChild>
              <MoreVertical />
            </PopoverTrigger>
            <PopoverContent className="">
              <Command className="rounded-lg shadow-md">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem onClick={getAllCodiacs}>
                      {!loading ? ( <RefreshCwIcon className="mr-2 h-4 w-4" onClick={getAllCodiacs}/>) : ( <RefreshCwIcon className="mr-2 h-4 w-4 animate-spin"/>)}
                      <span onClick={getAllCodiacs}>Refresh</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Shortcuts">
                    <CommandItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Emails send</span>
                    </CommandItem>
                    <CommandItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <TabsContent value="account">
        {!create ? (<Card className="p-5 flex flex-row gap-5" >
          <Button
            variant="outline"
            size={"sm"}
            className="w-[200px]"
            onClick={()=>{setCreate(true)}}
          >
            <>+ Campaign</>
          </Button>
          <Button
            variant="outline"
            size={"sm"}
            className="w-[200px]"
          >
            <>View</>
          </Button>
        </Card>)
        :
        <Card className="flex gap-2 w-[750px]">
          <div className="w-full">
              <CardHeader>
                <CardTitle>Create a Campaign</CardTitle>
                <CardDescription>Deploy your new campaign in one-click.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Name of your campaign" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Message</Label>
                      <Textarea />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button onClick={EmailSender}>Deploy</Button>
              </CardFooter>
            </div> 

            <div className="w-full p-2 pl-6 justify-center relative" style={{borderLeft:"solid", borderWidth:0}}>
              <div className="z-10 w-full flex flex-col gap-2 pl-10 pr-10 pt-5">
                Create a Demographic
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-[200px] justify-between"
                    >
                      {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Select table..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search table..." />
                      <CommandEmpty>No framework found.</CommandEmpty>
                      <CommandGroup>
                        {frameworks.map((framework) => (
                          <CommandItem
                            key={framework.value}
                            value={framework.value}
                            onSelect={(currentValue) => {
                              setValue(currentValue === value ? "" : currentValue)
                              setOpen(false)
                            }}
                          >
                            <Check
                              className=""
                            />
                            {framework.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                

                <div>
                  <Command className="rounded-lg border shadow-md">
                    <CommandList>
                      <CommandGroup heading="Suggestions">
                        <CommandItem>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline">Select people</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                              <DialogHeader>
                                {/* <DialogTitle>Select people</DialogTitle> */}
                                <DialogDescription>
                                  <Breadcrumb>
                                    <BreadcrumbList>
                                      <BreadcrumbItem>
                                        <BreadcrumbLink>Demographics</BreadcrumbLink>
                                      </BreadcrumbItem>
                                      <BreadcrumbSeparator />
                                      <BreadcrumbItem>
                                        <BreadcrumbLink >nucleus</BreadcrumbLink>
                                      </BreadcrumbItem>
                                      <BreadcrumbSeparator />
                                      <BreadcrumbItem>
                                        <BreadcrumbPage>Codiacs</BreadcrumbPage>
                                      </BreadcrumbItem>
                                    </BreadcrumbList>
                                  </Breadcrumb>
                                </DialogDescription>
                              </DialogHeader>
                              <Collapsible
                                open={isOpen}
                                onOpenChange={setIsOpen}
                                className="w-[350px] space-y-2"
                              >
                                <div className="flex items-center justify-between space-x-4 px-4">
                                  <h4 className="text-sm font-semibold">
                                    @codiacs: ({arrayLength}) nodes
                                  </h4>
                                  <CollapsibleTrigger asChild>
                                    <Button variant="ghost" size="sm" className="w-9 p-0">
                                      <ChevronsUpDown className="h-4 w-4" />
                                      <span className="sr-only">Toggle</span>
                                    </Button>
                                  </CollapsibleTrigger>
                                </div>
                                
                                <CollapsibleContent className="space-y-2">
                                  <ScrollArea className="h-72 w-full rounded-md border">
                                  <div className="p-4 flex flex-col gap-2">
                                  {codiacs.map((item, index) => (
                                    <div key={index} className="rounded-md border px-4 py-3 font-mono text-sm">
                                        <div className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                id={item.firstname}
                                                onChange={(e) => handleCheckboxChange(item, e.target.checked)}
                                            />
                                            <label
                                                htmlFor={item.firstname}
                                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                @codiacs/{item.firstname} {item.lastname}
                                            </label>
                                        </div>
                                    </div>
                                  ))}
                                  </div>
                                </ScrollArea>
                                  
                                </CollapsibleContent>
                              </Collapsible>
                              <DialogFooter>
                                <Badge className="p-2 pl-5 pr-5"><Filter /></Badge>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </CommandItem>
                        <CommandItem>
                          {
                            selectedPersons.map((item, index)=>{
                              return(
                                <>
                                <p>{item.email}</p>
                                </>
                              )
                            })
                          }
                        </CommandItem>
                      </CommandGroup>
                      <CommandSeparator />
                    </CommandList>
                  </Command>
                  
                </div>
              </div>
              
              <div className="absolute bottom-5 flex flex-col gap-2 pl-10 pt-5">
              Select Venue
              <Popover open={openCalender} onOpenChange={setOpenCalender}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={openCalender}
                    className="w-[200px] justify-between"
                  >
                    {valueCalender
                      ? Venue.find((Venue) => Venue.value === valueCalender)?.label
                      : "Select Venue..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                  <Command>
                    <CommandInput placeholder="Search Venue..." />
                    <CommandEmpty>No Venue found.</CommandEmpty>
                    <CommandGroup>
                      {Venue.map((Venue) => (
                        <CommandItem
                          key={Venue.value}
                          value={Venue.value}
                          onSelect={(currentValue) => {
                            setValueCalender(currentValue === valueCalender ? "" : currentValue)
                            setOpenCalender(false)
                          }}
                        >
                          <Check
                            className=""
                          />
                          {Venue.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
                <DatePickerWithRange />
              </div>
            </div>
        </Card>
        }
      </TabsContent>
      <TabsContent value="password">
      <Card className="absolute mx-auto max-w-5xl w-[1200px] p-5 left-[370px]">
            <div className='flex gap-5 '>
              <Input placeholder='search' onChange={(e)=>{setSearch(e.target.value)}} />
              <Badge>
                {
                  !loading ? 
                  (<Send onClick={handleSearch}/>)
                  : 
                  (<Loader2 className='animate-spin'/>)
                }
              </Badge>
            </div>
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>First Name</TableHeaderCell>
                  <TableHeaderCell>Last Name</TableHeaderCell>
                  <TableHeaderCell>Number</TableHeaderCell>
                  <TableHeaderCell>Email</TableHeaderCell>
                  <TableHeaderCell>Reason</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {codiacs.slice(startIndex, startIndex + 10).map((item, index) => {
                  return (
                    <TableRow key={index}>
                      <TableCell>{item.firstname}</TableCell>
                      <TableCell>{item.lastname}</TableCell>
                      <TableCell>{item.number}</TableCell>
                      <TableCell>
                        <HoverCard>
                          <HoverCardTrigger>{item.email.length > 10 ? `${item.email.slice(0, 10)}...` : item.email}</HoverCardTrigger>
                          <HoverCardContent>
                            {item.email}
                          </HoverCardContent>
                        </HoverCard>
                      </TableCell>
                      <TableCell>
                        <pre>
                          
                        </pre>
                        <HoverCard>
                          <HoverCardTrigger>{item.reason.length > 20 ? `${item.reason.slice(0, 20)}...` : item.reason}</HoverCardTrigger>
                          <HoverCardContent>
                          <div className='flex flex-wrap w-[100%]'>
                            {item.reason &&
                              item.reason
                                .match(/.{1,33}/g) // Split text into chunks of 40 characters
                                .map((chunk:any, index:any) => (
                                  <React.Fragment key={index}>
                                    {chunk}
                                    <br /> {/* Add a line break after each chunk */}
                                  </React.Fragment>
                                ))}
                          </div>
                          </HoverCardContent>
                        </HoverCard>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            {/* <button onClick={handleShowMore}>Show More</button> 
            <button onClick={handleShowLess}>Show less</button> */}
            <RsvpPagination handleShowLess={handleShowLess} handleShowMore={handleShowMore} />
          </Card>
      </TabsContent>
    </Tabs>
  )
}
// i want to make a my own digital country, like there is something like crypto currency.