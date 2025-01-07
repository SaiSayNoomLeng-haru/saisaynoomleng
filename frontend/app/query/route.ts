// contact form
export async function SendForm(formData : FormData){
    const baseUrl = `http://127.0.0.1:1337/api/contact-forms`

    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try{
        const resp = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ data : { name, email, message} })
        });
        if(!resp.ok){
            throw{
                message: 'Cannot send message',
                status: resp.status,
                statusText: resp.statusText
            }
        }
        const data = await resp.json();
    }
    catch(error){
        if(error instanceof Error){
            console.error(error);
            return error.message;
        }
    }
}

// get certificates
export async function getCertificates( key : string | null, value: string | null, page = 1, pageSize = 4 ){
    const baseUrl = key && key !== null ? 
    `http://127.0.0.1:1337/api/certificates?populate[0]=imgUrl&filters[${key}][$eq]=${value}&pagination[page]=${page}&pagination[pageSize]=${pageSize}` : 
    `http://127.0.0.1:1337/api/certificates?populate[0]=imgUrl&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;

    const resp = await fetch(baseUrl)
    const data = await resp.json();
    return {
        certificates: data.data,
        pagination: data.meta.pagination
    }
}

// get certificate detail
export async function getCertificateDetails(id: string) {
    const baseUrl = `http://127.0.0.1:1337/api/certificates/${id}?populate[0]=imgUrl`;

    const resp = await fetch(baseUrl);
    const data = await resp.json();
    return data.data;
}

// get portfolio detail
export async function getPortfolio(key: string | null, value: string | null, page = 1, pageSize = 4){
    const baseUrl = key && key !== null ? 
    `http://127.0.0.1:1337/api/portfolios?filters[${key}][$contains]=${value}&populate[0]=imageUrl&pagination[page]=${page}&pagination[pageSize]=${pageSize}` :
    `http://127.0.0.1:1337/api/portfolios?populate[0]=imageUrl&pagination[page]=${page}&pagination[pageSize]=${pageSize}`

    const resp = await fetch(baseUrl);
    const data = await resp.json();
    return{
        portfolios: data.data,
        pagination: data.meta.pagination
    }
}
