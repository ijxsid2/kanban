# Kanban App

Test Deployment: https://kanban-ijxsid.vercel.app/

## App functionality completed

- User can add, edit or remove tasks
- User can add, edit or remove columns/task lists
- User can move tasks between columns
- All changes are stored in the LocalStorage.

## Notes about the app

- It took around 4 hours plus little time to write to write some notes
- I am using a parcel bundler for creating a working bundle for this project, except that there are no libraries used.
- Most of the components take some state but depend on the Provider component to change that state.
- All State modifiers are provided by a Context called `MutationsContext`, situated in `src/Containers/App/MutationsContext.ts`
- The main container file `App.tsx` implements all the possible mutations, using the code in `mutations.tsx` which can be easily shortened or improved by using an external library.
- Data is passed through props to the components(depending on what they need), which they can modify by using the MutationsContext.
- I have used this approach since in a large app, sometimes there are tons of data-only components, which can be very well described by sending just data props, and if later we have to add mutations in those components, its much easier to just use the context inside that component, rather than going to each parent and implementing a function prop.

## Improvements and possible features

- We can use the useReducer hook and it would simplify some parts of the `App.tsx` container.
- Improve the `mutations.tsx` file with a helper library like immer to make the code much easier to read.
- Implementing a search functionality, where we can write a term in the search box and it would highlight the tasks.
- Implementing multi-board functionality where can switch between boards, I started the app with multi-board functionality in mind, but I had to scrap it since the time ran out.
- Implementing a due functionality, where tasks near to thier due date will be highlighted.

## Instructions to Start

```bash
yarn
yarn build

```

App files will be built in the dist folder from which they can be served

- for running in developement mode

```bash
yarn
yarn dev
```

App will be served in the localhost:1234 and file changes will be watched.
