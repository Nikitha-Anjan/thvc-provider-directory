import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Bar = styled.header`
  background: ${p => p.theme.colors.primary};
  color: white;
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(5)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 6px rgba(0,0,0,0.08);
`;

const Title = styled(Link)`
  color: white;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
`;

export default function Header() {
  return (
    <Bar>
      <Title to="/">Patient Booking Portal</Title>
    </Bar>
  );
}