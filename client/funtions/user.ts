// 로그인 이후에 token 을 axios 의 config 에 default 로 담는다.
// -> login api 내부에서 호출되어야할듯..
import axios from 'axios';

// axios.interceptors.request.use((config) => {
//     config.headers.Authorization = 'Bearer ' + token;
//     return config;
// });

const setAuthorization = (token: string) => {
  localStorage.setItem('token', token);
};

const removeAuthorization = () => {
  localStorage.removeItem('token');
};

export const login = async () => {
  try {
    const res = await axios.post(
      'http://localhost:8080/api/v1/user/login',
      {
        email: 'the2792@gmail.com',
        password: '1234'
      },
      {
        withCredentials: true
      }
    );
    setAuthorization(res.data.token);
  } catch (e) {
    console.log(e);
  }
};

export const logout = async () => {
  try {
    await axios.get('http://localhost:8080/api/v1/user/logout', {
      withCredentials: true
    });
    removeAuthorization();
  } catch (e) {
    console.log(e);
  }
};
