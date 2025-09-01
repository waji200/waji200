#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// README template with placeholders
const readmeTemplate = `<div align="center">

\`\`\`ascii
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║    ██╗    ██╗ █████╗      ██╗ █████╗ ██╗  ██╗ █████╗ ████████╗  ║
║    ██║    ██║██╔══██╗     ██║██╔══██╗██║  ██║██╔══██╗╚══██╔══╝  ║
║    ██║ █╗ ██║███████║     ██║███████║███████║███████║   ██║     ║
║    ██║███╗██║██╔══██║██   ██║██╔══██║██╔══██║██╔══██║   ██║     ║
║    ╚███╔███╔╝██║  ██║╚█████╔╝██║  ██║██║  ██║██║  ██║   ██║     ║
║     ╚══╝╚══╝ ╚═╝  ╚═╝ ╚════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝     ║
║                                                                  ║
║              🚀 FRONTEND ARCHITECT • 3D CREATIVE CODER           ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
\`\`\`

</div>

<br>

<div align="center">

### \`$ whoami\`

</div>

<table align="center" border="0">
<tr>
<td width="50%" valign="top">

\`\`\`yaml
name: "Wajahat Baig"
role: "Frontend Engineer & 3D Creative"
location: "Earth 🌍"
status: "Building the future, one pixel at a time"

specialties:
  frontend: ["React", "Next.js", "TypeScript"]
  backend: ["Node.js", "PostgreSQL", "Supabase"]  
  creative: ["Three.js", "Blender", "WebGL"]
  commerce: ["Shopify", "Medusa.js", "Stripe"]

current_focus: "Merging Art with Code"
\`\`\`

</td>
<td width="50%" valign="top">

\`\`\`javascript
class WajahatBaig extends Developer {
  constructor() {
    super();
    this.passion = "Creating digital experiences";
    this.skills = new Set([
      "React Ecosystem", "3D Web Graphics", 
      "E-Commerce Solutions", "UI/UX Design"
    ]);
  }
  
  async build() {
    return this.combineArtWithCode();
  }
}

const me = new WajahatBaig();
me.build().then(result => console.log("✨ Magic!"));
\`\`\`

</td>
</tr>
</table>

---

<div align="center">

## \`⚡ TECH_STACK.json\`

</div>

\`\`\`json
{
  "frontend": {
    "frameworks": ["React", "Next.js", "Vue.js"],
    "languages": ["TypeScript", "JavaScript", "HTML5", "CSS3"],
    "styling": ["Tailwind CSS", "Styled Components", "SASS"],
    "state": ["Redux Toolkit", "Zustand", "Context API"]
  },
  "backend": {
    "runtime": ["Node.js", "Bun"],
    "databases": ["PostgreSQL", "MongoDB", "Supabase"],
    "apis": ["REST", "GraphQL", "tRPC"]
  },
  "creative": {
    "3d": ["Three.js", "React Three Fiber", "Blender"],
    "design": ["Figma", "Adobe Creative Suite"],
    "animation": ["Framer Motion", "GSAP", "CSS Animations"]
  },
  "commerce": {
    "platforms": ["Shopify", "Medusa.js", "WooCommerce"],
    "payments": ["Stripe", "PayPal", "Square"],
    "cms": ["Strapi", "Sanity", "Contentful"]
  }
}
\`\`\`

---

<div align="center">

## \`📦 FEATURED_PROJECTS\`

</div>

{{FEATURED_PROJECTS}}

---

<div align="center">

## \`🎯 ALL_PROJECTS\`

</div>

{{ALL_PROJECTS_TABLE}}

---

<div align="center">

## \`📈 PERFORMANCE_METRICS\`

</div>

<div align="center">

| Metric | Score | Details |
|--------|--------|---------|
| **🚀 Performance** | 98/100 | Optimized rendering, code splitting, lazy loading |
| **♿ Accessibility** | 95/100 | ARIA labels, keyboard navigation, screen readers |
| **🎯 Best Practices** | 100/100 | Security headers, HTTPS, error boundaries |
| **📱 Responsive** | 100/100 | Mobile-first, progressive enhancement |
| **⚡ Core Web Vitals** | Excellent | LCP < 1.2s, FID < 100ms, CLS < 0.1 |

</div>

\`\`\`mermaid
graph TD
    A[User Request] --> B{Route Handler}
    B --> C[SSG Pages]
    B --> D[ISR Pages] 
    B --> E[API Routes]
    C --> F[CDN Cache]
    D --> G[Background Revalidation]
    E --> H[Database Query]
    F --> I[Lightning Fast ⚡]
    G --> I
    H --> I
\`\`\`

---

<div align="center">

## \`🎨 DESIGN_PHILOSOPHY\`

</div>

<table align="center">
<tr>
<td width="25%" align="center">

**🎯 USER-FIRST**
\`\`\`
Every pixel serves
a purpose. Every 
interaction tells
a story.
\`\`\`

</td>
<td width="25%" align="center">

**⚡ PERFORMANCE**
\`\`\`
Fast by default.
Optimized for speed,
built for scale.
\`\`\`

</td>
<td width="25%" align="center">

**♿ ACCESSIBLE**
\`\`\`
Inclusive design.
Everyone deserves
great experiences.
\`\`\`

</td>
<td width="25%" align="center">

**🧪 INNOVATIVE**
\`\`\`
Pushing boundaries
with cutting-edge
technology.
\`\`\`

</td>
</tr>
</table>

---

<div align="center">

## \`📊 GITHUB_ANALYTICS\`

<img height="180em" src="https://github-readme-stats.vercel.app/api?username=waji200&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true&hide_border=true"/>
<img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=waji200&layout=compact&langs_count=7&theme=tokyonight&hide_border=true"/>

<img src="https://streak-stats.demolab.com/?user=waji200&theme=tokyonight&hide_border=true" />

<img src="https://github-profile-trophy.vercel.app/?username=waji200&theme=tokyonight&no-frame=true&no-bg=true&margin-w=4" />

</div>

---

<div align="center">

## \`🌐 CONNECT_WITH_ME\`

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-FF6B6B?style=for-the-badge&logo=firefox&logoColor=white)](https://devignity.com/portfolio)
[![LinkedIn](https://img.shields.io/badge/💼_LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wajahat-baig-2b4b2212a/)
[![Email](https://img.shields.io/badge/📧_Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:workwithdevignity@gmail.com)
[![Behance](https://img.shields.io/badge/🎨_Behance-1769FF?style=for-the-badge&logo=behance&logoColor=white)](https://behance.net/wajahatbaig)

</div>

---

<div align="center">

\`\`\`ascii
╭─────────────────────────────────────────────────────────────────╮
│                                                                 │
│  "The best way to predict the future is to create it."         │
│                                                                 │  
│  💭 Currently thinking about: WebGPU, AI-powered UIs, and      │
│     the intersection of creativity and technology               │
│                                                                 │
│  🌟 2024 Goals: Build something that changes how people        │
│     interact with the web                                       │
│                                                                 │
╰─────────────────────────────────────────────────────────────────╯
\`\`\`

<img src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake-dark.svg" alt="Snake animation" />

**⭐ Star my repos if you find them interesting!**

</div>`;

