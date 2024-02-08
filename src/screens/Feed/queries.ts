import {gql} from '@apollo/client';

export const listPosts = gql`
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nonexistng
        description
        image
        video
        nofLikes
        userID
        createdAt
        updatedAt
        User {
          id
          name
          username
        }
      }
      nextToken
    }
  }
`;
