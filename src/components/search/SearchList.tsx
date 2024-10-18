import React, { useEffect, useState } from "react";
import {
  ListContainer,
  SearchForm,
  ResultItem,
  Pagination,
  Title,
} from "./styled";
import { searchAPI } from "@/lib/api";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";

interface Film {
  _id: string;
  title: string;
}

interface Person {
  _id: string;
  name: string;
}

interface Planet {
  _id: string;
  name: string;
}

interface Starship {
  _id: string;
  name: string;
}

interface ApiResponse {
  films: Film[];
  people: Person[];
  planets: Planet[];
  starships: Starship[];
}

const SearchList: React.FC = () => {
  const [query, setQuery] = useState("");
  const [limit] = useState(2);
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState<ApiResponse | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigateTo = useRouter();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    setOffset(0);
    setCurrentPage(1);
  };

  const loadData = async () => {
    const response = await searchAPI(query, limit, offset);
    setData(response);
  };

  useEffect(() => {
    loadData();
  }, [query, offset]);

  const totalItems =
    (data?.films.length || 0) +
    (data?.people.length || 0) +
    (data?.planets.length || 0) +
    (data?.starships.length || 0);
  const totalPages = Math.ceil(totalItems / limit);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setOffset(currentPage * limit);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setOffset((currentPage - 2) * limit);
    }
  };

  return (
    <div>
      <SearchForm onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search characters, planets..."
        />
        <button type="submit">
          <AiOutlineSearch size={24} />
        </button>
      </SearchForm>

      <ListContainer>
        {data && (
          <div>
            {data.films && data.films.length > 0 && (
              <div>
                <h2>Films</h2>
                {data.films.map((item) => (
                  <ResultItem
                    onClick={() => navigateTo.push("/films/" + item._id)}
                    key={item._id}
                  >
                    <Title>{item.title}</Title>
                  </ResultItem>
                ))}
              </div>
            )}
            {data.people && data.people.length > 0 && (
              <div>
                <h2>People</h2>
                {data.people.map((item) => (
                  <ResultItem
                    onClick={() => navigateTo.push("/people/" + item._id)}
                    key={item._id}
                  >
                    <Title>{item.name}</Title>
                  </ResultItem>
                ))}
              </div>
            )}
            {data.planets && data.planets.length > 0 && (
              <div>
                <h2>Planets</h2>
                {data.planets.map((item) => (
                  <ResultItem
                    onClick={() => navigateTo.push("/planets/" + item._id)}
                    key={item._id}
                  >
                    <Title>{item.name}</Title>
                  </ResultItem>
                ))}
              </div>
            )}
            {data.starships && data.starships.length > 0 && (
              <div>
                <h2>Starships</h2>
                {data.starships.map((item) => (
                  <ResultItem
                    onClick={() => navigateTo.push("/starships/" + item._id)}
                    key={item._id}
                  >
                    <Title>{item.name}</Title>
                  </ResultItem>
                ))}
              </div>
            )}
          </div>
        )}
      </ListContainer>

      <Pagination>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          ⟵ Anterior
        </button>
        <span>
          Página {currentPage} de {totalPages}
        </span>
        {currentPage < totalPages && (
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Siguiente ⟶
          </button>
        )}
      </Pagination>
    </div>
  );
};

export default SearchList;
