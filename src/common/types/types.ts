import { LOGIN_TYPE } from 'src/common/types/enums';

export type TokenPayload = {
  type: LOGIN_TYPE;
  id: string;
  email: string;
  storeId: string;
  role: {
    id: string;
    name: string;
  };
};

export interface UserTokenObject extends TokenPayload {
  iat: number;
  exp: number;
}
