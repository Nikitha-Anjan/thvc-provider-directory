import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import ProviderCard from '../components/ProviderCard';
import { fetchProviders } from '../api/providers';

const Container = styled.div`
  max-width: 1100px;
  margin: 28px auto;
  padding: 0 24px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${p => p.theme.spacing(2)};
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid ${p => p.theme.colors.border};
  font-size: 15px;
  margin-bottom: ${p => p.theme.spacing(3)};
  outline: none;
  &:focus {
    border-color: ${p => p.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(45, 156, 219, 0.15);
  }
`;

export default function ProviderList() {
  const [providers, setProviders] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchProviders().then(data => {
      setProviders(data);
      setFiltered(data);
    });
  }, []);

  useEffect(() => {
    const q = search.toLowerCase();
    setFiltered(
      providers.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.title.toLowerCase().includes(q)
      )
    );
  }, [search, providers]);

  return (
    <>
      <Header />
      <Container>
        <h2>Provider Directory</h2>
        <p style={{ color: '#6B7280', marginBottom: '16px' }}>
          Browse specialists and book appointments directly.
        </p>

        <SearchBar
          type="text"
          placeholder="Search by name or profession (e.g. Tamara, MSW, RCC...)"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Grid>
          {filtered.length ? (
            filtered.map((p) => <ProviderCard key={p.id} provider={p} />)
          ) : (
            <p style={{ color: '#9CA3AF', marginTop: '12px' }}>
              No providers found.
            </p>
          )}
        </Grid>
      </Container>
    </>
  );
}