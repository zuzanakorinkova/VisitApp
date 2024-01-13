/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLikePlace = /* GraphQL */ `
  mutation CreateLikePlace(
    $input: CreateLikePlaceInput!
    $condition: ModelLikePlaceConditionInput
  ) {
    createLikePlace(input: $input, condition: $condition) {
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
export const updateLikePlace = /* GraphQL */ `
  mutation UpdateLikePlace(
    $input: UpdateLikePlaceInput!
    $condition: ModelLikePlaceConditionInput
  ) {
    updateLikePlace(input: $input, condition: $condition) {
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
export const deleteLikePlace = /* GraphQL */ `
  mutation DeleteLikePlace(
    $input: DeleteLikePlaceInput!
    $condition: ModelLikePlaceConditionInput
  ) {
    deleteLikePlace(input: $input, condition: $condition) {
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
export const createPlace = /* GraphQL */ `
  mutation CreatePlace(
    $input: CreatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    createPlace(input: $input, condition: $condition) {
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
export const updatePlace = /* GraphQL */ `
  mutation UpdatePlace(
    $input: UpdatePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    updatePlace(input: $input, condition: $condition) {
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
export const deletePlace = /* GraphQL */ `
  mutation DeletePlace(
    $input: DeletePlaceInput!
    $condition: ModelPlaceConditionInput
  ) {
    deletePlace(input: $input, condition: $condition) {
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
export const createLikePost = /* GraphQL */ `
  mutation CreateLikePost(
    $input: CreateLikePostInput!
    $condition: ModelLikePostConditionInput
  ) {
    createLikePost(input: $input, condition: $condition) {
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
export const updateLikePost = /* GraphQL */ `
  mutation UpdateLikePost(
    $input: UpdateLikePostInput!
    $condition: ModelLikePostConditionInput
  ) {
    updateLikePost(input: $input, condition: $condition) {
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
export const deleteLikePost = /* GraphQL */ `
  mutation DeleteLikePost(
    $input: DeleteLikePostInput!
    $condition: ModelLikePostConditionInput
  ) {
    deleteLikePost(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
