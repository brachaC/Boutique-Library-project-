# Boutique Library

Boutique Library is a polished front-end application built with React, TypeScript, and Vite. It showcases a modern UI architecture with strong typing, fast hot module reloading, and a build pipeline optimized for production.

## Overview

This repository contains the client-side implementation of Boutique Library, designed for technical review and portfolio presentation. The application demonstrates effective React development practices, clean code organization, and developer-friendly tooling.

## What the application does

Boutique Library is designed to deliver a library-style browsing experience with a focus on usability and performance. Key user workflows include:

- Browsing available books or collections
- Viewing detailed item pages with structured information
- Navigating a responsive interface built for desktop and mobile
- Exploring categorized content through a modern catalog layout

## Key strengths

- Responsive, component-driven UI tailored for modern web interaction
- Well-separated presentation and business logic for easier maintenance
- Strong TypeScript typing to reduce runtime issues
- Fast developer iteration with Vite and hot module reloading
- Reliable code quality via ESLint configuration

## Core features

- Modular component architecture for reuse and scalability
- Type-safe application flow across components and utilities
- Production-oriented bundling and optimized output
- Support for static asset handling, styles, and client-side routing
- Clear project conventions that make onboarding and review simple

## Architecture

The application follows a component-based structure with feature-oriented organization:

- Reusable UI components
- Shared TypeScript models and utility functions
- Separate configuration for build and linting
- Centralized entry points for application initialization

## Repository structure

- `src/` – primary application source files and components
- `public/` – static assets and application entry points
- `package.json` – scripts, dependencies, and metadata
- `tsconfig.json` / `tsconfig.app.json` – TypeScript build configuration
- `eslint.config.js` – linting rules and quality enforcement

## Screenshots

### Home page

![Home](docs/home.png)

### Book details

![Book Details](docs/book-details.png)

> Replace these images with actual screenshots from the application to make the repository more compelling.

## Requirements

- Node.js 20+
- npm 10+
- Modern browser for local preview

## Setup

To install dependencies, run:

```bash
npm install
```

To run the development server locally:

```bash
npm run dev
```

To build the application for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Recommended use

This repository is well suited for demonstrating front-end engineering skills, including:

- React component design
- TypeScript-based development
- Build and deployment readiness
- Maintainable, production-focused tooling

## Design decisions

- TypeScript was chosen for type safety and maintainability
- Vite was selected for fast local development and optimized builds
- Component reuse reduces duplication and improves consistency
- Clear separation between UI, logic, and configuration keeps the codebase manageable

## License

MIT License
