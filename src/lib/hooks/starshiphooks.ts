import useSWR from "swr";
import { fetchAPI } from "../api";

export function useGetAllStarships() {
  const { data, error, isLoading } = useSWR("/starships", fetchAPI);

  return {
    data,
    error,
    isLoading,
  };
}

export function useGetStarshipById(id: string) {
  const { data, error, isLoading } = useSWR("/starships/" + id, fetchAPI);

  return {
    data,
    error,
    isLoading,
  };
}
