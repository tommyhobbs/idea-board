# Idea Board (ClearScore FED Test)
Currently hosted on https://idea-board.mybluemix.net/

## Requirements

To run this app locally [Yarn](https://yarnpkg.com/en/docs/install#mac-stable) is required.

## Development instructions

```bash
yarn install
yarn start
```
Navigate to http://localhost:3000.

## Test

- Test watch
  ```bash
  yarn test
  ```
- One time test
  ```bash
  yarn test-CI
  ```

## Deployment

This app is currently deployed to IBM Cloud via a [Cloud Foundry Staticfile Buildpack](https://github.com/cloudfoundry/staticfile-buildpack).

To deploy, the [IBM Cloud CLI](https://console.bluemix.net/docs/cli/index.html#overview) needs to be install to login as an authorized user.

```bash
bx login
yarn deploy
```
