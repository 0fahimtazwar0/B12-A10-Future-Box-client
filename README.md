# 📚 Book Haven

**Book Haven** is a full-stack digital library web application where book lovers can explore, add, manage, and review books — all in a beautifully crafted, immersive reading environment.

- 🌐 **Live Site:** [https://book-haven-fahim.web.app](https://book-haven-fahim.web.app)
- 🗄️ **Live Server:** [https://book-haven-server-steel.vercel.app](https://book-haven-server-steel.vercel.app)
##
- 📁 **Frontend Repo:** [https://github.com/0fahimtazwar0/B12-A10-Future-Box-client](https://github.com/0fahimtazwar0/B12-A10-Future-Box-client)
- 📁 **Backend Repo:** [https://github.com/0fahimtazwar0/B12-A10-Future-Box-server](https://github.com/0fahimtazwar0/B12-A10-Future-Box-server)

---

## ✨ Features

- **3D Interactive Book Cards** — Custom-built 3D book rendering using CSS transforms and perspective, giving each book a realistic spine-and-cover presentation inspired by physical bookshelves.
- **Firebase Authentication** — Secure login and registration with Email/Password and Google OAuth. Private routes are fully protected and persist across page reloads without redirecting authenticated users.
- **Full CRUD Book Management** — Authenticated users can add new books (with cover image upload via ImgBB), update their own entries through a pre-filled modal/form, and delete books — all reflected in real time.
- **Real-Time Comment System** — Logged-in users can leave comments on any book detail page. Comments (with user name and avatar) are stored in MongoDB and update in the UI in real time.
- **Advanced Filtering** — The All Books page supports sorting by rating, date and name (ascending/descending).
- **Rich UI with shadcn/ui, MagicUI & DaisyUI** — The interface combines shadcn/ui components, MagicUI animated elements, and DaisyUI utility classes to deliver a polished, consistent design system with smooth transitions and micro-interactions throughout.
- **Dynamic Home Sections** — The homepage features an animated hero banner, a dynamically fetched "Latest Books" section pulling the 6 most recent additions from MongoDB, a Top Genres showcase, and a curated Book of the Week highlight.
- **Responsive Design** — Fully responsive across mobile, tablet, and desktop with a consistent grid layout, uniform card dimensions, and adaptive navbar behavior.
- **Toast Notifications** — All success and error feedback is delivered via React Hot Toast.

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS + DaisyUI
- shadcn/ui
- MagicUI
- Firebase Authentication
- Axios
- React Router DOM
- React Hot Toast
- date-fns

### Backend
- Node.js + Express.js
- MongoDB Atlas (Mongoose)
- Vercel (deployment)

### Hosting
- Client: Firebase
- Server: Vercel

---


## 🔐 Private Routes

The following routes are protected and require authentication:

- `/add-book`
- `/my-books`
- `/update-book/:id`
- `/book-details/:id`

---


## 👤 Author

Made with ❤️ as part of the B12-A10 assignment.
