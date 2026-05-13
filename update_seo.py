import os
import glob
import re

html_files = glob.glob('**/*.html', recursive=True)

seo_head_tags = """    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-N78NW5GNL1"></script>
    <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-N78NW5GNL1'); </script>
    
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WS58NMD');</script>
    <!-- End Google Tag Manager -->

    <!-- Meta Pixel Code -->
    <script>
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];
    t=b.createElement(e);t.async=!0;
    t.src=v;
    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}
    (window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '153788363108861');
    fbq('track', 'PageView');
    </script>
    <noscript>
    <img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=153788363108861&ev=PageView&noscript=1"/>
    </noscript>
    <!-- End Meta Pixel Code -->

    <meta name="keywords" content="pharmacy college in coimbatore, b pharmacy college in coimbatore, best pharmacy college in tamil nadu, pharm d course, bachelor of pharmacy, b pharm admission 2026, pharmacy courses after 12th, pharmacy colleges near me, top pharmacy colleges in coimbatore, pharmacy degree course, d pharmacy course, pharmacy colleges in tamil nadu, pharmacy course fees, pharmacy course duration, pharmacy admission 2026, pharm d colleges in coimbatore, m pharm colleges in coimbatore, pharmacy colleges with placements, pharmacy colleges with hostel facilities, pharmacy training institute, pharmacy career opportunities, pharmaceutical sciences college, pci approved pharmacy college, medical courses after 12th, SNS College of Pharmacy and Health Sciences">
    <link rel="canonical" href="https://snscphs.org/">
"""

seo_body_tags = """    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WS58NMD"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
"""

count = 0
for filepath in html_files:
    if 'node_modules' in filepath:
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
        
    if 'GTM-WS58NMD' in content:
        continue # Already added
        
    new_content = content
    # Replace <head> with <head> + tags
    if '<head>' in new_content:
        new_content = re.sub(
            r'<head>',
            r'<head>\n' + seo_head_tags,
            new_content,
            count=1
        )
    elif '<head ' in new_content:
        new_content = re.sub(
            r'(<head[^>]*>)',
            r'\1\n' + seo_head_tags,
            new_content,
            count=1
        )
    
    # Replace <body class="..."> with <body class="..."> + tags
    if '<body' in new_content:
        new_content = re.sub(
            r'(<body[^>]*>)',
            r'\1\n' + seo_body_tags,
            new_content,
            count=1
        )
    
    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        count += 1
        
print(f"Updated {count} files with SEO tags.")
