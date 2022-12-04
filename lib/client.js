import sanitiyCLient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanitiyCLient({
    projectId:'72ysioqq',
    dataset:'production',
    apiVersion:'2022-05-12',
    useCdn:'production',
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)