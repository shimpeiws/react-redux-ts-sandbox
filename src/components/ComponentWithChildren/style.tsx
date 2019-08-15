import styled from 'styled-components';

interface StyledWrapperProps {
  width: number;
}

const StyledWrapper = styled.div`
  width: ${(props: StyledWrapperProps) => props.width}px;
  min-height: 90vh;
  margin-top: 48px;
  margin-left: 48px;
  margin-right: 48px;
  padding-top: 50px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default {
  StyledWrapper
};
