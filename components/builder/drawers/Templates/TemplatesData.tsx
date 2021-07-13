import React from "react";
import Image from "next/image";
import { slides } from "@components/common/Carousel/carousel-data";

import { TWBuilderTemplatesImageComponent, TWBuilderTemplatesSectionComponent, TWBuilderTemplatesSectionWrapperComponent } from "./templates-tw-styled";
import { Skeleton } from "antd";
import { useRouter } from "next/router";

const TemplatesData = () => {
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <TWBuilderTemplatesSectionWrapperComponent>
      <div className="text-2xl text-center mb-4 -mt-4">Switch to another template</div>
      <TWBuilderTemplatesSectionComponent>
        {loading && <Skeleton className="absolute bg-white w-full h-full z-20" />}
        {slides.map((slide, i) => (
          <TWBuilderTemplatesImageComponent key={i} className="drop-shadow-2xl" onClick={() => (id === i.toString() ? null : router.push(`/app/builder/${i}`))}>
            <Image src={slide} quality={100} alt={slide} width={200} height={300} className="rounded-md" />
          </TWBuilderTemplatesImageComponent>
        ))}
      </TWBuilderTemplatesSectionComponent>
    </TWBuilderTemplatesSectionWrapperComponent>
  );
};

export default TemplatesData;
