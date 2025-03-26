# 🎓 EDU-site | Modern Educational Website

![EDU-site Banner](<https://iili.io/3Tk76kg.md.png>)

## ✨ Overview

EDU-site is a modern, responsive educational website built with React. This project showcases a complete university/educational institution website with interactive components, responsive design, and a functional contact form using Web3Forms API.

**Practice project created by [Thinira Nilushan](https://github.com/tn-deshappriya ) (Mr. No-Hat)**

## 🚀 Features

- 📱 Fully responsive design for all device sizes
- 🎬 Video showcase with custom video player
- 🖼️ Interactive campus gallery
- 👥 Testimonial slider with smooth animations
- 📝 Secure contact form with form validation
- 🔄 Smooth scrolling navigation
- 🎨 Modern UI with attention to accessibility

## 🛠️ Technologies Used

- **React** - UI component library
- **CSS** - Custom styling without frameworks
- **Web3Forms API** - Form submission handling
- **React Scroll** - Smooth scrolling functionality 
- **Environment Variables** - Secure API key storage

## 📦 Installation

Follow these steps to set up the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/sacreations/EDU-site-test.git
   cd EDU-site-test
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```
   VITE_API_ENDPOINT=https://api.web3forms.com/submit
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```
   
   > Note: You'll need to obtain your own access key from [Web3Forms](https://web3forms.com/)

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 📋 Project Structure

```
EDU-site-test/
├── public/
├── src/
│   ├── assets/           # Images and icons
│   ├── components/
│   │   ├── About/        # About university section
│   │   ├── Campus/       # Campus gallery
│   │   ├── contact/      # Contact form component
│   │   ├── Footer/       # Site footer
│   │   ├── Hero/         # Hero banner section
│   │   ├── Navbar/       # Navigation component
│   │   ├── Programs/     # Educational programs showcase
│   │   ├── Testimonials/ # Student testimonials slider
│   │   ├── Title/        # Section title component
│   │   └── VideoPlayer/  # Custom video player
│   ├── App.jsx           # Main component
│   └── index.css         # Global styles
├── .env                  # Environment variables
└── package.json          # Project dependencies
```

## 🖥️ Usage

The website is divided into several sections:

- **Home/Hero** - Main landing section with call-to-action
- **Programs** - Educational programs offered
- **About Us** - Information about the institution
- **Campus** - Photo gallery of the campus
- **Testimonials** - Student reviews and experiences
- **Contact** - Form to get in touch with the institution

## 🔒 Security Features

- Environment variables for API endpoint and access keys
- Form validation to prevent spam and errors
- Proper error handling for form submissions

## 👨‍💻 Development

This project follows modern React best practices:

- Functional components with React Hooks
- Component-based architecture
- Responsive design principles
- Progressive enhancement

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- [Web3Forms](https://web3forms.com/) for the form submission API
- All images are used for demonstration purposes only
- Special thanks to everyone who contributed to this learning project

## 👥 Contributors

**Thinira Nilushan (Mr. No-Hat)**
- GitHub: [tn-deshappriya](https://github.com/tn-deshappriya)

**Supun Adithya**
- GitHub: [sacreations](https://github.com/sacreations)

---

<p align="center">
  Made with ❤️ as a practice project
</p>
