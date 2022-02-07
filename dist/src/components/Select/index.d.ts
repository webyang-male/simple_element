import { FC } from 'react';
import { SelectOptionProps } from './option';
import { SelectProps } from './select';
export declare type ISelectComponent = FC<SelectProps> & {
  Option: FC<SelectOptionProps>;
};
declare const TransSelect: ISelectComponent;
export default TransSelect;
