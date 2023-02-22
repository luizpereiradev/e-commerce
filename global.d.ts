import React from "react";
declare module "react" {
  // augment CSSProperties here
  interface CSSProperties {
    "--value"?: string | number;
    "--swiper-navigation-color": string;
    "--swiper-pagination-color": string;
  }
}