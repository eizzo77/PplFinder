import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nationalityParams, setNationalityParams] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, [nationalityParams]);

  async function fetchUsers() {
    setIsLoading(true);
    let path = `https://randomuser.me/api/?results=25&&page=1&nat=${nationalityParams.join()}`;
    const response = await axios.get(path);
    console.log(path);
    setIsLoading(false);
    setUsers(response.data.results);
  }

  return { users, isLoading, fetchUsers, nationalityParams, setNationalityParams };
};
