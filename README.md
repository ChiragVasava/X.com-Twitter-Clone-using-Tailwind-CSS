# X.com Twitter Clone using Tailwind CSS

🚀 A responsive **Twitter (X.com)** front-end clone built entirely using **HTML5**, **CSS3**, and **Tailwind CSS**. This project mimics the layout and design of Twitter’s modern interface, offering a clean and minimal UI for social media platforms. Built with the goal of mastering Tailwind’s utility-first CSS approach, this clone is a fully static front-end template without any backend or dynamic functionality.


## 🔗 Repository

📁 [Click here to access the repository](https://github.com/ChiragVasava/X.com-Twitter-Clone-using-Tailwind-CSS.git)

---

## 🛠️ Tech Stack Used

| Technology         | Purpose                                  |
|--------------------|------------------------------------------|
| **HTML5**          | Structure of the webpage                 |
| **CSS3**           | Basic styles and fallback support        |
| **Tailwind CSS**   | Advanced utility-first styling           |
| **PostCSS**        | CSS processing and compatibility         |
| **Visual Studio Code** | Code editing and live server         |
| **ChatGPT**        | Guidance and troubleshooting assistant   |

---



## 🧑‍💻 Getting Started (Setup Tailwind CSS)

### 1. 📦 Clone the repository

```bash
git clone https://github.com/ChiragVasava/X.com-Twitter-Clone-using-Tailwind-CSS.git
```
```bash
cd X.com-Twitter-Clone-using-Tailwind-CSS
```

---

### 2. Create the Folder Structure
in the root dictionary, create a folder named src, then add these files in it:
<ul>
<li>index.html</li>
<li>input.css</li>
<li>output.css</li>
<li>style.css (optional custom CSS)</li>
</ul>

### 3. Add Tailwind Directives to input.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 📦 Install Dependencies

Run the following commands to install required packages:
```bash
npm install tailwindcss @tailwindcss/cli
```
```bash
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```
```bash
npm install postcss-preset-env --save-dev
```
Or use built-in scripts from package.json:

```bash
npm run first
```
```bash
npm run build
```
```bash
npm run config
```

## 🛠️ Scripts (inside package.json)

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "first": "npm install tailwindcss @tailwindcss/cli",
  "build": "npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch",
  "config": "npm install postcss-preset-env --save-dev"
}
```

## ⚙️ Build Tailwind CSS
To compile Tailwind from input.css to output.css and watch for changes:
```bash
npm run build
```
Make sure your index.html file links to output.css & input.css:
```html
<link rel="stylesheet" href="output.css">
<link rel="stylesheet" href="input.css">
```

## 📁 Folder Structure
Root Folder<br>
│<br>
│── src Folder<br>
│ ├── index.html # Main HTML file<br>
│ ├── input.css # Tailwind input file<br>
│ ├── output.css # Tailwind compiled file<br>
│ └── style.css # Your custom CSS (optional)<br>
│<br>
├── tailwind.config.js # Tailwind configuration<br>
├── postcss.config.js # PostCSS configuration<br>
├── package.json # Project scripts and dependencies<br>
└── README.md # Project description and setup<br>
---

## 🎯 Features
<ul>
<li>Responsive design based on modern Twitter UI</li>
<li>Built using Tailwind’s utility-first approach</li>
<li>Clean and modular structure</li>
<li>Easy to extend with new components or layouts</li>
</ul>

## 💡 Future Enhancements
<ul>
<li>Add dark/light theme toggle</li>
<li>Add interactive functionalities using JavaScript or React</li>
<li>Backend integration (Firebase, Node.js, etc.)</li>
<li>Convert into a React + Tailwind SPA</li>
</ul>

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change or improve.

## 📜 License
This project is licensed under the <a href="[LICENSE](https://mit-license.org)">MIT License</a>

## 🙌 Acknowledgements

<ul>
<li>Inspired by<a href="https://x.com/home"> Twitter / X.com</a></li>
<li><a href="https://tailwindcss.com/docs/installation/using-vite">Tailwind CSS Documentation</a></li>
<li><a href="https://chatgpt.com/">ChatGPT (OpenAI)</a> for troubleshooting support</li>
</ul>

## ✨ Made with 💻 by <a href="https://github.com/ChiragVasava">Chirag Vasava </a> 

> 📌 **Live Preview :**
## 📸 Screenshots
![Screenshot](img/Twitter(X).png)

## 📽️ Video
https://github.com/user-attachments/assets/23b70f8a-586a-40be-8f20-b95c096081d4

---
