//npm install axios
// Import Axios
const axios = require('axios');

// Function to fetch issues from a Jira project
async function fetchIssuesFromJira() {
  try {
    // Make a GET request to the Jira REST API to fetch issues
    const response = await axios.get('https://your-jira-instance.atlassian.net/rest/api/3/search?jql=project=YOUR_PROJECT_KEY');

    // Extract issues from the response data
    const issues = response.data.issues;

    // Log the issues to the console
    console.log('Issues:', issues);
  } catch (error) {
    // Handle errors
    console.error('Error fetching issues:', error.message);
  }
}

// Call the function to fetch issues from Jira
fetchIssuesFromJira();
