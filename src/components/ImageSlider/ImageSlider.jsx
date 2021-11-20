import { useState } from "react";
import { Image } from "../Image/Image";
import { SlideMediaThumbs, SliderMediaContainer, SliderWrapper, ThumbCard } from "./ImageSlider.styles";

export const ImageSlider = ({ images = [] }) => {
  const [selected, setSelected] = useState(1);

  if (images.length === 0) {
    return (
      <p>no images.</p>
    );
  }
  return (
    <SliderWrapper>
      <SliderMediaContainer>
        <Image src={images[selected].image} alt={`Screenshot ${selected + 1}`} />
      </SliderMediaContainer>
      <SlideMediaThumbs>
        {images.map((thumb, index) => (
          <ThumbCard key={thumb.id} isSelected={index === selected} onClick={() => setSelected(index)}>
            <Image src={thumb.image} alt={`Screenshot ${index + 1}`} />
          </ThumbCard>
        ))}
      </SlideMediaThumbs>
    </SliderWrapper>
  );
};
