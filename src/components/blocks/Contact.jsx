import React from 'react'
import H2 from '../ui/H2'
import P from '../ui/P'
import Container from '../layout/Container'
import Input from '../ui/Input'
import Checkbox from '../ui/Checkbox'
import Textarea from '../ui/Textarea'
import Button from '../ui/Button'
import logo from '../../assets/logo/KGD logo.svg'

const Contact = () => {
    return (
        <div id="kontakt" className="
            grid grid-cols-1 md:grid-cols-2 
            w-full max-w-[1920px] mx-auto 
        ">
            {/* Left Side - Contact Info */}
            <div className="order-2 md:order-1 bg-[#1F1F24] py-16 sm:py-24 md:py-[120px] relative px-4 sm:px-6 md:px-10 lg:px-20 xl:px-[120px] 2xl:px-[162px]">
                {/* Left Background Strip */}
                <div className="hidden md:block absolute bg-[#1F1F24] top-0 -left-[162px] bottom-0 w-[162px]" />

                <H2 className="text-white">Kontakt</H2>

                <div className="grid gap-6 mt-6">
                    <P className="text-white">
                        ul. xxx xxxx xx,<br />
                        xx-xxx xxxxxxx<br />
                        kontakt@kgd-group.pl<br />
                        (+48) 607 186 161
                    </P>
                    <P className="text-white">
                        ul. xxx xxxx xx,<br />
                        xx-xxx xxxxxxx<br />
                        kontakt@kgd-group.pl<br />
                        (+48) 607 186 161
                    </P>
                </div>

                <div className="mt-12">
                    <img src={logo} alt="KGD logo" className="w-[160px] sm:w-[200px]" />
                </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="order-1 md:order-2  py-16 sm:py-24 md:py-[120px] flex items-center px-4 sm:px-6 md:px-10 lg:px-20 xl:px-[120px] 2xl:px-[162px]">
                <div className="grid gap-8 w-full max-w-[624px] mx-auto md:ml-auto">
                    <Input placeholder="Imię i nazwisko" />
                    <Input placeholder="Adres E-mail" />
                    <Input placeholder="Numer telefonu" />
                    <Textarea placeholder="Wiadomość"></Textarea>

                    <div className="flex items-start gap-4 text-sm">
                        <Checkbox />
                        <p>
                            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu kontaktu w związku ze złożonym zapytaniem
                        </p>
                    </div>

                    <Button>Wyślij</Button>
                </div>
            </div>
        </div>
    )
}

export default Contact
