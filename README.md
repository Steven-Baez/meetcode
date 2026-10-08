# MeetCode

*Making coding interview preparation more social, competitive, and consistent.*

## Overview

**MeetCode** is a daily coding challenge platform inspired by *Wordle*, *LinkedIn Games*, and *LeetCode*. Each day, users receive the same coding problem and can compare their results with others after completing it.

The platform is designed around a simple idea: **practicing coding problems is easier to stay consistent with when friends are working toward the same goal.** Rather than solving problems individually and moving on, users can see who completed the daily challenge, how long each person took, and the time complexity of their approach.

MeetCode aims to combine technical interview preparation with friendly competition and accountability.

---

## The Problem

Consistency is one of the biggest challenges when preparing for technical interviews. While platforms such as LeetCode offer problems to practice, staying motivated to solve them regularly can be difficult, especially when practicing alone.

MeetCode introduces a shared daily challenge and leaderboard to give users a reason to return. The goal is not only to finish problems quickly, but also to **build a daily habit, compare different approaches, and improve problem-solving skills over time.**

---

## How MeetCode Works

1. **Create an account or log in** to access daily challenges.
2. **View the daily problem.** Every user receives the same featured coding question that day.
3. **Solve the challenge** and record the solution, completion time, and estimated time complexity.
4. **Submit the result** to save the day's attempt.
5. **View the leaderboard** to compare completion times and approaches with other users.

For the initial version, submissions and completion times will be **self-reported**. A built-in editor, automatic timing, and solution verification are potential future additions.

---

## Minimum Viable Product (MVP)

The first version will focus on four core features:

### User Accounts

- Register and log in securely.
- Access a basic user profile.
- View personal submission history.

### Daily Challenges

- Display one coding problem each day.
- Include a problem description and difficulty level.
- Show the same daily problem to all users.
- Select the daily problem from a predefined collection of coding challenges.
- Rotate the featured problem every 24 hours so all users receive the same challenge on a given day.

### Challenge Submissions

- Record a solution and reported completion time.
- Include the solution's estimated time complexity.
- Save submissions for future reference.

### Daily Leaderboard

- Display users who completed the daily challenge.
- Rank submissions by reported completion time.
- Show the reported time complexity alongside each result.
- Rank users primarily by their reported completion time.
- Display estimated time complexity for comparison, without using it to determine leaderboard rankings.

---

## Planned Tech Stack

MeetCode will be developed using the **MERN + GraphQL** stack.

- **MongoDB Atlas / Mongoose:** Store user accounts and challenge submissions.
- **Express.js / Node.js:** Handle server-side logic.
- **React:** Build the user interface.
- **GraphQL / Apollo:** Fetch and update application data.
- **JWT / bcrypt:** Support authentication and secure password storage.

---

## Planned Data Models

**Mongoose models**:
1. **User** - Stores account details, including a username, email, hashed password, and account creation date.
2. **Submission** - Stores an individual's challenge result, including the user ID, daily challenge ID, solution, reported completion time, estimated time complexity, and submission date. Daily problems can initially come from a predefined set rather than requiring a third database model.

**Planned GraphQL Types:**

1. **User** - Represents a registered user and contains their ID, username, and email.
2. **Submission** - Represents a completed daily challenge and contains the user's ID, challenge ID, solution, completion time, and estimated time complexity.

**GraphQL Queries:**
1. `me` - Retrieve the logged-in user's profile.
2. `dailyChallenge` - Retrieve the current daily coding problem.
3. `mySubmissions` - Retrieve the logged-in user's past submissions.
4. `dailyLeaderboard` - Retrieve results for the current daily challenge.

**GraphQL Mutations:**
1. `register` - Create a new account.
2. `login` - Authenticate a user.
3. `submitSolution` - Save a user's daily challenge result.
4. `updateSubmission` - Update a user's existing submission.

---

## Future Features

After the core application is working, MeetCode could expand to include:

- **Friends and private leaderboards** -- Compare results within a friend group.
- **Daily streaks** -- Track consistent participation over time.
- **Built-in coding environment** -- Write and run code directly on the platform.
- **Automatic evaluation** -- Validate solutions against test cases and record timing more reliably.
- **Solution comparisons** -- Review different approaches after completing a challenge.
- **Progress statistics** -- View performance trends across weeks or months.

---

*Project status: Planning / early development. Features and implementation details may change as development progresses.*
