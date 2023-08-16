import * as React from 'react';

import { ElementType, PrimitiveProps, BaseViewProps } from './view';

export interface BaseDialogProps extends BaseViewProps {
  /**
   * @description
   * The isDismissible property will affect whether the user can dismiss (close) the Dialog. Defaults to true.
   */
  isDismissible?: boolean;
}

export type DialogProps<Element extends ElementType = 'div'> = PrimitiveProps<
  BaseDialogProps,
  Element
>;
