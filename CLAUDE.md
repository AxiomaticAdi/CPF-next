# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 event management/ticketing platform using TypeScript, React 19, and Tailwind CSS v4. The application displays events, allows users to browse events by date, and includes ticketing functionality.

## Commands

### Development
```bash
npm run dev        # Start development server with Turbopack
npm run build      # Build for production with Turbopack
npm run start      # Start production server
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
npm run fix-all    # Fix ESLint issues and format code
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **State Management**: React Context API (EventsContext at `app/contexts/EventsContext.tsx`)
- **Database**: Firebase Firestore
- **Styling**: Tailwind CSS v4 + CSS Modules
- **UI Components**: shadcn/ui (configured in `components.json`)
- **Form Validation**: Zod (installed but not actively used)

### Key Directories
- `/app` - Next.js App Router pages and application logic
  - `/app/config` - Firebase configuration
  - `/app/contexts` - React Context providers
  - `/app/services` - API services for Firebase operations
  - `/app/pages` - Page components (not routes - actual routes are in `/app`)
- `/components` - Reusable UI components including shadcn/ui components
- `/lib` - Utility functions

### Important Patterns

1. **Event Data Flow**: Events are fetched from Firebase Firestore via the EventsContext provider, which wraps the entire application. All event-related components consume this context.

2. **Environment Variables**: Currently using Vite-style variables (`import.meta.env.VITE_*`). These need to be migrated to Next.js style (`process.env.NEXT_PUBLIC_*`).

3. **Client-Side Heavy**: Most components are marked with "use client" due to the React Context usage. Consider server components where possible.

## Current Issues to Address

1. **Environment Variables**: The Firebase config uses `import.meta.env.VITE_*` which doesn't work in Next.js. Update to `process.env.NEXT_PUBLIC_*`.

2. **No Testing**: No testing framework is configured. Consider adding Jest or Vitest with React Testing Library.

3. **Missing Tailwind Config**: Using Tailwind v4 defaults without a configuration file.

## Firebase Integration

The app uses Firebase Firestore for data storage. Key services:
- `fetchEvents()` - Retrieves all events from Firestore
- `verifyAvailability()` - Checks ticket availability for an event

Firebase configuration is in `/app/config/firebase.ts`.