export interface IPost {
  id: string;
  createdAt: string;
  image?: string;
  description: string;
  user: IUser;
  nofLikes: number;
}
export interface IUser {
  id: string;
  username: string;
  name: string;
  bio?: string;
  posts?: IPost[];
}

export interface IPlace {
  id: string;
  mainImage: string;
  images: string[];
  title: string;
  nofLikes: number;
  description: string;
  source: string;
  category: string[];
}

export interface ICategory {
  id: string;
  image: string;
  name: string;
}
