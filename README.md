# Press Purchase - Admin App

Welcome to the Press Purchase Front-end repository!

## What's inside?

This Turborepo includes the following packages and apps:

## Getting Started

To get started with this project, follow these steps:

1. Install dependencies by running `npm install`.
2. Make `.env` file from `.env.exampe` in `/apps/admin` and `/apps/user` .
3. Start the development server by running `npm dev`.
4. Open your browser and visit `http://localhost:4000` for admin app & `http://localhost:4001` for user app.

# Tech stacks

- ReactJS
- ViteJS
- Redux toolkit
- Ant Design
- Styled components
- Axios
- React Quill
- DayJS
- Turbo repo
- Husky

## Figma Design

You can find the design for this project on these Figma links:

- Pages:
  - [Admin](https://www.figma.com/file/OGitGCVhF6PwW6luqXqmvS/Press-Purchase?type=design&node-id=1-25434&mode=design&t=vvN1QYRzwuoHkpCM-0)
- Design system
  - [Colors, Icons & Typography](https://www.figma.com/file/OGitGCVhF6PwW6luqXqmvS/Press-Purchase?type=design&node-id=186-84984&mode=design&t=vvN1QYRzwuoHkpCM-0)
  - [Form & input](https://www.figma.com/file/OGitGCVhF6PwW6luqXqmvS/Press-Purchase?type=design&node-id=18-40462&mode=design&t=vvN1QYRzwuoHkpCM-0)
  - [Buttons](https://www.figma.com/file/OGitGCVhF6PwW6luqXqmvS/Press-Purchase?type=design&node-id=18-40453&mode=design&t=vvN1QYRzwuoHkpCM-0)
  - [Layout & Modal](https://www.figma.com/file/OGitGCVhF6PwW6luqXqmvS/Press-Purchase?type=design&node-id=18-40456&mode=design&t=vvN1QYRzwuoHkpCM-0)

### Root Directory

- **/apps**: Contains the main applications of the project.
  - **/admin**: The Inventory Admin App.
  - **/user**: The Inventory User App.
- **/packages**: Contains shared packages used across the apps.
  - **@repo/constants**: Shared constants used throughout the project.
  - **@repo/data**: Shared data mechanisms.
  - **@repo/models**: Shared data interfaces.
  - **@repo/ui**: Shared UI components.
  - **@repo/utils**: Utility modules or functions for common tasks such as data manipulation, formatting, validation, and miscellaneous operations.
  - **@repo/eslint-config**: Shared ESLint configurations.
  - **@repo/typescript-config**: Shared TypeScript configurations.

## File Usage

- **/apps/admin**
  - **index.tsx**: Entry point for the Admin App.
  - **components/**: Contains React components specific to the Admin App.
  - **pages/**: Contains page components for routing.
  - **styles/**: Contains CSS or styled-components for the Admin App.
  - **.env**: Environment variables specific to the Admin App.
- **/apps/user**

  - **index.tsx**: Entry point for the User App.
  - **components/**: Contains React components specific to the User App.
  - **pages/**: Contains page components for routing.
  - **styles/**: Contains CSS or styled-components for the User App.
  - **.env**: Environment variables specific to the User App.

- **apps**: Contains specify application, .
  - **app-name**: admin or user
    - **public**: Contains static assets that may be moved to remote asset in the furture.
    - **src**: Contains the main source code of the project.
      - **assets**: Contains images, fonts, or any other static assets that are used for bundling into the application.
      - **constants**: Contains global constant variables.
      - **api**: Contains api endpoints with Axios request.
      - **services**: Contains business logic before http requests were called.
      - **components**: Contains reusable React components.
      - **containers**: Contains page containers: UnAuthenticatedContainer, AuthenticatedContainer.
      - **contexts**: Contains global React contexts.
      - **pages**: Contains the main pages of the application.
      - **layouts**: Contains the layouts which are used in page components.
      - **models**: Contains interfaces.
      - **utils**: Contains utility modules or functions used for common tasks such as data manipulation, formatting, validation, and miscellaneous operations..
      - **App.tsx**: Entry point for the React application.
      - **App.css**: Contains global css.
      - **Router.tsx**: Contains application routing.
      - **main.tsx**: Entry point for the Typescript bundling.
    - **.env.sample**: Remove .sample to use as app environment variables.
    - **index.html**: Serves as the entry point for web application.
- **packages**: Contains common UI or business logic.
  - **config-eslint**: Contains shared eslint config.
  - **config-typescript**: Contains shared typescript config.
  - **constants**: Contains shared constants.
  - **data**: Contains shared mechanism of data.
    - **src**:
      - **api**: Contains RTK query API.
      - **services**: Contains business logic to deal with API.
      - **store**: Contains mechanism of RTK store.
  - **models**: Contains data interfaces.
  - **ui**: Contains shared components.
    - **components**: Contains reusable React components.
    - **containers**: Contains page containers: UnAuthenticatedContainer, AuthenticatedContainer.
    - **contexts**: Contains global React contexts.
    - **pages**: Contains the main pages of the application.
    - **layouts**: Contains the layouts which are used in page components.
    - **icons**: Contains SVG component icons.
  - **utils**: Contains utility modules or functions used for common tasks such as data manipulation, formatting, validation, and miscellaneous operations..

## Theme Setup

The project utilizes Ant Design for its UI components. The theme configuration can be found in **src/contexts/Theme.tsx**.

## Other Dev Information

- **Development Server**: To start the development server, run `npm start`.
- **Building**: To build the project for production, run `npm run build`.
- **Linting**: The project uses ESLint for linting. Run `npm run lint`.
- **Format**: The project maintains consistent code formatting using Prettier. Run `npm run pretty:fix`.
