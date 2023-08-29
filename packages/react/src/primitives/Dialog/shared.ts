import { createContext, useContext, Ref } from 'react';

export interface DialogContextType {
  dialogRef: Ref<HTMLDialogElement> | undefined;
  openDialog: (() => void | undefined) | undefined;
  closeDialog: (() => void | undefined) | undefined;
}

export const DialogContext = createContext<DialogContextType>({
  dialogRef: undefined,
  openDialog: () => undefined,
  closeDialog: () => undefined,
});

export function useDialogContext(): DialogContextType {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a DialogProvider');
  }
  return context;
}
