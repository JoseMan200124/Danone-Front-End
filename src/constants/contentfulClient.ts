import ApolloClient from 'apollo-boost';

export const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/5zroeaevvcng`,
  headers: {
    'Authorization': 'Bearer CFPAT-8_IBqneXBCklesbXNwYeuiyXb2-OKhjQhs6xDvHPUWg'
  }
});
