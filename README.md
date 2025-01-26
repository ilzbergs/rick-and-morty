# Rick and Morty API Project

This project fetches data from the [Rick and Morty API](https://rickandmortyapi.com/) and displays a list of characters. It allows infinite scrolling to load characters as you scroll down the page.

## Features

- **Infinite Scroll**: The list of characters loads more as you scroll down.
- **Character Details**: Click on a character to view detailed information.
- **Loading Spinner**: A loading spinner is displayed while data is being fetched.
- **Error Handling**: If an error occurs during the fetch operation, an error message is displayed.

## Technologies Used

- **Vue.js**: For the frontend framework.
- **Vue Router**: For routing between pages.
- **PrimeVue**: For UI components like the progress spinner.
- **VueUse**: For infinite scroll functionality.
- **Fetch API**: To interact with the Rick and Morty API.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

    ```bash
   git clone https://github.com/ilzbergs/rick-and-morty.git
```
### Project setup

    ```sh
npm install
```

### Compile and Hot-Reload for Development

    ```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

    ```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

    ```sh
npm run lint
```
