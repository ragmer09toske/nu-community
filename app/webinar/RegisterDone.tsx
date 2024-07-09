import { Button, Dialog, DialogPanel } from '@tremor/react';
import React from 'react';

export function DialogHero() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="flex justify-center">
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        static={true}
        className="z-[100]"
      >
        <DialogPanel className="max-w-sm">
          <Button
            variant="light"
            className="mx-auto flex items-center"
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
        </DialogPanel>
      </Dialog>
    </div>
  );
}