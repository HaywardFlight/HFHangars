import glob
import re

# Updated script to remove Wix header more robustly
script = r'''#!/usr/bin/env python3
import glob, re

# Find all HTML files in current directory
files = glob.glob("*.html")

# Pattern 1: Remove div with id="WIX_ADS"
pattern1 = re.compile(r'<div[^>]*id=["\']WIX_ADS["\'][\s\S]*?</div>', re.IGNORECASE)

# Pattern 2: Remove any anchor linking to wix.com with its inner content
pattern2 = re.compile(r'<a[^>]+href=["\']https?://(?:www\.)?wix\.com[^"\']*["\'][\s\S]*?</a>', re.IGNORECASE)

for path in files:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    # Remove Wix header div
    content = pattern1.sub('', content)
    # Remove Wix promotional links
    content = pattern2.sub('', content)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

print(f"Processed {len(files)} HTML files. Wix header elements removed.")'''

# Write script to file
script_path = "/mnt/data/remove_wix_header_v2.py"
with open(script_path, 'w', encoding='utf-8') as f:
    f.write(script)

script_path
