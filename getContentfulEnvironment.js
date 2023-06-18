require('dotenv').config(); 

console.log(process.env.CONTENTFUL_MANAGEMENT_API_KEY);
const contentfulManagement = require('contentful-management');

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_KEY
  });

  return contentfulClient
    .getSpace(process.env.REACT_APP_CONTENTFUL_SPACE_ID)
    .then(space => space.getEnvironment(process.env.REACT_APP_ENVIRONMENT_ID));
};
