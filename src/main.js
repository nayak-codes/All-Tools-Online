import './style.css'
import imageCompression from 'browser-image-compression'
import jsPDF from 'jspdf'
import { PDFDocument } from 'pdf-lib'

document.querySelector('#app').innerHTML = `
<div class="app-wrapper">
  <header class="main-header">
    <h1>🛠️ All Tools Online</h1>
    <p>Free online tools - No login required • Completely Free Forever</p>
  </header>

  <div class="main-content">
    <aside class="sidebar">
      <nav class="nav-menu">
        <button class="nav-btn active" data-tab="image">🖼️ Image Tools</button>
        <button class="nav-btn" data-tab="pdf">📄 PDF Tools</button>
        <button class="nav-btn" data-tab="text">📝 Text Tools</button>
        <button class="nav-btn" data-tab="color">🎨 Utilities</button>
      </nav>
    </aside>

    <div class="content-area">
      <div class="ads">
        <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="XXXXXXXXXX" data-ad-format="auto" data-full-width-responsive="true"></ins>
      </div>

  <div class="tools">
    <!-- IMAGE TOOLS TAB -->
    <div class="tab-content active" id="image">
      <div class="tool">
        <h2>📸 Background Remover</h2>
        <input type="file" id="bg-input" accept="image/*">
        <button id="bg-process">Remove Background</button>
        <div class="preview-sections" id="bg-preview" style="display:none;">
          <div class="preview-section">
            <h3>📷 Original</h3>
            <img id="bg-original" alt="Original image">
          </div>
          <div class="preview-section">
            <h3>✨ Background Removed</h3>
            <img id="bg-processed" alt="Background removed image">
          </div>
        </div>
        <button id="bg-download-btn" style="display:none; background: #10b981;">⬇️ Download Result</button>
        <a id="bg-download" download style="display:none"></a>
        <p class="info">💡 Tip: Use "Remove White Background" for better control over cropping</p>
      </div>

      <div class="tool">
        <h2>🗜️ Image Compressor</h2>
        <input type="file" id="comp-input" accept="image/*">
        <input type="range" id="quality" min="10" max="90" value="50" placeholder="Quality">
        <p class="info">Quality: <span id="qualityValue">50</span>%</p>
        <button id="comp-process">Compress Image</button>
        <div class="preview-sections" id="comp-preview" style="display:none;">
          <div class="preview-section">
            <h3>📷 Original</h3>
            <img id="comp-original" alt="Original image">
          </div>
          <div class="preview-section">
            <h3>✨ Compressed</h3>
            <img id="comp-processed" alt="Compressed image">
          </div>
        </div>
        <button id="comp-download-btn" style="display:none; background: #10b981;">⬇️ Download Compressed Image</button>
        <a id="comp-download" download style="display:none;"></a>
      </div>

      <div class="tool">
        <h2>📏 Image Resizer</h2>
        <input type="file" id="resize-input" accept="image/*">
        <input type="number" id="width" placeholder="Width (px)">
        <input type="number" id="height" placeholder="Height (px)">
        <button id="resize-process">Resize Image</button>
        <div class="preview-sections" id="resize-preview" style="display:none;">
          <div class="preview-section">
            <h3>📷 Original</h3>
            <img id="resize-original" alt="Original image">
          </div>
          <div class="preview-section">
            <h3>✨ Resized</h3>
            <img id="resize-processed" alt="Resized image">
          </div>
        </div>
        <button id="resize-download-btn" style="display:none; background: #10b981;">⬇️ Download Resized Image</button>
        <a id="resize-download" download style="display:none"></a>
      </div>

      <div class="tool">
        <h2>🔄 Format Converter</h2>
        <input type="file" id="convert-input" accept="image/*">
        <select id="format">
          <option value="png">PNG (Lossless)</option>
          <option value="jpeg">JPG (Lossy)</option>
          <option value="webp">WebP (Modern)</option>
        </select>
        <button id="convert-process">Convert</button>
        <div class="preview-sections" id="convert-preview" style="display:none;">
          <div class="preview-section">
            <h3>📷 Original</h3>
            <img id="convert-original" alt="Original image">
          </div>
          <div class="preview-section">
            <h3>✨ Converted</h3>
            <img id="convert-processed" alt="Converted image">
          </div>
        </div>
        <button id="convert-download-btn" style="display:none; background: #10b981;">⬇️ Download Converted Image</button>
        <a id="convert-download" download style="display:none"></a>
      </div>

      <div class="tool">
        <h2>⭕ Circular Image Cutter</h2>
        <input type="file" id="circle-input" accept="image/*">
        <div class="circle-preview-container" id="circleContainer">
          <canvas id="circlePreview" width="300" height="300"></canvas>
        </div>
        <p class="info">🔍 Scroll to zoom • Drag to move</p>
        <button id="circle-process">Cut Circle</button>
        <div class="preview-sections" id="circle-preview" style="display:none;">
          <div class="preview-section">
            <h3>📷 Original</h3>
            <img id="circle-original" alt="Original image">
          </div>
          <div class="preview-section">
            <h3>✨ Circular</h3>
            <img id="circle-processed" alt="Circular image">
          </div>
        </div>
        <button id="circle-download-btn" style="display:none; background: #10b981;">⬇️ Download Circular Image</button>
        <a id="circle-download" download style="display:none"></a>
      </div>

      <div class="tool">
        <h2>🎨 Remove White Background</h2>
        <input type="file" id="white-bg-input" accept="image/*">
        <input type="range" id="threshold" min="0" max="255" value="200" placeholder="Threshold">
        <p class="info">Threshold: <span id="thresholdValue">200</span></p>
        <button id="white-bg-process">Remove White BG</button>
        <div class="preview-sections" id="white-bg-preview" style="display:none;">
          <div class="preview-section">
            <h3>📷 Original</h3>
            <img id="white-bg-original" alt="Original image">
          </div>
          <div class="preview-section">
            <h3>✨ Background Removed</h3>
            <img id="white-bg-processed" alt="Background removed image">
          </div>
        </div>
        <button id="white-bg-download-btn" style="display:none; background: #10b981;">⬇️ Download Result</button>
        <a id="white-bg-download" download style="display:none"></a>
      </div>
    </div>

    <!-- PDF TOOLS TAB -->
    <div class="tab-content" id="pdf">
      <div class="tool">
        <h2>📷 Image to PDF</h2>
        <input type="file" id="img2pdf-input" accept="image/*" multiple>
        <button id="img2pdf-process">Convert to PDF</button>
        <a id="img2pdf-download" download style="display:none"></a>
      </div>

      <div class="tool">
        <h2>🔗 PDF Merger</h2>
        <input type="file" id="pdf-merge-input" accept=".pdf" multiple>
        <button id="pdf-merge-process">Merge PDFs</button>
        <a id="pdf-merge-download" download style="display:none"></a>
      </div>

      <div class="tool">
        <h2>✂️ PDF Splitter</h2>
        <input type="file" id="pdf-split-input" accept=".pdf">
        <input type="number" id="split-page" placeholder="Page number to split at" min="1">
        <button id="pdf-split-process">Split PDF</button>
        <a id="pdf-split-download1" download style="display:none"></a>
        <a id="pdf-split-download2" download style="display:none"></a>
      </div>
    </div>

    <!-- TEXT TOOLS TAB -->
    <div class="tab-content" id="text">
      <div class="tool">
        <h2>📊 Word Counter</h2>
        <textarea id="word-input" placeholder="Paste your text here..."></textarea>
        <button id="word-process">Count</button>
        <div id="word-result" class="result"></div>
      </div>

      <div class="tool">
        <h2>🔤 Case Converter</h2>
        <textarea id="case-input" placeholder="Enter text..."></textarea>
        <div class="button-group">
          <button id="case-upper">UPPERCASE</button>
          <button id="case-lower">lowercase</button>
          <button id="case-title">Title Case</button>
          <button id="case-sentence">Sentence case</button>
        </div>
        <textarea id="case-output" placeholder="Output..." readonly></textarea>
      </div>
    </div>

    <!-- UTILITIES TAB -->
    <div class="tab-content" id="color">
      <div class="tool">
        <h2>🎨 Color Picker</h2>
        <input type="color" id="colorPicker" value="#FF6B6B">
        <p class="info">Color: <strong id="colorValue">#FF6B6B</strong></p>
        <div id="colorPreview" style="width:100%; height:200px; background:#FF6B6B; border-radius:8px; margin:10px 0;"></div>
        <button id="copy-color">Copy Color Code</button>
      </div>

      <div class="tool">
        <h2>📤 Image to PDF (Single)</h2>
        <input type="file" id="single-img2pdf" accept="image/*">
        <button id="single-img2pdf-process">Convert</button>
        <a id="single-img2pdf-download" download style="display:none"></a>
      </div>
    </div>
  </div>

      <div class="ads">
        <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="XXXXXXXXXX" data-ad-format="auto" data-full-width-responsive="true"></ins>
      </div>
    </div>
  </div>
</div>
`

