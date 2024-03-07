# DevOverflow App

## Introduction

The "DevOverflow" project is a web platform inspired by the popular Stack Overflow service, designed to facilitate users in sharing knowledge, asking questions, and obtaining answers on various topics related to programming and technology. DevOverflow offers users the ability to ask questions, provide answers, rate content, and build a community of experts in the IT field. 

You can try it out here: **[https://devflowapp.vercel.app](https://devflowapp.vercel.app)**

## Technologies

- **[Node.js](https://nodejs.org/en/docs/)** - JavaScript runtime environment for executing server-side code.
- **[Next.js](https://nextjs.org/docs)** - React framework for building efficient and scalable web applications.
- **[TypeScipt](https://www.typescriptlang.org/docs/)** - Typed superset of JavaScript for building maintainable applications.
- **[Tailwind CSS](https://tailwindcss.com/docs)** - Utility-first CSS framework for building custom designs with ease.
- **[Shadcn/UI](https://ui.shadcn.com/docs)** - Comprehensive components library for building modern user interfaces.
- **[MongoDB](https://docs.mongodb.com/)** - NoSQL database for flexible and scalable data storage solutions.
- **[Clerk](https://clerk.com/docs)** - User authentication service for seamless and secure authentication.

## Structure
- `/app` - Application routing
  - `(auth)` - Routes for authentication
  - `(root)` - Routes for core application
  - `/api` - API routes
  - `favicon.ico` - Icon displayed in the browser
  - `globals.css` - Global CSS and Tailwind styles
  - `layout.tsx` - Root application layout
- `/public` - Static files
  - `/assets` - Images, fonts etc.
- `/src` - Source files of the application
  - `/actions` - Server actions
  - `/components` - UI components
  - `/constants` - Constant values
  - `/context` - Theme context
  - `/database` - Database-related files
  - `/styles` - Styles for application
  - `/types` - TypeScript type definitions
  - `/utils` - Utility functions


- `/` - Configurations files in root directory:
  
  - `.gitignore` - List of files to ignore by git
  - `components.json` - Shadcn components configuration
  - `middleware.ts` - Authentication middleware for the Clerk
  - `next.config.js` - Configuration file for Next.js
  - `tailwind.config.js` - Tailwind CSS configuration
  - `tsconfig.json` - TypeScript configuration
  - `package.json` - Lists project metadata and dependencies
  - `README.md` - Documentation of the project

## Setup

Follow these steps to set up the project locally.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the repository**

```bash
git clone https://github.com/fikasp/devflow.git
cd devflow
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Setup Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
OPENAI_API_KEY=
CLERK_SECRET_KEY=
MONGODB_URL=
NEXT_CLERK_WEBHOOK_SECRET=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_TINY_EDITOR_API_KEY=
NEXT_PUBLIC_SERVER_URL=
```

Fill in the environmental variable values with your actual credentials.
You can obtain these credentials by signing up on the [MongoDB](https://www.mongodb.com/) and [Clerk](https://clerk.com/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.


## More
For more information please contact [fikasp@gmail.com](mailto:fikasp@gmail.com).
