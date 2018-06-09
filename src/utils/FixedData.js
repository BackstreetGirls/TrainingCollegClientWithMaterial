import recommendation0 from '../assets/Recommendation/recommendation0.jpg';
import recommendation1 from '../assets/Recommendation/recommendation.jpeg';
import recommendation2 from '../assets/Recommendation/recommendation2.png';
import recommendation3 from '../assets/Recommendation/recommendation3.jpg';
import recommendation4 from '../assets/Recommendation/recommendation4.jpeg';
import recommendation9 from '../assets/Recommendation/recommendation9.jpeg';
import recommendation10 from '../assets/Recommendation/recommendation10.jpg';
import result0 from '../assets/Recommendation/result0.jpg';
import result1 from '../assets/Recommendation/result1.jpg';
import result2 from '../assets/Recommendation/result2.jpg';
import result3 from '../assets/Recommendation/result3.jpg';
import result4 from '../assets/Recommendation/result4.jpg';
import course5 from '../assets/Recommendation/course5.PNG';
import course6 from '../assets/Recommendation/course6.PNG';
import course7 from '../assets/Recommendation/course7.PNG';

//全部课程
const courses = [
  {
    key: 0,
    img: recommendation0,
    title: 'Computer Application in Economic Management',
    rate: 5,
    price: '$ 99.00',
    deadline: '2018.5.15',
    description: 'Help students master computer skills and improve the quality and efficiency of economic and management problems.',
    registered_total: '40/500',
    start_date: '2018.5.26',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '2 & 16',
    course_detail: 'This course is based on helping students master and apply modern computer technology, solving various economic management theories and practical problems, and taking the computer knowledge and skills that economic managers must have in the content arrangement as the basic starting point, and computer technology and quantitative analysis methods. It is closely integrated with the principles of economic management and fully reflects the interdependence, mutual penetration, mutual support, mutual influence, and mutual restraint with other economic management courses. It is the first of its kind in the economics and management disciplines of financial institutions and all other universities in the country.',
    teacher: 'Professor: LanJuan Liu',
    provider: 'Shanghai University of Finance',
    provider_location: 'China',
    provider_email: 'LjLiu@gmail.com',
    provider_detail:
    'Shanghai University of Finance and Economics is a multi-disciplinary national key university directly under the Ministry of Education of the People\'s Republic of China. It is the national "211 Project" and "985 Project." Advanced Discipline Innovation Platform “Key universities have been selected as “National High-level Innovative Talents Base for Overseas Talents”[1], “Key Research Base for Humanities and Social Sciences of the Ministry of Education”, “Excellent Legal Talents Education and Training Program”, and “National Construction of High-Level Universities” The "Government Graduate Program" is one of the first batch of doctoral awarding units in the country and is jointly built by the Ministry of Education, the Ministry of Finance, and the Shanghai Municipal People\'s Government.',
  },
  {
    key: 1,
    img: recommendation1,
    title: 'Master Python',
    rate: 5,
    price: '$ 129.00',
    deadline: '2018.7.3',
    description: 'Take you master graphic design foundation skills.',
    registered_total: '2/500',
    start_date: '2018.7.18',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '6 & 12',
    course_detail: 'This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language. In the Capstone Project, you’ll use the technologies learned throughout the Specialization to design and create your own applications for data retrieval, processing, and visualization.',
    teacher: 'Associate Professor: Charles Severance',
    provider: 'The University of Michigan',
    provider_location: 'xxx',
    provider_email: 'michigan123@gmail.com',
    provider_detail: 'The University of Michigan is recognized as a leader in higher education due to the outstanding quality of its 19 schools and colleges, internationally recognized faculty, and departments with 250 degree programs.\n' +
    '\n' +
    '                    The mission of the University of Michigan is to serve the people of Michigan and the world through preeminence in creating, communicating, preserving and applying knowledge, art, and academic values, and in developing leaders and citizens who will challenge the present and enrich the future.\n',
  },
  {
    key: 2,
    img: recommendation2,
    title: 'Essay Writing',
    rate: 5,
    price: '$ 229.00',
    deadline: '2018.5.18',
    description: 'Getting started with Essay Writing.',
    registered_total: '2/500',
    start_date: '2018.6.10',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '1-3 & 4',
    course_detail: 'This is the second course in the Academic English: Writing specialization.  By introducing you to three types of academic essays, this course will especially help prepare you for work in college classes, but anyone who wants to improve his or her writing skills can benefit from this course.',
    teacher: 'Instructor, International Programs: Tamy Chapman',
    provider: 'UCI Division of Continuing Education',
    provider_location: 'xxx',
    provider_email: 'xxx123@gmail.com',
    provider_detail: 'Consistently ranked among the nation’s best universities, UC Irvine is noted for top-rated research and graduate programs, extensive commitment to undergraduate education, and growing number of professional schools and programs of academic and social significance.\n+' +
    'Since 1965, the University of California, Irvine has combined the strengths of a major research university with the bounty of an incomparable Southern California location. UCI’s unyielding commitment to rigorous academics, cutting-edge research, and leadership and character development makes the campus a driving force for innovation and discovery that serves our local, national and global communities in many ways.\n',
  },
  {
    key: 3,
    img: recommendation3,
    title: 'Fundamentals of Graphic Design',
    rate: 5,
    price: '$ 479.00',
    deadline: '2018.8.18',
    description: 'Take you master graphic design foundation skills.',
    registered_total: '2/500',
    start_date: '2018.9.1',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '5-8 & 4',
    course_detail: 'Graphic Design is all around us! Words and pictures—the building blocks of graphic design—are the elements that carry the majority of the content in both the digital world and the printed world. As graphic design becomes more visible and prevalent in our lives, graphic design as a practice becomes more important in our culture.',
    teacher: 'Faculty, Program in Graphic Design: Anther Kiley',
    provider: 'CaLARTS',
    provider_location: 'xxx',
    provider_email: 'xxx@gmail.com',
    provider_detail: 'CalArts\' Graphic Design program is one of the premier programs for the study of graphic and print arts in the U.S.\n' +
    '\n' +
    'CalArts has earned an international reputation as the leading college of the visual and performing arts in the United States. Offering rigorous undergraduate and graduate degree programs through six schools—Art, Critical Studies, Dance, Film/Video, Music, and Theater—CalArts has championed creative excellence, critical reflection, and the development of new forms and expressions.\n',
  },
  {
    key: 4,
    img: recommendation4,
    title: 'Neural Networks and Deep Learning',
    rate: 5,
    price: 'FREE',
    deadline: '2018.7.14',
    description: 'If you want to break into cutting-edge AI, this course will help you do so.',
    registered_total: '2/500',
    start_date: '2018.9.1',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '6 & 4',
    course_detail: 'In this course, you will learn the foundations of deep learning. When you finish this class, you will:\n' +
    '- Understand the major technology trends driving Deep Learning\n' +
    '- Be able to build, train and apply fully connected deep neural networks \n' +
    '- Know how to implement efficient (vectorized) neural networks \n' +
    '- Understand the key parameters in a neural network\'s architecture ',
    teacher: 'Professor:  Andrew Ng',
    provider: 'deeplearning.ai',
    provider_location: 'xxx',
    provider_email: 'deeplearning123@gmail.com',
    provider_detail: 'deeplearning.ai is Andrew Ng\'s new venture which amongst others, strives for providing comprehensive AI education beyond borders.',
  },
  {
    key: 5,
    img: course5,
    title: 'L innovazione sociale per il patrimonio culturale',
    rate: 4,
    price: '$ 60.00',
    deadline: '2018.6.18',
    description: 'Impara a valorizzare il patrimonio culturale attraverso processi di rifunzionalizzazione.',
    registered_total: '20/500',
    start_date: '2018.7.1',
    class_amount: '10',
    lessons_perWeek_totalWeeks: '8 & 7',
    course_detail: 'Il nostro patrimonio culturale è un bene prezioso, a volte poco valorizzato. Molti sono i luoghi che, sebbene ricchi di storia e cultura, sono stati a lungo dimenticati ma poi riscoperti e valorizzati.\n' +
    '\n' +
    'Questo corso mette in campo le competenze per rivalutare i siti storici ed affrontare processi di ri-funzionalizzazione del patrimonio culturale ed ambientale.\n' +
    '\n' +
    'L\'attenzione si concentra sul fenomeno dell\'innovazione sociale applicata al patrimonio culturale. Sono illustrate storie emblematiche che in questi anni si sono sviluppate nel Sud d’Italia, delineando le peculiarità di questo nuovo modello di gestione che rappresenta un\'alternativa tra il modello pubblico e quello privato.\n' +
    '\n' +
    'Attraverso approfondimenti e studi di caso potrai verificare le competenze acquisite per riuscire ad operare al meglio nelle imprese, negli enti e nelle associazioni nelle quali può essere impiegato.',
    teacher: 'Stefano Consiglio, Prof.',
    provider: 'Università degli Studi di Napoli Federico II',
    provider_location: 'Italy',
    provider_email: 'StefanoC@gmail.com',
    provider_detail: 'Free online courses from Università degli Studi di Napoli Federico II\n' +
    'Fondata nel 1224, l\'Università degli Studi di Napoli Federico II è la più antica Università laica d’Europa. Con il suo Centro “Federica Weblearning”, è all’avanguardia nell’innovazione della didattica multimediale online.\n' +
    '\n' +
    'Le piattaforme di Federica offrono oltre 300 corsi blended e 75 MOOCs aperti a tutti e tenuti da prestigiosi docenti della Federico II e di altri Atenei nazionali e internazionali. Con oltre 5milioni di contatti, Federica presenta un design di straordinaria efficacia che integra in modalità seamless testi, video e link alle più autorevoli fonti online. Scopri di più su www.federica.eu.',
  },
  {
    key: 6,
    img: course6,
    title: 'First Nights',
    rate: 5,
    price: '$ 49.00',
    deadline: '2018.7.18',
    description: 'Berlioz’s Symphonie Fantastique and Program Music in the 19th Century',
    registered_total: '12/100',
    start_date: '2018.8.1',
    class_amount: '2',
    lessons_perWeek_totalWeeks: '3 & 3',
    course_detail: 'Six years after the premiere of Beethoven’s monumental Ninth Symphony, composer Hector Berlioz sought to make use of the symphonic genre, but on his own terms. Indeed, he wrote not only a five-movement symphony, but also a narrative program to accompany and explain the symphony.\n' +
    '\n' +
    'This music course introduces students to the music and programmatic elements of Berlioz’s Symphonie Fantastique, illuminating a new direction for nineteenth-century music. The course’s grand finale is a live performance of the entire symphony by the Harvard Radcliffe Orchestra.\n' +
    '\n' +
    'Harvard’s Thomas Forrest Kelly (Morton B. Knafel Professor of Music) guides learners through Berlioz’s Symphony Fantastique,, highlighting Berlioz’s compostional process, his innovative orchestration, and the reception of his controversial piece of narrative instrumental music.\n' +
    '\n' +
    'You will learn the basics of Romantic musical style, Berlioz’s creative expansion of the standard orchestra, and the debates surrounding the idea of purely musical narrative in the 19th century.',
    teacher: 'Thomas Forrest Kelly',
    provider: 'Harvard University',
    provider_location: 'USA',
    provider_email: 'ThomasK@gmail.com',
    provider_detail: 'Free online courses from Harvard University\n' +
    'Harvard University is devoted to excellence in teaching, learning, and research, and to developing leaders in many disciplines who make a difference globally. Harvard faculty are engaged with teaching and research to push the boundaries of human knowledge. The University has twelve degree-granting Schools in addition to the Radcliffe Institute for Advanced Study.\n' +
    '\n' +
    'Established in 1636, Harvard is the oldest institution of higher education in the United States. The University, which is based in Cambridge and Boston, Massachusetts, has an enrollment of over 20,000 degree candidates, including undergraduate, graduate, and professional students. Harvard has more than 360,000 alumni around the world.',
  },
  {
    key: 7,
    img: course7,
    title: 'Just Money: Banking as if Society Mattered',
    rate: 4,
    price: '$ 49.00',
    deadline: '2018.6.11',
    description: 'Learn how banks can use capital as a tool to promote social and environmental wellbeing.',
    registered_total: '88/200',
    start_date: '2018.6.23',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '4 & 16',
    course_detail: 'What do you know about banking? Do you know what your bank does with your money? The recent financial crisis highlighted some of the most fundamental issues with the mainstream banking system.\n' +
    '\n' +
    'This course looks into banks that operate differently, namely, “just banks" that use capital and finance as a tool to address social and ecological challenges.\n' +
    '\n' +
    'This course is for anyone who wants to understand the unique role banks play as intermediaries in our economy and how they can leverage that position to produce positive social, environmental, and economic change.\n' +
    '\n' +
    'The instructors of this course have worked for over 10 years with just banks from around the world, as well as in the fields of community development, economic democracy, and social change.\n' +
    '\n' +
    'No previous knowledge of finance or banking is needed to take this course.',
    teacher: 'Katrin Kaeufer',
    provider: 'MIT',
    provider_location: 'USA',
    provider_email: 'MITmooc@gmail.com',
    provider_detail: 'Free online courses from Massachusetts Institute of Technology\n' +
    'Massachusetts Institute of Technology — a coeducational, privately endowed research university founded in 1861 — is dedicated to advancing knowledge and educating students in science, technology, and other areas of scholarship that will best serve the nation and the world in the 21st century. Learn more about MIT. Through MITx, the Institute furthers its commitment to improving education worldwide.\n' +
    '\n' +
    'MITx Courses\n' +
    'MITx courses embody the inventiveness, openness, rigor and quality that are hallmarks of MIT, and many use materials developed for MIT residential courses in the Institute\'s five schools and 33 academic disciplines. Browse MITx courses below.\n' +
    '\n' +
    ' \n' +
    '\n' +
    'Massachusetts Institute of Technology MOOCs\n' +
    'Browse free online courses in a variety of subjects. Massachusetts Institute of Technology courses found below can be audited free or students can choose to receive a verified certificate for a small fee. Select a course to learn more.',
  },
  {
    key: 8,
    img: recommendation9,
    title: 'Applied Data Science with Python',
    rate: 5,
    price: '$ 129.00',
    deadline: '2018.5.20',
    description: 'Gain new insights into your data 。Learn to apply data science methods and techniques, and acquire analysis skills.',
    registered_total: '2/500',
    start_date: '2018.5.21',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '6 & 12',
    course_detail: 'This course will introduce the learner to network analysis through tutorials using the NetworkX library. The course begins with an understanding of what network analysis is and motivations for why we might model phenomena as networks. The second week introduces the concept of connectivity and network robustness. The third week will explore ways of measuring the importance or centrality of a node in a network. The final week will explore the evolution of networks over time and cover models of network generation and the link prediction problem. ',
    teacher: 'Associate Professor: Charles Severance, Kevyn Collins-Thompson',
    provider: 'The University of Michigan',
    provider_location: 'USA',
    provider_email: 'michigan123@gmail.com',
    provider_detail: 'Michigan’s academic vigor offers excellence across disciplines and around the globe. The University is recognized as a leader in higher education due to the outstanding quality of its 19 schools and colleges, internationally recognized faculty, and departments with 250 degree programs.',
  },
  {
    key: 9,
    img: recommendation10,
    title: 'Algorithms, Part II',
    rate: 5,
    price: '¥ 0.00',
    deadline: '2018.7.14',
    description: 'Take you master algorithms skills.',
    registered_total: '2/500',
    start_date: '2018.8.1',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '6 & 6',
    course_detail: ' This course covers the essential information that every serious programmer needs to know about algorithms and data structures, with emphasis on applications and scientific performance analysis of Java implementations. Part I covers elementary data structures, sorting, and searching algorithms. Part II focuses on graph- and string-processing algorithms.',
    teacher: 'Associate Professor: Robert Sedgewick',
    provider: 'Princeton University',
    provider_location: 'USA',
    provider_email: 'princeton123@gmail.com',
    provider_detail: 'Princeton University is a private research university located in Princeton, New Jersey, United States. It is one of the eight universities of the Ivy League, and one of the nine Colonial Colleges founded before the American Revolution.',
  },
  {
    key: 10,
    img: result0,
    title: 'Introducción al desarrollo de videojuegos con Unity',
    rate: 4,
    price: '$ 55.00',
    deadline: '2018.6.10',
    description: 'Aprende a desarrollar videojuegos multiplataforma utilizando una de las herramientas más populares del mercado.',
    registered_total: '80/200',
    start_date: '2018.6.23',
    class_amount: '4',
    lessons_perWeek_totalWeeks: '2 & 6',
    course_detail: 'Nunca antes el mercado de los videojuegos se ha encontrado en un mejor momento. En la actualidad existen multitud de plataformas disponibles y la irrupción de los dispositivos móviles ha revolucionado el sector.\n' +
    '\n' +
    'La existencia de múltiples plataformas implica grandes retos para los desarrolladores en la toma de decisiones, tanto en la elección de las plataformas como en el dimensionamiento de los equipos de trabajo.\n' +
    '\n' +
    'Una solución a estos problemas es utilizar un motor de juegos, y sin lugar a dudas el motor más popular y usado del momento es Unity.\n' +
    '\n' +
    'Unity es el motor más popular por razones como sus poderosas herramientas, su capacidad de generar juegos en más de 20 plataformas distintas, su excelente curva de aprendizaje y los centenares de complementos disponibles para él desarrollados por terceros. ',
    teacher: 'Jordi Linares Pellicer',
    provider: 'Universitat Politècnica de Valencia',
    provider_location: 'Spain',
    provider_email: 'JordiP@gmail.com',
    provider_detail:
      'La Universitat Politècnica de València es una institución pública, dinámica e innovadora, dedicada a la investigación y a la docencia que, al mismo tiempo que mantiene fuertes vínculos con el entorno social en el que desarrolla sus actividades, opta por una decidida presencia en el extranjero. Es una universidad joven, que durante el curso académico 2018-2019 celebra su 50 aniversario. ',
  },
  {
    key: 11,
    img: result1,
    title: 'Microsoft Bot Framework and Conversation as a Platform',
    rate: 5,
    price: '$ 99.00',
    deadline: '2018.5.31',
    description: 'Explore “Conversation as a Platform” with the Microsoft Bot Framework and create your own Cortana Skills bot that integrates AI.',
    registered_total: '280/400',
    start_date: '2018.6.7',
    class_amount: '8',
    lessons_perWeek_totalWeeks: '3 to 5 & 5',
    course_detail: 'The Microsoft Bot Framework is a powerful set of services, tools, and SDKs that provides a rich foundation or "framework" for developers to build and connect intelligent bots. \n' +
    '\n' +
    'By leveraging the Microsoft Bot Framework, developers can create, integrate, and manage a wide variety of bots and bot experiences that interact with users naturally. The tools and services available in Microsoft Bot Framework dramatically reduce the amount of code and coordination required to develop “enterprise-ready” bot experiences. \n' +
    '\n' +
    'In this practical course, you\'ll explore “Conversation as a Platform” as it pertains to natural language understanding, bots, and Cortana. You\'ll work through hands-on exercises to learn how to piece them together—and find out how to make “Conversation as a Platform” a reality in your organization. \n' +
    '\n' +
    'The course starts with an overview of the Microsoft Bot Framework, and then takes a look at Azure Bot Service, which is designed to provision every resource required for production bots at the same time, as an integrated collection of services. The course material also shows how Azure Bot Service provides an integrated environment, specifically designed for developing bots.',
    teacher: 'Lei Ma & Scott Peterson',
    provider: 'Microsoft',
    provider_location: 'USA',
    provider_email: 'ScottP@gmail.com',
    provider_detail:
    '“Be passionate and bold. Always keep learning. You stop doing useful things if you don\'t learn.” – Satya Nadella, CEO, Microsoft\n' +
    '\n' +
    'We live in a mobile-first and cloud-first world. Computing is ubiquitous, and experiences span devices and exhibit ambient intelligence. Billions of sensors, screens and devices – in conference rooms, living rooms, cities, cars, phones, PCs – are forming a vast network and streams of data that simply disappear into the background of our lives. This computing power will digitize nearly everything around us, and will derive insights from all of the data being generated by interactions among people and between people and machines. We are moving from a world where computing power was scarce to a place where it now is almost limitless, and where the true scarce commodity is increasingly human attention.',
  },
  {
    key: 12,
    img: result2,
    title: 'HTML5 Coding Essentials and Best Practices',
    rate: 4,
    price: '$ 129.00',
    deadline: '2018.6.30',
    description: 'Learn how to write Web pages and Web sites by mastering HTML5 coding techniques and best practices.',
    registered_total: '50/100',
    start_date: '2018.7.1',
    class_amount: '2',
    lessons_perWeek_totalWeeks: '5 to 8 & 6',
    course_detail: 'HTML5 is the standard language of the Web, developed by W3C. For application developers and industry, HTML5 represents a set of features that people will be able to rely on for years to come. HTML5 is supported on a wide variety of devices, lowering the cost of creating rich applications to reach users everywhere.\n' +
    '\n' +
    'Whatever mobile phones, connected objects, game consoles, automobile dashboards, and devices that haven’t even been considered yet, HTML5 helps write once and deploy anywhere!\n' +
    '\n' +
    'In this course, you will learn all the new HTML5 features to help create great Web sites and applications in a simplified but powerful way. HTML5 provides native support for video and audio without plug-ins, provides support for offline applications, for games with smooth interactive animations, and much more.',
    teacher: 'Michel Buffa',
    provider: 'W3Cx',
    provider_location: 'USA',
    provider_email: 'MichelB@gmail.com',
    provider_detail:
    'The World Wide Web Consortium (W3C) is an international consortium where Member organizations, a full-time staff, and the public work together to develop Web standards and guidelines designed to ensure long-term growth for the Web. W3C\'s goal is for the Web to connect humanity in a way that makes access to knowledge more efficient and equitable.\n' +
    '\n' +
    'Founded in 1994 by the inventor of the Web, Tim Berners-Lee, W3C has successfully overseen processes of issue raising, design, consensus building and testing resulting in over 335 technical standards that make the Web work. Success stories include HTML5, XML, CSS and Web accessibility guidelines.',
  },
  {
    key: 13,
    img: result3,
    title: 'AWS Developer: Optimizing on AWS',
    rate: 5,
    price: '$ 149.00',
    deadline: '2018.6.11',
    description: 'Learn from AWS experts how to leverage your developer skills to optimize applications in the AWS Cloud.',
    registered_total: '150/500',
    start_date: '2018.6.18',
    class_amount: '8',
    lessons_perWeek_totalWeeks: '4 & 6',
    course_detail: 'Get hands-on training from AWS staff to optimize applications on the AWS platform. \n' +
    '\n' +
    'This course, part of the AWS Developer Professional Series, will focus on what you need to know to help you optimize your applications and optimize how you work in AWS. We strongly recommend that you complete Course 1, "Building on AWS" before starting this class.\n' +
    '\n' +
    'You will look at ways to improve utilization by using containers with the Amazon Elastic Container Service (Amazon ECS), caching services such as Amazon CloudFront and Amazon ElastiCache, and monitoring tools such as Amazon CloudWatch. You will look at serverless architectures using Amazon DynamoDB, Amazon API Gateway and, AWS Lambda. You will explore the AWS Command Line Interface (CLI), AWS Identity and Access Management (IAM) and learn how to use the AWS Key Management Service (KMS). You will finish off the class with a deep dive into AWS CloudFormation and a capstone exercise where you will debug a CloudFormation template.',
    teacher: 'None Yet',
    provider: 'AWS',
    provider_location: 'USA',
    provider_email: 'amazonWeb@gmail.com',
    provider_detail:
    'Free online courses from Amazon Web Services\n' +
    'Since 2006, Amazon Web Services has been the world’s most comprehensive and broadly adopted cloud platform. AWS offers over 90 fully featured services for compute, storage, networking, database, analytics, application services, deployment, management, developer, mobile, Internet of Things (IoT), Artificial Intelligence (AI), security, hybrid and enterprise applications, from 44 Availability Zones (AZs) across 16 geographic regions in the U.S., Australia, Brazil, Canada, China, Germany, India, Ireland, Japan, Korea, Singapore, and the UK. AWS services are trusted by millions of active customers around the world — including the fastest-growing startups, largest enterprises, and leading government agencies — to power their infrastructure, make them more agile, and lower costs. To learn more about AWS, visit https://aws.amazon.com.',
  },
  {
    key: 14,
    img: result4,
    title: 'Laboratorio di Programmazione',
    rate: 4,
    price: '$ 60.00',
    deadline: '2018.8.31',
    description: 'Impara a risolvere problemi complessi attraverso l\'uso del computer e avvicinati alla magia degli algoritmi.',
    registered_total: '35/100',
    start_date: '2018.9.1',
    class_amount: '2',
    lessons_perWeek_totalWeeks: '4 & 8',
    course_detail: 'Il linguaggio di programmazione è uno degli strumenti che abbiamo per interpretare e risolvere i problemi di tutti i giorni. Un linguaggio che è alla base di problemi comuni, come le previsioni del tempo o l\'analisi della deformazione di una struttura di un\'auto in un incidente stradale.\n' +
    '\n' +
    'Questo corso fornisce un’introduzione alle metodologie e agli strumenti per la risoluzioni di problemi attraverso l\'uso del computer. Sarai guidato nell\'individuazione di metodologie di progetto, sviluppo ed analisi degli algoritmi di base per il calcolo scientifico nonché all’uso dei principali strumenti di calcolo (hardware e software), con particolare riguardo all’influenza che questi ultimi esercitano sullo sviluppo degli algoritmi stessi.',
    teacher: 'Marco Lapegna, Prof',
    provider: 'Università Federico II',
    provider_location: 'Italy',
    provider_email: 'MarcoL@gmail.com',
    provider_detail:
    'Free online courses from Università degli Studi di Napoli Federico II\n' +
    'Fondata nel 1224, l\'Università degli Studi di Napoli Federico II è la più antica Università laica d’Europa. Con il suo Centro “Federica Weblearning”, è all’avanguardia nell’innovazione della didattica multimediale online.\n' +
    '\n' +
    'Le piattaforme di Federica offrono oltre 300 corsi blended e 75 MOOCs aperti a tutti e tenuti da prestigiosi docenti della Federico II e di altri Atenei nazionali e internazionali. Con oltre 5milioni di contatti, Federica presenta un design di straordinaria efficacia che integra in modalità seamless testi, video e link alle più autorevoli fonti online. Scopri di più su www.federica.eu.',
  },
];

