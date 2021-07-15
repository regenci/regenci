import React from "react";
import { motion } from "framer-motion";
import { MotionLayoutComponent } from "@components/common";
import { templateRenderer } from "@components/templates/renderer";
import { resumeTemplateConfig } from "@components/builder/resume-template-config";
import { TWBuilderPreviewContainerComponent } from "@components/common/Layout/layout-tw-styled";
import { EducationDrawer, ExperienceDrawer, LanguagesDrawer, PersonalDrawer, ReferrencesDrawer, SkillsDrawer, TemplatesDrawer } from "@components/builder/drawers";

export default function Builder() {
  // const handleSidebarMenuClicked = (value: string) => {
  //   if (value === "adjust") setVisibleAdjust(true);
  // };
  // const dasd = [1, 2, 3, 4];
  // const customContent = dasd.map(
  //   (i) => `
  //           <div id="r-t-employment-container">
  //             <span id="r-t-employment-job"> Programmer </span> at
  //             <span id="r-t-employment-employer">Facebook Inc.</span>
  //             <div class="time">
  //               <span id="r-t-employment-start-date">2017</span> -
  //               <span id="r-t-employment-end-date">2018</span> ,
  //               <span id="r-t-employment-city">Washington</span>
  //             </div>
  //             <div id="r-t-employment-description">
  //               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
  //               commodo ligula eget dolor. Aenean massa. Cum sociis natoque
  //               penatibus et magnis dis parturient montes, nascetur ridiculus
  //               mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
  //               quis, sem.
  //             </div>
  //           </div>`
  // );
  // React.useEffect(() => {
  //   const iframe = document.getElementById("iframe") as any;
  //   if (iframe)
  //     iframe.contentDocument.body.querySelector(".employment")!.innerHTML =
  //       customContent;
  // }, []);
  const MotionPreviewContainer = motion(TWBuilderPreviewContainerComponent);
  // const variants = {
  //   initial: {
  //     y: "-100%",
  //     transition: {
  //       delay: 0,
  //       duration: 0.6,
  //     },
  //   },
  //   animate: {
  //     y: 0,
  //     transition: {
  //       delay: 0,
  //       duration: 0.6,
  //     },
  //   },
  //   exit: {
  //     y: "100%",
  //     transition: {
  //       delay: 1,
  //       duration: 0.6,
  //     },
  //   },
  // };
  const previewVariants = {
    initial: {
      y: 2000,
      opacity: 0,
      transition: {
        duration: 0.6,
        delay: 0.5,
      },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
      },
    },
    exit: {
      y: 2000,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
      },
    },
  };
  return (
    <>
      <SkillsDrawer />
      <PersonalDrawer />
      <LanguagesDrawer />
      <EducationDrawer />
      <TemplatesDrawer />
      <ExperienceDrawer />
      <ReferrencesDrawer />
      <MotionLayoutComponent title="App | Resume Builder">
        <MotionPreviewContainer variants={previewVariants} className="builder-preview-container">
          {templateRenderer(resumeTemplateConfig)}
        </MotionPreviewContainer>
      </MotionLayoutComponent>
    </>
  );
}
