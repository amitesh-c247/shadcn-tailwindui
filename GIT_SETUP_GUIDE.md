# Git Setup Guide - Remove node_modules

## ✅ `.gitignore` File Created

I've created a comprehensive `.gitignore` file that excludes:
- `node_modules/` - All dependencies
- `.next/` - Next.js build output
- `.env*` - Environment variables
- IDE folders (`.vscode`, `.cursor`, `.idea`)
- OS files (`.DS_Store`, `Thumbs.db`)
- Log files
- Build artifacts
- And much more!

## 🚀 If node_modules is Already Tracked by Git

If you've already committed `node_modules` to your repository, follow these steps:

### Step 1: Remove node_modules from Git (but keep it locally)

```bash
git rm -r --cached node_modules
```

This removes `node_modules` from git tracking but keeps it on your local machine.

### Step 2: Remove other ignored files (if needed)

```bash
# Remove .next build folder
git rm -r --cached .next

# Remove environment files (if tracked)
git rm --cached .env.local
git rm --cached .env
```

### Step 3: Commit the changes

```bash
git add .gitignore
git commit -m "chore: add .gitignore and remove node_modules from tracking"
```

### Step 4: Push to remote

```bash
git push origin main
# or
git push origin master
```

## 📋 Complete Command Sequence

Run these commands in your terminal:

```bash
# 1. Remove node_modules from git tracking
git rm -r --cached node_modules

# 2. Remove .next folder if it exists
git rm -r --cached .next

# 3. Add .gitignore
git add .gitignore

# 4. Add all other changes
git add .

# 5. Commit
git commit -m "chore: add .gitignore and remove node_modules from tracking"

# 6. Push
git push origin main
```

## 🔍 Verify Files are Ignored

After pushing, check what's being tracked:

```bash
# See what files git is tracking
git ls-files | grep node_modules

# If the command returns nothing, you're good! ✅
```

## 🛠️ Alternative: Clean Everything

If you want to remove ALL ignored files from git:

```bash
# See what would be removed (dry run)
git clean -ndX

# Actually remove ignored files from git
git clean -fdX

# Then commit
git add .
git commit -m "chore: clean up ignored files"
git push
```

## ⚠️ Important Notes

1. **Backup First**: Make sure you have a backup before running these commands
2. **Check Branch**: Verify you're on the correct branch (`git branch`)
3. **Node Modules**: After removing from git, you can always reinstall with:
   ```bash
   npm install
   # or
   pnpm install
   ```

## 📊 What's Included in .gitignore

### Dependencies
- `node_modules/`
- `.pnp`, `.pnp.js`

### Build Output
- `.next/`
- `out/`
- `build/`
- `dist/`

### Environment Files
- `.env`
- `.env.local`
- `.env*.local`

### IDE Files
- `.vscode/` (except specific config files)
- `.cursor/` (except rules)
- `.idea/`

### OS Files
- `.DS_Store` (macOS)
- `Thumbs.db` (Windows)

### Logs & Debugging
- `*.log`
- `npm-debug.log*`
- `yarn-debug.log*`

### Other
- Coverage reports
- Lock files (optional)
- Temporary files

## ✅ Checklist

- [x] `.gitignore` file created
- [ ] Remove `node_modules` from git tracking
- [ ] Remove `.next` from git tracking
- [ ] Remove `.env` files from git tracking
- [ ] Commit changes
- [ ] Push to remote
- [ ] Verify node_modules is not in repository

## 🆘 Troubleshooting

### Files still being tracked?
```bash
# Clear git cache completely
git rm -r --cached .
git add .
git commit -m "chore: fix .gitignore"
```

### Want to see what's ignored?
```bash
git status --ignored
```

### Made a mistake?
```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1
```

## 📚 Resources

- [Git Documentation](https://git-scm.com/docs)
- [GitHub .gitignore Templates](https://github.com/github/gitignore)
- [Next.js .gitignore](https://github.com/vercel/next.js/blob/canary/.gitignore)
