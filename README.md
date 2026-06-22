# 🍎 Calorie Tracker App

A modern, lightweight web application built with **React** and **React Router** to help users track their daily calorie intake. The app features a clean UI, persistent storage using LocalStorage, and dynamic data management.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB )
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black )
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white )

## 🚀 Live Demo
Check out the live application here:  
[**https://yomnaelsafty.github.io/Calorie-Tracker-App/**](https://yomnaelsafty.github.io/Calorie-Tracker-App/ )

## ✨ Features
- **Daily Tracking:** Add and manage food records for specific dates.
- **Persistent Storage:** Uses `localStorage` to save your data even after refreshing the page or closing the browser.
- **Dynamic Calculations:** Automatically calculates total calories for the selected day.
- **Detailed View:** View specific details for each record via dynamic routing (`/:recordId`).
- **Modern UI:** Responsive design with a clean, user-friendly card-based interface.
- **CRUD Operations:** Support for adding and deleting records with real-time state updates.
- **Date Filtering:** Easily filter and view records for any specific day.

## 🛠️ Tech Stack
- **Frontend:** React.js (Functional Components)
- **Routing:** React Router v6
- **State Management:** React Hooks (`useState`, `useEffect`, `useContext`)
- **Styling:** CSS Modules for component-scoped styling
- **Storage:** Browser LocalStorage API

## 📦 Installation & Setup
1. **Clone the repository:**
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


   ```bash
   git clone https://github.com/yomnaelsafty/Calorie-Tracker-App.git
