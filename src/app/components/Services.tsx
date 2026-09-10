"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../data/services";

type ServicesProps = {
  showAll?: boolean;
};

export default function Services({ showAll = false }: ServicesProps) {
  const visibleServices = showAll ? SERVICES : SERVICES.slice(0, 3);

  return (
    <section
      id="services"
      data-services-section
      className="
        relative
        w-full
        overflow-hidden
        bg-stone-50
        px-4
        py-14
        sm:px-6
        sm:py-16
        md:px-8
        md:py-20
        lg:px-12
        lg:py-24
        xl:px-16
      "
    >
      {/* =====================================================
          CONTENT CONTAINER
      ====================================================== */}

      <div className="mx-auto max-w-[1600px]">
        {/* =====================================================
            SECTION INTRODUCTION
        ====================================================== */}

        <div
          className="
            mb-10
            text-center
            sm:mb-12
            md:mb-14
            lg:mb-16
          "
        >
          {/* Label */}

          <p
            data-services-label
            className="
              mb-5
              text-[10px]
              font-medium
              uppercase
              tracking-[0.32em]
              text-stone-600
              sm:mb-6
              sm:text-xs
              md:text-sm
            "
          >
            Our Services
          </p>

          {/* Heading */}

          <h2
            data-services-title
            className="
              mx-auto
              mb-6
              max-w-3xl
              text-4xl
              font-light
              leading-[1.05]
              tracking-[-0.025em]
              text-black
              sm:mb-7
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Spaces designed around you.
          </h2>

          {/* Description */}

          <p
            data-services-description
            className="
              mx-auto
              max-w-2xl
              text-sm
              leading-7
              text-stone-700
              sm:text-base
              sm:leading-8
              md:text-lg
            "
          >
            From concept to completion, we create considered interiors that
            combine functionality, craftsmanship and timeless design.
          </p>
        </div>

        {/* =====================================================
            SERVICE CARDS
        ====================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            sm:gap-6
            lg:grid-cols-3
            lg:gap-7
            xl:grid-cols-3
            xl:gap-8
          "
        >
          {visibleServices.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              data-service-card
              className="
                group
                relative
                flex
                min-h-0
                flex-col
                overflow-hidden
                border
                border-stone-300
                bg-white
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-stone-400
                hover:shadow-xl
              "
            >
              {/* =================================================
                  SERVICE IMAGE
              ================================================== */}

              <div
                className="
                  relative
                  h-56
                  w-full
                  overflow-hidden
                  bg-stone-200
                  sm:h-64
                  md:h-72
                  lg:h-80
                  xl:h-80
                "
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition-colors
                    duration-500
                    group-hover:bg-black/5
                  "
                />
              </div>

              {/* =================================================
                  SERVICE CONTENT
              ================================================== */}

              <div
                className="
                  flex
                  flex-grow
                  flex-col
                  items-center
                  justify-between
                  px-5
                  py-7
                  text-center
                  sm:px-6
                  sm:py-8
                  lg:px-6
                  lg:py-9
                  xl:px-5
                  xl:py-8
                  2xl:px-6
                  2xl:py-9
                "
              >
                {/* Top Content */}

                <div className="flex w-full flex-col items-center">
                  {/* Number */}

                  <span
                    data-service-number
                    className="
                      mb-4
                      text-[10px]
                      font-light
                      tracking-[0.16em]
                      text-stone-500
                      transition-colors
                      duration-300
                      group-hover:text-stone-700
                      sm:text-xs
                    "
                  >
                    {service.number}
                  </span>

                  {/* Title */}

                  <h3
                    data-service-title
                    className="
                      mb-4
                      text-lg
                      font-light
                      leading-tight
                      tracking-[-0.01em]
                      text-black
                      sm:text-xl
                      lg:text-[21px]
                    "
                  >
                    {service.title}
                  </h3>

                  {/* Description */}

                  <p
                    data-service-description
                    className="
                      max-w-[260px]
                      text-xs
                      leading-6
                      text-stone-600
                      sm:text-sm
                      sm:leading-7
                    "
                  >
                    {service.description}
                  </p>
                </div>

                {/* =================================================
                    ARROW
                ================================================== */}

                <div
                  className="
                    mt-7
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-stone-300
                    transition-all
                    duration-500
                    group-hover:border-black
                    group-hover:bg-black
                  "
                >
                  <ArrowRight
                    data-service-arrow
                    className="
                      h-4
                      w-4
                      text-black
                      transition-all
                      duration-500
                      group-hover:translate-x-0.5
                      group-hover:text-white
                    "
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {!showAll && (
          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 border border-black bg-black px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-black"
            >
              Show All Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
