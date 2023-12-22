import axios from 'axios';
const searchImages = async (term) => {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      headers: {
        Authorization: 'Client-ID GHdRogU44wujVN5ajbiXDhwYxEA7CvedctpLXGpRHiM'
      },
      params: {
        query: term
      }
    });
   
    return response.data.results;
  };
  export default searchImages;