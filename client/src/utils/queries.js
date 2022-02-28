import { gql } from '@apollo/client';

export const GET_ME = gql`
    me {
        username
        savedBooks {
            _id
            bookId
            description
            authors
            title
            image
            link
        }
    }
`;