# React + Redux-toolkit + TypeScript + Vite - Starter kit 🔥

This is a customized version of the official **Vite react-ts preset**

**FEATURES**

✅ Zero configuration redux application state.

✅ Configuration management for different environments

✅ HTTP helper with customized fetcher function with Axios.

✅ Ready to use application router with react-router-dom

✅ Sample code for pages and components. 

✅ Some vscode plugin recommendations for ESLint and prettier. 

✅ Pre-commit hooks for linting. 

✅ Pre-configured cypress test suite. 

✅ Working example of a component utilizing REST API with http helper and redux store.

🚀 And few other goodies. 

**Pre-requisites**

    nodejs >=18.18.0
    vscode [recommended]

**Getting started**

    $ npx @searpro/create-react <your-app-name>
    .....
    .....
    $ cd <your-app-name> && npm run dev


**Running the application**

    DEVELOPMENT
    $ npm run dev
    
    BUILD
    $ npm run build
    
    LINT
    $ npm run lint 
    $ npm run lin:fix #to fix lint errors
    
    TEST
    $ npm test

**Application Structure**

```
react-vite-redux-starter [folder structure]
├── index.html
├── public
│   └── [assets to be kept in public]
├── cypress
│   └── [cypress test specs]
└── src
    ├── global.d.ts [global types]
    ├── store
    │   └── [redux store related files]
    ├── config
    │   ├── environments
    │   │   └── [env-specific configurations. dev/qa/stg/prod etc]
    │   ├── endpoints.ts  [api endpoints/paths with http method]
    │   └── index.ts [configuration entry point] 
    ├── hooks
    │   └── [react custom hooks]
    ├── pages
    │   ├── [Main pages/container components]
    │   ├── Users
    │   │   ├── Users.tsx
    │   │   └── [css and other assets can also be added]
    │   └── Home
    │       └── Home.tsx
    └── components
        ├── [Re-usable components]
        ├── Button
        │   ├── Button.tsx
        │   └── [assets/css etc can go here]
        ├── Header
        │   └── Header.tsx
        └── Footer
            └── Footer.tsx
```   


**FURTHER READING..**

For customizing Vite build, check out https://vitejs.dev/guide/

For more information on Redux-Toolkit:  https://redux-toolkit.js.org/usage/usage-with-typescript

For more information on Cypress: https://docs.cypress.io/guides/component-testing/overview

For customizing Axios: https://axios-http.com/docs/req_config
# ✌