// TAB SWITCHING
function resetToolCards(tabContent) {
  tabContent.querySelectorAll('.tool').forEach(tool => {
    tool.classList.remove('expanded', 'mini')
    const collapseBtn = tool.querySelector('.collapse-btn')
    if (collapseBtn) collapseBtn.remove()
  })
}

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'))
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'))
    e.target.classList.add('active')
    const targetTab = document.getElementById(e.target.dataset.tab)
    targetTab.classList.add('active')
    resetToolCards(targetTab)
  })
})

function expandToolCard(selectedTool) {
  const tabContent = selectedTool.closest('.tab-content')
  if (!tabContent) return
  tabContent.querySelectorAll('.tool').forEach(tool => {
    if (tool === selectedTool) {
      tool.classList.add('expanded')
      tool.classList.remove('mini')
      if (!tool.querySelector('.collapse-btn')) {
        const btn = document.createElement('button')
        btn.type = 'button'
        btn.className = 'collapse-btn'
        btn.textContent = '← Back to tools'
        btn.addEventListener('click', () => resetToolCards(tabContent))
        tool.insertBefore(btn, tool.firstChild)
      }
    } else {
      tool.classList.add('mini')
      tool.classList.remove('expanded')
    }
  })
}

function ensurePreviewStatus(processedSection) {
  let status = processedSection.querySelector('.preview-status')
  if (!status) {
    status = document.createElement('div')
    status.className = 'preview-status'
    processedSection.appendChild(status)
  }
  return status
}

