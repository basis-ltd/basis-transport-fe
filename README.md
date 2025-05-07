# Basis Transport

A modern, minimal React application for the Basis Transport project. This app provides a foundation for building scalable, maintainable web interfaces using the latest frontend technologies.

## Tech Stack
- **React 19** – UI library
- **TypeScript** – Static typing
- **Vite** – Fast build tool and dev server
- **Tailwind CSS** – Utility-first CSS framework
- **Lucide React** – Icon library
- **ESLint** – Linting and code quality

## Project Structure

```
basis-transport-fe/
  src/
    adapters/         # Storage and external adapters
      storage/
    api/              # API logic (queries, mutations, rootApi)
      queries/
      mutations/
    components/       # Reusable UI components
      custom/
      inputs/
      table/
      ui/
    constants/        # App-wide constants
    containers/       # Layout and navigation containers
      navigation/
    helpers/          # Utility/helper functions
    lib/              # General utilities
    pages/            # Route-based pages
      auth/
      common/
      dashboard/
      trips/
    routes/           # Routing logic and outlets
      outlets/
    states/           # State management (store, slices, hooks)
      slices/
    types/            # TypeScript types and entities
    usecases/         # Business logic hooks (by domain)
      auth/
      common/
      trips/
  public/             # Static assets
  ...                 # Config and root files
```

## Key Features & Changes
- **Modular Architecture:** Clear separation of concerns with dedicated folders for API, business logic (usecases), state management, and UI components.
- **Typed Entities:** All domain models and types are defined in `src/types` for strong type safety.
- **Reusable Components:** UI is built from modular, reusable components under `src/components`.
- **State Management:** Centralized Redux store and slices in `src/states`.
- **API Layer:** Organized API queries and mutations for scalable data fetching.
- **Hooks-based Usecases:** Business logic is encapsulated in hooks under `src/usecases` for reusability and testability.
- **Modern Tooling:** Uses Vite, Tailwind CSS, and ESLint for a fast, modern development experience.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```
4. **Preview production build:**
   ```bash
   npm run preview
   ```
5. **Lint the codebase:**
   ```bash
   npm run lint
   ```