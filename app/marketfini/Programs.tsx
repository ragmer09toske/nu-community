import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Pagination, PaginationContent, PaginationItem } from '@/components/ui/pagination'
import { RiAddFill } from '@remixicon/react'
import { ChevronLeft, ChevronRight, Copy, MoreVertical } from 'lucide-react'
import React, { useState } from 'react'
import DataDisplay from './strapi'

  
const Programs = () => {
    const date = new Date()

  return (
    <div className='px-5'>
    <Card
        className="overflow-hidden" x-chunk="dashboard-05-chunk-4"
    >
        <CardHeader className="flex flex-row items-start bg-muted/50">
        <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
            Programs
            <Button
                size="icon"
                variant="outline"
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
            >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy Order ID</span>
            </Button>
            </CardTitle>
            <CardDescription>Date: {date.toDateString()}</CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-1">
            <Button size="sm" variant="outline" className="h-8 gap-1">
            <RiAddFill className="h-3.5 w-3.5" />
            <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                Add Branch
            </span>
            </Button>
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline" className="h-8 w-8">
                <MoreVertical className="h-3.5 w-3.5" />
                <span className="sr-only">More</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Export</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Trash</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
        </CardHeader>
        <CardContent className="pt-5 flex flex-col gap-3">
        {/* The Company profile */}
        <Card className="grid gap-3 p-5">
            <div className="">
            <p className="font-semibold">Business Development</p>
            <CardDescription>This is the Nucleus branch that works with Software-Engineering</CardDescription>
            </div>
        </Card>
        <Card className="grid gap-3 p-5 ">
            <p className="font-semibold">Codiac</p>
            <CardDescription>People development program, we train people to find the best skills possible</CardDescription>
        </Card>
        <Card className="grid gap-3 p-5">
            <p className="font-semibold">Sales</p>
            <CardDescription>Take our products out to people</CardDescription>
        </Card>
        <Card className="grid gap-3 p-5">
            <p className="font-semibold">Issues</p>
            <CardDescription>Take our products out to people</CardDescription>
        </Card>
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
        <div className="text-xs text-muted-foreground">
            Updated <time dateTime="2023-11-23">{date.getFullYear()}</time>
        </div>
        <Pagination className="ml-auto mr-0 w-auto">
            <PaginationContent>
            <PaginationItem>
                <Button size="icon" variant="outline" className="h-6 w-6">
                <ChevronLeft className="h-3.5 w-3.5" />
                <span className="sr-only">Previous Order</span>
                </Button>
            </PaginationItem>
            <PaginationItem>
                <Button size="icon" variant="outline" className="h-6 w-6">
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="sr-only">Next Order</span>
                </Button>
            </PaginationItem>
            </PaginationContent>
        </Pagination>
        </CardFooter>
        <DataDisplay/>
    </Card>
    </div>
  )
}

export default Programs