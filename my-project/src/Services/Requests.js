import axios from 'axios';

export const fetchAboutsShort = async () => {
    const language = await localStorage.getItem('Accept-Language');

    const response = await axios.get(
        'https://regional.epart.az/api/abouts-short',
        {
            headers: {
                'Accept-Language': language, // Change 'en-US' to the desired language code
            },
        }
    );
    return response.data;
};

export const fetchAboutsBanner = async () => {
    const response = await axios.get(
        'https://regional.epart.az/api/abouts-banner'
    );
    return response.data;
};

export const fetchEbaut = async () => {
    const language = await localStorage.getItem('Accept-Language');
    const response = await axios.get('https://regional.epart.az/api/abouts', {
        headers: {
            'Accept-Language': language, // Change 'en-US' to the desired language code
        },
    });
    return response.data;
};
export const fetchAservices = async () => {
    const language = await localStorage.getItem('Accept-Language');

    const response = await axios.get('https://regional.epart.az/api/services', {
        headers: {
            'Accept-Language': language, // Change 'en-US' to the desired language code
        },
    });
    return response.data;
};
export const fetchAservicesBunner = async () => {
    const language = await localStorage.getItem('Accept-Language');

    const response = await axios.get(
        'https://regional.epart.az/api/services-banner',
        {
            headers: {
                'Accept-Language': language, // Change 'en-US' to the desired language code
            },
        }
    );
    return response.data;
};
export const fetchContactBunner = async () => {
    const language = localStorage.getItem('Accept-Language');

    const response = await axios.get(
        'https://regional.epart.az/api/contacts-banner',
        {
            headers: {
                'Accept-Language': language, // Change 'en-US' to the desired language code
            },
        }
    );
    return response.data;
};
export const fetchContact = async () => {
    const language = localStorage.getItem('Accept-Language');

    const response = await axios.get('https://regional.epart.az/api/contacts', {
        headers: {
            'Accept-Language': language, // Change 'en-US' to the desired language code
        },
    });
    return response.data;
};
export const fetchEbautBunner = async () => {
    const language = await localStorage.getItem('Accept-Language');
    const response = await axios.get(
        'https://regional.epart.az/api/abouts-banner',
        {
            headers: {
                'Accept-Language': language, // Change 'en-US' to the desired language code
            },
        }
    );
    return response.data;
};
export const fetchStatistics = async () => {
    const language = await localStorage.getItem('Accept-Language');
    const response = await axios.get(
        'https://regional.epart.az/api/statistics',
        {
            headers: {
                'Accept-Language': language, // Change 'en-US' to the desired language code
            },
        }
    );
    return response.data;
};
export const fetchService_extra = async () => {
    const language = localStorage.getItem('Accept-Language');

    const response = await axios.get(
        'https://regional.epart.az/api/service-extra',
        {
            headers: {
                'Accept-Language': language, // Change 'en-US' to the desired language code
            },
        }
    );
    return response.data;
};
export const fetchBlog = async () => {
    const language = localStorage.getItem('Accept-Language');

    const response = await axios.get('https://regional.epart.az/api/news', {
        headers: {
            'Accept-Language': language, // Change 'en-US' to the desired language code
        },
    });
    return response.data;
};
export const fetchBlogById = async (id) => {
    const language = localStorage.getItem('Accept-Language');

    const response = await axios.get(
        `https://regional.epart.az/api/news/${id}`,
        {
            headers: {
                'Accept-Language': language, // Change 'en-US' to the desired language code
            },
        }
    );
    return response.data;
};
export const fetchBlogByCategory = async (category) => {
    const language = localStorage.getItem('Accept-Language');

    const response = await axios.get(
        `https://regional.epart.az/api/news?type=${category}`,
        {
            headers: {
                'Accept-Language': language, // Change 'en-US' to the desired language code
            },
        }
    );
    return response.data;
};
export const fetchBunner = async () => {
    const language = localStorage.getItem('Accept-Language');

    const response = await axios.get(
        'https://regional.epart.az/api/news-banner',
        {
            headers: {
                'Accept-Language': language, // Change 'en-US' to the desired language code
            },
        }
    );
    return response.data;
};
export const fetchFooterData = async () => {
    const language = localStorage.getItem('Accept-Language');

    const response = await axios.get('https://regional.epart.az/api/footer', {
        headers: {
            'Accept-Language': language, // Change 'en-US' to the desired language code
        },
    });
    return response.data;
};
export const fetcGalery = async (page) => {
    const response = await axios.get(
        `https://regional.epart.az/api/galery?page=${page}`
    );
    return response.data;
};
export const fetcGaleryBunner = async () => {
    const language = localStorage.getItem('Accept-Language');

    const response = await axios.get(
        'https://regional.epart.az/api/galery-banner',
        {
            headers: {
                'Accept-Language': language, // Change 'en-US' to the desired language code
            },
        }
    );
    return response.data;
};
