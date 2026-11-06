# NEXDLY

> **NEXDLY** is a React Native mobile app for organizing personal expenses, tracking shared/group contributions, and managing plans with budgets and dates.

The app brings everyday money tracking and personal planning into one mobile interface. It currently uses React Context and component state for in-memory data management. **There is no backend API, database, or on-device persistence configured in this repository**, so data is reset when the app process is restarted.

---

## Contents

- [Overview](#overview)
- [Core features](#core-features)
- [Screens and navigation](#screens-and-navigation)
- [Technology stack](#technology-stack)
- [Project architecture](#project-architecture)
- [Project structure](#project-structure)
- [Requirements](#requirements)
- [Installation](#installation)
- [Run the app](#run-the-app)
- [How the app works](#how-the-app-works)
- [State management and data model](#state-management-and-data-model)
- [Testing and code quality](#testing-and-code-quality)
- [Current scope and limitations](#current-scope-and-limitations)
- [Suggested roadmap](#suggested-roadmap)
- [Contributing](#contributing)

## Overview

NEXDLY is a mobile-first personal finance and planning application built with React Native. Its main areas are:

1. **Home** — a dashboard that brings plan and expense information together and provides shortcuts to common actions.
2. **Expense** — personal expense entries and group expense records, including member contribution tracking.
3. **My Plans** — create and organize plans, monitor their status, and manage plan dates and notes.
4. **Settings** — a profile/settings interface with account and support sections.

The app is built as a native React Native project using the React Native Community CLI. Android and iOS native project folders are included.

## Core features

### 1. Home dashboard

The Home screen acts as the app's overview and quick-action hub. It includes:

- Summary cards for plan-related information.
- Plan progress/status information supplied by the planning context.
- Shortcuts to the planning area.
- Quick actions for adding personal expenses and group expenses.
- Navigation to the main app sections.

The values shown on the dashboard are derived from the current in-memory context state.

### 2. Personal expense tracking

Users can create personal expense entries with information such as:

- Expense name/title.
- Amount.
- Date and time.
- Category/icon selection.
- Optional note.

The personal expense area includes:

- Personal expense overview and list.
- Expense entry form.
- Expense search/filter UI.
- Expense list items and summary cards.
- Total transaction count and total personal expense amount.
- Edit and delete handling in the expense state layer.

Amounts are stored as numeric values in the context after form submission.

### 3. Group expense tracking

Users can create a group expense record and add members with their contribution amounts.

Implemented group workflows include:

- Create a group with a name, icon, date, and optional note.
- Add multiple members while creating the group.
- Record an initial amount for each member.
- Open a group's summary/details screen.
- Add more money to an existing member's contribution.
- Add a new member to an existing group.
- Delete a member or delete a group.
- Edit the group title.
- Calculate the combined amount contributed by all members across groups.

The group summary screen is designed to make it easier to see who has contributed and update contributions as the group activity progresses.

### 4. Plan management

The planning module lets users create and manage plans. A plan can include:

- Plan name.
- Optional budget/amount.
- Icon or emoji.
- Creation date.
- Start date and end date.
- Optional note.
- Status.

Plan features include:

- All plans list.
- Pending plans list.
- Completed plans list.
- Cancelled plans list.
- Plan summary counts (total, pending, completed, cancelled).
- Plan details screen.
- Mark a plan as completed.
- Cancel a plan or reactivate it.
- Extend/update the plan date range.
- Edit the plan note.
- Delete a plan after confirmation.
- Validate that the end date is not before the start date.

Plan status values currently used in the code are `active`, `✔️ Completed Plan`, and `❌ Cancel Plan`.

### 5. Settings and profile UI

The Settings screen currently presents:

- Profile card.
- Account section with an Edit Profile entry.
- Help & Support entry.
- Send Feedback entry.
- Logout entry.

These are currently UI elements. A complete account system, profile editing flow, support ticket system, feedback submission, and logout/authentication integration are not present in the inspected code.

---

## Screens and navigation

The application uses React Navigation with a bottom-tab navigator and native stack navigators.

### Main bottom tabs

| Tab | Screen | Purpose |
|---|---|---|
| Home | `HomeScreen` | Dashboard and quick actions |
| Expense | `Expansion` | Switch between personal and group expense areas |
| My Plans | `PlanningNavigation` | Plan workflow and plan detail screens |
| Setting | `Setting` | Profile and settings interface |

### Additional stack screens

The root stack registers these expense screens:

- `AllPersonalExpenses`
- `AllGroupExpenses`
- `AddPersonalExpenses`
- `AddGroupExpenses`
- `GroupSummer`

The planning stack is defined in `src/navigation/PlanningNavigation.jsx` and includes:

- `Workflow`
- `AddPlans`
- `PlanDetails`

Navigation is configured in:

- `src/navigation/Navigation.jsx`
- `src/navigation/PlanningNavigation.jsx`

## Technology stack

| Technology / package | Usage |
|---|---|
| React 19.2.3 | Component-based UI |
| React Native 0.86.0 | Cross-platform native mobile application |
| React Navigation 7 | Bottom tabs and stack navigation |
| React Context API | Shared expense and planning state |
| React Hooks | Local and shared component state |
| `@react-native-community/datetimepicker` | Native date selection |
| `react-native-vector-icons` | Icon sets used throughout the UI |
| `lucide-react-native` | Lucide icon components |
| `react-native-linear-gradient` | Gradient UI support |
| `react-native-svg` | SVG rendering support |
| `react-native-safe-area-context` | Safe-area layout support |
| Jest | Test runner |
| React Test Renderer | Component rendering test support |
| ESLint | Static code checks |
| Prettier | Code formatting |

The project does not currently include a remote backend or a database dependency.

## Project architecture

NEXDLY follows a feature-oriented React Native structure:

```text
NEXDLY
│
├── App.jsx
├── index.js
│
├── src/
│   ├── assets/
│   │   └── images/
│   │
│   ├── context/
│   │   ├── ExpenseContext.jsx
│   │   └── PlaningContext.jsx
│   │
│   ├── features/
│   │   ├── HomeScreen.jsx
│   │   ├── Expansion.jsx
│   │   ├── WorkFlow.jsx
│   │   ├── Setting.jsx
│   │   │
│   │   ├── Expense/
│   │   │   ├── Cards/
│   │   │   ├── Group/
│   │   │   ├── Input/
│   │   │   ├── Personal/
│   │   │   ├── components/
│   │   │   ├── data/
│   │   │   └── screens/
│   │   │
│   │   ├── Planing/
│   │   │   ├── Inputs/
│   │   │   ├── cards/
│   │   │   ├── components/
│   │   │   └── screens/
│   │   │
│   │   └── Setting/
│   │
│   └── navigation/
│       ├── Navigation.jsx
│       └── PlanningNavigation.jsx
│
├── __tests__/
├── android/
├── ios/
├── app.json
├── babel.config.js
├── metro.config.js
├── package.json
└── ...
```

### Important directories

- `src/features/` — screen-level features and their UI components.
- `src/context/` — shared state providers and custom hooks.
- `src/navigation/` — bottom-tab and stack navigation configuration.
- `src/assets/` — images and other static assets.
- `android/` — Android native project.
- `ios/` — iOS native project.
- `__tests__/` — Jest tests.

### Application entry and providers

`index.js` registers the root component with React Native's `AppRegistry`.

`App.jsx` wraps the navigation tree in `SafeAreaProvider`.

`Navigation.jsx` wraps the application in:

- `ExpenseProvider`
- `PlaningProvider`
- `NavigationContainer`

This makes expense and planning state available to screens through their respective custom hooks.

## Requirements

### General

- Node.js **22.11.0 or later** (as specified by `package.json`).
- npm (included with Node.js).
- Git, if cloning the repository.

### Android development

- Android Studio.
- Android SDK and platform tools compatible with the project's Gradle configuration.
- JDK version compatible with the installed React Native / Android Gradle Plugin toolchain.
- Android emulator or a physical Android device with USB debugging enabled.

The checked-in Android project config uses compile SDK 36, target SDK 36, minimum SDK 24, Kotlin 2.1.20, and NDK 27.1.12206.

### iOS development

- macOS.
- Xcode.
- CocoaPods.
- Ruby and Bundler for the repository's Gemfile.
- An iOS simulator or physical iOS device.

iOS builds cannot be produced locally on Windows using the standard Xcode toolchain.

For complete native environment setup, follow the official [React Native environment setup guide](https://reactnative.dev/docs/set-up-your-environment).

## Installation

### 1. Clone the repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd NEXDLY-main
```

If you downloaded the ZIP, extract it and open a terminal in the extracted project directory.

### 2. Install JavaScript dependencies

```bash
npm install
```

### 3. Start Metro

```bash
npm start
```

Keep Metro running while building/running the application.

## Run the app

Open a second terminal at the project root.

### Android

Start an Android emulator or connect an Android device, then run:

```bash
npm run android
```

You can also open the `android/` directory in Android Studio and run the app from there.

### iOS

On macOS, install the Ruby dependencies and CocoaPods:

```bash
bundle install
cd ios
bundle exec pod install
cd ..
```

Then run:

```bash
npm run ios
```

### Useful development commands

| Command | Description |
|---|---|
| `npm install` | Install project dependencies |
| `npm start` | Start Metro bundler |
| `npm run android` | Build and launch Android app |
| `npm run ios` | Build and launch iOS app (macOS only) |
| `npm test` | Run Jest tests |
| `npm run lint` | Run ESLint |

## How the app works

### Expense state

`src/context/ExpenseContext.jsx` owns the shared personal and group expense arrays.

The context exposes operations for:

- Adding and updating personal expense entries.
- Deleting personal expense entries.
- Selecting a personal expense for editing.
- Creating and deleting group records.
- Adding/removing group members.
- Adding money to a member's contribution.
- Updating a group title.
- Calculating personal and group expense totals.

Screens consume this state through the `useExpense()` hook.

### Planning state

`src/context/PlaningContext.jsx` owns the shared `planing` array and exposes:

- Add/update access through `setPlaning`.
- Delete a plan.
- Total plan count.
- Pending plan count.
- Completed plan count.
- Cancelled plan count.
- Completed-plan percentage.

Screens consume this state through the `usePlaning()` hook.

### Data lifecycle

At present, these context values are initialized with empty arrays using `useState`. They are not written to AsyncStorage, SQLite, Realm, or a remote API. Therefore:

- Data is shared between screens while the app is running.
- Data is not guaranteed to survive an app restart or process termination.
- Data is not synchronized between devices.
- There is no account-based separation of user data.

Do not use the current in-memory implementation as durable storage for important financial records.

## State model examples

The following examples illustrate the general object shapes used by the current feature code. They are documentation examples, not a formal API contract.

### Personal expense

```js
{
  id: 1710000000000,
  title: "Groceries",
  amount: 450,
  date: new Date(),
  time: "06:30 pm",
  icon: "🛒",
  notes: "Weekly shopping"
}
```

### Group expense

```js
{
  id: 1710000000000,
  title: "Weekend Trip",
  icon: "🚗",
  date: new Date(),
  time: "06:30 pm",
  notes: "Shared travel costs",
  members: [
    {
      id: "member-1",
      name: "Alex",
      amount: 1200
    },
    {
      id: "member-2",
      name: "Sam",
      amount: 900
    }
  ]
}
```

### Plan

```js
{
  id: 1710000000000,
  planName: "Goa Trip",
  amount: "15000",
  planIcon: "🏝️",
  date: new Date(),
  startDate: new Date(),
  endDate: new Date(),
  planNote: "Save for the trip",
  status: "active"
}
```

## Testing and code quality

Run the configured checks from the project root:

```bash
npm test
npm run lint
```

The current Jest test at `__tests__/App.test.tsx` is a basic root-app render smoke test. It does not cover the full expense or planning workflows.

Recommended additional tests:

- Personal expense creation, edit, delete, and total calculation.
- Group creation and member validation.
- Adding contributions and recalculating group totals.
- Plan creation and date validation.
- Plan status transitions (pending, completed, cancelled, reactivated).
- Plan deletion and detail-screen behavior.
- Navigation between tabs and stack screens.

## Current scope and limitations

This section is important when evaluating the current repository:

1. **No persistence layer:** expenses and plans are stored in React Context state only. Restarting the app clears this data.
2. **No backend/API:** no server, REST/GraphQL API, or database integration is included.
3. **No authentication:** the repository does not implement a complete sign-up, login, or user-session flow.
4. **Settings actions are UI-only:** profile editing, help/support, feedback, and logout are not connected to complete workflows.
5. **No verified payment/banking integration:** the app tracks entered amounts; it does not connect to bank accounts or process payments.
6. **No automated financial reporting pipeline:** totals are calculated from the current in-memory arrays.
7. **Test coverage is minimal:** the existing test is a render smoke test rather than feature-level coverage.
8. **Naming consistency:** the code uses the spelling `Planing` in several file and symbol names. Preserve those existing import paths unless you intentionally refactor them.

## Suggested roadmap

### Priority 1 — Reliability

- Add persistent local storage (for example, AsyncStorage for simple local data, or SQLite for structured records).
- Add input validation for all monetary values, including non-negative numeric checks.
- Use stable unique IDs instead of relying only on `Date.now()`.
- Handle missing plan details safely in detail screens.
- Add unit and component tests for the core context operations.

### Priority 2 — Product completeness

- Implement working profile editing and account settings.
- Add functional notification, support, and feedback flows.
- Add expense categories, date-range filters, and richer summaries.
- Add group settlement calculations (who owes whom), if that is part of the intended product.
- Add export/share options for expense and plan summaries.

### Priority 3 — Backend and synchronization (optional future scope)

If multi-device access or user accounts are required, introduce a backend and database with:

- User authentication and authorization.
- Per-user expense and plan records.
- Secure API validation.
- Backup and synchronization.
- Data deletion/export controls.

This is a future architecture recommendation; it is not part of the current repository.

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a focused feature branch.
3. Follow the existing feature/context/navigation organization.
4. Keep shared expense and planning operations in their respective contexts.
5. Add validation and tests for new behavior.
6. Run lint and tests before opening a pull request.
7. Do not commit secrets, signing keys, personal financial information, or generated build artifacts.

## License

No license file was present in the inspected repository. Unless a license is added, the project should not be assumed to be open source or freely reusable. Add a `LICENSE` file if you intend to grant reuse, modification, and distribution rights.
