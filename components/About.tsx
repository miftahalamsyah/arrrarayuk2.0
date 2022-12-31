import type { NextPage } from "next";
import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";
import instagram from "../assets/instagram.webp";
import gmail from "../assets/gmail.webp";

export const About: NextPage = () => {
  return (
    <>
      <div className="about_center">
          <div className="about_center_profilePic" />
          <h1 className="about_center_name">Arrarayuk 2.0</h1>
          <p className="about_center_text">Belajar Array Online.</p>
      </div>
    </>
  );
};
