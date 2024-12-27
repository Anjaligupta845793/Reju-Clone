import { MdInsertLink } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { IoIosMusicalNote } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { BsTicketPerforated } from "react-icons/bs";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

import { PiHandsPraying } from "react-icons/pi";
import { FaCrown } from "react-icons/fa6";

export const addcontentdata = [
  {
    heading: "Link",
    cards: [
      {
        id: "1",
        icon: MdInsertLink,
        title: "External Link",
        button: "Link",
        subtitle: "Link an external website",
      },
      {
        id: "2",
        icon: GrGallery,
        title: "Media Gallery",
        button: "Link",
        subtitle: "Showcase your photos and videos",
      },
    ],
  },
  {
    heading: "Audio",
    cards: [
      {
        id: "3",
        icon: IoIosMusicalNote,
        button: "Music",
        subtitle: "Create Smart Links , Pre-Saves and Custom Pre-Saves",
        title: "Music",
      },
    ],
  },
  {
    heading: "Video",
    cards: [
      {
        id: "4",
        icon: FaYoutube,
        title: "Youtube",
        button: "YouTube",
        subtitle: "add YouTube videos",
      },
      {
        id: "5",
        icon: FaTiktok,
        title: "Tiktok",
        button: "Tiktok",
        subtitle: "add videos from a TikTok channel",
      },
    ],
  },
  {
    heading: "Product",
    cards: [
      {
        id: "6",
        icon: FiShoppingBag,
        title: "Custom Product",
        button: "Link",
        subtitle: "Link products externally",
      },
      {
        id: "7",
        icon: FaCrown,
        title: "Throne Wishlist",
        button: "Link",
        subtitle: "Link your Throne wishlist",
      },
    ],
  },
  {
    heading: "Events",
    cards: [
      {
        id: "8",
        icon: BsTicketPerforated,
        title: "Custom Event",
        button: "Events",
        subtitle: "Link an external event",
      },
      {
        id: "9",
        icon: PiHandsPraying,
        title: "BandsInTown",
        button: "Events",
        subtitle: "Add events from BandsInTown",
      },
    ],
  },
  {
    heading: "Data Capture",
    cards: [
      {
        id: "10",
        icon: SlEnvolopeLetter,
        title: "Data Capture Form",
        button: "Form",
        subtitle: "Collect fan emails and phone number",
      },
    ],
  },
];
