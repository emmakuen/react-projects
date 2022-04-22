import { contributors } from "../data/contributorData";

export const getContributorImagesByIds = (ids) => {
  if (!ids || !ids.length) return [];
  const selectedContributors = contributors.filter((contributor) =>
    ids.includes(contributor.id)
  );
  return selectedContributors.map((contributor) => contributor.imgUrl);
};

export const getContributorNamesByIds = (ids) => {
  const selectedContributors = contributors.filter((contributor) =>
    ids.includes(contributor.id)
  );
  return selectedContributors.map((contributor) => contributor.name);
};
