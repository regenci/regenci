export const resumeTemplateConfig = {
  component: "div",
  id: "templateWrapper",
  className: "w-full h-full relative flex",
  children: [
    {
      // Left side of the templates started here
      component: "div",
      id: "template__side--left",
      className: "w-1/4 bg-black h-full relative py-8 flex flex-col justify-end overflow-hidden px-8",
      styles: [
        {
          name: "maxWidth",
          value: "200px",
        },
        {
          name: "minWidth",
          value: "150px",
        },
      ],
      children: [
        {
          component: "div",
          id: "left__side--topDiv",
          className: "absolute top-20 left-0 transform -rotate-90",
          children: [
            {
              component: "div",
              id: "firstName",
              className: "text-3xl text-white text-right tracking-wider font-medium uppercase",
              children: "abigail",
            },
            {
              component: "div",
              id: "lastName",
              className: "text-3xl text-white tracking-widest text-right font-medium uppercase",
              children: "stanford",
            },
            {
              component: "div",
              id: "job-title",
              className: "text-base sm:text-sm text-right text-gray-300 uppercase",
              children: "graphic designer",
            },
          ],
        },
        {
          component: "div",
          id: "left__side--bottomDiv",
          className: "flex flex-col justify-start",
          children: [
            {
              component: "div",
              id: "bottomDiv__header--contact",
              className: "text-xl text-white w-full font-medium uppercase pb-4",
              children: "contact",
            },
            {
              component: "div",
              id: "bottomDiv__details",
              className: "flex flex-col items-start w-full",
              children: [
                {
                  component: "div",
                  id: "phone-number",
                  className: "text-xxs text-gray-300 w-full break-all",
                  children: "(04) 290 2093",
                },
                {
                  component: "div",
                  id: "email-address",
                  className: "text-xxs text-gray-300 w-full break-all",
                  children: "abigailstanford@email.com",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      // right side of the template started here
      component: "div",
      id: "template__side--right",
      className: "w-3/4 py-10 px-5 flex flex-col bg-white overflow-hidden",
      styles: [
        {
          name: "minWidth",
          value: "300px",
        },
        {
          name: "maxWidth",
          value: "700px",
        },
      ],
      children: [
        {
          component: "div",
          id: "about__me--div",
          className: "flex flex-col w-full",
          children: [
            {
              component: "div",
              id: "about__me--heading",
              className: "uppercase text-lg tracking-wider font-semibold text-black mb-2",
              children: "about me",
            },
            {
              component: "div",
              id: "professional-summary",
              className: "text-xs text-wide text-gray-500",
              children:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt et earum vitae, hic eum quidem a eos praesentium magnam suscipit! Recusandae, cupiditate obcaecati maiores ea asperiores doloribus aperiam autem repellat!",
            },
          ],
        },
        {
          component: "div",
          id: "education--div",
          className: "flex flex-col w-full overflow-hidden",
          styles: [
            { name: "minHeight", value: "150px" },
            { name: "maxHeight", value: "150px" },
          ],
          children: [
            {
              component: "div",
              id: "education--heading",
              className: "uppercase text-lg tracking-wider font-semibold text-black mt-4",
              children: "education",
            },
            {
              component: "div",
              id: "education--component",
              className: "w-full flex flex-col  my-2",
              children: [
                {
                  component: "div",
                  id: "institution-name",
                  className: "font-medium text-gray-800 text-xs uppercase w-full ",
                  children: "berkshire university",
                },
                {
                  component: "div",
                  id: "institution--details",
                  className: "flex text-gray-500 text-xs",
                  children: [
                    {
                      component: "div",
                      id: "institution-start-date",
                      className: "",
                      children: "2019",
                    },
                    {
                      component: "div",
                      id: "institution-date-separator",
                      className: "px-1",
                      children: "-",
                    },
                    {
                      component: "div",
                      id: "institution-end-date",
                      className: "",
                      children: "2023",
                    },
                    {
                      component: "div",
                      id: "institution-vertical-separator",
                      className: "px-1",
                      children: "|",
                    },
                    {
                      component: "div",
                      id: "institution-calification",
                      className: "",
                      children: "AB Multimedia Arts",
                    },
                  ],
                },
              ],
            },
            {
              component: "div",
              id: "education--component",
              className: "w-full flex flex-col  my-2",
              children: [
                {
                  component: "div",
                  id: "institution-name",
                  className: "font-medium text-gray-800 text-xs uppercase w-full ",
                  children: "berkshire university",
                },
                {
                  component: "div",
                  id: "institution--details",
                  className: "flex text-gray-500 text-xs",
                  children: [
                    {
                      component: "div",
                      id: "institution-start-date",
                      className: "",
                      children: "2023",
                    },
                    {
                      component: "div",
                      id: "institution-date-separator",
                      className: "px-1",
                      children: "-",
                    },
                    {
                      component: "div",
                      id: "institution-end-date",
                      className: "",
                      children: "2024",
                    },
                    {
                      component: "div",
                      id: "institution-vertical-separator",
                      className: "px-1",
                      children: "|",
                    },
                    {
                      component: "div",
                      id: "institution-calification",
                      className: "",
                      children: "Certificate Course in Graphic Design and Illustration",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          component: "div",
          id: "experience--div",
          className: "flex flex-col w-full overflow-hidden",
          styles: [
            { name: "minHeight", value: "150px" },
            { name: "maxHeight", value: "400px" },
          ],
          children: [
            {
              component: "div",
              id: "experience--heading",
              className: "uppercase text-lg tracking-wider font-semibold text-black",
              children: "experience",
            },
            {
              component: "div",
              id: "experience__component",
              className: "w-full flex my-1",
              children: [
                {
                  component: "div",
                  id: "experience__component--date",
                  className: "w-12 flex flex-start text-xs text-black font-normal mr-2",
                  children: [
                    {
                      component: "div",
                      id: "experience-start-date",
                      className: "",
                      children: "2017",
                    },
                  ],
                },
                {
                  component: "div",
                  id: "experienct__component--details",
                  className: "flex-1 flex flex-col",
                  children: [
                    {
                      component: "div",
                      id: "experience-company",
                      className: "tracking-wide uppercase font-medium text-gray-800",
                      children: "letterpress design studios",
                    },
                    {
                      component: "div",
                      id: "experience-job",
                      className: "tracking-wide uppercase font-normal text-gray-500 text-xs",
                      children: "junior graphic designer",
                    },
                    {
                      component: "ul",
                      id: "experience-description-list",
                      className: "list-disc text-xs text-gray-500 pl-5",
                      children: [
                        {
                          component: "li",
                          id: "experience-description-item",
                          className: "",
                          children: "Tasked to make graphics for online layouts.",
                        },
                        {
                          component: "li",
                          id: "experience-description-item",
                          className: "",
                          children: "Edited editorial photos for clients and magazines, and social media posts.",
                        },
                        {
                          component: "li",
                          id: "experience-description-item",
                          className: "",
                          children: "Organization of files.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              component: "div",
              id: "experience__component",
              className: "w-full flex my-1",
              children: [
                {
                  component: "div",
                  id: "experience__component--date",
                  className: "w-12 flex flex-start text-xs text-black font-normal mr-2",
                  children: [
                    {
                      component: "div",
                      id: "experience-start-date",
                      className: "",
                      children: "2020",
                    },
                  ],
                },
                {
                  component: "div",
                  id: "experienct__component--details",
                  className: "flex-1 flex flex-col",
                  children: [
                    {
                      component: "div",
                      id: "experience-company",
                      className: "tracking-wide uppercase font-medium text-gray-800",
                      children: "letterpress design studios",
                    },
                    {
                      component: "div",
                      id: "experience-job",
                      className: "tracking-wide uppercase font-normal text-gray-500 text-xs",
                      children: "junior graphic designer",
                    },
                    {
                      component: "ul",
                      id: "experience-description-list",
                      className: "list-disc text-xs text-gray-500 pl-5",
                      children: [
                        {
                          component: "li",
                          id: "experience-description-item",
                          className: "",
                          children: "Tasked to make graphics for online layouts.",
                        },
                        {
                          component: "li",
                          id: "experience-description-item",
                          className: "",
                          children: "Edited editorial photos for clients and magazines, and social media posts.",
                        },
                        {
                          component: "li",
                          id: "experience-description-item",
                          className: "",
                          children: "Organization of files.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              component: "div",
              id: "experience__component",
              className: "w-full flex my-1",
              children: [
                {
                  component: "div",
                  id: "experience__component--date",
                  className: "w-12 flex flex-start text-xs text-black font-normal mr-2",
                  children: [
                    {
                      component: "div",
                      id: "experience-start-date",
                      className: "",
                      children: "2021",
                    },
                  ],
                },
                {
                  component: "div",
                  id: "experienct__component--details",
                  className: "flex-1 flex flex-col",
                  children: [
                    {
                      component: "div",
                      id: "experience-company",
                      className: "tracking-wide uppercase font-medium text-gray-800",
                      children: "letterpress design studios",
                    },
                    {
                      component: "div",
                      id: "experience-job",
                      className: "tracking-wide uppercase font-normal text-gray-500 text-xs",
                      children: "junior graphic designer",
                    },
                    {
                      component: "ul",
                      id: "experience-description-list",
                      className: "list-disc text-xs text-gray-500 pl-5",
                      children: [
                        {
                          component: "li",
                          id: "experience-description-item",
                          className: "",
                          children: "Tasked to make graphics for online layouts.",
                        },
                        {
                          component: "li",
                          id: "experience-description-item",
                          className: "",
                          children: "Edited editorial photos for clients and magazines, and social media posts.",
                        },
                        {
                          component: "li",
                          id: "experience-description-item",
                          className: "",
                          children: "Organization of files.",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
