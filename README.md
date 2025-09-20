# UI Monorepo

This is a simple UI monorepo built with React. It consists of two main packages: `app` and `components`.

## Packages

### App

The `app` package is the main application that utilizes the components defined in the `components` package.

- **Location**: `packages/app`
- **Entry Point**: `src/index.tsx`
- **Main Component**: `src/App.tsx`
- **Styles**: `src/styles.css`

### Components

The `components` package contains reusable UI components that can be used across different applications.

- **Location**: `packages/components`
- **Main Component**: `src/Button.tsx`

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd ui-monorepo
   ```

3. Install dependencies for the entire monorepo:
   ```
   npm install
   ```

4. Navigate to the app package and start the application:
   ```
   cd packages/app
   npm start
   ```

## Usage

You can use the `Button` component from the `components` package in your `App` component as follows:

```tsx
import Button from '@your-scope/components';
```

## Contributing

Feel free to contribute to this project by submitting issues or pull requests.

## License

This project is licensed under the MIT License.