import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import { fetchProvider } from '../api/providers';

const Wrapper = styled.div`
  max-width: 1000px;
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

const HeaderRow = styled.div`
  display:flex;
  gap: ${p => p.theme.spacing(3)};
  align-items:flex-start;
`;

const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 8px;
  object-fit: cover;
`;

const BookButton = styled.button`
  background: ${p => p.theme.colors.primary};
  color: white;
  padding: 10px 14px;
  border-radius: 10px;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;

export default function ProviderProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    fetchProvider(id).then(setProvider).catch(() => setProvider(null));
  }, [id]);

  if (!provider) return (
    <>
      <Header />
      <Wrapper><p>Loading...</p></Wrapper>
    </>
  );

  const goToBook = () => navigate(`/book/${provider.id}`);

  return (
    <>
      <Header />
      <Wrapper>
        <Card>
          <HeaderRow>
            <Avatar src={provider.avatarUrl} alt={provider.name}/>
            <div style={{flex:1}}>
              <h2>{provider.name}</h2>
              <div style={{color: '#6B7280'}}>{provider.title} • {provider.location}</div>
              <div style={{marginTop:12}}><strong>Education:</strong> {provider.education}</div>
              <div style={{marginTop:8}}><strong>Languages:</strong> {provider.languages.join(', ')}</div>
            </div>
            <div style={{display:'flex', flexDirection:'column', gap:12}}>
              <BookButton onClick={goToBook}>Book Appointment</BookButton>
              <Link to="/" style={{alignSelf:'center', color:'#6B7280'}}>← Back</Link>
            </div>
          </HeaderRow>

          <hr style={{margin:'20px 0', border: 'none', borderTop:`1px solid ${provider ? '#EEF2FF' : '#eee'}`}}/>

          <div style={{lineHeight:1.6}}>{provider.bio}</div>
        </Card>
      </Wrapper>
    </>
  );
}