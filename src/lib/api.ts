const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;

export async function fetchAPI(input: RequestInfo) {
  const url = BASE_URL + input;

  try {
    const res = await fetch(url);

    if (res.status >= 200 && res.status < 300) {
      return await res.json();
    } else {
      throw {
        message: "Hubo un error",
        status: res.status,
      };
    }
  } catch (error) {
    console.error("Error en la solicitud:", error);
    throw error;
  }
}

export async function searchAPI(query: string, limit: number, offset: number) {
  const url = query
    ? `/search?query=${query}&limit=${limit}&offset=${offset}`
    : `/search?limit=${limit}&offset=${offset}`;
  return await fetchAPI(url);
}
