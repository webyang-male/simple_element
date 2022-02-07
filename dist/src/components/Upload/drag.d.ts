import { FC } from 'react';
interface DraggerProps {
  onFile: (files: FileList) => void;
}
declare const Dragger: FC<DraggerProps>;
export default Dragger;
