const formDataIntoObject = (data: FormData) => {
  const obj: Record<string, string> = {};

  data.forEach((value, key) => (obj[key] = value as string));

  return obj;
};

export { formDataIntoObject };
