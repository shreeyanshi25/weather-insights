# 🌍✨ Weather Insights

[![React](https://img.shields.io/badge/Frontend-React%20+%20Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![OpenWeather API](https://img.shields.io/badge/Weather-OpenWeatherAPI-eb6e4b?style=for-the-badge&logo=openweathermap&logoColor=white)](https://openweathermap.org/)
[![NewsAPI](https://img.shields.io/badge/Data-NewsAPI-blue?style=for-the-badge)]()
[![Deployed](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)

> **Built by**: Shreeyanshi Yadav · B.Tech CSE (AI/ML) · GLBITM · 2026 Batch  
> **Target roles**: Frontend Developer Intern / Software Engineer Intern

**Weather Insights** is a modern React web application that provides real-time meteorological conditions and aggregated local news headlines for any global city. By concurrently fetching and synthesizing data from multiple third-party APIs, it delivers a unified dashboard experience.

*(Live Demo is deployed on Vercel — check the repository 'About' section for the link)*

---

## 📸 Project Preview

![Weather App Screenshot](https://github.com/shreeyanshi25/weather-insights/blob/main/Screenshot%20(1144).png?raw=true)

---

## ✨ Engineering Features

- 🔍 **Dynamic Search Engine** – Instantly fetches and resolves global city coordinates.
- 🌡️ **Real-Time Meteorology** – Displays highly accurate temperature, humidity, and wind speed metrics.
- ⛅ **Dynamic State UI** – Renders appropriate weather condition icons (sunny, cloudy, rain, etc.) based on API payloads.
- 📰 **Concurrent Data Fetching** – Simultaneously calls NewsAPI to render local journalism correlating to the searched city.
- 📱 **Responsive Layout** – Fully mobile-responsive CSS structure ensuring usability across devices.
- 🛡️ **Robust Error Handling** – Manages bad network states and invalid user inputs gracefully.

---

## 🛠️ Tech Stack Architecture

- **Frontend Framework:** React.js (via Vite for optimized HMR & bundling)
- **Styling:** Vanilla CSS (Flexbox/Grid responsiveness)
- **Data Integrations:**
  - `OpenWeather API` (Meteorological Data)
  - `NewsAPI` (Aggregated Journalism)
- **Deployment:** Vercel

---

## 🚀 How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/shreeyanshi25/weather-insights.git
cd weather-insights
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Configuration
Create a `.env` file in the root folder and add your API keys. Note: `.env` should never be committed to Git.

```env
VITE_APP_ID=your_openweather_api_key_here
VITE_NEWS_API_KEY=your_newsapi_key_here
```

### 4. Start the Development Server
```bash
npm run dev
```

The application will run locally at `http://localhost:5173`.

---

## 🧠 Key Learnings & Takeaways

- ⚡ **Asynchronous Javascript:** Mastered concurrent `fetch()` requests and Promise handling within React `useEffect` hooks.
- 🔑 **Secure Secrets Management:** Learned to securely expose environment variables in Vite using the `VITE_` prefix and Gitignore boundaries.
- 🔗 **API Synthesis:** Effectively combined data from two entirely different JSON REST APIs into a single cohesive UI state.
- 🎨 **Responsive UI/UX:** Styled a clean, consumer-grade user interface.

---

### 👩‍💻 Author
Made with ❤️ by Shreeyanshi Yadav  
📧 **Email:** yadavshreeyanshi09@gmail.com  
🌐 **GitHub:** [@shreeyanshi25](https://github.com/shreeyanshi25)
