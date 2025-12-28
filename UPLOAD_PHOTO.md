# How to Upload Your Profile Photo

## Quick Steps:

### Option 1: Extract from PDF (Recommended)
1. **Open the PDF** (`my_photo.pdf`) in a PDF viewer or image editor
2. **Extract/Save the image:**
   - Right-click on the image in the PDF → "Save Image As..."
   - OR use a PDF to image converter online (like ilovepdf.com, smallpdf.com)
   - OR take a screenshot of the image from the PDF

3. **Save the image:**
   - Name it: `profile-photo.jpg` (or `profile-photo.png`)
   - Save it to: `public/images/profile-photo.jpg`

### Option 2: Using Windows (If PDF is open)
1. Open `my_photo.pdf` in a PDF viewer
2. Use Windows Snipping Tool or Snip & Sketch (Win + Shift + S)
3. Capture the photo area
4. Save as `profile-photo.jpg` in `public/images/` folder

### Option 3: Online PDF to Image Converter
1. Go to: https://www.ilovepdf.com/pdf-to-jpg or https://smallpdf.com/pdf-to-jpg
2. Upload `my_photo.pdf`
3. Download the extracted image
4. Rename to `profile-photo.jpg`
5. Move to `public/images/` folder

## File Location:
```
my_portfolio/
  └── public/
      └── images/
          └── profile-photo.jpg  ← Place your photo here
```

## Supported Formats:
- ✅ `profile-photo.jpg` (recommended)
- ✅ `profile-photo.png`
- ✅ `profile-photo.jpeg`

## Image Requirements:
- **Size:** At least 600x600 pixels (square works best)
- **File size:** Under 500KB for fast loading
- **Format:** JPG or PNG
- **Quality:** Professional headshot with good lighting

## After Uploading:
1. Save the file in `public/images/profile-photo.jpg`
2. Refresh your browser (or restart the dev server)
3. The photo will appear automatically in the Hero section with a blue glow effect!

## Troubleshooting:
- If the image doesn't appear, check:
  - File name is exactly `profile-photo.jpg` (case-sensitive)
  - File is in `public/images/` folder (not `public/` directly)
  - Restart the Next.js dev server: `npm run dev`
  - Clear browser cache (Ctrl + Shift + R)