function setPreviewStatus(tool, message, loading = false) {
  const processedSection = tool.querySelector('.preview-section:last-child')
  if (!processedSection) return
  processedSection.style.position = 'relative'
  const status = ensurePreviewStatus(processedSection)
  if (!message) {
    status.style.display = 'none'
    processedSection.classList.remove('loading')
    return
  }
  status.innerHTML = loading ? `<span class="preview-status-loading"><span class="spinner"></span>${message}</span>` : message
  status.style.display = 'flex'
  processedSection.classList.toggle('loading', loading)
}

function showOriginalPreview(tool, file) {
  const previewSections = tool.querySelector('.preview-sections')
  if (!previewSections) return
  const originalImg = previewSections.querySelector('img[id$="-original"]')
  if (originalImg) {
    originalImg.src = URL.createObjectURL(file)
  }
  previewSections.style.display = 'grid'
  const processedImg = previewSections.querySelector('img[id$="-processed"]')
  if (processedImg) {
    processedImg.src = ''
  }
  const downloadBtn = tool.querySelector('button[id$="-download-btn"]')
  if (downloadBtn) downloadBtn.style.display = 'none'
  setPreviewStatus(tool, 'Select process to show updated preview', false)
}

function attachToolFileHandlers() {
  document.querySelectorAll('.tool input[type="file"]').forEach(input => {
    input.addEventListener('change', (e) => {
      const file = e.target.files[0]
      const tool = e.target.closest('.tool')
      if (!file || !tool) return
      expandToolCard(tool)
      showOriginalPreview(tool, file)
    })
  })
}

attachToolFileHandlers()

// QUALITY SLIDER
document.getElementById('quality').addEventListener('input', (e) => {
  document.getElementById('qualityValue').textContent = e.target.value
})

// THRESHOLD SLIDER
document.getElementById('threshold').addEventListener('input', (e) => {
  document.getElementById('thresholdValue').textContent = e.target.value
})

