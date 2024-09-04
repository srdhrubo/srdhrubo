import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ExternalLinkIcon,
  SendIcon,
  LinkedinIcon,
} from "lucide-react";
import { MdWhatsapp } from "react-icons/md";

interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

const socialLinks: SocialLink[] = [
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/citations?hl=en&user=4IqetAQAAAAJ",
    icon: <ExternalLinkIcon className="h-4 w-4" />,
  },
  {
    name: "ResearchGate",
    url: "https://www.researchgate.net/profile/Suchinto-Roy-Dhrubo",
    icon: <ExternalLinkIcon className="h-4 w-4" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/srdhrubo/",
    icon: <LinkedinIcon className="h-4 w-4" />,
  },
];

export default function ContactsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-primary/5">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Get in Touch
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities, collaborations, or just a
          friendly chat about research and technology. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">
                Suchinto Roy Dhrubo
              </CardTitle>
              <p className="text-xl text-muted-foreground">
                Prospective Graduate Student
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <MailIcon className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="mailto:srdhrubo97@gmail.com"
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      srdhrubo97@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="tel:+8801531783368"
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      +880 1531-783368
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MdWhatsapp className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="https://wa.me/+8801531783368"
                      target="_blank"
                      className="text-blue-600 hover:underline"
                    >
                      +880 1531-783368
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="h-5 w-5 text-muted-foreground" />
                    <span>Dhaka, Bangladesh</span>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Connect</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((link) => (
                      <Button
                        key={link.name}
                        variant="outline"
                        asChild
                        className="w-full"
                      >
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          {link.icon}
                          <span className="ml-2">{link.name}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" />
                <Input placeholder="Your Email" type="email" />
              </div>
              <Input placeholder="Subject" />
              <Textarea placeholder="Your Message" rows={6} />
              <Button className="w-full md:w-auto">
                Send Message
                <SendIcon className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
