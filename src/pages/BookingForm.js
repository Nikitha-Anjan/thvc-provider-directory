import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import { fetchProvider } from '../api/providers';

const Wrapper = styled.div`
  max-width: 760px;
  margin: 28px auto;
  padding: 0 24px;
`;

const Card = styled.div`
  background: ${p => p.theme.colors.card};
  border-radius: ${p => p.theme.radius};
  padding: ${p => p.theme.spacing(3)};
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  border: 1px solid ${p => p.theme.colors.border};
`;

const Row = styled.div`
  display:flex;
  gap: ${p => p.theme.spacing(2)};
  margin-bottom: ${p => p.theme.spacing(2)};
`;

const Input = styled.input`
  flex:1;
  padding:10px;
  border-radius:8px;
  border:1px solid #D1D5DB;
  font-size:14px;
`;

const Select = styled.select`
  flex:1;
  padding:10px;
  border-radius:8px;
  border:1px solid #D1D5DB;
  font-size:14px;
`;

const Button = styled.button`
  background: ${p => p.theme.colors.primary};
  color: white;
  padding: 10px 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 600;
`;

export default function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    type: '',
    date: '',
    time: ''
  });

  useEffect(() => {
    fetchProvider(id).then(setProvider).catch(() => setProvider(null));
  }, [id]);

  if (!provider) return (
    <>
      <Header />
      <Wrapper><p>Loading...</p></Wrapper>
    </>
  );

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // basic validation
    if (!form.name || !form.email || !form.type || !form.date || !form.time) {
      alert('Please fill all fields.');
      return;
    }
    const booking = {
      providerId: provider.id,
      providerName: provider.name,
      ...form,
      createdAt: new Date().toISOString()
    };
    // save simulated booking (localStorage)
    localStorage.setItem('lastBooking', JSON.stringify(booking));
    // navigate to confirmation
    navigate('/confirmation');
  };

  return (
    <>
      <Header />
      <Wrapper>
        <Card>
          <h2>Book with {provider.name}</h2>
          <p style={{color:'#6B7280'}}>{provider.title} • {provider.location}</p>

          <form onSubmit={handleSubmit}>
            <Row>
              <Input name="name" placeholder="Your full name" value={form.name} onChange={handleChange} />
              <Input name="email" placeholder="Email address" value={form.email} onChange={handleChange} />
            </Row>

            <Row>
              <Select name="type" value={form.type} onChange={handleChange}>
                <option value="">Appointment type</option>
                <option value="Initial Consultation">Initial Consultation</option>
                <option value="Therapy Session">Therapy Session</option>
                <option value="Follow-up">Follow-up</option>
              </Select>
              <Input name="date" type="date" value={form.date} onChange={handleChange} />
              <Input name="time" type="time" value={form.time} onChange={handleChange} />
            </Row>

            <div style={{display:'flex', gap:12, justifyContent:'flex-end', marginTop:16}}>
              <Button type="submit">Confirm Booking</Button>
            </div>
          </form>
        </Card>
      </Wrapper>
    </>
  );
}