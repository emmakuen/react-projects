export const portfolioTypes = [
  {
    id: "all",
    text: "See All",
  },
  {
    id: "web",
    text: "Web App",
  },
  {
    id: "mobile",
    text: "Mobile App",
  },
  {
    id: "design",
    text: "Design",
  },
  {
    id: "bi",
    text: "BI Dashboard",
  },
];

export const portfolios = [
  {
    id: "web1",
    title: "Chat App Website",
    subtitle: "Landing Page",
    imgSrc: "/assets/images/portfolio/web1.png",
    explanation: "Beautiful landing page for a chat app.",
    portfolioType: ["web", "design"],
    frameworks: ["Figma", "Webflow"],
    url: "",
  },
  {
    id: "bi2",
    title: "Delivery KPI",
    subtitle: "BI Dashboard",
    imgSrc: "/assets/images/portfolio/dashboard2.jpg",
    explanation:
      "Modern KPI dashboard that visualizes delivery efficiency of Olist.",
    portfolioType: ["bi", "design"],
    frameworks: ["Figma", "Tableau"],
    url: "https://public.tableau.com/views/Olist-DeliveryEfficiencyModernDashboard/Main?:language=en-US&:display_count=n&:origin=viz_share_link",
  },
  {
    id: "web2",
    title: "Color Picker",
    subtitle: "React Project",
    imgSrc: "/assets/images/portfolio/web2.jpg",
    explanation:
      "Responsive app where you can generate and collect color palettes",
    portfolioType: ["web"],
    frameworks: ["React", "Material UI", "JSS"],
    url: "https://emmaku-colors.netlify.app/",
  },
  {
    id: "web3",
    title: "3D Portfolio",
    subtitle: "Three.js Project",
    imgSrc: "/assets/images/portfolio/web3.jpg",
    explanation: "Portfolio webpage with 3D scroll animation",
    portfolioType: ["web"],
    frameworks: ["Three.js"],
    url: "https://emmaku-threejs-project.netlify.app/",
  },
  // {
  //   id: "design1",
  //   title: "Project title",
  //   subtitle: "Project Subtitle",
  //   imgSrc: "/assets/images/portfolio/design1.jpg",
  //   explanation:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, rerum?",
  //   portfolioType: "design",
  //   frameworks: ["Figma"],
  // },
  // {
  //   id: "design2",
  //   title: "Project title",
  //   subtitle: "Project Subtitle",
  //   imgSrc: "/assets/images/portfolio/design2.jpg",
  //   explanation:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, rerum?",
  //   portfolioType: "design",
  //   frameworks: ["Figma", "Dribbble"],
  // },
  {
    id: "bi1",
    title: "Amazon's Profitability",
    subtitle: "BI Dashboard",
    imgSrc: "/assets/images/portfolio/dashboard1.jpg",
    explanation:
      "Detailed analysis of how Amazon spends its cash flow to fuel growth.",
    portfolioType: ["bi"],
    frameworks: ["Figma", "Tableau"],
    url: "https://public.tableau.com/views/AmazonsTinyProfit1/ChasingGrowth?:language=en-US&:toolbar=n&:display_count=n&:origin=viz_share_link",
  },

  {
    id: "bi3",
    title: "HR Statistics",
    subtitle: "BI Dashboard",
    imgSrc: "/assets/images/portfolio/dashboard3.jpg",
    explanation:
      "KPI dashboard visualizing termination rate by various key factors.",
    portfolioType: ["bi", "design"],
    frameworks: ["Tableau"],
    url: "https://public.tableau.com/views/TerminationStatistics/Dashboard3?:language=en-US&:display_count=n&:origin=viz_share_link",
  },
];
