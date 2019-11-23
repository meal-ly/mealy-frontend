<p align="center">
 <img src="./src/assets/logo_small.png" alt="mealy-logo">
</p>

<h1 align="center">Mealy Frontend App</h1>


- [Project Details](#project-details)
- [Technical Details](#technical-details)
  - [Dependencies](#dependencies)
  - [Local Development](#local-development)
    - [Prerequisites](#prerequisites)
    - [Installation / Setup](#installation-/-/setup)
    - [Running / Development](#running-/-/development)
    - [SVG Handling](#svg-handling)
    - [Reducers and actions creation flow.](#reducers-and-actions-creation-flow)
    - [Asynchronous request/actions handling](#asynchronous-request/actions-handling)
  - [Build & deploy](#build-&-deploy)

## Project Details
Mealy is an app that provides incredible recipes for every occasion. Users can log in and found thousands of recipes for breakfast, lunch, snacks etc.

Watch the application alive at: https://mealy-fjc.web.app/

Just hit login and then login with dummy data and you're in :)

This repo, contains the frontend application. If you wan to see our backend application, please refer to: https://github.com/meal-ly/mealy-backend

This proyect was built based on Scrum. If you want to see our Kanban board, please refer to: https://github.com/orgs/meal-ly/projects/1

Here's how the app looks like. If you wan to see full design files, please refer to: https://xd.adobe.com/spec/b9894355-0620-4863-62e9-8ee3421f5749-cfb8/

![Screenshot_2019-11-22 Mealy(1)](https://user-images.githubusercontent.com/21111451/69470197-08df5980-0d63-11ea-9090-de510270cf73.png)

![Screenshot_2019-11-22 Mealy(1)](https://user-images.githubusercontent.com/21111451/69470279-7ab7a300-0d63-11ea-962e-c69b7e068bf0.jpg)

## Technical Details
### Dependencies
See `package.json` for the complete list. Below are is a list of primary libraries used to support this application

* React.js: View library.
* Redux: State management library.
* React Router: Site's routing.
* Formik: Form handling.
* typescript-fsa: Type-safe action creator utilities.

### Local development

Follow this instructions to run this project on your local machine.

#### Prerequisites
To run this project all you need to have installed is node.js. It was created using this version:

```sh
$ node --version
v12.8.1
```

##### Installation / Setup
```sh
git clone https://github.com/meal-ly/mealy-frontend.git # Clone the repository.

cd mealy-frontend # Navigate into the folder

yarn install # Install dependendices
```

##### Running / Development
```sh
yarn start # Start the local development server
```

Then open **http://localhost:8080**

#### SVG handling

- Add SVG files into assets folder
- Run `yarn svgr`
- Find icon components on `src/components/Icons/`
- Be sure that created files work fine with TS

#### Asynchronous request/actions handling
The libraries **typescript-fsa-reducers**, **typescript-fsa-redux-thunk** and **typescript-fsa** gives us the possibility to handle async request to the API in an easy and predictable way. In order to add a new reducer to the global store we need to follow [this workflow](#reducers-and-actions-creation-flow). Once we create our reducer we can now handle actions async states (started, failed, done).

#### Reducers and actions creation flow.

**src/store**: Reducers and actions used by Redux and typescript-fsa are placed in this folder. Each section of the app has his own folder with its own actions and reducers inside this one. In order to create a new reducer and its actions we follow this flow:

1. Create actions file inside **store/APP_SECTION/actions**.
2. Create reducer file inside **store/APP_SECTION/reducers**. 
3. Register the reducer state's interface in the **store/types** file and add your reducer to **store/reducers/index**.


### Build & Deploy
```sh
yarn build # Build the project and create production files
firebase deploy # Deploy dist folder to prod server
```

Production files will be on `dist` folder. 

