# Next.js Internationalization Static Export

This project is bootstrapped with [Next.js](https://nextjs.org) and demonstrates a static export for an internationalized website. Each page is statically rendered into the `out` folder, ensuring fast and reliable content delivery.

## Static Rendering

- All pages (home, about, contact) are rendered statically.
- The export is performed at build time and output to the `out` folder.
- The static parameters include different languages (e.g., "en", "bs", "de") for which pages are generated.

## JSON Translations

- Translations are stored in JSON files located in the `/src/translations` folder.
- Each page imports its respective translations from these JSON files.
- During build time, the correct language text is injected into each page based on the URL parameter.

## Language Selector

- The `LanguageSelector` component (in `/src/components/LanguageSelector.tsx`) reads the current language from the URL.
- Users can change the language using a dropdown menu which triggers a route change, updating the displayed text accordingly.
- Supported languages are "bs" (default), "en", and "de".

## Build the Project

Before using Docker commands, create a production build to generate the `out` folder:

```bash
npm run build
```

## Docker Commands

To build the Docker image and run a container, use the following commands:

- **Build the Docker image**:
  ```bash
  docker build -t next-app-demo .
  ```

- **Run the container**:
  ```bash
  docker run -d -p 4400:4400 --name next-app-demo-container next-app-demo
  ```

## Getting Started (Commands)

Command to run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


