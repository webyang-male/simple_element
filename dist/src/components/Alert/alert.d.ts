import { FC, MouseEvent } from 'react';
export interface AlertProps {
  /** 标题 */
  title: string;
  /** 内容描述 */
  description?: string;
  /** Alert类型
   * @default default
   */
  type?: 'success' | 'default' | 'danger' | 'warning';
  /**
   * 关闭时触发的回调函数
   */
  onClose?: (e: MouseEvent<HTMLSpanElement>) => void;
  /** closable 是否显示关闭按钮
   * @default true
   */
  closable?: boolean;
}
export declare type AlertType = 'success' | 'default' | 'danger' | 'warning';
declare const Alert: FC<AlertProps>;
export default Alert;
