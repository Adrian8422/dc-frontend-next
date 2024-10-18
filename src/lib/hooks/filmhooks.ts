import useSWR from "swr";
import { fetchAPI } from "../api";

export function useGetAllFilms() {
  const { data, error, isLoading } = useSWR("/films", fetchAPI);

  return {
    data,
    error,
    isLoading,
  };
}

export function useGetFilmById(id: string) {
  const { data, error, isLoading } = useSWR("/films/" + id, fetchAPI);

  return {
    data,
    error,
    isLoading,
  };
}
