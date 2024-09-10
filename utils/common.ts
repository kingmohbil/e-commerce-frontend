import { Metadata } from '@/types/product';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const sortMetadata = (metadata: Metadata[]) => {
  return metadata.sort((a, b) => a.price - b.price);
};

export { capitalize, sortMetadata };
