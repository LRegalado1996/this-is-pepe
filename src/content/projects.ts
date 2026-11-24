/**
 * Selected work and its case studies. Client projects are described
 * generically (industry and region only): clients are intentionally never
 * named here. Lucas's own products, such as LR Market, go by their name.
 */
import type { Locale } from "@/lib/i18n/config";
import { storeUrl } from "@/lib/seo/config";

export interface ProjectStat {
  value: number;
  label: string;
}

/** A talk or post where the project was presented or told by someone else. */
export interface ProjectMention {
  /** Where it appeared, e.g. "Streaver · LinkedIn". */
  source: string;
  /** ISO date (YYYY-MM-DD) of the talk or post. */
  publishedAt: string;
  url: string;
  /** Public edition of the slides, when the mention is a talk. */
  slidesUrl?: string;
  title: string;
  text: string;
}

interface MentionSource extends Omit<ProjectMention, "title" | "text"> {
  title: Record<Locale, string>;
  text: Record<Locale, string>;
}

interface ProjectFacts {
  slug: string;
  stack: string[];
  period: string;
  /** Links to the published write-ups, when the project has them. */
  hasArticles?: boolean;
  /** Talks and posts about the project, newest first. */
  mentions?: MentionSource[];
  /** Public address of the product, when it is Lucas's own and live. */
  liveUrl?: string;
  /** Screenshots in `public/images/projects/<slug>/<id>.jpg`: the store on a phone, the admin on a computer. */
  screens?: { store: ScreenFile[]; admin: ScreenFile[] };
}

/** A screenshot of a live product, with the text that goes next to it. */
export interface ProjectScreen {
  src: string;
  width: number;
  height: number;
  title: string;
  text: string;
  alt: string;
}

interface ScreenFile {
  id: string;
  width: number;
  height: number;
}

type ScreenCopy = Pick<ProjectScreen, "title" | "text" | "alt">;

export interface ProjectStep {
  title: string;
  text: string;
}

interface ProjectCopy {
  title: string;
  context: string;
  role: string;
  /** Card description on the home and the work index. */
  summary: string;
  challenge: string[];
  approach?: ProjectStep[];
  outcome?: string[];
  /** For a live product: what it already does. */
  shipped?: ProjectStep[];
  /** For a live product: the basics it does not have yet. */
  missing?: string[];
  /** For a live product: what Lucas would like to add. */
  next?: string[];
  stats?: ProjectStat[];
  statsNote?: string;
  /** The text of each screenshot, by its id. */
  screens?: Record<string, ScreenCopy>;
}

export type Project = Omit<ProjectFacts, "mentions" | "screens"> &
  Omit<ProjectCopy, "screens"> & {
    mentions?: ProjectMention[];
    screens?: { store: ProjectScreen[]; admin: ProjectScreen[] };
  };

const facts: ProjectFacts[] = [
  {
    slug: "lr-market",
    stack: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "oRPC",
      "Better Auth",
      "Tailwind CSS",
      "Vercel",
    ],
    period: "2026",
    liveUrl: storeUrl,
    screens: {
      store: ["store-home", "store-catalog", "store-product"].map((id) => ({
        id,
        width: 780,
        height: 1688,
      })),
      admin: ["admin-orders", "admin-order", "admin-products", "admin-home"].map((id) => ({
        id,
        width: 2880,
        height: 1800,
      })),
    },
  },
  {
    slug: "pepitos",
    stack: ["Claude Code", "Subagents", "Markdown", "Git", "Jira", "Slack", "GitHub"],
    period: "2026",
    hasArticles: true,
    mentions: [
      {
        source: "Streaver · LinkedIn",
        publishedAt: "2026-10-09",
        url: "https://www.linkedin.com/feed/update/urn:li:share:7514438676618326016/",
        title: {
          en: "How the Pepitos got their name",
          es: "De dónde sale el nombre Pepitos",
        },
        text: {
          en: "Streaver's post on the routine that writes Lucas's plan before he opens his laptop — including the time an agent chased him for six days over a duplicate ticket.",
          es: "El post de Streaver sobre la rutina que escribe el plan de Lucas antes de que abra la laptop — incluida la vez que un agente lo persiguió seis días por un ticket duplicado.",
        },
      },
      {
        source: "Historias de Producción · Streaver",
        publishedAt: "2026-09-11",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7505324656569257984/",
        slidesUrl: "/talks/automations-pepitos.pdf",
        title: {
          en: "Automations + Pepitos, the talk",
          es: "Automations + Pepitos, la charla",
        },
        text: {
          en: "“I automated my mornings. Then it got out of hand.” How the system grew to five routines and four agents, and why the answer was delegating better.",
          es: "“Automaticé mis mañanas. Después se me fue de las manos.” Cómo el sistema creció a cinco rutinas y cuatro agentes, y por qué la respuesta fue delegar mejor.",
        },
      },
    ],
  },
  {
    slug: "shoppable-video-feed",
    stack: ["React", "Next.js", "TypeScript"],
    period: "2024 – 2025",
  },
  {
    slug: "storefront-replatform",
    stack: ["Next.js", "React", "TypeScript", "PHP", "Webpack", "SEO"],
    period: "2024 – 2025",
  },
  {
    slug: "reporting-framework",
    stack: ["Node.js", "React", "MongoDB", "JavaScript"],
    period: "2018 – 2021",
  },
];

