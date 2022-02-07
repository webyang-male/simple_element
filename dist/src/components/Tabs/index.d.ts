import { FC } from 'react';
import { TabPaneProps } from './tab-pane';
import { TabsProps } from './tabs';
export declare type ITabsComponent = FC<TabsProps> & {
  Pane: FC<TabPaneProps>;
};
declare const TransTabs: ITabsComponent;
export default TransTabs;
