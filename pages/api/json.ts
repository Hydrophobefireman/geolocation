import type {NextRequest} from "next/server";

import countries from "./lib/_countries.json";

export const config = {
  runtime: "experimental-edge",
};
export default function handle(req: NextRequest) {
  const {geo} = req;
  const country = geo.country || "US";
  const city = geo.city || "San Francisco";
  const region = geo.region || "CA";

  const countryInfo = countries.find((x) => x.cca2 === country);

  const currencyCode = Object.keys(countryInfo.currencies)[0];
  const currency = countryInfo.currencies[currencyCode];
  const languages = Object.values(countryInfo.languages).join(", ");

  return new Response(
    JSON.stringify({
      country,
      city,
      region,
      currencyCode,
      currency,
      languages,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    }
  );
}
