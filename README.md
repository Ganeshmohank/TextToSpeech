# 🩺 MedSpeak - Healthcare-focused Text-to-Speech Application

MedSpeak is a healthcare domain-specific text-to-speech (TTS) application built during a 24-hour hackathon. Powered by the Groq API, it transforms medical instructions, patient notes, and symptom descriptions into clear and accurate speech to assist patients, healthcare workers, and individuals with visual impairments or reading difficulties.

---

## 🔍 Features

- 🎙️ Converts medical text into natural-sounding speech
- 🧠 Prompt engineering ensures context is strictly healthcare-related
- 🏥 Tailored responses for clinical, diagnostic, and patient-care contexts
- ⚙️ Built with React (frontend) and Node.js (backend)
- 🔐 Secure, fast, and scalable architecture

---

## 🛠️ Tech Stack

| Layer       | Technology        |
|-------------|-------------------|
| Frontend    | React.js          |
| Backend     | Node.js + Express |
| AI Service  | Groq API (LLM)    |

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/medspeak.git
cd medspeak
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
GROQ_API_KEY=your_groq_api_key
PORT=5000
```

Run the backend:

```bash
npm start
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

The app will run on `http://localhost:3000`.

---

## 🧪 How It Works

1. **User Input**: User enters medical-related text in the React app.
2. **Prompt Engineering**: The backend constructs a strict prompt to maintain healthcare context.
3. **Groq API Call**: The prompt is sent to Groq’s API to generate the speech-ready output.
4. **Audio Generation**: The processed text is converted to speech and streamed to the user.
5. **Playback**: Users can listen to the medical content clearly and interactively.

---

## 🧠 Prompt Engineering Strategy

We used targeted instructions and keyword filtering to ensure that Groq generates responses **only relevant to healthcare** topics, such as:

- Symptom explanations  
- Medication guidance  
- Doctor-patient communication  
- Emergency instructions  

Example prompt:

```txt
You are a medical assistant. Given a medical context, respond clearly and concisely with only healthcare-relevant information suitable for audio output.
```

---

## 💡 Use Cases

- Visually impaired patients listening to prescriptions
- Real-time assistance during telemedicine consultations
- Multilingual support (future enhancement)
- Hospital kiosk-based interaction systems

---

## 🧑‍💻 Contributors

- [Your Name] - Frontend & Prompt Engineering  
- [Teammate 1] - Backend & Groq API Integration  
- [Teammate 2] - Deployment & Presentation

---

## ⚠️ Disclaimer

This is a **hackathon prototype** and not approved for clinical use. Always consult a licensed healthcare professional.

---

## 📜 License

MIT License

---

## 🙌 Acknowledgements

- Groq for API access
- Hackathon organizers
- Open source libraries that powered our stack
