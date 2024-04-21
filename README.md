![LIRUS](/docs/logo.jpeg)

# LIRUS
This package template provides a boilerplate setup for building modern web applications using Laravel, Inertia.js, React, and Shadcn-UI. It leverages Laravel Breeze for authentication and integrates Inertia.js to create seamless single-page applications (SPAs) with React components and Shadcn-UI for styling.

## Features
- **Laravel**: A powerful PHP framework for building web applications.
- **Laravel Breeze**: A minimal authentication starter kit for Laravel.
- **Inertia.js**: A modern JavaScript library for building SPAs with server-side rendering.
- **React**: A popular JavaScript library for building user interfaces.
- **TailwindCSS**: A utility-first CSS framework for quickly building custom designs.
- **Shadcn-UI**: A UI framework based on TailwindCSS for building beautiful and responsive UI components.

## Requirements
- PHP >= 7.4
- Composer
- Node.js
- NPM or Yarn

## Installation
1. Clone this repository:

```bash
git clone https://github.com/SylvanoTombo/LIRUS.git myawesomeapp
```

2. Navigate to the project directory:

```bash
cd myawesomeapp
```

3. Install PHP dependencies with Composer:

```bash
composer install
```
4. Install JavaScript dependencies with NPM:

```bash
npm install
```

or with Yarn:

```bash
yarn install
```

5. Copy the environment file:

```bash
cp .env.example .env
```

6. Generate application key:

```bash
php artisan key:generate
```

Run database migrations:

```bash
php artisan migrate
```

## Usage
To start the development server and build assets, run:

```bash
npm run dev
```

or for production:

```bash
npm run prod
```

Access the application in your browser at http://localhost:8000.

## Additional Configuration
- Configure your database settings in the **.env** file.
- Customize authentication views and routes in Laravel Breeze.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests for any improvements or feature suggestions.

## License
This project is open-source and available under the MIT License.
