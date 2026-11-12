import os

os.makedirs("public/assets", exist_ok=True)

# 1. temple-garden.svg (Photo 3: Lush Temple pathway, stone walkway, shrubs, trees, flowering beds, shikhara in distance)
garden_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <linearGradient id="sky-gardens" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#7DD3FC" />
      <stop offset="60%" stop-color="#BAE6FD" />
      <stop offset="100%" stop-color="#FEF08A" />
    </linearGradient>
    <linearGradient id="sandstone-pillar" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7C2D12" />
      <stop offset="50%" stop-color="#C2410C" />
      <stop offset="100%" stop-color="#9A3412" />
    </linearGradient>
    <linearGradient id="pathway-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#D6C7B2" />
      <stop offset="100%" stop-color="#FAF0E4" />
    </linearGradient>
  </defs>

  <!-- Sky -->
  <rect width="1200" height="450" fill="url(#sky-gardens)" />
  <circle cx="950" cy="140" r="55" fill="#FEF08A" opacity="0.8" />

  <!-- Distant Temple Shikhara Elevation -->
  <g transform="translate(600, 320)" opacity="0.95">
    <!-- Main central Shikhara -->
    <path d="M -120,50 L -90,-160 C -60,-220 -20,-260 0,-280 C 20,-260 60,-220 90,-160 L 120,50 Z" fill="#9A3412" stroke="#7C2D12" stroke-width="2" />
    <!-- Horizontal Urushringa Ribs -->
    <line x1="-80" y1="-140" x2="80" y2="-140" stroke="#7C2D12" stroke-width="3" />
    <line x1="-70" y1="-100" x2="70" y2="-100" stroke="#7C2D12" stroke-width="3" />
    <line x1="-60" y1="-60" x2="60" y2="-60" stroke="#7C2D12" stroke-width="3" />
    <line x1="-85" y1="-20" x2="85" y2="-20" stroke="#7C2D12" stroke-width="3" />
    <line x1="-100" y1="20" x2="100" y2="20" stroke="#7C2D12" stroke-width="3" />
    
    <!-- Kalash & Flag -->
    <circle cx="0" cy="-290" r="14" fill="#EAB308" />
    <circle cx="0" cy="-305" r="8" fill="#F59E0B" />
    <line x1="0" y1="-305" x2="0" y2="-345" stroke="#78350F" stroke-width="2.5" />
    <polygon points="0,-345 35,-332 0,-320" fill="#EA580C" />
  </g>

  <!-- Side pavilions & chhatris in midground -->
  <g fill="#9A3412" stroke="#7C2D12" stroke-width="1.5">
    <rect x="220" y="310" width="160" height="90" rx="3" />
    <path d="M 200,310 Q 300,240 400,310 Z" fill="#C2410C" />
    <rect x="820" y="310" width="160" height="90" rx="3" />
    <path d="M 800,310 Q 900,240 1000,310 Z" fill="#C2410C" />
  </g>

  <!-- Ground Landscape & Lawns -->
  <rect x="0" y="400" width="1200" height="400" fill="#2E7D32" />
  
  <!-- Central Sweeping Paved Sandstone Walkway -->
  <polygon points="520,400 680,400 950,800 250,800" fill="url(#pathway-grad)" stroke="#BFA88F" stroke-width="2" />
  
  <!-- Walkway flagstone paving lines -->
  <g stroke="#C2BAAA" stroke-width="1.5">
    <line x1="450" y1="500" x2="750" y2="500" />
    <line x1="390" y1="580" x2="810" y2="580" />
    <line x1="330" y1="670" x2="870" y2="670" />
    <line x1="280" y1="760" x2="920" y2="760" />
    <line x1="600" y1="400" x2="600" y2="800" stroke-dasharray="6,6" />
  </g>

  <!-- Flower beds & shrub borders along pathway -->
  <!-- Left Garden Beds -->
  <g>
    <!-- Mango and Neem Trees -->
    <circle cx="120" cy="380" r="100" fill="#1B5E20" opacity="0.9" />
    <circle cx="190" cy="350" r="85" fill="#2E7D32" opacity="0.9" />
    <circle cx="90" cy="420" r="70" fill="#388E3C" />
    <!-- Gulmohar tree with red-orange blooms -->
    <circle cx="280" cy="420" r="65" fill="#1B5E20" />
    <circle cx="260" cy="400" r="15" fill="#E11D48" />
    <circle cx="290" cy="410" r="18" fill="#F97316" />
    <circle cx="310" cy="430" r="14" fill="#E11D48" />
    <!-- Rose bushes and decorative hedges -->
    <path d="M 220,520 Q 300,500 370,550 Q 280,600 220,520 Z" fill="#15803D" />
    <circle cx="280" cy="530" r="9" fill="#E11D48" />
    <circle cx="320" cy="540" r="8" fill="#F43F5E" />
    <circle cx="250" cy="550" r="7" fill="#E11D48" />
    
    <!-- Stone garden lamp pillar (Deepstambha) -->
    <rect x="360" y="580" width="16" height="50" fill="#9A3412" />
    <polygon points="355,580 373,560 391,580" fill="#C2410C" />
    <circle cx="368" cy="570" r="5" fill="#FEF08A" />
  </g>

  <!-- Right Garden Beds -->
  <g>
    <circle cx="1080" cy="380" r="100" fill="#1B5E20" opacity="0.9" />
    <circle cx="1010" cy="350" r="85" fill="#2E7D32" opacity="0.9" />
    <circle cx="1110" cy="420" r="70" fill="#388E3C" />
    <!-- Flowering trees -->
    <circle cx="920" cy="420" r="65" fill="#1B5E20" />
    <circle cx="940" cy="400" r="15" fill="#F97316" />
    <circle cx="910" cy="410" r="18" fill="#E11D48" />
    
    <!-- Right stone lamp pillar -->
    <rect x="820" y="580" width="16" height="50" fill="#9A3412" />
    <polygon points="815,580 833,560 851,580" fill="#C2410C" />
    <circle cx="828" cy="570" r="5" fill="#FEF08A" />
  </g>

  <!-- Devotees walking on garden pathway -->
  <g transform="translate(560, 560)">
    <circle cx="0" cy="-22" r="6" fill="#FDBA74" />
    <path d="M -6,-16 L 6,-16 L 8,10 L -8,10 Z" fill="#C2410C" />
    <line x1="-3" y1="10" x2="-3" y2="28" stroke="#F1F5F9" stroke-width="2.5" />
    <line x1="3" y1="10" x2="3" y2="28" stroke="#F1F5F9" stroke-width="2.5" />
  </g>
  <g transform="translate(630, 580)">
    <circle cx="0" cy="-24" r="6" fill="#FDBA74" />
    <path d="M -7,-18 L 7,-18 L 9,12 L -9,12 Z" fill="#D97706" />
    <line x1="-4" y1="12" x2="-4" y2="32" stroke="#FAF7F2" stroke-width="2.5" />
    <line x1="4" y1="12" x2="4" y2="32" stroke="#FAF7F2" stroke-width="2.5" />
  </g>

  <!-- Foreground Corner Planters -->
  <rect x="60" y="730" width="140" height="70" rx="6" fill="#7C2D12" stroke="#5B2A1B" stroke-width="2" />
  <circle cx="100" cy="710" r="28" fill="#15803D" />
  <circle cx="150" cy="710" r="30" fill="#16A34A" />
  <circle cx="120" cy="690" r="8" fill="#E11D48" />

  <rect x="1000" y="730" width="140" height="70" rx="6" fill="#7C2D12" stroke="#5B2A1B" stroke-width="2" />
  <circle cx="1040" cy="710" r="28" fill="#15803D" />
  <circle cx="1090" cy="710" r="30" fill="#16A34A" />
  <circle cx="1070" cy="690" r="8" fill="#E11D48" />
