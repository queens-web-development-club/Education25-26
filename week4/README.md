# QWeb Week 4 – Git Basics Practice

This is a simple project to help you learn the basics of Git and GitHub.

## What You'll Learn

* How to initialize a Git repository
* How to add and commit files
* How to connect to GitHub
* How to push and pull updates

## Step-by-Step Tutorial

### 1. Open this folder in VS Code or your terminal

Make sure you're inside the project folder

```bash
cd week4
```

---

### 2. Initialize Git

This creates a new local repository that starts tracking your files.

```bash
git init
```

---

### 3. Add files to staging

Stage all your files to prepare them for committing.

```bash
git add .
```

Check which files are staged:

```bash
git status
```

---

### 4. Commit your changes

Save a snapshot of your work with a message.

```bash
git commit -m "Initial commit"
```

---

### 5. Create a new GitHub repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** button in the top right corner
3. Select **New repository**
4. Name it **qweb-week4-tutorial** (or whatever you'd like!)
7. Click **Create repository**

---

### 6. Connect your local repo to GitHub

After creating the repository, GitHub will show you a page with setup instructions.

**First, make sure you have SSH set up with GitHub:**
- If you haven't set up SSH keys yet, follow [GitHub's SSH setup guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)
- This is a one-time setup that makes pushing/pulling much easier!

**To copy your repo link:**
1. Look for the section that says "…or push an existing repository from the command line"
2. Click the **SSH** button (not HTTPS)
3. You'll see a URL that looks like: `git@github.com:YOUR-USERNAME/qweb-week4-tutorial.git`. Copy this link.

**Then run these commands** (paste your copied URL in place of `<your-repo-link>`):

```bash
git remote add origin <your-repo-link>
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin git@github.com:john-doe/qweb-week4-tutorial.git
git branch -M main
git push -u origin main
```

Now your project is online! Refresh your GitHub repository page to see your files.

---

### 7. Make a small change

Open `index.html`, change some text, then save the file.

Stage and commit again:

```bash
git add index.html
git commit -m "Updated homepage text"
git push
```

Check your GitHub page — the change should appear there.

---

### 9. (Optional) Ignore certain files

If you have files you don't want to upload (like `.env`), list them in `.gitignore`.

Example:

```
.env
node_modules/
.DS_Store
```

---

Congratulations! You have now successfully created a GitHub Repository!


