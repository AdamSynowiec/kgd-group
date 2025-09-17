import React, { useEffect, useState } from 'react'
import Hero from '../../components/blocks/Hero'
import FeatureImage from '../../components/layout/FeatureImage'
import FeatureCard from '../../components/blocks/FeatureCard'
import Container from '../../components/layout/Container'
import Section from '../../components/layout/Section'
import H2 from '../../components/ui/H2'
import P from '../../components/ui/P'
import A from '../../components/ui/A'
import i1 from '../../assets/images/128.png'
import dom from '../../assets/images/Pylna_Dom_3_a.png'
import dom1 from '../../assets/images/image00003.png'
import dom2 from '../../assets/images/Pylna_TOP_01.png'
import dom3 from '../../assets/images/image00007.png'
import Card from '../../components/ui/Card'
import Contact from '../../components/blocks/Contact'
import Footer from '../../components/blocks/Footer'
import NavBar from '../../components/blocks/NavBar'
import { Link, useLocation } from 'react-router-dom'
import heroBg from '../../assets/images/Pylna_Dom_5_b 3.png';
import Config from '../../Config'
import { HashLink } from 'react-router-hash-link'
import logo from '../../assets/logo/KGD logo.svg'
import Ul from '../ui/Ul'
import Li from '../ui/Li'

import icon1 from '../../assets/icons/icon1.svg'
import icon2 from '../../assets/icons/icon2.svg'
import icon3 from '../../assets/icons/icon3.svg'
import icon4 from '../../assets/icons/icon4.svg'
import icon5 from '../../assets/icons/icon5.svg'
import icon6 from '../../assets/icons/icon6.svg'
import icon7 from '../../assets/icons/icon7.svg'
import icon8 from '../../assets/icons/icon8.svg'
import icon9 from '../../assets/icons/icon9.svg'
import icon10 from '../../assets/icons/icon10.svg'
import icon11 from '../../assets/icons/icon11.svg'
import icon12 from '../../assets/icons/icon12.svg'