// COLOR PICKER
document.getElementById('colorPicker').addEventListener('change', (e) => {
  const color = e.target.value.toUpperCase()
  document.getElementById('colorValue').textContent = color
  document.getElementById('colorPreview').style.background = color
})

document.getElementById('copy-color').addEventListener('click', () => {
  const color = document.getElementById('colorValue').textContent
  navigator.clipboard.writeText(color)
  alert('Color copied: ' + color)
})

// IMAGE TOOLS

// Background Remover
document.getElementById('bg-process').addEventListener('click', async () => {
  const file = document.getElementById('bg-input').files[0]
  if (!file) return alert('Please select an image')
  
  const tool = document.getElementById('bg-process').closest('.tool')
  setPreviewStatus(tool, 'Removing background...', true)
  
  const formData = new FormData()
  formData.append('image_file', file)
  
  try {
    const response = await fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      headers: { 'X-Api-Key': 'xWLXYnNN5isQgntmvCJN7P3o' },
      body: formData
    })
    if (!response.ok) throw new Error('API error - check your API key')
    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const bgPreview = document.getElementById('bg-preview')
    document.getElementById('bg-original').src = URL.createObjectURL(file)
    document.getElementById('bg-processed').src = url
    bgPreview.style.display = 'grid'

    const a = document.getElementById('bg-download')
    a.href = url
    a.download = 'removed-bg.png'
    const btn = document.getElementById('bg-download-btn')
    btn.style.display = 'block'
    btn.onclick = () => a.click()
  } catch (error) {
    alert('Error: ' + error.message)
  } finally {
    setPreviewStatus(document.getElementById('bg-process').closest('.tool'), '', false)
  }
})

// Image Compressor
document.getElementById('comp-process').addEventListener('click', async () => {
  const file = document.getElementById('comp-input').files[0]
  const quality = document.getElementById('quality').value / 100
  if (!file) return alert('Please select an image')
  
  const compTool = document.getElementById('comp-process').closest('.tool')
  setPreviewStatus(compTool, 'Compressing image...', true)
  document.getElementById('comp-original').src = URL.createObjectURL(file)
  
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    initialQuality: quality
  }
  
  try {
    const compressedFile = await imageCompression(file, options)
    const url = URL.createObjectURL(compressedFile)
    
    const compressedReader = new FileReader()
    compressedReader.onload = (e) => {
      document.getElementById('comp-processed').src = e.target.result
      document.getElementById('comp-preview').style.display = 'grid'
      const btn = document.getElementById('comp-download-btn')
      btn.style.display = 'block'
      setPreviewStatus(compTool, '', false)
    }
    compressedReader.readAsDataURL(compressedFile)
    
    const a = document.getElementById('comp-download')
    a.href = url
    a.download = 'compressed-' + file.name
    
    document.getElementById('comp-download-btn').onclick = () => a.click()
  } catch (error) {
    setPreviewStatus(compTool, '', false)
    alert('Error: ' + error.message)
  }
})

// Image Resizer
document.getElementById('resize-process').addEventListener('click', () => {
  const file = document.getElementById('resize-input').files[0]
  const width = parseInt(document.getElementById('width').value)
  const height = parseInt(document.getElementById('height').value)
  if (!file || !width || !height) return alert('Please select an image and enter dimensions')
  
  const resizeTool = document.getElementById('resize-process').closest('.tool')
  setPreviewStatus(resizeTool, 'Resizing image...', true)
  
  // Show original image
  const reader = new FileReader()
  reader.onload = (e) => {
    document.getElementById('resize-original').src = e.target.result
  }
  reader.readAsDataURL(file)
  
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const img = new Image()
  img.onload = () => {
    canvas.width = width
    canvas.height = height
    ctx.drawImage(img, 0, 0, width, height)
    
    // Show resized image in preview
    document.getElementById('resize-processed').src = canvas.toDataURL()
    document.getElementById('resize-preview').style.display = 'grid'
    setPreviewStatus(resizeTool, '', false)
    
    canvas.toBlob(blob => {
      const url = URL.createObjectURL(blob)
      const a = document.getElementById('resize-download')
      a.href = url
      a.download = 'resized-' + file.name
      const btn = document.getElementById('resize-download-btn')
      btn.style.display = 'block'
      btn.onclick = () => a.click()
    })
  }
  img.src = URL.createObjectURL(file)
})

