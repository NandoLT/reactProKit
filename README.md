# React Pro Kit 🚀

A modern and powerful React boilerplate with a comprehensive set of features and best practices for building scalable applications.

## 🛠 Tech Stack

- **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling
- **[React](https://reactjs.org/)** - A JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types
- **[TailwindCSS](https://tailwindcss.com/)** - A utility-first CSS framework
- **[Material-UI (MUI)](https://mui.com/)** - React UI library
- **[ESLint](https://eslint.org/)** - Pluggable JavaScript linter
- **[Prettier](https://prettier.io/)** - Code formatter
- **[Husky](https://typicode.github.io/husky/)** - Git hooks made easy
- **[Zustand](https://zustand-demo.pmnd.rs/)** - State management
- **[React Query](https://tanstack.com/query/latest)** - Powerful asynchronous state management
- **[Jest](https://jestjs.io/)** - JavaScript Testing Framework
- **[React Testing Library](https://testing-library.com/)** - Testing utilities

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/reactprokit.git

# Navigate to the project directory
cd reactprokit

# Install dependencies
pnpm install
```

## 📝 Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Run tests
pnpm test

# Run linter
pnpm lint
```

## 🔧 Development Features

### Automatic Formatting

The project is configured to automatically format your code on save and before commits:

- ESLint enforces code quality rules
- Prettier ensures consistent code formatting
- Husky runs linting and formatting before commits

### Testing

- Unit and integration tests with Jest and React Testing Library
- Test files should be created with the `.test.tsx` extension
- Run tests in watch mode with `pnpm test`

### State Management

- Zustand for global state management
- React Query for server state management

## 📁 Project Structure

```
reactprokit/
├── src/
│   ├── components/     # Reusable components
│   ├── store/         # Zustand store
│   ├── hooks/         # Custom hooks
│   ├── pages/         # Page components
│   ├── types/         # TypeScript types
│   └── utils/         # Utility functions
├── test/
│   └── setup.ts       # Test configuration
├── public/            # Static assets
└── package.json       # Project dependencies
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