</svg>"""

with open("public/assets/temple-garden.svg", "w", encoding="utf-8") as f:
  f.write(garden_svg)
print("Created temple-garden.svg")

# 2. temple-carvings.svg (Photo 4: Intricate Bansi Pahadpur Sandstone Jali, Columns, Floral Rosettes, Carved Cornice)
carvings_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 800" width="100%" height="100%">
  <defs>
    <linearGradient id="stone-bg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#C2410C" />
      <stop offset="50%" stop-color="#9A3412" />
      <stop offset="100%" stop-color="#7C2D12" />
    </linearGradient>
    <pattern id="jali-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 20,0 L 40,20 L 20,40 L 0,20 Z" fill="none" stroke="#431407" stroke-width="4" />
      <circle cx="20" cy="20" r="7" fill="#FEF08A" opacity="0.6" />
      <circle cx="0" cy="0" r="5" fill="#431407" />
      <circle cx="40" cy="0" r="5" fill="#431407" />
      <circle cx="0" cy="40" r="5" fill="#431407" />
      <circle cx="40" cy="40" r="5" fill="#431407" />
    </pattern>
    <linearGradient id="gold-metal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FEF08A" />
      <stop offset="50%" stop-color="#EAB308" />
      <stop offset="100%" stop-color="#CA8A04" />
    </linearGradient>
  </defs>

  <!-- Background Sandstone Wall -->
  <rect width="1000" height="800" fill="url(#stone-bg)" />

  <!-- Upper Carved Chhajja / Eaves / Cornice -->
  <g fill="#7C2D12" stroke="#431407" stroke-width="2.5">
    <!-- Top molding -->
    <rect x="0" y="0" width="1000" height="45" fill="#431407" />
    <!-- Decorative brackets / Todis -->
    <path d="M 0,45 L 1000,45 L 980,105 L 20,105 Z" fill="#9A3412" />
    <!-- Row of pendant floral drops -->
"""
for i in range(25):
  x = 25 + i * 40
  carvings_svg += f"""    <polygon points="{x},105 {x+12},125 {x+24},105" fill="#C2410C" />
"""

