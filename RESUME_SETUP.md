# Resume Download Setup Guide

## Overview
A **Download Resume** button has been added to the Hero section of your portfolio, positioned right below your description and above the social media icons.

## What Was Implemented

### 1. **Download Resume Button**
- **Location**: Hero section, below the description text
- **Design**: 
  - Rounded pill-shaped button with border
  - Download icon that bounces on hover
  - Smooth hover animations and scale effect
  - Matches the portfolio's modern design aesthetic
  - Translates to both English and French

### 2. **Translations Added**
- **English**: "Download Resume"
- **French**: "Télécharger CV"

### 3. **Features**
- ✅ Download icon from Lucide React
- ✅ Hover animation (icon bounces)
- ✅ Scale effect on hover
- ✅ Bilingual support
- ✅ Smooth fade-in animation
- ✅ Responsive design

## How to Add Your Resume

### Option 1: Add Resume to Public Folder (Recommended)

1. **Prepare your resume**:
   - Save your resume as a PDF file
   - Name it `resume.pdf`

2. **Add to public folder**:
   - Place the `resume.pdf` file in the `public` folder of your project
   - Path: `c:\Users\Ahmed\Desktop\Portfolio\public\resume.pdf`

3. **That's it!** The button will automatically download your resume when clicked.

### Option 2: Use a Different Filename

If you want to use a different filename (e.g., `Klibi_Ahmed_CV.pdf`):

1. Place your PDF in the `public` folder with your chosen name

2. Update the Hero component (`src/components/Hero.jsx`):
   ```jsx
   <a
     href="/Klibi_Ahmed_CV.pdf"  // Change this to your filename
     download="Klibi_Ahmed_Resume.pdf"  // This is the downloaded filename
     className="..."
   >
   ```

### Option 3: Host Resume Externally

If you want to host your resume on Google Drive, Dropbox, or another service:

1. Upload your resume and get a direct download link

2. Update the Hero component:
   ```jsx
   <a
     href="https://your-external-link.com/resume.pdf"
     target="_blank"
     rel="noopener noreferrer"
     className="..."
   >
   ```

## File Structure

```
Portfolio/
├── public/
│   ├── resume.pdf          ← Add your resume here
│   ├── profile.jpg
│   └── ...
├── src/
│   ├── components/
│   │   └── Hero.jsx        ← Resume button is here
│   └── ...
```

## Button Appearance

The button appears with:
- **Icon**: Download arrow icon
- **Text**: "Download Resume" (English) / "Télécharger CV" (French)
- **Style**: Semi-transparent background with primary color border
- **Animation**: Icon bounces on hover, button scales up slightly

## Customization Options

### Change Button Style

Edit `src/components/Hero.jsx` and modify the button's className:

```jsx
<a
  href="/resume.pdf"
  download="Klibi_Ahmed_Resume.pdf"
  className="inline-flex items-center gap-2 px-6 py-3 
    bg-gradient-to-r from-primary-500 to-purple-500  // Solid gradient
    rounded-full font-semibold 
    hover:shadow-lg hover:shadow-primary-500/50 
    transition-all duration-300 hover:scale-105 group"
>
```

### Change Button Position

The button is currently positioned between the description and social icons. To move it:

1. **After social icons**: Cut the entire motion.div block and paste it after the social media icons section

2. **In the navbar**: Add it to the Navbar component instead

3. **In the action buttons**: Add it alongside "View My Work" and "Get In Touch" buttons

### Change Download Filename

The `download` attribute controls the filename when downloaded:

```jsx
download="Klibi_Ahmed_Resume.pdf"  // User will download this filename
```

Change it to whatever you prefer:
- `download="Ahmed_Klibi_CV_2025.pdf"`
- `download="Resume_Klibi_Ahmed.pdf"`
- etc.

## Testing

1. **Add your resume PDF** to the `public` folder

2. **Start the dev server**:
   ```bash
   npm run dev
   ```

3. **Test the button**:
   - Navigate to your portfolio
   - Click the "Download Resume" button
   - Verify the PDF downloads correctly

4. **Test language switching**:
   - Click the French flag
   - Button text should change to "Télécharger CV"
   - Click the American flag
   - Button text should change back to "Download Resume"

## Resume Best Practices

### File Format
- ✅ **PDF** (Recommended) - Universal, preserves formatting
- ❌ DOC/DOCX - May not display correctly on all devices

### File Size
- Keep under 2MB for fast downloads
- Optimize images if your resume includes them

### Filename
- Use professional naming: `FirstName_LastName_Resume.pdf`
- Avoid spaces (use underscores or hyphens)
- Include year if relevant: `Ahmed_Klibi_Resume_2025.pdf`

### Resume Content Tips
- Keep it to 1-2 pages
- Include contact information
- Highlight relevant skills and projects
- Use a clean, professional design
- Proofread for errors

## Troubleshooting

### Issue: Button doesn't download file
**Solution**: 
- Verify `resume.pdf` exists in the `public` folder
- Check the filename matches exactly (case-sensitive)
- Clear browser cache and try again

### Issue: Wrong file downloads
**Solution**: 
- Check the `href` attribute points to the correct file
- Ensure no other file with the same name exists

### Issue: Button not visible
**Solution**: 
- Check browser console for errors
- Verify the Hero component is rendering
- Check if the button is hidden by CSS

### Issue: Button style looks wrong
**Solution**: 
- Verify Tailwind CSS is working
- Check for conflicting CSS styles
- Inspect element in browser DevTools

## Alternative: Multiple Resume Versions

If you want to offer multiple versions (e.g., English and French resumes):

```jsx
<div className="flex justify-center gap-4 mb-8">
  <a
    href="/resume_en.pdf"
    download="Klibi_Ahmed_Resume_EN.pdf"
    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border-2 border-primary-500/50 rounded-full font-semibold hover:bg-primary-500/10 hover:border-primary-500 transition-all duration-300 hover:scale-105 group"
  >
    <Download size={20} className="group-hover:animate-bounce" />
    Resume (EN)
  </a>
  <a
    href="/resume_fr.pdf"
    download="Klibi_Ahmed_CV_FR.pdf"
    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border-2 border-primary-500/50 rounded-full font-semibold hover:bg-primary-500/10 hover:border-primary-500 transition-all duration-300 hover:scale-105 group"
  >
    <Download size={20} className="group-hover:animate-bounce" />
    CV (FR)
  </a>
</div>
```

## Support

For more customization or issues:
1. Check the browser console for errors
2. Verify file paths are correct
3. Test in different browsers
4. Ensure the PDF is not corrupted

---

**Implementation Date**: October 12, 2025
**Status**: ✅ Ready - Just add your resume.pdf to the public folder!
