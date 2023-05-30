import content from "./content";

// ---- Tools Icons ---- //
import InDesignIcon from "./img/indesign-icon.svg";
import IllustratorIcon from "./img/illustrator-icon.svg";
import BackIcon from "./img/back-arrow.svg";
import PremierIcon from "./img/premier-pro.svg";
import AfterEffectsIcon from "./img/after-effects-icon.svg";
import ClipStudioIcon from "./img/clip-studio.svg";
import MayaIcon from "./img/maya-icon.svg";
import WixIcon from "./img/wix-icon.svg";
import FigmaIcon from "./img/figma-icon.svg";
import JSIcon from "./img/js-ts-icon.svg";
import SquarespaceIcon from "./img/squarespace-icon.svg";
import ReactIcon from "./img/react-icon.svg";
import GatsbyIcon from "./img/gatsby-icon.svg";
import PrismicIcon from "./img/prismic-icon.svg";

// ---- Content Images ---- //

// ---- Design Projects ---- //
import Logos0 from "./img/project-pages/24-logos-0-min.png";
import Logos1 from "./img/project-pages/24-logos-1-min.png";
import Logos2 from "./img/project-pages/24-logos-2-min.png";
import Logos3 from "./img/project-pages/24-logos-3-min.png";
import Energy0 from "./img/project-pages/global-energy-0-min.png";
import NY0 from "./img/project-pages/new-york-0-min.png";
import NY1 from "./img/project-pages/new-york-1-min.png";
import NY2 from "./img/project-pages/new-york-2-min.png";
import NY3 from "./img/project-pages/new-york-3-min.png";
import NY4 from "./img/project-pages/new-york-4-min.png";
import NY5 from "./img/project-pages/new-york-5-min.png";
import Switch0_1 from "./img/project-pages/make-switch-0-1-min.png";
import Switch0_2 from "./img/project-pages/make-switch-0-2-min.png";

// ---- Animation Projects ---- //
import PersonalLogo1 from "./img/project-pages/personal-logo-1-min.png";
import Floursack1 from "./img/project-pages/flour-sack-1-min.png";
import Floursack2 from "./img/project-pages/flour-sack-2-min.png";
import Floursack3 from "./img/project-pages/flour-sack-3-min.png";
import SpaceJunk1 from "./img/project-pages/space-junk-1-min.png";
import SpaceJunk2 from "./img/project-pages/space-junk-2-min.png";
import SpaceJunk3 from "./img/project-pages/space-junk-3-min.png";
import SpaceJunk4 from "./img/project-pages/space-junk-4-min.png";
import GhostTalent1 from "./img/project-pages/ghost-talent-1-min.png";
import GhostTalent2 from "./img/project-pages/ghost-talent-2-min.png";
import GhostTalent3 from "./img/project-pages/ghost-talent-3-min.png";
import Slanted1 from "./img/project-pages/slanted-1-min.png";
import Slanted2 from "./img/project-pages/slanted-2-min.png";
import Slanted3 from "./img/project-pages/slanted-3-min.png";
import Slanted4 from "./img/project-pages/slanted-4-min.png";
import Slanted5 from "./img/project-pages/slanted-5-min.png";

// ---- Web Development Projects ---- //
import CK0 from "./img/project-pages/clean-kick-0-min.png";
import CK1 from "./img/project-pages/clean-kick-1-min.png";
import CK2 from "./img/project-pages/clean-kick-2-min.png";
import Benvenuti0 from "./img/project-pages/benvenuti-0-min.png";
import TheraPro0 from "./img/project-pages/therapro-0-min.png";
import TheraPro1 from "./img/project-pages/therapro-1-min.png";
import TheraPro2 from "./img/project-pages/therapro-2-min.png";
import TheraPro3 from "./img/project-pages/therapro-3-min.png";
import TheraPro4 from "./img/project-pages/therapro-4-min.png";
import CGP0 from "./img/project-pages/cgp-0-min.png";
import Interventions0 from "./img/project-pages/interventions-0-min.png";
import Interventions1 from "./img/project-pages/interventions-1-min.png";
import Interventions2 from "./img/project-pages/interventions-2-min.png";
import GoGarden0 from "./img/project-pages/gogarden-0-min.png";
import GoGarden1 from "./img/project-pages/gogarden-1-min.png";
import GoGarden2 from "./img/project-pages/gogarden-2-min.png";
import GoGarden3 from "./img/project-pages/gogarden-3-min.png";
import GoGarden4 from "./img/project-pages/gogarden-4-min.png";
import GoGarden5 from "./img/project-pages/gogarden-5-min.png";
import GoGarden6 from "./img/project-pages/gogarden-6-min.png";

