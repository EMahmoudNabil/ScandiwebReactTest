import { gql } from "@apollo/client";

// filter products according to category query 
export const getProducts = (id) => gql`
  query {
    category(input:{title: \"${id}\"}){
    products{
      id
      name
      inStock
      attributes{
        id
        name
        type
        items{
          value
          id
        }
      }
      gallery
      prices{
        currency{
          label
          symbol
        }
        amount
      }
    }
    }
  }
  `


// get categories name and curruncies query
export const getCategoriesAndCuruncies = gql`
  query {
    currencies {
      label
      symbol
    }
    categories {
      name
    }
  }
`
// get product with id 
export const getProductByID = (id) => gql`
  query {
      product(id: \"${id}\"){
        id
      name
      inStock
      description
      attributes{
        id
        name
        type
        items{
          value
          id
        }
      }
      gallery
      prices{
        currency{
          label
          symbol
        }
        amount
      }
    }
    }
  `;



