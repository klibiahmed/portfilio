# Quick Test Guide 🧪

## Start Testing in 3 Steps

### Step 1: Start the Server
```bash
cd c:\Users\Ahmed\Desktop\Portfolio
npm run dev
```

### Step 2: Test Language Switching
1. Open your browser to the local URL (usually http://localhost:5173)
2. Look at the top-right corner of the navbar
3. Click the 🇺🇸 American flag
   - ✅ All text should be in English
   - ✅ Button should say "Download Resume"
4. Click the 🇫🇷 French flag
   - ✅ All text should be in French
   - ✅ Button should say "Télécharger CV"

### Step 3: Test Resume Downloads
1. **With English selected** (🇺🇸):
   - Scroll to the Hero section
   - Click "Download Resume" button
   - ✅ File should download as `Klibi_Ahmed_Resume.pdf`
   - ✅ Open it to verify it's your English resume

2. **With French selected** (🇫🇷):
   - Click the French flag
   - Click "Télécharger CV" button
   - ✅ File should download as `Klibi_Ahmed_CV.pdf`
   - ✅ Open it to verify it's your French CV

## What to Check

### Navigation Bar
- [ ] Logo appears on the left
- [ ] Navigation links work (Home, About, Skills, Projects, Contact)
- [ ] Flag buttons appear on the right
- [ ] Flag buttons work (switch languages)
- [ ] Mobile menu works (on small screens)

### Hero Section
- [ ] Profile picture displays
- [ ] Name and title appear
- [ ] Description text appears
- [ ] Download Resume button appears
- [ ] Button text changes with language
- [ ] Button downloads correct file
- [ ] Social media icons work
- [ ] "View My Work" and "Get In Touch" buttons work

### All Sections
- [ ] About section translates
- [ ] Skills section translates
- [ ] Education section translates
- [ ] Projects section translates
- [ ] Contact form translates
- [ ] Footer translates

### Mobile Testing
- [ ] Open on mobile device or use browser DevTools
- [ ] Flag buttons visible on mobile
- [ ] Download button works on mobile
- [ ] All sections responsive
- [ ] Mobile menu works

## Expected Behavior

### Language Switching
| Action | Expected Result |
|--------|----------------|
| Click 🇺🇸 flag | All text → English |
| Click 🇫🇷 flag | All text → French |
| Navigate sections | Language stays selected |
| Refresh page | Resets to English (default) |

### Resume Downloads
| Language | Button Text | File Downloaded | Saved As |
|----------|------------|-----------------|----------|
| 🇺🇸 English | "Download Resume" | Resume.pdf | Klibi_Ahmed_Resume.pdf |
| 🇫🇷 French | "Télécharger CV" | cv.pdf | Klibi_Ahmed_CV.pdf |

## Troubleshooting

### Issue: Server won't start
```bash
# Try these commands:
npm install
npm run dev
```

### Issue: Flags don't appear
- Check internet connection (flags load from CDN)
- Check browser console for errors
- Try refreshing the page

### Issue: Resume doesn't download
- Verify files exist in `public` folder:
  - `public/Resume.pdf`
  - `public/cv.pdf`
- Check file names match exactly (case-sensitive)
- Clear browser cache

### Issue: Wrong resume downloads
- Check which language is selected (look at flag buttons)
- Verify file names in public folder
- Check browser console for errors

## Browser Testing

Test in multiple browsers:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

## Performance Check

- [ ] Page loads quickly
- [ ] Language switching is instant
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Images load properly

## Final Checklist

- [ ] Both language flags work
- [ ] All sections translate correctly
- [ ] English resume downloads correctly
- [ ] French CV downloads correctly
- [ ] Mobile responsive
- [ ] No console errors
- [ ] All links work
- [ ] Contact form works

## Success Criteria

✅ **Your portfolio is ready when:**
1. Language switching works smoothly
2. Both resumes download correctly
3. All sections display properly
4. Mobile version works well
5. No errors in console

---

## Need Help?

Check these files:
- `BILINGUAL_RESUME_GUIDE.md` - Resume feature details
- `LANGUAGE_SWITCHING_GUIDE.md` - Language feature details
- `IMPLEMENTATION_SUMMARY.md` - Complete overview

---

**Happy Testing! 🚀**
