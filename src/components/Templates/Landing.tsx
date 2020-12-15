import * as React from 'react';
import styled from 'styled-components';
import * as colors from '../particles/colors';
import { Logo } from '../atom/Logo';
import { H1 } from '../atom/Title';

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
        <H1>saidgeek.land</H1>
      </Column>
    </Row>
  );
};
