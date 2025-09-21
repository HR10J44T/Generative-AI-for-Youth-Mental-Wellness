# 🌱 AI Youth Wellness Companion

**Generative AI for Youth Mental Wellness**  

AI Youth Wellness Companion is a **React-based web application** designed to empower teenagers and young adults to monitor, understand, and improve their mental wellness. Leveraging **Generative AI** and **Google services**, it delivers personalized wellness suggestions, mood tracking, resources, and actionable insights — all in one seamless, interactive platform.  

---

## ✨ Features

- **Mood Tracking:** Log moods and daily activities via **Google Forms**, stored in **Google Sheets**.  
- **AI-Powered Suggestions:** Personalized wellness strategies generated with **Google Vertex AI**.  
- **Resource Library:** Curated articles, exercises, and videos hosted on **Google Drive / Sites**.  
- **Notifications & Reminders:** Wellness tips and check-ins delivered via **Gmail & Google Calendar**.  
- **Interactive Dashboard:** Visualize mood trends and progress using **Looker Studio**.  
- **Responsive & Modern UI:** Built with **React**, fully mobile-friendly, intuitive, and engaging.  

---

## 🛠️ Technology Stack

- **Frontend:** React, HTML5, CSS3, JavaScript  
- **Backend / Automation:** Google Apps Script  
- **AI & Data:** Google Forms, Google Sheets, Google Vertex AI, Looker Studio  
- **Notifications & Scheduling:** Gmail, Google Calendar  
- **Content Hosting:** Google Drive / Google Sites  

---

## 🏗️ Architecture

```mermaid
graph TD
A[User] -->|Logs Mood| B[Google Form]
B --> C[Google Sheets]
C --> D[Vertex AI]
D --> E[Wellness Suggestions]
E --> F[React Frontend]
C --> G[Looker Studio Dashboard]
F -->|Notifications| H[Gmail & Calendar]
````

1. User submits mood/activity via **Google Forms**.
2. Responses are stored in **Google Sheets**.
3. **Vertex AI** analyzes data and generates personalized suggestions.
4. **React frontend** displays suggestions, resources, and dashboards.
5. Notifications sent via **Gmail & Calendar**.
6. **Looker Studio dashboards** visualize trends and insights.

---

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/hr10j44t/ai-youth-wellness-companion.git
```

2. Install dependencies:

```bash
cd ai-youth-wellness-companion
npm install
```

3. Start the development server:

```bash
npm start
```

4. Connect **Google Forms → Sheets → Vertex AI → Looker Studio** as per configuration.
5. Deploy backend automations using **Google Apps Script**.

---

## 🤝 Contributing

We welcome contributions! Open issues or pull requests to suggest features, report bugs, or improve documentation.

---

## 📜 License

This project is licensed under the **MIT License** – see the LICENSE file for details.

---

## 📬 Contact
Email - hr10j44t@gmail.com