carvings_svg += """  </g>

  <!-- Main Arch & Window Frame (Cusped Torana Arch) -->
  <g transform="translate(500, 440)">
    <!-- Outer Arch Surround -->
    <path d="M -360,280 L -360,-60 Q -360,-240 0,-240 Q 360,-240 360,-60 L 360,280 Z" fill="#7C2D12" stroke="#431407" stroke-width="6" />

    <!-- Cusped Multi-foil Arch Inner Moulding -->
    <path d="M -300,280 L -300,-40 C -300,-120 -200,-200 0,-200 C 200,-200 300,-120 300,-40 L 300,280 Z" fill="#9A3412" stroke="#431407" stroke-width="4" />

    <!-- Window Opening with Perforated Stone Jaali -->
    <path d="M -240,260 L -240,-20 C -240,-90 -160,-150 0,-150 C 160,-150 240,-90 240,-20 L 240,260 Z" fill="url(#jali-pattern)" stroke="#431407" stroke-width="6" />

    <!-- Central Decorative Rosette Medallion -->
    <circle cx="0" cy="-60" r="48" fill="url(#gold-metal)" stroke="#78350F" stroke-width="4" />
    <circle cx="0" cy="-60" r="36" fill="#9A3412" />
    <circle cx="0" cy="-60" r="18" fill="url(#gold-metal)" />
  </g>

  <!-- Flanking Carved Sandstone Pillars (Left & Right) -->
  <g fill="#7C2D12" stroke="#431407" stroke-width="3">
    <!-- Left Pillar -->
    <rect x="50" y="105" width="80" height="695" fill="#9A3412" />
    <rect x="35" y="105" width="110" height="35" fill="#7C2D12" />
    <rect x="35" y="740" width="110" height="60" fill="#7C2D12" />
    <!-- Pillar fluting lines -->
    <line x1="70" y1="140" x2="70" y2="740" stroke="#7C2D12" stroke-width="3" />
    <line x1="90" y1="140" x2="90" y2="740" stroke="#C2410C" stroke-width="3" />
    <line x1="110" y1="140" x2="110" y2="740" stroke="#7C2D12" stroke-width="3" />

    <!-- Right Pillar -->
    <rect x="870" y="105" width="80" height="695" fill="#9A3412" />
    <rect x="855" y="105" width="110" height="35" fill="#7C2D12" />
    <rect x="855" y="740" width="110" height="60" fill="#7C2D12" />
    <line x1="890" y1="140" x2="890" y2="740" stroke="#7C2D12" stroke-width="3" />
    <line x1="910" y1="140" x2="910" y2="740" stroke="#C2410C" stroke-width="3" />
    <line x1="930" y1="140" x2="930" y2="740" stroke="#7C2D12" stroke-width="3" />
  </g>
</svg>"""

with open("public/assets/temple-carvings.svg", "w", encoding="utf-8") as f:
  f.write(carvings_svg)
print("Created temple-carvings.svg")

# 3. temple-plaza.svg (Photo 5: Octagonal star fountain plaza, stone benches, parikrama walkway)
plaza_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="100%" height="100%">
  <defs>
    <linearGradient id="sky-plaza" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="70%" stop-color="#E0F2FE" />
      <stop offset="100%" stop-color="#FEF08A" />
    </linearGradient>
    <linearGradient id="paving-radial" x1="50%" y1="50%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FAF0E4" />
      <stop offset="60%" stop-color="#E7D7C4" />
      <stop offset="100%" stop-color="#D6C7B2" />
    </linearGradient>
  </defs>

  <!-- Sky -->
  <rect width="1200" height="350" fill="url(#sky-plaza)" />

  <!-- Temple arcade backdrop in distance -->
  <g fill="#9A3412" stroke="#7C2D12" stroke-width="2">
    <rect x="100" y="200" width="1000" height="150" />
    <!-- Colonnade arches -->
