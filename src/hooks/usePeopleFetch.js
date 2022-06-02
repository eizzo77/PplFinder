import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { NationalitiesContext } from "../AppContexts/NationalitiesContext";
import { PageNumberContext } from "../AppContexts/PageNumberContext";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { nationalityParams } = useContext(NationalitiesContext);
  const { pageNumber, setPageNumber } = useContext(PageNumberContext);

  useEffect(() => {
    users.length = 0;
    setPageNumber(1);
    fetchUsers();
  }, [nationalityParams]);

  useEffect(() => {
    fetchUsers();
  }, [pageNumber]);

  async function fetchUsers() {
    setIsLoading(true);
    let path = `https://randomuser.me/api/?results=25&&page=${pageNumber}&nat=${nationalityParams.join()}`;
    const response = await axios.get(path);
    setIsLoading(false);
    setUsers([...users, ...response.data.results]);
  }

  return { users, isLoading };
};
