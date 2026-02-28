const fs = require('fs');

let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

const svInjection = `
    // Extra
    'about.learnMore': 'Läs mer om oss',
    'whatwedo.description': 'Vi arbetar för att göra den digitala världen tillgänglig för alla',
    'tags.education': 'Digital utbildning',
    'tags.community': 'Gemenskap',
    'tags.inclusion': 'Inkludering',
    'tags.innovation': 'Innovation',
    'org.badge': 'Vår organisation',
    'org.title': 'Strukturerad för påverkan',
    'org.description': 'Vi är organiserade för att effektivt förverkliga vårt uppdrag om digital inkludering för alla.',
    'org.dept.edu.title': 'Digital Utbildning',
    'org.dept.edu.desc': 'Utvecklar kursplaner och pedagogiska workshops.',
    'org.dept.community.title': 'Samhällsengagemang',
    'org.dept.community.desc': 'Bygger relationer med lokalsamhället och partners.',
    'org.dept.support.title': 'Teknisk Support',
    'org.dept.support.desc': 'Erbjuder praktisk hjälp och teknisk vägledning.',
    'org.dept.innovation.title': 'Innovationslabb',
    'org.dept.innovation.desc': 'Utforskar nya teknologier och digitala verktyg.',
`;

const enInjection = `
    // Extra
    'about.learnMore': 'Learn more about us',
    'whatwedo.description': 'We work to make the digital world accessible to everyone',
    'tags.education': 'Digital Education',
    'tags.community': 'Community',
    'tags.inclusion': 'Inclusion',
    'tags.innovation': 'Innovation',
    'org.badge': 'Our organization',
    'org.title': 'Structured for impact',
    'org.description': 'We are organized to effectively realize our mission of digital inclusion for all.',
    'org.dept.edu.title': 'Digital Education',
    'org.dept.edu.desc': 'Developing curriculum and educational workshops.',
    'org.dept.community.title': 'Community Outreach',
    'org.dept.community.desc': 'Building relationships with local communities and partners.',
    'org.dept.support.title': 'Technical Support',
    'org.dept.support.desc': 'Providing hands-on assistance and technical guidance.',
    'org.dept.innovation.title': 'Innovation Lab',
    'org.dept.innovation.desc': 'Exploring new technologies and digital tools.',
`;

// Insert into SV block
const svIndex = content.indexOf('  sv: {');
const svEndIndex = content.indexOf('  },', svIndex);
content = content.substring(0, svEndIndex) + svInjection + content.substring(svEndIndex);

// Insert into EN block
const enIndex = content.indexOf('  en: {');
const enEndIndex = content.indexOf('  },', enIndex);
content = content.substring(0, enEndIndex) + enInjection + content.substring(enEndIndex);

fs.writeFileSync('src/context/LanguageContext.tsx', content, 'utf8');
console.log('Injected translations successfully!');
