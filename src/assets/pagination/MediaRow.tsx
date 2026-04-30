import React, { useState, useEffect, useCallback } from "react";
import type { ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import HorizontalScroll from "./HorizontalScroll";
import styles from "./MediaRow.module.css";

interface MediaRowProps {
  title: string;
  itemCount: number;
  children: ReactNode; 
}

function MediaRow({ title, itemCount, children }: MediaRowProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
  loop: false,
  align: 'start',
  skipSnaps: false,
  dragFree: true, 
  containScroll: 'trimSnaps'
});
  const [activeIndex, setActiveIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          
          {React.Children.map(children, (child) => (
            <div className={styles.slide}>{child}</div>
          ))}
        </div>
      </div>

      <HorizontalScroll total={itemCount} activeIndex={activeIndex} />
    </section>
  );
}

export default MediaRow;