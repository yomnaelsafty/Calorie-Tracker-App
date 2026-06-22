# 🍎 Calorie Tracker App

A modern, lightweight web application built with **React** and **React Router** to help users track their daily calorie intake. The app features a clean UI, persistent storage using LocalStorage, and dynamic data management.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB )
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white )
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black )

## 🚀 Live Demo
Check out the live application here:  
[**https://yomnaelsafty.github.io/Calorie-Tracker-App/**](https://yomnaelsafty.github.io/Calorie-Tracker-App/ )

## ✨ Features
- **Daily Tracking:** Add and manage food records for specific dates.
- **Persistent Storage:** Data is saved in `localStorage` (persists after refresh).
- **Dynamic Calculations:** Real-time total calorie calculation.
- **Detailed View:** Dedicated pages for each record using dynamic routing.
- **Modern UI:** Clean, card-based responsive design.
- **CRUD Operations:** Full support for adding and deleting records.

## 🛠️ Tech Stack
- **Frontend:** React.js (Functional Components & Hooks)
- **Build Tool:** Vite
- **Routing:** React Router v6
- **State Management:** Context API
- **Styling:** CSS Modules

## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yomnaelsafty/Calorie-Tracker-App.git

2. Navigate to the project directory: cd Calorie-Tracker-App
3. Install dependencies: npm install
4. Start the development server: npm start

## 📂 Project Structure
src/
├── components/       # Reusable UI components (Buttons, Cells, etc. )
│   └── caloriesRecordSection/ # Logic for listing and recording calories
├── pages/            # Page-level components (LandingPage, TrackPage, DetailPage)
├── utils/            # Custom hooks (useLoadData) and helper functions
├── APP-Context.jsx   # Global state management for calories and dates
└── App.js            # Main routing and application configuration

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License
This project is MIT licensed.

## Created with ❤️ by Yomna ElSafty

