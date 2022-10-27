import axios from 'axios';

const CallApi = ({ headers, ...options }) => {
    const promise = new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                timeout: 15000,
                headers: {...headers},
                ...options,
            });
            resolve(res.data);
        } catch (error) {
            reject(error);
        };
    });

    return promise;
};

export default CallApi;
