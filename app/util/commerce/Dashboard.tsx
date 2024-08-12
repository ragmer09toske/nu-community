import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import useStore from "@/app/Store"

const Dashboard = () => {
  const UserDetails = useStore((state) => state.user);

  return (
    <div className='grid gap-6'>
        <Card x-chunk="dashboard-04-chunk-1">
            <CardHeader>
            <CardTitle>Store Name</CardTitle>
            <CardDescription>
                Used to identify your store in the marketplace.
            </CardDescription>
            </CardHeader>
            <CardContent>
            <form>
                <Input placeholder="Store Name" value={UserDetails?.acount} />
            </form>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
            <Button>Save</Button>
            </CardFooter>
        </Card>
        
        <Card x-chunk="dashboard-04-chunk-2">
            <CardHeader>
            <CardTitle>Customers</CardTitle>
            <CardDescription>
                People who recently viewed you store
            </CardDescription>
            </CardHeader>
            <CardContent>
            <form className="flex flex-col gap-4">
                <Input
                placeholder="Project Name"
                defaultValue="/stores/v-mol"
                />
                <div className="flex items-center space-x-2">
                <Checkbox id="include" defaultChecked />
                <label
                    htmlFor="include"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Allow administrators to change the directory.
                </label>
                </div>
            </form>
            </CardContent>
            <CardFooter className="border-t px-6 py-4">
            <Button>View</Button>
            </CardFooter>
        </Card>
    </div>
  )
}

export default Dashboard