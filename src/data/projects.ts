export type Project = {
  slug: string;
  title: string;
  kicker: string;
  year: string;
  role: string;
  tools: string;
  collaborators?: string;
  platform?: string;
  description: string;
  introduction: string;
  overview: string;
  reflection: string;
  tone: string;
  heroImage: { src: string; alt: string; position?: string };
  galleryImages: Array<{ src: string; alt: string; fit?: 'cover' | 'contain'; position?: string }>;
  embed: {
    kind: 'youtube' | 'experience';
    title: string;
    description: string;
    url?: string;
    externalUrl?: string;
  };
};

export const projects: Project[] = [
  {
    slug: 'two-player-2d-game',
    title: 'Twogether Climb',
    kicker: 'Two-player 2D game',
    year: '2026',
    role: 'Developer / Level Designer',
    tools: 'Unity',
    collaborators: 'Qinyu Zhang, Bokun Ren, Davis Zhuang',
    description: 'A two-player cooperative climbing game where both players share one body and coordinate opposite limbs to navigate a miniature world.',
    introduction: 'Twogether Climb turns cooperation into the core mechanic: two players control opposite sides of one character and must communicate to climb through oversized environments.',
    overview: 'Twogether Climb is a two-player cooperative climbing game built around shared control. Both players control a single character, with one player managing the left limbs and the other controlling the right. Progress depends on communication, timing, and coordinated movement as the pair climbs through a miniature world filled with oversized everyday objects. The physics-based interactions make cooperation part of every movement rather than a separate feature. As the developer and level designer, I helped build the game in Unity and designed climbing spaces around the shared-control mechanic, creating routes and obstacles that encourage both players to communicate and plan their movements together.',
    reflection: 'The project reinforced how strongly level design can shape cooperation. Because progress depends on two people controlling one body, readable routes, clear spatial cues, and challenges that reward communication became essential to keeping the experience difficult without making it frustrating.',
    tone: 'mint',
    heroImage: {
      src: '/media/projects/two-player-2d-game/2d-game-01.webp',
      alt: 'Twogether Climb miniature kitchen level filled with oversized food and household objects',
    },
    galleryImages: [
      { src: '/media/projects/two-player-2d-game/2d-game-04.webp', alt: 'Two players coordinating the shared character across food obstacles' },
      { src: '/media/projects/two-player-2d-game/2d-game-03.webp', alt: 'Twogether Climb control tutorial explaining hand and foot coordination' },
      { src: '/media/projects/two-player-2d-game/2d-game-05.webp', alt: 'Shared character climbing along a curved kitchen utensil' },
      { src: '/media/projects/two-player-2d-game/2d-game-02.webp', alt: 'Twogether Climb level layout being developed in Unity', fit: 'contain' },
    ],
    embed: {
      kind: 'youtube',
      title: 'Gameplay Video',
      description: 'A gameplay overview showing the shared-control climbing mechanic, player coordination, and level progression.',
      url: 'https://youtu.be/yuAW75nB2kw',
    },
  },
  {
    slug: 'car-commercial',
    title: 'Ferrari SF90 Stradale',
    kicker: 'Car commercial',
    year: '2026',
    role: 'Environment Lighting / Motion Capture',
    tools: 'Unreal Engine 5',
    collaborators: 'Lejia Mu, Lecheng Zhao',
    description: 'A cinematic Ferrari SF90 Stradale commercial focused on photorealistic lighting, materials, reflections, and a refined sense of luxury.',
    introduction: 'A high-end automotive cinematic designed to present the Ferrari SF90 Stradale through realistic materials, dramatic lighting, and an elegant, premium visual language.',
    overview: 'This project is a cinematic sports car commercial created to capture the luxury and prestige of the Ferrari SF90 Stradale. The visual direction focuses on recreating realistic lighting, reflections, and material response so the car feels photorealistic, refined, and high-end. Rather than treating the vehicle only as a fast sports car, the commercial presents it as an exclusive luxury object through controlled illumination and polished cinematic presentation. I contributed to the environment lighting and motion-capture work in Unreal Engine 5. Careful control of highlights, reflections, surface detail, and movement was important to maintaining a believable look while reinforcing the elegance, power, and exclusivity associated with the SF90 Stradale.',
    reflection: 'The project strengthened my understanding of how lighting, material response, reflections, and controlled motion shape the perceived value of a product. Small visual decisions became especially important when aiming for a polished automotive image that feels both realistic and luxurious.',
    tone: 'amber',
    heroImage: {
      src: '/media/projects/car-commercial/car-commercial-01.webp',
      alt: 'Rear silhouette of a Ferrari SF90 Stradale illuminated by red studio lighting',
    },
    galleryImages: [
      { src: '/media/projects/car-commercial/car-commercial-03.webp', alt: 'Ferrari SF90 Stradale driving through a cinematic highway environment' },
      { src: '/media/projects/car-commercial/car-commercial-02.webp', alt: 'Motion-capture performer wearing a headset and tracking suit', fit: 'contain' },
      { src: '/media/projects/car-commercial/car-commercial-04.webp', alt: 'Sunset bridge environment created for the automotive cinematic' },
      { src: '/media/projects/car-commercial/car-commercial-05.webp', alt: 'Tunnel lighting environment being developed in Unreal Engine 5', fit: 'contain' },
    ],
    embed: {
      kind: 'youtube',
      title: 'Watch the Commercial',
      description: 'The completed cinematic presented in a focused, full-width player with standard playback and fullscreen controls.',
      url: 'https://youtu.be/PF7q_7geeIc?si=aITsEDYydQy8wf8f',
    },
  },
  {
    slug: 'vr-game',
    title: 'Deadline',
    kicker: 'VR game',
    year: '2025',
    role: '3D Environment Designer / VR Gameplay Developer',
    tools: 'Unity, C#, Blender',
    platform: 'Meta Quest 3',
    description: 'A Meta Quest 3 survival shooter set on a moving train, combining VR interaction, constant motion, and wave-based combat.',
    introduction: 'Deadline is a VR survival shooter where players defend a moving train from waves of zombies using immersive weapons and responsive interactions.',
    overview: 'Deadline is an FPS VR game set on a continuously moving train and built for Meta Quest 3. Players must remain balanced in the environment while fighting waves of zombies with immersive shooting mechanics. The moving train makes space an active part of the experience: the level must communicate motion and danger without making the player uncomfortable. My work focused on 3D environment building, asset integration, and VR gameplay development. I assembled and modified assets for visual consistency, scale, performance, and player comfort, and I designed and implemented interaction systems in Unity and C#. This included weapon handling, shooting mechanics, enemy behavior, and responsive controls, with an emphasis on maintaining immersion while minimizing cyber sickness.',
    reflection: 'Balancing a constantly moving environment with VR comfort was one of the project’s main design challenges. The process showed me how interaction, level composition, performance, and motion all need to work together to create intensity without sacrificing usability.',
    tone: 'violet',
    heroImage: {
      src: '/media/projects/vr-game/vr-game-01.webp',
      alt: 'VR survival shooter combat on a moving train surrounded by zombies',
    },
    galleryImages: [
      { src: '/media/projects/vr-game/vr-game-02.webp', alt: 'Early VR gameplay prototype viewed from the moving train' },
      { src: '/media/projects/vr-game/vr-game-03.webp', alt: 'Train level and surrounding landscape being assembled in Unity', fit: 'contain' },
      { src: '/media/projects/vr-game/vr-game-04.webp', alt: 'VR train environment with enemies approaching along the track' },
      { src: '/media/projects/vr-game/vr-game-05.webp', alt: 'C sharp gameplay code for the VR train interaction system', fit: 'contain' },
    ],
    embed: {
      kind: 'youtube',
      title: 'VR Gameplay Video',
      description: 'A recorded playthrough highlighting movement, weapon interaction, environment design, and wave-based combat.',
      url: 'https://youtu.be/muO42pjvY4w',
    },
  },
  {
    slug: 'virtual-exhibition',
    title: 'Surveillance Pleasure',
    kicker: 'Virtual exhibition',
    year: '2025',
    role: '3D Environment & Interaction Designer',
    tools: 'Unity, Blender',
    description: 'An interactive Unity exhibition translating Surveillance Pleasure into a navigable 3D gallery focused on accessibility, atmosphere, and visitor exploration.',
    introduction: 'A virtual gallery that reinterprets the artworks of Surveillance Pleasure as an immersive digital exhibition visitors can freely explore and learn from.',
    overview: 'Surveillance Pleasure is a virtual exhibition built in Unity that presents artworks in an immersive digital gallery. Visitors can move freely through the space, explore the exhibition at their own pace, and access additional information about individual works. The project translates a real-world exhibition into a virtual setting while preserving physical navigation, accessibility, and interpretive interaction. I designed and built the gallery environment, using lighting, materials, scale, and spatial relationships to establish an atmosphere appropriate to the exhibition’s themes of surveillance and observation. I also developed the interactive presentation so the environment remained intentionally minimal and structured, allowing the artworks to stay visually central while supporting exploration and interpretation.',
    reflection: 'The project helped me think about exhibition design as both spatial and interactive storytelling. Translating a physical gallery into a virtual environment required balancing atmosphere, navigation, accessibility, and interpretation while keeping the exhibited artwork as the primary focus.',
    tone: 'blue',
    heroImage: {
      src: '/media/projects/virtual-exhibition/virtual-exhibition-01.webp',
      alt: 'Dark virtual gallery interior displaying artworks from Surveillance Pleasure',
    },
    galleryImages: [
      { src: '/media/projects/virtual-exhibition/virtual-exhibition-02.webp', alt: 'Interactive artwork wall and navigation controls inside the virtual exhibition' },
      { src: '/media/projects/virtual-exhibition/virtual-exhibition-03.webp', alt: 'Artwork information panel opened inside the virtual gallery', fit: 'contain' },
      { src: '/media/projects/virtual-exhibition/virtual-exhibition-04.webp', alt: 'Visitor view across multiple rooms of the virtual exhibition' },
      { src: '/media/projects/virtual-exhibition/virtual-exhibition-05.webp', alt: 'Surveillance Pleasure gallery environment being developed in Unity', fit: 'contain' },
    ],
    embed: {
      kind: 'experience',
      title: 'Explore the Exhibition',
      description: 'Enter the interactive exhibition directly in the page, or open it in a new tab for a larger experience.',
      url: 'https://itch.io/embed-upload/14021233?color=333333',
      externalUrl: 'https://jonaslin.itch.io/virtual-exhibition-surveillent-pleasures',
    },
  },
  {
    slug: 'value-aigc-film',
    title: 'Value',
    kicker: '2D animated short film',
    year: '2026',
    role: 'Producer / Director',
    tools: 'Seedance 2.0, GPT Image 2, Blender',
    collaborators: 'Leo Liu',
    description: 'An AIGC animated short film exploring social value and human experience through a surreal journey between life, death, and memory.',
    introduction: 'A 2D animated short film that follows a man through death, heaven, and the memories of his own life, examining how social values shape human existence.',
    overview: 'Value is an AIGC 2D animated short film exploring the relationship between social value and individual experience. After being laid off, the protagonist is hit by a car and abandoned without rescue. His soul ascends to heaven, where an argument with God leads him through a doorway into his own life. There, he observes moments from different stages of his existence, each shaped by social expectations and systems of value. The film uses a surreal, symbolic narrative to reflect on how a person’s worth can be defined by external standards. The project was created through a hybrid AIGC workflow using GPT Image 2, Seedance 2.0, and Blender to develop its visual world and animated sequences.',
    reflection: 'The project allowed me to explore how generative AI can support a complete visual storytelling workflow while maintaining a consistent narrative and artistic direction. It also challenged me to translate an abstract theme about social value into a clear visual story through imagery, animation, symbolism, and cinematic composition.',
    tone: 'gray',
    heroImage: {
      src: '/media/projects/value/aigc-01.webp',
      alt: 'A lone figure facing towering numerical shadows in the animated short film Value',
    },
    galleryImages: [
      { src: '/media/projects/value/aigc-02.webp', alt: 'The protagonist’s spirit standing between two bodies after a traffic accident' },
      { src: '/media/projects/value/aigc-05.webp', alt: 'The protagonist standing before a doorway during his journey through memory' },
      { src: '/media/projects/value/aigc-03.webp', alt: 'A street environment blockout created in Blender for Value', fit: 'contain' },
      { src: '/media/projects/value/aigc-04.webp', alt: 'AIGC animation assets and generated shots organized during production', fit: 'contain' },
    ],
    embed: {
      kind: 'youtube',
      title: 'Watch the Film',
      description: 'The completed animated short film, presented with standard playback and fullscreen controls.',
      url: 'https://youtu.be/4z29anzsuu8',
    },
  },
];