//个人收藏
const favorite = [
  {
    key: 0,
    img: recommendation0,
    title: 'Computer Application in Economic Management',
    rate: 5,
    price: '$ 99.00',
    deadline: '2018.5.15',
    description: 'Help students master computer skills and improve the quality and efficiency of economic and management problems.',
    registered_total: '40/500',
    start_date: '2018.5.26',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '2 & 16',
    course_detail: 'This course is based on helping students master and apply modern computer technology, solving various economic management theories and practical problems, and taking the computer knowledge and skills that economic managers must have in the content arrangement as the basic starting point, and computer technology and quantitative analysis methods. It is closely integrated with the principles of economic management and fully reflects the interdependence, mutual penetration, mutual support, mutual influence, and mutual restraint with other economic management courses. It is the first of its kind in the economics and management disciplines of financial institutions and all other universities in the country.',
    teacher: 'Professor: LanJuan Liu',
    provider: 'Shanghai University of Finance',
    provider_location: 'China',
    provider_email: 'LjLiu@gmail.com',
    provider_detail:
      'Shanghai University of Finance and Economics is a multi-disciplinary national key university directly under the Ministry of Education of the People\'s Republic of China. It is the national "211 Project" and "985 Project." Advanced Discipline Innovation Platform “Key universities have been selected as “National High-level Innovative Talents Base for Overseas Talents”[1], “Key Research Base for Humanities and Social Sciences of the Ministry of Education”, “Excellent Legal Talents Education and Training Program”, and “National Construction of High-Level Universities” The "Government Graduate Program" is one of the first batch of doctoral awarding units in the country and is jointly built by the Ministry of Education, the Ministry of Finance, and the Shanghai Municipal People\'s Government.',
  },
];

