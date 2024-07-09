import { Facebook, Github, Instagram, LinkedinIcon, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

function FooterLinks() {
  return (
    <div className="flex z-50 justify-center gap-5 p-5">
        <div className="social-icons">
            <Link
            href="https://www.linkedin.com/in/nucleus-devs-5295a7262/"
            style={{ color: "white" }}
            target="_blank" 
            rel="nucleus devs"
            >
            <LinkedinIcon />
            </Link>
        </div>
        <div className="social-icons">
            <Link href="https://web.facebook.com/nucleusdevs.09"
            style={{ color: "white" }}
            target="_blank" 
            rel="nucleus devs"
            >
            <Facebook />
            </Link>
        </div>
        <div>
            <Link
            href="https://github.com/ragmer09toske"
            style={{ color: "white" }}
            target="_blank" 
            rel="nucleus devs"
            >
            <Github />
            </Link>
        </div>
        <div className="social-icons">
            <Link
            href="https://www.instagram.com/nucleus_creative_studio/"
            style={{ color: "white" }}
            target="_blank" 
            rel="nucleus devs"
            >
            <Instagram />
            </Link>
        </div>
      </div>
  );
}

export default FooterLinks;