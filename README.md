# React Vite Boilerplate 🧪⚛️

A modern, scalable, and production-ready React (with TypeScript) boilerplate powered by **Vite**, **TailwindCSS**, **React Router**, **Redux Toolkit**, and **React Query**. Includes built-in support for i18n, form handling, and persistent state.

---

## 🚀 Features

- ⚡️ **Vite** — lightning-fast dev server and build tool.
- ⚛️ **React 19** + **React Router v7** — modern routing setup.
- 🔒 **Protected Routes** — via custom \`ProtectedRoute\` wrapper.
- 💬 **Internationalization (i18n)** — \`i18next\` & \`react-i18next\` with auto language detection.
- 🧠 **State Management** — \`Redux Toolkit\` + \`redux-persist\` for persistence.
- 📡 **API Handling** — with \`axios\` and **React Query** for fetching and caching.
- 🎯 **Typed Everything** — powered by \`TypeScript\`.
- 🎨 **Tailwind CSS v4** — modern utility-first styling.
- ✅ **Formik + Yup** — robust form management and validation.
- 🔍 **Linting & Formatting** — \`eslint\`, \`prettier\`, \`husky\`, and \`lint-staged\`.
- 🔧 **Environment Configs** — \`.env\` support for multiple modes: local, staging, production.
- 📁 **Scalable Folder Structure** — ready for real-world apps.

---

## 🗂️ Project Structure

```bash
src/
├── assets/ # Static files (images, SVGs)
├── components/ # Reusable UI components
├── constants/ # Shared app constants
├── hooks/ # Custom React hooks
├── i18n/ # i18n config & translation files
├── layouts/ # Page-level layouts (e.g. AuthLayout)
├── pages/ # Route-based pages
├── routes/ # Route configs + guards
├── services/ # API services (axios)
├── store/ # Redux slices & configuration
├── utils/ # Utility functions/helpers
├── main.tsx # Root render entry
└── vite-env.d.ts # Vite typings
```

---

## 🧪 Scripts

```

# Run local dev server

npm run dev

# With custom environment

npm run dev:local
npm run dev:staging
npm run dev:prod

# Build

npm run build

# Preview build

npm run preview

# Lint

npm run lint

# Husky prepare (for git hooks)

npm run prepare
```

---

## 📦 Dependencies

| Tool                           | Purpose                |
| ------------------------------ | ---------------------- |
| \`vite\`                       | Fast build tool        |
| \`react\`, \`react-dom\`       | Core React libraries   |
| \`react-router-dom\`           | Routing                |
| \`@reduxjs/toolkit\`           | Redux state management |
| \`redux-persist\`              | State persistence      |
| \`@tanstack/react-query\`      | Server state & caching |
| \`formik\` + \`yup\`           | Forms & validation     |
| \`tailwindcss\`                | Utility-first styling  |
| \`i18next\`, \`react-i18next\` | Internationalization   |

---

## 🛠️ Dev Tools & Plugins

- \`eslint\`, \`prettier\`, \`husky\`, \`lint-staged\`: Code quality
- \`vite-plugin-svgr\`: Import SVGs as React components
- \`vite-tsconfig-paths\`: Type-safe path aliasing (\`@src/...\`)

---

## 🌍 Environment Files

Supports multiple \`.env\` files:

- \`.env\`
- \`.env.local\`
- \`.env.staging\`
- \`.env.production\`

---

## 🧹 Linting + Pre-commit

Configured with:

- \`eslint\` (React + TypeScript rules)
- \`prettier\`
- \`husky\` pre-commit hook
- \`lint-staged\` to run linters on staged files

---

## Todo

- Add usage docs in readme

---

## 📄 License

MIT — feel free to use, extend, and contribute.

---

## 📌 Author

**React Vite Boilerplate** crafted by **Awais Ali Kolachi**
