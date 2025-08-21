import React, { useEffect } from 'react'
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

const HomePage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className='overflow-x-hidden'>
            <NavBar />
            <Hero
                bg={heroBg}
                header="Luksusowe inwestycje w wyjątkowych lokalizacjach"
                subHeader="Projektujemy i realizujemy nowoczesne apartamenty, wille i aparthotele w prestiżowych miejscach w Polsce."
            />
            <Container>
                <div id="kim_jesteśmy" />
                <H2 aos="fade-up" delay="100" className="text-center" separator={true}>KIM JESTEŚMY?</H2>
                <P aos="fade-up" delay="200"><b>Krakowska Grupa Deweloperska</b> to deweloper specjalizujący się w realizacji inwestycji premium w najbardziej urokliwej oraz prestiżowej lokalizacji Krakowa — Woli Justowskiej. Krakowska Grupa Deweloperska zrealizowała wiele niezwykle interesujących i udanych inwestycji. Wszystkie cechuje kameralny charakter oraz jakość wykonania z dbałością o każdy detal. KGD pracuje nad rozszerzeniem swojej działalności o kolejne miasta.Zapraszamy do zapoznania się z dotychczasowymi realizacjami oraz aktualną ofertą.</P>

            </Container>

            <FeatureImage src={dom} title="KGD" subtitle="KGD to doświadczenie, jakość i lokalizacje z potencjałem – tworzymy unikalne projekty mieszkaniowe w segmencie premium." />

            <Container className='bg-[#FBFBFB] py-10 px-4'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-[16px] w-full">
                    <Card
                        aosDelay={100}
                        header="PUM ZREALIZOWANY"
                        content={'<span class="text-[#C9AB8B] font-medium">10</span> INWESTYCJI <br/><span class="text-[#C9AB8B] font-medium">7 960</span> PUM'}
                    />
                    <Card
                        aosDelay={150}
                        header="W TRAKCIE BUDOWY"
                        content={'<span class="text-[#C9AB8B] font-medium">7</span> INWESTYCJI <br/><span class="text-[#C9AB8B] font-medium">9000</span> PUM'}
                    />
                    <Card
                        aosDelay={200}
                        header="INWESTYCJE NA ETAPIE PROJEKTOWYM"
                        content={'<span class="text-[#C9AB8B] font-medium">7</span> INWESTYCJI <br/><span class="text-[#C9AB8B] font-medium">19 900</span> PUM'}
                    />
                    <Card
                        aosDelay={250}
                        header="WARTOŚĆ INWESTYCJI DEWELOPERSKICH"
                        content={'<span class="text-[#C9AB8B] font-medium">592 000 000 zł</span>'}
                    />
                </div>
            </Container>


            <Container>
                <div id="dla_inwestora" />
                <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Dla osoby prywatnej</H2>
                <P aos="fade-up" delay="200">Twój wymarzony dom – zaprojektowany i zbudowany przez ekspertówPowiedz nam, jak chcesz mieszkać – my zajmiemy się resztą. Realizujemy indywidualne projekty domów jednorodzinnych, willi i rezydencji w najwyższym standardzie.</P>
                <Link to="/indywidualna"><A>Zobacz ofertę</A></Link>

            </Container>

            <FeatureImage src={dom1} title="Twój wymarzony dom zaprojektowany i zbudowany przez ekspertów" subtitle="Rezydencje i wille szyte na miarę – architektura, wykonawstwo i nadzór w jednej ręce." />

            <Container>
                <div id="kgd_building" />
                <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Dla dewelopera</H2>
                <P aos="fade-up" delay="200">Wspieramy  deweloperów – od projektu po sprzedaż
                    Masz grunt i pomysł na inwestycję, ale brakuje Ci czasu, zespołu lub doświadczenia? KGD wesprze Cię na każdym etapie prowadzenia małego projektu deweloperskiego.</P>
                <Link to="/deweloper"><A>Zobacz ofertę</A></Link>

            </Container>

            <FeatureImage src={dom2} title="Wspieramy deweloperów od projektu po sprzedaż" subtitle="Strategiczne wsparcie dla kameralnych inwestycji premium – doświadczenie, zespół i pełna realizacja pod marką KGD." />


            <Container>
                <div id="inwestycje" />
                <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Aktualne inwestycje</H2>
                <P aos="fade-up" delay="200">Nasze aktualne projekty to kontynuacja filozofii tworzenia kameralnych, luksusowych przestrzeni w najbardziej prestiżowych lokalizacjach. Każda inwestycja powstaje z myślą o osobach ceniących najwyższą jakość, ponadczasową estetykę i komfort życia na co dzień.
                    Z dumą prezentujemy nasze bieżące realizacje – to unikalne miejsca, które łączą elegancką architekturę z funkcjonalnością, a wszystko to w otoczeniu zieleni, spokoju i doskonałej infrastruktury.
                </P>

            </Container>

            <Container className="grid gap-[120px]">
                <div id="inwestycje_aktualne" />
                <FeatureCard
                    title="Aparthotel Szczyrk"
                    location="Szczyrk"
                    features={[
                        'Inwestycja realizowana w Szczyrku przy ul. Wrzosowej',
                        'Aparthotel, ilość pokoi: 35, SPA',
                        'PUM 2 188 m2',
                        'Rozpoczęcie inwestycji — Q3 2025',
                        'Zakończenie budowy — Q3 2027',
                    ]}
                    link="https://www.fourseasons-mountain.pl"
                    linkLabel="www.fourseasons-mountain.pl"
                    imgSrc={i1}
                    imgAlt="Aparthotel Szczyrk"
                />
                <FeatureCard
                    title="Aparthotel Szczyrk"
                    location="Szczyrk"
                    features={[
                        'Inwestycja realizowana w Szczyrku przy ul. Wrzosowej',
                        'Aparthotel, ilość pokoi: 35, SPA',
                        'PUM 2 188 m2',
                        'Rozpoczęcie inwestycji — Q3 2025',
                        'Zakończenie budowy — Q3 2027',
                    ]}
                    link="https://www.fourseasons-mountain.pl"
                    linkLabel="www.fourseasons-mountain.pl"
                    imgSrc={i1}
                    imgAlt="Aparthotel Szczyrk"
                />
            </Container>

            <Container className='bg-[#FBFBFB]'>

                <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Zakończone inwestycje</H2>
                <P aos="fade-up" delay="200">Jeśli jesteś właścicielem nieruchomości z potencjałem inwestycyjnym – wyślij nam wiadomość.
                    Z przyjemnością ją przeanalizujemy i wrócimy z propozycją współpracy.
                </P>
                <A>Skontaktuj się z nami</A>

            </Container>

            <Container className='bg-[#FBFBFB]'>
                <div id="inwestycje_zakonczone" />
                <FeatureCard
                    title="Aparthotel Szczyrk"
                    location="Szczyrk"
                    features={[
                        'Inwestycja realizowana w Szczyrku przy ul. Wrzosowej',
                        'Aparthotel, ilość pokoi: 35, SPA',
                        'PUM 2 188 m2',
                        'Rozpoczęcie inwestycji — Q3 2025',
                        'Zakończenie budowy — Q3 2027',
                    ]}
                    link="https://www.fourseasons-mountain.pl"
                    linkLabel="www.fourseasons-mountain.pl"
                    imgSrc={i1}
                    imgAlt="Aparthotel Szczyrk"
                />
            </Container>

            <Container>
                <div id="zakup_gruntów" />
                <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Masz działkę, która może nas zainteresować?</H2>
                <P aos="fade-up" delay="200">Nasze aktualne projekty to kontynuacja filozofii tworzenia kameralnych, luksusowych przestrzeni w najbardziej prestiżowych lokalizacjach. Każda inwestycja powstaje z myślą o osobach ceniących najwyższą jakość, ponadczasową estetykę i komfort życia na co dzień.
                    Z dumą prezentujemy nasze bieżące realizacje – to unikalne miejsca, które łączą elegancką architekturę z funkcjonalnością, a wszystko to w otoczeniu zieleni, spokoju i doskonałej infrastruktury.
                </P>

            </Container>

            <FeatureImage src={dom3} title="Działka o wysokim potencjale?" subtitle="Projektujemy eleganckie, kameralne przestrzenie – z myślą o jakości życia i unikalnym charakterze miejsca." />

            <Contact />
            <Footer />
        </div >
    )
}

export default HomePage