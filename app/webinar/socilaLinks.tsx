import { Facebook, Github, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import React from "react";

function FooterLinks() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="flex justify-center gap-5 p-5">
        <div className="social-icons">
            <a
            href="https://www.linkedin.com/in/nucleus-devs-5295a7262/"
            style={{ color: "white" }}
            target="_blank" 
            rel="nucleus devs"
            >
            <LinkedinIcon />
            </a>
        </div>
        <div className="social-icons">
            <a
            href="https://web.facebook.com/nucleusdevs.09"
            style={{ color: "white" }}
            target="_blank" 
            rel="nucleus devs"
            >
            <Facebook />
            </a>
        </div>
        <div>
            <a
            href="https://github.com/ragmer09toske"
            style={{ color: "white" }}
            target="_blank" 
            rel="nucleus devs"
            >
            <Github />
            </a>
        </div>
        <div className="social-icons">
            <a
            href="https://www.instagram.com/nucleus_creative_studio/"
            style={{ color: "white" }}
            target="_blank" 
            rel="nucleus devs"
            >
            <Instagram />
            </a>
        </div>
      </div>
  );
}

export default FooterLinks;