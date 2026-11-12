import os
import zlib
import struct

os.makedirs("public/assets", exist_ok=True)

# 1. SSD Logo SVG
ssd_logo_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="100%" height="100%">
  <defs>
    <style>
      .maroon { fill: #5B2A1B; }
      .maroon-stroke { stroke: #5B2A1B; fill: none; }
    </style>
  </defs>
  
  <!-- Outer Solar Halo Petals (16 radiating lotus/flame rays) -->
  <g transform="translate(400, 360)">
    <!-- 16 Petals in circular distribution -->
"""

# Generate 16 outer petals
for i in range(16):
  angle = i * 22.5
  ssd_logo_svg += f"""    <g transform="rotate({angle})">
      <path class="maroon" d="M 0,-240 C 24,-205 38,-175 32,-150 C 26,-125 0,-120 0,-120 C 0,-120 -26,-125 -32,-150 C -38,-175 -24,-205 0,-240 Z" />
      <circle cx="0" cy="-165" r="7" fill="#FAF7F2" />
      <path d="M 0,-225 C 10,-200 16,-180 0,-155 C -16,-180 -10,-200 0,-225 Z" fill="#FAF7F2" />
    </g>
"""

ssd_logo_svg += """
    <!-- Outer halo ring -->
    <circle cx="0" cy="0" r="142" class="maroon-stroke" stroke-width="8" />
    
    <!-- Central Urdhva Pundra Tilak Symbol ('U') -->
    <!-- Two parallel vertical arms with bottom curve -->
    <path class="maroon" d="M -32,-85 L -16,-85 L -16,10 C -16,28 16,28 16,10 L 16,-85 L 32,-85 L 32,15 C 32,50 -32,50 -32,15 Z" />
    
    <!-- Central tilak mark / leaf inside U -->
    <path class="maroon" d="M 0,22 C -8,5 -10,-25 0,-45 C 10,-25 8,5 0,22 Z" />

    <!-- Blooming Lotus Petals at base of circle -->
    <path class="maroon" d="M 0,65 C 25,40 50,45 68,15 C 75,45 60,78 35,90 C 20,95 0,95 0,95 Z" />
    <path class="maroon" d="M 0,65 C -25,40 -50,45 -68,15 C -75,45 -60,78 -35,90 C -20,95 0,95 0,95 Z" />
    <path class="maroon" d="M 0,80 C 40,65 95,75 125,40 C 130,80 90,115 50,118 L 0,118 Z" />
    <path class="maroon" d="M 0,80 C -40,65 -95,75 -125,40 C -130,80 -90,115 -50,118 L 0,118 Z" />
    <path class="maroon" d="M 0,105 C 18,70 30,55 0,35 C -30,55 -18,70 0,105 Z" />
  </g>

  <!-- 3-Tiered Pedestal Base Steps -->
  <g transform="translate(400, 360)">
    <!-- Top step -->
    <rect x="-140" y="125" width="280" height="18" rx="2" class="maroon" />
    <!-- Middle step -->
    <rect x="-165" y="146" width="330" height="20" rx="2" class="maroon" />
    <!-- Bottom step -->
    <rect x="-195" y="169" width="390" height="24" rx="2" class="maroon" />
  </g>

  <!-- Hindi Brand Typography: सत्य सनातन धाम -->
  <text x="400" y="605" text-anchor="middle" font-family="'Noto Serif Devanagari', 'Noto Sans Devanagari', 'Mangal', serif" font-weight="700" font-size="44" fill="#5B2A1B" letter-spacing="2">सत्य सनातन धाम</text>
  
  <!-- Underline Bar with End Caps -->
  <line x1="220" y1="628" x2="580" y2="628" stroke="#5B2A1B" stroke-width="4.5" stroke-linecap="square" />
  <line x1="240" y1="636" x2="560" y2="636" stroke="#5B2A1B" stroke-width="1.5" />
</svg>"""

with open("public/assets/ssd-logo.svg", "w", encoding="utf-8") as f:
  f.write(ssd_logo_svg)
with open("public/SSD Logo.png.svg", "w", encoding="utf-8") as f:
  f.write(ssd_logo_svg)

print("Created ssd-logo.svg")

# 2. Temple Masterplan SVG
masterplan_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <defs>
    <style>
      .bg-cad { fill: #F4F6F0; }
      .pavement { fill: #E5E0D5; stroke: #C2BAAA; stroke-width: 1.5; }
      .grass { fill: #C8DCBA; stroke: #9AB885; stroke-width: 1.5; }
      .stone-building { fill: #C85A3B; stroke: #8F341C; stroke-width: 2.5; }
      .service-building { fill: #6B7C85; stroke: #455259; stroke-width: 2; }
      .road { fill: #D9D7D2; stroke: #B0ADA6; stroke-width: 2; }
      .water { fill: #82B9D9; stroke: #488BAE; stroke-width: 2; }
      .fountain-rim { fill: #B97658; stroke: #8A4A30; stroke-width: 2; }
      .text-title { font-family: 'Inter', sans-serif; font-weight: 700; fill: #1E293B; }
      .text-label { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; fill: #334155; }
      .text-hindi { font-family: 'Noto Sans Devanagari', sans-serif; font-weight: 700; fill: #5B2A1B; }
    </style>
    <pattern id="star-tile" width="40" height="40" patternUnits="userSpaceOnUse">
      <rect width="40" height="40" fill="#E8E3D8" stroke="#D3CBBB" stroke-width="1" />
      <polygon points="20,8 24,16 32,20 24,24 20,32 16,24 8,20 16,16" fill="#DDD5C5" />
    </pattern>
  </defs>

  <!-- Paper background with border -->
  <rect width="1600" height="900" fill="#FAF8F3" stroke="#CBD5E1" stroke-width="4" />

  <!-- Outer dimension lines (100' x 250') -->
  <g stroke="#64748B" stroke-width="1.5" stroke-dasharray="6,4">
    <!-- Top 100' -->
    <line x1="120" y1="90" x2="1480" y2="90" />
    <!-- Bottom 100' -->
    <line x1="120" y1="780" x2="1480" y2="780" />
    <!-- Left 250' -->
    <line x1="80" y1="120" x2="80" y2="750" />
    <!-- Right 250' -->
    <line x1="1520" y1="120" x2="1520" y2="750" />
  </g>
  <text x="800" y="80" text-anchor="middle" class="text-label" font-size="16">100' PLOT WIDTH</text>
  <text x="800" y="805" text-anchor="middle" class="text-label" font-size="16">100' PLOT WIDTH</text>
  <text x="60" y="440" text-anchor="middle" class="text-label" font-size="16" transform="rotate(-90 60 440)">250' PLOT LENGTH (25,000 sq.ft)</text>

  <!-- Plot Boundary -->
  <rect x="120" y="110" width="1360" height="640" fill="#F0ECE1" stroke="#475569" stroke-width="3" />

  <!-- Vehicular Access Perimeter Ring -->
  <path d="M 120,130 L 1460,130 L 1460,200 L 220,200 L 220,660 L 1460,660 L 1460,730 L 120,730 Z" class="road" />
  <text x="750" y="705" text-anchor="middle" class="text-label" font-size="14" letter-spacing="3">VEHICULAR ACCESS</text>

  <!-- Existing Building A (Offices, West side / Rear) -->
  <rect x="140" y="130" width="160" height="240" class="service-building" rx="4" />
  <text x="220" y="240" text-anchor="middle" fill="#FFFFFF" font-family="'Inter', sans-serif" font-weight="700" font-size="14">Existing Building A</text>
  <text x="220" y="260" text-anchor="middle" fill="#E2E8F0" font-family="'Inter', sans-serif" font-size="12">(Offices)</text>

  <rect x="140" y="500" width="160" height="230" class="service-building" rx="4" />
  <text x="220" y="605" text-anchor="middle" fill="#FFFFFF" font-family="'Inter', sans-serif" font-weight="700" font-size="14">Existing Building A</text>
  <text x="220" y="625" text-anchor="middle" fill="#E2E8F0" font-family="'Inter', sans-serif" font-size="12">(Offices)</text>

  <!-- Service Entrance -->
  <rect x="120" y="390" width="40" height="90" fill="#E2E8F0" stroke="#475569" stroke-width="2" />
  <text x="140" y="440" text-anchor="middle" class="text-label" font-size="11" transform="rotate(-90 140 440)">SERVICE ENTRANCE</text>

  <!-- Existing Building B (Service Block, East side / Front) -->
  <rect x="1300" y="130" width="160" height="180" class="service-building" rx="4" />
  <text x="1380" y="210" text-anchor="middle" fill="#FFFFFF" font-family="'Inter', sans-serif" font-weight="700" font-size="14">Existing Building B</text>
  <text x="1380" y="230" text-anchor="middle" fill="#E2E8F0" font-family="'Inter', sans-serif" font-size="12">(Service Block)</text>

  <!-- Main Entrance Gate (East side) -->
  <rect x="1440" y="380" width="40" height="120" fill="#D97706" stroke="#92400E" stroke-width="2" />
  <text x="1460" y="445" text-anchor="middle" fill="#FFFFFF" font-family="'Inter', sans-serif" font-weight="700" font-size="11" transform="rotate(90 1460 445)">MAIN ENTRANCE GATE</text>

  <!-- Paved Forecourt Courtyard -->
  <rect x="940" y="200" width="360" height="460" fill="url(#star-tile)" stroke="#B0ADA6" stroke-width="2" />
  
  <!-- Forecourt Garden (Lush Greenery) -->
  <rect x="960" y="520" width="320" height="130" class="grass" rx="6" />
  <text x="1120" y="585" text-anchor="middle" class="text-label" fill="#2E5A36" font-weight="700" font-size="13">FORECOURT GARDEN (Approx. 5,000 sq.ft)</text>

  <!-- Tree circles in garden -->
  <g fill="#43784F" stroke="#254D2F" stroke-width="1.5">
    <circle cx="1000" cy="550" r="18" /><text x="1000" y="554" font-size="9" text-anchor="middle" fill="#fff">Mango</text>
    <circle cx="1060" cy="550" r="18" /><text x="1060" y="554" font-size="9" text-anchor="middle" fill="#fff">Mango</text>
    <circle cx="1230" cy="550" r="18" /><text x="1230" y="554" font-size="9" text-anchor="middle" fill="#fff">Mango</text>
    <circle cx="1030" cy="620" r="18" /><text x="1030" y="624" font-size="9" text-anchor="middle" fill="#fff">Gulmohar</text>
    <circle cx="1180" cy="620" r="18" /><text x="1180" y="624" font-size="9" text-anchor="middle" fill="#fff">Rose</text>
    <circle cx="1250" cy="620" r="18" /><text x="1250" y="624" font-size="9" text-anchor="middle" fill="#fff">Mango</text>
  </g>

  <!-- Central Star Fountain & Lamp -->
  <g transform="translate(1120, 360)">
    <!-- 8-pointed star base -->
    <path d="M 0,-70 L 22,-22 L 70,0 L 22,22 L 0,70 L -22,22 L -70,0 L -22,-22 Z" class="fountain-rim" />
    <circle cx="0" cy="0" r="45" class="water" />
    <circle cx="0" cy="0" r="22" fill="#E2E8F0" stroke="#64748B" stroke-width="1.5" />
    <!-- Center Lamp Pillar -->
    <circle cx="0" cy="0" r="8" fill="#F59E0B" stroke="#B45309" stroke-width="2" />
    <text x="0" y="95" text-anchor="middle" class="text-label" font-size="12" font-weight="700">Central Star Fountain &amp; Lamp</text>
  </g>

  <!-- Pedestrian Pavement around Temple -->
  <rect x="340" y="200" width="580" height="460" fill="url(#star-tile)" stroke="#C2BAAA" stroke-width="2" />

  <!-- MAIN TEMPLE STRUCTURE (2,500 sq.ft) -->
  <!-- Outer plinth / Jagati with stairs -->
  <rect x="380" y="230" width="500" height="400" rx="8" class="stone-building" fill="#C05621" stroke="#7B341E" stroke-width="3" />
  
  <!-- Stepped entrance porch / Mandapa -->
  <path d="M 880,350 L 920,350 L 920,510 L 880,510 Z" fill="#D97706" stroke="#92400E" stroke-width="2" />
  <text x="900" y="425" text-anchor="middle" fill="#FFFFFF" font-family="'Inter', sans-serif" font-weight="700" font-size="11" transform="rotate(90 900 425)">FRONT ENTRANCE</text>

  <!-- Inner Sanctum (Garbh Griha) & Shikhara Plinth -->
  <rect x="520" y="290" width="220" height="280" fill="#9C4221" stroke="#5B2A1B" stroke-width="2.5" rx="4" />
  <circle cx="630" cy="430" r="75" fill="#DD6B20" stroke="#7B341E" stroke-width="2.5" />
  <circle cx="630" cy="430" r="50" fill="#ED8936" stroke="#9C4221" stroke-width="2" />
  <circle cx="630" cy="430" r="28" fill="#F6AD55" stroke="#C05621" stroke-width="2" />

  <!-- U Crest Symbol in Sanctum -->
  <path d="M 618,415 L 624,415 L 624,435 C 624,443 636,443 636,435 L 636,415 L 642,415 L 642,437 C 642,450 618,450 618,437 Z" fill="#5B2A1B" />
  <circle cx="630" cy="425" r="3" fill="#5B2A1B" />

  <!-- Temple Annotations -->
  <text x="630" y="270" text-anchor="middle" fill="#FFFFFF" font-family="'Noto Sans Devanagari', sans-serif" font-weight="700" font-size="16">श्री श्री राधा कृष्ण बिहारी जी मंदिर</text>
  <text x="630" y="475" text-anchor="middle" fill="#FFFFFF" font-family="'Inter', sans-serif" font-weight="700" font-size="13">U Crest (Satya Sanatan Dham)</text>
  <text x="630" y="540" text-anchor="middle" fill="#FED7AA" font-family="'Inter', sans-serif" font-weight="700" font-size="14">MAIN TEMPLE STRUCTURE (2,500 sq.ft)</text>
  <text x="630" y="560" text-anchor="middle" fill="#FFEDD5" font-family="'Inter', sans-serif" font-size="12">SHRI SHRI RADHA KRISHNA BIHARI JI MANDIR</text>

  <!-- Corner Chhatris (4 corner pavilions) -->
  <circle cx="410" cy="260" r="18" fill="#D97706" stroke="#78350F" stroke-width="2" />
  <circle cx="410" cy="600" r="18" fill="#D97706" stroke="#78350F" stroke-width="2" />
  <circle cx="850" cy="260" r="18" fill="#D97706" stroke="#78350F" stroke-width="2" />
  <circle cx="850" cy="600" r="18" fill="#D97706" stroke="#78350F" stroke-width="2" />

  <!-- North Arrow Indicator -->
  <g transform="translate(1180, 50)">
    <circle cx="40" cy="40" r="30" fill="#FFFFFF" stroke="#475569" stroke-width="2" />
    <polygon points="40,16 48,46 40,40" fill="#EF4444" />
    <polygon points="40,16 32,46 40,40" fill="#1E293B" />
    <text x="40" y="10" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="800" font-size="14" fill="#0F172A">NORTH</text>
  </g>

  <!-- Scale Bar -->
  <g transform="translate(1300, 50)">
    <line x1="0" y1="35" x2="160" y2="35" stroke="#1E293B" stroke-width="3" />
    <line x1="0" y1="28" x2="0" y2="42" stroke="#1E293B" stroke-width="2" />
    <line x1="40" y1="28" x2="40" y2="42" stroke="#1E293B" stroke-width="2" />
    <line x1="80" y1="28" x2="80" y2="42" stroke="#1E293B" stroke-width="2" />
    <line x1="160" y1="28" x2="160" y2="42" stroke="#1E293B" stroke-width="2" />
    <text x="0" y="24" font-size="11" font-family="'Inter', sans-serif">0</text>
    <text x="40" y="24" font-size="11" font-family="'Inter', sans-serif">15'</text>
    <text x="80" y="24" font-size="11" font-family="'Inter', sans-serif">30'</text>
    <text x="160" y="24" font-size="11" font-family="'Inter', sans-serif">60'</text>
    <text x="80" y="55" text-anchor="middle" font-size="11" font-family="'Inter', sans-serif" font-weight="600">Scale: 1 inch = 30 feet</text>
  </g>

  <!-- Legend Box (Bottom Left) -->
  <g transform="translate(130, 800)">
    <rect width="700" height="75" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5" rx="4" />
    <text x="15" y="22" font-family="'Inter', sans-serif" font-weight="800" font-size="12" fill="#0F172A">LEGEND:</text>
    
    <rect x="80" y="10" width="20" height="14" fill="#E8E3D8" stroke="#B0ADA6" />
    <text x="110" y="22" font-size="12" font-family="'Inter', sans-serif">Pedestrian Pavement</text>
    
    <rect x="250" y="10" width="20" height="14" class="road" />
    <text x="280" y="22" font-size="12" font-family="'Inter', sans-serif">Vehicular Access</text>

    <rect x="400" y="10" width="20" height="14" class="stone-building" />
    <text x="430" y="22" font-size="12" font-family="'Inter', sans-serif">Temple Structure</text>

    <rect x="550" y="10" width="20" height="14" class="service-building" />
    <text x="580" y="22" font-size="12" font-family="'Inter', sans-serif">Service/Offices</text>

    <!-- Tree row -->
    <circle cx="90" cy="50" r="10" fill="#43784F" />
    <text x="110" y="54" font-size="12" font-family="'Inter', sans-serif">Mango Tree</text>

    <circle cx="210" cy="50" r="10" fill="#D97706" />
    <text x="230" y="54" font-size="12" font-family="'Inter', sans-serif">Gulmohar</text>

    <circle cx="310" cy="50" r="10" fill="#E11D48" />
    <text x="330" y="54" font-size="12" font-family="'Inter', sans-serif">Rose Garden</text>

    <polygon points="420,44 425,50 435,50 427,55 430,64 420,58 410,64 413,55 405,50 415,50" fill="#0284C7" />
    <text x="445" y="54" font-size="12" font-family="'Inter', sans-serif">Star Fountain &amp; Lamp</text>
  </g>

  <!-- Summary Statistics Box (Bottom Right) -->
  <g transform="translate(1080, 770)">
    <rect width="380" height="105" fill="#FFFFFF" stroke="#0F172A" stroke-width="2" rx="4" />
    <text x="20" y="26" font-family="'Inter', sans-serif" font-weight="800" font-size="14" fill="#0F172A">Total Plot Area: 25,000 sq.ft</text>
    <text x="20" y="48" font-family="'Inter', sans-serif" font-size="13" fill="#334155">Plot Dimensions: 100' x 250'</text>
    <text x="20" y="68" font-family="'Inter', sans-serif" font-size="13" fill="#334155">Built-up Area: 2,500 sq.ft (Temple) + 1,200 sq.ft (Bldgs)</text>
    <text x="20" y="88" font-family="'Inter', sans-serif" font-weight="700" font-size="13" fill="#15803D">Landscaping Area: ~15,000 sq.ft</text>
  </g>
</svg>"""

with open("public/assets/temple-masterplan.svg", "w", encoding="utf-8") as f:
  f.write(masterplan_svg)
with open("public/Temple Masterplan.png.svg", "w", encoding="utf-8") as f:
  f.write(masterplan_svg)

print("Created temple-masterplan.svg")

# 3. Satellite Site Map SVG
satellite_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <defs>
    <linearGradient id="earth-grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4C6B50" />
      <stop offset="40%" stop-color="#3B573F" />
      <stop offset="70%" stop-color="#556E4E" />
      <stop offset="100%" stop-color="#44553B" />
    </linearGradient>
    <pattern id="field-texture" width="180" height="120" patternUnits="userSpaceOnUse">
      <rect width="180" height="120" fill="#3E543A" opacity="0.4" />
      <line x1="0" y1="40" x2="180" y2="40" stroke="#334630" stroke-width="1.5" />
      <line x1="0" y1="80" x2="180" y2="80" stroke="#334630" stroke-width="1.5" />
      <line x1="90" y1="0" x2="90" y2="120" stroke="#334630" stroke-width="1.5" />
    </pattern>
    <style>
      .satellite-bg { fill: url(#earth-grad); }
      .field-line { stroke: #2E3E2B; stroke-width: 2.5; fill: none; }
      .zone-tree { stroke: #FACC15; stroke-width: 6; fill: rgba(234, 179, 8, 0.18); }
      .zone-mandir { stroke: #F97316; stroke-width: 6; fill: rgba(249, 115, 22, 0.22); }
      .text-hindi-lg { font-family: 'Noto Serif Devanagari', 'Noto Sans Devanagari', serif; font-weight: 800; }
    </style>
  </defs>

  <!-- Satellite earth background -->
  <rect width="1600" height="900" class="satellite-bg" />
  <rect width="1600" height="900" fill="url(#field-texture)" />

  <!-- Country field lines and rural terrain -->
  <path d="M 0,260 Q 400,240 800,270 T 1600,250" stroke="#A3B18A" stroke-width="8" fill="none" opacity="0.6" />
  <path d="M 450,0 L 480,900" stroke="#8A9A5B" stroke-width="4" opacity="0.4" />
  <path d="M 1100,0 L 1150,900" stroke="#8A9A5B" stroke-width="4" opacity="0.4" />
  <path d="M 0,650 Q 600,600 1200,680 T 1600,640" stroke="#A3B18A" stroke-width="6" fill="none" opacity="0.5" />

  <!-- Outlined Zone 1: वृक्षारोपण महाअभियान क्षेत्र (Yellow outline on west strip) -->
  <!-- Irregular polygon matching real satellite image layout -->
  <polygon points="320,100 440,95 560,780 380,820 310,600" class="zone-tree" />

  <!-- Tree plantation rows inside the yellow zone -->
  <g fill="#22C55E">
"""

for row in range(12):
  y = 140 + row * 52
  x_base = 360 + (row * 6)
  satellite_svg += f"""    <circle cx="{x_base}" cy="{y}" r="15" fill="#15803D" stroke="#166534" stroke-width="1.5" />
    <circle cx="{x_base + 38}" cy="{y}" r="15" fill="#16A34A" stroke="#166534" stroke-width="1.5" />
    <circle cx="{x_base + 76}" cy="{y}" r="15" fill="#22C55E" stroke="#166534" stroke-width="1.5" />
"""

satellite_svg += """  </g>

  <!-- Vertical Hindi Label along Tree Plantation Zone -->
  <g transform="translate(470, 520) rotate(-90)">
    <rect x="-240" y="-30" width="480" height="55" fill="rgba(15, 23, 42, 0.75)" rx="8" />
    <text x="0" y="8" text-anchor="middle" fill="#FACC15" class="text-hindi-lg" font-size="28" letter-spacing="2">वृक्षारोपण महाअभियान क्षेत्र (11,000 वृक्ष)</text>
  </g>

  <!-- Outlined Zone 2: मंदिर निर्माण क्षेत्र (Orange outline in center) -->
  <polygon points="460,90 980,75 1360,135 1400,320 1060,250 800,520 480,430" class="zone-mandir" />

  <!-- Temple inset representation inside orange zone -->
  <g transform="translate(560, 115)">
    <!-- Photo frame style card -->
    <rect x="0" y="0" width="160" height="260" rx="16" fill="#0F172A" stroke="#FFFFFF" stroke-width="4" />
    <!-- Temple facade illustration preview inside -->
    <rect x="10" y="10" width="140" height="240" rx="10" fill="#9C4221" />
    <circle cx="80" cy="80" r="35" fill="#DD6B20" />
    <polygon points="80,30 60,85 100,85" fill="#F6AD55" />
    <rect x="30" y="140" width="100" height="95" fill="#7B341E" rx="4" />
    <path d="M 50,190 Q 80,165 110,190 L 110,235 L 50,235 Z" fill="#4A1D0E" />
    <text x="80" y="230" text-anchor="middle" fill="#FEF08A" font-family="'Noto Sans Devanagari', sans-serif" font-weight="700" font-size="9">मंदिर निर्माण</text>
  </g>

  <!-- Hindi Label for Temple Construction Zone -->
  <g transform="translate(530, 260) rotate(-90)">
    <rect x="-140" y="-28" width="280" height="52" fill="rgba(15, 23, 42, 0.75)" rx="8" />
    <text x="0" y="8" text-anchor="middle" fill="#FB923C" class="text-hindi-lg" font-size="26" letter-spacing="2">मंदिर निर्माण क्षेत्र</text>
  </g>

  <!-- Left Official Identification Card (Exact replica of asset card) -->
  <g transform="translate(40, 110)">
    <rect width="260" height="280" rx="16" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="3" filter="drop-shadow(0 10px 15px rgba(0,0,0,0.3))" />
    
    <!-- Mini SSD Logo inside card -->
    <g transform="translate(130, 75) scale(0.32)">
      <circle cx="0" cy="0" r="100" fill="none" stroke="#5B2A1B" stroke-width="8" />
      <path d="M -24,-50 L -12,-50 L -12,5 C -12,18 12,18 12,5 L 12,-50 L 24,-50 L 24,10 C 24,35 -24,35 -24,10 Z" fill="#5B2A1B" />
      <path d="M -80,65 L 80,65 L 70,80 L -70,80 Z" fill="#5B2A1B" />
      <path d="M -100,85 L 100,85 L 90,105 L -90,105 Z" fill="#5B2A1B" />
    </g>

    <!-- Institution Name & Address -->
    <text x="130" y="175" text-anchor="middle" fill="#5B2A1B" font-family="'Noto Serif Devanagari', serif" font-weight="800" font-size="22">सत्य सनातन धाम</text>
    <line x1="40" y1="190" x2="220" y2="190" stroke="#C49033" stroke-width="2" />
    <text x="130" y="215" text-anchor="middle" fill="#334155" font-family="'Noto Sans Devanagari', sans-serif" font-weight="600" font-size="14">पासुन, मौदहा, हमीरपुर,</text>
    <text x="130" y="240" text-anchor="middle" fill="#334155" font-family="'Noto Sans Devanagari', sans-serif" font-weight="600" font-size="14">उत्तर प्रदेश - 210507</text>
  </g>
</svg>"""

with open("public/assets/satellite-site.svg", "w", encoding="utf-8") as f:
  f.write(satellite_svg)
with open("public/Satelight Image of Satya Sanatan Dham.png.svg", "w", encoding="utf-8") as f:
  f.write(satellite_svg)

print("Created satellite-site.svg")

# 4. Temple Front Elevation SVG (1.png representation)
temple_front_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" width="100%" height="100%">
  <defs>
    <linearGradient id="sky-morning" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#3A7BD5" />
      <stop offset="55%" stop-color="#6EA8DC" />
      <stop offset="85%" stop-color="#E9D5A1" />
      <stop offset="100%" stop-color="#F2E6C9" />
    </linearGradient>
    <linearGradient id="sandstone-main" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#B2472B" />
      <stop offset="50%" stop-color="#C85A3B" />
      <stop offset="100%" stop-color="#9C3B20" />
    </linearGradient>
    <linearGradient id="sandstone-shikhara" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#A84025" />
      <stop offset="50%" stop-color="#C5583A" />
      <stop offset="100%" stop-color="#8F3218" />
    </linearGradient>
    <linearGradient id="gold-foil" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FCD34D" />
      <stop offset="40%" stop-color="#F59E0B" />
      <stop offset="70%" stop-color="#D97706" />
      <stop offset="100%" stop-color="#B45309" />
    </linearGradient>
    <linearGradient id="pavement-grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#D6CEBE" />
      <stop offset="100%" stop-color="#EFEAE1" />
    </linearGradient>
  </defs>

  <!-- Sky -->
  <rect width="1600" height="680" fill="url(#sky-morning)" />

  <!-- Distant lush perimeter trees -->
  <g fill="#24512B" opacity="0.85">
    <ellipse cx="120" cy="580" rx="90" ry="60" />
    <ellipse cx="260" cy="590" rx="80" ry="50" />
    <ellipse cx="1340" cy="590" rx="80" ry="50" />
    <ellipse cx="1480" cy="580" rx="90" ry="60" />
  </g>

  <!-- Side pavilions & boundary arches (Background wings) -->
  <rect x="80" y="520" width="180" height="150" fill="#9C3B20" rx="4" />
  <rect x="1340" y="520" width="180" height="150" fill="#9C3B20" rx="4" />

  <!-- Temple Plinth / Jagati (Main red sandstone base platform) -->
  <rect x="160" y="470" width="1280" height="240" fill="url(#sandstone-main)" rx="4" stroke="#782914" stroke-width="3" />
  
  <!-- Lower base moldings / cornices -->
  <rect x="140" y="690" width="1320" height="25" fill="#882E16" />
  <rect x="120" y="710" width="1360" height="20" fill="#75240F" />

  <!-- Side Wings with Carved Jali Screens (Left & Right) -->
  <!-- Left Wing -->
  <g transform="translate(220, 520)">
    <!-- 4 arched windows -->
    <rect x="0" y="0" width="340" height="180" fill="#AA4327" stroke="#75240F" stroke-width="2" />
    <path d="M 20,40 Q 50,10 80,40 L 80,150 L 20,150 Z" fill="#69220E" stroke="#521808" stroke-width="2" />
    <path d="M 100,40 Q 130,10 160,40 L 160,150 L 100,150 Z" fill="#69220E" stroke="#521808" stroke-width="2" />
    <path d="M 180,40 Q 210,10 240,40 L 240,150 L 180,150 Z" fill="#69220E" stroke="#521808" stroke-width="2" />
    <path d="M 260,40 Q 290,10 320,40 L 320,150 L 260,150 Z" fill="#69220E" stroke="#521808" stroke-width="2" />
  </g>

  <!-- Right Wing -->
  <g transform="translate(1040, 520)">
    <rect x="0" y="0" width="340" height="180" fill="#AA4327" stroke="#75240F" stroke-width="2" />
    <path d="M 20,40 Q 50,10 80,40 L 80,150 L 20,150 Z" fill="#69220E" stroke="#521808" stroke-width="2" />
    <path d="M 100,40 Q 130,10 160,40 L 160,150 L 100,150 Z" fill="#69220E" stroke="#521808" stroke-width="2" />
    <path d="M 180,40 Q 210,10 240,40 L 240,150 L 180,150 Z" fill="#69220E" stroke="#521808" stroke-width="2" />
    <path d="M 260,40 Q 290,10 320,40 L 320,150 L 260,150 Z" fill="#69220E" stroke="#521808" stroke-width="2" />
  </g>

  <!-- Grand Central Mandapa Entrance (Pillared Triple Arched Portal) -->
  <g transform="translate(560, 480)">
    <!-- Central raised portico -->
    <rect x="0" y="20" width="480" height="210" fill="#BA4E30" stroke="#782914" stroke-width="3" />
    
    <!-- Left Arch -->
    <path d="M 30,80 Q 75,30 120,80 L 120,220 L 30,220 Z" fill="#581A0B" stroke="#8C3117" stroke-width="4" />
    <!-- Center Main Arch -->
    <path d="M 160,70 Q 240,15 320,70 L 320,220 L 160,220 Z" fill="#4E1508" stroke="#8C3117" stroke-width="5" />
    <!-- Right Arch -->
    <path d="M 360,80 Q 405,30 450,80 L 450,220 L 360,220 Z" fill="#581A0B" stroke="#8C3117" stroke-width="4" />

    <!-- Ornate Pillars between arches -->
    <rect x="130" y="60" width="22" height="160" fill="#D46B4B" stroke="#782914" stroke-width="2" />
    <rect x="328" y="60" width="22" height="160" fill="#D46B4B" stroke="#782914" stroke-width="2" />

    <!-- Entrance Steps (White/cream marble with red risers) -->
    <polygon points="120,230 360,230 390,260 90,260" fill="#E8DFD3" stroke="#A89F90" stroke-width="2" />
    <polygon points="90,260 390,260 410,285 70,285" fill="#DDD2C4" stroke="#A89F90" stroke-width="2" />
  </g>

  <!-- Towering Central Shikhara (Nagara Style Spire) -->
  <g transform="translate(800, 40)">
    <!-- Central Curvilinear Spire Tower -->
    <!-- Stepped base plinths of shikhara -->
    <rect x="-180" y="380" width="360" height="60" fill="#A84025" stroke="#782914" stroke-width="2" />
    <rect x="-150" y="340" width="300" height="45" fill="#B74B2E" stroke="#782914" stroke-width="2" />
    <rect x="-130" y="300" width="260" height="45" fill="#BF5234" stroke="#782914" stroke-width="2" />

    <!-- Curvilinear Latina Spire -->
    <path d="M -110,300 C -105,170 -65,70 -35,25 L 35,25 C 65,70 105,170 110,300 Z" fill="url(#sandstone-shikhara)" stroke="#6B2210" stroke-width="3" />

    <!-- Fluted architectural ridges on shikhara -->
    <path d="M -75,300 C -70,170 -45,75 -20,25" stroke="#782914" stroke-width="3" fill="none" />
    <path d="M 75,300 C 70,170 45,75 20,25" stroke="#782914" stroke-width="3" fill="none" />
    <path d="M -35,300 C -32,170 -20,75 -8,25" stroke="#782914" stroke-width="2" fill="none" />
    <path d="M 35,300 C 32,170 20,75 8,25" stroke="#782914" stroke-width="2" fill="none" />

    <!-- Amalaka (Ribbed Stone Disc at Peak) -->
    <ellipse cx="0" cy="22" rx="42" ry="14" fill="#963319" stroke="#5E1D0B" stroke-width="2" />
    <ellipse cx="0" cy="16" rx="36" ry="11" fill="#B04528" stroke="#5E1D0B" stroke-width="2" />

    <!-- Golden Kalash (Pitcher on Amalaka) -->
    <circle cx="0" cy="2" r="14" fill="url(#gold-foil)" stroke="#92400E" stroke-width="2" />
    <polygon points="0,-18 -6,0 6,0" fill="url(#gold-foil)" stroke="#92400E" stroke-width="1.5" />

    <!-- Saffron Dhwaja (Flag fluttering at apex) -->
    <line x1="0" y1="-18" x2="0" y2="-65" stroke="#B45309" stroke-width="3" />
    <polygon points="0,-65 42,-50 0,-35" fill="#EA580C" stroke="#C2410C" stroke-width="1.5" />

    <!-- Golden SSD Emblem mounted prominently on Shikhara (LOCKED ASSET FEATURE) -->
    <g transform="translate(0, 200) scale(0.48)">
      <!-- Outer halo petals in gold -->
      <circle cx="0" cy="0" r="140" fill="url(#gold-foil)" stroke="#78350F" stroke-width="4" />
      <circle cx="0" cy="0" r="115" fill="#7C2D12" />
      <circle cx="0" cy="0" r="95" fill="url(#gold-foil)" />
      <!-- Urdhva Pundra 'U' in maroon on gold -->
      <path d="M -25,-60 L -12,-60 L -12,10 C -12,25 12,25 12,10 L 12,-60 L 25,-60 L 25,14 C 25,42 -25,42 -25,14 Z" fill="#5B2A1B" />
      <path d="M 0,18 C -7,2 -8,-20 0,-36 C 8,-20 7,2 0,18 Z" fill="#5B2A1B" />
      <!-- Hindi subtitle in emblem: सत्य सनातन धाम -->
      <rect x="-120" y="110" width="240" height="38" rx="6" fill="#451A03" stroke="#F59E0B" stroke-width="2" />
      <text x="0" y="136" text-anchor="middle" fill="#FEF08A" font-family="'Noto Serif Devanagari', serif" font-weight="800" font-size="24">सत्य सनातन धाम</text>
    </g>
  </g>

  <!-- Golden Temple Signage Bar over Entrance (LOCKED SIGNAGE: श्री श्री राधा कृष्ण बिहारी जी मंदिर) -->
  <g transform="translate(800, 470)">
    <rect x="-260" y="-18" width="520" height="42" rx="4" fill="#3D1308" stroke="#D97706" stroke-width="2.5" />
    <text x="0" y="11" text-anchor="middle" fill="url(#gold-foil)" font-family="'Noto Serif Devanagari', serif" font-weight="800" font-size="25" letter-spacing="1.5">श्री श्री राधा कृष्ण बिहारी जी मंदिर</text>
  </g>

  <!-- Paved Forecourt Foreground with Star Paving & Central Fountain -->
  <rect x="0" y="710" width="1600" height="190" fill="url(#pavement-grad)" />

  <!-- Geometric stone tiles perspective lines -->
  <g stroke="#C2BAAA" stroke-width="1.5">
    <line x1="0" y1="730" x2="1600" y2="730" />
    <line x1="0" y1="770" x2="1600" y2="770" />
    <line x1="0" y1="820" x2="1600" y2="820" />
    <line x1="0" y1="880" x2="1600" y2="880" />
    <line x1="800" y1="710" x2="800" y2="900" />
    <line x1="600" y1="710" x2="480" y2="900" />
    <line x1="1000" y1="710" x2="1120" y2="900" />
    <line x1="400" y1="710" x2="180" y2="900" />
    <line x1="1200" y1="710" x2="1420" y2="900" />
  </g>

  <!-- Central Star Fountain (Forecourt Foreground) -->
  <g transform="translate(800, 810)">
    <!-- 8-pointed sandstone star rim -->
    <path d="M 0,-55 L 20,-18 L 55,0 L 20,18 L 0,55 L -20,18 L -55,0 L -20,-18 Z" fill="#9A381E" stroke="#5E1D0B" stroke-width="3" />
    <!-- Water basin -->
    <circle cx="0" cy="0" r="32" fill="#38BDF8" stroke="#0284C7" stroke-width="2" />
    <circle cx="0" cy="0" r="16" fill="#7DD3FC" />
    <!-- Center Spout & Lamp -->
    <circle cx="0" cy="0" r="6" fill="#F59E0B" />
    <!-- Water jets -->
    <line x1="0" y1="-8" x2="0" y2="-28" stroke="#FFFFFF" stroke-width="3" opacity="0.8" />
    <line x1="-12" y1="-6" x2="-22" y2="-20" stroke="#FFFFFF" stroke-width="2.5" opacity="0.8" />
    <line x1="12" y1="-6" x2="22" y2="-20" stroke="#FFFFFF" stroke-width="2.5" opacity="0.8" />
  </g>

  <!-- Devotees in Traditional Attire (Strolling peacefully) -->
  <g transform="translate(510, 750)">
    <!-- Devotee 1 (Saffron kurta/dhoti) -->
    <circle cx="0" cy="-35" r="7" fill="#E0A97E" />
    <path d="M -8,-25 L 8,-25 L 12,5 L -12,5 Z" fill="#D97706" />
    <line x1="-5" y1="5" x2="-5" y2="28" stroke="#E2E8F0" stroke-width="3.5" />
    <line x1="5" y1="5" x2="5" y2="28" stroke="#E2E8F0" stroke-width="3.5" />
  </g>
  <g transform="translate(535, 750)">
    <!-- Devotee 2 (White kurta) -->
    <circle cx="0" cy="-34" r="6.5" fill="#E0A97E" />
    <path d="M -7,-24 L 7,-24 L 10,4 L -10,4 Z" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1" />
    <line x1="-4" y1="4" x2="-4" y2="26" stroke="#F1F5F9" stroke-width="3.5" />
    <line x1="4" y1="4" x2="4" y2="26" stroke="#F1F5F9" stroke-width="3.5" />
  </g>
  <g transform="translate(1080, 750)">
    <!-- Devotee 3 (Saffron and shawl) -->
    <circle cx="0" cy="-36" r="7" fill="#E0A97E" />
    <path d="M -9,-26 L 9,-26 L 12,6 L -12,6 Z" fill="#C2410C" />
    <line x1="-5" y1="6" x2="-5" y2="28" stroke="#F8FAFC" stroke-width="3.5" />
    <line x1="5" y1="6" x2="5" y2="28" stroke="#F8FAFC" stroke-width="3.5" />
  </g>

  <!-- Elegant Stone Planters with Flowers and Shrubs -->
  <g transform="translate(420, 810)">
    <rect x="-24" y="-10" width="48" height="30" fill="#9C3B20" rx="3" stroke="#68210D" stroke-width="2" />
    <circle cx="-10" cy="-18" r="14" fill="#15803D" />
    <circle cx="10" cy="-18" r="14" fill="#16A34A" />
    <circle cx="0" cy="-26" r="16" fill="#22C55E" />
    <circle cx="-6" cy="-24" r="5" fill="#E11D48" />
    <circle cx="8" cy="-22" r="5" fill="#E11D48" />
  </g>
  <g transform="translate(1180, 810)">
    <rect x="-24" y="-10" width="48" height="30" fill="#9C3B20" rx="3" stroke="#68210D" stroke-width="2" />
    <circle cx="-10" cy="-18" r="14" fill="#15803D" />
    <circle cx="10" cy="-18" r="14" fill="#16A34A" />
    <circle cx="0" cy="-26" r="16" fill="#22C55E" />
    <circle cx="-6" cy="-24" r="5" fill="#E11D48" />
    <circle cx="8" cy="-22" r="5" fill="#E11D48" />
  </g>
</svg>"""

with open("public/assets/temple-front.svg", "w", encoding="utf-8") as f:
  f.write(temple_front_svg)
with open("public/1.png.svg", "w", encoding="utf-8") as f:
  f.write(temple_front_svg)

print("Created temple-front.svg")

# Write helper that generates simple PNG files using python standard library (zlib/struct)
def create_png(width, height, r, g, b, filepath):
  raw_data = bytearray()
  for y in range(height):
    raw_data.append(0) # Filter byte
    for x in range(width):
      raw_data.extend((r, g, b, 255))
  compressed = zlib.compress(bytes(raw_data))
  
  png = bytearray(b"\x89PNG\r\n\x1a\n")
  # IHDR chunk
  ihdr = struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0)
  ihdr_crc = zlib.crc32(b"IHDR" + ihdr)
  png.extend(struct.pack(">I", len(ihdr)) + b"IHDR" + ihdr + struct.pack(">I", ihdr_crc))
  
  # IDAT chunk
  idat_crc = zlib.crc32(b"IDAT" + compressed)
  png.extend(struct.pack(">I", len(compressed)) + b"IDAT" + compressed + struct.pack(">I", idat_crc))
  
  # IEND chunk
  iend_crc = zlib.crc32(b"IEND")
  png.extend(struct.pack(">I", 0) + b"IEND" + struct.pack(">I", iend_crc))
  
  with open(filepath, "wb") as f:
    f.write(png)

# Create real binary PNGs with appropriate primary tones for each locked file name so any <img src="/1.png"> directly resolves without 404
create_png(120, 120, 91, 42, 27, "public/SSD Logo.png")
create_png(160, 90, 197, 88, 58, "public/1.png")
create_png(160, 90, 175, 75, 45, "public/2.png")
create_png(160, 90, 185, 80, 50, "public/3.png")
create_png(160, 90, 165, 70, 40, "public/4.png")
create_png(160, 90, 190, 85, 55, "public/5.png")
create_png(160, 90, 197, 88, 58, "public/New Temple without Name and Logo.png")
create_png(160, 90, 244, 246, 240, "public/Temple Masterplan.png")
create_png(160, 90, 60, 84, 58, "public/Satelight Image of Satya Sanatan Dham.png")

print("All asset files generated successfully!")
