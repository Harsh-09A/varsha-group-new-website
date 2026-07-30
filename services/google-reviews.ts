"use server";

import { unstable_cache } from "next/cache";

interface GoogleReview {
  name: string;
  relativePublishTimeDescription: string;
  rating: number;
  text?: { text: string; languageCode: string };
  authorAttribution: {
    displayName: string;
    uri: string;
    photoUri: string;
  };
  publishTime: string;
}

interface PlaceDetailsResponse {
  displayName?: { text: string; languageCode: string };
  reviews?: GoogleReview[];
}


export const getGoogleReviews = unstable_cache(
  async (placeId: string) => {
    if (!placeId) {
      return { success: false, error: "placeId missing", data: null };
    }
    try {
      const data = await fetchGoogleReviewsRaw(placeId);
      return { success: true, error: null, data };
    } catch (err) {
      console.error("getGoogleReviews failed:", err);
      return { success: false, error: "Fetch error", data: null };
    }
  },
  ["google-reviews"],
  { revalidate: 86400, tags: ["google-reviews"] },
);


async function fetchGoogleReviewsRaw(placeId: string) {
  const res = await fetch(
    `https://places.googleapis.com/v1/places/${placeId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": process.env.GOOGLE_PLACES_API_KEY as string,
        "X-Goog-FieldMask": "displayName,reviews",
        Referer: "https://www.varshagroup.in/",
      },
    },
  );

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  const data: PlaceDetailsResponse = await res.json();
  return {
    name: data.displayName?.text ?? "",
    reviews: data.reviews ?? [],
  };
}

export default getGoogleReviews