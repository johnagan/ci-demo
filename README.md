# Travis-CI to GitHub Pages Demo ![](https://api.travis-ci.org/johnagan/ci-demo.svg)
This demo was created to demonstrate a sample workflow for continuous integration and automated deployment from [Travis-CI](https://travis-ci.org) to [GitHub Pages](https://pages.github.com/).

## Demo Flow

##### Create a broken branch
0. Open the [GitHub Pages](http://johnagan.github.io/ci-demo/) url
0. Create a new branch
0. Remove the text from one of the entries in [content.json](./src/content.json)
0. Commit changes with a descriptive message
0. Create a pull request with a descriptive message
0. Wait for Travis-CI to complete (there should be an error)

##### Fix the branch and merge
0. Go back to the [content.json](./src/content.json) file and add text to the blank entry
0. Commit changes with a descriptive message
0. Go back to the open pull request and wait for Travis to complete (it should be green)
0. Optional - Refresh/goto the [GitHub Pages](http://johnagan.github.io/ci-demo/) url to confirm no changes were made
0. Merge the pull request
0. Refresh/goto the [GitHub Pages](http://johnagan.github.io/ci-demo/) and confirm the changes are reflected

## Demo Page
After a successful deployment, you can view the results on [GitHub Pages](http://johnagan.github.io/ci-demo/) for this repository.

## Tests
The [tests](./test) are written in [mocha](http://mochajs.org/) and check for blank entries in the [content.json](./src/content.json).

## Automation Steps
All steps happen on the [Travis-CI container](http://docs.travis-ci.com/user/workers/container-based-infrastructure/) and can be monitored by going to the [Travis dashboard](https://travis-ci.org/repositories).

1. Sets global variables
2. Updates git config
3. Builds packages with ```npm install```
4. Clones GitHub Pages branch ```gh-pages``` into ```dist``` folder
5. Cleans and rebuilds ```dist``` folder by running ```npm run build```
6. Runs tests by calling ```npm test```
7. Commits changes
8. If request is *not* a pull request and is the **master** branch, Travis will push the ```dist``` folder to ```gh-pages``` in GitHub.

## Travis Settings
All Travis-CI settings are stored in the [.travis.yml](./.travis.yml) file. There are four environment variables that you may want to adjust if you decide to fork this repo.

Variable      | Description
------------- | ------------
GIT_NAME      | The display name to use when Travis commits to Git
GIT_EMAIL     | The email address to use when Travis commits to Git
GIT_DOMAIN    | The domain address of the GitHub or GitHub Enterprise server
GH_TOKEN      | The [encrypted](http://docs.travis-ci.com/user/encryption-keys/) GitHub [personal access token](https://github.com/settings/applications) used to deploy

## Running Locally
The local server runs on [Webpack Dev Server](http://webpack.github.io/docs/webpack-dev-server.html).

**Setup**
```bash
$ npm install
```

**Tests**
```bash
$ npm test
```

**Build**
```bash
$ npm run build
```

**WebServer**
```bash
$ npm start
```
**URLs**
* Main Site - [http://localhost:8080](http://localhost:8080)
* Development - [http://localhost:8080/webpack-dev-server](http://localhost:8080/webpack-dev-server)


--
