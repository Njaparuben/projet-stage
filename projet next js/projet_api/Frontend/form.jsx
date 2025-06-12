// pages/index.js
'use client';
import { useState } from 'react';

import styles from './formStyle.module.css'; 

export default function Home() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    age: '',
    tel: '',
  });

  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Formulaire</h1>
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="nom" className={styles.label}>Nom <strong className={styles.required}>*</strong>:</label>
          <input
            type="text"
            id="nom"
            name="nom"
            placeholder='Entrez votre nom'
            value={formData.nom}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="prenom" className={styles.label}>Prénom <strong className={styles.required}>*</strong>:</label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={formData.prenom}
            placeholder='Entrez votre prénom'
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="age" className={styles.label}>Âge <strong className={styles.required}>*</strong>:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            placeholder='Entrez votre âge'
            className={styles.input}
            min="0"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="tel" className={styles.label}>Téléphone <strong className={styles.required}>*</strong>:</label>
          <input
            type="tel"
            id="tel"
            name="tel"
            value={formData.tel}
            placeholder='Entrez votre téléphone'
            className={styles.input}
            required
          />
        </div>

        <button type="submit" className={styles.button}>Envoyer</button>
      </form>
    </div>
  );
}