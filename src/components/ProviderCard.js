import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled.div`
  background: ${p => p.theme.colors.card};
  border-radius: ${p => p.theme.radius};
  padding: ${p => p.theme.spacing(2)};
  display: flex;
  gap: ${p => p.theme.spacing(2)};
  align-items: flex-start;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  border: 1px solid ${p => p.theme.colors.border};
`;

const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
`;

const Meta = styled.div`
  flex: 1;
`;

const Name = styled.h3`
  margin: 0 0 6px 0;
  font-size: 1.05rem;
  color: ${p => p.theme.colors.primary};
`;

const Title = styled.div`
  color: ${p => p.theme.colors.muted};
  font-size: 0.95rem;
  margin-bottom: 8px;
`;

const Actions = styled.div`
  display:flex;
  flex-direction: column;
  gap:8px;
  align-items:flex-end;
`;

const ButtonLink = styled(Link)`
  background: ${p => p.theme.colors.primary};
  color: white;
  padding: 8px 12px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  display:inline-block;
`;

export default function ProviderCard({ provider }) {
  return (
    <Card>
      <Avatar src={provider.avatarUrl} alt={provider.name}/>
      <Meta>
        <Name>{provider.name}</Name>
        <Title>{provider.title} • {provider.location}</Title>
        <div style={{ color: '#374151', marginTop: 8 }}>{provider.bio.slice(0, 120)}{provider.bio.length > 120 ? '...' : ''}</div>
      </Meta>
      <Actions>
        <ButtonLink to={`/provider/${provider.id}`}>View Profile</ButtonLink>
        <ButtonLink to={`/book/${provider.id}`}>Book</ButtonLink>
      </Actions>
    </Card>
  );
}