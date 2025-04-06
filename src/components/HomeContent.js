"use client"
import Link from "next/link";
import styles from "../styles/Home.module.css";
import useLanguageStore from "@/store/languageStore";

const getDaysLeft = () => {
  const now = new Date();
  const deadline = new Date("2025-04-17T23:59:00"); // 17 Nisan 2025, 23:59

  const diffTime = deadline.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
};

export default function HomeContent() {

  
  const daysLeft = getDaysLeft();

  
  const { language } = useLanguageStore();
  const content = {
    en: {
      "buildPolicySection": {
        "title": "Help us build better policies for better lives",
        "intro": "The OECD’s work with governments around the world spans the breadth of diverse policy challenges, from artificial intelligence and climate change to regulation and education. The work you undertake will depend on the directorate you join. You may contribute directly to policy development or provide support within one of the corporate functions.",
        "mission": "Wherever you work at the OECD, you will be helping us in our mission to build better policies for better lives.",
        "subheading": "What you might do:",
        "list": [
          "Prepare studies and documents",
          "Carry out research and reviews of existing materials",
          "Collect, organise and analyse data",
          "Support the production of documents, working papers and publications resulting from the above activities, including drafting notes and preparing technical annexes",
          "Take part in meetings and seminars",
          "Liaise and build networks with officials in national administrations, researchers, other international organisations and delegations from member country",
          "Support the organisation of events, communication, planning and evaluation"
        ]
      },
      internSection: {
        heading: "Become an OECD intern",
        paragraphs: [
          "**OECD internships** aim to bring curious and motivated students from diverse backgrounds into the Organisation to support the work of the OECD. It is an opportunity for successful candidates to work alongside policy experts and other specialists and build on their analytical and technical skills in an international environment.",
          "The OECD welcomes interns on an on-going basis. Students enrolled in a fully accredited degree programme, including bachelor’s and master’s degrees and PhDs, during the entire duration of their internship can apply online throughout the year.",
          "We offer flexible arrangements and selected interns can conduct internships **in person, in hybrid format, or fully remotely,** depending on the needs of their teams.",
        ],
      },
      wherework: "Where you might work",
      wherework2: "Support us in one of the following areas:",
      "whereworkText": [
        "Agriculture and fisheries",
        "Digital",
        "Employment",
        "Finance and investment",
        "Industry, business and entrepreneurship",
        "Science, technology and innovation",
        "Trade",
        "Climate change",
        "Economy",
        "International Energy Agency",
        "Governance",
        "Nuclear Energy Agency",
        "Society",
        "International Transport Forum",
        "Development",
        "Education and skills",
        "Environment",
        "Health",
        "Regional, rural and urban development",
        "Taxation"
      ],
      title: "OECD Online Internship Programme 2025",
      description:
        "The Organisation for Economic Co-operation and Development (OECD) proudly invites international students to apply for the prestigious 2025 Online Assessment Internship Programme.",
      applyNow: "Apply Now",
      overviewTitle: "Programme Overview",
      overviewText:
        "This initiative supports outstanding candidates by facilitating their entry into international academic communities. Participants will engage in interactive online assessments developed in collaboration with prominent global institutions, ensuring a high standard of academic rigor." ,
      overviewText2:  "Through this programme, applicants will have the opportunity to demonstrate their analytical and critical thinking skills in a competitive yet supportive environment. The assessments are designed not only to evaluate knowledge, but also to foster intellectual curiosity and global perspectives. Successful participants may gain access to exclusive resources, mentorship opportunities, and future academic pathways within internationally recognized frameworks.",
      eligibilityTitle: "Who can apply?",
      eligibilityList: [
        "Currently enrolled undergraduate or postgraduate students.",
        "Fluent in English or French.",
        "Strong analytical and communication skills.",
      ],
      applyTitle: "Application Process",
      applySteps: [
        "Complete the online application form.",
        "Participate in remote assessment stages.",
        "Receive feedback and final decision.",
      ],
    },
    fr: {
      wherework: "Où vous pourriez travailler",
      wherework2: "Soutenez-nous dans l’un des domaines suivants :",

      "whereworkText": [
        "Agriculture et pêche",
        "Numérique",
        "Emploi",
        "Finance et investissement",
        "Industrie, affaires et entrepreneuriat",
        "Science, technologie et innovation",
        "Commerce",
        "Changement climatique",
        "Économie",
        "Agence internationale de l'énergie",
        "Gouvernance",
        "Agence de l'énergie nucléaire",
        "Société",
        "Forum international des transports",
        "Développement",
        "Éducation et compétences",
        "Environnement",
        "Santé",
        "Développement régional, rural et urbain",
        "Fiscalité"
      ],
      "buildPolicySection": {
        "title": "Aidez-nous à élaborer de meilleures politiques pour une vie meilleure",
        "intro": "Le travail de l'OCDE avec les gouvernements du monde entier couvre une large gamme de défis politiques, allant de l'intelligence artificielle et du changement climatique à la réglementation et à l'éducation. Le travail que vous effectuerez dépendra de la direction que vous rejoindrez. Vous pourrez contribuer directement à l'élaboration des politiques ou apporter un soutien au sein de l'une des fonctions corporatives.",
        "mission": "Où que vous travailliez à l'OCDE, vous contribuerez à notre mission de construire de meilleures politiques pour une vie meilleure.",
        "subheading": "Ce que vous pourriez faire :",
        "list": [
          "Préparer des études et des documents",
          "Effectuer des recherches et des revues de documents existants",
          "Collecter, organiser et analyser des données",
          "Soutenir la production de documents, de documents de travail et de publications résultant des activités ci-dessus, y compris la rédaction de notes et la préparation d’annexes techniques",
          "Participer à des réunions et séminaires",
          "Collaborer et créer des réseaux avec des fonctionnaires des administrations nationales, des chercheurs, d'autres organisations internationales et des délégations des pays membres",
          "Soutenir l'organisation d'événements, la communication, la planification et l'évaluation"
        ]
      },

      internSection: {
        heading: "Devenez stagiaire à l’OCDE",
        paragraphs: [
          "**Les stages à l'OCDE** visent à attirer des étudiants curieux et motivés de divers horizons pour soutenir les travaux de l'Organisation. C'est une opportunité pour les candidats retenus de travailler aux côtés d'experts en politiques publiques et d'autres spécialistes, tout en renforçant leurs compétences analytiques et techniques dans un environnement international.",
          "L’OCDE accueille des stagiaires de manière continue. Les étudiants inscrits dans un programme de diplôme accrédité, y compris en licence, master ou doctorat, peuvent postuler en ligne tout au long de leur période de stage.",
          "Nous offrons des modalités de stage flexibles : les stages peuvent s’effectuer **en présentiel, en format hybride ou entièrement à distance,** selon les besoins des équipes.",
        ],
      },
      title: "Programme de stage en ligne de l'OCDE 2025",
      description:
        "L'Organisation de coopération et de développement économiques (OCDE) invite fièrement les étudiants internationaux à postuler au prestigieux programme de stage d’évaluation en ligne 2025.",
      applyNow: "Postuler maintenant",
      overviewTitle: "Aperçu du programme",
      overviewText: "Cette initiative soutient les candidats d’exception en facilitant leur intégration dans des communautés académiques internationales. Les participants prendront part à des évaluations en ligne interactives, développées en collaboration avec des institutions mondiales de renom, garantissant un haut niveau d’exigence académique. ",
      overviewText2: "Grâce à ce programme, les candidats auront l’occasion de démontrer leurs compétences en pensée analytique et critique dans un environnement compétitif mais bienveillant. Les évaluations visent non seulement à évaluer les connaissances, mais aussi à encourager la curiosité intellectuelle et une perspective globale. Les participants retenus pourront accéder à des ressources exclusives, à des opportunités de mentorat et à des parcours académiques reconnus à l’échelle internationale.",
      eligibilityTitle: "Qui peut postuler ?",
      eligibilityList: [
        "Étudiants actuellement inscrits en licence ou en master.",
        "Parle couramment l'anglais ou le français.",
        "Solides compétences analytiques et en communication.",
      ],
      applyTitle: "Processus de candidature",
      applySteps: [
        "Remplissez le formulaire de candidature en ligne.",
        "Participez aux étapes d'évaluation à distance.",
        "Recevez un retour et la décision finale.",
      ],
    },
    tr: {
      wherework: "Çalışabileceğiniz alanlar",
      wherework2: "Aşağıdaki alanlardan birinde bize destek olun:",

      "whereworkText": [
    "Tarım ve balıkçılık",
    "Dijital",
    "İstihdam",
    "Finans ve yatırım",
    "Sanayi, iş dünyası ve girişimcilik",
    "Bilim, teknoloji ve yenilik",
    "Ticaret",
    "İklim değişikliği",
    "Ekonomi",
    "Uluslararası Enerji Ajansı",
    "Yönetişim",
    "Nükleer Enerji Ajansı",
    "Toplum",
    "Uluslararası Ulaştırma Forumu",
    "Kalkınma",
    "Eğitim ve beceriler",
    "Çevre",
    "Sağlık",
    "Bölgesel, kırsal ve kentsel kalkınma",
    "Vergilendirme"
  ],
      buildPolicySection: {
        title: "Daha iyi hayatlar için daha iyi politikalar geliştirmemize yardım et",
        intro: "OECD'nin dünya genelindeki hükümetlerle yürüttüğü çalışmalar, yapay zekadan iklim değişikliğine, düzenlemelerden eğitime kadar geniş bir politika yelpazesini kapsar. Üstleneceğin görev, katıldığın direktörlüğe bağlı olacaktır. Politikaların geliştirilmesine doğrudan katkıda bulunabilir ya da kurumsal işlevlerden birine destek verebilirsin.",
        mission: "OECD'de nerede çalışırsan çalış, daha iyi hayatlar için daha iyi politikalar geliştirme misyonumuza katkıda bulunmuş olacaksın.",
        subheading: "Yapabileceklerin:",
        list: [
          "Çalışmalar ve belgeler hazırlamak",
          "Mevcut materyaller üzerinde araştırmalar yapmak ve değerlendirmeler yürütmek",
          "Veri toplamak, düzenlemek ve analiz etmek",
          "Belgelerin, çalışma kağıtlarının ve yayınların hazırlanmasında destek olmak; teknik ekler ve notlar dahil",
          "Toplantılara ve seminerlere katılmak",
          "Üye ülke yönetimleri, araştırmacılar ve diğer uluslararası kuruluşlarla ağlar kurmak",
          "Etkinlikler, iletişim, planlama ve değerlendirme organizasyonuna destek sağlamak"
        ]
      },

      internSection: {
        heading: "OECD Stajyeri Olun",
        paragraphs: [
          "**OECD staj programları**, farklı geçmişlerden gelen meraklı ve motive öğrencileri OECD’nin çalışmalarına destek olmak üzere kuruma dahil etmeyi amaçlar. Bu program, başarılı adaylara politika uzmanları ve diğer profesyonellerle birlikte çalışarak analitik ve teknik becerilerini uluslararası bir ortamda geliştirme fırsatı sunar.",
          "OECD, yıl boyunca stajyer kabul eder. Lisans, yüksek lisans veya doktora programlarına kayıtlı öğrenciler, stajları süresince çevrimiçi başvuru yapabilirler.",
          "Esnek çalışma düzenlemeleri sunuyoruz. Seçilen stajyerler, ihtiyaçlara bağlı olarak stajlarını **yüz yüze, hibrit veya tamamen uzaktan** gerçekleştirebilir.",
        ],
      },
      title: "OECD Çevrimiçi Staj Programı 2025",
      description:
        "Ekonomik Kalkınma ve İşbirliği Örgütü (OECD), uluslararası öğrencileri saygın 2025 Çevrimiçi Değerlendirme Staj Programı'na başvurmaya davet ediyor.",
      applyNow: "Hemen Başvur",
      overviewTitle: "Program Özeti",
      overviewText: "Bu girişim, üstün yetenekli adayların uluslararası akademik topluluklara katılımını kolaylaştırarak onları desteklemeyi amaçlamaktadır. Katılımcılar, önde gelen küresel kurumlarla iş birliği içinde geliştirilen etkileşimli çevrimiçi değerlendirmelere katılacaklardır ve bu süreç, yüksek akademik standartlarla yürütülecektir. ",
      overviewText2: "Program kapsamında adaylar, analitik ve eleştirel düşünme becerilerini rekabetçi ama destekleyici bir ortamda sergileme fırsatı bulacaklardır. Değerlendirmeler yalnızca bilgi ölçmeyi değil, aynı zamanda entelektüel merakı teşvik etmeyi ve küresel bakış açıları kazandırmayı da hedeflemektedir. Başarılı katılımcılar, özel kaynaklara, mentorluk fırsatlarına ve uluslararası alanda tanınan akademik yollara erişim kazanabilirler.",
      eligibilityTitle: "Kimler başvurabilir?",
      eligibilityList: [
        "Lisans veya yüksek lisans öğrencisi olmak.",
        "İngilizce ve Fransızca dillerinden en az birini akıcı şekilde bilmek.",
        "Güçlü analiz ve iletişim becerilerine sahip olmak.",
      ],
      applyTitle: "Başvuru Süreci",
      applySteps: [
        "Çevrimiçi başvuru formunu doldurun.",
        "Uzaktan değerlendirme aşamalarına katılın.",
        "Geri bildirim alın ve nihai kararı öğrenin.",
      ],
    },
  };
  const t = content[language];

  return (
    <div className={styles.container}>
      <section className={styles.internInfoSection}>
        <div className={styles.internGrid}>
          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.description}>{t.description}</p>
          <Link href="/apply" className={styles.button}>
            {t.applyNow}
          </Link>
          <p className={styles.deadline}>
          {language === 'tr' && `${daysLeft} gün kaldı (17 Nisan 23:59'a)`}
          {language === 'en' && `${daysLeft} day(s) left until April 17, 11:59 PM`}
          {language === 'fr' && `Il reste ${daysLeft} jour(s) jusqu’au 17 avril à 23h59`}
        </p>
          
        </div>
        
      </section>

      <section className={styles.internInfoSection}>
        <div className={styles.internGrid}>
          <div className={styles.internLeft}>
              <h2>{t.overviewTitle}</h2>
            </div>
            <div className={styles.internRight}>
              <p>{t.overviewText}</p>
              <p>{t.overviewText2}</p>
          </div>
        </div>
      </section>

      <section className={styles.internInfoSection}>
        <div className={styles.internGrid}>
          <div className={styles.internLeft}>
            <h2>{t.internSection.heading}</h2>
          </div>
          <div className={styles.internRight}>
            {t.internSection.paragraphs.map((para, idx) => (
              <p
                key={idx}
                dangerouslySetInnerHTML={{
                  __html: para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                }}
              />
            ))}

            {/* YouTube iframe gömülü video */}
            <div className={styles.videoWrapper}>
              <iframe
                width="760"
                height="415"
                src="https://www.youtube.com/embed/T0Q7LtIYg7s?start=148"
                title="OECD Internship Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      


      <section className={styles.internInfoSection2}>
        <div className={styles.internGrid2}>
          <div className={styles.internLeft2}>
            <h2>{t.buildPolicySection.title}</h2>
            <p>{t.buildPolicySection.intro}</p>
            <p>{t.buildPolicySection.mission}</p>
            <h3><strong>{t.buildPolicySection.subheading}</strong></h3>
            <ul>
              {t.buildPolicySection.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
            
          <div className={styles.internRight2}>
            <img
              src="/interns-welcome-session.jpg" // public klasörü içindeyse bu şekilde kullanılır
              alt="OECD policy illustration"
              className={styles.internImage}
            />
          </div>
        </div>
      </section>
      
      <section className={styles.internInfoSection2}>
        <div className={styles.internGrid2}>
          <div className={styles.internLeft2}>
              <h2>{t.wherework}</h2>
              <h3>{t.wherework2}</h3>
            </div>
            <div className={styles.internRight2}>
              <ul>
                {t.whereworkText.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
          </div>
        </div>
      </section>


      

      <section className={styles.internInfoSection}>
        <div className={styles.internGrid}>
          <div className={styles.internLeft}>
            <h2>{t.eligibilityTitle}</h2>
          </div>
          <div className={styles.internRight}>
            <ul>
              {t.eligibilityList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
        </div>
        </div>
      </section>

      <section className={styles.internInfoSection}>
        <div className={styles.internGrid}>
          <div className={styles.internLeft}>
            <h2>{t.applyTitle}</h2>
          </div>
        <div className={styles.internRight}>
            <ol>
              {t.applySteps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
          <Link href="/apply" className={styles.button}>
            {t.applyNow}
          </Link>
        </div>
      </section>
    </div>
  );
}
