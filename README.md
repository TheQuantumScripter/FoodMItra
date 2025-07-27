
# 🌮 FoodMitra – Street Food Raw Material Sourcing Web App

**FoodMitra** is a web-based platform built for **Tutedude's Web Development Hackathon 1.0** to solve the real-world problem of raw material sourcing for Indian street food vendors. It connects **street vendors** with **verified suppliers**, allowing easy, affordable, and trusted access to ingredients.

---

## 🚀 Features

### 👤 User Roles:
- **Vendors**: Can register/login, browse available ingredients, and view supplier info.
- **Suppliers**: Can register/login, add ingredients with price & category, and manage their product listings.

### 🔑 Authentication:
- Firebase Authentication (Login & Register)
- Separate dashboards for Vendor & Supplier

### 📦 Ingredient Management:
- Suppliers can add ingredient name, category, price.
- Vendors can view all listed ingredients with supplier name and price.

### 🧠 Smart UI:
- Ingredient listings update in real time
- Supplier and Ingredient sections dynamically load from database
- Stylish login modal with show/hide password option

### 🦸‍♂️ Footer Team Section:
- Displays developer names, GitHub and LinkedIn links with images in a neat horizontal layout

---

## 🛠 Tech Stack

| Area              | Tech Used                             |
|-------------------|----------------------------------------|
| Frontend          | HTML, CSS, JavaScript                  |
| Authentication    | Firebase Auth                          |
| Database          | Firebase Firestore                     |
| Hosting           | Netlify   |
| Icons & Fonts     | RemixIcon, Google Fonts (Pacifico etc) |

---

## 📁 Project Structure

```bash
📦 FoodMitra
├── img
├── index.html          # Main landing page with 
├── vendor.html         # Vendor dashboard to view 
├── supplier.html       # Supplier dashboard to add/
├── style.css           # Custom styles
├── firebase-config.js  # Firebase credentials/config
├── main.js             # Navbar toggle and other UI 
└── README.md           # This file
```

---

## 🔧 Setup Instructions

### 1. Clone or Download

```bash
git clone https://github.com/your-username/foodmitra.git
cd foodmitra
```

### 2. Setup Firebase

- Go to [Firebase Console](https://console.firebase.google.com/)
- Create a new project
- Enable **Authentication > Email/Password**
- Create a **Cloud Firestore** database
- Add `firebase-config.js` file like this:

```js
// firebase-config.js
const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "YOUR-PROJECT.firebaseapp.com",
  projectId: "YOUR-PROJECT-ID",
  storageBucket: "YOUR.appspot.com",
  messagingSenderId: "SENDER-ID",
  appId: "APP-ID"
};
firebase.initializeApp(firebaseConfig);
```

### 3. Run Project

Open `index.html` in your browser or use Live Server (VS Code) or host on Netlify.

---

## 📸 Screenshots
- Homepage
- Supplier dashboard
- Vendor dashboard
- Footer team section

---

## 🙋‍♀️ Team Web Spiders 🕷️

| Name              | GitHub                             | LinkedIn                          |
|-------------------|------------------------------------|-----------------------------------|
| Saish Kulkarni    | [GitHub](https://github.com/TheQuantumScripter) | [LinkedIn](https://www.linkedin.com/in/saish-kulkarni-384776320) |
| Anushka Deshmukh  | [GitHub](https://github.com/CodeWhizAnu) | [LinkedIn](https://www.linkedin.com/in/anushka-deshmukh-21b692319)     |
| Varad Kulkarni    | [GitHub](https://github.com/varad) | [LinkedIn](https://linkedin.com/in/varad)         |

---

## 📩 Contact

📧 Email: info@foodmitra.in  
📍 Location: Kopargaon, Maharashtra, India

---

## 📜 License

This project is created for learning and competition purposes but don't use this as tamplate without permission

---

✨ _Built with ❤️ by Team FoodMitra – Web Spiders_


---


