# PowerShell script to convert SVG to ICO
# You'll need to install ImageMagick first: https://imagemagick.org/script/download.php#windows

# Convert the SVG to ICO format with multiple sizes
magick convert favicon.svg -define icon:auto-resize=16,32,48,64,128,256 favicon.ico

Write-Host "Favicon ICO file generated successfully!"
Write-Host "The favicon.ico file has been created with multiple sizes (16x16, 32x32, 48x48, 64x64, 128x128, 256x256)"
