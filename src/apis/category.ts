const getCategory = (): Promise<{
  returnCode: string;
  info: string[];
}> =>
  fetch(`https://donelist.ga/api/category`, {
    method: 'GET',
    headers: {
      'X-MID': '5'
    }
  }).then((res) => res.json());

export default getCategory;
