# Press Purchase - Admin App

Welcome to the Press Purchase Front-end repository!

## Getting Started

To get started with this project, follow these steps:

1. Install dependencies by running `npm install` or `yarn install`.
2. Start the development server by running `npm dev` or `yarn dev`.
3. Open your browser and visit `http://localhost:3000` to view the project.

# Tech stacks

- ReactJS
- ViteJS
- Ant Design
- Styled components
- Axios
- React Quill
- DayJS

## Figma Design

You can find the design for this project on these Figma links:

- Pages:
  - [Admin](https://www.figma.com/file/OGitGCVhF6PwW6luqXqmvS/Press-Purchase?type=design&node-id=1-25434&mode=design&t=vvN1QYRzwuoHkpCM-0)
- Design system
  - [Colors, Icons & Typography](https://www.figma.com/file/OGitGCVhF6PwW6luqXqmvS/Press-Purchase?type=design&node-id=186-84984&mode=design&t=vvN1QYRzwuoHkpCM-0)
  - [Form & input](https://www.figma.com/file/OGitGCVhF6PwW6luqXqmvS/Press-Purchase?type=design&node-id=18-40462&mode=design&t=vvN1QYRzwuoHkpCM-0)
  - [Buttons](https://www.figma.com/file/OGitGCVhF6PwW6luqXqmvS/Press-Purchase?type=design&node-id=18-40453&mode=design&t=vvN1QYRzwuoHkpCM-0)
  - [Layout & Modal](https://www.figma.com/file/OGitGCVhF6PwW6luqXqmvS/Press-Purchase?type=design&node-id=18-40456&mode=design&t=vvN1QYRzwuoHkpCM-0)

## Project Structure

- **public**: Contains static assets that may be moved to remote asset in the furture.
- **src**: Contains the main source code of the project.
  - **assets**: Contains images, fonts, or any other static assets that are used for bundling into the application.
  - **constants**: Contains global constant variables.
  - **api**: Contains api endpoints with Axios request.
  - **services**: Contains business logic before http requests were called.
  - **components**: Contains reusable React components.
  - **containers**: Contains page containers: UnAuthenticatedContainer, AuthenticatedContainer.
  - **contexts**: Contains global React contexts.
  - **pages**: Contains the main pages includes overrided component,routes and styles.
    - **activity**
    - **brand**
    - **member**
    - **notification**
    - **order**
    - **product**
    - **setting**
    - **shop**
    - **subscription**
    - **vendor**
  - **layouts**: Contains the layouts which are used in page components.
  - **models**: Contains interfaces.
  - **utils**: Contains utility modules or functions used for common tasks such as data manipulation, formatting, validation, and miscellaneous operations..
  - **App.tsx**: Entry point for the React application.
  - **App.css**: Contains global css.
  - **Router.tsx**: Contains application routing.
  - **main.tsx**: Entry point for the Typescript bundling.
- **.env.sample**: Remove .sample to use as app environment variables.
- **index.html**: Serves as the entry point for web application.

## Theme Setup

The project utilizes Ant Design for its UI components. The theme configuration can be found in **src/contexts/Theme.tsx**.

## Other Dev Information

- **Development Server**: To start the development server, run `npm start`.
- **Building**: To build the project for production, run `npm run build`.
- **Linting**: The project uses ESLint for linting. Run `npm run lint`.
- **Format**: The project maintains consistent code formatting using Prettier. Run `npm run pretty:fix`.
