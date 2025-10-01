# 🖌️ Online Whiteboard

A **real-time collaborative whiteboard** built with **React (Vite)**, **Socket.IO**, **TailwindCSS**, and **shadcn/ui**.  
Users can draw together in rooms, undo/redo actions, and new participants can see the full session history instantly.  

---

## 🚀 Features

- ✏️ Real-time collaborative drawing with **Socket.IO**
- 👥 **Room support** (separate sessions per room)
- ↩️ Undo / Redo functionality
- 🕘 Session history for late-joiners
- 🎨 Sleek UI built with **TailwindCSS + shadcn/ui**
- 📱 Responsive design (works on mobile/tablet)

---

## 🗂️ Project Structure

online-whiteboard/
├── server/ # Node.js + Express + Socket.IO backend
│ └── index.js
├── client/ # React + Vite frontend
│ ├── index.html
│ ├── vite.config.js
│ ├── postcss.config.js
│ ├── tailwind.config.js
│ ├── src/
│ │ ├── components/ # UI + Whiteboard components
│ │ ├── hooks/ # Custom hooks (useCanvas)
│ │ ├── lib/ # Utilities (cn function, helpers)
│ │ ├── styles/ # Tailwind styles
│ │ └── main.jsx
└── README.md


---

⚡ Setup & Installation

1. Clone the repository

git clone https://github.com/your-username/online-whiteboard.git
cd online-whiteboard

2. Run the server

cd server
npm install
npm run start

Server will start on http://localhost:5000

3. Run the client

cd client
npm install
npm run dev

Client will run on http://localhost:5173

🌍 Deployment
Server (Backend)

You can deploy the server/ to:

Render
 (easy, free tier)

Heroku

VPS with Docker (DigitalOcean, AWS, etc.)

Client (Frontend)

Deploy client/ to:

Vercel
 (recommended)

Netlify

GitHub Pages
