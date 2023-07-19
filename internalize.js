/*
 * A javascript script that uses the GitHub API to change the visibility of
 * an organization's repositories to internal.
 * The organization name is passed as the first argument.
 * The GitHub token is passed as the second argument.
 *
 * Usage: node internalize.js <organization> <token>
 */

const axios = require("axios");

const organization = process.argv[2];
const token = process.argv[3];

if (!organization || !token) {
  console.error("Usage: node internalize.js <organization> <token>");
  process.exit(1);
}

const headers = {};
if (token) {
  headers["Authorization"] = `token ${token}`;
}

const url = `https://api.github.com/orgs/${organization}/repos?per_page=100`;

async function internalize() {
  try {
    const response = await axios.get(url, { headers: headers });
    const repositories = response.data;
    for (const repository of repositories) {
      // check to see is the repository is private
      // if it is, then change the visibility to internal
      // if it is not, then do nothing

      if (repository.private) {
        console.log(`Updating repository ${repository.name} to internal`);

        try {
          const repositoryUrl = `https://api.github.com/repos/${organization}/${repository.name}`;
          const repositoryData = {
            private: false,
            visibility: "internal",
          };
          await axios.patch(repositoryUrl, repositoryData, {
            headers: headers,
          });
        } catch (error) {
          console.error(error);
        }
      } else {
        console.log(
          `Repository ${repository.name} is already internal or public`
        );
      }
    }
  } catch (error) {
    console.error(error);
  }
}

internalize();
