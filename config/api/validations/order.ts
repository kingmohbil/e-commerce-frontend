const minSize = 1;
const minQuantity = 1;
const minAddress = 1;

const config = {
  size: {
    min: minSize,
  },
  quantity: {
    min: minQuantity,
  },
  address: {
    min: minAddress,
  },
  errors: {
    size: `Product size should be at least ${minSize} character`,
    product: `Product is required for submitting an order`,
    quantity: `Product quantity should be at least ${minQuantity}`,
    address: `Address should be at least ${minAddress} character`,
  },
} as const;

export default config;
