import { MouseEvent, ReactNode } from 'react';
import cls from './index.module.scss';

type TProps = {
  isOpened: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export const Modal = ({ children, onClose, isOpened }: TProps) => {
  const handleClickOverlay = () => {
    onClose();
  };

  const handleClickWrapper = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  if(!isOpened) {
    return null;
  }

  return (
    <div className={cls.Modal} onClick={handleClickOverlay}>
      <div className={cls.ModalWrapper} onClick={handleClickWrapper}>
        {children}
      </div>
    </div>
  );
};
