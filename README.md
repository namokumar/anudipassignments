## Anudip Assignments – Advanced Frontend Development Portfolio

This repository is a hands-on portfolio of my learning and practice for the Advanced Frontend Development (AFD) track. It demonstrates practical skills across HTML, CSS, JavaScript (DOM, events, functions), basic PHP, MySQL, and modern React with Vite. Everything here is built as small, focused exercises and mini-projects that mirror real interview questions and day‑to‑day frontend tasks.

### Who is this for?
- **Recruiters / HR**: Quick evidence I can build with HTML/CSS/JS and React, and follow clean structure and naming. The sections below show exactly what I practiced and where.
- **Engineers / Hiring Managers**: Drill into any folder to see specific topics (DOM, state, forms, etc.). React projects compile and run locally with Vite.
- **Clients / Non‑technical reviewers**: Each mini-example is small and self-contained. You can open most `.html` files directly in a browser to see results.

### Highlights at a glance
- **HTML fundamentals**: Text semantics, lists, tables, forms, links, and page structure with accessible patterns.
- **CSS foundations**: Box model, spacing, backgrounds, display, basic components (navbar, login/signup pages).
- **JavaScript**: Variables, operators, conditions, loops, functions, DOM manipulation, strings, events, and small utilities.
- **React (Vite)**: Components, props, state, class components, and forms with controlled inputs.
- **Databases & Backend intro**: Basic MySQL scripts, and a minimal PHP example.

---

## Repository Map

### HTML (`html/`)
- `01-Bold_Italic/`: Text structure and inline semantics.
- `02-List/`: Ordered, unordered, nested, and description lists.
- `03-Tables/`: Multi-row/column tables, combining lists inside tables, and tabular data formatting.
- `04-Forms/`: Registration/login forms, radio/checkbox examples, job/hotel booking, student registration.
- `05-Links/`: Hyperlinks, portfolio link examples.
- `projects/`: Full-page exercises like `JobApplicationForm.html` and `StudentReportSummary.html`.
- `selfprojects/`: Independent practice such as an invoice table.

What this proves: I understand semantic HTML, accessible inputs, labels, grouping, and consistent structure for real data-entry screens.

### CSS (`css/`)
- `01-Basics/`: Core CSS properties and docs used while practicing.
- `02-Container/`: Container layout and properties.
- `03-Spacing/`: Margin, padding, float usage and spacing demos.
- `04-Backgrounds/`: Background images, positioning, and layering.
- `05-Display/`: Block vs inline vs inline-block demonstrations.
- `06-Navbar/`: A simple responsive navbar and styling.
- `projects/`:
  - `login-Page/`: Centered login UI with form styling.
  - `Signup-Page-with-bg/`: Signup page with background image overlay.

What this proves: I can translate UI requirements into CSS layouts, manage the box model, and produce clean component-level styles.

### JavaScript (`javascript/`)
- `01-Basics/`: Inline scripts and basic page interaction.
- `02-Variables/`: Variables, simple math utilities (area, perimeter, average, speed), input/output with DOM.
- `03-Operators/`: Coming soon.
- `04-Conditions/`: If/else logic (odd-even, divisibility, greatest number, natural numbers).
- `05-Loops/`: Loop examples and iteration patterns.
- `06-Functions/`: Reusable functions (e.g., perimeter calculator, simple interest) and UI triggers.
- `07-DOM/`: Reading/writing DOM elements, displaying text field data, finding greatest number interactively.
- `08-Arrays/`: Question prompts for array practice (implementations incoming).
- `09-Strings/`: String manipulation, replace, word counter; notes `string in javascript.pdf`.
- `10-Events/`: Event handling (color change, text field merge), event-driven small UIs.
- `project/`:
  - `calculator/`: Functional calculator (HTML/CSS/JS) – basic operations and UI.
  - `dynamic-todo-list/`: Todo list with add/remove and simple styling; demonstrates dynamic DOM updates.

