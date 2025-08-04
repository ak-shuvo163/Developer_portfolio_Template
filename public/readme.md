# 💼 Developer Portfolio Template

A modern, responsive, and dark/light mode-ready **Developer Portfolio Website** built with **Tailwind CSS v3**, HTML5, and Vanilla JavaScript. Ideal for freelancers and developers looking to showcase their projects, CV, services, and contact info in a professional layout.

---

## 🔗 Live Preview

[👉 View Demo](https://your-live-preview-link.netlify.app)  
_(Replace this with your own Netlify or GitHub Pages link)_

---

## ✨ Features

- Clean, responsive, professional design  
- Tailwind CSS v3.4.17 with `dark mode` toggle  
- Hero section with CTA buttons (Hire Me, Download CV)  
- Filterable project section with category buttons  
- Skills & services display  
- Newsletter section with subscription form  
- Contact section with working form (via Formspree setup)  
- Scroll-based active nav link highlighting  
- SEO and performance optimized  
- Fully customizable for clients or personal use  

---

## 🛠️ Tech Stack

- HTML5  
- Tailwind CSS 3  
- JavaScript (Vanilla)  
- Font Awesome (CDN)  
- Responsive design using Flexbox & Grid  
- Netlify / GitHub Pages deploy ready  

---

## 📁 Folder Structure

```bash
developer-portfolio-template/
├── public/
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   ├── portfolio.html
│   ├── services.html
│   ├── css/
│   │   └── output.css        # Compiled Tailwind CSS
│   ├── js/
│   │   ├── darkmode.js
│   │   └── lightmode.js
│   └── images/               # Static image assets
│
├── src/
│   └── assets/
│       ├── images/           # Editable image source files
│       └── input.css         # Tailwind input CSS (for development)
│
├── dist/
│   └── output.css            # Production-ready CSS built from input.css



---

## ⚙️ Development & Build

### Install dependencies

```bash
npm install

Development Mode (Auto rebuild CSS on change)
bash
Copy code
npm run dev

This command:

Compiles and minifies Tailwind CSS

Copies the generated CSS file and JavaScript files to the public directory ready for deployment

📤 Deployment
You can deploy this project on platforms like Netlify or GitHub Pages.
Make sure your publish directory is set to public in your hosting platform settings.

📧 Contact Form Integration (Formspree)
The contact form in contact.html uses Formspree for backend-less form submission.

How to configure:
Go to https://formspree.io/ and create a free account.

Create a new form and get the form action URL.

Replace the action attribute value of the form in contact.html with your Formspree URL.

Optionally customize the form fields and notifications in Formspree dashboard.


🚀 How to use
Clone the repository

Run npm install

Use npm run dev during development

Run npm run build before deploying

Customize the HTML, CSS, and JS files as per your branding and content

Upload to your GitHub repo or hosting platform


📝 License
This project is licensed under the MIT License — see the LICENSE file for details.

🙏 Credits
Tailwind CSS — Utility-first CSS framework

AOS — Animate On Scroll library

Font Awesome — Icon library

Formspree — Contact form backend service

📞 Contact
For any queries, you can contact me at your-email@example.com (replace with your email) or open an issue on GitHub.





