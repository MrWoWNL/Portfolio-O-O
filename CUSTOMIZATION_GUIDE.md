# 🎨 Quick Customization Guide

## ⚡ 5-Minute Setup

### 1. Open the Data File
Navigate to: `src/data/portfolioData.js`

This is the **ONLY** file you need to edit!

### 2. Replace Personal Info
```javascript
personal: {
  name: "Alex Johnson",        // ← Change to your name
  role: "Full-Stack Developer", // ← Change to your role
  tagline: "...",               // ← Your catchy tagline
  bio: "...",                   // ← Your bio (2-3 sentences)
  location: "San Francisco",    // ← Your location
}
```

### 3. Update Contact
```javascript
contact: {
  email: "your.email@gmail.com",
  social: {
    github: "https://github.com/YOUR-USERNAME",
    linkedin: "https://linkedin.com/in/YOUR-USERNAME",
  }
}
```

### 4. Add Your Projects
Find the `projects` array and replace with your projects:
```javascript
{
  title: "Your Project Name",
  description: "Brief description",
  techStack: ["React", "Node.js"],
  githubLink: "your-github-link",
  liveLink: "your-live-demo-link",
  featured: true, // ← Mark your best projects
}
```

### 5. Replace Resume
1. Put your resume PDF in the `public/` folder
2. Name it `resume.pdf` (or update the filename in portfolioData.js)

### 6. Run the Project
```bash
npm install
npm run dev
```

That's it! 🎉

---

## 🎯 Common Customizations

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#YOUR_COLOR',
  },
  accent: {
    500: '#YOUR_COLOR',
  },
}
```

### Change Default Theme
In `portfolioData.js`:
```javascript
theme: {
  defaultTheme: "light", // or "dark"
}
```

### Add More Skills
In `portfolioData.js`, add to the `skills` array:
```javascript
{
  name: "Docker",
  category: "tools", // frontend, backend, or tools
  icon: "SiDocker",  // From react-icons.github.io/react-icons
}
```

### Remove a Section
In `src/App.jsx`, comment out or delete the section:
```javascript
// <Experience />  ← Comment out to hide
```

---

## 🖼️ Adding Project Images

1. Add images to `public/` folder
2. In `portfolioData.js`:
```javascript
projects: [
  {
    // ...
    image: "/my-project-screenshot.jpg",
  }
]
```

---

## 🚀 Deploy to Vercel

1. Push code to GitHub
2. Visit vercel.com
3. Click "New Project"
4. Import your repo
5. Click "Deploy"

Done! 🎊

---

## 💡 Pro Tips

- Use **3-6 featured projects** for best impact
- Keep descriptions under 2 sentences
- Use high-quality project screenshots
- Update your resume every 3 months
- Test on mobile devices

---

## ❓ Need Help?

Check the full README.md for detailed instructions!

**Happy Customizing! 🎨**
