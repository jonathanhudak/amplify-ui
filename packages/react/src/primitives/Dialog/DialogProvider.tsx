import React, {
  ReactNode,
  HTMLProps,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { DialogContext } from './shared';

interface DialogProvider {
  children: ReactNode;
}

export function DialogProvider({
  children,
}: DialogProvider & HTMLProps<HTMLDialogElement>): ReactNode {
  const ref = useRef<HTMLDialogElement>(null);
  const openDialog = useCallback(() => {
    if (ref.current) {
      ref.current.showModal();
    }
  }, [ref]);

  const closeDialog = useCallback(() => {
    if (ref.current) {
      ref.current.close();
    }
  }, [ref]);

  const ctx = useMemo(
    () => ({
      dialogRef: ref,
      openDialog,
      closeDialog,
    }),
    [ref, openDialog, closeDialog]
  );

  return (
    <DialogContext.Provider value={ctx}>{children}</DialogContext.Provider>
  );
}
