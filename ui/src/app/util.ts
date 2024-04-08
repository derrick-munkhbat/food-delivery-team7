"use client"
import { useState } from "react";
import axios from "axios";

export async function fetcher(path: string) {
  const response: any = await axios.get(`http://localhost:8000/${path}`, {
    headers: {
      accessToken: "dummyAccessToken",
    },
  });

  return response.data;
}
export function fetchUsers(){
  const [users, setUsers] = useState([])
  fetch("http://localhost:3000/user/create")
    .then((res) => res.json())
    .then((data) => setUsers(data)).catch((error)=> {
      console.log("aldaa garlaa");
    });
}
