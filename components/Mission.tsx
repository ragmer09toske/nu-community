import { Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function VissionModel() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Mission</DialogTitle>
          <DialogDescription>
            Empower businesses with innovative tech solutions. Specializing in web & mobile app development. We build lasting relationships through high-quality solutions & trusted partnerships.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
