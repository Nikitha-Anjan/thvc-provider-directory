import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 760px;
  margin: 28px auto;
  padding: 0 24px;
  text-align: center;
`;

const Card = styled.div`
  background: ${p => p.theme.colors.card};
  border-radius: ${p => p.theme.radius};
  padding: ${p => p.theme.spacing(3)};
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  border: 1px solid ${p => p.theme.colors.border};
`;

const Button = styled(Link)`
  display:inline-block;
  background: ${p => p.theme.colors.primary};
  color: white;
  padding: 10px 16px;
  border-radius: 10px;
  text-decoration: none;
  margin-top: 14px;
`;

export default function Confirmation() {
  const raw = localStorage.getItem('lastBooking');
  if (!raw) {
    return (
      <>
        <Header />
        <Wrapper><p>No booking found.</p><Link to="/">Back to directory</Link></Wrapper>
      </>
    );
  }
  const booking = JSON.parse(raw);

  return (
    <>
      <Header />
      <Wrapper>
        <Card>
          <h2>Booking Confirmed</h2>
          <p>You're booked with <strong>{booking.providerName}</strong></p>
          <p><strong>Date:</strong> {booking.date} &nbsp; <strong>Time:</strong> {booking.time}</p>
          <p><strong>Type:</strong> {booking.type}</p>
          <p><strong>Patient:</strong> {booking.name} — {booking.email}</p>
          <Button to="/">Back to Provider Directory</Button>
        </Card>
      </Wrapper>
    </>
  );
}