const HomePage = () => {

    const [investments, setInvestments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { pathname } = useLocation();


    const menuData = [
        { label: 'KIM JESTEŚMY', to: '#kim_jestesmy' },
        {
            label: 'INWESTYCJE',
            to: '#inwestycje',
            children: [
                { label: 'Aktualne', to: '#inwestycje_aktualne' },
                { label: 'Zakończone', to: '#inwestycje_zakonczone' },
            ],
        },
        { label: 'DLA INWESTORA', to: '#dla_inwestora' },
        { label: 'ZAKUP GRUNTÓW', to: '#zakup_gruntów' },
        {
            label: 'KGD BUILDING', to: '#kgd_building',
            children: [
                { label: 'Dla osoby prywatnej', to: '#osoba_prywatna' },
                { label: 'Dla dewelopera', to: '#dla_dewelopera' },
            ],
        },
        { label: 'KONTAKT', to: '#kontakt' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    const getInvestmentsData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                `${Config.REST.baseURL}/admin/api/content/items/investments?api_key=${Config.REST.API_KEY}`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();

            const items = Array.isArray(data.data) ? data.data : data;

            const sorted = [...items].sort((a, b) => (b.order ?? 0) - (a.order ?? 0));

            setInvestments(sorted);
        } catch (err) {
            console.error("Failed to fetch investments:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        getInvestmentsData();
    }, []);

    return (
        <Section className='overflow-x-hidden'>
            <NavBar logo={logo} menuData={menuData} />
            <Hero
                bg={heroBg}
                header="Luksusowe inwestycje w wyjątkowych lokalizacjach"
                subHeader="Projektujemy i realizujemy nowoczesne apartamenty, wille i aparthotele w prestiżowych miejscach w Polsce."
            />
            <Container>
                <div id="kim_jestesmy" />
                <H2 aos="fade-up" delay="100" className="text-center" separator={true}>KIM JESTEŚMY?</H2>
                <P aos="fade-up" delay="200"><b>Krakowska Grupa Deweloperska</b> to deweloper specjalizujący się w realizacji inwestycji premium w najbardziej urokliwej oraz prestiżowej lokalizacji Krakowa — Woli Justowskiej. Krakowska Grupa Deweloperska zrealizowała wiele wyjątkowych i udanych inwestycji. Wszystkie cechuje kameralny charakter oraz jakość wykonania z dbałością o każdy detal. KGD pracuje nad rozszerzeniem swojej działalności o kolejne miasta. Zapraszamy do zapoznania się z dotychczasowymi realizacjami oraz aktualną ofertą.</P>

            </Container>

            <FeatureImage src={dom} title="Krakowska Grupa Deweloperska" subtitle="KGD to doświadczenie, jakość i lokalizacje z potencjałem – tworzymy unikalne projekty mieszkaniowe w segmencie premium." />

            <Section className="grid girid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-[4px] divide-x divide-[#eee]">
                <Card
                    aosDelay={100}
                    header="PUM ZREALIZOWANY"
                    content={'<span class="text-[#C9AB8B] font-medium">10</span> INWESTYCJI <br/><span class="text-[#C9AB8B] font-medium">7 960</span> PUM'}
                    icon={icon1}
                />
                <Card
                    aosDelay={150}
                    header="W TRAKCIE BUDOWY"
                    content={'<span class="text-[#C9AB8B] font-medium">7</span> INWESTYCJI <br/><span class="text-[#C9AB8B] font-medium">9000</span> PUM'}
                    icon={icon2}
                />
                <Card
                    aosDelay={200}
                    header="INWESTYCJE NA ETAPIE PROJEKTOWYM"
                    content={'<span class="text-[#C9AB8B] font-medium">7</span> INWESTYCJI <br/><span class="text-[#C9AB8B] font-medium">19 900</span> PUM'}
                    icon={icon3}
                />
                <Card
                    aosDelay={250}
                    header="WARTOŚĆ INWESTYCJI DEWELOPERSKICH"
                    content={'<span class="text-[#C9AB8B] font-medium">592 000 000 zł</span>'}
                    icon={icon4}
                />
            </Section>

            <Container>
                <div id="inwestycje" />
                <div id="inwestycje_aktualne" />
                <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Aktualne inwestycje</H2>
                <P aos="fade-up" delay="200">Nasze aktualne projekty to kontynuacja filozofii tworzenia kameralnych, luksusowych przestrzeni w najbardziej prestiżowych lokalizacjach. Każda inwestycja powstaje z myślą o osobach ceniących najwyższą jakość, ponadczasową estetykę i komfort życia.
                    Z dumą prezentujemy nasze bieżące realizacje – to unikalne miejsca, które łączą elegancką architekturę z funkcjonalnością, a wszystko to w otoczeniu zieleni, spokoju i doskonałej infrastruktury.
                </P>

                <Section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] items-stretch'>
                    {investments.map((item, key) => {
                        if (!item.in_status) {
                            return (
                                <FeatureCard
                                    investmentDate={item.in_date}
                                    key={key}
                                    title={item.in_title}
                                    location={item.in_localization}
                                    features={item.in_description}
                                    link={item?.in_website ? 'https://' + item.in_website : ""}
                                    linkLabel={item.in_website}
                                    imgSrc={`https://kgd-group.pl/admin/storage/uploads${item.in_image.path}`}
                                    imgAlt={item.in_image.altText || item.in_title}
                                />
                            )
                        }
                    })}
                </Section>
            </Container>

            <Section>
                <Container>
                    <div id="inwestycje_zakonczone" />
                    <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Zakończone inwestycje</H2>
                    <P aos="fade-up" delay="200">Nasze zakończone inwestycje to synonim luksusu, jakości i ponadczasowej estetyki. Każdy projekt łączy elegancką architekturę z funkcjonalnością, tworząc wyjątkowe przestrzenie w prestiżowych lokalizacjach – idealne do komfortowego życia w otoczeniu zieleni i spokoju.
                    </P>

                    <Section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] items-stretch'>
                        {investments.map((item, key) => {
                            if (item.in_status) {
                                return (<FeatureCard
                                    investmentDate={item.in_date}
                                    key={key}
                                    title={item.in_title}
                                    location={item.in_localization}
                                    features={item.in_description}
                                    link={item?.in_website ? 'https://' + item.in_website : ""}
                                    linkLabel={item.in_website}
                                    imgSrc={`https://kgd-group.pl/admin/storage/uploads${item.in_image.path}`}
                                    imgAlt={item.in_title}
                                />)
                            }

                        })}
                    </Section>
                </Container>
            </Section>

            <Section className="bg-[#FBFBFB]">
                <Container >
                    <div id="dla_inwestora" />
                    <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Dla inwestora</H2>
                    <P aos="fade-up" delay="200">
                        Nasz zespół to wykształceni i doświadczeni specjaliści, a wśród nich prawnicy, księgowi, architekci, projektanci, agenci nieruchomości, fachowcy budowlani czy doradcy finansowi. Zakres oraz jakość naszych działań pozwolą Ci nie tylko zamieszkać z klasą, lecz również poczuć komfort i bezpieczeństwo podczas realizacji Twojej inwestycji.
                    </P>
                    <Section className="grid girid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-[4px]">
                        <Card
                            aosDelay={100}
                            header="Pełne bezpieczeństwo Twojego kapitału"
                            icon={icon5}
                        />
                        <Card
                            aosDelay={100}
                            header="Wysokie i gwarantowane stopy zwrotu"
                            icon={icon6}
                        />
                        <Card
                            aosDelay={100}
                            header="Topowe lokalizacje"
                            icon={icon7}
                        />
                        <Card
                            aosDelay={100}
                            header="Zróżnicowane inwestycje"
                            icon={icon8}
                        />
                        <Card
                            aosDelay={100}
                            header="Zespół doświadczonych fachowców"
                            icon={icon9}
                        />
                        <Card
                            aosDelay={100}
                            header="Prosty i przejrzysty model działania"
                            icon={icon10}
                        />
                        <Card
                            aosDelay={100}
                            header="Doradztwo prawne, księgowe i finansowe"
                            icon={icon11}
                        />
                        <Card
                            aosDelay={100}
                            header="Długoterminowa strategia inwestycyjna"
                            icon={icon12}
                        />
                    </Section>
                    <P className='underline' aos="fade-up" delay="400">Zapraszamy Inwestorów do wspólnych projektów deweloperskich.</P>
                </Container>
            </Section>

            <Container>
                <div id="zakup_gruntów" />
                <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Masz działkę, która może nas zainteresować?</H2>
                <P aos="fade-up" delay="200">Nasze aktualne projekty to kontynuacja filozofii tworzenia kameralnych, luksusowych przestrzeni w najbardziej prestiżowych lokalizacjach. Każda inwestycja powstaje z myślą o osobach ceniących najwyższą jakość, ponadczasową estetykę i komfort życia.
                    Z dumą prezentujemy nasze bieżące realizacje – to unikalne miejsca, które łączą elegancką architekturę z funkcjonalnością, a wszystko to w otoczeniu zieleni, spokoju i doskonałej infrastruktury.
                </P>

            </Container>

            <FeatureImage src={dom3} title="Działka o wysokim potencjale?" subtitle="Projektujemy eleganckie, kameralne przestrzenie – z myślą o jakości życia i unikalnym charakterze miejsca." />
            <Section className="bg-[#FBFBFB]">
                <Container className=''>
                    <div id="kgd_building" />
                    <div id="osoba_prywatna" />
                    <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Dla osoby prywatnej</H2>
                    <P aos="fade-up" delay="200">Twój wymarzony dom – zaprojektowany i zbudowany przez ekspertów. Powiedz nam, jak chcesz mieszkać – my zajmiemy się resztą. Realizujemy indywidualne projekty domów jednorodzinnych, willi i rezydencji w najwyższym standardzie.</P>
                    <Section className="flex items-center justify-center">
                        <Link to="/indywidualna" className='
                       font-montserrat inline-block px-5 py-2 rounded-lg bg-[#C9AB8B] text-white font-semibold hover:bg-[#b09274] transition-colors duration-300 w-fit transform hover:scale-105 hover:shadow-lg
                        '>Zobacz ofertę →</Link>
                    </Section>

                </Container>
            </Section>
            <FeatureImage src={dom1} title="Twój wymarzony dom zaprojektowany i zbudowany przez ekspertów" subtitle="Rezydencje i wille szyte na miarę – architektura, wykonawstwo i nadzór w jednej ręce." />
            <Section className="bg-[#FBFBFB]">
                <Container className=''>
                    <div id="dla_dewelopera" />
                    <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Dla dewelopera</H2>
                    <P aos="fade-up" delay="200">Wspieramy  deweloperów – od projektu po sprzedaż.
                        Masz grunt i pomysł na inwestycję, ale brakuje Ci czasu, zespołu lub doświadczenia? KGD wesprze Cię na każdym etapie prowadzenia małego projektu deweloperskiego.</P>
                    <Section className="flex items-center justify-center">
                        <Link to="/deweloper" className='
                       font-montserrat inline-block px-5 py-2 rounded-lg bg-[#C9AB8B] text-white font-semibold hover:bg-[#b09274] transition-colors duration-300 w-fit transform hover:scale-105 hover:shadow-lg
                        '>Zobacz ofertę →</Link>
                    </Section>

                </Container>
            </Section>
            <FeatureImage src={dom2} title="Wspieramy deweloperów od projektu po sprzedaż" subtitle="Strategiczne wsparcie dla kameralnych inwestycji premium – doświadczenie, zespół i pełna realizacja pod marką KGD." />

            <Contact />
            <Footer />
        </Section >
    )
}

export default HomePage