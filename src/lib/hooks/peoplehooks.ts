import useSWR from "swr";
import { fetchAPI } from "../api";

export function useGetAllPeople() {
  const { data, error, isLoading } = useSWR("/people", fetchAPI);

  return {
    data,
    error,
    isLoading,
  };
}
export function useGetPeopleById(id: string) {
  const { data, error, isLoading } = useSWR("/people/" + id, fetchAPI);

  return {
    data,
    error,
    isLoading,
  };
}
