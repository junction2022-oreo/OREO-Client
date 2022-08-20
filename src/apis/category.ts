const getCategory = (): Promise<{
  returnCode: string;
  info: string[];
}> =>
  fetch(`https://donelist.ga/category`, {
    method: 'GET',
    headers: {
      'X-MID': '7777'
    }
  }).then((res) => res.json());

export default getCategory;
