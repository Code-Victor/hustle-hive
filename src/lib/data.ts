// Gallery Images
import GalleryImage1 from "@/assets/gallery/1.png";
import GalleryImage2 from "@/assets/gallery/2.png";
import GalleryImage3 from "@/assets/gallery/3.png";
import GalleryImage4 from "@/assets/gallery/4.png";
import GalleryImage5 from "@/assets/gallery/5.png";
import GalleryImage6 from "@/assets/gallery/6.png";
import GalleryImage7 from "@/assets/gallery/7.png";
import GalleryImage8 from "@/assets/gallery/8.png";
import GalleryImage9 from "@/assets/gallery/9.png";
import GalleryImage10 from "@/assets/gallery/10.png";
import GalleryImage11 from "@/assets/gallery/11.png";
import GalleryImage12 from "@/assets/gallery/12.png";
import GalleryImage13 from "@/assets/gallery/13.png";
import GalleryImage14 from "@/assets/gallery/14.png";
import GalleryImage15 from "@/assets/gallery/15.png";
import GalleryImage16 from "@/assets/gallery/16.png";
import GalleryImage17 from "@/assets/gallery/17.png";
import GalleryImage18 from "@/assets/gallery/18.png";
// Team Images
import Samantha from "@/assets/team/samantha.png";
import Dominion from "@/assets/team/dominion.png";
import Manuelle from "@/assets/team/manuelle.png";
import Menes from "@/assets/team/menes.png";
import Grace from "@/assets/team/grace.png";
import Victor from "@/assets/team/victor.png";

export const gallery = [
  {
    image: GalleryImage1,
    alt: "Description",
  },
  {
    image: GalleryImage2,
    alt: "Description",
  },
  {
    image: GalleryImage3,
    alt: "Description",
  },
  {
    image: GalleryImage4,
    alt: "Description",
  },
  {
    image: GalleryImage5,
    alt: "Description",
  },
  {
    image: GalleryImage6,
    alt: "Description",
  },
  {
    image: GalleryImage7,
    alt: "Description",
  },
  {
    image: GalleryImage8,
    alt: "Description",
  },
  {
    image: GalleryImage9,
    alt: "Description",
  },
  {
    image: GalleryImage10,
    alt: "Description",
  },
  {
    image: GalleryImage11,
    alt: "Description",
  },
  {
    image: GalleryImage12,
    alt: "Description",
  },
  {
    image: GalleryImage13,
    alt: "Description",
  },
  {
    image: GalleryImage14,
    alt: "Description",
  },
  {
    image: GalleryImage15,
    alt: "Description",
  },
  {
    image: GalleryImage16,
    alt: "Description",
  },
  {
    image: GalleryImage17,
    alt: "Description",
  },
  {
    image: GalleryImage18,
    alt: "Description",
  },
];

export type TeamMember = {
  image: string;
  name: string;
  role: string;
  socialLinks: {
    instagram: string;
    linkedin: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    image: Samantha,
    name: "Samantha Tchwenko",
    role: "Team Lead",
    socialLinks: {
      instagram: "https://www.instagram.com/samantha_tchwenko/",
      linkedin: "",
    },
  },
  {
    image: Dominion,
    name: "Dominion Yusuf",
    role: "Product Designer",
    socialLinks: {
      instagram: "https://www.instagram.com/samantha_tchwenko/",
      linkedin: "",
    },
  },
  {
    image: Manuelle,
    name: "Manuelle Ackun",
    role: "Visual/Content Creator",
    socialLinks: {
      instagram: "https://www.instagram.com/samantha_tchwenko/",
      linkedin: "",
    },
  },
  {
    image: Menes,
    name: "Menes Adisso",
    role: "Researcher",
    socialLinks: {
      instagram: "https://www.instagram.com/samantha_tchwenko/",
      linkedin: "",
    },
  },
  {
    image: Grace,
    name: "Grace",
    role: "Team Advisor",
    socialLinks: {
      instagram: "https://www.instagram.com/samantha_tchwenko/",
      linkedin: "",
    },
  },
  {
    image: Victor,
    name: "Victor Idowu",
    role: "Researcher II",
    socialLinks: {
      instagram: "https://www.instagram.com/samantha_tchwenko/",
      linkedin: "",
    },
  },
];