What this proves: I write clear, small functions; handle DOM events; and build interactive mini‑apps without frameworks.

### React (`react.js/` – Vite projects)
Each subfolder is an independent Vite app. Topics build up from components to forms.
- `02Component/`: Functional components and composition.
- `03Props/`: Passing props and rendering lists/values.
- `04State/`: Using `useState`, interactive counters, and controlled inputs.
- `05Classcomponent/`: Class components for state/props lifecycle basics.
- `06FormExample/`: Modular form components (`FacultyInput`, `FacultyDisplay`, etc.) showing controlled form patterns.

What this proves: I can scaffold and run Vite apps, structure components, manage state and props, and build basic form workflows.

### MySQL (`mysql/`)
- `01-Basics/`: SQL scripts to create/show DBs and fundamentals.
- `02CreateAnd Drop-DB/`: Example scripts for DB lifecycle.

What this proves: Comfort with SQL statements and database basics for simple CRUD scaffolding.

### PHP (`php/`)
- `01-Basics/`: Introductory PHP script(s) to bridge frontend and server-side concepts.

What this proves: Awareness of backend scripting and how forms can submit to server code.

### Other
- `doubt.java`: A Java practice snippet (language exploration).
- `qodana.yaml`: Static analysis configuration stub.
- `LICENSE`: Repository license file.

---

## How to run / view

### Open HTML/CSS/JS exercises
- Most examples in `html/`, `css/`, and `javascript/` can be opened directly in a browser by double-clicking the `.html` files, or serving the folders via a simple server:

```bash
python3 -m http.server 5173
# then visit http://localhost:5173 and navigate to the desired file
```

### Run React (Vite) projects
For any folder under `react.js/` (e.g., `react.js/06FormExample`):

```bash
cd react.js/06FormExample
npm install --silent
npm run dev -- --host
# Open the URL printed by Vite (usually http://localhost:5173)
```

Node 18+ is recommended. If you use `pnpm` or `yarn`, the usual equivalents work.

---

## What this means for you

- **HR / Recruiters**: This repo shows consistent practice, naming, and topic coverage. It’s easy to map skills to artifacts. I’m ready for a frontend/React coding task.
- **Engineering Managers**: You’ll find focused, readable code (no large frameworks beyond Vite+React). Each directory corresponds to a core concept, making it quick to assess strengths.
- **Clients / Non‑technical stakeholders**: You can open the sample pages and see immediate results—forms, lists, tables, and interactive widgets that reflect common UI needs.

---

## Proof of competence (topic → concrete artifacts)
- **Semantic HTML & Forms** → `html/04-Forms/01RegistrationForm.html`, `03LoginForm.html`, `06JobApplicationForm.html`, `projects/StudentReportSummary.html`
- **CSS Layout & Components** → `css/06-Navbar/`, `css/projects/login-Page/`, `css/projects/Signup-Page-with-bg/`
- **DOM & Events** → `javascript/07-DOM/DisplayTextfieldData.*`, `javascript/10-Events/`
- **Functions & Utilities** → `javascript/06-Functions/` (perimeter, simple interest, product)
- **Mini‑apps** → `javascript/project/calculator/`, `javascript/project/dynamic-todo-list/`
- **React** → `react.js/04State/` (stateful components), `react.js/06FormExample/` (form architecture)
- **SQL Basics** → `mysql/01-Basics/`, `02CreateAnd Drop-DB/`
- **Server-side intro** → `php/01-Basics/`

---

## Roadmap
- JavaScript Operators and Arrays implementations: Coming soon
- More React examples: React Router, Context, and simple API fetches: Coming soon
- Accessibility and responsive design refinements: Coming soon

---

## Contact
- Connect via Anudip: `https://www.anudip.org/`
- Open an issue in this repo for any questions or suggestions.

---

## License
See `LICENSE` for details.
