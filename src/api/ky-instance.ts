import ky from "ky";

export const kySimpleHashInstance = ky.extend({
  prefixUrl: `${process.env.NEXT_PUBLIC_SIMPLE_HASH_API_URL}`,
  hooks: {
    beforeRequest: [
      async (request) => {
        request.headers.set("X-API-KEY", process.env.NEXT_PUBLIC_API_KEY || "");
      },
    ],
    beforeError: [
      (error) => {
        throw new Error(error.message);
      },
    ],
  },
});

export const kyNftGoInstance = ky.create({
  prefixUrl: `${process.env.NEXT_PUBLIC_NFT_GO_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {
    beforeRequest: [
      async (request) => {
        request.headers.set(
          "X-API-KEY",
          process.env.NEXT_PUBLIC_NFT_GO_API_KEY || ""
        );
      },
    ],
    beforeError: [
      async (error) => {
        throw new Error(error.message);
      },
    ],
  },
});

export const kyApiInstance = ky.create({
  prefixUrl: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
  hooks: {
    beforeError: [
      async (error) => {
        throw new Error(error.message);
      },
    ],
  },
});
