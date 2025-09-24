import React, { useEffect } from 'react'
import Hero from '../blocks/Hero'
import Contact from '../blocks/Contact'
import Footer from '../blocks/Footer'
import Container from '../layout/Container'
import TimeLine from '../blocks/TimeLine'
import Section from '../layout/Section'
import H2 from '../ui/H2'
import P from '../ui/P'
import FeatureImage from '../layout/FeatureImage'
import dom from '../../assets/images/Pylna_Dom_3_a.png'
import dom2 from '../../assets/images/Pylna_Dom_5_b 3.png'
import Ul from '../ui/Ul'
import Li from '../ui/Li'
import NavBar from '../blocks/NavBar'
import { useLocation } from 'react-router-dom'
import heroBg from '../../assets/images/image00003.png';
import H3 from '../ui/H3'
import Button from '../ui/Button'
import { Helmet } from 'react-helmet'
import logo from '../../assets/logo/KGD-Builing-logo.svg'
import Feature from '../blocks/Feature'

const Individual = () => {
    const { pathname } = useLocation();

    const menuData = [
        { label: 'WSPÓŁPRACA', to: '#wspolpraca' },
        { label: 'WSPARCIE', to: '#wsparcie' },
        { label: 'TWOJE KORZYŚCI', to: '#twoje_korzysci' },
        { label: 'KONTAKT', to: '#kontakt' },
    ];

    const menuParams = {
        phone: '(+48) 533 087 918'
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <Section className='overflow-x-hidden'>
            <Helmet>
                <title>KGD Building Strategiczne doradztwo w procesie budowy domu</title>
                <meta name="description" content="KGD Building oferuje profesjonalne doradztwo w procesie budowy domu – od planowania, przez finansowanie, aż po nadzór inwestycji, aby Twoja budowa przebiegała sprawnie i bezpiecznie." />
                <meta name="keywords" content="KGD Building, budowa domu, doradztwo budowlane, wsparcie inwestycji, planowanie budowy, nadzór budowlany, konsulting dla deweloperów" />
            </Helmet>

            <NavBar logo={logo} menuData={menuData} menuParams={menuParams} />
            <Hero
                bg={heroBg}
                header="KOMPLEKSOWE DORADZTWO W ZAKRSIE BUDOWY WYMARZONEGO DOMU"
                subHeader="Bazując na naszym doświadczeniu zapewnimy Ci spokojną i skuteczną realizację całego procesu."
            />
            <Container>
                <div id="wspolpraca" />
                <Section className='py-[32.0px] md:py-[40px] md:py-[80px]'>
                    <H2 separator={true} className="text-center">DLACZEGO WARTO Z NAMI WSPÓŁPRACOWAĆ?</H2>
                    <P>Oszczędzasz czas i pieniądze - Nasz zespół ekspertów pomoże Ci uniknąć kosztownych błędów i przestojów. Dzięki wieloletniemu doświadczeniu wiemy, jak zoptymalizować proces budowy i zmieścić się w założonym budżecie.</P>
                </Section>

            </Container>
            <Container>
                <Feature
                    icon={1}
                    header="Zyskujesz spokój ducha"
                    content="
                        <p class='font-normal my-2'>Przejmujemy na siebie stres związany z:</p>
                        <ul class='list-disc pl-6'>
                            <li>Wyborem i weryfikacją wykonawców</li>
                            <li>Kontrolą jakości prac</li>
                            <li>Koordynacją ekip budowlanych</li>
                            <li>Dokumentacją i formalnościami</li>   
                            <li>Negocjacjami z dostawcami materiałów</li>   
                        </ul>
                    "
                />
                <Feature
                    icon={2}
                    header="Realizujesz swoje marzenia"
                    content="
                        <p class='font-normal my-2'>Pomagamy przekuć Twoją wizję wymarzonego domu w rzeczywistość:</p>
                        <ul class='list-disc pl-6'>
                            <li>Dobieramy rozwiązania dopasowane do Twoich potrzeb</li>
                            <li>Sugerujemy optymalne wykorzystanie przestrzeni</li>
                            <li>Doradzamy w wyborze materiałów i technologii</li>
                            <li>Pilnujemy, by efekt końcowy spełnił Twoje oczekiwania</li>   
                        </ul>
                    "
                />
            </Container>

            <FeatureImage src={dom} title="KGD BUILDING" subtitle="Współpraca z KGD to gwarancja realizacji Twojego projektu." />

            <Container>
                <div id="wsparcie" />
                <Section className='py-[32.0px] md:py-[40px] md:py-[80px]'>
                    <H2 className="text-center" separator={false}>NASZE WSPARCIE OBEJMUJE</H2>
                </Section>

            </Container>

            <Container>
                <Feature
                    icon={1}
                    header="Etap przygotowawczy"
                    content="
                        <ul class='list-disc pl-6'>
                            <li>Analiza działki i jej potencjału</li>
                            <li>Doradztwo w wyborze projektu</li>
                            <li>Weryfikacja dokumentacji</li>
                            <li>Pomoc w uzyskaniu pozwoleń</li>
                            <li>Optymalizacja kosztów budowy</li>
                            <li>Stworzenie realnego harmonogramu</li>
                        </ul>
                    "
                />
                <Feature
                    icon={2}
                    header="Organizacja budowy"
                    content="
        <ul class='list-disc pl-6'>
            <li>Wybór sprawdzonych wykonawców</li>
            <li>Negocjacje cen materiałów</li>
            <li>Koordynacja dostaw</li>
            <li>Nadzór nad pracami</li>
            <li>Kontrola zgodności z projektem</li>
            <li>Regularne raporty z postępu prac</li>
        </ul>
    "
                />

                <Feature
                    icon={3}
                    header="Kontrola finansów"
                    content="
        <ul class='list-disc pl-6'>
            <li>Weryfikacja kosztorysów</li>
            <li>Optymalizacja wydatków</li>
            <li>Kontrola faktur i płatności</li>
            <li>Zarządzanie budżetem</li>
            <li>Rekomendacje oszczędności</li>
        </ul>
    "
                />

                <Feature
                    icon={4}
                    header="Wykończenie i odbiory"
                    content="
        <ul class='list-disc pl-6'>
            <li>Koordynacja prac wykończeniowych</li>
            <li>Doradztwo w wyborze materiałów</li>
            <li>Nadzór nad montażem instalacji</li>
            <li>Przygotowanie do odbiorów</li>
            <li>Wsparcie w usuwaniu usterek</li>
        </ul>
    "
                />

                <Feature
                    icon={5}
                    header="Wsparcie techniczne"
                    content="
        <ul class='list-disc pl-6'>
            <li>Nadzór nad jakością wykonania</li>
            <li>Rozwiązywanie problemów technicznych</li>
            <li>Doradztwo materiałowe</li>
            <li>Kontrola zgodności z normami</li>
            <li>Weryfikacja rozwiązań instalacyjnych</li>
        </ul>
    "
                />

            </Container>

            <Container>
                <div id="twoje_korzysci" />
                <Section className='mt-[80px]'>
                    <H2 className="text-center" separator={true}>Twoje korzyści</H2>
                </Section>
                <Section className='mb-[80px]'>
                    <Ul>
                        <Li>Oszczędność czasu - nie musisz być codziennie na budowie</Li>
                        <Li>Kontrola kosztów - pomagamy zmieścić się w budżecie</Li>
                        <Li>Najlepsze rozwiązania - doradzamy sprawdzone technologie</Li>
                        <Li>Wysoka jakość - pilnujemy standardów wykonania</Li>
                        <Li>Terminowa realizacja - dbamy o sprawny przebieg prac</Li>
                        <Li>Bezpieczeństwo - weryfikujemy wszystkie formalności</Li>
                    </Ul>
                </Section>
            </Container>

            <FeatureImage src={dom2} title="KGD BUILDING" subtitle="Zaufaj profesjonalistom a zaoszczędzony czas poświęć na realizacje swoich hobby." />

            <Section className='bg-[#ffffff]'>
                <Container>
                    <Section className='py-[32.0px] md:py-[40px] md:py-[80px]'>
                        <H3 className='!font-extralight text-center '>Skorzystaj z bezpłatnej konsultacji. Omówimy Twoje potrzeby i zaproponujemy najlepsze rozwiązania.</H3>

                    </Section>
                </Container>
            </Section>
            <Section className='bg-[#C9AB8B]'>
                    <Section className='flex justify-center'>
                        <Button className="max-w-[620px]" type="primary">Zadzwoń (+48) 533 087 918</Button>
                    </Section>
            </Section>

            <Contact />
            <Footer />
        </Section>
    )
}

export default Individual