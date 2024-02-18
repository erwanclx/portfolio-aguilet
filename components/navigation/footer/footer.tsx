import Image from "next/image";
import Link from "next/link";
import { networks } from "@/data/networks";
import { services_links } from "@/data/services";

export default function Footer() {
  const links = services_links;

  return (
    <footer
      className="w-full
    grid-footer
    bg-gray-500
    gap-[1px]
    p-[1px]
    h-96
    "
    >
      <div
        className="bg-white w-full h-full
        flex flex-col justify-center items-center gap-4  py-6
        "
      >
        <Image
          alt="Logo Arthur Guilet"
          width={100}
          height={100}
          className="w-32"
          src="/logo.png"
        />
        <Link
          href="https://maps.app.goo.gl/5SJssCf9PcoqDHuP9"
          target="_blank"
          className="text-2xl sm:text-center"
        >
          3 Rue Jean de la Fontaine, <br /> 78260 Achères
        </Link>
      </div>

      <div
        className="w-full h-full
        subgrid-footer
        bg-gray-500
        gap-[1px]
        "
      >
        <ul className="linksgrid-footer h-full w-full gap-[1px]">
          <div className="bg-white w-full h-full flex flex-col sm:flex-row sm:items-center px-8 justify-center py-6">
            <Link
              href="https://bts.arthur-guilet.fr/"
              target="_blank"
              className="lg:text-xl"
            >
              Site académique
            </Link>
          </div>
          <ul className="bg-white h-full w-full flex flex-col sm:flex-row sm:items-center px-8 justify-between py-6">
            {links.map((link, index) => (
              <li key={index}>
                <Link className="lg:text-xl" href={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </ul>
        <div className="bg-gray-500 h-full w-full copyrightgrid-footer gap-[1px]">
          <div className="lg:text-base md:text-xl lg:text-2xl flex sm:items-center justify-center bg-white py-6 px-8">
            Copyright © {new Date().getFullYear()} Arthur Guilet. Tous droits
            réservés.
            <br />
            Développé avec 💖 par Arthur Guilet et Erwan Cloux.
          </div>
          <ul className="bg-white w-full h-full flex items-center gap-4 justify-center py-6">
            {networks.map((network, index) => (
              <li key={index}>
                <Link href={network.link} target="_blank">
                  <Image
                    alt={network.name}
                    width={50}
                    height={50}
                    className="w-6 md:w-8 lg:w-8"
                    src={network.icon}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
