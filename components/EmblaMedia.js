import media1 from "../public/flag.webp"
import media5 from "../public/snow.webp"
import media3 from "../public/glacier.webp"
import media4 from "../public/rafting.webp"
import media2 from "../public/sanddunes.webp"

export const media = [media1, media2, media3, media4, media5];
export const mediaByIndex = index => media[index % media.length];