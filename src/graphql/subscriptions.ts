/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLikePlace = /* GraphQL */ `
  subscription OnCreateLikePlace(
    $filter: ModelSubscriptionLikePlaceFilterInput
  ) {
    onCreateLikePlace(filter: $filter) {
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
export const onUpdateLikePlace = /* GraphQL */ `
  subscription OnUpdateLikePlace(
    $filter: ModelSubscriptionLikePlaceFilterInput
  ) {
    onUpdateLikePlace(filter: $filter) {
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
export const onDeleteLikePlace = /* GraphQL */ `
  subscription OnDeleteLikePlace(
    $filter: ModelSubscriptionLikePlaceFilterInput
  ) {
    onDeleteLikePlace(filter: $filter) {
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
export const onCreatePlace = /* GraphQL */ `
  subscription OnCreatePlace($filter: ModelSubscriptionPlaceFilterInput) {
    onCreatePlace(filter: $filter) {
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
export const onUpdatePlace = /* GraphQL */ `
  subscription OnUpdatePlace($filter: ModelSubscriptionPlaceFilterInput) {
    onUpdatePlace(filter: $filter) {
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
export const onDeletePlace = /* GraphQL */ `
  subscription OnDeletePlace($filter: ModelSubscriptionPlaceFilterInput) {
    onDeletePlace(filter: $filter) {
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
export const onCreateLikePost = /* GraphQL */ `
  subscription OnCreateLikePost($filter: ModelSubscriptionLikePostFilterInput) {
    onCreateLikePost(filter: $filter) {
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
export const onUpdateLikePost = /* GraphQL */ `
  subscription OnUpdateLikePost($filter: ModelSubscriptionLikePostFilterInput) {
    onUpdateLikePost(filter: $filter) {
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
export const onDeleteLikePost = /* GraphQL */ `
  subscription OnDeleteLikePost($filter: ModelSubscriptionLikePostFilterInput) {
    onDeleteLikePost(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
