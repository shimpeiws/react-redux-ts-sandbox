import * as React from 'react';
import styles from './style';

const { StyledWrapper } = styles;

interface OwnProps {
  width: number;
}

export const ComponentWithChildren: React.FC<OwnProps> = ({ children, width }) => (
  <StyledWrapper width={width}>{children}</StyledWrapper>
);
