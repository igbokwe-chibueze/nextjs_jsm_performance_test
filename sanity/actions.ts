import { groq } from 'next-sanity';
import { readClient } from './lib/client';
import { buildQuery } from './utils';

interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}

export const getResourcesPlaylist = async () => {
  try {
    const resources = await readClient.fetch(
      groq`*[_type == "resourcePlaylist"]{
        _id,
        title,
        resources[0...6]->{
          title,
          _id,
          downloadLink,
          "image": poster.asset->url,
          views,
          slug,
          category
        }
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readClient.fetch(
      groq`${buildQuery({
        type: 'resource',
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        downloadLink,
        "image": poster.asset->url,
        views,
        slug,
        category
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
}

export const getResourceBySlug = async (slug: string) => {
  try {
    const resource = await readClient.fetch(
      groq`*[_type == "resource" && slug.current == $slug][0]{
        title,
        _id,
        downloadLink,
        "image": poster.asset->url,
        views,
        category,
        description // Add more fields if needed
      }`,
      { slug }
    );
    return resource;
  } catch (error) {
    console.log(error);
  }
};
