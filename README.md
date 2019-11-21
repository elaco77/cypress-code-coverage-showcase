# Cypress e2e code coverage showcase

## This is a fork from the aditya-sridhar/simple-reactjs-app (thank you!)

## What is the use of this Repo

This repo is showing how Cypress is generating a code coverage report for the end to end tests

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install create-react-app
Install create-react-app npm package globally. This will help to easily run the project and also build the source files easily. Use the following command to install create-react-app

```bash
npm install -g create-react-app
```

## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm start
```

The Application Runs on **localhost:3000**

In order to run the end to end test run

```bash
npm run cypress:open
```

or

```bash
npm run cypress:run
```

to run test in the headles mode

## Cypress docs

https://docs.cypress.io/guides/tooling/code-coverage.html#Install-the-plugin

## Code coverage report

After the tests complete, the final code coverage is saved to a .nyc_output folder. It is a JSON file from which we can generate a report in a variety of formats. The @cypress/code-coverage plugin generates the HTML report automatically - you can open the coverage/index.html page locally after the tests finish. You can also call nyc report to generate other reports, for example, sending the coverage information to 3rd party services.

## Application design

#### Components

1. **Customers** Component : This Component displays a list of customers. This Component gets the data from a json file in assets folder

2. **CustomerDetails** Component : This Component Displays the details of the selected customer. This Component gets its data from a json file in assets folder as well. This Component is the Child Component of *Customers* Component

#### HTTP client

**axios** library is used to make HTTP Calls

#### URL

The application has just one url /customerlist which ties to *Customers* Component

## Resources

**create-react-app** : The following link has all the commands that can be used with create-react-app
https://github.com/facebook/create-react-app

**ReactJS** : Refer to https://reactjs.org/ to understand the concepts of ReactJS

**React Bootstrap** : Refer to https://react-bootstrap.github.io/getting-started/introduction/ to understand how to use React Bootstrap
