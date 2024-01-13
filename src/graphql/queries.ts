/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLikePlace = /* GraphQL */ `
  query GetLikePlace($id: ID!) {
    getLikePlace(id: $id) {
      id
      userID
      placeID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofLikes
        createdAt
        updatedAt
      }
      Place {
        id
        mainImage
        images
        title
        description
        source
        nofLikes
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLikePlaces = /* GraphQL */ `
  query ListLikePlaces(
    $filter: ModelLikePlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikePlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        placeID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const likePlacesByUserID = /* GraphQL */ `
  query LikePlacesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikePlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likePlacesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        placeID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const likePlacesByPlaceID = /* GraphQL */ `
  query LikePlacesByPlaceID(
    $placeID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikePlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likePlacesByPlaceID(
      placeID: $placeID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        placeID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlace = /* GraphQL */ `
  query GetPlace($id: ID!) {
    getPlace(id: $id) {
      id
      mainImage
      images
      title
      description
      source
      nofLikes
      LikePlaces {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPlaces = /* GraphQL */ `
  query ListPlaces(
    $filter: ModelPlaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        mainImage
        images
        title
        description
        source
        nofLikes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLikePost = /* GraphQL */ `
  query GetLikePost($id: ID!) {
    getLikePost(id: $id) {
      id
      userID
      postID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofLikes
        createdAt
        updatedAt
      }
      Post {
        id
        description
        image
        video
        nofLikes
        userID
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listLikePosts = /* GraphQL */ `
  query ListLikePosts(
    $filter: ModelLikePostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikePosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        postID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const likePostsByUserID = /* GraphQL */ `
  query LikePostsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikePostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likePostsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const likePostsByPostID = /* GraphQL */ `
  query LikePostsByPostID(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikePostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likePostsByPostID(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        postID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      description
      image
      video
      nofLikes
      userID
      User {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofLikes
        createdAt
        updatedAt
      }
      LikePosts {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        image
        video
        nofLikes
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const postsByUserID = /* GraphQL */ `
  query PostsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        description
        image
        video
        nofLikes
        userID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      username
      bio
      website
      nofPosts
      nofLikes
      Posts {
        nextToken
      }
      LikePosts {
        nextToken
      }
      LikePlaces {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        username
        bio
        website
        nofPosts
        nofLikes
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
