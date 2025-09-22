# 🎯 Hobby Explorer

An interactive web application to discover and plan new hobbies tailored to my lifestyle, energy levels, and interests. Perfect for my busy schedule to help me develop new skills, host memorable events, bond with friends, and embark on adventures.

<img width="1464" height="826" alt="Image" src="https://github.com/user-attachments/assets/06321894-9092-49d6-bf88-a0aabd371172" />

## ✨ Features

### 🔍 **Smart Filtering System**
- **Energy Level**: Low, Low-Medium, Medium, High
- **Time Commitment**: 20 minutes to 8+ hours
- **Activity Type**: Creative, Intellectual, Practical, Adventure, Tech
- **Social Setting**: Solo, Hosting Others, With Friends

### 📋 **Detailed Implementation Guides**
Each hobby includes:
- **Step-by-step implementation plan** (week-by-week roadmap)
- **Required tools and resources**
- **Expert tips and best practices**
- **Skills you'll develop**
- **Why it makes you interesting**
- **How it rejuvenates you**

### 🎨 **Diverse Hobby Categories**

#### 🧘 **Solo Activities** (Perfect for after work)
- Photography, Language Learning, Digital Art
- Tech skills (System Design, Code Review, API Testing)
- Creative pursuits (Digital Journaling, Urban Sketching)

#### 🏠 **Hosting & Entertaining**
- Themed Dinner Parties, Wine Tastings
- Tech Talk Hosting, Mentorship Programs
- Cocktail Classes, Game Master sessions

#### 👥 **Friend Activities**
- Photography Walks, Cooking Challenges
- Language Exchange, Escape Room Design
- Rock Climbing, Adventure Racing

#### 🚀 **Tech Professional Focus**
Built custom to my passions and career:
- **Community Event Organizing**
- **QA & System Design** expertise application
- **Documentation & Mentoring** skill development
- **Open Source Contributing**

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks (useState)
- **Responsive Design**: Mobile-first approach

## 🚀 Quick Start

```bash
# Clone the repository
git clone git@github.com:kahenya-anita/Hobby-Suggestions.git
cd hobby-explorer

# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000
```

## 📁 Project Structure

```
hobby-explorer/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── App.js              # Main hobby explorer component
│   ├── index.js            # React entry point
│   └── index.css           # Tailwind CSS imports
├── package.json
└── README.md
```

## ⚙️ Required Files

### **package.json**
```json
{
  "name": "hobby-explorer",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "lucide-react": "^0.263.1",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```


## 🎨 Customization

### **Adding New Hobbies**
Add new hobby objects to the `hobbies` array in `App.js`:

```javascript
{
  id: 99,
  name: "Your New Hobby",
  icon: <YourIcon className="w-6 h-6" />,
  energy: "medium",
  time: "1-2hrs",
  type: "creative",
  social: "solo",
  interestFactor: 8,
  description: "Brief description",
  whyInteresting: "What makes this interesting",
  gettingStarted: "How to begin",
  skills: ["Skill 1", "Skill 2"],
  rejuvenating: "How it helps you recharge",
  implementationSteps: [
    "Week 1: First step",
    "Week 2: Second step",
    // ... more steps
  ],
  toolsNeeded: ["Tool 1", "Tool 2"],
  tips: [
    "Helpful tip 1",
    "Helpful tip 2"
  ]
}
```

### **Styling Customization**
- Modify Tailwind classes in the component
- Update color scheme in the gradient backgrounds
- Adjust responsive breakpoints for different screen sizes

## 📱 Responsive Design

The application is fully responsive:
- **Mobile (< 640px)**: Single column layout
- **Tablet (640px - 1024px)**: 2-column filters, stacked content
- **Desktop (1024px+)**: 4-column filters, optimized layouts
- **Large screens (1280px+)**: 3-column expanded details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-hobby`)
3. Commit your changes (`git commit -am 'Add new hobby category'`)
4. Push to the branch (`git push origin feature/new-hobby`)
5. Create a Pull Request

### **Contribution Ideas**
- Add new hobby categories
- Improve implementation guides
- Add difficulty ratings
- Create hobby recommendation algorithm
- Add progress tracking features

## 📊 Current Database

**43 Total Hobbies** across categories:
- **11** Solo activities
- **8** Tech-focused hobbies  
- **4** Hosting activities
- **4** Friend activities
- **5** Adventure activities
- **11** Additional creative/practical options


## 📄 License

MIT License - Feel free to use this project for personal or commercial purposes.

## 🙋‍♂️ Support

- **Issues**: Report bugs or request features via GitHub Issues
- **Questions**: Start a discussion in GitHub Discussions

---

**Made with ❤️ for busy professionals who want to live more interesting lives**

*Come explore your next hobby with me!* 🚀