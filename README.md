<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wajahat Baig - GitHub Profile Generator</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
            color: #e0e6ed;
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .header {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .title {
            font-size: 2.5rem;
            background: linear-gradient(135deg, #00f7ff, #ff6b6b);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
        }
        
        .subtitle {
            color: #b8bcc8;
            font-size: 1.1rem;
            margin-bottom: 20px;
        }
        
        .input-section {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 30px;
        }
        
        .section-title {
            font-size: 1.5rem;
            color: #00f7ff;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .json-input {
            width: 100%;
            height: 300px;
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            padding: 20px;
            font-family: inherit;
            color: #e0e6ed;
            font-size: 14px;
            resize: vertical;
            transition: all 0.3s ease;
        }
        
        .json-input:focus {
            outline: none;
            border-color: #00f7ff;
            box-shadow: 0 0 20px rgba(0, 247, 255, 0.3);
        }
        
        .generate-btn {
            background: linear-gradient(135deg, #00f7ff, #ff6b6b);
            border: none;
            padding: 15px 30px;
            border-radius: 12px;
            color: white;
            font-weight: bold;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 20px;
        }
        
        .generate-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 30px rgba(0, 247, 255, 0.4);
        }
        
        .output-section {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 16px;
            padding: 30px;
        }
        
        .markdown-output {
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 12px;
            padding: 20px;
            font-family: inherit;
            color: #e0e6ed;
            font-size: 14px;
            white-space: pre-wrap;
            max-height: 600px;
            overflow-y: auto;
            line-height: 1.6;
        }
        
        .copy-btn {
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 10px 20px;
            border-radius: 8px;
            color: #e0e6ed;
            cursor: pointer;
            margin-top: 15px;
            font-family: inherit;
            transition: all 0.3s ease;
        }
        
        .copy-btn:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-1px);
        }
        
        .example-data {
            background: rgba(0, 247, 255, 0.1);
            border: 1px solid rgba(0, 247, 255, 0.3);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
        }
        
        .load-example-btn {
            background: rgba(0, 247, 255, 0.2);
            border: 1px solid rgba(0, 247, 255, 0.4);
            padding: 8px 16px;
            border-radius: 8px;
            color: #00f7ff;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s ease;
        }
        
        .load-example-btn:hover {
            background: rgba(0, 247, 255, 0.3);
        }
        
        .tech-badge {
            background: linear-gradient(135deg, rgba(0, 247, 255, 0.2), rgba(255, 107, 107, 0.2));
            border: 1px solid rgba(255, 255, 255, 0.2);
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            margin: 2px;
            display: inline-block;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 class="title">🚀 GitHub README Generator</h1>
            <p class="subtitle">Transform your projects JSON into a stunning GitHub profile</p>
        </div>
        
        <div class="input-section">
            <h2 class="section-title">📝 Projects JSON Input</h2>
            
            <div class="example-data">
                <p style="margin-bottom: 10px; color: #00f7ff;">💡 <strong>Example JSON Structure:</strong></p>
                <p style="font-size: 14px; color: #b8bcc8; margin-bottom: 10px;">Paste an array of project objects with this structure:</p>
                <button class="load-example-btn" onclick="loadExampleData()">Load Example Data</button>
            </div>
            
            <textarea 
                class="json-input" 
                id="jsonInput" 
                placeholder="Paste your projects JSON array here...

Example:
[
  {
    title: 'Amazing Project',
    description: 'Project description...',
    technologies: ['React', 'Node.js'],
    link: 'https://github.com/...',
    // ... other fields
  }
]"
            ></textarea>
            
            <button class="generate-btn" onclick="generateReadme()">✨ Generate README</button>
        </div>
        
        <div class="output-section">
            <h2 class="section-title">📋 Generated README.md</h2>
            <div class="markdown-output" id="output">Generated README will appear here...</div>
            <button class="copy-btn" onclick="copyToClipboard()">📄 Copy to Clipboard</button>
        </div>
    </div>

    <script>
        const exampleData = [
            {
                title: "Kreuz Container 3D Modeling",
                description: "High-fidelity 3D model and render of an industrial Kreuz container, showcasing realism, lighting, and material accuracy for commercial visualization.",
                id: "kreuz-container-3d-modeling",
                createdAt: "2023-09-14",
                updatedAt: "2023-09-25",
                category: "3D Modeling & Rendering",
                image: "/projects/kreuzContainer/kreuz-container-3d-hero.png",
                technologies: ["Blender", "Cycles", "Photoshop", "Figma"],
                link: "https://www.behance.net/gallery/207395907/Kreuz-Container-3d-modeling-and-rendering",
                featured: true,
                slug: "kreuz-container-3d-modeling",
                content: "This project involved modeling and rendering a Kreuz container with high realism and attention to detail. The objective was to produce clean, presentation-ready visuals suitable for promotional or commercial use.",
                challenge: "Capturing industrial realism while maintaining a clean and modern render style.",
                solution: "The container was modeled in Blender with custom materials using shader nodes.",
                results: "The final renders were well-received for their realistic detail and presentation value."
            },
            {
                title: "Neural Network Visualizer",
                description: "Interactive 3D visualization platform for neural networks using Three.js and TensorFlow.js",
                id: "neural-network-viz",
                createdAt: "2023-10-01",
                category: "Web Development & AI",
                technologies: ["React", "Three.js", "TensorFlow.js", "WebGL"],
                link: "https://github.com/waji200/neural-viz",
                featured: true,
                content: "Revolutionary 3D neural network visualizer that makes AI interpretable through immersive web experiences.",
                challenge: "Creating smooth 60fps animations with thousands of nodes and connections.",
                solution: "Implemented GPU-accelerated rendering with custom WebGL shaders and optimized geometry.",
                results: "Achieved smooth performance with complex visualizations, making AI more accessible."
            },
            {
                title: "E-Commerce Platform",
                description: "Modern headless e-commerce solution with 3D product previews",
                id: "ecommerce-platform",
                createdAt: "2023-08-15",
                category: "Full-Stack Development",
                technologies: ["Next.js", "Medusa.js", "PostgreSQL", "Stripe"],
                link: "https://github.com/waji200/ecommerce-platform",
                featured: false,
                content: "Headless e-commerce platform with advanced features and modern UX.",
                challenge: "Building scalable architecture with real-time inventory management.",
                solution: "Microservices architecture with Redis caching and automated testing.",
                results: "Successfully handles high-traffic loads with excellent performance metrics."
            }
        ];

        function loadExampleData() {
            document.getElementById('jsonInput').value = JSON.stringify(exampleData, null, 2);
        }

        function generateReadme() {
            const input = document.getElementById('jsonInput').value;
            
            if (!input.trim()) {
                alert('Please enter some JSON data first!');
                return;
            }
            
            try {
                const projects = JSON.parse(input);
                const readme = generateMarkdown(projects);
                document.getElementById('output').textContent = readme;
            } catch (error) {
                alert('Invalid JSON format. Please check your data.');
                console.error(error);
            }
        }

        function generateMarkdown(projects) {
            const featuredProjects = projects.filter(p => p.featured);
            const allProjects = projects;
            
            return `<div align="center">

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

## \`📦 FEATURED_PROJECTS\`

</div>

${generateProjectsMarkdown(featuredProjects)}

<div align="center">

## \`🎯 ALL_PROJECTS\`

</div>

${generateAllProjectsTable(allProjects)}

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

---

<div align="center">

## \`📊 GITHUB_ANALYTICS\`

<img height="180em" src="https://github-readme-stats.vercel.app/api?username=waji200&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true&hide_border=true"/>
<img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=waji200&layout=compact&langs_count=7&theme=tokyonight&hide_border=true"/>

<img src="https://streak-stats.demolab.com/?user=waji200&theme=tokyonight&hide_border=true" />

</div>

---

<div align="center">

## \`🌐 CONNECT_WITH_ME\`

[![Portfolio](https://img.shields.io/badge/🌐_Portfolio-FF6B6B?style=for-the-badge&logo=firefox&logoColor=white)](https://devignity.com/portfolio)
[![LinkedIn](https://img.shields.io/badge/💼_LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wajahat-baig-2b4b2212a/)
[![Email](https://img.shields.io/badge/📧_Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:workwithdevignity@gmail.com)

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
        }

        function generateProjectsMarkdown(projects) {
            return projects.map(project => {
                const techBadges = project.technologies.map(tech => `\`${tech}\``).join(' • ');
                const emoji = getCategoryEmoji(project.category);
                
                return `<!-- ${project.title} -->
<details>
<summary>
<strong>${emoji} ${project.title.toUpperCase().replace(/ /g, '_')}</strong> — <em>${project.description}</em>
<br>
<sub>${techBadges}</sub>
</summary>

<br>

<table>
<tr>
<td width="60%">

**🎯 CONCEPT**
${project.content}

**⚡ CHALLENGE**
${project.challenge || 'Creating an innovative solution that pushes technical boundaries.'}

**🛠️ SOLUTION**
${project.solution || 'Implemented cutting-edge technologies with optimized architecture.'}

**📊 RESULTS**
${project.results || 'Successfully delivered a high-performance, scalable solution.'}

**🔧 TECHNOLOGIES**
${project.technologies.map(tech => `- ${tech}`).join('\n')}

</td>
<td width="40%" align="center">

\`\`\`
${generateProjectDiagram(project)}
\`\`\`

**📅 TIMELINE**
- Created: ${formatDate(project.createdAt)}
- Updated: ${formatDate(project.updatedAt)}
- Category: ${project.category}

**🔗 LINKS**
- [🚀 Live Demo](${project.link})
- [📋 Repository](${project.link})

</td>
</tr>
</table>

</details>

`;
            }).join('');
        }

        function generateAllProjectsTable(projects) {
            return `<table align="center" width="100%">
<tr>
<th width="30%">🎯 Project</th>
<th width="40%">📝 Description</th>
<th width="20%">🛠️ Tech Stack</th>
<th width="10%">🔗 Links</th>
</tr>
${projects.map(project => `<tr>
<td><strong>${project.title}</strong><br><small>${project.category}</small></td>
<td>${project.description}</td>
<td>${project.technologies.slice(0, 3).map(tech => `<code>${tech}</code>`).join('<br>')}</td>
<td><a href="${project.link}">🔗 View</a></td>
</tr>`).join('')}
</table>`;
        }

        function getCategoryEmoji(category) {
            const emojiMap = {
                '3D Modeling & Rendering': '🧊',
                'Web Development & AI': '🧠',
                'Full-Stack Development': '🛸',
                'Mobile Development': '📱',
                'Game Development': '🎮',
                'Data Science': '📊',
                'DevOps': '⚙️'
            };
            return emojiMap[category] || '💎';
        }

        function generateProjectDiagram(project) {
            const diagrams = [
                `    ${getCategoryEmoji(project.category)} ${project.category.toUpperCase()}
┌─────────────────┐
│   📋 Planning   │
│       ⬇        │  
│  🔨 Building    │
│       ⬇        │
│  🧪 Testing     │
│       ⬇        │
│  🚀 Deploy      │
└─────────────────┘`,
                `  🎯 ARCHITECTURE
┌───────────────┐
│  Frontend 🎨  │
├───────────────┤
│  Backend ⚙️   │
├───────────────┤
│  Database 💾  │
├───────────────┤
│  Deploy 🚀    │
└───────────────┘`,
                `   ${getCategoryEmoji(project.category)} WORKFLOW
Frontend ◄──► Backend
    │             │
    ▼             ▼
Database ◄──► Cache
    │             │
    ▼             ▼
  Users ◄──► Analytics`
            ];
            return diagrams[Math.floor(Math.random() * diagrams.length)];
        }

        function formatDate(dateString) {
            return new Date(dateString).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            });
        }

        function copyToClipboard() {
            const output = document.getElementById('output').textContent;
            if (output && output !== 'Generated README will appear here...') {
                navigator.clipboard.writeText(output).then(() => {
                    const btn = document.querySelector('.copy-btn');
                    btn.textContent = '✅ Copied!';
                    setTimeout(() => {
                        btn.textContent = '📄 Copy to Clipboard';
                    }, 2000);
                });
            } else {
                alert('Please generate a README first!');
            }
        }
    </script>
</body>
</html>
