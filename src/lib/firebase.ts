import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  Timestamp,
} from "firebase/firestore";

// Firebase configuration - these are publishable keys
const firebaseConfig = {
  apiKey: "AIzaSyC-LQ8j23J9BnCa0Rzu0lFJjruAYktdPiQ",
  authDomain: "jikofoot-98797.firebaseapp.com",
  projectId: "jikofoot-98797",
  storageBucket: "jikofoot-98797.firebasestorage.app",
  messagingSenderId: "939981908434",
  appId: "1:939981908434:web:a7a1b06caef799aea8400b",
};

// Initialize Firebase only if config is provided
let app: ReturnType<typeof initializeApp> | null = null;
let db: ReturnType<typeof getFirestore> | null = null;

if (firebaseConfig.apiKey && firebaseConfig.projectId) {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

export { db };

// Content types for Firebase
export interface SiteContent {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
  };
  investment: {
    title: string;
    packages: Array<{
      name: string;
      price: string;
      duration: string;
      description: string;
      features: string[];
    }>;
  };
  sponsor: {
    title: string;
    description: string;
    benefits: string[];
  };
  event: {
    title: string;
    date: string;
    location: string;
    description: string;
    program: string[];
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    whatsapp: string;
    facebook: string;
    address: string;
  };
}

// Default content (used when Firebase is not configured or as fallback)
export const defaultContent: SiteContent = {
  hero: {
    title: "Révélez les Talents du Football Africain",
    subtitle:
      "Jikofoot connecte les jeunes footballeurs talentueux avec les sponsors, clubs et recruteurs du monde entier. Investissez dans l'avenir du football.",
    cta: "Devenir Investisseur",
  },
  about: {
    title: "Notre Vision",
    description:
      "Jikofoot est bien plus qu'une application. C'est la scène où les jeunes footballeurs africains peuvent enfin briller. Ils présentent leur parcours, publient leurs meilleurs moments et deviennent visibles pour les clubs, agents, recruteurs et académies du monde entier. Dans un monde où tant de talents passent inaperçus et où les clubs peinent à trouver la perle rare, Jikofoot construit un pont direct entre les futurs champions et les vraies opportunités.",
  },
  investment: {
    title: "Devenez Parrain",
    packages: [
      {
        name: "Parrain Bronze",
        price: "15 000 $ US",
        duration: "10 ans de parrainage",
        description:
          "Partager les commissions avec Jikofoot pendant 10 ans selon le nombre de filleuls",
        features: [
          "Commission sur les contrats",
          "Offre limitée",
          "Support prioritaire",
        ],
      },
      {
        name: "Parrain Argent",
        price: "25 000 $ US",
        duration: "20 ans de parrainage",
        description:
          "Partager les commissions avec Jikofoot pendant 20 ans selon le nombre de filleuls",
        features: [
          "Commission sur les contrats",
          "Offre illimitée",
          "Meilleurs filleuls",
          "Support VIP",
        ],
      },
      {
        name: "Parrain Or",
        price: "30 000 $ US",
        duration: "30 ans de parrainage",
        description:
          "Partager les commissions avec Jikofoot pendant 30 ans selon le nombre de filleuls",
        features: [
          "Commission maximale",
          "Offre illimitée",
          "Meilleurs filleuls",
          "Accès exclusif",
        ],
      },
      {
        name: "Co-Fondateur",
        price: "À partir de 50 000 $ US",
        duration: "Actionnaire",
        description:
          "Devenez co-fondateur et actionnaire de Jikofoot. Participez à la gouvernance et au développement stratégique.",
        features: [
          "Parts dans la société",
          "Participation au capital",
          "Influence stratégique",
          "Dividendes",
        ],
      },
    ],
  },
  sponsor: {
    title: "Devenez Sponsor",
    description:
      "L'Afrique regorge de jeunes footballeurs talentueux, mais trop peu accèdent aux opportunités qu'ils méritent. Jikofoot change cette réalité grâce à une application mobile innovante. En devenant sponsor, vous associez votre marque à un projet à fort impact social.",
    benefits: [
      "Exposition de marque stratégique sur l'application et les réseaux sociaux",
      "Présence privilégiée lors des événements et campagnes",
      "Association à un projet panafricain à fort potentiel médiatique",
      "Partenariats personnalisés adaptés à vos objectifs marketing et RSE",
    ],
  },
  event: {
    title: "Événement de Levée de Fonds",
    date: "20 Mars 2026 à 15h00",
    location: "Silikin Village, Kinshasa",
    description:
      "Jikofoot organise un événement stratégique de levée de fonds dédié à la présentation de sa vision, de son modèle innovant et de ses perspectives de croissance dans l'écosystème du football africain.",
    program: [
      "Présentation de Jikofoot, de sa mission et de son impact",
      "Démonstration de l'application et de ses fonctionnalités",
      "Exposition du business model et des projections financières",
      "Opportunités d'investissement et modalités de partenariat",
      "Session d'échanges et de networking",
    ],
  },
  contact: {
    title: "Contactez-Nous",
    email: "contact@jikofoot.pro",
    phone: "+243 XXX XXX XXX",
    whatsapp: "+243 XXX XXX XXX",
    facebook: "JikofootOfficial",
    address: "Kinshasa, République Démocratique du Congo",
  },
};
// await addDoc(collection(db, "siteContent"), {
//   ...defaultContent,
//   createdAt: Timestamp.now(),
// });
// Fetch content from Firebase
export async function fetchSiteContent(): Promise<SiteContent> {
  if (!db) {
    console.log("Firebase not configured, using default content");
    return defaultContent;
  }

  try {
    const contentDoc = await getDoc(
      doc(db, "siteContent", "FYqrvj8wJPdqL8ZIZf9r")
    );
    console.log(contentDoc.data());
    if (contentDoc.exists()) {
      return contentDoc.data() as SiteContent;
    }
  } catch (error) {
    console.error("Error fetching content from Firebase:", error);
  }

  return defaultContent;
}

// Submit form to Firebase
export interface FormSubmission {
  type: "event" | "sponsor" | "contact" | "investor";
  nom: string;
  prenom: string;
  telephone: string;
  email?: string;
  organisation?: string;
  message?: string;
  createdAt: Timestamp;
}

export async function submitForm(
  data: Omit<FormSubmission, "createdAt">
): Promise<boolean> {
  if (!db) {
    console.log("Firebase not configured, form submission simulated");
    return true;
  }

  try {
    await addDoc(collection(db, "submissions"), {
      ...data,
      createdAt: Timestamp.now(),
    });
    return true;
  } catch (error) {
    console.error("Error submitting form:", error);
    return false;
  }
}
