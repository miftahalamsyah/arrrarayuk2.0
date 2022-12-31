import type { NextPage } from "next";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import Gmail from "../assets/gmail.webp";
import { Theme } from "../typings";

interface IFormValues {
  name: string;
  email: string;
  message: string;
}

interface IFormErrorValues {
  name: boolean;
  email: boolean;
  message: boolean;
}

interface IContactProps {
  theme: Theme;
}

export const Contact: NextPage<IContactProps> = ({ theme }) => {
  const [values, setValues] = useState<IFormValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<IFormValues>({ name: "", email: "", message: "" });
  const [errorsFlag, setErrorsFlag] = useState<IFormErrorValues>({
    name: false,
    email: false,
    message: false,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const objFlag = { name: false, email: false, message: false };
    const obj = { name: "", email: "", message: "" };
    const lettersregex = /^[a-zA-Z ]*$/;
    const mailregex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    if (values?.name?.trim().length === 0) {
      objFlag.name = true;
      obj.name = "*Name cannot be empty !";
    } else if (values?.name.replace(/\s+/g, "").length <= 2) {
      objFlag.name = true;
      obj.name = "*Name cannot be less than 3 characters !";
    } else if (values?.name.replace(/\s+/g, "").length > 20) {
      objFlag.name = true;
      obj.name = "*Name cannot be greater than 20 characters !";
    } else if (!values?.name.match(lettersregex)) {
      objFlag.name = true;
      obj.name = "*Name can only contain alphabets";
    } else {
      objFlag.name = false;
      obj.name = "";
    }

    if (values?.email?.trim().length === 0) {
      objFlag.email = true;
      obj.email = "*Email cannot be empty !";
    } else if (values?.email.length > 40) {
      objFlag.email = true;
      obj.email = "*Email should be less than 40 characters !";
    } else if (!values?.email.match(mailregex)) {
      objFlag.email = true;
      obj.email = "*Please enter valid Email !";
    } else {
      objFlag.email = false;
      obj.email = "";
    }

    if (values?.message?.trim().length === 0) {
      objFlag.message = true;
      obj.message = "*Message cannot be empty !";
    } else if (values?.message.length > 200) {
      objFlag.message = true;
      obj.message = "*Please write a short message(Max 200 Characters) !";
    } else {
      objFlag.message = false;
      obj.message = "";
    }

    setErrorsFlag(errorsFlag => ({ ...errorsFlag, ...objFlag }));
    setErrors({ ...errors, ...obj });

    if (!objFlag.name && !objFlag.email && !objFlag.message) {
      setValues({ name: "", email: "", message: "" });
      setLoading(true);

      try {
        const response = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current!,
          process.env.NEXT_PUBLIC_PUBLIC_KEY!
        );

        if (response.status === 200) {
          setLoading(false);
          toast.success("Form Submitted !");
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        toast.error("Form Submission Failed. Please send me an email !");
      }
    }
  };

  return (
    <>
      <h1 className="contact_heading">Evaluasi</h1>
      <div className="contact_email">
        <p>😊 Eitsss.... Gimana udah main gamenya, yuk coba selesaikan soal-soal berikut! 😊</p>
      </div>
      <iframe className="embed" src="https://evaluasiarrarayuk.vercel.app/" width="485" height="402" frameBorder="0" scrolling="no" allowFullScreen></iframe>
      <div className="contact_email">
        <p>😊 Ehhh coba lagi yang ini! Biar makin pinter 😊</p>
      </div>
          <iframe className="embed" title="Evaluasi Materi Array - Kelompok 10" frameBorder="0" width="1200px" height="675px"
                  src="https://view.genial.ly/63b00ea3007b600012a014ef"></iframe>
    </>
  );
};
