# **📌 MCQ Exam App**
🚀 **MCQ Exam App** is a modern, **Vite + React + TypeScript**-powered online multiple-choice question (MCQ) testing application. It allows users to **dynamically upload JSON-based questions**, take **timed** exams, and view **detailed results**.

---

## **🌟 Features**
✅ **Dynamic JSON-based MCQ exams** – Easily generate exams using ChatGPT-generated JSON.  
✅ **Time-based exam mode** – Supports `"Xm Ys"` format (e.g., `"1m 30s"`, `"45s"`, `"5m 0s"`).  
✅ **Intelligent scoring system** – Tracks correct/incorrect answers and calculates pass/fail.  
✅ **Color-coded answers** – **Green** for correct, **Red** for incorrect, with explanations.  
✅ **"Prompt" button** – Generates structured JSON format for easy ChatGPT integration.  
✅ **Modern UI** – Built with **TailwindCSS** and supports **lightweight animations**.  

---

## **📂 Project Structure**
```
mcq-exam-app/
│── src/
│   ├── components/            
│   │   ├── TextInput.tsx      # JSON Input Component
│   │   ├── Exam.tsx           # Exam UI & Logic
│   │   ├── Question.tsx       # Single Question Component
│   │   ├── Timer.tsx          # Countdown Timer Component
│   │   ├── Result.tsx         # Result & Review Screen
│   ├── pages/
│   │   ├── Home.tsx           # Landing Page (JSON Input)
│   │   ├── ExamPage.tsx       # Exam UI
│   │   ├── ResultPage.tsx     # Results UI
│   ├── hooks/
│   │   ├── useExam.ts         # Exam State Management
│   │   ├── useTimer.ts        # Timer Logic
│   ├── App.tsx                # Main Entry File (Routes)
│   ├── main.tsx               # App Mounting Point
│── public/                    # Static assets (e.g., favicon)
│── tailwind.config.js          # Tailwind Configuration
│── index.css                   # Global Styles
│── package.json                # Dependencies
│── vite.config.js              # Vite Configuration
```

---

## **🔧 Installation & Setup**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/4kshi7/MCQ.git
cd mcq-exam-app
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Start the Development Server**
```bash
npm run dev
```
🖥️ The app will now be available at **`http://localhost:5173`**.

### **4️⃣ Build for Production**
```bash
npm run build
```
This will generate optimized files in the `dist/` folder.

### **5️⃣ Deploy the App**
You can **deploy the app easily** to platforms like:
- **Vercel** → `vercel deploy`
- **Netlify** → Drag & drop `dist/` folder to Netlify

---

## **📜 How to Use**
### **📌 Uploading Exam Questions**
1️⃣ Click the **"Prompt"** button to copy the JSON format.  
2️⃣ Modify it by **replacing `"YOUR_TOPIC_HERE"`** with your desired exam subject.  
3️⃣ Generate structured JSON **via ChatGPT**.  
4️⃣ Paste the JSON into the **text area on the Home page**.  
5️⃣ Click **"Start Exam"** to begin the test.  

---

## **📜 JSON Format**
### **✅ Example JSON for Exam**
```json
{
  "exam_title": "General Knowledge Quiz",
  "timePerQuestion": "1m 30s",
  "questions": [
    {
      "question": "What is the capital of France?",
      "options": ["Berlin", "Madrid", "Paris", "Rome"],
      "answer": "Paris",
      "explanation": "Paris is the capital city of France, known for the Eiffel Tower."
    },
    {
      "question": "Which planet is known as the Red Planet?",
      "options": ["Earth", "Venus", "Mars", "Jupiter"],
      "answer": "Mars",
      "explanation": "Mars is often called the Red Planet due to its reddish appearance."
    }
  ]
}
```

## **🛠 Tech Stack**
- **Frontend:** React + TypeScript
- **Styling:** TailwindCSS
- **Build Tool:** Vite
- **State Management:** React Hooks
- **Deployment:** Vercel

---

## **📝 Future Improvements**
✅ **Dark mode support**  
✅ **Animations for transitions**  
✅ **More question formats (True/False, Fill in the Blanks)**  

---

## **🤝 Contributing**
💡 Want to improve this project? Feel free to **fork** the repo and submit a **pull request**!

1️⃣ Fork the project  
2️⃣ Create a feature branch → `git checkout -b feature-name`  
3️⃣ Commit your changes → `git commit -m "Added new feature"`  
4️⃣ Push to GitHub → `git push origin feature-name`  
5️⃣ Open a **Pull Request** 🚀  

---

## **📜 License**
This project is **open-source** under the **MIT License**.

---

## **💬 Support**
For any issues, feel free to:
- **Raise an issue** [here](https://github.com/4kshi7/MCQ/issues)

---

### **🌟 Like This Project? Give it a Star ⭐ on GitHub!**
🚀 **Happy Coding!** 🚀

---