"""Run from the ORIGINAL cloned repo root after overlaying kit files."""
from pathlib import Path
p=Path('portfolio')
assert (p/'src/main.tsx').is_file(), 'Run from repository root (folder containing portfolio/)'

def patch(rel, changes):
    path=p/rel
    s=path.read_text(encoding='utf8')
    for old,new in changes:
        if old not in s:
            # The script may be run more than once.  Do not report a warning
            # when this exact change has already been applied (or an earlier,
            # longer replacement in this run superseded this one).
            if new and new not in s:
                print('WARNING: text not found in',rel,repr(old[:50]))
        else:
            s=s.replace(old,new)
    path.write_text(s,encoding='utf8')

patch('src/main.tsx', [
 ('tasmin-portfolio-motion','letizia-portfolio-motion'),
 ('Purposeful products. Thoughtful engineering.<br/>A closer look at what I’ve been building.', 'Research, engineering, and healthcare AI.<br/>A closer look at my projects.'),
 ('Explore more of my development journey.', 'Explore my engineering and research journey.'),
 ('THE PERSON BEHIND THE CODE','ABOUT ME'),
 ('Curious mind.<br/><span>Builder at heart.</span>', 'Mathematical mind.<br/><span>Driven by impact.</span>'),
 ('<span>TA</span><span className="monogram-caption">DHAKA · BANGLADESH</span>', '<span>LC</span><span className="monogram-caption">MILAN · ITALY</span>'),
 ('I build at the intersection of technology and business.', 'I work at the intersection of mathematics, machine learning, and healthcare.'),
 ('I’m interested in scalable architecture, connected commerce, and making complex workflows feel simple. I enjoy the whole journey: understanding the problem, building the solution, and improving it with the people who use it.', 'I enjoy translating challenging quantitative problems into tools that can make an impact. My interests include statistical learning, medical image analysis, and data-driven decision-making.'),
 ('Experience that connects engineering,<br/>people, and business.', 'Experience across healthcare engineering,<br/>data analytics, and research.'),
 ('Built with curiosity & a little caffeine.', 'Built with curiosity and mathematical thinking.'),
 ('<span>CONCEPT ART</span>', '<span>PROJECT ART</span>'),
 ('<h3>What I built</h3>', '<h3>Project highlights</h3>'),
 ('alt={selected.title+\' live website screenshot\'}', 'alt={selected.title+\' project image\'}'),
 ('alt={p.title+\' live website screenshot\'}', 'alt={p.title+\' project image\'}'),
 ('<p>Purposeful products. Thoughtful engineering.', '<p>Research, engineering, and healthcare AI.'),
 ])
patch('src/components/Hero.tsx', [
 ('Software Engineer <span>|</span> Full Stack Developer', '{site.role}'),
 ('I build scalable applications and modern digital experiences.<br className="desktop-break"/> Turning complex business needs into software that just works.', '{site.intro}'),
 ('<b>Angular</b><i/><b>NestJS</b><i/><b>MongoDB</b>', '<b>Python</b><i/><b>PyTorch</b><i/><b>Machine Learning</b>'),
 ('tasmin / workspace', 'letizia / workspace'),
 ('developer.ts', 'researcher.ts'),
 ('“Dhaka, Bangladesh”', '“{site.location}”'),
 ('“Thoughtful systems”', '“Medical AI”'),
 ('“Meaningful experiences”', '“Statistical learning”'),
 ('ENGINEER BY TRADE. PROBLEM-SOLVER BY NATURE.', 'MATHEMATICS BY TRAINING. PROBLEM-SOLVING BY NATURE.'),
 ])
patch('index.html', [
 ('Tasmin Ahmed Oni | Software Engineer', 'Letizia Cazzaniga | Mathematical Engineer'),
 ('Tasmin Ahmed Oni — software engineer in Dhaka, building full-stack commerce, inventory and cross-platform applications.', 'Letizia Cazzaniga — Mathematical Engineer working on machine learning, medical imaging and data analytics.'),
 ('Full-stack development. Thoughtful systems. Real-world impact.', 'Mathematical engineering. Medical AI. Data-driven solutions.'),
 ('<link rel="icon" href="/assets/favicon.svg">', '<link rel="icon" href="/assets/favicon.svg">'),
 ('<meta property="og:url" content="https://tasmin-ahmed-oni-portfolio.berry-finch-5988.chatgpt.site">',''),
 ('<link rel="canonical" href="https://tasmin-ahmed-oni-portfolio.berry-finch-5988.chatgpt.site">',''),
 ])
(p/'src/components/TechStack.tsx').write_text('''import {motion} from 'framer-motion';
import {Code2, Braces, Database, GitBranch, Container, Layers, ChartNoAxesColumn, BrainCircuit} from 'lucide-react';
const technologies = [
 {name:'Python',tag:'Data & ML',icon:Code2,color:'#7cbcff'},
 {name:'PyTorch',tag:'Deep learning',icon:BrainCircuit,color:'#fb7e98'},
 {name:'Scikit-learn',tag:'Machine learning',icon:Layers,color:'#8bdab1'},
 {name:'R',tag:'Statistical analysis',icon:Braces,color:'#a4b7ef'},
 {name:'Power BI',tag:'Business intelligence',icon:ChartNoAxesColumn,color:'#f3d778'},
 {name:'MONAI',tag:'Medical imaging',icon:Layers,color:'#f983a3'},
 {name:'OpenCV',tag:'Computer vision',icon:Database,color:'#8bdab1'},
 {name:'Git & GitHub',tag:'Version control',icon:GitBranch,color:'#ffa98b'},
 {name:'Docker',tag:'Containers',icon:Container,color:'#7cbcff'}
];
export function TechStack({animate}:{animate:boolean}){
 return <section id="skills" className="section tech-section"><div className="section-heading"><div><p className="eyebrow">03 / MY TOOLKIT</p><h2>The tools behind<br/>the <span>research.</span></h2></div><p>From statistical models to medical imaging.<br/>A toolkit built for applied problem solving.</p></div><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">{technologies.map(({name,tag,icon:Icon,color})=><motion.div key={name} className="tech-card group" whileHover={animate?{y:-4}:undefined}><Icon size={25} style={{color}}/><h3>{name}</h3><p>{tag}</p><span className="tech-corner">↗</span></motion.div>)}</div></section>;
}
''',encoding='utf8')
print('Personalized React content applied. Review TODO links in portfolio/src/site.ts.')
