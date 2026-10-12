import type { ElementType, ReactNode } from 'react';
import styles from './Container.module.css';

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** The 1050px content column (115px margins at 1280px), with a 16px gutter on small screens. */
export function Container({ as: Tag = 'div', className, children }: ContainerProps) {
  return <Tag className={[styles.container, className].filter(Boolean).join(' ')}>{children}</Tag>;
}
