import type { NextPage } from "next";
import { ISkills } from "../typings";
import { Skill } from "./Skill";
import React from "react";
interface ISKillsProps {
  skills: ISkills[];
}

export const Skills: NextPage<ISKillsProps> = ({ skills }) => {
  const languages = skills?.filter(skill => skill?.fieldType?.toLowerCase()=== "languages" && skill?.proficient == true);
  const familiar = skills?.filter(skill => skill?.proficient === false);

  return (
    <>
        <div className="box">
            <h1 className="skills_heading">Games</h1>
            <div className="contact_email">
                <p >Gimana sudah paham materinya? yuk coba games 🎮 berikut :</p>
            </div>
            <div className="skills_box">
                    <iframe className="skills_box_container_row_game" src="https://scratch.mit.edu/projects/782492483/embed" width="485" height="402" frameBorder="0" scrolling="no" allowFullScreen></iframe>
            </div>
            <div className="skills_email2">
                <p>Jadi Array adalah sekumpulan variabel yang memiliki tipe data yang sama dan dinyatakan dengan nama yang sama. Pada game Arrarayuk, pemain akan diminta untuk membuat array-nya sendiri. Tujuannya adalah agar pemain dapat mengidentifikasi hingga menyimpulkan konsep dari penggunaan array untuk menyimpan data di memori dengan baik dan benar secara konstruktif melalui pengalaman bermain (benar dan salah) berdasarkan definisi dari array itu sendiri.</p>
            </div>
            <div className="contact_email">
                <p >Selanjutnya ada games implementasi array dua dimensi 🎮 berikut :</p>
            </div>
            <div className="skills_box">
                <iframe className="skills_box_container_row_game" src="https://arraypuzzle.vercel.app/" width="855" height="855" frameBorder="0" scrolling="no" allowFullScreen></iframe>
            </div>
        </div>
    </>
  );
};