# 🍽️ MealMate — Recipe & Meal Finder

Ever opened your fridge, stared at it for 5 minutes, and still had no idea what to cook? That's exactly why I built this.

MealMate is a web app where you can search for any dish, explore recipes from cuisines around the world, and save the ones you actually want to try. No login. No subscription. Just food.

---

## 🤔 What does it actually do?

You type in a dish — say "pasta" or "biryani" or "cheesecake" — and the app shows you meals that match, complete with a photo, the full list of ingredients, and step-by-step cooking instructions.

You can also browse without searching. Filter by cuisine (Indian, Italian, Chinese, Mexican and more) or by category (Vegetarian, Seafood, Dessert, Breakfast) to discover meals you didn't even know you wanted.

Found something you like? Hit the heart button and it gets saved to your Favourites tab. It stays there even after you close the browser.

---

## 🔌 API Used

**TheMealDB**
- Website: [https://www.themealdb.com/api.php](https://www.themealdb.com/api.php)
- No API key needed. No signup. Just fetch and go.
- Free forever for the endpoints used in this project.

Here are the specific endpoints the app uses:

| What I need | Endpoint |
|---|---|
| Search meals by name | `/search.php?s=chicken` |
| Get all cuisine types | `/list.php?a=list` |
| Get all categories | `/list.php?c=list` |
| Filter by cuisine | `/filter.php?a=Indian` |
| Filter by category | `/filter.php?c=Seafood` |
| Full recipe details | `/lookup.php?i=52772` |

---

## ✨ Features

**Search** — type any dish name and see results instantly. Uses debouncing so it doesn't fire on every single keystroke.

**Filter by Cuisine** — dropdown with 20+ world cuisines. Select Indian, Italian, Japanese, or any other and browse meals from that region.

**Filter by Category** — dropdown for Vegetarian, Dessert, Seafood, Breakfast, and more.

**Sort** — arrange results alphabetically A to Z or Z to A.

**Recipe Modal** — click any meal card and a popup opens showing the full recipe: every ingredient with its measurement, and the complete cooking instructions.

**Favourites** — heart any recipe to save it. Saved in localStorage so it persists even after closing the tab.

**Dark / Light Mode** — toggle between themes. Preference is saved so it remembers your choice.

**Loading Skeletons** — placeholder cards appear while data is loading instead of a blank screen.

**Responsive** — works on mobile, tablet, and desktop.

---

## 🛠️ Built With

| Technology | Why |
|---|---|
| HTML | Page structure |
| CSS | Styling, dark/light theme, responsive layout |
| JavaScript | All the logic |
| Fetch API | Making requests to TheMealDB |
| Array HOFs | `.filter()` `.sort()` `.map()` `.find()` `.forEach()` for all search and filter operations |
| localStorage | Saving favourites and theme preference |

No frameworks. No libraries. Pure HTML, CSS, and JavaScript — the way a first project should be.

---

## 📁 Files

```
mealmate/
├── index.html    ← the page structure
├── style.css     ← all the styling
├── app.js        ← all the logic
└── README.md     ← this file
```

---

## 🚀 How to Run It

There is no installation. No npm install. No terminal commands.

1. Download or clone the project
   ```
   git clone https://github.com/your-username/mealmate.git
   ```

2. Open the folder in VS Code

3. Right click `index.html` and select **Open with Live Server**

That's it. The app opens in your browser and works immediately.

> If you don't have Live Server — install it from the VS Code extensions tab. Search "Live Server" by Ritwick Dey and install it. Takes 30 seconds.

---

## 📅 Milestones

| Milestone | What I did | Deadline |
|---|---|---|
| 1 — Setup | Picked the idea, created the repo, wrote this README | 23rd March |
| 2 — API Integration | Connected TheMealDB, displayed meal cards with images | 1st April |
| 3 — Core Features | Search, filter, sort, favourites, dark mode, recipe popup | 8th April |
| 4 — Final Submission | Cleaned up code, deployed, updated README | 10th April |

---


