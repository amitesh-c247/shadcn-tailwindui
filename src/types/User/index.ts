export interface IUserList {
  id: string;
  name: string;
  email: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IUserListResponse {
  message?: string;
  data: {
    users: IUserList[];
    total: number;
  };
}
