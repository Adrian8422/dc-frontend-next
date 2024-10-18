"use client";
import React from 'react';
import { Title } from '../styled';
import { PageWrapper } from './styled';
import FilmList from '@/components/films/filmList/filmList';


const FilmPage: React.FC = () => {
    return (
      <PageWrapper>
        <Title>Star Wars Films</Title>
        <FilmList />
      </PageWrapper>
    );
  };

export default FilmPage;