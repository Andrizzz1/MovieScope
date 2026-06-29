# 🎬 MovieScope

> A movie discovery web app where you can search any movie and instantly view its plot, cast, ratings, runtime, and more.

---

## 📽️ Demo

https://github.com/user-attachments/assets/a50565d9-b84c-4f30-8ae4-57aa952be3a2


---

## ✨ Features

- 🔍 Search any movie by title
- 🎭 View full cast, director, and writer details
- ⭐ See ratings from IMDb, Rotten Tomatoes, and Metacritic
- 📖 Read the movie plot and genre
- 🌍 Language, country, awards, and box office info
- 🎨 Fluid splash cursor animation background

---

## 🛠️ Tech Stack

| Frontend | Backend |
|----------|---------|
| ReactJS | Node.js |
| TypeScript | Express |
| Tailwind CSS | Axios |
| ReactBits | dotenv |

**API:** [OMDB API](https://www.omdbapi.com/)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-link>
cd MovieScope
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get a free API key

Go to [https://www.omdbapi.com/](https://www.omdbapi.com/) and register for a free API key.

### 4. Set up your `.env` file

Create a `.env` file in the **root of your project directory** and add:

```env
OMBN_API=YOUR_API_KEY_HERE
```

> ⚠️ Never share or commit your `.env` file. It is already included in `.gitignore`.

### 5. Start the backend server

```bash
cd server
npx ts-node index.ts
```

### 6. Start the frontend

```bash
npm run dev
```

The app will be running at `http://localhost:5173`

---

## 📁 Project Structure

```
MovieScope/
├── src/
│   ├── components/
│   │   └── SplashCursor.tsx
│   └── App.tsx
├── index.ts
├── .env
├── .gitignore
└── README.md
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
