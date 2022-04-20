import React from 'react';
import styled from 'styled-components';
import { ComponentProps } from '../types';

const LayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: rgb(9, 9, 121);
  background: linear-gradient(
    138deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
`;

const LayoutInner = styled.div`
  min-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const Title = styled.h1`
  margin: 10px 0;
  font-size: 24px;
  color: white;
  flex: 0;
  text-align: center;
`;

const Content = styled.div`
  flex: 1 1 auto;
  background: white;
  border-radius: 20px;
  filter: drop-shadow(0 25px 25px rgba(0, 0, 0, 0.25));
  border: 1px solid rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Layout = ({ children }: ComponentProps) => (
  <LayoutWrapper>
    <LayoutInner>
      <Title>OMDB Search</Title>
      <Content>{children}</Content>
    </LayoutInner>
  </LayoutWrapper>
);

export default Layout;
