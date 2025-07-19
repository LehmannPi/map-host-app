# Module Federation Setup for Map Point Registration

This document explains how to set up Module Federation to load the map point registration component from a remote application.

## Current Setup

The map interface is currently using a local `MapPointRegistration` component as a placeholder. To implement true Module Federation, you'll need to:

1. Create a separate remote application for the map point registration
2. Configure the host application to load the remote component
3. Update the Vite configuration

## Step 1: Create Remote Application

Create a new application (e.g., `map-point-registration-app`) with the following structure:

```
map-point-registration-app/
├── package.json
├── vite.config.ts
├── src/
│   ├── main.tsx
│   └── components/
│       └── MapPointRegistration.tsx
```

### Remote App Vite Configuration

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'map_point_registration_app',
      filename: 'remoteEntry.js',
      exposes: {
        './MapPointRegistration': './src/components/MapPointRegistration.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
});
```

### Remote App Entry Point

```typescript
// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import MapPointRegistration from './components/MapPointRegistration';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapPointRegistration />
  </React.StrictMode>
);
```

## Step 2: Update Host Application Configuration

Update the host app's `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'map_host_app',
      remotes: {
        map_point_registration_app:
          'http://localhost:3001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
});
```

## Step 3: Create Dynamic Component Loader

Create a component that dynamically loads the remote:

```typescript
// src/components/RemoteMapPointRegistration.tsx
import { useState, useEffect } from 'react';

interface MapPoint {
  id: string;
  name: string;
  description: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface RemoteMapPointRegistrationProps {
  onPointAdded?: (point: MapPoint) => void;
}

export function RemoteMapPointRegistration({
  onPointAdded,
}: RemoteMapPointRegistrationProps) {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRemoteComponent = async () => {
      try {
        // Load the remote module
        const module = await import(
          'map_point_registration_app/MapPointRegistration'
        );
        setComponent(() => module.default);
      } catch (err) {
        console.error('Failed to load remote component:', err);
        setError('Failed to load map point registration component');
      }
    };

    loadRemoteComponent();
  }, []);

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-700">{error}</p>
      </div>
    );
  }

  if (!Component) {
    return (
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-gray-500">Loading map point registration...</p>
      </div>
    );
  }

  return <Component onPointAdded={onPointAdded} />;
}
```

## Step 4: Update App.tsx

Replace the local component with the remote loader:

```typescript
// In App.tsx, replace:
import MapPointRegistration from './components/MapPointRegistration';

// With:
import { RemoteMapPointRegistration } from './components/RemoteMapPointRegistration';

// And replace:
<MapPointRegistration onPointAdded={handleNewPointAdded} />

// With:
<RemoteMapPointRegistration onPointAdded={handleNewPointAdded} />
```

## Step 5: Type Declarations

Create type declarations for the remote module:

```typescript
// src/types/remote-modules.d.ts
declare module 'map_point_registration_app/MapPointRegistration' {
  import { ComponentType } from 'react';

  interface MapPointRegistrationProps {
    onPointAdded?: (point: any) => void;
  }

  const MapPointRegistration: ComponentType<MapPointRegistrationProps>;
  export default MapPointRegistration;
}
```

## Running the Applications

1. **Remote App**: Run on port 3001

   ```bash
   cd map-point-registration-app
   npm run dev -- --port 3001
   ```

2. **Host App**: Run on port 3000
   ```bash
   cd map-host-app
   npm run dev -- --port 3000
   ```

## Benefits of This Setup

- **Independent Development**: The map point registration can be developed and deployed independently
- **Team Separation**: Different teams can work on different parts of the application
- **Technology Flexibility**: The remote can use different technologies if needed
- **Performance**: Only load the registration component when needed

## Current Implementation

The current implementation uses a local component as a placeholder. To switch to Module Federation:

1. Follow the steps above to create the remote application
2. Update the host configuration
3. Replace the local component with the remote loader
4. Test the integration

This setup provides a foundation for true micro-frontend architecture while maintaining the current functionality.