// Helper functions
function getCategoryEmoji(category) {
  const emojiMap = {
    '3D Modeling & Rendering': '🧊',
    'Web Development & AI': '🧠',
    'Full-Stack Development': '🛸',
    'Mobile Development': '📱',
    'Game Development': '🎮',
    'Data Science': '📊',
    'DevOps': '⚙️',
    'Creative Development': '🎵',
    'Performance Engineering': '⚗️'
  };
  return emojiMap[category] || '💎';
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

function generateProjectDiagram(project) {
  const category = project.category || 'Development';
  const emoji = getCategoryEmoji(category);
  
  const diagrams = {
    '3D Modeling & Rendering': `    ${emoji} 3D PIPELINE
┌─────────────────┐
│   📐 Modeling   │
│       ⬇        │  
│  🎨 Materials   │
│       ⬇        │
│  💡 Lighting    │
│       ⬇        │
│  📸 Rendering   │
│       ⬇        │
│  ✨ Post-Pro    │
└─────────────────┘
  Industrial → Art`,
    
    'Web Development & AI': `   ${emoji} AI PIPELINE
       ╭─────╮
   ╭───│ GPU │───╮
   │   ╰─────╯   │
╭──▼───╮   ╭───▼──╮
│Layer1│◄──┤Layer2│
╰──────╯   ╰──────╯
     │         │
┌────▼─────────▼────┐
│   3D RENDERING    │
└───────────────────┘`,
    
    'Full-Stack Development': `  ${emoji} MICROSERVICES
┌───────────────────┐
│   API Gateway     │
├───────────────────┤
│ 🛍️ Products API   │
│ 💳 Payments API   │  
│ 📦 Orders API     │
│ 👤 Users API      │
│ 📊 Analytics API  │
└─────────┬─────────┘
          │
     ┌────▼────┐
     │ 3D VIEW │
     └─────────┘`,
     
    'default': `    ${emoji} WORKFLOW
┌─────────────────┐
│   📋 Planning   │
│       ⬇        │  
│  🔨 Building    │
│       ⬇        │
│  🧪 Testing     │
│       ⬇        │
│  🚀 Deploy      │
└─────────────────┘`
  };
  
  return diagrams[category] || diagrams.default;
}

function generateFeaturedProjects(projects) {
  const featured = projects.filter(p => p.featured);
  
  return featured.map(project => {
    const emoji = getCategoryEmoji(project.category);
    const techBadges = project.technologies.join(' • ');
    const diagram = generateProjectDiagram(project);
    
    return `<!-- ${project.title.toUpperCase().replace(/\s+/g, ' ')} -->
<details>
<summary>
<strong>${emoji} ${project.title.toUpperCase().replace(/\s+/g, '_')}</strong> — <em>${project.description}</em>
<br>
<sub>${techBadges}</sub>
</summary>

<br>

<table>
<tr>
<td width="60%">

**🎯 CONCEPT**  
${project.content || project.description}

**⚡ CHALLENGE**  
${project.challenge || 'Creating an innovative solution that pushes technical boundaries while maintaining excellent user experience.'}

**🛠️ SOLUTION**  
${project.solution || 'Implemented cutting-edge technologies with optimized architecture and performance-first approach.'}

**📊 RESULTS**  
${project.results || 'Successfully delivered a high-performance, scalable solution that exceeded expectations.'}

**🔧 TECHNOLOGIES**  
${project.technologies.map(tech => `- ${tech}`).join('\n')}

</td>
<td width="40%" align="center">

\`\`\`
${diagram}
\`\`\`

**📅 TIMELINE**  
- Created: ${formatDate(project.createdAt)}${project.updatedAt ? `\n- Updated: ${formatDate(project.updatedAt)}` : ''}${project.duration ? `\n- Duration: ${project.duration}` : ''}
- Category: ${project.category}

**🔗 LINKS**  
- [🚀 Live Demo](${project.link})
- [📋 Repository](${project.link.replace('behance.net', 'github.com').replace('/gallery/', '/repo/')})

</td>
</tr>
</table>

</details>

`;
  }).join('');
}

function generateAllProjectsTable(projects) {
  const rows = projects.map(project => {
    const emoji = getCategoryEmoji(project.category);
    const techStack = project.technologies.slice(0, 3).map(tech => `<code>${tech}</code>`).join('<br>');
    const linkText = project.link.includes('behance') ? '🎨 View' : 
                    project.link.includes('github') ? '📋 Code' : '🚀 Demo';
    
    return `<tr>
<td><strong>${project.title}</strong><br><small>${project.category}</small></td>
<td>${project.description}</td>
<td align="center">${techStack}</td>
<td align="center"><a href="${project.link}">${linkText}</a></td>
</tr>`;
  }).join('');

  return `<table align="center" width="100%">
<tr>
<th align="left" width="25%">🎯 Project</th>
<th align="left" width="35%">📝 Description</th>
<th align="center" width="25%">🛠️ Tech Stack</th>
<th align="center" width="15%">🔗 Links</th>
</tr>
${rows}
</table>`;
}

function generateReadme() {
  try {
    // Read projects data
    const projectsPath = path.join(__dirname, 'projects.json');
    if (!fs.existsSync(projectsPath)) {
      console.error('❌ projects.json not found! Please create projects.json in the same directory.');
      process.exit(1);
    }
    
    const projectsData = fs.readFileSync(projectsPath, 'utf8');
    const projects = JSON.parse(projectsData);
    
    if (!Array.isArray(projects)) {
      throw new Error('Projects data should be an array');
    }
    
    console.log(`✅ Found ${projects.length} projects`);
    console.log(`📌 Featured projects: ${projects.filter(p => p.featured).length}`);
    
    // Generate sections
    const featuredProjects = generateFeaturedProjects(projects);
    const allProjectsTable = generateAllProjectsTable(projects);
    
    // Replace placeholders in template
    const finalReadme = readmeTemplate
      .replace('{{FEATURED_PROJECTS}}', featuredProjects)
      .replace('{{ALL_PROJECTS_TABLE}}', allProjectsTable);
    
    // Write README.md
    fs.writeFileSync('README.md', finalReadme);
    
    console.log('🎉 README.md generated successfully!');
    console.log('📁 File saved as: README.md');
    
    return true;
    
  } catch (error) {
    console.error('❌ Error generating README:', error.message);
    console.log('\n💡 Make sure your projects.json has this structure:');
    console.log(`[
  {
    "title": "Project Name",
    "description": "Brief description",
    "category": "3D Modeling & Rendering",
    "technologies": ["Blender", "Photoshop"],
    "link": "https://project-url.com",
    "featured": true,
    "createdAt": "2023-09-14",
    "content": "Detailed project description...",
    "challenge": "What was difficult...",
    "solution": "How you solved it...",
    "results": "What you achieved..."
  }
]`);
    return false;
  }
}


// Run if called directly
if (require.main === module) {
  generateReadme();
}

module.exports = { generateReadme };
