import { DownloadIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";
import { MdWhatsapp } from "react-icons/md";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 pl-global-padding">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4">Education & Scores</h3>
          <ul>
            <li>
              <Link href="/academic" className="hover:text-gray-400">
                Academic
              </Link>
            </li>
            <li>
              <Link
                href="/standardized-test-results"
                className="hover:text-gray-400"
              >
                Standardized Test Results
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Research Experience</h3>
          <ul>
            <li>
              <Link href="/research_experience" className="hover:text-gray-400">
                Research
              </Link>
            </li>
            <li>
              <Link
                href="/professional_experience"
                className="hover:text-gray-400"
              >
                Professional
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-gray-400">
                Projects
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Affiliation</h3>
          <ul>
            <li>
              <Link href="/co-curriculars" className="hover:text-gray-400">
                Co-curricular Activities
              </Link>
            </li>
            <li>
              <Link href="/achievements" className="hover:text-gray-400">
                Achievements
              </Link>
            </li>
          </ul>

          <h3 className="text-white font-bold mt-4">
            <Link href="/skills" className="hover:text-gray-400">
              Skills
            </Link>
          </h3>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">More</h3>
          <ul>
            <li>
              <Link href="/about" className="hover:text-gray-400">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/reference" className="hover:text-gray-400">
                Reference
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-gray-400">
                Contact Details
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col lg:items-end gap-4">
          <Button variant="secondary" className="w-32" asChild>
            <Link href="/download/cv">
              CV <DownloadIcon className="w-4 ml-2" />
            </Link>
          </Button>
          <Button variant="secondary" className="w-32" asChild>
            <Link href="/download/resume">
              RESUME <DownloadIcon className="w-4 ml-2" />
            </Link>
          </Button>
          <div className="flex items-center gap-4">
            <Link href="mailto:srdhrubo97@gmail.com" target="_blank">
              <MailIcon className="w-5" />
            </Link>
            <Link href="tel:+8801531783368" target="_blank">
              <PhoneIcon className="w-5" />
            </Link>
            <Link href="https://wa.me/+8801531783368" target="_blank">
              <MdWhatsapp className="w-5" size="20" />
            </Link>
            <Link href="https://www.linkedin.com/in/srdhrubo" target="_blank">
              <LinkedinIcon className="w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} Suchinto Roy Dhrubo. All rights
          reserved.
        </p>
        <p className="mt-2">
          Designed & developed by{" "}
          <Link
            href="https://github.com/shojib116"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Nazmul Hasan Shajib
          </Link>
        </p>
      </div>
    </footer>
  );
}
