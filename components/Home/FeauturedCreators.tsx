"use client";
import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarBadge, AvatarImage } from "../ui/avatar";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import {
  FaBehance,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { BsThreeDots, BsTwitterX } from "react-icons/bs";
import { BiRightTopArrowCircle } from "react-icons/bi";
import { useMediaQuery } from "react-responsive";

function FeauturedCreators() {
  const Creators = [
    {
      fullName: "Avery Parker",
      tag: "@avery.creates",
      avatarImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTlBstYuRAWozQgHxneX73-Mckj9rf3XsOw&s",
      coverImage:
        "https://static.semrush.com/blog/uploads/media/02/4e/024e31de6f4f7343d4a0107f5f07fe24/d9bd4c018a9ec7966bec7681198a521c/AD_4nXcHmejNPWmXfUuVGvFR8QMiOYGyZh2sRf1AFPL9p2LkDzaeQvIkiqHpd5QzFmbCIizHD3Yzn_CDX-y1iiCJ8aFNsJjMDBpx1Z-GIuhjTmGK6xxkKzix-gbZtmKNrB32EhQkZPH2.jpeg",
      socialMedia: [
        {
          platform: "Instagram",
          icon: FaInstagram,
          link: "https://instagram.com/avery.creates",
        },
        {
          platform: "Twitter",
          icon: BsTwitterX,
          link: "https://twitter.com/avery_creates",
        },
        {
          platform: "YouTube",
          icon: FaYoutube,
          link: "https://youtube.com/@avery.creates",
        },
      ],
      description:
        "Avery is a digital artist and 3D mockup creator known for vibrant visuals and tutorial videos that help other creatives improve their workflow.",
      infos: [
        {
          label: "Followers",
          value: "154K",
        },
        {
          label: "Following",
          value: "282",
        },
        {
          label: "Items Listed",
          value: "78",
        },
      ],
      projects: [
        "https://img-c.udemycdn.com/course/750x422/5668564_15dd.jpg",
        "https://cdn.artec3d.com/styles/734/s3/content-hub-images/articles/content/image11.jpg?VersionId=LBmpJBPPaZCK6XBpcOQsvxHybvrHfLBR&itok=WE2ObHV9",
        "https://images-rsg.storage.googleapis.com/wp-content/uploads/2024/07/Specific-Sculpting-Tools-for-Organic-Modeling-1024x576.jpg",
      ],
    },
    {
      fullName: "Kai Hernandez",
      tag: "@kai.digital",
      avatarImage:
        "https://media.licdn.com/dms/image/v2/C4E03AQEg3HEufdpy2A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516866146999?e=2147483647&v=beta&t=idP7XjcpdmZCN-DQ2sQ7lmP5-BQ0rrybdJZpPXpa-Vc",
      coverImage:
        "https://i.redd.it/cool-ai-art-i-made-v0-mq87b53lijwd1.jpg?width=1024&format=pjpg&auto=webp&s=6f09780315f7597f52ec93946e41cc9515093d3c",
      socialMedia: [
        {
          platform: "TikTok",
          icon: FaTiktok,
          link: "https://tiktok.com/@kai.digital",
        },
        {
          platform: "Behance",
          icon: FaBehance,
          link: "https://behance.net/kai-digital",
        },
        {
          platform: "LinkedIn",
          icon: FaLinkedin,
          link: "https://linkedin.com/in/kaidigital",
        },
      ],
      description:
        "Kai is a UX/UI designer and digital product creator whose clean, minimalist designs have been featured in online design festivals and weekly showcases.",
      infos: [
        {
          label: "Followers",
          value: "89K",
        },
        {
          label: "Following",
          value: "175",
        },
        {
          label: "Items Listed",
          value: "45",
        },
      ],
      projects: [
        "https://cdn.prod.website-files.com/675fdf42c6f25ae5aa098c06/67c9e31e4f9a931393c90a29_DigitalPainting101_course_thumb02.webp",
        "https://www.cgspectrum.com/hubfs/all-courses-featured-image-01.jpg",
        "https://www.ed2go.com/common/images/1/16882/graphic-design-school-digital-arts.jpg",
      ],
    },
  ];
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="w-full h-[200vh] lg:h-[110vh] flex items-center justify-center font-cal-sans">
      <div className="w-[85%] h-[95%] flex flex-col items-center gap-10 ">
        <div className="w-65 h-12 border-2 border-[#8CFF12] rounded-full flex p-1">
          <h1 className="w-[90%] flex items-center justify-center bg-gray-300/30 rounded-full">
            Feautured Creators
          </h1>
          <h2 className="w-[20%] h-full flex items-center justify-center">
            05
          </h2>
        </div>

        <div className="w-full flex lg:flex-row flex-col gap-4 lg:h-[60%]">
          {Creators.map((creator, idx) => (
            <Card className="lg:w-1/2 p-0" key={idx}>
              <CardContent className="flex h-full px-0">
                <div className="w-[30%] h-full">
                  <img
                    src={creator.coverImage}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="w-[70%] flex flex-col p-10 gap-4">
                  <h1 className="text-4xl font-bold">{creator.fullName}</h1>
                  <div className="w-full flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={creator.avatarImage} />
                      <AvatarBadge>
                        <Check className="text-black" />
                      </AvatarBadge>
                    </Avatar>
                    <h2>{creator.tag}</h2>
                  </div>
                  <div className="w-full flex items-center gap-3">
                    {creator.socialMedia.map((app, idx2) => (
                      <Button className="" variant={"outline"} key={idx2}>
                        <Link className="cursor-pointer" href={app.link}>
                          <app.icon />
                        </Link>
                      </Button>
                    ))}
                  </div>
                  <p className="font-thin text-gray-400">
                    {creator.description}
                  </p>
                  <div className="w-full flex items-center gap-2">
                    {creator.infos.map((project, index) => (
                      <div
                        key={index}
                        className="w-[30%] flex flex-col justify-center"
                      >
                        <h1 className="text-2xl font-bold">{project.value}</h1>
                        <h2 className="text-sm text-gray-500">
                          {project.label}
                        </h2>
                      </div>
                    ))}
                  </div>
                  <div className="w-full gap-2 py-4 flex h-[30%] items-center">
                    {creator.projects.map((prjct, idx) => (
                      <>
                        <div
                          className="w-[30%] h-[90%] border rounded-xl"
                          key={idx}
                        >
                          <img
                            src={prjct}
                            alt="prjct"
                            className="w-full h-full object-cover rounded-xl"
                          />
                        </div>
                      </>
                    ))}
                    <Button variant={"outline"}>
                      <BsThreeDots />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {!isMobile ? (
          <div className="w-full h-[30%] lg:h-[35%] rounded-xl flex items-center relative overflow-hidden">
            <div
              className="w-full h-full absolute rounded-xl"
              style={{
                backgroundImage: 'url("/herobg.png")',
              }}
            ></div>
            <div className="w-full h-full bg-black/50 absolute rounded-xl" />
            <img src="./S_Icon.png" className="absolute -top-90 -left-60" />
            <div className="w-full flex lg:flex-row flex-col px-10 z-5 text-white h-full">
              <div className="w-1/2 h-full flex flex-col justify-center">
                <h1 className="lg:text-xl text-sm font-bold text-white">
                  COME AND JOIN THEM!
                </h1>
                <h3 className="text-3xl lg:text-6xl">Become a Creator!</h3>
              </div>
              <div className="w-1/2 h-full flex items-center justify-end">
                <Link
                  href={"/signup"}
                  className="px-2 py-3 border-2 border-[#8CFF12] flex items-center gap-2"
                >
                  Start Selling <BiRightTopArrowCircle size={25} />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full rounded-xl border h-[20%] relative flex flex-col items-center justify-center text-white overflow-hidden">
            <div
              className="w-full h-full absolute rounded-xl"
              style={{
                backgroundImage: 'url("/herobg.png")',
              }}
            ></div>
            <div className="flex flex-col w-[90%] h-[90%] z-5 items-center p-5">
              <h1 className="lg:text-xl text-sm font-bold text-white z-2">
                COME AND JOIN THEM!
              </h1>
              <h3 className="text-3xl lg:text-6xl z-2">Become a Creator!</h3>
              <img src="./S_Icon.png" className="absolute opacity-50" alt="" />
              <Link
                href={"/signup"}
                className="px-2 py-3 border-2 border-[#8CFF12] flex items-center gap-2 absolute bottom-5"
              >
                Start Selling <BiRightTopArrowCircle size={25} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FeauturedCreators;

const StartSellingCard = () => {
  return <div className=""></div>;
};
