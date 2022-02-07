import React, { CSSProperties, FC } from 'react';
declare type SelectedCallback = (selectedIndex: string) => void;
interface IMenuContext {
  index?: string;
  onselect?: SelectedCallback;
  mode?: 'horizontal' | 'vertical';
  defaultOpenSubMenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
export interface MenuProps {
  /**默认active的菜单栏索引值 */
  defaultIndex?: string;
  className?: string;
  /**菜单类型 横向或者纵向 */
  mode?: 'horizontal' | 'vertical';
  /** 自定义样式 */
  style?: CSSProperties;
  /**  点击菜单项触发的回调 */
  onSelect?: (selectedIndex: string) => void;
  /** 默认展开的下拉菜单 */
  defaultOpenSubMenus?: string[];
}
export declare const Menu: FC<MenuProps>;
export default Menu;
