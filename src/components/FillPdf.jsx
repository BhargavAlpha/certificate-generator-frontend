import axios from 'axios';

export default async function fillPDF(formData) {
    const url =import.meta.env.VITE_BACKEND_URL;
    try{
       const response= await axios.post(`${url}/upload-to-drive`,{
            name:formData.name,
            course:formData.course,
            date:formData.date,
            certificateId:formData.certificateId,
            email:formData.email
        })
        if(response.status===200){
            alert('Certificate Generated Successfully')
            const link = response.data.link;
            window.open(link);
        }
    }
    catch (error) {
        console.error('Error:', error);
    }
}