//搜索结果,按照CS搜索
const search_result1 = [
  {
    key: 10,
    img: result0,
    title: 'Introducción al desarrollo de videojuegos con Unity',
    rate: 4,
    price: '$ 55.00',
    deadline: '2018.6.10',
    description: 'Aprende a desarrollar videojuegos multiplataforma utilizando una de las herramientas más populares del mercado.',
    registered_total: '80/200',
    start_date: '2018.6.23',
    class_amount: '4',
    lessons_perWeek_totalWeeks: '2 & 6',
    course_detail: 'Nunca antes el mercado de los videojuegos se ha encontrado en un mejor momento. En la actualidad existen multitud de plataformas disponibles y la irrupción de los dispositivos móviles ha revolucionado el sector.\n' +
    '\n' +
    'La existencia de múltiples plataformas implica grandes retos para los desarrolladores en la toma de decisiones, tanto en la elección de las plataformas como en el dimensionamiento de los equipos de trabajo.\n' +
    '\n' +
    'Una solución a estos problemas es utilizar un motor de juegos, y sin lugar a dudas el motor más popular y usado del momento es Unity.\n' +
    '\n' +
    'Unity es el motor más popular por razones como sus poderosas herramientas, su capacidad de generar juegos en más de 20 plataformas distintas, su excelente curva de aprendizaje y los centenares de complementos disponibles para él desarrollados por terceros. ',
    teacher: 'Jordi Linares Pellicer',
    provider: 'Universitat Politècnica de Valencia',
    provider_location: 'Spain',
    provider_email: 'JordiP@gmail.com',
    provider_detail:
      'La Universitat Politècnica de València es una institución pública, dinámica e innovadora, dedicada a la investigación y a la docencia que, al mismo tiempo que mantiene fuertes vínculos con el entorno social en el que desarrolla sus actividades, opta por una decidida presencia en el extranjero. Es una universidad joven, que durante el curso académico 2018-2019 celebra su 50 aniversario. ',
  },
  {
    key: 11,
    img: result1,
    title: 'Microsoft Bot Framework and Conversation as a Platform',
    rate: 5,
    price: '$ 99.00',
    deadline: '2018.5.31',
    description: 'Explore “Conversation as a Platform” with the Microsoft Bot Framework and create your own Cortana Skills bot that integrates AI.',
    registered_total: '280/400',
    start_date: '2018.6.7',
    class_amount: '8',
    lessons_perWeek_totalWeeks: '3 to 5 & 5',
    course_detail: 'The Microsoft Bot Framework is a powerful set of services, tools, and SDKs that provides a rich foundation or "framework" for developers to build and connect intelligent bots. \n' +
    '\n' +
    'By leveraging the Microsoft Bot Framework, developers can create, integrate, and manage a wide variety of bots and bot experiences that interact with users naturally. The tools and services available in Microsoft Bot Framework dramatically reduce the amount of code and coordination required to develop “enterprise-ready” bot experiences. \n' +
    '\n' +
    'In this practical course, you\'ll explore “Conversation as a Platform” as it pertains to natural language understanding, bots, and Cortana. You\'ll work through hands-on exercises to learn how to piece them together—and find out how to make “Conversation as a Platform” a reality in your organization. \n' +
    '\n' +
    'The course starts with an overview of the Microsoft Bot Framework, and then takes a look at Azure Bot Service, which is designed to provision every resource required for production bots at the same time, as an integrated collection of services. The course material also shows how Azure Bot Service provides an integrated environment, specifically designed for developing bots.',
    teacher: 'Lei Ma & Scott Peterson',
    provider: 'Microsoft',
    provider_location: 'USA',
    provider_email: 'ScottP@gmail.com',
    provider_detail:
      '“Be passionate and bold. Always keep learning. You stop doing useful things if you don\'t learn.” – Satya Nadella, CEO, Microsoft\n' +
      '\n' +
      'We live in a mobile-first and cloud-first world. Computing is ubiquitous, and experiences span devices and exhibit ambient intelligence. Billions of sensors, screens and devices – in conference rooms, living rooms, cities, cars, phones, PCs – are forming a vast network and streams of data that simply disappear into the background of our lives. This computing power will digitize nearly everything around us, and will derive insights from all of the data being generated by interactions among people and between people and machines. We are moving from a world where computing power was scarce to a place where it now is almost limitless, and where the true scarce commodity is increasingly human attention.',
  },
  {
    key: 12,
    img: result2,
    title: 'HTML5 Coding Essentials and Best Practices',
    rate: 4,
    price: '$ 129.00',
    deadline: '2018.6.30',
    description: 'Learn how to write Web pages and Web sites by mastering HTML5 coding techniques and best practices.',
    registered_total: '50/100',
    start_date: '2018.7.1',
    class_amount: '2',
    lessons_perWeek_totalWeeks: '5 to 8 & 6',
    course_detail: 'HTML5 is the standard language of the Web, developed by W3C. For application developers and industry, HTML5 represents a set of features that people will be able to rely on for years to come. HTML5 is supported on a wide variety of devices, lowering the cost of creating rich applications to reach users everywhere.\n' +
    '\n' +
    'Whatever mobile phones, connected objects, game consoles, automobile dashboards, and devices that haven’t even been considered yet, HTML5 helps write once and deploy anywhere!\n' +
    '\n' +
    'In this course, you will learn all the new HTML5 features to help create great Web sites and applications in a simplified but powerful way. HTML5 provides native support for video and audio without plug-ins, provides support for offline applications, for games with smooth interactive animations, and much more.',
    teacher: 'Michel Buffa',
    provider: 'W3Cx',
    provider_location: 'USA',
    provider_email: 'MichelB@gmail.com',
    provider_detail:
      'The World Wide Web Consortium (W3C) is an international consortium where Member organizations, a full-time staff, and the public work together to develop Web standards and guidelines designed to ensure long-term growth for the Web. W3C\'s goal is for the Web to connect humanity in a way that makes access to knowledge more efficient and equitable.\n' +
      '\n' +
      'Founded in 1994 by the inventor of the Web, Tim Berners-Lee, W3C has successfully overseen processes of issue raising, design, consensus building and testing resulting in over 335 technical standards that make the Web work. Success stories include HTML5, XML, CSS and Web accessibility guidelines.',
  },
  {
    key: 13,
    img: result3,
    title: 'AWS Developer: Optimizing on AWS',
    rate: 5,
    price: '$ 149.00',
    deadline: '2018.6.11',
    description: 'Learn from AWS experts how to leverage your developer skills to optimize applications in the AWS Cloud.',
    registered_total: '150/500',
    start_date: '2018.6.18',
    class_amount: '8',
    lessons_perWeek_totalWeeks: '4 & 6',
    course_detail: 'Get hands-on training from AWS staff to optimize applications on the AWS platform. \n' +
    '\n' +
    'This course, part of the AWS Developer Professional Series, will focus on what you need to know to help you optimize your applications and optimize how you work in AWS. We strongly recommend that you complete Course 1, "Building on AWS" before starting this class.\n' +
    '\n' +
    'You will look at ways to improve utilization by using containers with the Amazon Elastic Container Service (Amazon ECS), caching services such as Amazon CloudFront and Amazon ElastiCache, and monitoring tools such as Amazon CloudWatch. You will look at serverless architectures using Amazon DynamoDB, Amazon API Gateway and, AWS Lambda. You will explore the AWS Command Line Interface (CLI), AWS Identity and Access Management (IAM) and learn how to use the AWS Key Management Service (KMS). You will finish off the class with a deep dive into AWS CloudFormation and a capstone exercise where you will debug a CloudFormation template.',
    teacher: 'None Yet',
    provider: 'AWS',
    provider_location: 'USA',
    provider_email: 'amazonWeb@gmail.com',
    provider_detail:
      'Free online courses from Amazon Web Services\n' +
      'Since 2006, Amazon Web Services has been the world’s most comprehensive and broadly adopted cloud platform. AWS offers over 90 fully featured services for compute, storage, networking, database, analytics, application services, deployment, management, developer, mobile, Internet of Things (IoT), Artificial Intelligence (AI), security, hybrid and enterprise applications, from 44 Availability Zones (AZs) across 16 geographic regions in the U.S., Australia, Brazil, Canada, China, Germany, India, Ireland, Japan, Korea, Singapore, and the UK. AWS services are trusted by millions of active customers around the world — including the fastest-growing startups, largest enterprises, and leading government agencies — to power their infrastructure, make them more agile, and lower costs. To learn more about AWS, visit https://aws.amazon.com.',
  },
  {
    key: 14,
    img: result4,
    title: 'Laboratorio di Programmazione',
    rate: 4,
    price: '$ 60.00',
    deadline: '2018.8.31',
    description: 'Impara a risolvere problemi complessi attraverso l\'uso del computer e avvicinati alla magia degli algoritmi.',
    registered_total: '35/100',
    start_date: '2018.9.1',
    class_amount: '2',
    lessons_perWeek_totalWeeks: '4 & 8',
    course_detail: 'Il linguaggio di programmazione è uno degli strumenti che abbiamo per interpretare e risolvere i problemi di tutti i giorni. Un linguaggio che è alla base di problemi comuni, come le previsioni del tempo o l\'analisi della deformazione di una struttura di un\'auto in un incidente stradale.\n' +
    '\n' +
    'Questo corso fornisce un’introduzione alle metodologie e agli strumenti per la risoluzioni di problemi attraverso l\'uso del computer. Sarai guidato nell\'individuazione di metodologie di progetto, sviluppo ed analisi degli algoritmi di base per il calcolo scientifico nonché all’uso dei principali strumenti di calcolo (hardware e software), con particolare riguardo all’influenza che questi ultimi esercitano sullo sviluppo degli algoritmi stessi.',
    teacher: 'Marco Lapegna, Prof',
    provider: 'Università Federico II',
    provider_location: 'Italy',
    provider_email: 'MarcoL@gmail.com',
    provider_detail:
      'Free online courses from Università degli Studi di Napoli Federico II\n' +
      'Fondata nel 1224, l\'Università degli Studi di Napoli Federico II è la più antica Università laica d’Europa. Con il suo Centro “Federica Weblearning”, è all’avanguardia nell’innovazione della didattica multimediale online.\n' +
      '\n' +
      'Le piattaforme di Federica offrono oltre 300 corsi blended e 75 MOOCs aperti a tutti e tenuti da prestigiosi docenti della Federico II e di altri Atenei nazionali e internazionali. Con oltre 5milioni di contatti, Federica presenta un design di straordinaria efficacia che integra in modalità seamless testi, video e link alle più autorevoli fonti online. Scopri di più su www.federica.eu.',
  },
  {
    key: 0,
    img: recommendation0,
    title: 'Computer Application in Economic Management',
    rate: 5,
    price: '¥ 99.00',
    deadline: '2018.5.15',
    description: 'Help students master computer skills and improve the quality and efficiency of economic and management problems.',
    registered_total: '40/500',
    start_date: '2018.5.26',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '2 & 16',
    course_detail: 'This course is based on helping students master and apply modern computer technology, solving various economic management theories and practical problems, and taking the computer knowledge and skills that economic managers must have in the content arrangement as the basic starting point, and computer technology and quantitative analysis methods. It is closely integrated with the principles of economic management and fully reflects the interdependence, mutual penetration, mutual support, mutual influence, and mutual restraint with other economic management courses. It is the first of its kind in the economics and management disciplines of financial institutions and all other universities in the country.',
    teacher: 'Professor: LanJuan Liu',
    provider: 'Shanghai University of Finance',
    provider_location: 'China',
    provider_email: 'LjLiu@gmail.com',
    provider_detail:
      'Shanghai University of Finance and Economics is a multi-disciplinary national key university directly under the Ministry of Education of the People\'s Republic of China. It is the national "211 Project" and "985 Project." Advanced Discipline Innovation Platform “Key universities have been selected as “National High-level Innovative Talents Base for Overseas Talents”[1], “Key Research Base for Humanities and Social Sciences of the Ministry of Education”, “Excellent Legal Talents Education and Training Program”, and “National Construction of High-Level Universities” The "Government Graduate Program" is one of the first batch of doctoral awarding units in the country and is jointly built by the Ministry of Education, the Ministry of Finance, and the Shanghai Municipal People\'s Government.',
  },
];

