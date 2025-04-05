'use client';
import { useState } from 'react';
import useLanguageStore from '@/store/languageStore';
import translations from './translations';
import universityData from './universities';
import './apply.css';

const languageOptions = [
  "İngilizce",
  "Almanca",
  "Fransızca",
  "İspanyolca",
  "İtalyanca",
  "Arapça",
  "Türkçe",
  "Rusça",
  "Çince (Mandarin)",
  "Japonca",
  "Korece",
  "Portekizce",
  "Farsça",
  "Hintçe",
  "Urduca",
  "Lehçe (Polonyaca)",
  "Ukraynaca",
  "İbranice",
  "Endonezce",
  "Felemenkçe (Hollandaca)"
];


const levelOptions = ["Beginner", "Intermediate", "Good", "Fluent", "Native"];

export default function ApplyPage() {
  const { language } = useLanguageStore();
  const t = translations[language];

  const [country, setCountry] = useState('');
  const [school, setSchool] = useState('');
  const [department, setDepartment] = useState('');

  const [languages, setLanguages] = useState([{ lang: "", level: "" }]);

  const [form, setForm] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLanguageChange = (index, field, value) => {
    const updated = [...languages];
    updated[index][field] = value;
    setLanguages(updated);
  };

  const addLanguage = () => {
    if (languages.length < 3) {
      setLanguages([...languages, { lang: "", level: "" }]);
    }
  };

  const removeLanguage = (index) => {
    const updated = [...languages];
    updated.splice(index, 1);
    setLanguages(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullForm = { country, school, department, languages, ...form };

    const res = await fetch('/api/apply', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fullForm)
    });

    if (res.ok) {
      alert(t.formSuccess);
    } else {
      alert(t.formError);
    }
  };

  return (
    <form className="apply-form" onSubmit={handleSubmit}>
      <h2 className="section-title">{t.educationInfo}</h2>

      <div className="form-group">
        <label>{t.country}</label>
        <select value={country} onChange={(e) => {
          setCountry(e.target.value);
          setSchool('');
          setDepartment('');
        }} required>
          <option value="">{t.select}</option>
          {Object.keys(universityData).map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {country && (
        <div className="form-group">
          <label>{t.school}</label>
          <select value={school} onChange={(e) => {
            setSchool(e.target.value);
            setDepartment('');
          }} required>
            <option value="">{t.select}</option>
            {Object.keys(universityData[country]).map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      )}

      {school && (
        <div className="form-group">
          <label>{t.department}</label>
          <select value={department} onChange={(e) => setDepartment(e.target.value)} required>
            <option value="">{t.select}</option>
            {universityData[country][school].map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
      )}

      <h2 className="section-title">{t.knownLanguages}</h2>
      {languages.map((item, index) => (
        <div key={index} className="language-group">
          <div className="form-group half">
            <label>{t.language}</label>
            <select value={item.lang} onChange={(e) => handleLanguageChange(index, 'lang', e.target.value)} required>
              <option value="">{t.select}</option>
              {languageOptions.map((lang) => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
          <div className="form-group half">
            <label>{t.level}</label>
            <select value={item.level} onChange={(e) => handleLanguageChange(index, 'level', e.target.value)} required>
              <option value="">{t.select}</option>
              {levelOptions.map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>
          {languages.length > 1 && (
            <button type="button" className="remove-btn" onClick={() => removeLanguage(index)}>{t.delete}</button>
          )}
        </div>
      ))}
      {languages.length < 3 && (
        <button type="button" className="add-btn" onClick={addLanguage}>{t.addLanguage}</button>
      )}

      <h2 className="section-title">{t.personalInfo}</h2>

      <div className="form-group">
        <label>{t.name}</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>{t.email}</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </div>

      <div className="form-group">
        <label>{t.phone}</label>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
      </div>

      <button type="submit" className="submit-button">{t.submit}</button>
    </form>
  );
}