export const archiveItems = [
  { title: 'Forest on Fire', category: 'VR Film', year: '2024', role: '3D Modeler / Animator', tools: 'Unity', description: 'A VR film portraying a forest fire from wildlife’s perspective, combining a rebuilt 3D environment, fire and animal animation, camera movement, and immersive sound.', tone: 'violet', mediaType: 'video', videoUrl: 'https://youtu.be/mruJnYR2NOI?si=b199cMgbWRv8aU8a', imageSrc: '', imageAlt: '' },
  { title: 'NAC Virtual Learning Platform', category: 'Web Design', year: '2022–2025', role: '', tools: '', description: 'An educational website introducing Canadian art and Jessie Oonark’s work through cultural context, artwork interpretation, and two interactive learning activities.', tone: 'blue', mediaType: 'video', videoUrl: 'https://youtu.be/AeMbZ_IWe1M?si=OaEUSU9QRmLiWTly', imageSrc: '', imageAlt: '' },
  { title: '3D Models', category: '3D Modelling', year: '2022–2025', role: '3D Modeler', tools: '', description: 'A compact archive of earlier completed and in-progress 3D models, showing exploratory modeling work across different visual styles and project types.', tone: 'amber', mediaType: 'image', videoUrl: '', imageSrc: '/media/archive/3d-models.webp', imageAlt: 'Collection of stylized 3D models including a sword, alchemy workbench, and architectural environment study' },
];
