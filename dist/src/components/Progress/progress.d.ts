import { CSSProperties, FC } from 'react';
import { ThemeProps } from '../Icon/icon';
export interface ProgressProps {
  /** 当前进度值  */
  percent: number;
  /** 进度条的高度 */
  strokeHeight?: number;
  /** 是否显示进度值 */
  showText?: boolean;
  /** 自定义的Style */
  styles?: CSSProperties;
  /** 进度条的主题 */
  theme?: Omit<ThemeProps, 'light'>;
}
declare const Progress: FC<ProgressProps>;
export default Progress;
