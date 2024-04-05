import axios from "axios";

export async function fetcher(path: string) {
  const response: any = await axios.get(`http://localhost:8000/${path}`, {
    headers: {
      accessToken: "dummyAccessToken",
    },
  });

  return response.data;
}