// Format Converter
document.getElementById('convert-process').addEventListener('click', () => {
  const file = document.getElementById('convert-input').files[0]
  const format = document.getElementById('format').value
  if (!file) return alert('Please select an image')
  
  // Show original image
  const reader = new FileReader()
  reader.onload = (e) => {
    document.getElementById('convert-original').src = e.target.result
  }
  reader.readAsDataURL(file)
  
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  const convertTool = document.getElementById('convert-process').closest('.tool')
  setPreviewStatus(convertTool, 'Converting image...', true)
  const img = new Image()
  img.onload = () => {
    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0)
    
    // Show converted image in preview
    canvas.toBlob(blob => {
      const convertedUrl = URL.createObjectURL(blob)
      document.getElementById('convert-processed').src = convertedUrl
      document.getElementById('convert-preview').style.display = 'grid'
      setPreviewStatus(convertTool, '', false)
      
      const a = document.getElementById('convert-download')
      a.href = convertedUrl
      a.download = 'converted.' + format
      const btn = document.getElementById('convert-download-btn')
      btn.style.display = 'block'
      btn.onclick = () => a.click()
    }, `image/${format}`)
  }
  img.src = URL.createObjectURL(file)
})

// Circular Image Cutter with Zoom & Pan
let circleImage = null
let zoomLevel = 1
let panX = 0
let panY = 0
let isDragging = false
let dragStartX = 0
let dragStartY = 0

const canvas = document.getElementById('circlePreview')
const ctx = canvas.getContext('2d')
const container = document.getElementById('circleContainer')

document.getElementById('circle-input').addEventListener('change', (e) => {
  const file = e.target.files[0]
  const img = new Image()
  img.onload = () => {
    circleImage = img
    // Calculate initial zoom to fit image in circle
    const size = 300
    const maxDim = Math.max(img.width, img.height)
    zoomLevel = (size * 0.8) / maxDim // Start zoomed out to fit image
    panX = 0
    panY = 0
    drawCirclePreview()
  }
  img.src = URL.createObjectURL(file)
})

function drawCirclePreview() {
  if (!circleImage) return
  
  const size = 300
  ctx.clearRect(0, 0, size, size)
  
  // Draw circle background
  ctx.fillStyle = '#f8fafc'
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
  ctx.fill()
  
  // Create circular clipping path
  ctx.beginPath()
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2)
  ctx.clip()
  
  // Draw image with zoom and pan
  const imgWidth = circleImage.width * zoomLevel
  const imgHeight = circleImage.height * zoomLevel
  const x = (size - imgWidth) / 2 + panX
  const y = (size - imgHeight) / 2 + panY
  
  ctx.drawImage(circleImage, x, y, imgWidth, imgHeight)
}

// Mouse wheel zoom
canvas.addEventListener('wheel', (e) => {
  e.preventDefault()
  const zoomSpeed = 0.2 // Increased from 0.1 for more zoom range
  const oldZoom = zoomLevel
  
  if (e.deltaY < 0) {
    zoomLevel += zoomSpeed
  } else {
    zoomLevel = Math.max(0.2, zoomLevel - zoomSpeed) // Allow zoom out to 0.2 instead of 0.5
  }
  
  // Adjust pan to zoom towards cursor
  const rect = canvas.getBoundingClientRect()
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  
  panX += (mouseX - centerX) * (oldZoom - zoomLevel) / oldZoom
  panY += (mouseY - centerY) * (oldZoom - zoomLevel) / oldZoom
  
  drawCirclePreview()
})

// Mouse drag to pan
canvas.addEventListener('mousedown', (e) => {
  isDragging = true
  dragStartX = e.clientX
  dragStartY = e.clientY
})

canvas.addEventListener('mousemove', (e) => {
  if (!isDragging) return
  
  const deltaX = e.clientX - dragStartX
  const deltaY = e.clientY - dragStartY
  
  panX += deltaX
  panY += deltaY
  
  dragStartX = e.clientX
  dragStartY = e.clientY
  
  drawCirclePreview()
})

canvas.addEventListener('mouseup', () => {
  isDragging = false
})

