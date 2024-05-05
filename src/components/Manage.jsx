import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from './Manage.module.css';

const Manage = () => {
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);
    const url=import.meta.env.VITE_BACKEND_URL

    useEffect(() => {
        const fetchCertificates = async () => {
            try {
                const response = await axios.get(`${url}/get-certificates`);
                setCertificates(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching certificates:', error);
            }
        };
        fetchCertificates();
    }, []);

    const handleSubmit = (link) => {
        window.open(link);
    };

    return (
        <div className={styles.container}>
            <h2>Generated Certificates</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className={styles.submissionsTable}>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {certificates.map((certificate) => (
                            <tr key={certificate._id}>
                                <td onClick={() => handleSubmit(certificate.link)}>
                                    {certificate.email}
                                </td>
                                <td onClick={() => handleSubmit(certificate.link)}>
                                    <button className={styles.viewCertificateButton}>
                                        View Certificate
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Manage;
