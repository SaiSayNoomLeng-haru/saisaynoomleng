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