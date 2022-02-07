import { FC } from 'react';
import { MenuProps } from './menu';
import { MenuItemProps } from './menu-item';
import { SubMenuProps } from './sub-menu';
export declare type IMenuComponent = FC<MenuProps> & {
  Item: FC<MenuItemProps>;
  SubMenu: FC<SubMenuProps>;
};
declare const TransMenu: IMenuComponent;
export default TransMenu;
