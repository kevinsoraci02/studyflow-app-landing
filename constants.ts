import { 
  Timer, 
  Trophy, 
  ShoppingBag, 
  BrainCircuit, 
  Instagram, 
  Twitter, 
  Youtube, 
  Video,
  BarChart3
} from 'lucide-react';
import { Feature, Testimonial, FaqItem, SocialLink } from './types';

export const APP_URL = "https://studyflowbrain-landing.netlify.app";
export const LOGO_SRC = "/logo.png"; // Updated to absolute path for public folder assets

// CONFIGURACIÓN: Cambia esto a 'true' cuando quieras mostrar los iconos de redes sociales
export const SHOW_SOCIALS = false;

export const FEATURES: Feature[] = [
  {
    id: 'pomodoro',
    title: 'Temporizador de Enfoque',
    description: 'Enfócate y estudia mejor con un temporizador Pomodoro personalizable diseñado para mantenerte en estado de flujo.',
    icon: Timer,
    color: 'text-secondary'
  },
  {
    id: 'ranking',
    title: 'Ranking Estudiantil',
    description: 'Gana XP por cada minuto de estudio y compite por la cima de la clasificación global con otros estudiantes.',
    icon: Trophy,
    color: 'text-yellow-400'
  },
  {
    id: 'shop',
    title: 'Tienda de Coleccionables',
    description: 'Gana XP en tus sesiones de estudio y gástalo en la tienda exclusiva de coleccionables para personalizar tu perfil.',
    icon: ShoppingBag,
    color: 'text-pink-500'
  },
  {
    id: 'ai-tutor',
    title: 'Tutor IA Integrado',
    description: 'Obtén ayuda personalizada del tutor IA integrado. Haz preguntas y obtén respuestas instantáneas.',
    icon: BrainCircuit,
    color: 'text-primary'
  },
  {
    id: 'analytics',
    title: 'Estadísticas y Análisis',
    description: 'Visualiza tu progreso con gráficos detallados, rastrea tus horas de estudio y descubre tus momentos más productivos.',
    icon: BarChart3,
    color: 'text-blue-400'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Estudiante de Medicina',
    quote: "StudyFlow AI cambió por completo mi forma de prepararme para los exámenes. ¡El tutor de IA aclara temas complejos al instante!",
    avatarUrl: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Estudiante de Ingeniería Informática',
    quote: "Solía distraerme fácilmente. El sistema de clasificación realmente me motiva a estudiar más para superar a mis amigos.",
    avatarUrl: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '3',
    name: 'Emily Rose',
    role: 'Estudiante de Bachillerato',
    quote: "¡Los coleccionables son muy divertidos! Se siente como un juego, pero mis notas realmente están mejorando.",
    avatarUrl: 'https://picsum.photos/100/100?random=3'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "¿Es StudyFlow AI gratuito?",
    answer: "¡Sí, es completamente gratuito! La opción de pago existe únicamente para quienes desean tener chat ilimitado con el Tutor IA. El resto de las funciones son gratis para siempre."
  },
  {
    question: "¿Cómo funciona el Tutor IA?",
    answer: "Nuestro Tutor IA utiliza modelos avanzados para entender tus materiales de estudio y responder preguntas en tiempo real, tal como lo haría un tutor humano."
  },
  {
    question: "¿Puedo usarlo en mi móvil?",
    answer: "Absolutamente. StudyFlow AI es una Aplicación Web Progresiva (PWA) optimizada para dispositivos móviles iOS y Android."
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', url: '#', icon: Instagram },
  { name: 'X / Twitter', url: '#', icon: Twitter },
  { name: 'TikTok', url: '#', icon: Video },
  { name: 'YouTube', url: '#', icon: Youtube },
];