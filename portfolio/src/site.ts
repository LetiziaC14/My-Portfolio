import {publicPath} from './paths';
import type {Project} from './types';

// Personal content for Letizia Cazzaniga. Replace placeholder project links once public.
export const site = {
  name: 'Letizia Cazzaniga',
  shortName: 'Letizia',
  location: 'Milan, Italy',
  role: 'Mathematical Engineer · AI & Healthcare',
  email: 'letizia.cazzaniga.ds@gmail.com',
  github: 'https://github.com/LetiziaC14',
  linkedin: 'https://www.linkedin.com/in/letizia-cazzaniga/',
  resume: publicPath('assets/Letizia_Cazzaniga_CV.pdf'),
  intro: 'I turn complex data into practical machine learning solutions, with a focus on healthcare and medical technology.',
  about: '',
  skills: [
    {name: 'Programming & Data Analysis', items: ['Python', 'R', 'C++', 'MATLAB', 'SQL']},
    {name: 'Machine Learning & Computer Vision', items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'Deep Learning', 'Predictive Modeling']},
    {name: 'Data Visualization & BI', items: ['Power BI', 'Matplotlib', 'Seaborn']},
    {name: 'Tools & Software', items: ['Microsoft Excel & Office Suite', 'Linux System', 'Git', 'Docker', 'Blender', '3D Slicer ']}
  ],
  experience: [
    {company: 'Huvant', role: 'R&D Engineer', dates: 'Sep 2025 — Present', detail: 'Developed and integrated AI-driven solutions for medical imaging, focusing on deep learning-based anatomical segmentation, MRI and ultrasound image processing, and 3D reconstruction.'},
    {company: 'Safetec srl', role: 'Data Analyst Intern', dates: 'Feb 2025 — Sep 2025', detail: 'Built and automated Power BI dashboards for business KPI monitoring; cleaned and processed business datasets.'},
  ],
  education: [
    {school: 'Politecnico di Milano', degree: 'MSc in Mathematical Engineering', year: '2023 — 2026', grade: 'Statistical learning · Machine learning · Bayesian statistics'},
    {school: 'NTNU · Trondheim', degree: 'Erasmus exchange', year: '2023', grade: 'International study experience'},
    {school: 'HTW Berlin', degree: 'Summer School · Data Science for Sustainable Finance', year: '2025', grade: 'Research project on ESG and credit risk'},
    {school: 'Politecnico di Milano', degree: 'BSc in Mathematical Engineering', year: '2019 — 2023', grade: 'Mathematics · Numerical analysis · Probability'}
  ]
};

export const projects: Project[] = [
  {id:'kidney-ai',title:'MRI Kidney Segmentation and 3D Reconstruction',category:'Medical Imaging',label:'FROM PIXELS TO ANATOMY.',summary:'AI-assisted anatomical segmentation, 3D modeling and quantitative analysis for policystic kidney disease.',description:'Work on workflows for kidney and cyst segmentation, 3D reconstruction and quantitative anatomical analysis.',details:['Medical imaging preprocessing and segmentation workflows.','Post-processing and anatomical model generation.','Evaluation of model outputs and reconstruction quality.'],tools:['Python','PyTorch','nnU-Net','3D Imaging'],graphic:'pharma',image:publicPath('assets/projects/kidney.png'),privateSource:true},
  {id:'us-reconstruction',title:'3D Reconstruction of Arm Ultrasound images',category:'3D Reconstruction',label:'SEEING BEYOND 2D.',summary:'Exploring 3D vascular reconstruction from ultrasound.',description:'Research and development of an ultrasound processing workflow for 3D visualization of arm vasculature.',details:['Ultrasound frame preprocessing and vessel segmentation.','Investigation of sensorless reconstruction and temporal tracking.','3D visualization of vascular anatomy.'],tools:['Python','Ultrasound','Computer Vision'],graphic:'commerce',image:publicPath('assets/projects/us-reconstruction.png'),privateSource:true},
  {id:'neuroscience-networks',title:'Neural Networks · Expansion & Sparseness',category:'Research & ML',label:'HOW NETWORKS RESHAPE INFORMATION.',summary:'Investigating expansion, sparse representations and linear readout in random neural networks.',description:'MSc thesis research investigating Deep Learning models for neuroscience classification tasks, analyzing information expansion and sparsity across different neural network architectures. Conducted in collaboration with the Department of Computing Sciences at Bocconi University.',details:['Studied expansion and sparseness in random feedforward networks using analytical predictions and simulations.','Explored extensions involving non-zero-mean synaptic weights, sparse connections and recurrent rate networks.','Investigated the effect of neural representations on linear readout and classification of noisy patterns.','Research code is being reorganized and documented; results are not presented as a finalized software package.'],tools:['Python','NumPy','Matplotlib','Neural Networks','Computational Neuroscience'],graphic:'academic',image:publicPath('assets/projects/neural_networks.png'),sourceUrl:'https://github.com/LetiziaC14/Neuroscience_Network_Models'},
  {id:'bayesian-opt',title:'Bayesian Optimization',category:'Research & ML',label:'SEARCH SMARTER.',summary:'Optimizing expensive black-box functions.',description:'Academic project studying Bayesian optimization for mixed-variable black-box problems.',details:['Surrogate modeling for black-box objectives.','Exploration–exploitation with acquisition strategies.','Quantitative evaluation of optimization performance.'],tools:['Python','Gaussian Processes','Optimization'],graphic:'books',image:publicPath('assets/projects/MALIBOO.png'),
sourceUrl:'https://github.com/LetiziaC14/d-MALIBOO'
  },
  {id:'readmission',title:'Hospital Readmission Prediction',category:'Research & ML',label:'DATA FOR HEALTHCARE.',summary:'Predictive modeling for heart failure readmission.',description:'Academic machine learning project investigating hospital readmission within 6 months for heart failure patients.',details:['Data preprocessing and predictive modeling.','Evaluation of model performance.','Interpretation of clinical prediction results.'],tools:['Python','Machine Learning','Healthcare'],graphic:'pharma',image:publicPath('assets/projects/hospital_reamission.png'),
    sourceUrl:'https://github.com/LetiziaC14/Hospital-Readmission-Prediction'
  },
  {
  id: 'eco-risk-alpha',
  title: 'Eco-Risk Alpha | ESG & Credit Risk Modeling',
  category: 'Financial Data Science',
  label: 'FROM ESG DATA TO FINANCIAL RISK INSIGHTS.',
  summary: 'Exploring how corporate sustainability performance relates to credit spreads, counterparty risk and a potential green credit premium.',
  description: 'A quantitative finance project developed during an international Summer School in Sustainable Finance. The study investigates relationships between ESG indicators and credit risk by combining statistical analysis, predictive modeling and Credit Valuation Adjustment (CVA). The objective is to assess whether stronger ESG performance is associated with lower credit risk.',
  details: [
    'Exploratory analysis of corporate ESG scores, financial variables and CDS spreads.',
    'Regression modeling and feature selection to investigate ESG-related credit risk factors.',
    'Machine learning models for predicting credit spreads, evaluated using cross-validation.',
    'Computation of Credit Valuation Adjustment (CVA) from default intensities, exposure profiles and discount factors.',
    'Comparison of observed and model-implied CVA to investigate potential green credit premium effects.'
  ],
  tools: ['Python', 'Pandas', 'Scikit-learn', 'Statistical Modeling', 'CVA'],
  graphic: 'finance',
  image: publicPath('assets/projects/esg.png'),
  sourceUrl: 'https://github.com/LetiziaC14/Eco-risk-alpha-'
},
];