canvas.addEventListener('mouseleave', () => {
  isDragging = false
})

document.getElementById('circle-process').addEventListener('click', () => {
  const file = document.getElementById('circle-input').files[0]
  if (!file) return alert('Please select an image')
  
  const tool = document.getElementById('circle-process').closest('.tool')
  setPreviewStatus(tool, 'Creating circular crop...', true)

  // Show original image
  const reader = new FileReader()
  reader.onload = (e) => {
    document.getElementById('circle-original').src = e.target.result
  }
  reader.readAsDataURL(file)
  
  const size = 300
  const outputCanvas = document.createElement('canvas')
  const outputCtx = outputCanvas.getContext('2d', { willReadFrequently: true })
  
  outputCanvas.width = size
  outputCanvas.height = size
  
  // Make background transparent
  outputCtx.clearRect(0, 0, size, size)
  
  // Draw image first
  const imgWidth = circleImage.width * zoomLevel
  const imgHeight = circleImage.height * zoomLevel
  const x = (size - imgWidth) / 2 + panX
  const y = (size - imgHeight) / 2 + panY
  
  outputCtx.drawImage(circleImage, x, y, imgWidth, imgHeight)
  
  // Get image data
  const imageData = outputCtx.getImageData(0, 0, size, size)
  const data = imageData.data
  
  // Create circular mask - make everything outside circle transparent
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const dx = i - size / 2
      const dy = j - size / 2
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      // If outside circle, make transparent
      if (distance > size / 2) {
        const pixelIndex = (j * size + i) * 4
        data[pixelIndex + 3] = 0 // Set alpha to 0
      }
    }
  }
  
  outputCtx.putImageData(imageData, 0, 0)
  
  // Show circular image in preview
  document.getElementById('circle-processed').src = outputCanvas.toDataURL()
  document.getElementById('circle-preview').style.display = 'grid'
  setPreviewStatus(document.getElementById('circle-process').closest('.tool'), '', false)
  
  outputCanvas.toBlob(blob => {
    const url = URL.createObjectURL(blob)
    const a = document.getElementById('circle-download')
    a.href = url
    a.download = 'circular-' + file.name
    const btn = document.getElementById('circle-download-btn')
    btn.style.display = 'block'
    btn.onclick = () => a.click()
  }, 'image/png')
})

// Remove White Background
document.getElementById('white-bg-process').addEventListener('click', () => {
  const file = document.getElementById('white-bg-input').files[0]
  const threshold = parseInt(document.getElementById('threshold').value)
  if (!file) return alert('Please select an image')
  
  const tool = document.getElementById('white-bg-process').closest('.tool')
  setPreviewStatus(tool, 'Removing white background...', true)

  // Show original image
  const reader = new FileReader()
  reader.onload = (e) => {
    document.getElementById('white-bg-original').src = e.target.result
  }
  reader.readAsDataURL(file)
  
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d', { willReadFrequently: true })
  const img = new Image()
  img.onload = () => {
    canvas.width = img.width
    canvas.height = img.height
    ctx.drawImage(img, 0, 0)
    
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data
    
    // Make bright pixels transparent
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      const brightness = (r + g + b) / 3
      
      if (brightness > threshold) {
        data[i + 3] = 0 // Make transparent
      }
    }
    
    ctx.putImageData(imageData, 0, 0)
    
    // Show processed image in preview
    document.getElementById('white-bg-processed').src = canvas.toDataURL()
    document.getElementById('white-bg-preview').style.display = 'grid'
    setPreviewStatus(document.getElementById('white-bg-process').closest('.tool'), '', false)
    
    canvas.toBlob(blob => {
      const url = URL.createObjectURL(blob)
      const a = document.getElementById('white-bg-download')
      a.href = url
      a.download = 'no-white-bg.png'
      const btn = document.getElementById('white-bg-download-btn')
      btn.style.display = 'block'
      btn.onclick = () => a.click()
    }, 'image/png')
  }
  img.src = URL.createObjectURL(file)
})

// PDF TOOLS

