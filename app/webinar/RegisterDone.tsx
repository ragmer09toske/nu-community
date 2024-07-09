import { Button, Dialog, DialogPanel } from '@tremor/react';
import React, { useContext } from 'react';
import { WebinarContext } from './AppContex';

export function DialogHero() {
  let {setIsOpen} = useContext(WebinarContext);
  let {isOpen} = useContext(WebinarContext);

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
            Registeration Done, See you on the Next step <br/>
            Thank You for participating
          </Button>
        </DialogPanel>
      </Dialog>
    </div>
  );
}