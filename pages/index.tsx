import Image from "next/image";

import {Layout} from "@vercel/examples-ui";

import map from "../public/map.svg";

// Forward properties from `middleware.ts`
// When support for configuring gSSP to use Edge Functions lands,
// We could add that logic here directly.
export const getServerSideProps = ({query}) => ({
  props: query,
});

export default function Index({
  name,
  languages,
  city,
  region,
  country,
  currencyCode,
  currencySymbol,
}) {
  name = decodeURIComponent(name);
  city = decodeURIComponent(city);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <div className="fixed inset-0 overflow-hidden opacity-75 bg-[#f8fafb]">
        <Image
          alt="World Map"
          src={map}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <main className="flex flex-col items-center flex-1 px-4 sm:px-20 text-center z-10 pt-8 sm:pt-20">
        <h1 className="text-3xl sm:text-5xl font-bold">Geolocation</h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-700">
          Show localized content based on headers
        </p>
        <section className="border border-gray-300 bg-white rounded-lg shadow-lg mt-16 w-full hover:shadow-2xl transition">
          <div className="p-4 flex justify-center items-between border-b">
            <div className="self-center">
              <Image
                alt={`${country} flag`}
                className="rounded-full"
                src={`https://flagcdn.com/96x72/${country.toLowerCase()}.png`}
                // src={`https://flagcdn.com/${country.toLowerCase()}.svg`}
                width={32}
                height={32}
              />
            </div>
            <div className="ml-4 mr-auto text-left">
              <h4 className="font-semibold">{name}</h4>
              <h5 className="text-gray-700">{city}</h5>
            </div>
            <p className="self-center text-gray-700">{country}</p>
          </div>
          <div className="p-4 flex justify-center items-between border-b bg-gray-50">
            <h4 className="font-semibold text-left mr-auto">Languages</h4>
            <div className="self-center">
              <p className="text-gray-700">{languages}</p>
            </div>
          </div>
          <div className="p-4 flex justify-center items-between border-b bg-gray-50">
            <h4 className="font-semibold text-left mr-auto">Currency</h4>
            <p className="text-gray-700">{`${currencyCode} ${currencySymbol}`}</p>
          </div>
          <div className="p-4 flexborder-b bg-gray-50 rounded-b-lg">
            <h4 className="font-semibold text-left">Geolocation Headers</h4>
            <pre className="bg-black text-white font-mono text-left py-2 px-4 rounded-lg mt-4 text-sm leading-6">
              <p>
                <strong>{"x-vercel-ip-city: "}</strong>
                {city}
              </p>
              <p>
                <strong>{"x-vercel-ip-country-region: "}</strong>
                {region}
              </p>
              <p>
                <strong>{"x-vercel-ip-country: "}</strong>
                {country}
              </p>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

Index.Layout = Layout;