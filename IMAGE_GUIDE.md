# 📸 Image Optimization Guide for Luisa's Portfolio

## 🎯 What This Does
Your portfolio automatically optimizes all images for fast loading while maintaining visual quality. Upload high-resolution images once, and the system serves optimized versions to different devices.

## 📤 How to Add Images

### 1. Project Featured Images
Create your project as a page bundle:

```
content/posts/my-project/
├── index.md
└── featured-image.jpg  ← Your high-res image here
```

In your `index.md`:
```markdown
---
title: "My Amazing Project"
featured_image: "featured-image.jpg"  ← Reference the filename
---
```

### 2. Images Within Project Content
Use the optimized image shortcode:

```markdown
{{< img src="image.jpg" alt="Descriptive text" >}}
```

Optional parameters:
```markdown
{{< img src="image.jpg" alt="Description" class="custom-class" sizes="(max-width: 768px) 100vw, 50vw" lazy="false" >}}
```

### 3. Simple Markdown Images (Less Optimal)
Standard markdown works but won't be optimized:
```markdown
![Alt text](image.jpg)
```

## 🔧 What Happens Automatically

### For Featured Images:
- **Mobile**: 600px WebP (~30KB)  
- **Tablet**: 900px WebP (~80KB)
- **Desktop**: 1200px WebP (~150KB)
- **Fallback**: JPEG versions for older browsers

### For Project Cards:
- **Thumbnail**: 400x300px WebP (~15KB) for grid display
- **Fallback**: JPEG version

## 📊 Performance Benefits

**Before Optimization:**
- 3MB image download for 200px display
- 8+ second mobile load times
- Poor SEO scores

**After Optimization:**
- 15KB optimized image for same display  
- <2 second mobile load times
- Excellent Core Web Vitals

## 🛠️ Technical Details

### Generated Formats:
- **WebP**: Modern browsers (best compression)
- **JPEG**: Fallback for older browsers
- **Progressive loading**: Small images load first
- **Lazy loading**: Images load when needed

### Responsive Breakpoints:
- **400px**: Mobile phones
- **600px**: Large phones/small tablets  
- **900px**: Tablets
- **1200px**: Desktop/laptop screens

## 📱 File Organization

### Recommended Structure:
```
content/posts/
├── project-1/
│   ├── index.md
│   ├── featured-image.jpg     ← Hero image
│   ├── detail-1.jpg          ← Additional images
│   └── detail-2.jpg
├── project-2/
│   ├── index.md
│   └── featured-image.jpg
```

### File Naming Tips:
- Use descriptive names: `living-room-view.jpg` vs `img001.jpg`
- Keep names short and web-friendly (no spaces, special characters)
- Use lowercase with hyphens: `modern-kitchen-design.jpg`

## 💡 Best Practices

### Image Quality:
- **Upload high resolution**: 2000px+ width is fine
- **Don't pre-optimize**: Let the system handle compression
- **Use good source images**: System can't improve poor quality

### Alt Text:
- Be descriptive: "Modern minimalist living room with floor-to-ceiling windows"
- Include context: "Before renovation - cramped traditional layout"
- Avoid redundant phrases: "Image of..." or "Picture showing..."

### Content Strategy:
- **Featured image**: Best representative photo of the project
- **Detail images**: Show specific elements, materials, layouts
- **Process images**: Before/during/after shots

## 🚀 Development vs Production

### Development (`npm run dev`):
- Original images shown (for editing)
- Fast builds, no processing overhead

### Production (`npm run build`):
- All images automatically optimized
- Multiple formats and sizes generated
- Cached for future builds

## 🔍 Troubleshooting

### Image Not Showing:
1. Check file path is correct
2. Ensure image is in the page bundle directory
3. Verify filename matches exactly (case-sensitive)

### Build Errors:
- Check image format is supported (JPG, PNG, WebP, GIF)
- Ensure image isn't corrupted
- File size should be reasonable (<50MB)

### Performance Issues:
- Original images >10MB may slow builds
- Consider resizing extremely large images before upload
- Build cache in `resources/` speeds up subsequent builds

---

✨ **The system handles everything automatically - just upload great images and write great content!**