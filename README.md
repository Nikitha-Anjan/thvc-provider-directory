# 🩺 THVC Provider Directory — React Frontend Challenge

This project implements the **Provider Directory & Booking flow** for the **TELUS Health Virtual Care (THVC)** patient app.  
It allows patients to browse specialists, view detailed profiles, and book appointments directly — all using **simulated data** (no backend required).

---

## ⚙️ Tech Stack & Software Used

| Tool / Library | Purpose |
|----------------|----------|
| **React (Create React App)** | Framework for building the user interface |
| **React Router DOM** | Handles navigation between pages (List → Profile → Booking → Confirmation) |
| **Styled-Components** | Styling with Figma-matched spacing, colors, and typography |
| **JavaScript (ES6)** | Core logic for API simulation and UI interactivity |
| **Mock API (`/src/api/providers.js`)** | Simulates fetching provider data (no backend needed) |
| **Node.js & npm** | Runtime and package manager used to run and manage dependencies |
| **Git / GitHub** | Version control and repository hosting |
| **VS Code / WebStorm** | Recommended IDEs for local development |
| **Modern Browser (Chrome, Edge, Firefox)** | To view and test the app |

---

## 🧭 How to Run the Project Locally

### 1️⃣ Prerequisites

Make sure you have these installed:

- **Node.js ≥ 18.x**
- **npm ≥ 9.x**
- **Git**

Check your versions:
```bash
node -v
npm -v
git -v
```

---

### 2️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/thvc-provider-directory.git
cd thvc-provider-directory
```

---

### 3️⃣ Install Dependencies
```bash
npm install
```

---

### 4️⃣ Start the App
```bash
npm start
```

This runs the app in **development mode**.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

### 5️⃣ Build for Production
```bash
npm run build
```
Creates an optimized production build in the `/build` directory.

---

## 🧩 Main Features

✅ Browse list of specialists  
✅ Search by **name** or **profession/title**  
✅ View detailed provider profile  
✅ Select a **date** and **time** for booking  
✅ Confirm the appointment  
✅ Consistent Figma-based color, spacing, and typography  
✅ No backend — uses simulated API data for demo purposes  

---

## 🎨 Design & Styling

This implementation follows the **Figma design** provided in the challenge prompt:  
👉 [Figma — THVC Provider Directory](https://www.figma.com/community/file/1139212771973017344)

- **Desktop layout only** (per assignment guidelines)  
- Colors, spacing, and typography reflect Figma specs  
- Uses **Styled Components** and a shared `theme.js` for design consistency  

---

## 🗂️ Project Structure

```
patient-booking-portal/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── providers.js           # Simulated API data
│   ├── components/
│   │   ├── Header.js
│   │   └── ProviderCard.js
│   ├── pages/
│   │   ├── ProviderList.js        # Provider search & browse page
│   │   ├── ProviderProfile.js     # Individual provider details
│   │   ├── BookingForm.js         # Select date & time
│   │   └── Confirmation.js        # Booking confirmation page
│   ├── styles/
│   │   └── GlobalStyles.js
│   ├── App.js                     # Routes setup
│   ├── theme.js                   # Colors, fonts, spacing
│   └── index.js                   # Entry point
├── package.json
└── README.md
```
