/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLikePlacesInput = {
  id?: string | null,
  placeID: string,
  userID: string,
};

export type ModelLikePlacesConditionInput = {
  placeID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelLikePlacesConditionInput | null > | null,
  or?: Array< ModelLikePlacesConditionInput | null > | null,
  not?: ModelLikePlacesConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type LikePlaces = {
  __typename: "LikePlaces",
  id: string,
  placeID: string,
  userID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateLikePlacesInput = {
  id: string,
  placeID?: string | null,
  userID?: string | null,
};

export type DeleteLikePlacesInput = {
  id: string,
};

export type CreatePlaceInput = {
  id?: string | null,
  mainImage?: string | null,
  images?: Array< string > | null,
  title: string,
  source?: string | null,
  description?: string | null,
  nofLikes: number,
};

export type ModelPlaceConditionInput = {
  mainImage?: ModelStringInput | null,
  images?: ModelStringInput | null,
  title?: ModelStringInput | null,
  source?: ModelStringInput | null,
  description?: ModelStringInput | null,
  nofLikes?: ModelIntInput | null,
  and?: Array< ModelPlaceConditionInput | null > | null,
  or?: Array< ModelPlaceConditionInput | null > | null,
  not?: ModelPlaceConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Place = {
  __typename: "Place",
  id: string,
  mainImage?: string | null,
  images?: Array< string > | null,
  title: string,
  source?: string | null,
  description?: string | null,
  nofLikes: number,
  users?: ModelUserPlaceConnection | null,
  LikePlaces?: ModelLikePlacesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserPlaceConnection = {
  __typename: "ModelUserPlaceConnection",
  items:  Array<UserPlace | null >,
  nextToken?: string | null,
};

export type UserPlace = {
  __typename: "UserPlace",
  id: string,
  placeId: string,
  userId: string,
  place: Place,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  username: string,
  bio?: string | null,
  website?: string | null,
  nofPosts: number,
  nofLikes: number,
  Posts?: ModelLikePostConnection | null,
  Likes?: ModelLikePostConnection | null,
  PostLikes?: ModelUserPostConnection | null,
  Places?: ModelUserPlaceConnection | null,
  LikePlaces?: ModelLikePlacesConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLikePostConnection = {
  __typename: "ModelLikePostConnection",
  items:  Array<LikePost | null >,
  nextToken?: string | null,
};

export type LikePost = {
  __typename: "LikePost",
  id: string,
  userID: string,
  postID: string,
  createdAt: string,
  updatedAt: string,
};

export type ModelUserPostConnection = {
  __typename: "ModelUserPostConnection",
  items:  Array<UserPost | null >,
  nextToken?: string | null,
};

export type UserPost = {
  __typename: "UserPost",
  id: string,
  postId: string,
  userId: string,
  post: Post,
  user: User,
  createdAt: string,
  updatedAt: string,
};

export type Post = {
  __typename: "Post",
  id: string,
  description?: string | null,
  image?: string | null,
  video?: string | null,
  nofLikes: number,
  userID: string,
  users?: ModelUserPostConnection | null,
  Likes?: ModelLikePostConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLikePlacesConnection = {
  __typename: "ModelLikePlacesConnection",
  items:  Array<LikePlaces | null >,
  nextToken?: string | null,
};

export type UpdatePlaceInput = {
  id: string,
  mainImage?: string | null,
  images?: Array< string > | null,
  title?: string | null,
  source?: string | null,
  description?: string | null,
  nofLikes?: number | null,
};

export type DeletePlaceInput = {
  id: string,
};

export type CreateLikePostInput = {
  id?: string | null,
  userID: string,
  postID: string,
};

export type ModelLikePostConditionInput = {
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelLikePostConditionInput | null > | null,
  or?: Array< ModelLikePostConditionInput | null > | null,
  not?: ModelLikePostConditionInput | null,
};

export type UpdateLikePostInput = {
  id: string,
  userID?: string | null,
  postID?: string | null,
};

export type DeleteLikePostInput = {
  id: string,
};

export type CreatePostInput = {
  id?: string | null,
  description?: string | null,
  image?: string | null,
  video?: string | null,
  nofLikes: number,
  userID: string,
};

export type ModelPostConditionInput = {
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  video?: ModelStringInput | null,
  nofLikes?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostConditionInput | null > | null,
  or?: Array< ModelPostConditionInput | null > | null,
  not?: ModelPostConditionInput | null,
};

export type UpdatePostInput = {
  id: string,
  description?: string | null,
  image?: string | null,
  video?: string | null,
  nofLikes?: number | null,
  userID?: string | null,
};

export type DeletePostInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  username: string,
  bio?: string | null,
  website?: string | null,
  nofPosts: number,
  nofLikes: number,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  website?: ModelStringInput | null,
  nofPosts?: ModelIntInput | null,
  nofLikes?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  username?: string | null,
  bio?: string | null,
  website?: string | null,
  nofPosts?: number | null,
  nofLikes?: number | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateUserPlaceInput = {
  id?: string | null,
  placeId: string,
  userId: string,
};

export type ModelUserPlaceConditionInput = {
  placeId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserPlaceConditionInput | null > | null,
  or?: Array< ModelUserPlaceConditionInput | null > | null,
  not?: ModelUserPlaceConditionInput | null,
};

export type UpdateUserPlaceInput = {
  id: string,
  placeId?: string | null,
  userId?: string | null,
};

export type DeleteUserPlaceInput = {
  id: string,
};

export type CreateUserPostInput = {
  id?: string | null,
  postId: string,
  userId: string,
};

export type ModelUserPostConditionInput = {
  postId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserPostConditionInput | null > | null,
  or?: Array< ModelUserPostConditionInput | null > | null,
  not?: ModelUserPostConditionInput | null,
};

export type UpdateUserPostInput = {
  id: string,
  postId?: string | null,
  userId?: string | null,
};

export type DeleteUserPostInput = {
  id: string,
};

export type ModelLikePlacesFilterInput = {
  id?: ModelIDInput | null,
  placeID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelLikePlacesFilterInput | null > | null,
  or?: Array< ModelLikePlacesFilterInput | null > | null,
  not?: ModelLikePlacesFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPlaceFilterInput = {
  id?: ModelIDInput | null,
  mainImage?: ModelStringInput | null,
  images?: ModelStringInput | null,
  title?: ModelStringInput | null,
  source?: ModelStringInput | null,
  description?: ModelStringInput | null,
  nofLikes?: ModelIntInput | null,
  and?: Array< ModelPlaceFilterInput | null > | null,
  or?: Array< ModelPlaceFilterInput | null > | null,
  not?: ModelPlaceFilterInput | null,
};

export type ModelPlaceConnection = {
  __typename: "ModelPlaceConnection",
  items:  Array<Place | null >,
  nextToken?: string | null,
};

export type ModelLikePostFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  postID?: ModelIDInput | null,
  and?: Array< ModelLikePostFilterInput | null > | null,
  or?: Array< ModelLikePostFilterInput | null > | null,
  not?: ModelLikePostFilterInput | null,
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  video?: ModelStringInput | null,
  nofLikes?: ModelIntInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelPostFilterInput | null > | null,
  or?: Array< ModelPostFilterInput | null > | null,
  not?: ModelPostFilterInput | null,
};

export type ModelPostConnection = {
  __typename: "ModelPostConnection",
  items:  Array<Post | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  username?: ModelStringInput | null,
  bio?: ModelStringInput | null,
  website?: ModelStringInput | null,
  nofPosts?: ModelIntInput | null,
  nofLikes?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelUserPlaceFilterInput = {
  id?: ModelIDInput | null,
  placeId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserPlaceFilterInput | null > | null,
  or?: Array< ModelUserPlaceFilterInput | null > | null,
  not?: ModelUserPlaceFilterInput | null,
};

export type ModelUserPostFilterInput = {
  id?: ModelIDInput | null,
  postId?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  and?: Array< ModelUserPostFilterInput | null > | null,
  or?: Array< ModelUserPostFilterInput | null > | null,
  not?: ModelUserPostFilterInput | null,
};

export type ModelSubscriptionLikePlacesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  placeID?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLikePlacesFilterInput | null > | null,
  or?: Array< ModelSubscriptionLikePlacesFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPlaceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  mainImage?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  source?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  nofLikes?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionPlaceFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlaceFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionLikePostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  userID?: ModelSubscriptionIDInput | null,
  postID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionLikePostFilterInput | null > | null,
  or?: Array< ModelSubscriptionLikePostFilterInput | null > | null,
};

export type ModelSubscriptionPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  video?: ModelSubscriptionStringInput | null,
  nofLikes?: ModelSubscriptionIntInput | null,
  userID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionPostFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
  bio?: ModelSubscriptionStringInput | null,
  website?: ModelSubscriptionStringInput | null,
  nofPosts?: ModelSubscriptionIntInput | null,
  nofLikes?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionUserPlaceFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  placeId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserPlaceFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserPlaceFilterInput | null > | null,
};

export type ModelSubscriptionUserPostFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  postId?: ModelSubscriptionIDInput | null,
  userId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionUserPostFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserPostFilterInput | null > | null,
};

export type CreateLikePlacesMutationVariables = {
  input: CreateLikePlacesInput,
  condition?: ModelLikePlacesConditionInput | null,
};

export type CreateLikePlacesMutation = {
  createLikePlaces?:  {
    __typename: "LikePlaces",
    id: string,
    placeID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLikePlacesMutationVariables = {
  input: UpdateLikePlacesInput,
  condition?: ModelLikePlacesConditionInput | null,
};

export type UpdateLikePlacesMutation = {
  updateLikePlaces?:  {
    __typename: "LikePlaces",
    id: string,
    placeID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLikePlacesMutationVariables = {
  input: DeleteLikePlacesInput,
  condition?: ModelLikePlacesConditionInput | null,
};

export type DeleteLikePlacesMutation = {
  deleteLikePlaces?:  {
    __typename: "LikePlaces",
    id: string,
    placeID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlaceMutationVariables = {
  input: CreatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type CreatePlaceMutation = {
  createPlace?:  {
    __typename: "Place",
    id: string,
    mainImage?: string | null,
    images?: Array< string > | null,
    title: string,
    source?: string | null,
    description?: string | null,
    nofLikes: number,
    users?:  {
      __typename: "ModelUserPlaceConnection",
      nextToken?: string | null,
    } | null,
    LikePlaces?:  {
      __typename: "ModelLikePlacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlaceMutationVariables = {
  input: UpdatePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type UpdatePlaceMutation = {
  updatePlace?:  {
    __typename: "Place",
    id: string,
    mainImage?: string | null,
    images?: Array< string > | null,
    title: string,
    source?: string | null,
    description?: string | null,
    nofLikes: number,
    users?:  {
      __typename: "ModelUserPlaceConnection",
      nextToken?: string | null,
    } | null,
    LikePlaces?:  {
      __typename: "ModelLikePlacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlaceMutationVariables = {
  input: DeletePlaceInput,
  condition?: ModelPlaceConditionInput | null,
};

export type DeletePlaceMutation = {
  deletePlace?:  {
    __typename: "Place",
    id: string,
    mainImage?: string | null,
    images?: Array< string > | null,
    title: string,
    source?: string | null,
    description?: string | null,
    nofLikes: number,
    users?:  {
      __typename: "ModelUserPlaceConnection",
      nextToken?: string | null,
    } | null,
    LikePlaces?:  {
      __typename: "ModelLikePlacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLikePostMutationVariables = {
  input: CreateLikePostInput,
  condition?: ModelLikePostConditionInput | null,
};

export type CreateLikePostMutation = {
  createLikePost?:  {
    __typename: "LikePost",
    id: string,
    userID: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLikePostMutationVariables = {
  input: UpdateLikePostInput,
  condition?: ModelLikePostConditionInput | null,
};

export type UpdateLikePostMutation = {
  updateLikePost?:  {
    __typename: "LikePost",
    id: string,
    userID: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLikePostMutationVariables = {
  input: DeleteLikePostInput,
  condition?: ModelLikePostConditionInput | null,
};

export type DeleteLikePostMutation = {
  deleteLikePost?:  {
    __typename: "LikePost",
    id: string,
    userID: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePostMutationVariables = {
  input: CreatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type CreatePostMutation = {
  createPost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    image?: string | null,
    video?: string | null,
    nofLikes: number,
    userID: string,
    users?:  {
      __typename: "ModelUserPostConnection",
      nextToken?: string | null,
    } | null,
    Likes?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePostMutationVariables = {
  input: UpdatePostInput,
  condition?: ModelPostConditionInput | null,
};

export type UpdatePostMutation = {
  updatePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    image?: string | null,
    video?: string | null,
    nofLikes: number,
    userID: string,
    users?:  {
      __typename: "ModelUserPostConnection",
      nextToken?: string | null,
    } | null,
    Likes?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePostMutationVariables = {
  input: DeletePostInput,
  condition?: ModelPostConditionInput | null,
};

export type DeletePostMutation = {
  deletePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    image?: string | null,
    video?: string | null,
    nofLikes: number,
    userID: string,
    users?:  {
      __typename: "ModelUserPostConnection",
      nextToken?: string | null,
    } | null,
    Likes?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    bio?: string | null,
    website?: string | null,
    nofPosts: number,
    nofLikes: number,
    Posts?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    Likes?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    PostLikes?:  {
      __typename: "ModelUserPostConnection",
      nextToken?: string | null,
    } | null,
    Places?:  {
      __typename: "ModelUserPlaceConnection",
      nextToken?: string | null,
    } | null,
    LikePlaces?:  {
      __typename: "ModelLikePlacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    bio?: string | null,
    website?: string | null,
    nofPosts: number,
    nofLikes: number,
    Posts?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    Likes?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    PostLikes?:  {
      __typename: "ModelUserPostConnection",
      nextToken?: string | null,
    } | null,
    Places?:  {
      __typename: "ModelUserPlaceConnection",
      nextToken?: string | null,
    } | null,
    LikePlaces?:  {
      __typename: "ModelLikePlacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    bio?: string | null,
    website?: string | null,
    nofPosts: number,
    nofLikes: number,
    Posts?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    Likes?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    PostLikes?:  {
      __typename: "ModelUserPostConnection",
      nextToken?: string | null,
    } | null,
    Places?:  {
      __typename: "ModelUserPlaceConnection",
      nextToken?: string | null,
    } | null,
    LikePlaces?:  {
      __typename: "ModelLikePlacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserPlaceMutationVariables = {
  input: CreateUserPlaceInput,
  condition?: ModelUserPlaceConditionInput | null,
};

export type CreateUserPlaceMutation = {
  createUserPlace?:  {
    __typename: "UserPlace",
    id: string,
    placeId: string,
    userId: string,
    place:  {
      __typename: "Place",
      id: string,
      mainImage?: string | null,
      images?: Array< string > | null,
      title: string,
      source?: string | null,
      description?: string | null,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      bio?: string | null,
      website?: string | null,
      nofPosts: number,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserPlaceMutationVariables = {
  input: UpdateUserPlaceInput,
  condition?: ModelUserPlaceConditionInput | null,
};

export type UpdateUserPlaceMutation = {
  updateUserPlace?:  {
    __typename: "UserPlace",
    id: string,
    placeId: string,
    userId: string,
    place:  {
      __typename: "Place",
      id: string,
      mainImage?: string | null,
      images?: Array< string > | null,
      title: string,
      source?: string | null,
      description?: string | null,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      bio?: string | null,
      website?: string | null,
      nofPosts: number,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserPlaceMutationVariables = {
  input: DeleteUserPlaceInput,
  condition?: ModelUserPlaceConditionInput | null,
};

export type DeleteUserPlaceMutation = {
  deleteUserPlace?:  {
    __typename: "UserPlace",
    id: string,
    placeId: string,
    userId: string,
    place:  {
      __typename: "Place",
      id: string,
      mainImage?: string | null,
      images?: Array< string > | null,
      title: string,
      source?: string | null,
      description?: string | null,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      bio?: string | null,
      website?: string | null,
      nofPosts: number,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserPostMutationVariables = {
  input: CreateUserPostInput,
  condition?: ModelUserPostConditionInput | null,
};

export type CreateUserPostMutation = {
  createUserPost?:  {
    __typename: "UserPost",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      video?: string | null,
      nofLikes: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      bio?: string | null,
      website?: string | null,
      nofPosts: number,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserPostMutationVariables = {
  input: UpdateUserPostInput,
  condition?: ModelUserPostConditionInput | null,
};

export type UpdateUserPostMutation = {
  updateUserPost?:  {
    __typename: "UserPost",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      video?: string | null,
      nofLikes: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      bio?: string | null,
      website?: string | null,
      nofPosts: number,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserPostMutationVariables = {
  input: DeleteUserPostInput,
  condition?: ModelUserPostConditionInput | null,
};

export type DeleteUserPostMutation = {
  deleteUserPost?:  {
    __typename: "UserPost",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      video?: string | null,
      nofLikes: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      bio?: string | null,
      website?: string | null,
      nofPosts: number,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetLikePlacesQueryVariables = {
  id: string,
};

export type GetLikePlacesQuery = {
  getLikePlaces?:  {
    __typename: "LikePlaces",
    id: string,
    placeID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLikePlacesQueryVariables = {
  filter?: ModelLikePlacesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikePlacesQuery = {
  listLikePlaces?:  {
    __typename: "ModelLikePlacesConnection",
    items:  Array< {
      __typename: "LikePlaces",
      id: string,
      placeID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LikePlacesByPlaceIDQueryVariables = {
  placeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikePlacesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikePlacesByPlaceIDQuery = {
  likePlacesByPlaceID?:  {
    __typename: "ModelLikePlacesConnection",
    items:  Array< {
      __typename: "LikePlaces",
      id: string,
      placeID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LikePlacesByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikePlacesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikePlacesByUserIDQuery = {
  likePlacesByUserID?:  {
    __typename: "ModelLikePlacesConnection",
    items:  Array< {
      __typename: "LikePlaces",
      id: string,
      placeID: string,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlaceQueryVariables = {
  id: string,
};

export type GetPlaceQuery = {
  getPlace?:  {
    __typename: "Place",
    id: string,
    mainImage?: string | null,
    images?: Array< string > | null,
    title: string,
    source?: string | null,
    description?: string | null,
    nofLikes: number,
    users?:  {
      __typename: "ModelUserPlaceConnection",
      nextToken?: string | null,
    } | null,
    LikePlaces?:  {
      __typename: "ModelLikePlacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlacesQueryVariables = {
  filter?: ModelPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlacesQuery = {
  listPlaces?:  {
    __typename: "ModelPlaceConnection",
    items:  Array< {
      __typename: "Place",
      id: string,
      mainImage?: string | null,
      images?: Array< string > | null,
      title: string,
      source?: string | null,
      description?: string | null,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLikePostQueryVariables = {
  id: string,
};

export type GetLikePostQuery = {
  getLikePost?:  {
    __typename: "LikePost",
    id: string,
    userID: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLikePostsQueryVariables = {
  filter?: ModelLikePostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLikePostsQuery = {
  listLikePosts?:  {
    __typename: "ModelLikePostConnection",
    items:  Array< {
      __typename: "LikePost",
      id: string,
      userID: string,
      postID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LikePostsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikePostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikePostsByUserIDQuery = {
  likePostsByUserID?:  {
    __typename: "ModelLikePostConnection",
    items:  Array< {
      __typename: "LikePost",
      id: string,
      userID: string,
      postID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type LikePostsByPostIDQueryVariables = {
  postID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelLikePostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type LikePostsByPostIDQuery = {
  likePostsByPostID?:  {
    __typename: "ModelLikePostConnection",
    items:  Array< {
      __typename: "LikePost",
      id: string,
      userID: string,
      postID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPostQueryVariables = {
  id: string,
};

export type GetPostQuery = {
  getPost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    image?: string | null,
    video?: string | null,
    nofLikes: number,
    userID: string,
    users?:  {
      __typename: "ModelUserPostConnection",
      nextToken?: string | null,
    } | null,
    Likes?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPostsQueryVariables = {
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPostsQuery = {
  listPosts?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      video?: string | null,
      nofLikes: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type PostsByUserIDQueryVariables = {
  userID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PostsByUserIDQuery = {
  postsByUserID?:  {
    __typename: "ModelPostConnection",
    items:  Array< {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      video?: string | null,
      nofLikes: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    bio?: string | null,
    website?: string | null,
    nofPosts: number,
    nofLikes: number,
    Posts?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    Likes?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    PostLikes?:  {
      __typename: "ModelUserPostConnection",
      nextToken?: string | null,
    } | null,
    Places?:  {
      __typename: "ModelUserPlaceConnection",
      nextToken?: string | null,
    } | null,
    LikePlaces?:  {
      __typename: "ModelLikePlacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      bio?: string | null,
      website?: string | null,
      nofPosts: number,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserPlaceQueryVariables = {
  id: string,
};

export type GetUserPlaceQuery = {
  getUserPlace?:  {
    __typename: "UserPlace",
    id: string,
    placeId: string,
    userId: string,
    place:  {
      __typename: "Place",
      id: string,
      mainImage?: string | null,
      images?: Array< string > | null,
      title: string,
      source?: string | null,
      description?: string | null,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      bio?: string | null,
      website?: string | null,
      nofPosts: number,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserPlacesQueryVariables = {
  filter?: ModelUserPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserPlacesQuery = {
  listUserPlaces?:  {
    __typename: "ModelUserPlaceConnection",
    items:  Array< {
      __typename: "UserPlace",
      id: string,
      placeId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserPlacesByPlaceIdQueryVariables = {
  placeId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserPlacesByPlaceIdQuery = {
  userPlacesByPlaceId?:  {
    __typename: "ModelUserPlaceConnection",
    items:  Array< {
      __typename: "UserPlace",
      id: string,
      placeId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserPlacesByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserPlaceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserPlacesByUserIdQuery = {
  userPlacesByUserId?:  {
    __typename: "ModelUserPlaceConnection",
    items:  Array< {
      __typename: "UserPlace",
      id: string,
      placeId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserPostQueryVariables = {
  id: string,
};

export type GetUserPostQuery = {
  getUserPost?:  {
    __typename: "UserPost",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      video?: string | null,
      nofLikes: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      bio?: string | null,
      website?: string | null,
      nofPosts: number,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUserPostsQueryVariables = {
  filter?: ModelUserPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserPostsQuery = {
  listUserPosts?:  {
    __typename: "ModelUserPostConnection",
    items:  Array< {
      __typename: "UserPost",
      id: string,
      postId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserPostsByPostIdQueryVariables = {
  postId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserPostsByPostIdQuery = {
  userPostsByPostId?:  {
    __typename: "ModelUserPostConnection",
    items:  Array< {
      __typename: "UserPost",
      id: string,
      postId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserPostsByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserPostFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserPostsByUserIdQuery = {
  userPostsByUserId?:  {
    __typename: "ModelUserPostConnection",
    items:  Array< {
      __typename: "UserPost",
      id: string,
      postId: string,
      userId: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateLikePlacesSubscriptionVariables = {
  filter?: ModelSubscriptionLikePlacesFilterInput | null,
};

export type OnCreateLikePlacesSubscription = {
  onCreateLikePlaces?:  {
    __typename: "LikePlaces",
    id: string,
    placeID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLikePlacesSubscriptionVariables = {
  filter?: ModelSubscriptionLikePlacesFilterInput | null,
};

export type OnUpdateLikePlacesSubscription = {
  onUpdateLikePlaces?:  {
    __typename: "LikePlaces",
    id: string,
    placeID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikePlacesSubscriptionVariables = {
  filter?: ModelSubscriptionLikePlacesFilterInput | null,
};

export type OnDeleteLikePlacesSubscription = {
  onDeleteLikePlaces?:  {
    __typename: "LikePlaces",
    id: string,
    placeID: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
};

export type OnCreatePlaceSubscription = {
  onCreatePlace?:  {
    __typename: "Place",
    id: string,
    mainImage?: string | null,
    images?: Array< string > | null,
    title: string,
    source?: string | null,
    description?: string | null,
    nofLikes: number,
    users?:  {
      __typename: "ModelUserPlaceConnection",
      nextToken?: string | null,
    } | null,
    LikePlaces?:  {
      __typename: "ModelLikePlacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
};

export type OnUpdatePlaceSubscription = {
  onUpdatePlace?:  {
    __typename: "Place",
    id: string,
    mainImage?: string | null,
    images?: Array< string > | null,
    title: string,
    source?: string | null,
    description?: string | null,
    nofLikes: number,
    users?:  {
      __typename: "ModelUserPlaceConnection",
      nextToken?: string | null,
    } | null,
    LikePlaces?:  {
      __typename: "ModelLikePlacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlaceSubscriptionVariables = {
  filter?: ModelSubscriptionPlaceFilterInput | null,
};

export type OnDeletePlaceSubscription = {
  onDeletePlace?:  {
    __typename: "Place",
    id: string,
    mainImage?: string | null,
    images?: Array< string > | null,
    title: string,
    source?: string | null,
    description?: string | null,
    nofLikes: number,
    users?:  {
      __typename: "ModelUserPlaceConnection",
      nextToken?: string | null,
    } | null,
    LikePlaces?:  {
      __typename: "ModelLikePlacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLikePostSubscriptionVariables = {
  filter?: ModelSubscriptionLikePostFilterInput | null,
};

export type OnCreateLikePostSubscription = {
  onCreateLikePost?:  {
    __typename: "LikePost",
    id: string,
    userID: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLikePostSubscriptionVariables = {
  filter?: ModelSubscriptionLikePostFilterInput | null,
};

export type OnUpdateLikePostSubscription = {
  onUpdateLikePost?:  {
    __typename: "LikePost",
    id: string,
    userID: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLikePostSubscriptionVariables = {
  filter?: ModelSubscriptionLikePostFilterInput | null,
};

export type OnDeleteLikePostSubscription = {
  onDeleteLikePost?:  {
    __typename: "LikePost",
    id: string,
    userID: string,
    postID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnCreatePostSubscription = {
  onCreatePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    image?: string | null,
    video?: string | null,
    nofLikes: number,
    userID: string,
    users?:  {
      __typename: "ModelUserPostConnection",
      nextToken?: string | null,
    } | null,
    Likes?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnUpdatePostSubscription = {
  onUpdatePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    image?: string | null,
    video?: string | null,
    nofLikes: number,
    userID: string,
    users?:  {
      __typename: "ModelUserPostConnection",
      nextToken?: string | null,
    } | null,
    Likes?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePostSubscriptionVariables = {
  filter?: ModelSubscriptionPostFilterInput | null,
};

export type OnDeletePostSubscription = {
  onDeletePost?:  {
    __typename: "Post",
    id: string,
    description?: string | null,
    image?: string | null,
    video?: string | null,
    nofLikes: number,
    userID: string,
    users?:  {
      __typename: "ModelUserPostConnection",
      nextToken?: string | null,
    } | null,
    Likes?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    bio?: string | null,
    website?: string | null,
    nofPosts: number,
    nofLikes: number,
    Posts?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    Likes?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    PostLikes?:  {
      __typename: "ModelUserPostConnection",
      nextToken?: string | null,
    } | null,
    Places?:  {
      __typename: "ModelUserPlaceConnection",
      nextToken?: string | null,
    } | null,
    LikePlaces?:  {
      __typename: "ModelLikePlacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    bio?: string | null,
    website?: string | null,
    nofPosts: number,
    nofLikes: number,
    Posts?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    Likes?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    PostLikes?:  {
      __typename: "ModelUserPostConnection",
      nextToken?: string | null,
    } | null,
    Places?:  {
      __typename: "ModelUserPlaceConnection",
      nextToken?: string | null,
    } | null,
    LikePlaces?:  {
      __typename: "ModelLikePlacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    username: string,
    bio?: string | null,
    website?: string | null,
    nofPosts: number,
    nofLikes: number,
    Posts?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    Likes?:  {
      __typename: "ModelLikePostConnection",
      nextToken?: string | null,
    } | null,
    PostLikes?:  {
      __typename: "ModelUserPostConnection",
      nextToken?: string | null,
    } | null,
    Places?:  {
      __typename: "ModelUserPlaceConnection",
      nextToken?: string | null,
    } | null,
    LikePlaces?:  {
      __typename: "ModelLikePlacesConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserPlaceSubscriptionVariables = {
  filter?: ModelSubscriptionUserPlaceFilterInput | null,
};

export type OnCreateUserPlaceSubscription = {
  onCreateUserPlace?:  {
    __typename: "UserPlace",
    id: string,
    placeId: string,
    userId: string,
    place:  {
      __typename: "Place",
      id: string,
      mainImage?: string | null,
      images?: Array< string > | null,
      title: string,
      source?: string | null,
      description?: string | null,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      bio?: string | null,
      website?: string | null,
      nofPosts: number,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserPlaceSubscriptionVariables = {
  filter?: ModelSubscriptionUserPlaceFilterInput | null,
};

export type OnUpdateUserPlaceSubscription = {
  onUpdateUserPlace?:  {
    __typename: "UserPlace",
    id: string,
    placeId: string,
    userId: string,
    place:  {
      __typename: "Place",
      id: string,
      mainImage?: string | null,
      images?: Array< string > | null,
      title: string,
      source?: string | null,
      description?: string | null,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      bio?: string | null,
      website?: string | null,
      nofPosts: number,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserPlaceSubscriptionVariables = {
  filter?: ModelSubscriptionUserPlaceFilterInput | null,
};

export type OnDeleteUserPlaceSubscription = {
  onDeleteUserPlace?:  {
    __typename: "UserPlace",
    id: string,
    placeId: string,
    userId: string,
    place:  {
      __typename: "Place",
      id: string,
      mainImage?: string | null,
      images?: Array< string > | null,
      title: string,
      source?: string | null,
      description?: string | null,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      bio?: string | null,
      website?: string | null,
      nofPosts: number,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserPostSubscriptionVariables = {
  filter?: ModelSubscriptionUserPostFilterInput | null,
};

export type OnCreateUserPostSubscription = {
  onCreateUserPost?:  {
    __typename: "UserPost",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      video?: string | null,
      nofLikes: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      bio?: string | null,
      website?: string | null,
      nofPosts: number,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserPostSubscriptionVariables = {
  filter?: ModelSubscriptionUserPostFilterInput | null,
};

export type OnUpdateUserPostSubscription = {
  onUpdateUserPost?:  {
    __typename: "UserPost",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      video?: string | null,
      nofLikes: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      bio?: string | null,
      website?: string | null,
      nofPosts: number,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserPostSubscriptionVariables = {
  filter?: ModelSubscriptionUserPostFilterInput | null,
};

export type OnDeleteUserPostSubscription = {
  onDeleteUserPost?:  {
    __typename: "UserPost",
    id: string,
    postId: string,
    userId: string,
    post:  {
      __typename: "Post",
      id: string,
      description?: string | null,
      image?: string | null,
      video?: string | null,
      nofLikes: number,
      userID: string,
      createdAt: string,
      updatedAt: string,
    },
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      username: string,
      bio?: string | null,
      website?: string | null,
      nofPosts: number,
      nofLikes: number,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
