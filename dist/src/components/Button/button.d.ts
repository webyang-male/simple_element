import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  FC,
  ReactNode,
} from 'react';
export declare type ButtonType = 'primary' | 'default' | 'danger' | 'link';
export declare type ButtonSize = 'lg' | 'sm';
export declare type ButtonShare = 'circle' | 'round';
export interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: ReactNode;
  href?: string;
  share?: ButtonShare;
}
declare type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<
  NativeButtonProps & AnchorButtonProps
>;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性
 * ### 引用方法
 * ```js
 * import { Button } from 'simple-element'
 * ```
 */
declare const Button: FC<ButtonProps>;
export default Button;