const search_result2 = [
  {
    key: 0,
    img: recommendation0,
    title: 'Computer Application in Economic Management',
    rate: 5,
    price: '¥ 99.00',
    deadline: '2018.5.15',
    description: 'Help students master computer skills and improve the quality and efficiency of economic and management problems.',
    registered_total: '40/500',
    start_date: '2018.5.26',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '2 & 16',
    course_detail: 'This course is based on helping students master and apply modern computer technology, solving various economic management theories and practical problems, and taking the computer knowledge and skills that economic managers must have in the content arrangement as the basic starting point, and computer technology and quantitative analysis methods. It is closely integrated with the principles of economic management and fully reflects the interdependence, mutual penetration, mutual support, mutual influence, and mutual restraint with other economic management courses. It is the first of its kind in the economics and management disciplines of financial institutions and all other universities in the country.',
    teacher: 'Professor: LanJuan Liu',
    provider: 'Shanghai University of Finance',
    provider_location: 'China',
    provider_email: 'LjLiu@gmail.com',
    provider_detail:
      'Shanghai University of Finance and Economics is a multi-disciplinary national key university directly under the Ministry of Education of the People\'s Republic of China. It is the national "211 Project" and "985 Project." Advanced Discipline Innovation Platform “Key universities have been selected as “National High-level Innovative Talents Base for Overseas Talents”[1], “Key Research Base for Humanities and Social Sciences of the Ministry of Education”, “Excellent Legal Talents Education and Training Program”, and “National Construction of High-Level Universities” The "Government Graduate Program" is one of the first batch of doctoral awarding units in the country and is jointly built by the Ministry of Education, the Ministry of Finance, and the Shanghai Municipal People\'s Government.',
  },
  {
    key: 13,
    img: result3,
    title: 'AWS Developer: Optimizing on AWS',
    rate: 5,
    price: '$ 149.00',
    deadline: '2018.6.11',
    description: 'Learn from AWS experts how to leverage your developer skills to optimize applications in the AWS Cloud.',
    registered_total: '150/500',
    start_date: '2018.6.18',
    class_amount: '8',
    lessons_perWeek_totalWeeks: '4 & 6',
    course_detail: 'Get hands-on training from AWS staff to optimize applications on the AWS platform. \n' +
    '\n' +
    'This course, part of the AWS Developer Professional Series, will focus on what you need to know to help you optimize your applications and optimize how you work in AWS. We strongly recommend that you complete Course 1, "Building on AWS" before starting this class.\n' +
    '\n' +
    'You will look at ways to improve utilization by using containers with the Amazon Elastic Container Service (Amazon ECS), caching services such as Amazon CloudFront and Amazon ElastiCache, and monitoring tools such as Amazon CloudWatch. You will look at serverless architectures using Amazon DynamoDB, Amazon API Gateway and, AWS Lambda. You will explore the AWS Command Line Interface (CLI), AWS Identity and Access Management (IAM) and learn how to use the AWS Key Management Service (KMS). You will finish off the class with a deep dive into AWS CloudFormation and a capstone exercise where you will debug a CloudFormation template.',
    teacher: 'None Yet',
    provider: 'AWS',
    provider_location: 'USA',
    provider_email: 'amazonWeb@gmail.com',
    provider_detail:
    'Free online courses from Amazon Web Services\n' +
    'Since 2006, Amazon Web Services has been the world’s most comprehensive and broadly adopted cloud platform. AWS offers over 90 fully featured services for compute, storage, networking, database, analytics, application services, deployment, management, developer, mobile, Internet of Things (IoT), Artificial Intelligence (AI), security, hybrid and enterprise applications, from 44 Availability Zones (AZs) across 16 geographic regions in the U.S., Australia, Brazil, Canada, China, Germany, India, Ireland, Japan, Korea, Singapore, and the UK. AWS services are trusted by millions of active customers around the world — including the fastest-growing startups, largest enterprises, and leading government agencies — to power their infrastructure, make them more agile, and lower costs. To learn more about AWS, visit https://aws.amazon.com.',
  },
  {
    key: 11,
    img: result1,
    title: 'Microsoft Bot Framework and Conversation as a Platform',
    rate: 5,
    price: '$ 99.00',
    deadline: '2018.5.31',
    description: 'Explore “Conversation as a Platform” with the Microsoft Bot Framework and create your own Cortana Skills bot that integrates AI.',
    registered_total: '280/400',
    start_date: '2018.6.7',
    class_amount: '8',
    lessons_perWeek_totalWeeks: '3 to 5 & 5',
    course_detail: 'The Microsoft Bot Framework is a powerful set of services, tools, and SDKs that provides a rich foundation or "framework" for developers to build and connect intelligent bots. \n' +
    '\n' +
    'By leveraging the Microsoft Bot Framework, developers can create, integrate, and manage a wide variety of bots and bot experiences that interact with users naturally. The tools and services available in Microsoft Bot Framework dramatically reduce the amount of code and coordination required to develop “enterprise-ready” bot experiences. \n' +
    '\n' +
    'In this practical course, you\'ll explore “Conversation as a Platform” as it pertains to natural language understanding, bots, and Cortana. You\'ll work through hands-on exercises to learn how to piece them together—and find out how to make “Conversation as a Platform” a reality in your organization. \n' +
    '\n' +
    'The course starts with an overview of the Microsoft Bot Framework, and then takes a look at Azure Bot Service, which is designed to provision every resource required for production bots at the same time, as an integrated collection of services. The course material also shows how Azure Bot Service provides an integrated environment, specifically designed for developing bots.',
    teacher: 'Lei Ma & Scott Peterson',
    provider: 'Microsoft',
    provider_location: 'USA',
    provider_email: 'ScottP@gmail.com',
    provider_detail:
    '“Be passionate and bold. Always keep learning. You stop doing useful things if you don\'t learn.” – Satya Nadella, CEO, Microsoft\n' +
    '\n' +
    'We live in a mobile-first and cloud-first world. Computing is ubiquitous, and experiences span devices and exhibit ambient intelligence. Billions of sensors, screens and devices – in conference rooms, living rooms, cities, cars, phones, PCs – are forming a vast network and streams of data that simply disappear into the background of our lives. This computing power will digitize nearly everything around us, and will derive insights from all of the data being generated by interactions among people and between people and machines. We are moving from a world where computing power was scarce to a place where it now is almost limitless, and where the true scarce commodity is increasingly human attention.',
  },
  {
    key: 10,
    img: result0,
    title: 'Introducción al desarrollo de videojuegos con Unity',
    rate: 4,
    price: '$ 55.00',
    deadline: '2018.6.10',
    description: 'Aprende a desarrollar videojuegos multiplataforma utilizando una de las herramientas más populares del mercado.',
    registered_total: '80/200',
    start_date: '2018.6.23',
    class_amount: '4',
    lessons_perWeek_totalWeeks: '2 & 6',
    course_detail: 'Nunca antes el mercado de los videojuegos se ha encontrado en un mejor momento. En la actualidad existen multitud de plataformas disponibles y la irrupción de los dispositivos móviles ha revolucionado el sector.\n' +
    '\n' +
    'La existencia de múltiples plataformas implica grandes retos para los desarrolladores en la toma de decisiones, tanto en la elección de las plataformas como en el dimensionamiento de los equipos de trabajo.\n' +
    '\n' +
    'Una solución a estos problemas es utilizar un motor de juegos, y sin lugar a dudas el motor más popular y usado del momento es Unity.\n' +
    '\n' +
    'Unity es el motor más popular por razones como sus poderosas herramientas, su capacidad de generar juegos en más de 20 plataformas distintas, su excelente curva de aprendizaje y los centenares de complementos disponibles para él desarrollados por terceros. ',
    teacher: 'Jordi Linares Pellicer',
    provider: 'Universitat Politècnica de Valencia',
    provider_location: 'Spain',
    provider_email: 'JordiP@gmail.com',
    provider_detail:
      'La Universitat Politècnica de València es una institución pública, dinámica e innovadora, dedicada a la investigación y a la docencia que, al mismo tiempo que mantiene fuertes vínculos con el entorno social en el que desarrolla sus actividades, opta por una decidida presencia en el extranjero. Es una universidad joven, que durante el curso académico 2018-2019 celebra su 50 aniversario. ',
  },
  {
    key: 12,
    img: result2,
    title: 'HTML5 Coding Essentials and Best Practices',
    rate: 4,
    price: '$ 129.00',
    deadline: '2018.6.30',
    description: 'Learn how to write Web pages and Web sites by mastering HTML5 coding techniques and best practices.',
    registered_total: '50/100',
    start_date: '2018.7.1',
    class_amount: '2',
    lessons_perWeek_totalWeeks: '5 to 8 & 6',
    course_detail: 'HTML5 is the standard language of the Web, developed by W3C. For application developers and industry, HTML5 represents a set of features that people will be able to rely on for years to come. HTML5 is supported on a wide variety of devices, lowering the cost of creating rich applications to reach users everywhere.\n' +
    '\n' +
    'Whatever mobile phones, connected objects, game consoles, automobile dashboards, and devices that haven’t even been considered yet, HTML5 helps write once and deploy anywhere!\n' +
    '\n' +
    'In this course, you will learn all the new HTML5 features to help create great Web sites and applications in a simplified but powerful way. HTML5 provides native support for video and audio without plug-ins, provides support for offline applications, for games with smooth interactive animations, and much more.',
    teacher: 'Michel Buffa',
    provider: 'W3Cx',
    provider_location: 'USA',
    provider_email: 'MichelB@gmail.com',
    provider_detail:
    'The World Wide Web Consortium (W3C) is an international consortium where Member organizations, a full-time staff, and the public work together to develop Web standards and guidelines designed to ensure long-term growth for the Web. W3C\'s goal is for the Web to connect humanity in a way that makes access to knowledge more efficient and equitable.\n' +
    '\n' +
    'Founded in 1994 by the inventor of the Web, Tim Berners-Lee, W3C has successfully overseen processes of issue raising, design, consensus building and testing resulting in over 335 technical standards that make the Web work. Success stories include HTML5, XML, CSS and Web accessibility guidelines.',
  },
  {
    key: 14,
    img: result4,
    title: 'Laboratorio di Programmazione',
    rate: 4,
    price: '$ 60.00',
    deadline: '2018.8.31',
    description: 'Impara a risolvere problemi complessi attraverso l\'uso del computer e avvicinati alla magia degli algoritmi.',
    registered_total: '35/100',
    start_date: '2018.9.1',
    class_amount: '2',
    lessons_perWeek_totalWeeks: '4 & 8',
    course_detail: 'Il linguaggio di programmazione è uno degli strumenti che abbiamo per interpretare e risolvere i problemi di tutti i giorni. Un linguaggio che è alla base di problemi comuni, come le previsioni del tempo o l\'analisi della deformazione di una struttura di un\'auto in un incidente stradale.\n' +
    '\n' +
    'Questo corso fornisce un’introduzione alle metodologie e agli strumenti per la risoluzioni di problemi attraverso l\'uso del computer. Sarai guidato nell\'individuazione di metodologie di progetto, sviluppo ed analisi degli algoritmi di base per il calcolo scientifico nonché all’uso dei principali strumenti di calcolo (hardware e software), con particolare riguardo all’influenza che questi ultimi esercitano sullo sviluppo degli algoritmi stessi.',
    teacher: 'Marco Lapegna, Prof',
    provider: 'Università Federico II',
    provider_location: 'Italy',
    provider_email: 'MarcoL@gmail.com',
    provider_detail:
    'Free online courses from Università degli Studi di Napoli Federico II\n' +
    'Fondata nel 1224, l\'Università degli Studi di Napoli Federico II è la più antica Università laica d’Europa. Con il suo Centro “Federica Weblearning”, è all’avanguardia nell’innovazione della didattica multimediale online.\n' +
    '\n' +
    'Le piattaforme di Federica offrono oltre 300 corsi blended e 75 MOOCs aperti a tutti e tenuti da prestigiosi docenti della Federico II e di altri Atenei nazionali e internazionali. Con oltre 5milioni di contatti, Federica presenta un design di straordinaria efficacia che integra in modalità seamless testi, video e link alle più autorevoli fonti online. Scopri di più su www.federica.eu.',
  },
];

