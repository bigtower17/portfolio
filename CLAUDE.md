# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. The project features a modern, responsive design with theme switching capabilities (Sober and Beast themes).

## Common Development Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:3000

# Build
npm run build        # Build production-ready static site (output: ./out)

# Production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint for code linting
```

## Architecture & Key Components

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 with custom theme system
- **UI Components**: Custom component library in `/src/components/ui/`
- **Animations**: Framer Motion for smooth transitions
- **API Integration**: OpenAI integration for demo features

### Project Structure
- `/src/app/` - Next.js App Router pages and layouts
- `/src/components/` - React components organized by type:
  - `/layout/` - Layout components (navbar, footer)
  - `/sections/` - Page sections (hero, about, projects, etc.)
  - `/ui/` - Reusable UI components (button, card, input, etc.)
- `/src/lib/` - Utility functions and helpers

### Key Features
1. **Theme System**: Custom dual-theme implementation (Sober/Beast) using CSS variables
2. **Static Export**: Configured for static hosting with `output: 'export'`
3. **API Routes**: Demo API endpoint at `/api/demo/route.ts`
4. **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Build & Deployment
- **Static Build**: Generates static files in `./out` directory
- **Docker Support**: Multi-stage Dockerfile for optimized production builds
- **CI/CD**: GitHub Actions workflow for automated VPS deployment
- **SSL**: Let's Encrypt integration for HTTPS support
- **Memory Optimization**: Build uses `NODE_OPTIONS="--max-old-space-size=4096"`

### Component Conventions
- Use existing UI components from `/src/components/ui/`
- Follow the established pattern for new components (TypeScript, Tailwind classes)
- Utilize `cn()` utility from `/src/lib/utils.ts` for conditional classNames
- Components use CVA (class-variance-authority) for variant management

### Important Configuration
- **Path Aliases**: `@/*` maps to `./src/*`
- **ESLint**: Warnings allowed during build (`ignoreDuringBuilds: true`)
- **TypeScript**: Strict mode enabled, build errors not ignored
- **Images**: Unoptimized for static export compatibility