const copy: Record<Locale, Record<string, ProjectCopy>> = {
  en: {
    "lr-market": {
      title: "LR Market",
      context: "E-commerce · Uruguay",
      role: "Product, design and development",
      summary:
        "A basic e-commerce for my own stall at the Christmas fair: a bilingual storefront with catalog, cart and orders without an account, and an admin panel to run it. It is a real store, live at market.lucasregalado.com.",
      challenge: [
        "My family has set up a stall at the Christmas fair for more than 20 years. I started out helping my parents and have run my own for about 10. We have sold a bit of everything: shoes, clothes, toys, perfumes. This year it is jewelry and bubble guns.",
        "The stall never had a place online. I wanted a store of my own that people could browse and order from on their phone, ready before the fair opens on December 5, 2026.",
      ],
      shipped: [
        {
          title: "A bilingual storefront",
          text: "Spanish by default and English behind a toggle, designed for the phone first.",
        },
        {
          title: "A home run from the admin",
          text: "The announcement bar, the banners and the rows of articles are curated from the admin panel.",
        },
        {
          title: "A catalog that is easy to share",
          text: "Categories and groups with their own pages, filters, sorting and search. Any combination of filters is a link that can be sent by WhatsApp.",
        },
        {
          title: "Article pages",
          text: "A photo gallery, the price, the description and related articles.",
        },
        {
          title: "Cart and orders without an account",
          text: "The cart opens as a side panel. To order, the shopper leaves a name and a phone number; delivery is coordinated afterwards.",
        },
        {
          title: "Order tracking",
          text: "Each order has its own page and moves through four states: received, packed, delivered or undeliverable.",
        },
        {
          title: "An admin panel",
          text: "Orders, articles, categories, filters, pages, store details and photo uploads, all usable from a phone.",
        },
        {
          title: "Built to be found",
          text: "Structured data on every catalog page, a sitemap and an llms.txt file.",
        },
      ],
      missing: [
        "Online payment: today payment and delivery are coordinated with the shopper after the order.",
        "Stock and variants such as size or color: an article is simply available or not.",
        "Customer accounts and order history.",
        "Shipping cost calculation.",
      ],
      next: [
        "Loading an article from its photos, with Claude filling in the details.",
        "Metrics to decide what to sell.",
        "Confirming the shopper's phone number with a code sent by WhatsApp.",
        "Managing the admin panel's users from the panel itself.",
      ],
      screens: {
        "store-home": {
          title: "Home",
          text: "The announcement bar, the cover that moves on its own and the rows of articles. All of it is chosen from the admin panel.",
          alt: "LR Market's home on a phone: a lime announcement bar, a dark header with the logo and a promotional cover.",
        },
        "store-catalog": {
          title: "Catalog",
          text: "Large photos, with the filters and the sorting one tap away. More articles load as you scroll.",
          alt: "LR Market's catalog on a phone: the Filter and Sort buttons above an article with its photo and price.",
        },
        "store-product": {
          title: "Article",
          text: "A gallery to swipe through, the trail back to its category, the price and the description.",
          alt: "An article page of LR Market on a phone: the photo gallery, the breadcrumb, the title and the price.",
        },
        "admin-orders": {
          title: "Orders",
          text: "New orders show up on their own while the screen is open, with a sound if you want one. The tabs filter by state and the search finds an order by code, name or phone.",
          alt: "The orders screen of LR Market's admin panel: four sample orders with their code, shopper, state and total.",
        },
        "admin-order": {
          title: "One order",
          text: "The order's steps, its articles and total, its history, and the shopper's contact with a shortcut that opens the WhatsApp chat.",
          alt: "An order in LR Market's admin panel: the received, packed and delivered steps, the articles and the shopper's contact.",
        },
        "admin-products": {
          title: "Articles",
          text: "The whole catalog in one list, with search, filters, and the category, price and state of each article.",
          alt: "The article list of LR Market's admin panel, with a photo, category, price and state per row.",
        },
        "admin-home": {
          title: "The home, curated",
          text: "Banners for the cover or between two rows, and showcases that put one article in the spotlight. Each one can be shown or hidden without deleting it.",
          alt: "The home editor of LR Market's admin panel: the list of banners and showcases with their photos.",
        },
      },
    },
    pepitos: {
      title: "The Pepitos",
      context: "AI agents · Developer workflow",
      role: "Design, setup and ten weeks of tuning",
      summary:
        "A crew of four Claude Code subagents plus scheduled routines that plan the day, prep standups and hand off tickets. Ten weeks in: 47 working days logged, 129 meetings archived and 35 ticket handoffs.",
      challenge: [
        "Two things were eating my day. The first half hour went to gathering context from Jira, Slack, GitHub and yesterday's meeting notes before I could decide what to do. And because one top-tier model was doing every job, my Claude Code credits were gone by 11 AM most days, with a wait until the early afternoon.",
        "I wanted the routine around the code handled for me, without handing over the decisions.",
      ],
      approach: [
        {
          title: "Routines that prepare the day",
          text: "Every weekday at 8 AM an agent reads my tools and writes a one-page plan: the focus of the day, quick wins, blockers and the questions I still owe an answer to. Others prep the standup at 11:30 and close the day at 17:00. There is no code behind them, just a document, a schedule and one prompt.",
        },
        {
          title: "The cheapest model that does the job",
          text: "Four subagents with narrow tools and one hard rule each. The Scout reads GitHub and CI and returns evidence, never conclusions. The Librarian keeps the knowledge folder. The Coder writes to a precise spec and never commits or pushes. The Ticket Machine drafts tickets and checks for duplicates first. Reading runs on the cheapest tier, writing on the middle one.",
        },
        {
          title: "A written memory",
          text: "Anything analyzed once gets written down in a git-versioned folder: conventions, gotchas, a handoff file per ticket and the daily file. Agents read it before they start, so the same material is never analyzed twice.",
        },
        {
          title: "It learns every Friday",
          text: "A weekly routine reads the review comments and my corrections from the week, groups the patterns that repeat and writes them as rules into the coder's definition.",
        },
        {
          title: "What stays human",
          text: "Approving and merging pull requests, and anything published under my name. The agents prepare the work; I decide.",
        },
      ],
      outcome: [
        "Running out of credits went from most mornings to a handful of times in ten weeks.",
        "The first half hour of the day now goes to deciding instead of gathering.",
      ],
      stats: [
        { value: 47, label: "Working days logged" },
        { value: 129, label: "Meetings archived" },
        { value: 35, label: "Ticket handoffs" },
        { value: 29, label: "Rules the coder learned" },
      ],
      statsNote: "Counted after ten weeks of daily use, as of late September 2026.",
    },
    "shoppable-video-feed": {
      title: "Shoppable video feed",
      context: "E-commerce · Uruguay",
      role: "Main front-end developer",
      summary:
        "A short-video browsing experience where products are discovered by swiping: fast playback with audio on every browser, plus add to cart, favorites, likes and sharing built around engagement and conversion.",
      challenge: [
        "A nationwide online store wanted a new way to discover products: a browsing experience inspired by TikTok and YouTube Shorts, where each product is presented through a short, dynamic video.",
        "The hard part was technical. Video had to start fast and play with audio on every browser and device, inside a storefront that still had to sell.",
      ],
      approach: [
        {
          title: "Playback first",
          text: "The feed was built around one goal: videos that start quickly and play with sound on every browser and device.",
        },
        {
          title: "Shopping inside the video",
          text: "Each video carries the actions of a product page: add to cart, save as favorite, like and share, without leaving the feed.",
        },
        {
          title: "Built for engagement and conversion",
          text: "Every interaction was designed to keep people browsing and to shorten the path from discovering a product to buying it.",
        },
      ],
      outcome: [
        "Shipped to production as a public section of the store.",
        "It became a new way to discover products, next to the classic catalog.",
      ],
    },
    "storefront-replatform": {
      title: "Storefront replatform",
      context: "E-commerce · Uruguay",
      role: "Lead front-end developer",
      summary:
        "Led the gradual migration of a nationwide storefront from PHP to Next.js and TypeScript, along with a landing page builder that let non-technical teams launch campaigns without developers.",
      challenge: [
        "The storefront was built on PHP, with some sections written in React and wired in through Webpack. It worked, but the structure made every new feature slower than it should be.",
        "The business could not stop selling while the platform changed, so a rewrite from scratch was not an option.",
      ],
      approach: [
        {
          title: "Gradual, not big bang",
          text: "We introduced TypeScript across the codebase and started moving sections to Next.js one at a time, keeping the store live through the whole process.",
        },
        {
          title: "Consistent design",
          text: "Each migrated section kept a friendly interface aligned with the store's visual identity, so customers never felt they were crossing between two systems.",
        },
        {
          title: "Performance and SEO in every iteration",
          text: "Each release was an opportunity to improve load times and search visibility, not only to change the technology underneath.",
        },
        {
          title: "A landing page builder",
          text: "An internal system that lets non-technical teams create landing pages for promotions, product launches and discount campaigns on their own.",
        },
      ],
      outcome: [
        "A clearer project structure and a platform that scales with the business.",
        "Considerably fewer development hours spent on campaign pages, because marketing no longer needs a developer to publish one.",
      ],
    },
    "reporting-framework": {
      title: "Reporting framework",
      context: "Clinical trials · United States",
      role: "Full stack developer",
      summary:
        "The first custom reporting system of a clinical-trials platform: online previews and CSV exports generated by Node.js scripts without touching the core collections, cutting operating costs per study.",
      challenge: [
        "A platform for running clinical trials needed its first custom reporting system: people had to preview a report online and download all of its data as a CSV file.",
        "The constraint was the architecture. The core database collections (patients, studies, groups) were shared with other critical applications, so they could not be modified.",
      ],
      approach: [
        {
          title: "Work around the core, not through it",
          text: "We designed a system that extracts and processes the information with Node.js scripts, leaving the shared collections untouched.",
        },
        {
          title: "Reports generated on demand",
          text: "Reports are built dynamically, with an online preview and a full CSV export, without affecting the rest of the platform.",
        },
        {
          title: "Reports on the web",
          text: "Later iterations let patients read their reports directly on the website, instead of downloading a dedicated iPhone app or deploying a separate app for each study.",
        },
      ],
      outcome: [
        "Lower operating costs per study.",
        "One unified experience on the reporting website, which simplified implementation and improved accessibility.",
      ],
    },
  },
  es: {
    "lr-market": {
      title: "LR Market",
      context: "E-commerce · Uruguay",
      role: "Producto, diseño y desarrollo",
      summary:
        "Un e-commerce básico para mi propio puesto en la feria navideña: una tienda bilingüe con catálogo, carrito y pedidos sin cuenta, y un panel de administración para manejarla. Es una tienda real y funcionando en market.lucasregalado.com.",
      challenge: [
        "Hace más de 20 años que mi familia arma su puesto en la feria navideña. Empecé ayudando a mis padres y hace unos 10 años tengo el mío. Vendimos de todo: zapatos, ropa, juguetes, perfumes. Este año venimos con bijouterie y pistolas de burbujas.",
        "El puesto nunca tuvo un lugar en internet. Quería una tienda propia, que la gente pudiera recorrer y usar para hacer su pedido desde el celular, lista antes de que la feria abra el 5 de diciembre de 2026.",
      ],
      shipped: [
        {
          title: "Una tienda bilingüe",
          text: "En español por defecto y en inglés con un botón, pensada primero para el celular.",
        },
        {
          title: "Una home que se arma desde el admin",
          text: "El anuncio, los banners y las filas de artículos se eligen desde el panel de administración.",
        },
        {
          title: "Un catálogo fácil de compartir",
          text: "Categorías y grupos con su propia página, filtros, orden y búsqueda. Cualquier combinación de filtros es un link que se puede mandar por WhatsApp.",
        },
        {
          title: "Páginas de artículo",
          text: "Galería de fotos, precio, descripción y artículos relacionados.",
        },
        {
          title: "Carrito y pedidos sin cuenta",
          text: "El carrito se abre en un panel lateral. Para pedir, alcanza con dejar nombre y teléfono; la entrega se coordina después.",
        },
        {
          title: "Seguimiento del pedido",
          text: "Cada pedido tiene su propia página y pasa por cuatro estados: recibido, armado, entregado o no entregable.",
        },
        {
          title: "Un panel de administración",
          text: "Pedidos, artículos, categorías, filtros, páginas, datos de la tienda y subida de fotos, todo usable desde el celular.",
        },
        {
          title: "Hecha para que la encuentren",
          text: "Datos estructurados en cada página del catálogo, sitemap y un archivo llms.txt.",
        },
      ],
      missing: [
        "Pago online: hoy el pago y la entrega se coordinan con quien compra después del pedido.",
        "Stock y variantes como talle o color: un artículo está disponible o no.",
        "Cuentas de cliente e historial de pedidos.",
        "Cálculo del costo de envío.",
      ],
      next: [
        "Cargar un artículo a partir de sus fotos, con Claude completando los datos.",
        "Métricas para decidir qué vender.",
        "Confirmar el teléfono de quien compra con un código por WhatsApp.",
        "Gestionar los usuarios del panel desde el propio panel.",
      ],
      screens: {
        "store-home": {
          title: "Home",
          text: "El anuncio, la portada que se mueve sola y las filas de artículos. Todo se elige desde el panel de administración.",
          alt: "La home de LR Market en un celular: un anuncio verde lima, el encabezado oscuro con el logo y una portada promocional.",
        },
        "store-catalog": {
          title: "Catálogo",
          text: "Fotos grandes, con los filtros y el orden a un toque. Los artículos se van cargando a medida que bajás.",
          alt: "El catálogo de LR Market en un celular: los botones Filtrar y Ordenar arriba de un artículo con su foto y su precio.",
        },
        "store-product": {
          title: "Artículo",
          text: "Una galería para deslizar, el camino de vuelta a su categoría, el precio y la descripción.",
          alt: "La página de un artículo de LR Market en un celular: la galería de fotos, la ruta de navegación, el título y el precio.",
        },
        "admin-orders": {
          title: "Pedidos",
          text: "Los pedidos nuevos aparecen solos mientras la pantalla está abierta, con sonido si querés. Las pestañas filtran por estado y el buscador encuentra un pedido por código, nombre o teléfono.",
          alt: "La pantalla de pedidos del panel de LR Market: cuatro pedidos de ejemplo con su código, cliente, estado y total.",
        },
        "admin-order": {
          title: "Un pedido",
          text: "Los pasos del pedido, sus artículos y el total, su historial, y el contacto de quien compró con un atajo que abre el chat de WhatsApp.",
          alt: "Un pedido en el panel de LR Market: los pasos recibido, preparado y entregado, los artículos y el contacto de quien compró.",
        },
        "admin-products": {
          title: "Artículos",
          text: "Todo el catálogo en una lista, con búsqueda, filtros, y la categoría, el precio y el estado de cada artículo.",
          alt: "La lista de artículos del panel de LR Market, con foto, categoría, precio y estado en cada fila.",
        },
        "admin-home": {
          title: "La home, a mano",
          text: "Banners para la portada o entre dos filas, y vidrieras que ponen un artículo en primer plano. Cada uno se puede mostrar u ocultar sin borrarlo.",
          alt: "El editor de la home en el panel de LR Market: la lista de banners y vidrieras con sus fotos.",
        },
      },
    },
    pepitos: {
      title: "Los Pepitos",
      context: "Agentes de IA · Flujo de trabajo",
      role: "Diseño, armado y diez semanas de ajustes",
      summary:
        "Un equipo de cuatro subagentes de Claude Code y rutinas programadas que planifican el día, preparan las dailies y hacen el traspaso de tickets. A las diez semanas: 47 días de trabajo registrados, 129 reuniones archivadas y 35 traspasos de tickets.",
      challenge: [
        "Dos cosas me comían el día. La primera media hora se iba en juntar contexto de Jira, Slack, GitHub y las notas de las reuniones del día anterior antes de poder decidir qué hacer. Y como un solo modelo, el más caro, hacía todos los trabajos, casi todos los días me quedaba sin créditos de Claude Code a las 11 de la mañana, con espera hasta la tarde.",
        "Quería que la rutina alrededor del código se resolviera sola, sin delegar las decisiones.",
      ],
      approach: [
        {
          title: "Rutinas que preparan el día",
          text: "Cada día hábil a las 8 un agente lee mis herramientas y escribe un plan de una página: el foco del día, tareas rápidas, bloqueos y las preguntas que todavía debo responder. Otras rutinas preparan la daily a las 11:30 y cierran el día a las 17:00. No hay código detrás: un documento, un horario y un prompt.",
        },
        {
          title: "El modelo más barato que resuelve la tarea",
          text: "Cuatro subagentes con herramientas acotadas y una regla innegociable cada uno. El Scout lee GitHub y CI y devuelve evidencia, nunca conclusiones. El Librarian mantiene la carpeta de conocimiento. El Coder escribe contra una especificación precisa y nunca hace commit ni push. La Ticket Machine redacta tickets y antes busca duplicados. La lectura corre en el modelo más económico; la escritura, en el intermedio.",
        },
        {
          title: "Una memoria escrita",
          text: "Todo lo que se analiza una vez queda escrito en una carpeta versionada en git: convenciones, trampas conocidas, un archivo de traspaso por ticket y el archivo del día. Los agentes la leen antes de empezar, así el mismo material nunca se analiza dos veces.",
        },
        {
          title: "Aprende todos los viernes",
          text: "Una rutina semanal lee los comentarios de revisión y mis correcciones de la semana, agrupa los patrones que se repiten y los escribe como reglas en la definición del coder.",
        },
        {
          title: "Lo que sigue siendo humano",
          text: "Aprobar y mergear pull requests, y todo lo que se publica con mi nombre. Los agentes preparan el trabajo; yo decido.",
        },
      ],
      outcome: [
        "Quedarme sin créditos pasó de ser cosa de casi todas las mañanas a un puñado de veces en diez semanas.",
        "La primera media hora del día ahora se va en decidir, no en juntar información.",
      ],
      stats: [
        { value: 47, label: "Días de trabajo registrados" },
        { value: 129, label: "Reuniones archivadas" },
        { value: 35, label: "Traspasos de tickets" },
        { value: 29, label: "Reglas que aprendió el coder" },
      ],
      statsNote: "Contado tras diez semanas de uso diario, a fines de setiembre de 2026.",
    },
    "shoppable-video-feed": {
      title: "Feed de videos comprables",
      context: "E-commerce · Uruguay",
      role: "Desarrollador front end principal",
      summary:
        "Una experiencia de navegación por videos cortos donde los productos se descubren deslizando: reproducción rápida con audio en todos los navegadores, más carrito, favoritos, likes y compartir, pensada para el engagement y la conversión.",
      challenge: [
        "Una tienda online de alcance nacional quería una nueva forma de descubrir productos: una experiencia inspirada en TikTok y YouTube Shorts, donde cada producto se presenta con un video corto y dinámico.",
        "Lo difícil era técnico. El video tenía que arrancar rápido y reproducirse con audio en todos los navegadores y dispositivos, dentro de una tienda que además tenía que vender.",
      ],
      approach: [
        {
          title: "Primero, la reproducción",
          text: "El feed se construyó alrededor de un objetivo: videos que arrancan rápido y se reproducen con sonido en todos los navegadores y dispositivos.",
        },
        {
          title: "Comprar dentro del video",
          text: "Cada video trae las acciones de una página de producto: agregar al carrito, guardar como favorito, dar like y compartir, sin salir del feed.",
        },
        {
          title: "Pensado para engagement y conversión",
          text: "Cada interacción se diseñó para que la gente siga navegando y para acortar el camino entre descubrir un producto y comprarlo.",
        },
      ],
      outcome: [
        "Salió a producción como una sección pública de la tienda.",
        "Se convirtió en una nueva forma de descubrir productos, junto al catálogo clásico.",
      ],
    },
    "storefront-replatform": {
      title: "Replataforma de la tienda",
      context: "E-commerce · Uruguay",
      role: "Líder de desarrollo front end",
      summary:
        "Lideré la migración gradual de una tienda online de alcance nacional de PHP a Next.js y TypeScript, junto con un constructor de landing pages que permitió a equipos no técnicos lanzar campañas sin desarrolladores.",
      challenge: [
        "La tienda estaba construida en PHP, con algunas secciones en React integradas con Webpack. Funcionaba, pero la estructura hacía que cada funcionalidad nueva llevara más tiempo del necesario.",
        "El negocio no podía dejar de vender mientras cambiaba la plataforma, así que reescribir todo desde cero no era una opción.",
      ],
      approach: [
        {
          title: "Gradual, no de un golpe",
          text: "Incorporamos TypeScript en todo el código y empezamos a mover secciones a Next.js de a una, con la tienda en línea durante todo el proceso.",
        },
        {
          title: "Diseño coherente",
          text: "Cada sección migrada mantuvo una interfaz amigable y alineada con la identidad visual de la tienda, para que los clientes nunca sintieran que cruzaban entre dos sistemas.",
        },
        {
          title: "Performance y SEO en cada iteración",
          text: "Cada entrega fue una oportunidad para mejorar los tiempos de carga y la visibilidad en buscadores, no solo para cambiar la tecnología de fondo.",
        },
        {
          title: "Un constructor de landing pages",
          text: "Un sistema interno que permite a equipos no técnicos crear por su cuenta landing pages para promociones, lanzamientos de productos y campañas de descuentos.",
        },
      ],
      outcome: [
        "Una estructura de proyecto más clara y una plataforma que escala con el negocio.",
        "Muchas menos horas de desarrollo dedicadas a páginas de campaña, porque marketing ya no necesita un desarrollador para publicar una.",
      ],
    },
    "reporting-framework": {
      title: "Framework de reportes",
      context: "Ensayos clínicos · Estados Unidos",
      role: "Desarrollador full stack",
      summary:
        "El primer sistema de reportes a medida de una plataforma de ensayos clínicos: vistas previas en línea y exportación a CSV generadas con scripts de Node.js sin tocar las colecciones centrales, reduciendo los costos operativos por estudio.",
      challenge: [
        "Una plataforma para gestionar ensayos clínicos necesitaba su primer sistema de reportes a medida: había que poder ver un reporte en línea y descargar todos sus datos en un archivo CSV.",
        "La restricción era la arquitectura. Las colecciones centrales de la base de datos (pacientes, estudios, grupos) se compartían con otras aplicaciones críticas, así que no se podían modificar.",
      ],
      approach: [
        {
          title: "Rodear el núcleo, no atravesarlo",
          text: "Diseñamos un sistema que extrae y procesa la información con scripts de Node.js, sin tocar las colecciones compartidas.",
        },
        {
          title: "Reportes generados a demanda",
          text: "Los reportes se construyen en forma dinámica, con vista previa en línea y exportación completa a CSV, sin afectar al resto de la plataforma.",
        },
        {
          title: "Reportes en la web",
          text: "En iteraciones posteriores los pacientes pudieron leer sus reportes directamente en el sitio, en lugar de descargar una app específica para iPhone o desplegar una app distinta por estudio.",
        },
      ],
      outcome: [
        "Menores costos operativos por estudio.",
        "Una experiencia unificada en el sitio de reportes, que simplificó la implementación y mejoró la accesibilidad.",
      ],
    },
  },
};

export const projectSlugs = facts.map((project) => project.slug);

const toScreens = (
  slug: string,
  files: ScreenFile[],
  texts: Record<string, ScreenCopy>
): ProjectScreen[] =>
  files.map(({ id, width, height }) => ({
    src: `/images/projects/${slug}/${id}.jpg`,
    width,
    height,
    ...texts[id],
  }));

export const getProjects = (locale: Locale): Project[] =>
  facts.map(({ mentions, screens, ...project }) => {
    const { screens: screenTexts = {}, ...text } = copy[locale][project.slug];

    return {
      ...project,
      ...text,
      mentions: mentions?.map((mention) => ({
        ...mention,
        title: mention.title[locale],
        text: mention.text[locale],
      })),
      screens: screens && {
        store: toScreens(project.slug, screens.store, screenTexts),
        admin: toScreens(project.slug, screens.admin, screenTexts),
      },
    };
  });

export const getProject = (slug: string, locale: Locale): Project | undefined =>
  getProjects(locale).find((project) => project.slug === slug);