const search_result3 = [
  {
    key: 10,
    img: result0,
    title: 'Introducción al desarrollo de videojuegos con Unity',
    rate: 4,
    price: '$ 55.00',
    deadline: '2018.6.10',
    description: 'Aprende a desarrollar videojuegos multiplataforma utilizando una de las herramientas más populares del mercado.',
    registered_total: '80/200',
    start_date: '2018.6.23',
    class_amount: '4',
    lessons_perWeek_totalWeeks: '2 & 6',
    course_detail: 'Nunca antes el mercado de los videojuegos se ha encontrado en un mejor momento. En la actualidad existen multitud de plataformas disponibles y la irrupción de los dispositivos móviles ha revolucionado el sector.\n' +
    '\n' +
    'La existencia de múltiples plataformas implica grandes retos para los desarrolladores en la toma de decisiones, tanto en la elección de las plataformas como en el dimensionamiento de los equipos de trabajo.\n' +
    '\n' +
    'Una solución a estos problemas es utilizar un motor de juegos, y sin lugar a dudas el motor más popular y usado del momento es Unity.\n' +
    '\n' +
    'Unity es el motor más popular por razones como sus poderosas herramientas, su capacidad de generar juegos en más de 20 plataformas distintas, su excelente curva de aprendizaje y los centenares de complementos disponibles para él desarrollados por terceros. ',
    teacher: 'Jordi Linares Pellicer',
    provider: 'Universitat Politècnica de Valencia',
    provider_location: 'Spain',
    provider_email: 'JordiP@gmail.com',
    provider_detail:
      'La Universitat Politècnica de València es una institución pública, dinámica e innovadora, dedicada a la investigación y a la docencia que, al mismo tiempo que mantiene fuertes vínculos con el entorno social en el que desarrolla sus actividades, opta por una decidida presencia en el extranjero. Es una universidad joven, que durante el curso académico 2018-2019 celebra su 50 aniversario. ',
  },
  {
    key: 12,
    img: result2,
    title: 'HTML5 Coding Essentials and Best Practices',
    rate: 4,
    price: '$ 129.00',
    deadline: '2018.6.30',
    description: 'Learn how to write Web pages and Web sites by mastering HTML5 coding techniques and best practices.',
    registered_total: '50/100',
    start_date: '2018.7.1',
    class_amount: '2',
    lessons_perWeek_totalWeeks: '5 to 8 & 6',
    course_detail: 'HTML5 is the standard language of the Web, developed by W3C. For application developers and industry, HTML5 represents a set of features that people will be able to rely on for years to come. HTML5 is supported on a wide variety of devices, lowering the cost of creating rich applications to reach users everywhere.\n' +
    '\n' +
    'Whatever mobile phones, connected objects, game consoles, automobile dashboards, and devices that haven’t even been considered yet, HTML5 helps write once and deploy anywhere!\n' +
    '\n' +
    'In this course, you will learn all the new HTML5 features to help create great Web sites and applications in a simplified but powerful way. HTML5 provides native support for video and audio without plug-ins, provides support for offline applications, for games with smooth interactive animations, and much more.',
    teacher: 'Michel Buffa',
    provider: 'W3Cx',
    provider_location: 'USA',
    provider_email: 'MichelB@gmail.com',
    provider_detail:
    'The World Wide Web Consortium (W3C) is an international consortium where Member organizations, a full-time staff, and the public work together to develop Web standards and guidelines designed to ensure long-term growth for the Web. W3C\'s goal is for the Web to connect humanity in a way that makes access to knowledge more efficient and equitable.\n' +
    '\n' +
    'Founded in 1994 by the inventor of the Web, Tim Berners-Lee, W3C has successfully overseen processes of issue raising, design, consensus building and testing resulting in over 335 technical standards that make the Web work. Success stories include HTML5, XML, CSS and Web accessibility guidelines.',
  },
  {
    key: 14,
    img: result4,
    title: 'Laboratorio di Programmazione',
    rate: 4,
    price: '$ 60.00',
    deadline: '2018.8.31',
    description: 'Impara a risolvere problemi complessi attraverso l\'uso del computer e avvicinati alla magia degli algoritmi.',
    registered_total: '35/100',
    start_date: '2018.9.1',
    class_amount: '2',
    lessons_perWeek_totalWeeks: '4 & 8',
    course_detail: 'Il linguaggio di programmazione è uno degli strumenti che abbiamo per interpretare e risolvere i problemi di tutti i giorni. Un linguaggio che è alla base di problemi comuni, come le previsioni del tempo o l\'analisi della deformazione di una struttura di un\'auto in un incidente stradale.\n' +
    '\n' +
    'Questo corso fornisce un’introduzione alle metodologie e agli strumenti per la risoluzioni di problemi attraverso l\'uso del computer. Sarai guidato nell\'individuazione di metodologie di progetto, sviluppo ed analisi degli algoritmi di base per il calcolo scientifico nonché all’uso dei principali strumenti di calcolo (hardware e software), con particolare riguardo all’influenza che questi ultimi esercitano sullo sviluppo degli algoritmi stessi.',
    teacher: 'Marco Lapegna, Prof',
    provider: 'Università Federico II',
    provider_location: 'Italy',
    provider_email: 'MarcoL@gmail.com',
    provider_detail:
    'Free online courses from Università degli Studi di Napoli Federico II\n' +
    'Fondata nel 1224, l\'Università degli Studi di Napoli Federico II è la più antica Università laica d’Europa. Con il suo Centro “Federica Weblearning”, è all’avanguardia nell’innovazione della didattica multimediale online.\n' +
    '\n' +
    'Le piattaforme di Federica offrono oltre 300 corsi blended e 75 MOOCs aperti a tutti e tenuti da prestigiosi docenti della Federico II e di altri Atenei nazionali e internazionali. Con oltre 5milioni di contatti, Federica presenta un design di straordinaria efficacia che integra in modalità seamless testi, video e link alle più autorevoli fonti online. Scopri di più su www.federica.eu.',
  },
  {
    key: 0,
    img: recommendation0,
    title: 'Computer Application in Economic Management',
    rate: 5,
    price: '¥ 99.00',
    deadline: '2018.5.15',
    description: 'Help students master computer skills and improve the quality and efficiency of economic and management problems.',
    registered_total: '40/500',
    start_date: '2018.5.26',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '2 & 16',
    course_detail: 'This course is based on helping students master and apply modern computer technology, solving various economic management theories and practical problems, and taking the computer knowledge and skills that economic managers must have in the content arrangement as the basic starting point, and computer technology and quantitative analysis methods. It is closely integrated with the principles of economic management and fully reflects the interdependence, mutual penetration, mutual support, mutual influence, and mutual restraint with other economic management courses. It is the first of its kind in the economics and management disciplines of financial institutions and all other universities in the country.',
    teacher: 'Professor: LanJuan Liu',
    provider: 'Shanghai University of Finance',
    provider_location: 'China',
    provider_email: 'LjLiu@gmail.com',
    provider_detail:
      'Shanghai University of Finance and Economics is a multi-disciplinary national key university directly under the Ministry of Education of the People\'s Republic of China. It is the national "211 Project" and "985 Project." Advanced Discipline Innovation Platform “Key universities have been selected as “National High-level Innovative Talents Base for Overseas Talents”[1], “Key Research Base for Humanities and Social Sciences of the Ministry of Education”, “Excellent Legal Talents Education and Training Program”, and “National Construction of High-Level Universities” The "Government Graduate Program" is one of the first batch of doctoral awarding units in the country and is jointly built by the Ministry of Education, the Ministry of Finance, and the Shanghai Municipal People\'s Government.',
  },
  {
    key: 13,
    img: result3,
    title: 'AWS Developer: Optimizing on AWS',
    rate: 5,
    price: '$ 149.00',
    deadline: '2018.6.11',
    description: 'Learn from AWS experts how to leverage your developer skills to optimize applications in the AWS Cloud.',
    registered_total: '150/500',
    start_date: '2018.6.18',
    class_amount: '8',
    lessons_perWeek_totalWeeks: '4 & 6',
    course_detail: 'Get hands-on training from AWS staff to optimize applications on the AWS platform. \n' +
    '\n' +
    'This course, part of the AWS Developer Professional Series, will focus on what you need to know to help you optimize your applications and optimize how you work in AWS. We strongly recommend that you complete Course 1, "Building on AWS" before starting this class.\n' +
    '\n' +
    'You will look at ways to improve utilization by using containers with the Amazon Elastic Container Service (Amazon ECS), caching services such as Amazon CloudFront and Amazon ElastiCache, and monitoring tools such as Amazon CloudWatch. You will look at serverless architectures using Amazon DynamoDB, Amazon API Gateway and, AWS Lambda. You will explore the AWS Command Line Interface (CLI), AWS Identity and Access Management (IAM) and learn how to use the AWS Key Management Service (KMS). You will finish off the class with a deep dive into AWS CloudFormation and a capstone exercise where you will debug a CloudFormation template.',
    teacher: 'None Yet',
    provider: 'AWS',
    provider_location: 'USA',
    provider_email: 'amazonWeb@gmail.com',
    provider_detail:
    'Free online courses from Amazon Web Services\n' +
    'Since 2006, Amazon Web Services has been the world’s most comprehensive and broadly adopted cloud platform. AWS offers over 90 fully featured services for compute, storage, networking, database, analytics, application services, deployment, management, developer, mobile, Internet of Things (IoT), Artificial Intelligence (AI), security, hybrid and enterprise applications, from 44 Availability Zones (AZs) across 16 geographic regions in the U.S., Australia, Brazil, Canada, China, Germany, India, Ireland, Japan, Korea, Singapore, and the UK. AWS services are trusted by millions of active customers around the world — including the fastest-growing startups, largest enterprises, and leading government agencies — to power their infrastructure, make them more agile, and lower costs. To learn more about AWS, visit https://aws.amazon.com.',
  },
  {
    key: 11,
    img: result1,
    title: 'Microsoft Bot Framework and Conversation as a Platform',
    rate: 5,
    price: '$ 99.00',
    deadline: '2018.5.31',
    description: 'Explore “Conversation as a Platform” with the Microsoft Bot Framework and create your own Cortana Skills bot that integrates AI.',
    registered_total: '280/400',
    start_date: '2018.6.7',
    class_amount: '8',
    lessons_perWeek_totalWeeks: '3 to 5 & 5',
    course_detail: 'The Microsoft Bot Framework is a powerful set of services, tools, and SDKs that provides a rich foundation or "framework" for developers to build and connect intelligent bots. \n' +
    '\n' +
    'By leveraging the Microsoft Bot Framework, developers can create, integrate, and manage a wide variety of bots and bot experiences that interact with users naturally. The tools and services available in Microsoft Bot Framework dramatically reduce the amount of code and coordination required to develop “enterprise-ready” bot experiences. \n' +
    '\n' +
    'In this practical course, you\'ll explore “Conversation as a Platform” as it pertains to natural language understanding, bots, and Cortana. You\'ll work through hands-on exercises to learn how to piece them together—and find out how to make “Conversation as a Platform” a reality in your organization. \n' +
    '\n' +
    'The course starts with an overview of the Microsoft Bot Framework, and then takes a look at Azure Bot Service, which is designed to provision every resource required for production bots at the same time, as an integrated collection of services. The course material also shows how Azure Bot Service provides an integrated environment, specifically designed for developing bots.',
    teacher: 'Lei Ma & Scott Peterson',
    provider: 'Microsoft',
    provider_location: 'USA',
    provider_email: 'ScottP@gmail.com',
    provider_detail:
    '“Be passionate and bold. Always keep learning. You stop doing useful things if you don\'t learn.” – Satya Nadella, CEO, Microsoft\n' +
    '\n' +
    'We live in a mobile-first and cloud-first world. Computing is ubiquitous, and experiences span devices and exhibit ambient intelligence. Billions of sensors, screens and devices – in conference rooms, living rooms, cities, cars, phones, PCs – are forming a vast network and streams of data that simply disappear into the background of our lives. This computing power will digitize nearly everything around us, and will derive insights from all of the data being generated by interactions among people and between people and machines. We are moving from a world where computing power was scarce to a place where it now is almost limitless, and where the true scarce commodity is increasingly human attention.',
  },
];

