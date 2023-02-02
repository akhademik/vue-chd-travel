import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const sanity = sanityClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: '2022-12-03',
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);

export function urlFor(source) {
  return builder.image(source);
}

export default sanity;
