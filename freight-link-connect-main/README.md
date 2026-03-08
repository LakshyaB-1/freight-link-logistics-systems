# Freight Link Logistics Systems

## Project Overview

**Freight Link Logistics Systems** is a modern logistics and freight forwarding website designed to present company services, connect with clients, and provide a professional online presence for a logistics business.

The platform highlights freight solutions, company capabilities, and service offerings while maintaining a fast, responsive, and scalable architecture using modern web technologies.

---

## How Can I Edit This Code?

There are multiple ways to work with and update this project.

### Use Your Preferred IDE

You can work locally using any development environment such as **VS Code**, **WebStorm**, or any preferred IDE.

Follow these steps to run the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_REPOSITORY_URL>

# Step 2: Navigate into the project directory
cd freight-link-logistics-systems

# Step 3: Install required dependencies
npm install

# Step 4: Start the development server
npm run dev
```

After running the development server, open the local URL shown in your terminal (usually `http://localhost:5173`).

The development server supports **hot reloading**, so changes will appear instantly in the browser.

---

### Edit Directly in GitHub

You can also edit files directly inside the repository.

Steps:

1. Navigate to the file you want to modify.
2. Click the **Edit (pencil icon)**.
3. Make your changes.
4. Commit the update.

---

### Use GitHub Codespaces

GitHub Codespaces allows you to develop directly in a cloud-based environment.

Steps:

1. Go to the repository main page.
2. Click **Code**.
3. Select the **Codespaces** tab.
4. Click **Create Codespace**.
5. Edit files and commit changes when finished.

---

## Technologies Used

This project is built using modern frontend technologies:

* **Vite** – fast development and build tool
* **React** – component-based UI library
* **TypeScript** – strongly typed JavaScript
* **Tailwind CSS** – utility-first CSS framework
* **shadcn/ui** – modern UI component library

These technologies allow the application to remain fast, scalable, and easy to maintain.

---

## Running the Project

To run the project locally:

```sh
npm install
npm run dev
```

To build the production version:

```sh
npm run build
```

The optimized production files will be generated inside the **dist** folder.

---

## Deployment

The project can be deployed on modern hosting platforms such as:

* Vercel
* Netlify
* AWS
* Any static hosting provider

Typical deployment workflow:

1. Build the project

```sh
npm run build
```

2. Upload the contents of the **dist** folder to your hosting platform.

---

## Custom Domain

Once deployed, a custom domain can be connected through the hosting platform's domain settings.

Typical process:

1. Purchase a domain from a domain registrar.
2. Add the domain in your hosting platform dashboard.
3. Update DNS records as instructed.

---

## Project Structure

```
freight-link-logistics-systems
│
├── public          # Static assets
├── src             # Application source code
│   ├── components  # Reusable UI components
│   ├── pages       # Application pages
│   ├── hooks       # Custom React hooks
│   └── utils       # Utility functions
│
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

---

## Development Notes

* The project follows a **component-based architecture**.
* Tailwind CSS is used for responsive UI development.
* TypeScript improves code reliability and maintainability.
* The structure allows easy scaling and feature expansion in the future.

---

## License

This project is intended for internal or commercial use depending on deployment requirements.