//首页推荐
const recommendation = [
  {
    key: 0,
    img: recommendation0,
    title: 'Computer Application in Economic Management',
    rate: 5,
    price: '$ 99.00',
    deadline: '2018.5.15',
    description: 'Help students master computer skills and improve the quality and efficiency of economic and management problems.',
    registered_total: '40/500',
    start_date: '2018.5.26',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '2 & 16',
    course_detail: 'This course is based on helping students master and apply modern computer technology, solving various economic management theories and practical problems, and taking the computer knowledge and skills that economic managers must have in the content arrangement as the basic starting point, and computer technology and quantitative analysis methods. It is closely integrated with the principles of economic management and fully reflects the interdependence, mutual penetration, mutual support, mutual influence, and mutual restraint with other economic management courses. It is the first of its kind in the economics and management disciplines of financial institutions and all other universities in the country.',
    teacher: 'Professor: LanJuan Liu',
    provider: 'Shanghai University of Finance',
    provider_location: 'xxx',
    provider_email: 'xxx@xxx.com',
    provider_detail:
      'Shanghai University of Finance and Economics is a multi-disciplinary national key university directly under the Ministry of Education of the People\'s Republic of China. It is the national "211 Project" and "985 Project." Advanced Discipline Innovation Platform “Key universities have been selected as “National High-level Innovative Talents Base for Overseas Talents”[1], “Key Research Base for Humanities and Social Sciences of the Ministry of Education”, “Excellent Legal Talents Education and Training Program”, and “National Construction of High-Level Universities” The "Government Graduate Program" is one of the first batch of doctoral awarding units in the country and is jointly built by the Ministry of Education, the Ministry of Finance, and the Shanghai Municipal People\'s Government.',
  },
  {
    key: 1,
    img: recommendation1,
    title: 'Master Python',
    rate: 5,
    price: '$ 129.00',
    deadline: '2018.7.3',
    description: 'Take you master graphic design foundation skills.',
    registered_total: '2/500',
    start_date: '2018.7.18',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '6 & 12',
    course_detail: 'This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language. In the Capstone Project, you’ll use the technologies learned throughout the Specialization to design and create your own applications for data retrieval, processing, and visualization.',
    teacher: 'Associate Professor: Charles Severance',
    provider: 'The University of Michigan',
    provider_location: 'xxx',
    provider_email: 'michigan123@gmail.com',
    provider_detail: 'The University of Michigan is recognized as a leader in higher education due to the outstanding quality of its 19 schools and colleges, internationally recognized faculty, and departments with 250 degree programs.\n' +
    '\n' +
    '                    The mission of the University of Michigan is to serve the people of Michigan and the world through preeminence in creating, communicating, preserving and applying knowledge, art, and academic values, and in developing leaders and citizens who will challenge the present and enrich the future.\n',
  },
  {
    key: 2,
    img: recommendation2,
    title: 'Essay Writing',
    rate: 5,
    price: '$ 229.00',
    deadline: '2018.5.18',
    description: 'Getting started with Essay Writing.',
    registered_total: '2/500',
    start_date: '2018.6.10',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '1-3 & 4',
    course_detail: 'This is the second course in the Academic English: Writing specialization.  By introducing you to three types of academic essays, this course will especially help prepare you for work in college classes, but anyone who wants to improve his or her writing skills can benefit from this course.',
    teacher: 'Instructor, International Programs: Tamy Chapman',
    provider: 'UCI Division of Continuing Education',
    provider_location: 'xxx',
    provider_email: 'xxx123@gmail.com',
    provider_detail: 'Consistently ranked among the nation’s best universities, UC Irvine is noted for top-rated research and graduate programs, extensive commitment to undergraduate education, and growing number of professional schools and programs of academic and social significance.\n+' +
    'Since 1965, the University of California, Irvine has combined the strengths of a major research university with the bounty of an incomparable Southern California location. UCI’s unyielding commitment to rigorous academics, cutting-edge research, and leadership and character development makes the campus a driving force for innovation and discovery that serves our local, national and global communities in many ways.\n',
  },
  {
    key: 3,
    img: recommendation3,
    title: 'Fundamentals of Graphic Design',
    rate: 5,
    price: '$ 479.00',
    deadline: '2018.8.18',
    description: 'Take you master graphic design foundation skills.',
    registered_total: '2/500',
    start_date: '2018.9.1',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '5-8 & 4',
    course_detail: 'Graphic Design is all around us! Words and pictures—the building blocks of graphic design—are the elements that carry the majority of the content in both the digital world and the printed world. As graphic design becomes more visible and prevalent in our lives, graphic design as a practice becomes more important in our culture.',
    teacher: 'Faculty, Program in Graphic Design: Anther Kiley',
    provider: 'CaLARTS',
    provider_location: 'xxx',
    provider_email: 'xxx@gmail.com',
    provider_detail: 'CalArts\' Graphic Design program is one of the premier programs for the study of graphic and print arts in the U.S.\n' +
    '\n' +
    'CalArts has earned an international reputation as the leading college of the visual and performing arts in the United States. Offering rigorous undergraduate and graduate degree programs through six schools—Art, Critical Studies, Dance, Film/Video, Music, and Theater—CalArts has championed creative excellence, critical reflection, and the development of new forms and expressions.\n',
  },
  {
    key: 4,
    img: recommendation4,
    title: 'Neural Networks and Deep Learning',
    rate: 5,
    price: 'FREE',
    deadline: '2018.7.14',
    description: 'If you want to break into cutting-edge AI, this course will help you do so.',
    registered_total: '2/500',
    start_date: '2018.9.1',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '6 & 4',
    course_detail: 'In this course, you will learn the foundations of deep learning. When you finish this class, you will:\n' +
    '- Understand the major technology trends driving Deep Learning\n' +
    '- Be able to build, train and apply fully connected deep neural networks \n' +
    '- Know how to implement efficient (vectorized) neural networks \n' +
    '- Understand the key parameters in a neural network\'s architecture ',
    teacher: 'Professor:  Andrew Ng',
    provider: 'deeplearning.ai',
    provider_location: 'xxx',
    provider_email: 'deeplearning123@gmail.com',
    provider_detail: 'deeplearning.ai is Andrew Ng\'s new venture which amongst others, strives for providing comprehensive AI education beyond borders.',
  },
];