const projectPages = {
  toolsText: "Tools Used",
  backIcon: BackIcon,
  backIconAlt: "Back Arrow Icon",
  backText: "My Projects",

  // ---- Design Projects ---- //
  logoBook: {
    coverImages: [
      {
        key: 1,
        img: Logos0,
        imgAlt: "24 Logos and Typefaces Cover Photo",
      },
    ],
    title: "24 Logos and Typefaces",
    year: "2019",
    description:
      "A typography book including 24 characters designed from existing typefaces, using form and color with a yarn medium to determine mood of each character",
    tags: [
      {
        key: 1,
        tag: content.projects.tagBook,
      },
      {
        key: 2,
        tag: content.projects.tagType,
      },
    ],
    tools: [
      {
        key: 1,
        icon: InDesignIcon,
        iconAlt: "InDesign Icon",
      },
    ],
    buttons: [
      {
        key: 1,
        buttonLink:
          "https://www.behance.net/gallery/114399283/24-Logos-and-Typefaces-Yarn-Concept-Book",
        buttonText: "VIEW FULL PIECE",
      },
    ],
    content: [
      {
        key: 1,
        sectionTitle: "Exploring Type Personalities",
        paragraphs: [
          {
            key: 1,
            text: "Designed for the course Typography I, 24 Logos and Typefaces is a book of 24 new characters within popular typefaces. The assignment aimed to explore the qualities of existing typefaces, and what distinguishes them through character and personality. Through studying existing type, I then manipulated and experimented with character forms to design entirely new characters. These new characters sought to embody the same unique styles of each typeface, and paid close attention to consistency in physical and expressive techniques.",
          },
          {
            key: 2,
            text: "The following image shows an example of a character I made for the Futura Book font, by finding intersections between the existing 'c' and '6' forms. The result creates a new character that follows the same curves and sleek proportions that define Futura, while overcoming expectations of how a character should look within the rules of the existing alphabet, number system, and symbols.",
          },
        ],
        img: Logos1,
        imgAlt: "24 Logos and Typefaces Example Character",
      },
      {
        key: 2,
        sectionTitle: "Character Through Color and Form",
        paragraphs: [
          {
            key: 1,
            text: "In addition to investigating what technical qualities make a typeface unique, I also wanted to explore what general emotion and reaction it inspires in a viewer. I believe color is a very powerful tool for both representing and inspiring emotion. With this focus, I chose yarn as a flexible medium to experiment with different color systems for the font. Playing with yarn allowed me to easily understand the form of my new characters, but also decide which colors and patterns best reflect my emotional response to them. The following image shows some of my experimentation with creating my new type forms using yarn, and establishing color schemes based on their respective personalities.",
          },
        ],
        img: Logos2,
        imgAlt: "24 Logos and Typefaces Example Yarn Experiments",
      },
      {
        key: 3,
        sectionTitle: "Putting It Together With Pantone",
        paragraphs: [
          {
            key: 1,
            text: "With the focus on color, my last step in my experimentation was to decide on a final color that best represented the new form. To visually portray this in my book design, I created Pantone cards that were personalized to my new character and the original forms that inspired it. I created collages with my yarn experimentations, the Pantone cards, and a highlighted curve within the character that best expressed the personality of the typeface. The following image shows an example of this execution on a character I created for the Garamond typeface. The final product combines color, technical form and medium to visually represent what the typefaces mean to me and what make them unique. This process was very inspiring for how I chose to work with type in the future, and understanding the intent and meaning behind creating and using a typeface successfully.",
          },
        ],
        img: Logos3,
        imgAlt: "24 Logos and Typefaces Example Pantone Page",
      },
    ],
  },

  energyUsage: {
    coverImages: [
      {
        key: 1,
        img: Energy0,
        imgAlt: "Global Energy Usage Cover Photo",
      },
    ],
    title: "Global Energy Usage",
    year: "2020",
    description:
      "An infographic comparing global energy usage in the year 1900 and 2019, and highlighting disparities in usage between countries and energy sources",
    tags: [
      {
        key: 1,
        tag: content.projects.tagID,
      },
      {
        key: 2,
        tag: content.projects.tagPoster,
      },
    ],
    tools: [
      {
        key: 1,
        icon: InDesignIcon,
      },
    ],
    buttons: [
      {
        key: 1,
        buttonLink:
          "https://www.behance.net/gallery/114366721/Global-Energy-Usage-Poster",
        buttonText: "VIEW FULL PIECE",
      },
    ],
    content: [
      {
        key: 1,
        sectionTitle: "Information Sharing Through Design",
        paragraphs: [
          {
            key: 1,
            text: "Created for the course Typography II, this poster explores different methods for conveying information in design. We were instructed to research a topic of our choosing, and design an infographic poster that successfully communicates both the information we gathered and a general message formed through research. With a strong passion for sustainability, I decided to research energy usage on a global scale and investigate the impacts of different energy forms and geographic regions.",
          },
          {
            key: 2,
            text: "The work explores using color values from dark to light to represent intensity of impact. It uses several forms of graphical elements to share statistics, including bar graphs, pie charts and maps. I used several different font sizes and weight to investigate how typography can be used to direct a viewer's eye to specific information. The use of graphs, font variation, icons and color creates a very dynamic and visually exciting graphic.",
          },
          {
            key: 3,
            text: "The overall layout aims to create a digestible graphic, that guides the viewer to learn through a top to bottom reading path. This path teaches the viewer which energy sources are relevant, who is using them, and what this may mean for the future. I greatly enjoyed playing with type, color and layout to create a condensed, yet organized, story of energy.",
          },
        ],
      },
    ],
  },

  newYorkUnderground: {
    coverImages: [
      {
        key: 1,
        img: NY0,
        imgAlt: "New York Underground Cover Photo",
      },
    ],
    title: "The New York Underground",
    year: "2021",
    description:
      "A semester-long project investigating the influences, collaborations and associations of iconic artists with New York's underground scene",
    tags: [
      {
        key: 1,
        tag: content.projects.tagID,
      },
      {
        key: 2,
        tag: content.projects.tagPoster,
      },
    ],
    tools: [
      {
        key: 1,
        icon: InDesignIcon,
      },
    ],
    buttons: [
      {
        key: 1,
        buttonLink:
          "https://www.behance.net/gallery/152399837/New-York-Underground-Infographic",
        buttonText: "VIEW FULL PIECE",
      },
    ],
    content: [
      {
        key: 1,
        sectionTitle: "Exploring Collections with NYC",
        paragraphs: [
          {
            key: 1,
            text: "The above infographic comes from my work for the course Design Degree I, where we were instructed to choose a collection to research for a semester-long project. The goal of the project was to investigate a collection, experiment with it through different design forms, and visually explore my own relationship with it and how it can inform others. Growing up around a heavy New York City influence, I chose to continue researching the downtown underground scene that I had spent countless hours hearing and reading stories about. Throughout the project I investigated a collection of 10 important locations within the scene, and what art, people and history came from them. As one of the final deliverables for the project, the infographic summarizes the influences between artistic, musical and political figures within the scene. It explores using line work to convey different connections and influences over time. The information conveyed in this graphic stems from months of research and visual studies of my 10 locations, their influences, and the future of the performance world.",
          },
        ],
      },
      {
        key: 2,
        sectionTitle: "Collecting Locations, Literally and Visually",
        paragraphs: [
          {
            key: 1,
            text: "To begin my investigation, I researched 10 different locations that were significant within New York City's underground community. I wanted to highlight locations that helped inspire or birth creative movements within the underground scene, ranging between physical art, poetry, theater and music. After selecting my collection, I then researched visual representations of these locations through posters and advertisements made to market significant events that occurred there. These events ranged between gallery openings, theater performances, music shows, poetry readings, and performative art shows and more. Through this research process I was able to further my knowledge in the history of a scene that is so inspiring and important to me, as well as study the different artistic forms they used within poster design and xerox art. The following image shows a layout of my chosen collection and the posters and physical artifacts that interested me for further exploration.",
          },
        ],
        img: NY1,
      },
      {
        key: 3,
        sectionTitle: "Applying Location to Historical Movements",
        paragraphs: [
          {
            key: 1,
            text: "After creating a collection of locations and posters, I wanted to better understand the historical movements occurring within New York, and how they influenced activity and community within the scene. The following image shows one of several design experiments I did to investigate historical influence within the community through posters from different locations. Studying the Village Voice, a popular newspaper within New York's East Village and Lower East Side, I found real articles from the same year as different significant events in the underground scene. With these articles, I created collage compositions by overlaying a fake newspaper column over the real article.",
          },
          {
            key: 2,
            text: "This example shows a poster from a historic theater performance at La Mama, a location that was a safe haven for queer members of the community. Next to this column is a piece in the Village Voice from 1970 that celebrates the triumphs of the gay liberation movement at the time. By comparing my modern perspective with the historic article, I aim to highlight the influence that historic movements had on the underground scene, and how those influences carried on to inspire people today. This experimentation and research helped me better understand what different events were affecting the New York community over the years, and how art, music and theater helped them through difficult battles.",
          },
        ],
        img: NY2,
      },
      {
        key: 4,
        sectionTitle: "Visual Experiments Through Mapping",
        paragraphs: [
          {
            key: 1,
            text: "The next step in my creative process was to visually explore the connections between my collected locations, and how they may have influenced each other. The following example shows an interactive map experience for a user wanting to explore the New York downtown, and learn about its history through visiting my 10 locations. This experiment allowed me to visually represent how close these locations are to each other, and to show how such a significant art community existed in a very small part of the city. This study focused on location and geographical visualizations for researching my collection and its significance.",
          },
        ],
        img: NY3,
      },
      {
        key: 5,
        sectionTitle: "Initial Research in Influences",
        paragraphs: [
          {
            key: 1,
            text: "Part of the same experimental stage as the previous example, the following image shows a study I did on the different locations and which years their respective events occurred. This study shows where I started researching people, and the influences or connections these locations had to significant figures in art, music and theater history. This example was the final brainstorm that led to my infographic piece.",
          },
        ],
        img: NY4,
      },
      {
        key: 6,
        sectionTitle: "Poster Grouping by Genre",
        paragraphs: [
          {
            key: 1,
            text: "An additional fun experiment I completed throughout the semester was exploring similarities between the poster designs of my collection. By grouping the posters into art, theater, music and poetry, I created collages of the posters to identify visual similarities and how they may represent the different art forms. I then overlaid and manipulated the posters on top of each other to create final pieces. From this experiment, I found that the art posters were much more visually experimental and abstract. The theater posters were more flashy and cartoonish, the music poster reliant on heavy text and grunge imagery, and the poetry posters were more illustrative and peaceful. The final forms can be seen in the following image. I found it really interesting to consider how the different art styles represented the different sub-groups within the larger community. I really value and take a lot of personal inspiration from the posters of this collection, and included them as interesting background imagery in my final infographic.",
          },
        ],
        img: NY5,
      },
    ],
  },

  makeTheSwitch: {
    coverImages: [
      {
        key: 1,
        img: Switch0_1,
        imgAlt: "Make the Switch Cover Photo",
      },
      {
        key: 2,
        img: Switch0_2,
        imgAlt: "Make the Switch Cover Photo",
      },
    ],
    imgFullWidth: true,
    title: "Make The Switch Campaign",
    year: "2022",
    description:
      "A poster series advertising MakeTheSwitch, a campaign encouraging people and businesses to switch investment from fossil fuels to renewable energy.",
    tags: [
      {
        key: 1,
        tag: content.projects.tagGD,
      },
      {
        key: 2,
        tag: content.projects.tagPoster,
      },
    ],
    tools: [
      {
        key: 1,
        icon: IllustratorIcon,
      },
    ],
    buttons: [
      {
        key: 1,
        buttonLink: "https://www.behance.net/gallery/167458663/Make-The-Switch",
        buttonText: "VIEW FULL PIECE",
      },
    ],
    content: [
      {
        key: 1,
        sectionTitle: "Identifying the Problem",
        paragraphs: [
          {
            key: 1,
            text: "This campaign comes from a semester-long research project I completed for my Senior Writing course. The focus of our semester was to choose a global problem, identify the different causes and challenges within it, and pose potential solutions. With my interest in energy sustainability, I chose to investigate the global reliance on fossil fuels, the finite resources problem, and how we can divest towards renewable energy. The research and essay responses were an extremely enjoyable way of understanding a dear and important topic, and I've spent countless moments sharing the information I learned with my peers. If after reading you'd like to learn more about the research, writing and design solutions I did for this topic, please visit my Advanced Writing portfolio below.",
          },
          {
            key: 2,
            text: "Mina Fletcher Advanced Writing Portfolio",
            link: "https://minafletcher.wixsite.com/advanced-writing",
          },
        ],
      },
      {
        key: 2,
        sectionTitle: "Experiments Through Poster Design",
        paragraphs: [
          {
            key: 1,
            text: "Throughout the semester we experimented with different mediums for presenting our problem to an audience, and encouraging a form of action to take place in response. I created a campaign titled “Make the Switch”, with a simple message that encourages a global transition from fossil fuels to renewable energy. This highlighted poster series serves as an example of the design solutions I explored, and how I practiced a specific design style for advertising the campaign towards a younger audience.",
          },
          {
            key: 2,
            text: "The first poster in the series conveys a hopeful message of the earth uniting with tech for a more sustainable future. The design uses simple colors, doodle-like images and funky text to give it a fun, artistic and digestible style that is designed specifically for a Gen Z audience. It translates a simple message into an attractive visual element that both catches a young eye, and encourages them to save the graphic to use on clothing or as a wall display.",
          },
          {
            key: 3,
            text: "The second poster design in this series uses a more threatening message. It experiments communicating the harmful future effects of the finite resources problem, and the idea that exciting topics of the future, like space travel, may not exist when fossil fuels run out. That is, unless the world switches to sourcing renewable energy. This attempt aims to test what form of communication is more effective on a large audience, and which messaging has a stronger impact in comparison to the first poster.",
          },
          {
            key: 4,
            text: "Similar to the first poster, the design uses an artistic visual style that attracts a Gen Z eye. The funky text, vector images and grain effect play on elements that are common in aesthetic poster or t-shirt designs. This style attempts to create an imagery that conveys an important message, but would also be kept and shared by a Gen Z audience through Instagram or decorative opportunities. Completing this series was an interesting way of practicing my graphic design skills and making specific design decisions based on my target audience.",
          },
        ],
      },
    ],
  },

  // ---- Animation Projects ---- //
  claymationMusic: {
    videoLink: "https://youtu.be/2YxNpnNR71Q",
    title: "Claymation Music Video",
    year: "2020",
    description:
      "A stop-motion video using different materials and textures to visually depict the sounds of an audio file",
    tags: [
      {
        key: 1,
        tag: content.projects.tagStop,
      },
      {
        key: 2,
        tag: content.projects.tagSound,
      },
    ],
    tools: [
      {
        key: 1,
        icon: PremierIcon,
      },
    ],
    content: [
      {
        key: 1,
        sectionTitle: "Defining and Understanding New Sound",
        paragraphs: [
          {
            key: 1,
            text: "Created for the course Movement and Time, this animation experiments with the connections between sound and visual images. To create the soundtrack for our animation, we first took existing audio files (I sampled Pam Berry by the Shins), and manipulated and mixed them until they became their own unique and experimental sound. From there, our goal was to determine visual equivalents for each of the individual sonic elements within our audio. This process made us practice intensive listening and make decisions on the sound's texture, color, symmetry, form and movement.",
          },
        ],
      },
      {
        key: 2,
        sectionTitle: "Visual Experiments from Sound",
        paragraphs: [
          {
            key: 1,
            text: "When listening to my audio, I felt the most prominent sounds were generally organic and had their own life to them. It sounded as though something were alive, breathing, and actively trying to move and awaken out of its dormant state. To visually represent this, I chose a clay medium that I knew would be malleable enough to create this sense of life. Through a claymation approach, the clay beings are alive and actively restless and experimenting with different forms. The other sonic elements of the audio are represented through a range of textures, mixing organic yarn and lavender with plastic glitter and pipe-cleaners, and through color in my editing process. This range of materials, and the repetition in certain audio and visual elements, creates a sense of controlled chaos in the life of the audio.",
          },
          {
            key: 2,
            text: "The production of this animation took a lot of physical labor, about 900 images, and has only added to my appreciation for stop-motion films. I really enjoyed the hands-on experimentation of this project, and the relationship I created with the different beings within the scene.",
          },
        ],
      },
    ],
  },
  personalLogo: {
    videoLink: "https://youtu.be/8V9r0kShsRk",
    title: "Personal Logo",
    year: "2020",
    description:
      "A short animation playing on the energy and character of a personal logo design",
    tags: [
      {
        key: 1,
        tag: content.projects.tag2D,
      },
      {
        key: 2,
        tag: content.projects.tagLogo,
      },
    ],
    tools: [
      {
        key: 1,
        icon: AfterEffectsIcon,
      },
      {
        key: 2,
        icon: IllustratorIcon,
      },
    ],
    content: [
      {
        key: 1,
        sectionTitle: "Giving Life to My Personal Brand",
        paragraphs: [
          {
            key: 1,
            text: "This logo animation served as the final project for the tools class of Movement and Time, where we practiced editing and animating skills in After Effects. The assignment was to create a logo reveal animation, either for a personal or an existing corporate logo. I took this assignment as an opportunity to create a personal logo, and attempt to create a design that captures the creative and energetic personality of my work and brand.",
          },
        ],
      },
      {
        key: 2,
        sectionTitle: "Foundations of Color and Shape",
        paragraphs: [
          {
            key: 1,
            text: "I went into the project specifically wanting to use shapes that came to life through the logo reveal. Geometric shapes and abstract forms have always been a significant influence to my work, and my preferred art style. At the end of the day any form can be constructed of lines, curves and simple shapes, and I appreciate them as foundational blocks, whose infinite combinations create the physical and visual world as we know it. My similar appreciation for primary colors stems from this same idea. For my logo design, I wanted the integration of primary shapes and colors to represent my excitement to be creative, try new technologies, and overall explore endless opportunities that start from a simple foundation. Animating these shapes allowed me to bring life to this brand, and represent the energy and care that I put into every project. The final logo plays on my first and last initials, MF, and explored ways of combining these letters into one form. The thickness of the text creates a bold impact, that is then softened by using light curves instead of straight lines to form the letters. This effect creates a witty personality, without taking away from the strength of the brand.",
          },
        ],
      },
      {
        key: 3,
        sectionTitle: "Storyboarding",
        paragraphs: [
          {
            key: 1,
            text: "The following images show my storyboard that outlined the important keyframes of my animation, and is the first storyboard I've ever made for a project. In the sketches you can see I designed the shape characters to follow each other into the shot, and join together to magically grow into the logo. I had a very clear idea of the animation from my initial sketches, and knew exactly the motion and energy I wanted my shapes to have. Inspired partially by the personality of Pixar's Luxo Lamp, rolling into the screen gives the shapes a youthful and energetic character. I took advantage of using ease and rotation to give life and that natural movement to the shapes. They each serve as individual characters in the animation, and play an equal part in creating the brand.",
          },
          {
            key: 2,
            text: "I really enjoyed this assignment as a way to further define my brand and what inspires me, as well as a chance to practice my animation skills and give life to simple shapes on a screen. While I've since redesigned my brand, this early design captures the inspiration from geometric shapes and primary colors that will always be visible through my work.",
          },
        ],
        img: PersonalLogo1,
      },
    ],
  },

  princessSack: {
    videoLink: "https://youtu.be/X60ais9aOA8",
    title: "Princess Floursack",
    year: "2021",
    description:
      "A short in which Princess Floursack finds a crown on the ground, but its fit is rather disappointing.",
    tags: [
      {
        key: 1,
        tag: content.projects.tag2D,
      },
      {
        key: 2,
        tag: content.projects.tagChar,
      },
    ],
    tools: [
      {
        key: 1,
        icon: ClipStudioIcon,
      },
    ],
    content: [
      {
        key: 1,
        sectionTitle: "Principles of Animation Through 2D",
        paragraphs: [
          {
            key: 1,
            text: "Developed for the course Animation Basics, this assignment focused on applying the 12 Principals of Animation, and practicing fundamental techniques of 2D animation. We were instructed to create our own flour sack character (a classic in animation fundamentals), and have it complete some task with a specific emotion and motivation. Entirely drawn by hand and animated in Clip Studio Paint, this assignment demanded a range of artistic abilities, as well as significant focus and attention to detail.",
          },
        ],
      },
      {
        key: 2,
        sectionTitle: "Developing the Character",
        paragraphs: [
          {
            key: 1,
            text: "As part of my initial brainstorm process, I found a collection of reference images to inspire my character's shape as well as personality. I liked the idea of creating a story around a feminine, yet sassy character, and found many similarities between the triangular shape of flour sacks and popular dress patterns. This combination led to my interest in the “princess” persona, and I took great inspiration from strong female characters like Envy or Princess Peach. This process of gathering reference images was extremely important for understanding what form my character should have, as well as how it may convey different emotions.",
          },
        ],
        img: Floursack1,
      },
      {
        key: 3,
        sectionTitle: "Modeling Figure and Expressions",
        paragraphs: [
          {
            key: 1,
            text: "The next step in the pre-production process was to create a model sheet of my character expressing a range of positions and emotions, as seen in the following image. Taking inspiration from the classic princess dress design, my character has a wide and soft body that is cinched tightly at its head with a bow. The bow design gives a feminine elegance, helps create the illusion of eyes, and emphasizes the character's overall expression. In my sketches, I worked on exaggerating every aspect of the character's body to suggest certain emotions, such as making its features sharp and taut when angry, or slouchy and loose when sad. As this animation has no sound or dialogue, the physical form of my character becomes extremely important for expressing its feelings and reactions to an event.",
          },
        ],
        img: Floursack2,
      },
      {
        key: 4,
        sectionTitle: "Storyboarding",
        paragraphs: [
          {
            key: 1,
            text: "In order to define the emotion and motivation my character has for its task, the final part of my pre-production process was creating the storyboard. Directly inspired by my characters “princess” persona, I wanted to highlight Princess Flour Sack's response to the crown she's been waiting for. Shown in the following image, the storyboard outlines my character finding a crown, feeling great excitement in response, picking it up, only to feel disappointment when the crown doesn't fit right. This story allows my character to show emotions, joy and sadness, as well as tests my ability to draw and animate the fluid movements of bending, jumping, and slouching.",
          },
        ],
        img: Floursack3,
      },
      {
        key: 4,
        sectionTitle: "Production",
        paragraphs: [
          {
            key: 1,
            text: "The production phase of this assignment was an intense and tedious one, where I repetitively drew my character frame by frame as it moved through the story. I paid close attention to the timing between movements, the character's individual poses, exaggeration in form, as well as the other 12 principles of animation. This process required a lot of skill and patience to fluidly animate between poses. With more time to work on the assignment, I would focus on adding more time between poses and reducing the speed of the animation. However, I am overall very proud of the work I accomplished and the artistic skills I gained.",
          },
        ],
      },
    ],
  },

  spaceJunk: {
    videoLink: "https://youtu.be/vfF1_uwX1x4",
    title: "Space Junk",
    year: "2021",
    description:
      "An educational entertainment video made as a group project to Natalie Panek's 'Let's Clean Up the Space Junk Orbiting Earth'",
    tags: [
      {
        key: 1,
        tag: content.projects.tag2D,
      },
      {
        key: 2,
        tag: content.projects.tagChar,
      },
    ],
    tools: [
      {
        key: 1,
        icon: AfterEffectsIcon,
      },
      {
        key: 2,
        icon: IllustratorIcon,
      },
    ],
    content: [
      {
        key: 1,
        sectionTitle: "Edutainment Through Animation",
        paragraphs: [
          {
            key: 1,
            text: "Created for the course Animation Basics, this group project is a 2D edutainment video using the existing Ted Talk “Let's Clean Up the Space Junk Orbiting Earth” by Natalie Panek (linked below). My group, consisting of myself, Luna Sewell, and Chenwei Zhu, worked over the course of 4 weeks through the pre, during, and post-production processes. We aimed to select a topic of our interest, and enhance the overall effectiveness of the audio using 2D animation and sound effects. The project was an incredible opportunity to learn the animation process through a group environment, and work towards our specific goals within our animation skills.",
          },
          {
            key: 2,
            text: "'Let's Clean Up the Space Junk Orbiting Earth' by Natalie Panek",
            link: "https://www.youtube.com/watch?v=501FEzbB1JI",
          },
        ],
      },
      {
        key: 2,
        sectionTitle: "Defining Content and Style",
        paragraphs: [
          {
            key: 1,
            text: "To begin our process, we listened to dozens of Ted Talks and chose Panek's discussion on satellite space junk. The topic felt relevant to talk about, and had descriptive content that felt easy to visualize with animation. The next step in pre-production was to research different artistic styles as inspiration. We decided to refer heavily to the popular art style created by Kurzgesagt, a German animation studio known for producing edutainment videos. Some example images that we especially liked can be seen below. We found their colorful yet minimalistic style created a fun and beautiful learning environment. We also aimed to use a similar blue and purple palette that works so well with content relating to space. Most inspiration from the style came through in our character and prop designs. While finding direction in the Kurzgesagt style, our group worked together to create unique characters that remain personal to our collected artistic vision.",
          },
        ],
        img: SpaceJunk1,
      },
      {
        key: 3,
        sectionTitle: "Asset Creation",
        paragraphs: [
          {
            key: 1,
            text: "The inspiration from the Kurzgesagt art style can be seen in the visual assets I created, pictured below. After creating our initial storyboard and deciding which assets were needed for the animation, we divided the list between the three of us. I then used Adobe Illustrator to create vector files for the assets. This process required constant cross-comparing of our assets among the group, to ensure similar executions of our art style and color palette. My assigned assets involved creating different background planets, a satellite drag sail, a coin, and a space background with various star colors and sizes. This process was a fun way of practicing my skills in Illustrator, while also adapting from an existing art inspiration.",
          },
        ],
        img: SpaceJunk2,
      },
      {
        key: 4,
        sectionTitle: "Storyboarding",
        paragraphs: [
          {
            key: 1,
            text: "The most time-consuming and significant part of our pre-production process was creating the animation storyboard. First, we needed to edit the Ted Talk into a shorter audio file, making the content more direct for an edutainment focus. As a group, we worked through the audio line by line and discussed how we wanted to visually represent the information being shared. This process took deliberation, and lots of creativity, to decide on the most entertaining, and easy to follow, visual storytelling. We discussed transitions, the direction of moving assets, time measurements for each shot, and sound effects. The below image shows one example page of our finalized storyboard after some initial asset creation. This step was essential for laying out the exact details of each shot, and in combination with the animatic and shot list, made the animating process as efficient as possible.",
          },
        ],
        img: SpaceJunk3,
      },
      {
        key: 5,
        sectionTitle: "Production",
        paragraphs: [
          {
            key: 1,
            text: "The bulk of the work spent for this project was in the animating and production process. Working from our storyboard, the group split the total sequence into three equal parts for us to animate individually. I was assigned the segment 0:49 - 1:26. I put significant work into creating an animation that felt personal and that I was proud of, yet still matching the animation style of my other group members. While I followed the storyboard closely, there were many small transitions within assets that weren't specified. I had to be creative and decide on my own how best to make a prop appear on screen, or what facial expression a character should have. I had a lot of fun advancing my skills in After Effects, and gaining practice in techniques such as the Puppet tool and animating individual parts of a character.  I really admire how even though our individual animation styles can be seen between the different sections, the work is consistent and a great example of how our individual skillsets work together successfully.",
          },
          {
            key: 2,
            text: "This project was my favorite one I accomplished in the Animation Basics course, and was greatly admired by our professor and the rest of the class. It put many of my 2D animation skills to the test, and taught me how to give life and personality to digital characters made from vectors. This project was also an important experience for animating in a group environment. The below image shows a breakdown of the work distribution throughout the group, and what challenges we experienced throughout the entire process. I am very proud of the work we produced, and would greatly enjoy working on another edutainment project in the future.",
          },
        ],
        img: SpaceJunk4,
      },
    ],
  },

  ghostTalent: {
    videoLink: "https://youtu.be/CNPWdgauX-8",
    title: "Ghost Talent Show",
    year: "2021",
    description:
      "A short where a ghost shows off his flying skills at a talent show",
    tags: [
      {
        key: 1,
        tag: content.projects.tag3D,
      },
      {
        key: 2,
        tag: content.projects.tagChar,
      },
    ],
    tools: [
      {
        key: 1,
        icon: MayaIcon,
      },
      {
        key: 2,
        icon: AfterEffectsIcon,
      },
    ],
    content: [
      {
        key: 1,
        sectionTitle: "Expanding My Skills Through 3D",
        paragraphs: [
          {
            key: 1,
            text: "Created for the course Animation Basics, this project is a 3D animation of a simple character performing a special and unique talent. I spent about 5 weeks creating my character, modeling it, creating props, adding light and texture, and animating his talent. Working on 3D animation for the first time, and using Maya as a software, this assignment showed me an entirely new perspective on the animation process and the differences between 2D and 3D. It was an immense challenge to learn an entirely new and complicated tool, but paid off in the fluid movement and life I was able to give my character. This assignment served as great experience in working with Maya, that I put to use in my following 3D animation courses.",
          },
        ],
      },
      {
        key: 2,
        sectionTitle: "Developing the Character",
        paragraphs: [
          {
            key: 1,
            text: "The first step in my animation process was deciding what I wanted my character to be, and therefore what talents it would be capable of achieving. Early on in my brainstorming, I gravitated toward a ghost character that could fly as its talent. After deciding on this focus, I gathered some reference images to inspire what look and personality I wanted my character to have. I specifically wanted my ghost to be cute, and it wasn't hard to find other ghost characters where the designers had the same goal. Pictured below are some examples of reference images that I used to base my ghost model on.",
          },
        ],
        img: GhostTalent1,
      },
      {
        key: 3,
        sectionTitle: "Modeling Key Poses",
        paragraphs: [
          {
            key: 1,
            text: "Working from the reference images, I sketched a simple model sheet of some example poses my ghost may have, as pictured below. I kept in mind the specific talent I knew it would perform: something along the lines of flying, plunging down into a surface, and popping out. I chose a combination of different features from the reference images, specifically its rosy cheeks, and a general glow emanating from the ghost's body. The ghost's body maintained the classic rounded head and scalloped underside. This selection of features created a character that was extremely cute and cartoonish, while still maintaining a glow that made it mysterious and unique as a ghost.",
          },
        ],
        img: GhostTalent2,
      },
      {
        key: 4,
        sectionTitle: "Storyboarding",
        paragraphs: [
          {
            key: 1,
            text: "The most important pre-production step before creating my animation was developing the storyboard. From my initial brainstorm, I knew I wanted the ghost to perform a trick while flying as his talent. My first talent idea involved placing a door prop in the middle of the stage, which the ghost would fly into, disappear, then pop out from the other side. Another version consisted of the ghost flying into the ground, popping out, but with no other prop involved. For my final storyboard, I decided to give the ghost a hat to wear during his talent. Not only does the hat add to the character's charm and cuteness, but it also added another layer to the overall talent. Having the hat stay on the ground while the ghost flies through, adds to the realness of his ghost abilities, and creates an additional skill of detecting where the hat has landed through the floor. The final storyboard was essential for deciding on this additional element, as well as determining timing and sound effects.",
          },
        ],
        img: GhostTalent3,
      },
      {
        key: 5,
        sectionTitle: "Production",
        paragraphs: [
          {
            key: 1,
            text: "This project was produced and animated in Maya, and edited with sound effects in Adobe After Effects. The animation process was the most time and energy consuming part of the project. Being entirely new to 3D animation, this experience with Maya was my first exposure to 3D modeling, working with light and texture, rigging, and keyframing in 3D. As the stage design was provided for us, I focused solely on animating and styling the character. I spent the majority of my time on perfecting the fluid motion of the ghost's flying pattern, and the curves its body has on each angle of its flight. I also spent significant energy on the hat's propeller motion, and ensuring it moved at an accurate speed and direction based on the ghost's movements. My favorite part of the animation process was adding a light source inside of the ghost, and giving the ghost a semi-transparent skin. This created a glow effect that was successful and added a fun play on lighting to the assignment. The final product creates a character with life and personality, while also accurately portraying how it would move in the provided space. Overall, I am extremely proud of the work I produced on my first 3D animation project, considering I learned how to use Maya for this assignment entirely on my own.",
          },
        ],
      },
    ],
  },

  slanted: {
    videoLink: "https://youtu.be/vq6R4RU5xK0",
    title: "Slanted",
    year: "2022",
    description:
      "A short film about a curious boy that gets into more trouble than he expects in a modern art gallery",
    tags: [
      {
        key: 1,
        tag: content.projects.tag3D,
      },
      {
        key: 2,
        tag: content.projects.tagChar,
      },
      {
        key: 3,
        tag: content.projects.tagSet,
      },
    ],
    tools: [
      {
        key: 1,
        icon: MayaIcon,
      },
      {
        key: 2,
        icon: AfterEffectsIcon,
      },
    ],
    content: [
      {
        key: 1,
        sectionTitle: "Learning Through the Animation Pipeline",
        paragraphs: [
          {
            key: 1,
            text: "Created for the course Animation 1, this 3D animation served as a semester-long project to create a short film through the animation pipeline process. The process consisted of creating the story, building the set design, character modeling, UVs and textures, rigging, weight painting, sound effects, and everything in between. Through this process I practiced many concepts in Maya that I had no understanding of before, and gained a new perspective on how 3D modeling and computer graphics work. Mostly, it was really enjoyable to put myself into a story, a set, and a character that felt clever, creative, and entirely me.",
          },
        ],
      },
      {
        key: 2,
        sectionTitle: "Creating the Story",
        paragraphs: [
          {
            key: 1,
            text: "The initial instruction for creating our story was short and vague: choose one character to do one action in one setting. With no idea where to start, I decided to make a long list of every possible setting I could think of, and immediately felt drawn towards the idea of a gallery room. With a great appreciation for abstract and modern art, I felt a lot of excitement at the idea of being able to design my own modern art gallery space. After deciding on the setting, it was easy to imagine the options of what a character could do in the space. I quickly came up with the idea of having a painting that would mess up reality when a character touched it. Soon, my final idea of a slanted painting, that would shift the angle of reality when re-aligned, came to light. Pictured below are my initial sketches of this idea, and the general layout of the set design and character movements.",
          },
        ],
        img: Slanted1,
      },
      {
        key: 3,
        sectionTitle: "Storyboarding",
        paragraphs: [
          {
            key: 1,
            text: "The next important step in the pipeline was to finalize the story by creating a storyboard. My initial storyboard design included my original idea of having the character walk in to the gallery, shift a slanted painting labeled “Do not touch”, completely alter the angle of reality itself, and have the character frantically shift the painting, and the universe, back to normal. However, my first storyboard iteration included only shots from one camera angle. My professor immediately noticed this flaw, and suggested to add a variety of different camera angles and zoom shots. This tip was essential for adding to the suspense and drama to the story. Creating a more detailed storyboard was also very useful for establishing the general set and character design early on, from key prop elements to facial expressions, as well as the suggested time stamps for each shot. The final storyboard design can be seen below.",
          },
        ],
        img: Slanted2,
      },
      {
        key: 4,
        sectionTitle: "Character Sketches",
        paragraphs: [
          {
            key: 1,
            text: "The next step in the pipeline was to finalize the character design that I sketched in my storyboard. From the beginning, I knew I wanted my character to be simple and humanoid. I felt a simple design would match well aesthetically with modern art, almost as though the character was abstracted himself. Creating a simple character also allowed me to highlight the facial expressions that help carry the suspense in the story. At the end of the day, I knew I wanted my character to just be a lil guy, with a youthful sense of curiosity and mischievousness. Expanding directly from my storyboard sketches, I made a simple model sheet of my character and what clothing I planned for him to wear. The below sketches show my focus on creating an abstracted character with large eyes, which would be heavily animated in the film as the focal point for his reactions. The clothing remains simple as well, and mimic what an average joe would normally wear going into a gallery.",
          },
        ],
        img: Slanted3,
      },
      {
        key: 5,
        sectionTitle: "Set Design",
        paragraphs: [
          {
            key: 1,
            text: "My favorite part of the animation pipeline, and the most visually satisfying, was designing and texturing the set design. My decision to place the animation in a modern art gallery was in part inspired by the types of actions a character could achieve there, and the suspense and humor that could come from it. However, it was also greatly motivated by a desire to design my own gallery space. Designing a gallery set meant I could choose which paintings to display, and gave me the freedom to express myself and highlight my own inspirations.",
          },
          {
            key: 2,
            text: "Modeling the gallery room was a relatively simple task. As the space and props are incredibly minimal in design, the most challenging modeling tasks were creating the seating bench (modeled directly after the Tuxedo Bench by BassamFellows) and the entry door. Much of my inspiration for the space layout props and framing came from gallery rooms in the MoMA. A fun, and surprisingly tedious task, was modeling the sculpture that serves as the focal point of suspense in the animation. To design the sculpture, I created a torus in Maya and bended and manipulated different vertices of the torus until it formed an abstract shape that I liked. However, I had a specific vision in my head of how I wanted the shape to look, and spent hours stretching different faces and manipulating vertices until I got it just right. It truly felt like I was a sculptor myself, using Maya as my medium to bring my vision to life.",
          },
          {
            key: 3,
            text: "The fun part of the set design process was texturing the entire space and all of its props. After applying the painstaking UV mapping process (confusing, difficult, not fun) to each of my models, I was able to decide the look and feel I wanted the space to have. For lighting, wall and floor color, I chose the same minimalist style that is consistent throughout modern art spaces. The colors and textures for frames, the seating bench, the door and exit sign also came inspired directly from existing gallery spaces. The exciting part of this process was choosing which images to map onto the 5 paintings in the space. I wanted to highlight artists that have been influential to me in my appreciation for modern art, and that I have spent countless hours reading about and studying in my free time. I chose to highlight the paintings: Composition VII (1913) by Wassily Kandinsky, Cuadro II by Piet Mondrian (1872-1944), Cosmic Slop 'Black Orpheus' (2011) by Rashid Johnson, Grillo (1984) by Jean-Michel Basquiat, Autumn Rhythm (Number 30)  (1950) by Jackson Pollock. Deciding on which painting to highlight as the slanted painting was fun research task, as I needed a piece that was so mesmerizing, a viewer might forget their logic and reason. After looking through popular pieces at the MoMA, I discovered Rashid Johnson's work, and felt “Black Orpheus” was the perfect fit. Selecting these paintings and laying out the space really felt like I was designing my own gallery, and I am extremely proud of how it turned out. Rendered stills of the gallery layout can be seen below.",
          },
        ],
        img: Slanted4,
      },
      {
        key: 6,
        sectionTitle: "Modeling and Rigging",
        paragraphs: [
          {
            key: 1,
            text: "One of the more difficult processes for me in the pipeline was modeling and rigging my character. Having only had minor experience in character modeling before, I had to learn a lot about sculpting, and how to extrude faces to slowly create different limbs. Facial features are always a challenge, and I spent many hours refining the eyes, nose, mouth and head shape to make the character cute and friendly, rather than scary or create a sense of “uncanny valley”. I learned to create clothing by extruding faces directly from the body, and decided on giving the character a backwards cap to highlight his boyish and mischievous personality. I learned the rigging process in full, and how to use joints to build up a full body skeleton that has a full range of motion. I learned the process of weight painting, and how the tool helps define how different parts of the body should look upon being moved or folded. While a lot of the work occurs behind the scenes and is unknown to the viewer, it was incredibly important for me to have this experience and understand the work put in by animators to create characters that look and move naturally.",
          },
        ],
        img: Slanted5,
      },
      {
        key: 7,
        sectionTitle: "Production",
        paragraphs: [
          {
            key: 1,
            text: "Up until the start of the animation production process, about 3 months were spent on modeling, texturing, and rigging my set and character. With finals season coming up, I had about 1.5-2 weeks to animate and edit my entire film. My time put into correctly rigging and weight painting my character meant that the animation process was relatively straightforward, but still took a sufficient amount of time, stress, and tears. I needed to animate a smooth character walk, in between motions of my character throughout the scene, props, and the room itself. Additionally, I needed to manage 12 different camera shots, their timing, and animate camera zooms. Lastly, I had to edit the film, add sound effects, and create opening and closing credits. Let's not forget the nearly 72 total hours it took to render my film. At one point I had renders running on three separate computers in the animation lab, just to have the film ready by the deadline.",
          },
          {
            key: 2,
            text: "The most significant challenges were in making the character movements smooth and realistic, as well managing their timing. There was a moment where I realized the way I was viewing my animation playback was showing at about 1.25x the speed, and my animation was significantly slower than I intended. The process of cramming animation into less than 2 weeks was incredibly tiring, and there were many moments where I believed I wouldn't finish. However, I submitted my work the morning it was due, and I couldn't have been prouder with what I accomplished. With more time, I would have put more effort into smoothly animating the character's movements and their timing, as well as refining the sound. And of course, there are some tiny mistakes throughout the film that probably only I notice. However, I am overall incredibly impressed with the final output, and this project serves as my favorite work to date.",
          },
        ],
      },
    ],
  },

  // ---- Web Development Projects ---- //
  cleanKick: {
    coverImages: [
      {
        key: 1,
        img: CK0,
      },
    ],
    title: "Clean Kick",
    year: "2020",
    description:
      "An online community discussing managing sustainable habits and intersectional environmentalism as a college student",
    tags: [
      {
        key: 1,
        tag: content.projects.tagUX,
      },
      {
        key: 2,
        tag: content.projects.tagWebDev,
      },
    ],
    tools: [
      {
        key: 1,
        icon: WixIcon,
      },
    ],
    buttons: [
      {
        key: 1,
        buttonLink: "https://www.instagram.com/cleankick.co/",
        buttonText: "VIEW INSTAGRAM",
      },
    ],
    content: [
      {
        key: 1,
        sectionTitle: "Uniting Students Through Sustainability",
        paragraphs: [
          {
            key: 1,
            text: "Designed and developed in collaboration with the organization's founder, Clean Kick is an online site that serves as a community for college students looking to learn about sustainability habits and intersectional environmentalism. I became involved in Clean Kick the summer of 2020 when I reached out to a fellow Northeastern student, who was looking for a website designer to join their team and bring the platform to life. The team behind Clean Kick is made entirely of students from around the US, and for several years was active in posting articles and information about important topics in sustainability, environmentalism, amd how students can get involved. While the site is no longer active, the Instagram still highlights many of the stories and content Clean Kick was able to share with the community.",
          },
        ],
      },
      {
        key: 2,
        sectionTitle: "Iterating Through Designs",
        paragraphs: [
          {
            key: 1,
            text: "When I joined Clean Kick, I was early in its founding and was the only designer responsible for the website. The organization's founder, Rumi Chaouli, provided me with a Figma mockup for an early mobile version of the site, as pictured below on the left. Their design was a first iteration, and we worked together to discuss what aspects of the design we liked, and how we wanted to improve it to be more digestible for a greater audience. We both enjoyed the bright pops of color and sprinkles/squiggles that added a youthfulness to the design. We also wanted to maintain the warm tone color palette of reds and oranges that portrayed optimism and sunlight, the original food for life on earth. Using oranges and reds still reflected nature, without relying on greens that are often associated with sustainability. After further deliberation on layout, and some finalized colors and logo from the other designers, I used Wix to develop the finalized design for the platform. The final mobile design can be seen below on the right.",
          },
        ],
        img: CK1,
      },
      {
        key: 3,
        sectionTitle: "Organizing Pages and Content",
        paragraphs: [
          {
            key: 1,
            text: "A important part of the Clean Kick platform comes from the articles and series that the CK writers put significant work into producing on a weekly basis. When deciding on layout and site structure, I had to consider how to clearly delegate between the different types of content the site had to offer. I used the blog feature within Wix to host the articles, and to list them properly so new articles appeared in the feed. This site was incredibly fun to make, and I enjoyed experimenting with headers, buttons, colors and boxes to help distinguish content from each other, while being visually interesting and digestible. Pictured below are example pages from the site, including the desktop home page, the articles page and series page.",
          },
        ],
        img: CK2,
      },
    ],
  },
  benvenuti: {
    coverImages: [
      {
        key: 1,
        img: Benvenuti0,
      },
    ],
    title: "Benvenuti Gelato",
    year: "2020",
    description:
      " A marketing website for Montclair's authentic Italian gelato shop, offering the store's menu, information and story",
    tags: [
      {
        key: 1,
        tag: content.projects.tagUX,
      },
      {
        key: 2,
        tag: content.projects.tagWebDev,
      },
    ],
    tools: [
      {
        key: 1,
        icon: WixIcon,
      },
    ],
    buttons: [
      {
        key: 1,
        buttonLink: "https://www.benvenutimontclair.com/",
        buttonText: "VIEW SITE",
      },
    ],
    content: [
      {
        key: 1,
        sectionTitle: "Introduction to Freelancing",
        paragraphs: [
          {
            key: 1,
            text: "Working directly with the owners of a local gelato shop in my hometown, this project served as one of my first freelance experiences. Due to the company's unfortunate opening during a global pandemic, it was incredibly important for them to have a clear and attractive website for people to learn about the business. Online ordering, and displaying the menu and store hours on the site, were essential for keeping the business successful in a strictly virtual environment. Thanks to the owners, my hard work on the site, and their delicious gelato, Benvenuti Gelato is still just as successful as their opening year.",
          },
        ],
      },
      {
        key: 2,
        sectionTitle: "The Design Process",
        paragraphs: [
          {
            key: 1,
            text: "I was instructed by the owner to design their website from scratch using Wix, and had only their existing logo to work from. I spent significant time researching other websites from local restaurants, and focused specifically on either Italian or gelato businesses. This research was important for understanding what the site map should be, and which key pages should be created. Working from the font and colors of their single logo design, I created a design theme for the site that was minimalist, yet fun and welcoming. With a more minimal theme in the site structure, I heavily utilized images from a product photo shoot to bring in color and visuals, and to highlight the most important thing about the business: their delicious gelato. Throughout my design process I was in constant collaboration with the owner, and making sure my designs matched their vision for the brand. The whole company was very pleased with the final site, and the owners still use and run it to this day.",
          },
        ],
      },
    ],
  },

  theraPro: {
    coverImages: [
      {
        key: 1,
        img: TheraPro0,
      },
    ],
    title: "TheraPro",
    year: "2021",
    description:
      "An all-in-one therapy platform for users to search for therapists, book appointments, and message experts",
    tags: [
      {
        key: 1,
        tag: content.projects.tagUX,
      },
      {
        key: 2,
        tag: content.projects.tagPro,
      },
      {
        key: 3,
        tag: content.projects.tagBr,
      },
    ],
    tools: [
      {
        key: 1,
        icon: FigmaIcon,
      },
    ],
    buttons: [
      {
        key: 1,
        buttonLink:
          "https://www.figma.com/proto/8Pmyi4VbGVsv5xdxpbaQrp/TheraPro?page-id=267%3A3922&type=design&node-id=267-4139&viewport=810%2C573%2C0.06&scaling=contain&starting-point-node-id=267%3A4139&show-proto-sidebar=1",
        buttonText: "VIEW PROTOTYPE",
      },
    ],
    content: [
      {
        key: 1,
        sectionTitle: "Learning the User-Centered Design Process",
        paragraphs: [
          {
            key: 1,
            text: "Created for the course Interaction Design, TheraPro is a semester-long concept project that creates an easy-to-use platform for finding and communicating with therapists. Inspired by my own personal difficulties of finding a therapist, I aimed to identify ways to improve the search process and what was currently lacking for most users in their journey. The design process for this course focused heavily on creating user-centered application designs, through extensive brainstorming, identifying personas, interviews, and user testing. Through this course, I learned the importance of feedback, and how identifying and designing for users ensures the most effective and successful design possible.",
          },
        ],
      },
      {
        key: 2,
        sectionTitle: "Discovering the Problem",
        paragraphs: [
          {
            key: 1,
            text: "The first step in this project required identifying our target personas, and potential problems they may face. I identified personas with a range of ages and backgrounds, from young adults, to college students, to working parents. After brainstorming their potential needs, I found there was a consistent need for maintenance over mental health, regardless of age or history. While beginning this project, I was just starting my own search for a therapist, and experiencing many struggles in finding one that seemed like a good fit for me. I decided this project could be a great opportunity to understand how to improve this experience for myself, and the majority of personas that may need it. From there, I began my investigation.",
          },
          {
            key: 2,
            text: "In my own understanding, one of the many road blocks for accessing mental health resources is the difficult experience of finding a therapist that works for their needs, as well as consistently meeting and connecting with this therapist. Pictured below is my initial project idea sketch for “TherapyGo”, where I identified many potential needs such as searching for therapists, booking appointments, and instant messaging. I wanted the application to serve as an all-in-one for whatever needs someone may have with their therapy experience. From here, I conducted interviews with a range of potential users. Based on the results, I redefined my personas, and after researching other examples of therapy sites, re-evaluated what functionality the application should have to be most successful.",
          },
        ],
        img: TheraPro1,
      },
      {
        key: 3,
        sectionTitle: "Storyboarding",
        paragraphs: [
          {
            key: 1,
            text: "One of the most important steps in my design process was creating the storyboards. This step allowed me to define an example of a potential user, what scenario they may use the application in, and what key features they may need. Making the storyboards forced me to reconsider which features are most important, and how to design the application so the user can accomplish their needs most effectively. Pictured below is an example storyboard representing my first workflow, where a user successfully searches for a therapist, finds a match, and books an appointment with them in one sitting.",
          },
        ],
        img: TheraPro2,
      },
      {
        key: 4,
        sectionTitle: "Site Navigation and Feature Mapping",
        paragraphs: [
          {
            key: 1,
            text: "After further user testing and feedback from the class, I created the first iteration of the application's navigation map. In this map, I specify the site's main sections, as displayed in the navigation menu. I list out all the features available in each section, and the different options for further navigation within each section. The different blocks represent either a page, pop up modal, or an action, and are distinguished by their box's shape. Creating this map was essential for designing the lo-fidelity wireframes, and general layout of the site. It was very important to first map out all the key features and pages, and make sure navigation throughout the site was both consistent and logical. After creating lo-fidelity wireframes, I took the site through another round of user testing and feedback, and the navigation map was constantly evolving. Pictured below is the first iteration of the site's navigation, prior to further testing.",
          },
        ],
        img: TheraPro3,
      },
      {
        key: 5,
        sectionTitle: "Logo Development",
        paragraphs: [
          {
            key: 1,
            text: "A fun and new experience for me in this project was developing the logo for the site's branding. With little prior experience in logo development, I learned to start from numerous, simple designs, and refine the final design over several iterations. Pictured below is an example of some basic logo sketches I completed during an in-class exercise. We were instructed to create several single, hand-drawn logo ideas, spending only a minute on each.",
          },
          {
            key: 2,
            text: "I focused specifically on imagery of happiness, brain health, and flowers, as I felt they created a sense of simplicity and ease that I wanted the site to provide to its users. While TheraPro itself is not a therapy website, it's designed to be an easy-to-use tool that both makes the user feel good in the moment, and helps them find further resources to stay mentally healthy. From further feedback, I found the “happy brain” imagery helped suggest both of these goals, and created a cute mascot for the brand in the process. Also pictured below is the finalized logo design, with the happy brain character placed next to the brand's finalized name, TheraPro.",
          },
        ],
        img: TheraPro4,
      },
      {
        key: 6,
        sectionTitle: "Final Designs",
        paragraphs: [
          {
            key: 1,
            text: "After a fresh new logo, and a semester's worth of testing and iterating, the high-fidelity prototype mockup for TheraPro was finalized. I chose a color palette of light yellows and blues, to represent two fundamental primary colors and the idea starting fresh to create a new personal journey of mental health. In combination with the cute and happy logo design, the overall brand creates a light-hearted approach to therapy, making the search process seem more digestible and exciting. The final desktop and mobile prototypes can be found below. There are three workflows available from the home screen: Searching for a therapist and booking an appointment, viewing current appointments, and instant messaging with a therapist. Click on the screen to see blue boxes appear, which indicate which buttons are clickable.",
          },
          {
            key: 2,
            text: "TheraPro Prototype",
            link: "https://www.figma.com/proto/8Pmyi4VbGVsv5xdxpbaQrp/TheraPro?page-id=267%3A3922&type=design&node-id=267-4139&viewport=810%2C573%2C0.06&scaling=contain&starting-point-node-id=267%3A4139&show-proto-sidebar=1",
          },
        ],
      },
    ],
  },

  cgp: {
    coverImages: [
      {
        key: 1,
        img: CGP0,
      },
    ],
    title: "CoolGreenPower",
    year: "2021",
    description:
      "A responsive marketing website and built-in tool for HVAC contractors to estimate projected savings",
    tags: [
      {
        key: 1,
        tag: content.projects.tagUX,
      },
      {
        key: 2,
        tag: content.projects.tagWebDev,
      },
    ],
    tools: [
      {
        key: 1,
        icon: JSIcon,
      },
      {
        key: 2,
        icon: SquarespaceIcon,
      },
    ],
    buttons: [
      {
        key: 1,
        buttonLink: "https://www.coolgreenpower.com/",
        buttonText: "VIEW SITE",
      },
      {
        key: 2,
        buttonLink: "https://www.coolgreenpower.com/en/income-estimator",
        buttonText: "VIEW INCOME ESTIMATOR",
      },
    ],
    content: [
      {
        key: 1,
        sectionTitle: "Designing for an HVAC Industry",
        paragraphs: [
          {
            key: 1,
            text: "Employed as a Software Engineer intern for CoolGreenPower, I spent 5 months working to redesign the company's website, and to develop a new tool called the Income Estimator. The company was recently going through a brand redesign, and needed a new site to compliment a more modern brand. Additionally, the site needed several new design elements, such as filter systems, tabs, dropdowns, that required integrating Javascript plugins and custom code with Squarespace.",
          },
          {
            key: 2,
            text: "The website redesign involved starting entirely from scratch. I worked directly with the company's owner Joe Mueller to improve the site map and page flow, prioritizing making page navigation easy for any user. I took inspiration from the brand's new logo design, and worked to create a simple and friendly design theme for the site. Designed for an older audience, primarily in the field of HVAC contracting and energy services, I needed to make a site that was clear, yet still fun, to navigate through. I utilized icons throughout the site to add pops of visuals and color, as well as color and image blocks to break up different sections of the home page. On numerous pages I added tabs and dropdowns to separate information and sub-pages, and created custom JS code to integrate these features into Squarespace. On the Success Stories page, I integrated a plugin for creating a filter system. This system allows users to filter between different success stories and learn about the work that CoolGreenPower has accomplished with their product. Building the site was a great design challenge, as well as good experience for understanding the limitations of coding within Squarespace.",
          },
        ],
      },
      {
        key: 2,
        sectionTitle: "Building the Income Estimator",
        paragraphs: [
          {
            key: 1,
            text: "The most exciting and difficult challenge within my time at CoolGreenPower was developing the website's Income Estimator. This tool allows HVAC contractors to estimate their projected savings by installing COOLNOMIX®, the product that CoolGreenPower is a leading distributor for. The tool asks the user to define certain parameter values within their company's unit sales, labor and system. Based on these values, the tool calculates projected revenue over time. The Income Estimator was developed entirely by me using Javascript, and uses calculations provided by Joe.",
          },
          {
            key: 2,
            text: "This project was equally challenging in designing and developing the tool. I investigated different UI elements that could make the tool intuitive to use, and included both range sliders and number sliders to offer multiple ways for the user to enter their information. I worked to reduce the amount of information and parameters needed in the tool, and created a “verification points” section to allow the user to cross-check their company information before receiving their projected revenue. While performing the calculations in Javascript was straightforward, it was a challenge to connect them to the numerous different input points and their respective UI elements. This project was a great learning opportunity for developing a complicated tool with many different inputs and moving parts.",
          },
        ],
      },
    ],
  },
  interventions: {
    coverImages: [
      {
        key: 1,
        img: Interventions0,
      },
    ],
    title: "Interventions: Amplify",
    year: "2022",
    description:
      "A responsive website for Interventions: Amplify 2022, the annual design conference hosted by Scout",
    tags: [
      {
        key: 1,
        tag: content.projects.tagWebDev,
      },
      {
        key: 2,
        tag: content.projects.tagUX,
      },
    ],
    tools: [
      {
        key: 1,
        icon: ReactIcon,
      },
      {
        key: 2,
        icon: GatsbyIcon,
      },
      {
        key: 3,
        icon: PrismicIcon,
      },
    ],
    buttons: [
      {
        key: 1,
        buttonLink: "https://2022.interventions.design/",
        buttonText: "VIEW SITE",
      },
    ],
    content: [
      {
        key: 1,
        sectionTitle: "Learning the Development Process",
        paragraphs: [
          {
            key: 1,
            text: "Starting in Fall 2021, I was fortunate to join Scout at Northeastern University, an entirely student-led design studio. I joined the Conference team for my first year, and took part in planning, organizing, and hosting Scout's annual design conference over two semesters. As a developer, my main role involved designing and developing the conference's website, which shared important information regarding conference information, events, and speakers.",
          },
          {
            key: 2,
            text: "This project was one of my first experiences working on a development team, where I learned to work in a sprint system, participate in daily standup, and to collaborate with a talented group of designers. This project was also my first experience working on a website development project beyond website-building platforms like Wix or Squarespace. The development tech stack used React, and used Gatsby to integrate with Prismic, a content-management system.",
          },
          {
            key: 3,
            text: "Working in a team of 2-3 developers, we split the development work evenly into tickets, and I gained important skills in React, styled components, and Gatsby. I created numerous key features among the site, such as button components, callouts and entire page layouts. At the end of the semester, I topped my work off by volunteering at the conference, and helping others enjoy a great selection of design workshops and speakers. The experience I gained in this developer role helped me become Scout's Tech Director the following semester, and I am incredibly grateful for the opportunities I've gained through Scout as an organization.",
          },
        ],
      },
      {
        key: 2,
        sectionTitle: "Moodboarding",
        paragraphs: [
          {
            key: 1,
            text: "With a new conference topic every year, one of the initial steps for the entire team was to brainstorm potential theme ideas. After generating a list of themes, each member of the conference team was assigned to create a moodboard for their desired theme idea. I chose to investigate the theme “amplify”, which aimed to raise voices for underrepresented perspectives within the design community.",
          },
          {
            key: 2,
            text: "Pictured below is the moodboard I created for this assignment. We were also instructed to create a list of words we felt represented our board and our chosen theme. I chose: powerful, strong, no-bullshit, determined, proud, boss. The description I gave for my moodboard goes: “Frustration with the past and the lack of change, regardless of how loud people are. A new perspective on 2021 and beyond, to speak until people finally listen. Active and loud, while still contained and digestible.” I looked for images that I felt were loud and demanded attention, yet visually pleasing and not overwhelming. This activity was incredibly important for both connecting with the topic in our own way, and visualizing how this topic could be represented through branding and web design.",
          },
        ],
        img: Interventions1,
      },
      {
        key: 3,
        sectionTitle: "Site Mapping and Page Layout",
        paragraphs: [
          {
            key: 1,
            text: "Another significant step for me in the design process was generating the site map and low-fi wireframes for the site. As developers, our job in the first semester was to focus on creating a site that was easily navigable and broke up information in a logical way. Pictured below is an early iteration of our site map navigation, which changed over time with further deliberation with other designers on the team. After finalizing the site navigation, the next step in our process was to create lo-fi wireframes that suggested the basic structure of the site's main pages. Also pictured below are my lo-fi wireframe sketches, that were then chosen and further iterated upon by the other developers. ",
          },
          {
            key: 2,
            text: "Creating these wireframes required significant collaboration and discussion, as the final lo-fidelity versions would be sent directly to the designers on the team. From there, the designers would add color and brand elements, thus creating the final, high-fidelity versions of the site layout. After confirming the designs were solid and realistic for developers to create within the designated time frame, we immediately began our development process. After 4 weeks and many late-night working sessions, our team posted a site that was visually beautiful, fully functional, and ready to generate excitement around the conference.",
          },
        ],
        img: Interventions2,
      },
    ],
  },

  goGarden: {
    coverImages: [
      {
        key: 1,
        img: GoGarden0,
      },
    ],
    title: "GoGarden",
    year: "2022",
    description:
      " A mobile application for community garden members and visitors to learn about and track plant care",
    tags: [
      {
        key: 1,
        tag: content.projects.tagUX,
      },
      {
        key: 2,
        tag: content.projects.tagPro,
      },
      {
        key: 3,
        tag: content.projects.tagBr,
      },
    ],
    tools: [
      {
        key: 1,
        icon: FigmaIcon,
      },
    ],
    buttons: [
      {
        key: 1,
        buttonLink:
          "https://www.figma.com/proto/NOd7MS2159afIwmzONSoJg/ID2-GoGarden?page-id=101%3A465&type=design&node-id=275-1812&viewport=401%2C656%2C0.13&scaling=scale-down&starting-point-node-id=275%3A1812&show-proto-sidebar=1",
        buttonText: "VIEW PROTOTYPE",
      },
    ],
    content: [
      {
        key: 1,
        sectionTitle: "Improving the Garden Experience",
        paragraphs: [
          {
            key: 1,
            text: "Created for the course Interaction Design: Mobile, GoGarden is a semester-long concept project that creates an easy-to-use platform for locating and engaging with local community garden spaces. Focusing strictly on mobile application design, the class worked to create a platform that would improve a person's experience navigating a space. Throughout the course we identified potential users and user scenarios, studied mobile application design, and performed extensive user testing to ensure the success of our application. I truly enjoyed designing for a target audience that appreciates community garden spaces and plant care in the way that I do. I am also proud to see my growth in my app design, branding, and logo design since my previous Interaction Design course the year before.",
          },
        ],
      },
      {
        key: 2,
        sectionTitle: "Investigating Navigation Through a Space",
        paragraphs: [
          {
            key: 1,
            text: "To begin our design process, the class was instructed to document the experience of visiting and navigating different locations around Boston. I chose to visit some of my favorite spots in Boston, including the Charles River Esplanade, Farmer Horse Coffee, and the Symphony Road community garden. Our goal was to document the colors, sounds and energy of being in the space, as well as positive aspects or roadblocks of trying to navigate it.",
          },
          {
            key: 2,
            text: "After conducting my experience research, I saw the most potential in investigating community garden spaces and the experience of visiting them. For me, they've often served as a safe, low-key space to relax, read or enjoy the sun. However, often times I'd like to know more about the community, or the plants in the garden, and have no place to find this information. Or, sometimes I am just unaware of garden hours for that day, and the garden is closed when I arrive. With so much appreciation for these gardens and the community they create, I wanted to take on the challenge of designing a platform that allows the public to better engage with the garden, and for the garden members to better communicate with the public. Pictured below is my initial project sketch for GoGarden, where I identify key features of the app and triggers of when someone may want to use it.",
          },
        ],
        img: GoGarden1,
      },
      {
        key: 3,
        sectionTitle: "Storyboarding",
        paragraphs: [
          {
            key: 1,
            text: "One of my favorite steps within any design process is creating the storyboards. After brainstorming potential users and their use scenarios, I needed to consider and visualize different stories in which a person may need and benefit from GoGarden. This step is always essential for defining which key features of the app a user may engage with, based on their respective use case, and how to design the app so they can accomplish their task successfully. Pictured below is a storyboard depicting one of my original workflows, where a user wants to join their new neighborhood's community garden, and thus applies through GoGarden, learns about the plants they want to care for, and discovers her community of neighbors. ",
          },
        ],
        img: GoGarden2,
      },
      {
        key: 4,
        sectionTitle: "Lo-Fidelity Wireframes",
        paragraphs: [
          {
            key: 1,
            text: "Another essential step in my process for designing GoGarden was finalizing my primary workflows and creating lo-fidelity wireframes. After creating my storyboards, a video prototype, and benchmarking other applications, I was able to finalize the workflows I found most realistic and necessary for someone engaging with the app. The three main functions of the app are as follows: Identifying nearby gardens and specific plants that exist there, tracking plant care, and identifying plants and any issues they may have with a plant expert tool. These revised workflows focus more on engaging with the plants in a garden space, either as a visitor or a garden member. This focus was realized as a way to navigate a garden space. It values how, other than finding a garden and entering it, the most important experience someone can have with a garden is learning about the community through its plants. Pictured below are some first iteration lo-fidelity wireframes, where I established the key UI features necessary for completing the selected workflows.",
          },
        ],
        img: GoGarden3,
      },
      {
        key: 5,
        sectionTitle: "Branding Experiments",
        paragraphs: [
          {
            key: 1,
            text: "After creating initial wireframes, a very fun task in the design process was establishing a brand through colors and visual props. Pictured below are numerous versions of an opening screen design. For this exercise, I needed to consider how I wanted the app to present to a new user. I wanted the app to be friendly and welcoming just as a community garden should be, while connecting the visuals of plants and nature with an urban environment. While creating these iterations, I was able to design the visual props of sprouts, flowers and a shovel that I use throughout the application. The images are cute and friendly, with a minimalist design that add pops of visuals without cluttering the screen space.",
          },
        ],
        img: GoGarden4,
      },
      {
        key: 6,
        sectionTitle: "Logo Development",
        paragraphs: [
          {
            key: 1,
            text: "Another important step in the branding process, after deciding typography and color palette, was developing GoGarden's logo. Having completed a similar task for my previous Interaction Design project, TheraPro, I was familiar with the iterative process required to generate a successful logo design. Pictured below are my initial logo sketches before further exploration. I gravitated towards combining garden imagery with the “G” alliteration in the app's name. I discovered similarities between the shovel imagery and an arrow, and immediately drew connections between this arrow-like icon and the “go” in GoGarden.",
          },
        ],
        img: GoGarden5,
      },
      {
        key: 7,
        sectionTitle: "Iterations, Iterations, Iterations",
        paragraphs: [
          {
            key: 1,
            text: "From my logo sketches, I decided to pursue connecting the shovel imagery with an arrow, to support the movement suggested by “Go” in GoGarden. Sticking with this imagery, I hoped to add in some visual of leaves or plants to tie everything together with a natural, garden focus. As I was trying to connect many visuals together in a small format, my initial logo sketches were cluttered and looked outdated. I went through rounds and rounds of iterations, experimenting with different colors and using negative space in different ways. The key was to simplify the image as much as possible, and I felt much more satisfied once I focused on reducing the visual elements. The first image pictured below is a snapshot of the iterative process I went through during my logo development. The final logo design, and the app icon, can be seen below the iterations. I love the final version, and am very content with myself for going through the needed experiments to get there.",
          },
        ],
        img: GoGarden6,
      },
      {
        key: 8,
        sectionTitle: "Final Designs",
        paragraphs: [
          {
            key: 1,
            text: "After adding the new logo and refining the color palette, the high-fidelity mobile app prototype for GoGarden was complete. The final prototype went through rounds of user testing and feedback to ensure its features are easy to use and navigable for a novice user. I really enjoy making the PlantExpert tool available in the app, which was designed after encouragement from our professor to experiment with incorporating AR in our designs. The final mobile app prototype can be found below. After logging in or signing up, there are several workflows available from the home screen: Viewing current plant tasks, using the PlantExpert tool to identify plants or diagnose issues, view plot and garden information, and more. The first flow shows the sign up or login flow, the second shows the existing member home screen, and the third flow shows the novice user home screen. Click on the screen to see blue boxes appear, which indicate which buttons are clickable.",
          },
          {
            key: 2,
            text: "GoGarden Prototype",
            link: "https://www.figma.com/proto/NOd7MS2159afIwmzONSoJg/ID2-GoGarden?page-id=101%3A465&type=design&node-id=275-1812&viewport=401%2C656%2C0.13&scaling=scale-down&starting-point-node-id=275%3A1812&show-proto-sidebar=1",
          },
        ],
      },
    ],
  },
};

export default projectPages;
