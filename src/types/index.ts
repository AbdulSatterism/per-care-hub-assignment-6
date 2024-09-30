export interface IAnimal {
  _id: string;
  image: string;
  tips: string[];
  description: string;
  category: ICategory;
  user: IUser;
  like: number;
  disLike: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ICategory {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
  image: string;
  phone: string;
  role: string;
  payment: string;
  follower: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
