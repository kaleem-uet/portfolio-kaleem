export const navItems = [
  { name: "About", link: "#about" },
  {
    name: "Resume",
    link: "https://drive.google.com/file/d/1odW0zvXh1nwtTFedroqzTRJDw-FRKD4F/view?usp=drive_link",
  },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },

  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I prioritize open communication with my clients for the best quality results",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: " Flexibility is my promise ",
    description: "",
    className:
      "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[40vh] select-none",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Resume",
    description: "Are you hiring? Check out ",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 flex",
    imgClassName: "",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Clean Code and Modern Design",
    description: "Passionate about transforming ideas into reality.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Algozen.io",
    des: "A platform for the trader to create create a trading algorithm by drag and drop.",
    img: "/algo.png",
    iconLists: [
      "/science.png",
      "/tail.svg",
      "/js.svg",
      "/github.png",
      "/git.png",
      "/vs-code.png",
    ],
    link: "https://dev.algozen.io/",
  },
  {
    id: 2,
    title: "Archiwiz Client Portal",
    des: "The Archiwiz Portal offers a seamless, collaborative space for architects, designers, and clients. It simplifies access to shared architectural files, streamlining design management and feedback.",
    img: "/portal.png",
    iconLists: [
      "/science.png",
      "/mui.svg",
      "/supabase.png",
      "/mui.svg",
      "/github.png",
      "/git.png",
      "/vs-code.png",
    ],
    link: "https://portal.archiwiz.com/",
  },
  {
    id: 3,
    title: "CIMS Tire Registration",
    des: "Using CIMS All-Brand E-Tire Registration service to register tires ensures that every tire you sell can be registered immediately and your tire purchasers can be notified in the event of a safety related recall.",
    img: "/cims.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://electronictireregistration.com/Account/Login?ReturnUrl=%2F",
  },

  {
    id: 4,
    title: "Safe Solutions",
    des: "Portfolio website for Safe Solutions, to represent their work and services. The website is built using react.js, Tailwind CSS, Node js for the backend.",
    img: "/safe.png",
    iconLists: ["/science.png", "/tail.svg", "/supabase.png", "/mui.svg"],
    link: "https://safesolutionsconsultants.com/",
  },
  {
    id: 5,
    title: "Archiwiz",
    des: "A portfolio website for Archiwiz, to represent their work and services. The website is built using Next.js, Tailwind CSS.",
    img: "/archiwiz.png",
    iconLists: ["/science.png", "/tail.svg", "/supabase.png", "/mui.svg"],
    link: "https://archiwiz.com/",
  },
  {
    id: 6,
    title: "BitCoder Labs",
    des: "A portfolio website for BitCoder Labs, to represent their work and services. The website is built using react.js,MUI.",
    img: "/bcl.png",
    iconLists: ["/science.png", "/tail.svg", "/supabase.png", "/mui.svg"],
    link: "https://bitcoderlabs.com/",
  },
  {
    id: 6,
    title: "NSL",
    des: "Nova sports league is a sports management platform that allows users to create and manage their own sports leagues, tournaments, and events. It provides features such as team registration, scheduling, and live scoring.",
    img: "/nsl.png",
    iconLists: ["/science.png", "/tail.svg", "/supabase.png", "/mui.svg"],
    link: "",
  },
  {
    id: 7,
    title: "ETUDIER EN ROUMANIE",
    des: "A platform for students to find universities in Romania, apply for scholarships, and get information about the education system in Romania. The website is built using Next.js, Tailwind CSS, Node js for the backend.",
    img: "/edt.png",
    iconLists: ["/science.png", "/tail.svg", "/supabase.png", "/mui.svg"],
    link: "https://etudier-en-roumanie.vercel.app/en",
  },
  {
    id: 8,
    title: "Multi theme Dashboard",
    des: "Multi theme dashboard is a web application that allows users to switch between different themes and layouts. It is built using Next.js, Tailwind CSS, and MUI.",
    img: "/dash.png",
    iconLists: ["/science.png", "/tail.svg", "/supabase.png", "/mui.svg"],
    link: "",
  },
  {
    id: 9,
    title: "E commerce Dashboard",
    des: "E commerce dashboard is a web application that allows users to manage their e commerce store. It provides features such as product management, order management, and customer management.",
    img: "/drivestay.png",
    iconLists: ["/science.png", "/tail.svg", "/supabase.png", "/mui.svg"],
    link: "",
  },
  {
    id: 10,
    title: "Law GPT",
    des: "A GPT-3 powered web application that generates legal documents based on user input. The application is built using Ruby on Rails and Tailwind CSS.",
    img: "/law.png",
    iconLists: ["/science.png", "/tail.svg", "/supabase.png", "/mui.svg"],
    link: "https://law-gpt-ruby.vercel.app/",
  },
  {
    id: 11,
    title: "Poha",
    des: "A GPT-3 powered web application that generates legal documents based on user input. The application is built using Ruby on Rails and Tailwind CSS.",
    img: "/elv.png",
    iconLists: ["/science.png", "/tail.svg", "/supabase.png", "/mui.svg"],
    link: "https://poha-newdesign123.vercel.app/",
  },

  {
    id: 12,
    title: "Car App",
    des: "A car rental web application that allows users to search and book cars for rent. The application is built using Next.js, Tailwind CSS, and MUI.",
    img: "/car-rent.png",
    iconLists: ["/science.png", "/tail.svg", "/supabase.png", "/mui.svg"],
    link: "https://car-app-next.vercel.app/",
  },
  {
    id: 13,
    title: "Three js",
    des: "A three js practice project",
    img: "/three.png",
    iconLists: ["/science.png", "/tail.svg", "/supabase.png", "/mui.svg"],
    link: "https://car-app-next.vercel.app/",
  },
  {
    id: 14,
    title: "Solar system",
    des: "A solar system design in three js ",
    img: "/solar.png",
    iconLists: ["/science.png", "/tail.svg", "/supabase.png", "/mui.svg"],
    link: "https://solar-system-psi-ten.vercel.app/",
  },
  {
    id: 15,
    title: "School layal design",
    des: "A School Portfolio website ",
    img: "/school.png",
    iconLists: ["/science.png", "/tail.svg", "/supabase.png", "/mui.svg"],
    link: "",
  },
  {
    id: 16,
    title: "Covid 19",
    des: "A Covid 19 tracker web application that provides real time data on Covid 19 cases, deaths, and recoveries. The application is built using Next.js, Tailwind CSS, and MUI.",
    img: "/covid19.png",
    iconLists: ["/science.png", "/tail.svg", "/supabase.png", "/mui.svg"],
    link: "https://covid-19-tracker-seven-sigma.vercel.app/",
  },
  {
    id: 17,
    title: "Eduui ",
    des: "A platform for a student to study online theme ",
    img: "/eduvi.png",
    iconLists: ["/science.png", "/tail.svg", "/supabase.png", "/mui.svg"],
    link: "https://eduvi-zeta.vercel.app/",
  },
  {
    id: 18,
    title: "Hekto ",
    des: "An E-commerce platform for a client to sell his products online. The website is built using react.js,MUI, Node js for the backend.",
    img: "/hekto.png",
    iconLists: ["/science.png", "/tail.svg", "/supabase.png", "/mui.svg"],
    link: "https://hekto-wheat.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Kaleem was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Kaleem's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Kaleem is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Kaleem was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Kaleem's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Kaleem is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Kaleem was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Kaleem's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Kaleem is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Kaleem was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Kaleem's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Kaleem is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Kaleem was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Kaleem's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Kaleem is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "Fiver",
    img: "/fiverr.svg",
    nameImg: "/fiverr.svg",
  },
  {
    id: 2,
    name: "",
    img: "/upwork.svg",
    nameImg: "/upwork.svg",
  },
  {
    id: 3,
    name: "LinkedIn",
    img: "/linkedin.svg",
    nameImg: "/linkedin.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "MERN Stack Developer - Safe Solutions Consultants",
    desc: "Developed scalable web and mobile applications using React.js, Next.js, Node.js, and React Native. Designed RESTful APIs, implemented SSR/SSG, authentication, and integrated third-party APIs.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Developer - Algozen.io LLC",
    desc: "Worked remotely on a cutting-edge trading platform. Built UI components and data visualizations to support trading strategies using advanced technical indicators.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },

  {
    id: 3,
    title: "Frontend Developer - BitCoderLabs Pvt Ltd",
    desc: "Integrated React.js into an existing e-commerce platform, improving load speeds and mobile conversions. Delivered multiple CMS and e-commerce frontends with performance optimization.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Freelance Projects",
    desc: "Worked on various freelance projects,including sports management platforms,crm,  e-commerce websites, and portfolio sites. Developed responsive designs and implemented user-friendly interfaces.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    href: "https://github.com/kaleem-uet",
  },
  {
    id: 2,
    img: "/twit.svg",
    href: "",
  },
  {
    id: 3,
    img: "/link.svg",
    href: "https://www.linkedin.com/in/kaleemullahkhanreactjs/",
  },
  {
    id: 4,
    img: "/stack-overflow.svg",
    href: "https://stackoverflow.com/users/16239947/kaleem-ullah-khan",
  },
  {
    id: 6,
    img: "/whatsapp.svg",
    href: "https://wa.me/923181932559",
  },
];
