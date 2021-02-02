import useSWR from 'swr';

export const useUser = () => {
  const { data, mutate, error } = useSWR('http://localhost:8080/api/v1/user/authenticate');

  console.log(error?.response);

  if (error?.response.status === 403 || error?.response.status === 401) {
    localStorage.removeItem('token');
  }

  const loading = !data && !error;
  const loggedOut = error?.response.status === 403 || error?.response.status === 401;

  return {
    loading,
    loggedOut,
    user: data,
    mutate
  };
};
