const fs = require('fs');

let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

const enIndex = content.indexOf('  en: {');
const arIndex = content.indexOf('  ar: {', enIndex);

if (enIndex > -1 && arIndex > -1) {
    let enBlock = content.substring(enIndex, arIndex);

    const replacements = {
        "'courses.title': 'Våra Kurser'": "'courses.title': 'Our Courses'",
        "'courses.subtitle': 'Lär dig digitala färdigheter på ditt sätt'": "'courses.subtitle': 'Learn digital skills your way'",
        "'courses.cta': 'Läs mer & anmäl dig'": "'courses.cta': 'Learn More & Enroll'",
        "'courses.beginner': 'Nybörjare'": "'courses.beginner': 'Beginner'",
        "'courses.intermediate': 'Medel'": "'courses.intermediate': 'Intermediate'",
        "'courses.advanced': 'Avancerad'": "'courses.advanced': 'Advanced'",
        "'courses.howItWorks': 'Så här fungerar det'": "'courses.howItWorks': 'How It Works'",
        "'courses.steps.register': 'Registrera dig'": "'courses.steps.register': 'Register'",
        "'courses.steps.choose': 'Välj kurs'": "'courses.steps.choose': 'Choose Course'",
        "'courses.steps.learn': 'Lär dig'": "'courses.steps.learn': 'Learn'",
        "'courses.steps.grow': 'Växa'": "'courses.steps.grow': 'Grow'",
        "'courses.faq': 'Vanliga frågor'": "'courses.faq': 'FAQ'",
        "'courses.faq.q1': 'Vilka förkunskaper behövs?'": "'courses.faq.q1': 'What prerequisites are needed?'",
        "'courses.faq.a1': 'Inga förkunskaper krävs för våra nybörjarkurser. Vi börjar från grunden!'": "'courses.faq.a1': 'No prerequisites are required for our beginner courses. We start from the basics!'",
        "'courses.faq.q2': 'Hur långa är kurserna?'": "'courses.faq.q2': 'How long are the courses?'",
        "'courses.faq.a2': 'De flesta kurser är mellan 4-10 veckor med 1-2 tillfällen per vecka.'": "'courses.faq.a2': 'Most courses are between 4-10 weeks with 1-2 sessions per week.'",
        "'courses.faq.q3': 'Kan jag delta online?'": "'courses.faq.q3': 'Can I participate online?'",
        "'courses.faq.a3': 'Ja, många av våra kurser erbjuds både fysiskt och online.'": "'courses.faq.a3': 'Yes, many of our courses are offered both in-person and online.'",
        "'courses.ctaTitle': 'Redo att börja din digitala resa?'": "'courses.ctaTitle': 'Ready to start your digital journey?'",
        "'courses.ctaText': 'Gå med i vår gemenskap och lär dig nya färdigheter tillsammans med oss'": "'courses.ctaText': 'Join our community and learn new skills together with us'",
        "'events.title': 'Evenemang'": "'events.title': 'Events'",
        "'events.subtitle': 'Delta i våra aktiviteter och workshops'": "'events.subtitle': 'Join our activities and workshops'",
        "'events.upcoming': 'Kommande evenemang'": "'events.upcoming': 'Upcoming Events'",
        "'events.past': 'Tidigare evenemang'": "'events.past': 'Past Events'",
        "'events.register': 'Anmäl dig'": "'events.register': 'Register'",
        "'events.suggest': 'Föreslå en aktivitet'": "'events.suggest': 'Suggest an Activity'",
        "'events.volunteer': 'Bli volontär'": "'events.volunteer': 'Become a Volunteer'",
        "'events.ctaTitle': 'Vill du hålla i en aktivitet?'": "'events.ctaTitle': 'Want to host an activity?'",
        "'events.ctaText': 'Vi tar gärna emot dina idéer för framtida evenemang och samarbeten.'": "'events.ctaText': 'We welcome your ideas for future events and collaborations.'",
        "'getInvolved.title': 'Engagera dig'": "'getInvolved.title': 'Get Involved'",
        "'getInvolved.subtitle': 'Bli en del av rörelsen'": "'getInvolved.subtitle': 'Be part of the movement'",
        "'getInvolved.description': 'Tillsammans kan vi göra skillnad. Det finns många sätt att bidra till KlickITs verksamhet.'": "'getInvolved.description': 'Together we can make a difference. There are many ways to contribute to KlickIT.'",
        "'getInvolved.volunteer.title': 'Bli volontär'": "'getInvolved.volunteer.title': 'Become a Volunteer'",
        "'getInvolved.volunteer.description': 'Dela din kunskap och hjälp andra att växa digitalt. Vi behöver mentorer, workshopsledare och projektledare.'": "'getInvolved.volunteer.description': 'Share your knowledge and help others grow digitally. We need mentors, workshop leaders, and project managers.'",
        "'getInvolved.volunteer.benefit1': 'Flexibla timmar'": "'getInvolved.volunteer.benefit1': 'Flexible hours'",
        "'getInvolved.volunteer.benefit2': 'Värdefull erfarenhet'": "'getInvolved.volunteer.benefit2': 'Valuable experience'",
        "'getInvolved.volunteer.benefit3': 'Nätverkande möjligheter'": "'getInvolved.volunteer.benefit3': 'Networking opportunities'",
        "'getInvolved.donate.title': 'Donera'": "'getInvolved.donate.title': 'Donate'",
        "'getInvolved.donate.description': 'Ditt bidrag hjälper oss att nå fler människor och erbjuda gratis kurser till dem som behöver det mest.'": "'getInvolved.donate.description': 'Your contribution helps us reach more people and offer free courses to those who need it most.'",
        "'getInvolved.donate.benefit1': '100 kr = 1 barn får en komplett kurs'": "'getInvolved.donate.benefit1': '100 SEK = 1 child gets a complete course'",
        "'getInvolved.donate.benefit2': 'Bidra till digital inkludering'": "'getInvolved.donate.benefit2': 'Contribute to digital inclusion'",
        "'getInvolved.donate.benefit3': 'Gör skillnad i ditt samhälle'": "'getInvolved.donate.benefit3': 'Make a difference in your community'",
        "'getInvolved.partner.title': 'Samarbeta'": "'getInvolved.partner.title': 'Partner with Us'",
        "'getInvolved.partner.description': 'Företag och organisationer kan samarbeta med oss för att skapa meningsfulla digitala utbildningsprojekt.'": "'getInvolved.partner.description': 'Businesses and organizations can collaborate with us to create meaningful digital education projects.'",
        "'getInvolved.partner.benefit1': 'CSR-projekt med impact'": "'getInvolved.partner.benefit1': 'CSR projects with impact'",
        "'getInvolved.partner.benefit2': 'Praktikplatser för unga'": "'getInvolved.partner.benefit2': 'Internships for youth'",
        "'getInvolved.partner.benefit3': 'Utvecklingsmöjligheter för anställda'": "'getInvolved.partner.benefit3': 'Development opportunities for employees'",
        "'getInvolved.school.title': 'Skolsamarbete'": "'getInvolved.school.title': 'School Collaboration'",
        "'getInvolved.school.description': 'Vi samarbetar med skolor för att erbjuda digital utbildning till elever och lärare.'": "'getInvolved.school.description': 'We collaborate with schools to offer digital education to students and teachers.'",
        "'getInvolved.school.benefit1': 'Kompletterande undervisning'": "'getInvolved.school.benefit1': 'Complementary teaching'",
        "'getInvolved.school.benefit2': 'Lärarfortbildning'": "'getInvolved.school.benefit2': 'Teacher training'",
        "'getInvolved.school.benefit3': 'Elevprojekt och workshops'": "'getInvolved.school.benefit3': 'Student projects and workshops'",
        "'getInvolved.cta': 'Kontakta oss'": "'getInvolved.cta': 'Contact Us'",
        "'getInvolved.ctaTitle': 'Redo att göra skillnad?'": "'getInvolved.ctaTitle': 'Ready to make a difference?'",
        "'getInvolved.ctaText': 'Gå med i vår gemenskap och hjälp oss bygga broar till den digitala världen.'": "'getInvolved.ctaText': 'Join our community and help us build bridges to the digital world.'",
        "'getInvolved.join': 'Gå med nu'": "'getInvolved.join': 'Join Now'",
        "'values.subtitle': 'Vad vi står för'": "'values.subtitle': 'What we stand for'",
        "'values.title': 'Våra värderingar'": "'values.title': 'Our Values'",
        "'values.description': 'Vi tror på en värld där alla kan delta i det digitala samhället.'": "'values.description': 'We believe in a world where everyone can participate in the digital society.'",
        "'values.inclusion.title': 'Stöd'": "'values.inclusion.title': 'Support'",
        "'values.inclusion.desc': 'Vi stöttar alla som vill lära sig digitala färdigheter'": "'values.inclusion.desc': 'We support everyone who wants to learn digital skills'",
        "'values.innovation.title': 'Innovation'": "'values.innovation.title': 'Innovation'",
        "'values.innovation.desc': 'Vi utforskar nya sätt att lära och växa tillsammans'": "'values.innovation.desc': 'We explore new ways to learn and grow together'",
        "'values.community.title': 'Gemenskap'": "'values.community.title': 'Community'",
        "'values.community.desc': 'Tillsammans är vi starkare i den digitala världen'": "'values.community.desc': 'Together we are stronger in the digital world'",
        "'values.learning.title': 'Lärande'": "'values.learning.title': 'Learning'",
        "'values.learning.desc': 'Vi tror på livslångt lärande för alla åldrar'": "'values.learning.desc': 'We believe in lifelong learning for all ages'",
        "'footer.description': 'Vi bygger broar mellan människor och digitala verktyg. Digital kompetens för alla åldrar.'": "'footer.description': 'We build bridges between people and digital tools. Digital skills for all ages.'",
        "'footer.explore': 'Utforska'": "'footer.explore': 'Explore'",
        "'footer.contact': 'Kontakt'": "'footer.contact': 'Contact'",
        "'footer.location': 'Stockholm, Sverige'": "'footer.location': 'Stockholm, Sweden'",
        "'footer.newsletter': 'Nyhetsbrev'": "'footer.newsletter': 'Newsletter'",
        "'footer.newsletterText': 'Få senaste nytt om våra kurser och evenemang'": "'footer.newsletterText': 'Get the latest news about our courses and events'",
        "'footer.emailPlaceholder': 'Din e-post'": "'footer.emailPlaceholder': 'Your email'",
        "'footer.subscribe': 'Prenumerera'": "'footer.subscribe': 'Subscribe'",
        "'footer.rights': 'Alla rättigheter reserverade.'": "'footer.rights': 'All rights reserved.'",
        "'footer.privacy': 'Integritetspolicy'": "'footer.privacy': 'Privacy Policy'",
        "'footer.terms': 'Villkor'": "'footer.terms': 'Terms'"
    };

    for (const [key, value] of Object.entries(replacements)) {
        enBlock = enBlock.replace(key, value);
    }

    content = content.substring(0, enIndex) + enBlock + content.substring(arIndex);
    fs.writeFileSync('src/context/LanguageContext.tsx', content, 'utf8');
    console.log('Translations replaced successfully!');
} else {
    console.log('Could not find en: or ar: block');
}
