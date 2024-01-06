import png from "../../assets/images/png.png";
import jpg from "../../assets/images/jpg.png";
import svg from "../../assets/images/svg.png";
import defaultImage from "../../assets/images/default.png";
import jpeg from "../../assets/images/jpeg.png";

export const ImageConfig: {
  png: string;
  jpg: string;
  svg: string;
  default: string;
  jpeg: string;
  "svg+xml": string;
} = {
  png,
  jpg,
  svg,
  "svg+xml": svg,
  default: defaultImage,
  jpeg,
};
