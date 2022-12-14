import imageUrlBuilder from '@sanity/image-url'
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "xhw3yb6x",
  dataset: "production",
  apiVersion: "2022-12-09",
  useCdn: false,
  token: "skjYCBdEzM7XCMUxl4iG035BALKdgkGiVy2uCiOsfrnIqD0bwS4RR2mByGcotKz7vKwENvlgmJrRpeewN3QZ9to9aj8qVeZE6s1UA1PDaJL0D4Ogq6PoKo2O4wveFZXxp14wIYxrtFsUKhqBMqT71nYU7EJXUj0upO4ES7VS89PqnlqW3Ns5"
});

const builder = imageUrlBuilder(client)
export const urlFor =(source:any)=>{
  return builder.image(source)
}