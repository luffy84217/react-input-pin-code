# sgcmpteltd/uikit-react

Sgcarmart's shareable components and Sass styles for React.

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Preparation

Before the npm install begins, the environment variable for github package authentication should be set to install private packages hosted on github package.

1. Create a github personal access token granted with `read:package` permission. ([Docs](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens))
2. Add a `NODE_AUTH_TOKEN` environment variable using the personal token as value to the terminal profile such as `.bashrc` or `.zshrc`.
3. Source the terminal profile.

```shell
# zsh
echo 'export NODE_AUTH_TOKEN=YOUR_PERSONAL_ACCESS_TOKEN' >> ~/.zshrc;
source ~/.zshrc;
```

```shell
# bash
echo 'export NODE_AUTH_TOKEN=YOUR_PERSONAL_ACCESS_TOKEN' >> ~/.bashrc;
source ~/.bashrc;
```

## Installation

```shell
npm install @sgcmpteltd/uikit-react
```

## Storybook

You can find view all the stories for components in this package by running the following command.

```shell
npm run storybook
```
