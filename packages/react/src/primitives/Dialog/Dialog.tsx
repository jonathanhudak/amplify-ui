import * as React from 'react';
import type { Primitive, DialogProps, ForwardRefPrimitive } from '../types';

const DialogPrimitive: Primitive<DialogProps, 'dialog'> = (props, ref) => {
  return <dialog open {...props} ref={ref} />;
};

type DialogType = ForwardRefPrimitive<DialogProps, 'dialog'> & {};

/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/dialog)
 */
const Dialog: DialogType = Object.assign(React.forwardRef(DialogPrimitive), {});

Dialog.displayName = 'Dialog';

export { Dialog };