"""
for i in range(9):
  x = 140 + i * 110
  plaza_svg += f"""    <path d="M {x},350 L {x},250 Q {x+45},210 {x+90},250 L {x+90},350 Z" fill="#431407" />
"""

plaza_svg += """  </g>

  <!-- Shikhara rising above arcade in background -->
  <g transform="translate(600, 180)">
    <path d="M -90,20 L -60,-120 Q 0,-210 60,-120 L 90,20 Z" fill="#C2410C" stroke="#7C2D12" stroke-width="3" />
    <circle cx="0" cy="-215" r="10" fill="#FEF08A" />
    <line x1="0" y1="-215" x2="0" y2="-250" stroke="#78350F" stroke-width="2.5" />
    <polygon points="0,-250 28,-240 0,-230" fill="#EA580C" />
  </g>

  <!-- Foreground Paved Plaza -->
  <rect x="0" y="350" width="1200" height="450" fill="url(#paving-radial)" />

  <!-- Paving grid radiating outward -->
  <g stroke="#C2BAAA" stroke-width="1.5">
    <circle cx="600" cy="580" r="160" fill="none" stroke-width="2" />
    <circle cx="600" cy="580" r="260" fill="none" stroke-width="2" />
    <circle cx="600" cy="580" r="380" fill="none" stroke-width="2" />
    <line x1="600" y1="350" x2="600" y2="800" />
    <line x1="200" y1="350" x2="50" y2="800" />
    <line x1="1000" y1="350" x2="1150" y2="800" />
  </g>

  <!-- Large Central Star Fountain (Nakshatra Kund) -->
  <g transform="translate(600, 580)">
    <!-- 8-Pointed Star Sandstone Base Rim -->
    <path d="M 0,-110 L 40,-40 L 110,0 L 40,40 L 0,110 L -40,40 L -110,0 L -40,-40 Z" fill="#9A3412" stroke="#5E1D0B" stroke-width="6" />
    <!-- Water Pool -->
    <circle cx="0" cy="0" r="70" fill="#38BDF8" stroke="#0284C7" stroke-width="3" />
    <circle cx="0" cy="0" r="45" fill="#7DD3FC" />
    <!-- Central Brass Jet -->
    <circle cx="0" cy="0" r="14" fill="#F59E0B" />
    <!-- Cascading Water Streams -->
    <line x1="0" y1="-10" x2="0" y2="-65" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" opacity="0.9" />
    <line x1="-15" y1="-8" x2="-35" y2="-45" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" opacity="0.8" />
    <line x1="15" y1="-8" x2="35" y2="-45" stroke="#FFFFFF" stroke-width="3.5" stroke-linecap="round" opacity="0.8" />
  </g>

  <!-- Carved Stone Benches for Devotees Resting -->
  <g transform="translate(260, 520)">
    <rect x="-60" y="-8" width="120" height="16" rx="2" fill="#7C2D12" stroke="#431407" stroke-width="2" />
    <rect x="-50" y="8" width="18" height="28" fill="#9A3412" />
    <rect x="32" y="8" width="18" height="28" fill="#9A3412" />
  </g>
  <g transform="translate(940, 520)">
    <rect x="-60" y="-8" width="120" height="16" rx="2" fill="#7C2D12" stroke="#431407" stroke-width="2" />
    <rect x="-50" y="8" width="18" height="28" fill="#9A3412" />
    <rect x="32" y="8" width="18" height="28" fill="#9A3412" />
  </g>
</svg>"""

with open("public/assets/temple-plaza.svg", "w", encoding="utf-8") as f:
  f.write(plaza_svg)
print("Created temple-plaza.svg")

# 4. temple-unbranded.svg (New Temple without Name and Logo.png: pristine sandstone temple before mounting crest/signage)
unbranded_svg = open("public/assets/temple-front.svg", "r", encoding="utf-8").read()
# Remove the mounted logo and signage bar
unbranded_svg = unbranded_svg.replace('<!-- Golden SSD Emblem mounted prominently on Shikhara (LOCKED ASSET FEATURE) -->', '<!-- Emblem omitted for unbranded version -->')
import re
# Remove the emblem block and signage bar block
unbranded_svg = re.sub(r'<g transform="translate\(0, 200\) scale\(0\.48\)\>.*?</g>\s*</g>', '</g>', unbranded_svg, flags=re.DOTALL)
unbranded_svg = re.sub(r'<!-- Golden Temple Signage Bar.*?<!-- Paved Forecourt', '<!-- Paved Forecourt', unbranded_svg, flags=re.DOTALL)

with open("public/assets/temple-unbranded.svg", "w", encoding="utf-8") as f:
  f.write(unbranded_svg)
print("Created temple-unbranded.svg")
