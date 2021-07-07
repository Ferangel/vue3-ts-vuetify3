import httpClient from './client/http-config';

const endpoint = '/api/users';

const ferRequest = {
  name: 'fer',
  password: '123456',
  passwordConfirmation: '123456',
  email: 'fer3.quaglietta@gmail.com',
};
class ServiceTest {
  public fer!: string;

  public createUser = () => httpClient.post(endpoint, ferRequest).then((res) => res)
}
export default new ServiceTest();
