import React, {useEffect, useState} from 'react';
import {collection, getFirestore, onSnapshot, query} from "firebase/firestore";
import {app} from "../../../config/firebase";
import styles from '../style.module.css';
const db = getFirestore(app);
const ServiceClinicList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const serviceCollection = collection(db, 'services', 'departments', 'clinic');
        const q = query(serviceCollection);
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setServices(data);
        });

        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.serviceTitle}>
                <h3>УСЛУГИ ОТДЕЛЕНИЯ ПОЛИКЛИНИКА</h3>
                <h3>ЦЕНА</h3>
            </div>
            {services.map((service,index) => (
                <div className={styles.service} key={index}>
                    <div><p>{service.serviceName}</p><span>{service.price}</span><span>руб</span></div>
                </div>
            ))}
        </div>
    );
};

export default ServiceClinicList;