//首页最新
const newest = [
  {
    key: 6,
    img: course6,
    title: 'First Nights',
    rate: 5,
    price: '$ 49.00',
    deadline: '2018.7.18',
    description: 'Berlioz’s Symphonie Fantastique and Program Music in the 19th Century',
    registered_total: '12/100',
    start_date: '2018.8.1',
    class_amount: '2',
    lessons_perWeek_totalWeeks: '3 & 3',
    course_detail: 'Six years after the premiere of Beethoven’s monumental Ninth Symphony, composer Hector Berlioz sought to make use of the symphonic genre, but on his own terms. Indeed, he wrote not only a five-movement symphony, but also a narrative program to accompany and explain the symphony.\n' +
    '\n' +
    'This music course introduces students to the music and programmatic elements of Berlioz’s Symphonie Fantastique, illuminating a new direction for nineteenth-century music. The course’s grand finale is a live performance of the entire symphony by the Harvard Radcliffe Orchestra.\n' +
    '\n' +
    'Harvard’s Thomas Forrest Kelly (Morton B. Knafel Professor of Music) guides learners through Berlioz’s Symphony Fantastique,, highlighting Berlioz’s compostional process, his innovative orchestration, and the reception of his controversial piece of narrative instrumental music.\n' +
    '\n' +
    'You will learn the basics of Romantic musical style, Berlioz’s creative expansion of the standard orchestra, and the debates surrounding the idea of purely musical narrative in the 19th century.',
    teacher: 'Thomas Forrest Kelly',
    provider: 'Harvard University',
    provider_location: 'USA',
    provider_email: 'ThomasK@gmail.com',
    provider_detail: 'Free online courses from Harvard University\n' +
    'Harvard University is devoted to excellence in teaching, learning, and research, and to developing leaders in many disciplines who make a difference globally. Harvard faculty are engaged with teaching and research to push the boundaries of human knowledge. The University has twelve degree-granting Schools in addition to the Radcliffe Institute for Advanced Study.\n' +
    '\n' +
    'Established in 1636, Harvard is the oldest institution of higher education in the United States. The University, which is based in Cambridge and Boston, Massachusetts, has an enrollment of over 20,000 degree candidates, including undergraduate, graduate, and professional students. Harvard has more than 360,000 alumni around the world.',
  },
  {
    key: 7,
    img: course7,
    title: 'Just Money: Banking as if Society Mattered',
    rate: 4,
    price: '$ 49.00',
    deadline: '2018.6.11',
    description: 'Learn how banks can use capital as a tool to promote social and environmental wellbeing.',
    registered_total: '88/200',
    start_date: '2018.6.23',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '4 & 16',
    course_detail: 'What do you know about banking? Do you know what your bank does with your money? The recent financial crisis highlighted some of the most fundamental issues with the mainstream banking system.\n' +
    '\n' +
    'This course looks into banks that operate differently, namely, “just banks" that use capital and finance as a tool to address social and ecological challenges.\n' +
    '\n' +
    'This course is for anyone who wants to understand the unique role banks play as intermediaries in our economy and how they can leverage that position to produce positive social, environmental, and economic change.\n' +
    '\n' +
    'The instructors of this course have worked for over 10 years with just banks from around the world, as well as in the fields of community development, economic democracy, and social change.\n' +
    '\n' +
    'No previous knowledge of finance or banking is needed to take this course.',
    teacher: 'Katrin Kaeufer',
    provider: 'MIT',
    provider_location: 'USA',
    provider_email: 'MITmooc@gmail.com',
    provider_detail: 'Free online courses from Massachusetts Institute of Technology\n' +
    'Massachusetts Institute of Technology — a coeducational, privately endowed research university founded in 1861 — is dedicated to advancing knowledge and educating students in science, technology, and other areas of scholarship that will best serve the nation and the world in the 21st century. Learn more about MIT. Through MITx, the Institute furthers its commitment to improving education worldwide.\n' +
    '\n' +
    'MITx Courses\n' +
    'MITx courses embody the inventiveness, openness, rigor and quality that are hallmarks of MIT, and many use materials developed for MIT residential courses in the Institute\'s five schools and 33 academic disciplines. Browse MITx courses below.\n' +
    '\n' +
    ' \n' +
    '\n' +
    'Massachusetts Institute of Technology MOOCs\n' +
    'Browse free online courses in a variety of subjects. Massachusetts Institute of Technology courses found below can be audited free or students can choose to receive a verified certificate for a small fee. Select a course to learn more.',
  },
  {
    key: 8,
    img: recommendation9,
    title: 'Applied Data Science with Python',
    rate: 5,
    price: '$ 129.00',
    deadline: '2018.5.20',
    description: 'Gain new insights into your data 。Learn to apply data science methods and techniques, and acquire analysis skills.',
    registered_total: '2/500',
    start_date: '2018.5.21',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '6 & 12',
    course_detail: 'This course will introduce the learner to network analysis through tutorials using the NetworkX library. The course begins with an understanding of what network analysis is and motivations for why we might model phenomena as networks. The second week introduces the concept of connectivity and network robustness. The third week will explore ways of measuring the importance or centrality of a node in a network. The final week will explore the evolution of networks over time and cover models of network generation and the link prediction problem. ',
    teacher: 'Associate Professor: Charles Severance, Kevyn Collins-Thompson',
    provider: 'The University of Michigan',
    provider_location: 'USA',
    provider_email: 'michigan123@gmail.com',
    provider_detail: 'Michigan’s academic vigor offers excellence across disciplines and around the globe. The University is recognized as a leader in higher education due to the outstanding quality of its 19 schools and colleges, internationally recognized faculty, and departments with 250 degree programs.',
  },
  {
    key: 9,
    img: recommendation10,
    title: 'Algorithms, Part II',
    rate: 5,
    price: '¥ 0.00',
    deadline: '2018.7.14',
    description: 'Take you master algorithms skills.',
    registered_total: '2/500',
    start_date: '2018.8.1',
    class_amount: '5',
    lessons_perWeek_totalWeeks: '6 & 6',
    course_detail: ' This course covers the essential information that every serious programmer needs to know about algorithms and data structures, with emphasis on applications and scientific performance analysis of Java implementations. Part I covers elementary data structures, sorting, and searching algorithms. Part II focuses on graph- and string-processing algorithms.',
    teacher: 'Associate Professor: Robert Sedgewick',
    provider: 'Princeton University',
    provider_location: 'USA',
    provider_email: 'princeton123@gmail.com',
    provider_detail: 'Princeton University is a private research university located in Princeton, New Jersey, United States. It is one of the eight universities of the Ivy League, and one of the nine Colonial Colleges founded before the American Revolution.',
  },
  {
    key: 10,
    img: result0,
    title: 'Introducción al desarrollo de videojuegos con Unity',
    rate: 4,
    price: '$ 55.00',
    deadline: '2018.6.10',
    description: 'Aprende a desarrollar videojuegos multiplataforma utilizando una de las herramientas más populares del mercado.',
    registered_total: '80/200',
    start_date: '2018.6.23',
    class_amount: '4',
    lessons_perWeek_totalWeeks: '2 & 6',
    course_detail: 'Nunca antes el mercado de los videojuegos se ha encontrado en un mejor momento. En la actualidad existen multitud de plataformas disponibles y la irrupción de los dispositivos móviles ha revolucionado el sector.\n' +
    '\n' +
    'La existencia de múltiples plataformas implica grandes retos para los desarrolladores en la toma de decisiones, tanto en la elección de las plataformas como en el dimensionamiento de los equipos de trabajo.\n' +
    '\n' +
    'Una solución a estos problemas es utilizar un motor de juegos, y sin lugar a dudas el motor más popular y usado del momento es Unity.\n' +
    '\n' +
    'Unity es el motor más popular por razones como sus poderosas herramientas, su capacidad de generar juegos en más de 20 plataformas distintas, su excelente curva de aprendizaje y los centenares de complementos disponibles para él desarrollados por terceros. ',
    teacher: 'Jordi Linares Pellicer',
    provider: 'Universitat Politècnica de Valencia',
    provider_location: 'Spain',
    provider_email: 'JordiP@gmail.com',
    provider_detail:
      'La Universitat Politècnica de València es una institución pública, dinámica e innovadora, dedicada a la investigación y a la docencia que, al mismo tiempo que mantiene fuertes vínculos con el entorno social en el que desarrolla sus actividades, opta por una decidida presencia en el extranjero. Es una universidad joven, que durante el curso académico 2018-2019 celebra su 50 aniversario. ',
  },
];

const cs_courses = [

];

const ss_courses = [

];

const ha_courses = [

];

const ll_courses = [

];

const eco_courses = [

];

export default {
  courses,
  favorite,
  search_result1,
  search_result2,
  search_result3,
  recommendation,
  newest,
  cs_courses,
  ss_courses,
  ha_courses,
  ll_courses,
  eco_courses,
}
