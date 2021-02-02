import axios, { AxiosResponse } from 'axios';

// API 의 모든 에러에서 인증에러가 나면, 안전하게 토큰을 지워준다.
axios.interceptors.response.use((res: AxiosResponse) => {
  const isAuthorizeError = res.status === 403 || 401;
  if (isAuthorizeError) {
    localStorage.removeItem('token');
  }
  return res;
});

const fetcher = async (url: string) => {
  const token = localStorage.getItem('token');
  const res = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
};

export default fetcher;
