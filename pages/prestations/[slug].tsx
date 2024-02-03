import Router from "next/router";
import { services_links, ServiceType } from "@/data/services";
import { GetStaticPaths, GetStaticProps } from "next";

import TwoLayout from "@/components/section/prestations/two-layout";
import Details from "@/components/section/prestations/details";

export default function Service({ service }: ServiceType) {
  return (
    <>
      <TwoLayout service={service} />
      <Details service={service} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = services_links.map((service) => ({
    params: { slug: service.link.split("/")[2] },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const service = services_links.find(
    (service) => service.link === `/prestations/${params?.slug}`
  );
  return {
    props: {
      service,
    },
  };
};
