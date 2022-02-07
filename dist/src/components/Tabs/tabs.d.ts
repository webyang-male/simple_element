import { FC } from 'react';
export interface TabsProps {
  /** 初始化选中面板的 key，如果没有设置 activeKey */
  defaultIndex?: number;
  /**切换面板的回调 */
  onChange?: (index: number) => void;
  /** 可扩展的ClassName */
  className?: string;
  /** Tabs的样式类型, 两种可选 默认为line */
  type?: 'line' | 'card';
  /** 是否开启底部导航栏切换动画, 只有为type为line时生效 */
  animated?: boolean;
  /** 底部导航栏模式 只在animated 为true  type为line 时生效 */
  activeBarMode?: 'center' | 'fill';
  /** 标签居中显示*/
  centered?: boolean;
}
declare const Tabs: FC<TabsProps>;
export default Tabs;
