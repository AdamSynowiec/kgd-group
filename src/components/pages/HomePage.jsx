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
import dom1 from '../../assets/images/image00014.png'
import dom2 from '../../assets/images/image00018-min.png'
import dom3 from '../../assets/images/image00007.png'
import Card from '../../components/ui/Card'
import Contact from '../../components/blocks/Contact'
import Footer from '../../components/blocks/Footer'
import NavBar from '../../components/blocks/NavBar'
import { Link, useLocation } from 'react-router-dom'
import heroBg from '../../assets/images/Pylna_Dom_4_b-min.png';
import Config from '../../Config'
import { HashLink } from 'react-router-hash-link'
import logo from '../../assets/logo/KGD logo.svg'
import Ul from '../ui/Ul'
import Li from '../ui/Li'

import icon1 from '../../assets/icons/icon1.svg'
import icon2 from '../../assets/icons/icon2.svg'
import icon3 from '../../assets/icons/icon3.svg'
import icon4 from '../../assets/icons/icon4.svg'
import protectIcon from '../../assets/icons/protect.svg'
import chartIcon from '../../assets/icons/chart.svg'
import icon7 from '../../assets/icons/icon7.svg'
import investmentsIcon from '../../assets/icons/investments.svg'
import investmentsIcon2 from '../../assets/icons/investments2.svg'
import icon9 from '../../assets/icons/icon9.svg'
import icon10 from '../../assets/icons/icon10.svg'
import lawIcn from '../../assets/icons/law.svg'
import strategyIcon from '../../assets/icons/strategy.svg'
import localizationIcon from '../../assets/icons/localization.svg'
import documentIcon from '../../assets/icons/document.svg'
import handshakeIcon from '../../assets/icons/handshake.svg'

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

    const menuParams = {
        phone: '(+48) 518 451 555'
    }

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
            <NavBar logo={logo} menuData={menuData} menuParams={menuParams} />
            <Hero
                bg={heroBg}
                header="Luksusowe inwestycje w wyjątkowych lokalizacjach"
                subHeader="Projektujemy i realizujemy nowoczesne apartamenty, wille oraz aparthotele w prestiżowych miejscach w Polsce."
            />
            <Container>
                <div id="kim_jestesmy" />
                <Section className='py-[32.0px] md:py-[40px] md:py-[80px]'>
                    <H2 aos="fade-up" delay="100" className="text-center" separator={true}>KIM JESTEŚMY?</H2>
                    <P aos="fade-up" delay="200"><span className='font-medium'>Krakowska Grupa Deweloperska</span> to deweloper specjalizujący się w inwestycjach premium w najbardziej urokliwej i prestiżowej części Krakowa — Woli Justowskiej. Zrealizowaliśmy wiele wyjątkowych projektów, które wyróżniają się jakością wykonania i dbałością o każdy detal. Nasze inwestycje są doceniane przez rynek i Klientów za unikalny charakter. Obecnie pracujemy nad rozszerzeniem działalności o kolejne miasta. </P>
                    <br />
                    <P className='font-medium'>Zapraszamy do zapoznania się z dotychczasowymi realizacjami oraz aktualną ofertą.</P>
                </Section>

            </Container>

            <FeatureImage src={dom} title="Krakowska Grupa Deweloperska" subtitle="KGD to doświadczenie, jakość i lokalizacje z potencjałem – tworzymy unikalne projekty mieszkaniowe w segmencie premium." />

            <Section className="py-[32.0px] md:py-[40px] md:py-[80px] grid girid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-[4px] divide-x divide-[#eee]">
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
                <P aos="fade-up" delay="200" className='mb-[32.0px] md:mb-[40px]'>Nasze bieżące projekty to kontynuacja filozofii tworzenia luksusowych przestrzeni w najbardziej prestiżowych lokalizacjach. Każda inwestycja powstaje z myślą o osobach ceniących najwyższą jakość, ponadczasową estetykę i komfort życia. Prezentujemy realizacje, które łączą elegancką architekturę z funkcjonalnością, w otoczeniu zieleni i doskonałej infrastruktury.
                </P>

                <Section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[32px] items-stretch'>
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
                    <Section className='py-[32.0px] md:py-[40px] md:py-[80px]'>
                        <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Zakończone inwestycje</H2>
                        <P aos="fade-up" delay="200" className='mb-[32.0px] md:mb-[40px]'>Nasze zrealizowane projekty to synonim luksusu, jakości i ponadczasowej estetyki. Każdy z nich łączy elegancką architekturę z funkcjonalnością, tworząc unikatowe przestrzenie w prestiżowych lokalizacjach – idealne do komfortowego życia w harmonii z otoczeniem.
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
                    </Section>
                </Container>
            </Section>

            <Section className="bg-[#FBFBFB]">
                <Container >
                    <div id="dla_inwestora" />
                    <Section className='py-[32.0px] md:py-[40px] md:py-[80px]'>
                        <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Dla inwestora</H2>
                        <P aos="fade-up" delay="200" className='mb-[32.0px] md:mb-[40px]'>
                            Nasz zespół tworzą wykształceni i doświadczeni specjaliści – prawnicy, księgowi, architekci, projektanci, agenci nieruchomości, eksperci budowlani oraz doradcy finansowi. Szeroki zakres kompetencji i najwyższa jakość naszych działań sprawiają, że możesz nie tylko zamieszkać z klasą, lecz także czuć pełen komfort i bezpieczeństwo na każdym etapie realizacji swojej inwestycji.
                        </P>
                        <Section className="grid girid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-[4px]">
                            <Card
                                aosDelay={100}
                                header="Pełne bezpieczeństwo Twojego kapitału"
                                icon={protectIcon}
                            />
                            <Card
                                aosDelay={100}
                                header="Wysokie i gwarantowane stopy zwrotu"
                                icon={chartIcon}
                            />
                            <Card
                                aosDelay={100}
                                header="Topowe lokalizacje"
                                icon={localizationIcon}
                            />
                            <Card
                                aosDelay={100}
                                header="Zróżnicowane inwestycje"
                                icon={investmentsIcon2}
                            />
                            <Card
                                aosDelay={100}
                                header="Zespół doświadczonych fachowców"
                                icon={handshakeIcon}
                            />
                            <Card
                                aosDelay={100}
                                header="Prosty i przejrzysty model działania"
                                icon={documentIcon}
                            />
                            <Card
                                aosDelay={100}
                                header="Doradztwo prawne, księgowe i finansowe"
                                icon={lawIcn}
                            />
                            <Card
                                aosDelay={100}
                                header="Długoterminowa strategia inwestycyjna"
                                icon={strategyIcon}
                            />
                        </Section>
                        <Section className="flex justify-center items-center mt-[40px]">
                            <HashLink smooth to="/#kontakt" className='
                       font-montserrat inline-block px-5 py-2 rounded-lg bg-[#C9AB8B] text-white font-semibold hover:bg-[#b09274] transition-colors duration-300 w-fit transform hover:scale-105 hover:shadow-lg
                        '>Zapraszamy inwestorów do wspólnych projektów deweloperskich.</HashLink>
                        </Section>
                    </Section>
                </Container>
            </Section>

            <div id="zakup_gruntów" />
            <Section className='py-[32.0px] md:py-[40px] md:py-[80px]'>
                <Container>
                    <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Masz działkę, która może nas zainteresować?</H2>
                    <P className="mb-[32.0px] md:mb-[40px]" aos="fade-up" delay="200">
                        Szukamy gruntów inwestycyjnych w Krakowie i okolicach. Interesują nas
                        działki pod zabudowę mieszkaniową i usługową – także te z budynkami do
                        wyburzenia.
                    </P>
                </Container>
                <Section className="py-[32.0px] md:py-[40px] md:py-[80px] grid girid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-[4px] divide-x divide-[#eee]">
                    <Card
                        aosDelay={100}
                        header="Lokalizacja"
                        content={'Szczególnie interesuje nas Kraków i okolice.'}
                        icon={localizationIcon}
                    />
                    <Card
                        aosDelay={150}
                        header="Elastyczność"
                        content={'Odkupimy działkę lub wymienimy na mieszkanie czy dom.'}
                        icon={investmentsIcon2}
                    />
                    <Card
                        aosDelay={200}
                        header="Formalności"
                        content={'Dbamy o wszystkie procedury, Ty zyskujesz czas i spokój.'}
                        icon={documentIcon}
                    />
                    <Card
                        aosDelay={250}
                        header="Indywidualne podejście"
                        content={'Każdą ofertę dopasowujemy do potrzeb właściciela.'}
                        icon={handshakeIcon}
                    />
                </Section>
                <Section className="flex items-center justify-center flex-col md:flex-row gap-4">
                    <HashLink smooth to="/#kontakt" className='
                       font-montserrat inline-block px-5 py-2 rounded-lg bg-[#C9AB8B] text-white font-semibold hover:bg-[#b09274] transition-colors duration-300 w-fit transform hover:scale-105 hover:shadow-lg
                        '>Skontaktuj się z nami</HashLink>
                    <span className='font-poppins text-[#717171]'>lub</span>
                    <HashLink smooth to="/#kontakt" className='
                       font-montserrat inline-block px-5 py-2 rounded-lg bg-[#C9AB8B] text-white font-semibold hover:bg-[#b09274] transition-colors duration-300 w-fit transform hover:scale-105 hover:shadow-lg
                        '>Zadzwoń (+48) 533 087 918</HashLink>
                </Section>
            </Section>


            <FeatureImage src={dom3} title="Działka o wysokim potencjale?" subtitle="Odkupimy od Ciebie Twój teren lub wspólnie zbudujemy inwestycję i podzielimy się zyskiem." />
            <Section className="bg-[#FBFBFB]">
                <Container className=''>
                    <div id="kgd_building" />
                    <div id="osoba_prywatna" />
                    <Section className='py-[32.0px] md:py-[40px] md:py-[80px]'>
                        <H2 aos="fade-up" delay="100" className="text-center" separator={true}>KGD Building – dla osoby prywatnej</H2>
                        <P aos="fade-up" delay="200" className='mb-[32.0px] md:mb-[40px]'>KGD Building to nasza marka powstała z myślą o pomocy indywidualnym klientom w realizacji ich marzenia o budowie wymarzonego domu.
                            Twój dom – zaprojektowany i zbudowany przez ekspertów. Powiedz nam, jak chcesz mieszkać – my zajmiemy się resztą. Realizujemy indywidualne projekty domów jednorodzinnych, willi i rezydencji w najwyższym standardzie.</P>
                        <Section className="flex items-center justify-center">
                            <Link to="/indywidualna" className='
                       font-montserrat inline-block px-5 py-2 rounded-lg bg-[#C9AB8B] text-white font-semibold hover:bg-[#b09274] transition-colors duration-300 w-fit transform hover:scale-105 hover:shadow-lg
                        '>Zobacz ofertę →</Link>
                        </Section>
                    </Section>

                </Container>
            </Section>
            <FeatureImage src={dom1} title="Twój wymarzony dom zaprojektowany i zbudowany przez ekspertów" subtitle="Rezydencje i wille szyte na miarę – zajmiemy się całym procesem od zakupu gruntu przez projekt oraz nadzór wykonawczy aż po odbiór i wykończenie wnętrz." />
            <Section className="bg-[#FBFBFB]">
                <Container className=''>
                    <div id="dla_dewelopera" />
                    <Section className='py-[32.0px] md:py-[40px] md:py-[80px]'>
                        <H2 aos="fade-up" delay="100" className="text-center" separator={true}>KGD Building – dla dewelopera</H2>
                        <P aos="fade-up" delay="200" className='mb-[32.0px] md:mb-[40px]'>KGD Building wspiera także deweloperów – od projektu po sprzedaż. Masz grunt i pomysł na inwestycję, ale brakuje Ci czasu, zespołu lub doświadczenia? KGD wesprze Cię na każdym etapie prowadzenia projektu deweloperskiego.</P>
                        <Section className="flex items-center justify-center">
                            <Link to="/deweloper" className='
                       font-montserrat inline-block px-5 py-2 rounded-lg bg-[#C9AB8B] text-white font-semibold hover:bg-[#b09274] transition-colors duration-300 w-fit transform hover:scale-105 hover:shadow-lg
                        '>Zobacz ofertę →</Link>
                        </Section>

                    </Section>
                </Container>
            </Section>
            <FeatureImage src={dom2} title="Wspieramy deweloperów od projektu po sprzedaż" subtitle="Strategiczne wsparcie dla inwestycji deweloperskich – bogate doświadczenie, zespół i kompleksowe wsparcie dewelopera na każdym etapie." />

            <Contact />
            <Footer />
        </Section >
    )
}

export default HomePage