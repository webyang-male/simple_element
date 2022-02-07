import { FC, ReactNode } from 'react';
export declare type tabType = ReactNode | ((index: number) => ReactNode);
export interface TabPaneProps {
  /** tab标题 */
  label?: string;
  /** 是否禁用
   * @default false
   */
  disabled?: boolean;
  /** 自定义tab标题 */
  tab?: ReactNode | ((index: number) => ReactNode);
}
declare const TabPane: FC<TabPaneProps>;
export default TabPane;
