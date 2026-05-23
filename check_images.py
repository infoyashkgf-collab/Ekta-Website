import re
import os

# Read HTML
with open('D:\\Projects\\Ekta Website\\index.html', 'r') as f:
    html = f.read()

# Find all image references
refs = re.findall(r'assets/images/([^"\'\s]+)', html)
refs = sorted(set(refs))

# Get source images
source_files = os.listdir('D:\\Projects\\images')
source_images = []
for f in source_files:
    if f.endswith('.JPG.jpeg'):
        source_images.append(f.replace('.JPG.jpeg', '.jpg'))
    else:
        source_images.append(f)
source_images = sorted(set(source_images))

# Get asset images
asset_files = os.listdir('D:\\Projects\\Ekta Website\\assets\\images')
asset_images = sorted(set(asset_files))

print("=== REFERENCED IN HTML ===")
for r in refs:
    print(f"  {r}")

print("\n=== IN SOURCE FOLDER ===")
for s in source_images:
    print(f"  {s}")

print("\n=== MISSING (in HTML but NOT in source) ===")
missing = []
for r in refs:
    if r not in source_images and r != 'ekta-sethi.jpg':
        missing.append(r)
        print(f"  MISSING: {r}")

if not missing:
    print("  None - all referenced images exist in source!")

print("\n=== EXTRA IN ASSETS (not in source) ===")
for a in asset_images:
    if a not in source_images and a != 'ekta-sethi.jpg':
        print(f"  EXTRA: {a}")
