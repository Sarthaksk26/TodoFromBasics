# 📝 To-Do List (HTML • CSS • JavaScript)

A simple, responsive **To-Do List web app** built using **pure HTML, CSS, and JavaScript** — no frameworks required.  
It lets users **add, edit, mark complete, and delete tasks**, with all data stored locally in the browser using `localStorage`.

---

## 🚀 Live Demo

👉 [Live Demo](https://sarthaksk26.github.io/TodoFromBasics/)

---

## 🧩 Features

✅ **Add Tasks** — Quickly add new items to your list.  
✅ **Mark as Completed** — Tick checkboxes to mark tasks done (with line-through style).  
✅ **Edit Tasks** — Double-click any task to rename it.  
✅ **Delete Tasks** — Remove individual items easily.  
✅ **Persistent Storage** — Uses `localStorage` so tasks stay even after reload.  
✅ **Responsive Design** — Works smoothly on desktop and mobile.  
✅ **Minimal & Modern UI** — Clean design made with pure CSS.

---

## 🏗️ Tech Stack

- **HTML5** – Structure of the app  
- **CSS3** – Styling and responsiveness  
- **JavaScript (ES6)** – Functionality and data persistence  
- **LocalStorage API** – Browser-based data storage  

---

## 📂 Folder Structure

```
to-do-list/
│
├── index.html      # Main HTML file
├── styles.css      # Clean, responsive styles
├── script.js       # Core JS logic
└── README.md       # Project documentation
```

---

## ⚙️ Setup / Usage

1. **Clone or Download** the repository  
   ```bash
   git clone https://github.com/yourusername/todo-list.git
   cd todo-list
   ```

2. **Open the app**  
   Just double-click `index.html` or open it in any browser.

3. **Start adding tasks!**  
   - Type your task → click “Add Task” or press Enter.  
   - Double-click to edit.  
   - Click “Delete” to remove.  
   - Refresh the page — your tasks are still there 🎉  

---

## 🪄 Code Highlights

- All tasks stored in `localStorage`:
  ```js
  localStorage.setItem("tasks", JSON.stringify(todos));
  const saved = JSON.parse(localStorage.getItem("tasks"));
  ```
- Real-time updates on checkbox change and edit.
- Fully responsive layout using only CSS (no frameworks).

---

## 🧠 Future Improvements

- [ ] Add a dark/light theme toggle 🌗  
- [ ] Add categories or filters (e.g., All / Completed / Pending)  
- [ ] Add animations for adding/removing tasks  
- [ ] Add export/import feature for tasks  

---

## 🤝 Contributing

Contributions are welcome!  
If you have suggestions, feel free to fork the repo and submit a pull request.

---

## 🧑‍💻 Author

**Sarthak Kumbhar**  
📍 Government College of Engineering, Karad  
🌐 [GitHub Profile](https://github.com/Sarthaksk26)
