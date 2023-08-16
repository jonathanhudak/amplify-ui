import * as React from 'react';
import classNames from 'classnames';
import { isFunction } from '@aws-amplify/ui';

import { ComponentClassNames, ComponentText } from '../shared/constants';
import { classNameModifier } from '../shared/utils';
import {
  AlertProps,
  BaseAlertProps,
  ForwardRefPrimitive,
  Primitive,
  DialogProps,
} from '../types';
// import { View } from '../View';
// import { Flex } from '../Flex';
// import { Button } from '../Button';
// import { IconClose } from '../Icon/internal';

const DialogPrimitive: Primitive<DialogProps, 'div'> = (
  {
    isDismissible = false,
    ...rest
  },
  ref
) => {
  return <dialog open>Boom <form method="dialog"><button>close</button></form></dialog>
};

/**
 * [📖 Docs](https://ui.docs.amplify.aws/react/components/dialog)
 */
export const Dialog: ForwardRefPrimitive<DialogProps, 'div'> =
  React.forwardRef(DialogPrimitive);

  Dialog.displayName = 'Dialog';
