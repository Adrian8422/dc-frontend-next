import React from 'react';
import FilmItem from '../filmItem/filmItem';
import { useGetAllFilms } from '@/lib/hooks/filmhooks';
import { ListContainer } from './styled';

type Film = {
    _id: string;
    title: string;
    director: string;
    producer: string;
    release_date: string;
};

const FilmList: React.FC = () => {
    const { data, error, isLoading } = useGetAllFilms();

    if (isLoading) return <p>Cargando...</p>;
    if (error) return <p>Error al cargar los datos: {error.message}</p>;

    return (
        <ListContainer>
            {data?.map((film: Film) => (
                <FilmItem key={film._id} film={film} />
            ))}
        </ListContainer>
    );
};

export default FilmList;
