import {motion} from 'framer-motion';
import {Code2, Braces, Database, GitBranch, Container, Layers, ChartNoAxesColumn, BrainCircuit, } from 'lucide-react';
const technologies = [
 {name:'Python',tag:'Data & ML',icon:Code2,color:'#7cbcff'},
 {name:'PyTorch',tag:'Deep learning',icon:BrainCircuit,color:'#fb7e98'},
 {name:'Scikit-learn',tag:'Machine learning',icon:Layers,color:'#8bdab1'},
 {name:'R',tag:'Statistical analysis',icon:Braces,color:'#a4b7ef'},
 {name:'C++',tag:'Systems programming',icon:Code2,color:'#7cbcff'},
 {name:'Power BI',tag:'Business intelligence',icon:ChartNoAxesColumn,color:'#f3d778'},
 {name:'MONAI',tag:'Medical imaging',icon:Layers,color:'#f983a3'},
 {name:'OpenCV',tag:'Computer vision',icon:Database,color:'#8bdab1'},
 {name:'Git & GitHub',tag:'Version control',icon:GitBranch,color:'#ffa98b'},
 {name:'Docker',tag:'Containers',icon:Container,color:'#7cbcff'},
 {name:'Blender',tag:'3D Modeling',icon:Layers,color:'#a4b7ef'},
];
export function TechStack({animate}:{animate:boolean}){
 return <section id="skills" className="section tech-section"><div className="section-heading"><div><p className="eyebrow">03 / MY TOOLKIT</p><h2>The tools behind<br/>the <span>research.</span></h2></div><p>From statistical models to medical imaging.<br/>A toolkit built for applied problem solving.</p></div><div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">{technologies.map(({name,tag,icon:Icon,color})=><motion.div key={name} className="tech-card group" whileHover={animate?{y:-4}:undefined}><Icon size={25} style={{color}}/><h3>{name}</h3><p>{tag}</p><span className="tech-corner">↗</span></motion.div>)}</div></section>;
}
