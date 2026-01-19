# Frontend Directory

This directory will contain the Angular frontend application.

## Setup

To initialize the Angular frontend:

```bash
# Navigate to the project root
cd /path/to/chippin-in-pi

# Install Angular CLI globally (if not already installed)
npm install -g @angular/cli@21

# Create Angular application in the frontend directory
ng new frontend --routing --style=css --ssr

# Or for Tailwind CSS support
ng new frontend --routing --style=scss --ssr
cd frontend
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

## Development

```bash
# Start development server
npm run frontend:dev

# Or use the CLI
chippin frontend start
```

## Structure (Planned)

```
frontend/
├── src/
│   ├── app/
│   │   ├── components/      # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── services/        # Angular services
│   │   ├── models/          # TypeScript types/interfaces
│   │   └── shared/          # Shared modules
│   ├── assets/              # Static assets
│   └── environments/        # Environment configs
└── angular.json
```
