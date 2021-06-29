import media1 from "../public/1.webp"
import media2 from "../public/2.webp"
import media3 from "../public/3.jpg"
import media4 from "../public/4.jpg"
import media5 from "../public/5.webp"
import media6 from "../public/6.jpg"
import media7 from "../public/7.webp"
import media8 from "../public/8.jpg"
import media9 from "../public/9.webp"
import media10 from "../public/10.jpg"
import media11 from "../public/11.jpg"


export const media = [media1, media2, media3, media4, media5, media6, media7, media8, media9, media10, media11];
export const mediaByIndex = index => media[index % media.length];