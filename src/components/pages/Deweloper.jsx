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
import Ul from '../ui/Ul'
import Li from '../ui/Li'
import NavBar from '../blocks/NavBar'
import { useLocation } from 'react-router-dom'
import heroBg from '../../assets/images/Pylna_TOP_01.png';
import H3 from '../ui/H3'
import Button from '../ui/Button'
import { Helmet } from 'react-helmet'
import logo from '../../assets/logo/KGD-Builing-logo.svg'

const Deweloper = () => {
    const { pathname } = useLocation();

    const menuData = [
        { label: 'WSPÓŁPRACA', to: '#wspolpraca' },
        { label: 'WSPARCIE', to: '#wsparcie' },
        { label: 'TWOJE KORZYŚCI', to: '#twoje_korzysci' },
        { label: 'KONTAKT', to: '#kontakt' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className='overflow-x-hidden'>

            <Helmet>
                <title>KGD-Group :: Strategicze Doradztwo dla Inwestycji Deweloperskich</title>
                <meta name="description" content="KGD-Group oferuje profesjonalne doradztwo dla inwestycji deweloperskich, wspierając firmy w planowaniu, finansowaniu i realizacji projektów mieszkaniowych i komercyjnych." />
                <meta name="keywords" content="KGD-Group, doradztwo inwestycyjne, inwestycje deweloperskie, wsparcie deweloperów, planowanie projektów, finansowanie inwestycji" />
            </Helmet>

            <NavBar logo={logo} menuData={menuData} />
            <Hero
                bg={heroBg}
                header="STRATEGICZNE DORADZTWO DLA INWESTYCJI DEWELOPERSKICH."
                subHeader="Profesjonalne wsparcie deweloperów w procesie inwestycyjnym."
            />
            <Container>
                <div id="wspolpraca" />
                <H2 className="text-center" separator={false}>DLACZEGO WARTO Z NAMI WSPÓŁPRACOWAĆ?</H2>

            </Container>
            <Container>
                <TimeLine
                    index={1}
                    header="Oszczędzasz czas i pieniądze"
                    content="Nasz zespół ekspertów pomoże Ci uniknąć kosztownych błędów i przestojów. Dzięki wieloletniemu doświadczeniu wiemy, jak zoptymalizować proces budowy i zmieścić się w założonym budżecie."
                />
                <TimeLine
                    index={2}
                    header="Zyskujesz spokój ducha"
                    content="Nasz zespół ekspertów pomoże Ci uniasz zespół ekspertów pomoże Ci uniasz zespół ekspertów pomoże Ci uniknąć kosztownych błędów i przestojów. Dzięki wieloletniemu doświadczeniu wiemy, jak zoptymalizować proces budowy i zmieścić się w założonym budżecie."
                />
                <TimeLine
                    index={3}
                    header="Realizujesz swoje marzenia"
                    content="Nasz zespół ekspertów pomoże Ci uniknąć kosztownych błędów i przestojów. Dzięki wieloletniemu doświadczeniu wiemy, jak zoptymalizować proces budowy i zmieścić się w założonym budżecie."
                    isLast={true}
                />
            </Container>

            <FeatureImage src={dom} title="KGD" subtitle="KGD to doświadczenie, jakość i lokalizacje z potencjałem – tworzymy unikalne projekty mieszkaniowe w segmencie premium." />

            <Container>
                <div id="wsparcie" />
                <H2 className="text-center" separator={false}>NASZE WSPARCIE OBEJMUJE</H2>
            </Container>

            <Container>
                <TimeLine
                    index={1}
                    header="Etap przygotowawczy"
                    content={["Analiza działki i jej potencjału",
                        "Doradztwo w wyborze projektu",
                        "Weryfikacja dokumentacji",
                        "Pomoc w uzyskaniu pozwoleń",
                        "Optymalizacja kosztów budowy",
                        "Stworzenie realnego harmonogramu"]}
                />
                <TimeLine
                    index={2}
                    header="Organizacja budowy"
                    content={[
                        "Wybór sprawdzonych wykonawców",
                        "Negocjacje cen materiałów",
                        "Koordynacja dostaw",
                        "Nadzór nad pracami",
                        "Kontrola zgodności z projektem",
                        "Regularne raporty z postępu prac"
                    ]}
                />
                <TimeLine
                    index={3}
                    header="Kontrola finansów"
                    content={[
                        "Weryfikacja kosztorysów",
                        "Optymalizacja wydatków",
                        "Kontrola faktur i płatności",
                        "Zarządzanie budżetem",
                        "Rekomendacje oszczędności"
                    ]}
                />
                <TimeLine
                    index={4}
                    header="Wykończenie i odbiory"
                    content={[
                        "Koordynacja prac wykończeniowych",
                        "Doradztwo w wyborze materiałów",
                        "Nadzór nad montażem instalacji",
                        "Przygotowanie do odbiorów",
                        "Wsparcie w usuwaniu usterek"
                    ]}
                />
                <TimeLine
                    index={5}
                    header="Wsparcie techniczne"
                    content={[
                        "Nadzór nad jakością wykonania",
                        "Rozwiązywanie problemów technicznych",
                        "Doradztwo materiałowe",
                        "Kontrola zgodności z normami",
                        "Weryfikacja rozwiązań instalacyjnych"
                    ]}
                />
            </Container>

            <Container>
                <div id="twoje_korzysci" />
                <H2 className="text-center" separator={true}>Twoje korzyści</H2>
                <Ul>
                    <Li>Oszczędność czasu - nie musisz być codziennie na budowie</Li>
                    <Li>Kontrola kosztów - pomagamy zmieścić się w budżecie</Li>
                    <Li>Najlepsze rozwiązania - doradzamy sprawdzone technologie</Li>
                    <Li>Wysoka jakość - pilnujemy standardów wykonania</Li>
                    <Li>Terminowa realizacja - dbamy o sprawny przebieg prac</Li>
                    <Li>Bezpieczeństwo - weryfikujemy wszystkie formalności</Li>
                </Ul>

            </Container>

            <FeatureImage src={dom} title="KGD" subtitle="KGD to doświadczenie, jakość i lokalizacje z potencjałem – tworzymy unikalne projekty mieszkaniowe w segmencie premium." />

            <Container className='bg-[#C9AB8B] mt-[120px]'>
                <H3 className='!font-extralight text-center text-white mb-[60px] lg:mb-[120px]'>Skorzystaj z bezpłatnej konsultacji. Omówimy Twoje potrzeby i zaproponujemy najlepsze rozwiązania dla Twojego projektu.</H3>
                <Section className='flex justify-center'>
                    <Button className="max-w-[620px]" type="secondary">Zadzwoń (+48) 533 087 918</Button>
                </Section>
            </Container>

            <Contact />
            <Footer />
        </div>
    )
}

export default Deweloper