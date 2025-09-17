import React, { useState } from 'react';
import H2 from '../ui/H2';
import P from '../ui/P';
import Container from '../layout/Container';
import Input from '../ui/Input';
import Checkbox from '../ui/Checkbox';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import logo from '../../assets/logo/KGD logo.svg';
import { Link } from "react-router-dom";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        privacyAccepted: false
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const validate = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = "Imię i nazwisko jest wymagane.";
        if (!formData.email) {
            newErrors.email = "Email jest wymagany.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Podaj poprawny adres email.";
        }
        if (!formData.phone) newErrors.phone = "Telefon jest wymagany.";
        if (!formData.message) newErrors.message = "Wiadomość jest wymagana.";
        if (!formData.privacyAccepted) newErrors.privacyAccepted = "Musisz zaakceptować Politykę prywatności.";
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccessMessage('');
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        try {
            await fetch(`https://kgd-group.pl/server/mailer`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            setSuccessMessage("Wiadomość została wysłana!");
            setFormData({ name: '', email: '', phone: '', message: '', privacyAccepted: false });
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 3000);
        } catch (error) {
            setErrors({ form: "Wystąpił błąd. Spróbuj ponownie później." });
        }
        setIsSubmitting(false);
    };

    return (
        <div id="kontakt" className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1920px] mx-auto">
            {/* Left Side */}
            <div className="order-2 md:order-1 bg-[#1F1F24] py-16 sm:py-24 md:py-[120px] relative px-4 sm:px-6 md:px-10 lg:px-20 xl:px-[120px] 2xl:px-[162px]">
                <div className="hidden md:block absolute bg-[#1F1F24] top-0 -left-[162px] bottom-0 w-[162px]" />
                <H2 className="text-white">Kontakt</H2>
                <div className="grid gap-6">
                    <span className='
                        text-[#eee]
                        font-montserrat
                        text-[18px]/[32px]
                        sm:text-[20px]/[36px]
                        md:text-[24px]/[44px]
                        lg:text-[28px]/[52px]
                        xl:text-[32px]/[64px]
                        font-bold
                    '>Adres biura sprzedaży</span>
                    <P className="text-white">
                        {/* KRJ 3 DEVELOPMENT SP. Z O.O.<br />
                        ul. Koło Strzelnicy 2/2<br />
                        30-219 Kraków<br />
                        KRS - 0001106614<br />
                        NIP - 6772510738<br />
                        REGON - 528676390<br />
                        kontakt@kgd-group.pl<br />
                        (+48) 607 186 161 */}
                        KGD GROUP<br />
                        ul. Koło Strzelnicy 2/2<br />
                        30-219 Kraków<br />
                        kontakt@kgd-group.pl<br />
                        (+48) 518 451 555
                    </P>
                </div>
                <div className="">
                    <img src={logo} alt="KGD logo" className="w-[160px] sm:w-[200px]" />
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="order-1 md:order-2 py-16 sm:py-24 md:py-[120px] flex items-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-[120px] 2xl:px-[162px]">
                <form className="grid gap-6 w-full max-w-[624px] mx-auto md:ml-auto" onSubmit={handleSubmit}>
                    <Input placeholder="Imię i nazwisko" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                    <Input placeholder="Adres E-mail" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    <Input placeholder="Numer telefonu" name="phone" value={formData.phone} onChange={handleChange} />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                    <Textarea placeholder="Wiadomość" name="message" value={formData.message} onChange={handleChange} />
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                    <div className="flex items-start gap-4 text-sm">
                        <Checkbox name="privacyAccepted" checked={formData.privacyAccepted} onChange={handleChange} />
                        <p>
                            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu w związku ze złożonym zapytaniem
                        </p>
                    </div>
                    {errors.privacyAccepted && <p className="text-red-500 text-sm">{errors.privacyAccepted}</p>}
                    {errors.form && <p className="text-red-500 text-sm">{errors.form}</p>}

                    {successMessage && (
                        <p className={`fixed left-0 right-0 transition-all duration-500 ease-in-out 
                            ${showSuccess ? 'bottom-0 opacity-100' : '-bottom-full opacity-0'} 
                            bg-green-800 text-white p-4 text-center`}>
                            {successMessage}
                        </p>
                    )}

                    <Button type="primary" disabled={isSubmitting}>
                        {isSubmitting ? "Wysyłanie..." : "Wyślij"}
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
