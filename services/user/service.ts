import { request } from '@/utils/requests';
class User {
  static get() {
    return request.get<{ user: UserType }>('/user/token');
  }
}

export default User;
