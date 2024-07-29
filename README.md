# Book-Review-Platform-Client

production url: https://book-review-platform-gold.vercel.app/

**Book-Review-Platform-Client** is a modern web application built using the latest technologies to provide a seamless and interactive experience for managing and browsing books.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Book-Review-Platform-Client is developed with the following technologies:

- **React**: For building the user interface.
- **Vite**: For fast development and build processes.
- **TypeScript**: For type safety and improved developer experience.
- **Redux**: For state management.
- **TailwindCSS**: For utility-first CSS styling.

## Installation

To get started with Book-RV, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/book-rv.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd book-rv
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

## Usage

To run the development server:

```bash
npm run dev
```

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

To lint the codebase:

```bash
npm run lint
```

## Scripts

- **`dev`**: Starts the Vite development server.
- **`build`**: Compiles TypeScript and builds the project using Vite.
- **`lint`**: Runs ESLint to check for code quality and style issues.
- **`preview`**: Previews the production build locally.

## Dependencies

- **@emotion/react** and **@emotion/styled**: For styled components.
- **@fortawesome/free-solid-svg-icons** and **@fortawesome/react-fontawesome**: For Font Awesome icons.
- **@heroicons/react**: For Heroicons.
- **@material-tailwind/react** and **@mui/material**: For Material UI components.
- **@reduxjs/toolkit**: For efficient Redux development.
- **axios**: For HTTP requests.
- **js-cookie**: For cookie management.
- **react** and **react-dom**: Core libraries for React.
- **react-loader-spinner** and **react-spinners**: For loading indicators.
- **react-redux**: For Redux integration with React.
- **react-router-dom**: For routing.

### Dev Dependencies

- **@types/react** and **@types/react-dom**: TypeScript types for React.
- **@typescript-eslint/eslint-plugin** and **@typescript-eslint/parser**: ESLint plugin and parser for TypeScript.
- **@vitejs/plugin-react**: Vite plugin for React.
- **autoprefixer**: For adding vendor prefixes to CSS.
- **eslint** and related plugins: For code linting.
- **postcss** and **tailwindcss**: For PostCSS and Tailwind CSS integration.
- **typescript**: For TypeScript support.
- **vite**: For the build tool.

## Development

Ensure you have Node.js and npm installed. The project uses Vite for fast builds and hot module replacement, along with TypeScript for static typing.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request. Ensure that your code adheres to the existing style and passes all linting checks.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
# Server

**Server** is a backend service built with Node.js and TypeScript. It provides API endpoints and handles authentication, data management, and other server-side functionalities.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Server project is designed to handle the backend operations for your application. It includes features like:

- **User Authentication**: Using JWT and bcrypt.
- **Data Management**: Interacting with a database using Mongoose.
- **Environment Configuration**: Managed with dotenv.

## Installation

To set up the Server project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/server.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd server
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

## Usage

To run the server in development mode with live reloading:

```bash
npm run dev
```

To build the TypeScript code and run the server in production mode:

```bash
npm run build
npm start
```

## Scripts

- **`build`**: Compiles TypeScript code into JavaScript using `npx tsc`.
- **`start`**: Runs the built code from the `dist` directory using Node.js.
- **`dev`**: Starts the server with `nodemon` for development, which watches for changes in the `src` directory.

## Dependencies

- **@types/bcrypt**: TypeScript definitions for `bcrypt`.
- **@types/cookie-parser**: TypeScript definitions for `cookie-parser`.
- **@types/cors**: TypeScript definitions for `cors`.
- **@types/jsonwebtoken**: TypeScript definitions for `jsonwebtoken`.
- **@types/mongoose**: TypeScript definitions for `mongoose`.
- **bcrypt**: Library for hashing passwords.
- **concurrently**: Run multiple commands concurrently.
- **cookie-parser**: Middleware to parse cookies.
- **cors**: Middleware to enable CORS.
- **dotenv**: Loads environment variables from a `.env` file.
- **express**: Web framework for Node.js.
- **jsonwebtoken**: Library for handling JSON Web Tokens.

### Dev Dependencies

- **@types/express**: TypeScript definitions for `express`.
- **@types/node**: TypeScript definitions for Node.js.
- **typescript**: TypeScript language support.

## Development

Ensure you have Node.js and npm installed. The project uses TypeScript for type safety and `nodemon` for development convenience. Use `npm run dev` to start the server in development mode with automatic restarts.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request. Ensure that your code adheres to the existing style and passes all linting checks.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.
