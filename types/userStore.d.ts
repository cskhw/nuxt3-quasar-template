export interface IUser {
  id: number;
  email: string;
  password: string;
  name: string;
  nickname: string;
  posts: IPost[];
  created_at: string;
  updated_at: string;
}

export interface IPost {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
}
