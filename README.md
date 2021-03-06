# Faustjs-storybook Example

This is a POC demonstrating FaustJS working with Storybook.

This project wraps Stories with a `FaustProvider` and CI with chromatic

## Install

```bash
cp env.local.sample env
cp env.local.sample env.local
npm install --legacy-peer-deps
```

## Storybook

Run `npm run storybook`

## Setup chromatic workflow

Obtain CHROMATIC_PROJECT_TOKEN via https://storybook.js.org/tutorials/intro-to-storybook/react/en/deploy/

Add the project-token to github secret

## Add Secrets to Github

```bash
gh secret set CHROMATIC_PROJECT_TOKEN --body "project-token"

gh secret set NEXT_PUBLIC_WORDPRESS_URL --body "https://headlessfw.wpengine.com"
```

## Sample URL

https://www.chromatic.com/library?appId=627532cca2f142004ab39772
