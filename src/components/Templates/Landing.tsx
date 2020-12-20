import * as React from 'react';
import styled from 'styled-components';
import * as colors from '../particles/colors';
import { Logo } from '../atom/Logo';
import { Title } from '../atom/Typography';

const Row = styled.div`
  background-color: ${colors.WHITE};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Column = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Landing: React.FC<unknown> = () => {
  return (
    <Row>
      <Column>
        <Logo />
        <Title>saidgeek.land</Title>
      </Column>
    </Row>
  );
};
