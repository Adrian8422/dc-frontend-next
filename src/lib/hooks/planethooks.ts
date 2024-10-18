import useSWR from "swr";
import { fetchAPI } from "../api";

export function useGetAllPlanets() {
  const { data, error, isLoading } = useSWR("/planets", fetchAPI);

  return {
    data,
    error,
    isLoading,
  };
}

export function useGetPlanetById(id: string) {
  const { data, error, isLoading } = useSWR("/planets/" + id, fetchAPI);

  return {
    data,
    error,
    isLoading,
  };
}