// Image to PDF
document.getElementById('img2pdf-process').addEventListener('click', async () => {
  const files = document.getElementById('img2pdf-input').files
  if (files.length === 0) return alert('Please select images')
  
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  })
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const reader = new FileReader()
    
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        if (i > 0) pdf.addPage()
        const width = pdf.internal.pageSize.getWidth()
        const height = (img.height / img.width) * width
        pdf.addImage(e.target.result, 'JPEG', 0, 0, width, height)
        
        if (i === files.length - 1) {
          pdf.save('images-to-pdf.pdf')
        }
      }
      img.src = e.target.result
    }
    reader.readAsDataURL(file)
  }
})

// PDF Merger
document.getElementById('pdf-merge-process').addEventListener('click', async () => {
  const files = document.getElementById('pdf-merge-input').files
  if (files.length < 2) return alert('Please select at least 2 PDF files')
  
  try {
    const mergedPdf = await PDFDocument.create()
    let filesProcessed = 0
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const reader = new FileReader()
      
      reader.onload = async (e) => {
        const pdf = await PDFDocument.load(e.target.result)
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices())
        copiedPages.forEach(page => mergedPdf.addPage(page))
        
        filesProcessed++
        if (filesProcessed === files.length) {
          const pdfBytes = await mergedPdf.save()
          const blob = new Blob([pdfBytes], { type: 'application/pdf' })
          const url = URL.createObjectURL(blob)
          const a = document.getElementById('pdf-merge-download')
          a.href = url
          a.download = 'merged.pdf'
          a.click()
        }
      }
      reader.readAsArrayBuffer(file)
    }
  } catch (error) {
    alert('Error: ' + error.message)
  }
})

// Single Image to PDF
document.getElementById('single-img2pdf-process').addEventListener('click', () => {
  const file = document.getElementById('single-img2pdf').files[0]
  if (!file) return alert('Please select an image')
  
  const reader = new FileReader()
  reader.onload = (e) => {
    const img = new Image()
    img.onload = () => {
      const pdf = new jsPDF({
        orientation: img.width > img.height ? 'landscape' : 'portrait',
        unit: 'mm',
        format: 'a4'
      })
      const width = pdf.internal.pageSize.getWidth()
      const height = (img.height / img.width) * width
      pdf.addImage(e.target.result, 'JPEG', 0, 0, width, height)
      pdf.save('image-to-pdf.pdf')
    }
    img.src = e.target.result
  }
  reader.readAsDataURL(file)
})

// TEXT TOOLS

// Word Counter
document.getElementById('word-process').addEventListener('click', () => {
  const text = document.getElementById('word-input').value
  if (!text) return alert('Please enter text')
  
  const words = text.trim().split(/\s+/).length
  const chars = text.length
  const charsNoSpace = text.replace(/\s/g, '').length
  const lines = text.split('\n').length
  const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length
  const paragraphs = text.split('\n\n').filter(p => p.trim()).length
  
  document.getElementById('word-result').innerHTML = `
    <p><strong>Words:</strong> ${words}</p>
    <p><strong>Characters:</strong> ${chars}</p>
    <p><strong>Characters (no spaces):</strong> ${charsNoSpace}</p>
    <p><strong>Lines:</strong> ${lines}</p>
    <p><strong>Sentences:</strong> ${sentences}</p>
    <p><strong>Paragraphs:</strong> ${paragraphs}</p>
    <p><strong>Avg chars/word:</strong> ${(charsNoSpace / words).toFixed(2)}</p>
  `
})

// Case Converter
document.getElementById('case-upper').addEventListener('click', () => {
  const input = document.getElementById('case-input').value
  document.getElementById('case-output').value = input.toUpperCase()
})

document.getElementById('case-lower').addEventListener('click', () => {
  const input = document.getElementById('case-input').value
  document.getElementById('case-output').value = input.toLowerCase()
})

document.getElementById('case-title').addEventListener('click', () => {
  const input = document.getElementById('case-input').value
  document.getElementById('case-output').value = input.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ')
})

document.getElementById('case-sentence').addEventListener('click', () => {
  const input = document.getElementById('case-input').value
  const sentences = input.split(/([.!?])/g)
  document.getElementById('case-output').value = sentences.map((s, i) => {
    if (i % 2 === 0 && s.trim()) {
      return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
    }
    return s
  }).join('')
})
