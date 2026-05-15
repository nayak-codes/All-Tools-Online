# All Tools Online - Free Image, PDF & Text Processing

A comprehensive web application providing free online tools for image processing, PDF manipulation, and text conversion. No login required!

## Features

### 🖼️ Image Tools
- **Background Remover** - Remove backgrounds from images (uses remove.bg API)
- **Image Compressor** - Compress images with adjustable quality
- **Image Resizer** - Resize images to custom dimensions
- **Format Converter** - Convert between PNG, JPG, WebP
- **Image Cropper** - Crop specific areas from images
- **Remove White Background** - Remove white/light backgrounds with threshold control

### 📄 PDF Tools
- **Image to PDF** - Convert multiple images to a single PDF
- **PDF Merger** - Merge multiple PDF files into one
- **PDF Splitter** - Split PDF at specific page numbers

### 📝 Text Tools
- **Word Counter** - Count words, characters, sentences, paragraphs
- **Case Converter** - Convert text to UPPERCASE, lowercase, Title Case, or Sentence case

### 🎨 Utilities
- **Color Picker** - Pick and copy hex color codes
- **Image to PDF (Single)** - Convert single image to PDF

## Technologies Used

- **Frontend**: Vite, Vanilla JavaScript
- **Libraries**:
  - `browser-image-compression` - Image compression
  - `jspdf` - PDF generation
  - `pdf-lib` - PDF manipulation
- **Styling**: Modern CSS with gradient backgrounds
- **Monetization**: Google AdSense ready

## Installation & Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. For Background Remover feature:
   - Sign up at [remove.bg](https://www.remove.bg/)
   - Get your API key (free tier: 50 images/month)
   - Replace `YOUR_REMOVE_BG_API_KEY` in `src/main.js`

4. For Google Ads:
   - Apply for [Google AdSense](https://www.google.com/adsense/)
   - Replace placeholder publisher IDs in `index.html` and `src/main.js`

5. Run development server:
   ```bash
   npm run dev
   ```
   App will be available at `http://localhost:5173/`

## Build for Production

```bash
npm run build
```

Deploy the `dist` folder to any static hosting:
- Vercel
- Netlify
- GitHub Pages
- Any static web hosting service

## Monetization Strategy

1. **Google AdSense** - Display ads between tools and in ad spaces
2. **Traffic Generation** - SEO optimization, social media marketing
3. **Passive Income** - Earn from ad impressions and clicks

## Browser Support

- Chrome, Edge, Firefox, Safari (all modern versions)
- Mobile responsive design
- Works offline (except Background Remover which requires API)

## License

MIT