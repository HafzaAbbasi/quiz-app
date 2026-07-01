## Quiz App

A small interactive React quiz application built with Vite.

## Overview

This project lets users answer multiple-choice quiz questions and track their score. It includes a theme selector so the interface can switch between different visual styles.
## Live Demo
https://quiz-app-delta-five-96.vercel.app/

## Features

- Multiple-choice quiz questions
- Score tracking
- Theme switcher with several color themes
- Responsive layout for mobile and desktop
- Tailwind CSS styling

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- PostCSS

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Open the URL shown in the terminal to view the app in your browser.

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

- `src/App.jsx` — main app component and theme selector
- `src/components/Quiz/quiz.jsx` — quiz component and logic
- `src/components/Quiz/quiz.css` — quiz-specific styling
- `src/assets/data.js` — quiz question data
- `src/index.css` — global styles and Tailwind import

## Notes

The app uses Vite for fast development startup and build performance. You can customize the quiz questions in `src/assets/data.js`.

