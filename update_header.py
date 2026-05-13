import glob
import re

html_files = glob.glob('**/*.html', recursive=True)

desktop_placement = """                    <!-- Placement -->
                    <a href="https://iipc.snsgroups.com/" target="_blank" class="text-gray-700 hover:text-primary-500 font-medium">Placement</a>

                    <!-- Meet Us Dropdown -->"""

mobile_placement = """                <!-- Placement -->
                <a href="https://iipc.snsgroups.com/" target="_blank" class="block text-gray-700 hover:text-primary-500 font-medium py-2">Placement</a>

                <!-- Meet Us -->"""

count = 0
for filepath in html_files:
    if 'node_modules' in filepath:
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if '>Placement</a>' in content:
        continue # Already added
        
    new_content = content
    
    # Desktop
    new_content = new_content.replace('<!-- Meet Us Dropdown -->', desktop_placement, 1)
    
    # Mobile
    new_content = new_content.replace('<!-- Meet Us -->', mobile_placement, 1)
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1
        
print(f"Updated {count} files with Placement link.")
