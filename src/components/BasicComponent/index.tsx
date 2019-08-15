import * as React from 'react';
import styles from './style';

const { StyledP } = styles;

interface OwnProps {
  num: number;
}

export const BasicComponent: React.FC<OwnProps> = ({ children, num }) => (
  <StyledP>score: {num}</StyledP>
);
