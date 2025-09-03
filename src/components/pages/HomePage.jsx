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
        <div className='overflow-x-hidden'>
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

            <FeatureImage src={dom} title="KGD" subtitle="KGD to doświadczenie, jakość i lokalizacje z potencjałem – tworzymy unikalne projekty mieszkaniowe w segmencie premium." />

            <Container className='bg-[#FBFBFB] py-10 px-4'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-[16px] w-full">
                    <Card
                        aosDelay={100}
                        header="PUM ZREALIZOWANY"
                        content={'<span class="text-[#C9AB8B] font-medium">10</span> INWESTYCJI <br/><span class="text-[#C9AB8B] font-medium">7 960</span> PUM'}
                        icon={
                            <svg
                                width="98"
                                height="98"
                                viewBox="0 0 98 98"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className='mb-6 sm:mb-8 md:mb-[42px]'
                            >
                                <path
                                    d="M40.1225 0.03125L1.95753 20.9154H9.7266L37.4747 5.73132L34.1864 20.9154H38.0133L40.4212 9.79822L43.2665 20.9152H47.1275L43.0851 5.12082L85.27 20.9154H95.9019L40.1225 0.03125ZM0.982422 24.6417V30.8523H97.0175V24.6417H0.982422ZM7.6342 34.5787V40.7892H20.522V34.5787H7.6342ZM37.5672 34.5787V44.1016H43.8033V34.5787H37.5672ZM47.5449 34.5787V44.1016H51.5511L53.7809 41.8809V34.5787H47.5449ZM87.0398 34.5787V63.9148C87.6357 63.6814 88.2703 63.5616 88.9107 63.5614C89.5688 63.5614 90.1994 63.6877 90.7815 63.9148V34.5787H87.0398ZM37.5672 47.8279V97.9266H43.8033V47.8279H37.5672ZM88.9107 67.2877C88.0848 67.2877 87.4556 67.9144 87.4556 68.7369C87.4556 69.5594 88.0848 70.186 88.9107 70.186C89.7365 70.186 90.3657 69.5594 90.3657 68.7369C90.3657 67.9144 89.7365 67.2877 88.9107 67.2877ZM84.6716 71.7107L81.2582 76.8106H85.7544L87.7796 73.7854C86.5079 73.4989 85.4064 72.7421 84.6716 71.7107ZM93.1497 71.7107C92.4149 72.7419 91.3134 73.4989 90.0417 73.7854L92.0669 76.8106H96.5631L93.1497 71.7107ZM80.8038 80.537V86.7476H97.0175V80.537H80.8038ZM33.8256 85.609L21.2704 94.9869L23.5153 97.968L33.8256 90.2669V85.609ZM47.5449 85.609V90.2669L57.8551 97.968L60.1001 94.9869L47.5449 85.609Z"
                                    fill="#C9AB8B"
                                />
                            </svg>
                        }
                    />
                    <Card
                        aosDelay={150}
                        header="W TRAKCIE BUDOWY"
                        content={'<span class="text-[#C9AB8B] font-medium">7</span> INWESTYCJI <br/><span class="text-[#C9AB8B] font-medium">9000</span> PUM'}
                        icon={<svg width="98" height="98" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M94.5759 91.7167H90.5067V19.827C90.5067 18.998 90.2494 18.203 89.7915 17.6168C89.3337 17.0306 88.7126 16.7013 88.0651 16.7013H70.9741V3.15689C70.9741 2.32792 70.7169 1.5329 70.259 0.946729C69.8011 0.360557 69.1801 0.03125 68.5325 0.03125H29.4674C28.8199 0.03125 28.1988 0.360557 27.741 0.946729C27.2831 1.5329 27.0258 2.32792 27.0258 3.15689V33.3714H9.93485C9.2873 33.3714 8.66628 33.7007 8.20839 34.2869C7.75051 34.8731 7.49328 35.6681 7.49328 36.4971V91.7167H3.42399C2.77645 91.7167 2.15542 92.046 1.69754 92.6322C1.23966 93.2184 0.982422 94.0134 0.982422 94.8424C0.982422 95.6713 1.23966 96.4664 1.69754 97.0525C2.15542 97.6387 2.77645 97.968 3.42399 97.968H94.5759C95.2235 97.968 95.8445 97.6387 96.3024 97.0525C96.7603 96.4664 97.0175 95.6713 97.0175 94.8424C97.0175 94.0134 96.7603 93.2184 96.3024 92.6322C95.8445 92.046 95.2235 91.7167 94.5759 91.7167ZM12.3764 39.6227H29.4674C30.115 39.6227 30.736 39.2934 31.1939 38.7072C31.6517 38.1211 31.909 37.326 31.909 36.4971V6.28253H66.091V19.827C66.091 20.656 66.3482 21.451 66.8061 22.0371C67.264 22.6233 67.885 22.9526 68.5325 22.9526H85.6235V91.7167H57.9524V69.8372C57.9524 69.0083 57.6952 68.2132 57.2373 67.6271C56.7794 67.0409 56.1584 66.7116 55.5108 66.7116H42.4891C41.8416 66.7116 41.2206 67.0409 40.7627 67.6271C40.3048 68.2132 40.0475 69.0083 40.0475 69.8372V91.7167H12.3764V39.6227ZM53.0693 91.7167H44.9307V72.9629H53.0693V91.7167ZM43.303 19.827C43.303 18.998 43.5602 18.203 44.0181 17.6168C44.476 17.0306 45.097 16.7013 45.7445 16.7013H52.2554C52.9029 16.7013 53.524 17.0306 53.9818 17.6168C54.4397 18.203 54.697 18.998 54.697 19.827C54.697 20.656 54.4397 21.451 53.9818 22.0371C53.524 22.6233 52.9029 22.9526 52.2554 22.9526H45.7445C45.097 22.9526 44.476 22.6233 44.0181 22.0371C43.5602 21.451 43.303 20.656 43.303 19.827ZM43.303 36.4971C43.303 35.6681 43.5602 34.8731 44.0181 34.2869C44.476 33.7007 45.097 33.3714 45.7445 33.3714H52.2554C52.9029 33.3714 53.524 33.7007 53.9818 34.2869C54.4397 34.8731 54.697 35.6681 54.697 36.4971C54.697 37.326 54.4397 38.1211 53.9818 38.7072C53.524 39.2934 52.9029 39.6227 52.2554 39.6227H45.7445C45.097 39.6227 44.476 39.2934 44.0181 38.7072C43.5602 38.1211 43.303 37.326 43.303 36.4971ZM66.091 36.4971C66.091 35.6681 66.3482 34.8731 66.8061 34.2869C67.264 33.7007 67.885 33.3714 68.5325 33.3714H75.0434C75.6909 33.3714 76.312 33.7007 76.7698 34.2869C77.2277 34.8731 77.485 35.6681 77.485 36.4971C77.485 37.326 77.2277 38.1211 76.7698 38.7072C76.312 39.2934 75.6909 39.6227 75.0434 39.6227H68.5325C67.885 39.6227 67.264 39.2934 66.8061 38.7072C66.3482 38.1211 66.091 37.326 66.091 36.4971ZM31.909 53.1672C31.909 53.9961 31.6517 54.7911 31.1939 55.3773C30.736 55.9635 30.115 56.2928 29.4674 56.2928H22.9566C22.309 56.2928 21.688 55.9635 21.2301 55.3773C20.7722 54.7911 20.515 53.9961 20.515 53.1672C20.515 52.3382 20.7722 51.5432 21.2301 50.957C21.688 50.3708 22.309 50.0415 22.9566 50.0415H29.4674C30.115 50.0415 30.736 50.3708 31.1939 50.957C31.6517 51.5432 31.909 52.3382 31.909 53.1672ZM31.909 69.8372C31.909 70.6662 31.6517 71.4612 31.1939 72.0474C30.736 72.6336 30.115 72.9629 29.4674 72.9629H22.9566C22.309 72.9629 21.688 72.6336 21.2301 72.0474C20.7722 71.4612 20.515 70.6662 20.515 69.8372C20.515 69.0083 20.7722 68.2132 21.2301 67.6271C21.688 67.0409 22.309 66.7116 22.9566 66.7116H29.4674C30.115 66.7116 30.736 67.0409 31.1939 67.6271C31.6517 68.2132 31.909 69.0083 31.909 69.8372ZM43.303 53.1672C43.303 52.3382 43.5602 51.5432 44.0181 50.957C44.476 50.3708 45.097 50.0415 45.7445 50.0415H52.2554C52.9029 50.0415 53.524 50.3708 53.9818 50.957C54.4397 51.5432 54.697 52.3382 54.697 53.1672C54.697 53.9961 54.4397 54.7911 53.9818 55.3773C53.524 55.9635 52.9029 56.2928 52.2554 56.2928H45.7445C45.097 56.2928 44.476 55.9635 44.0181 55.3773C43.5602 54.7911 43.303 53.9961 43.303 53.1672ZM66.091 53.1672C66.091 52.3382 66.3482 51.5432 66.8061 50.957C67.264 50.3708 67.885 50.0415 68.5325 50.0415H75.0434C75.6909 50.0415 76.312 50.3708 76.7698 50.957C77.2277 51.5432 77.485 52.3382 77.485 53.1672C77.485 53.9961 77.2277 54.7911 76.7698 55.3773C76.312 55.9635 75.6909 56.2928 75.0434 56.2928H68.5325C67.885 56.2928 67.264 55.9635 66.8061 55.3773C66.3482 54.7911 66.091 53.9961 66.091 53.1672ZM66.091 69.8372C66.091 69.0083 66.3482 68.2132 66.8061 67.6271C67.264 67.0409 67.885 66.7116 68.5325 66.7116H75.0434C75.6909 66.7116 76.312 67.0409 76.7698 67.6271C77.2277 68.2132 77.485 69.0083 77.485 69.8372C77.485 70.6662 77.2277 71.4612 76.7698 72.0474C76.312 72.6336 75.6909 72.9629 75.0434 72.9629H68.5325C67.885 72.9629 67.264 72.6336 66.8061 72.0474C66.3482 71.4612 66.091 70.6662 66.091 69.8372Z" fill="#C9AB8B" />
                        </svg>

                        }
                    />
                    <Card
                        aosDelay={200}
                        header="INWESTYCJE NA ETAPIE PROJEKTOWYM"
                        content={'<span class="text-[#C9AB8B] font-medium">7</span> INWESTYCJI <br/><span class="text-[#C9AB8B] font-medium">19 900</span> PUM'}
                        icon={<svg width="59" height="100" viewBox="0 0 59 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.38209 99.2862L0.601562 93.1935L15.5184 51.7208C16.3008 52.412 17.1083 52.9556 17.9409 53.3517C18.7735 53.7517 19.6349 54.0818 20.5253 54.3419L5.95542 94.9642L1.38209 99.2862ZM57.6381 99.2862L53.059 94.9642L38.4891 54.3478C39.3833 54.0837 40.2467 53.7536 41.0793 53.3576C41.9118 52.9576 42.7174 52.4139 43.496 51.7266L58.4186 93.1935L57.6381 99.2862ZM29.5101 44.399C25.5091 44.399 22.0979 42.9816 19.2765 40.1469C16.4627 37.3005 15.0558 33.8638 15.0558 29.837C15.0558 26.0508 16.2314 22.8821 18.5827 20.3309C20.9377 17.7835 23.6166 16.2632 26.6192 15.77V0.712891H32.4009V15.77C35.4036 16.2632 38.0824 17.7835 40.4375 20.3309C42.7887 22.8821 43.9643 26.0508 43.9643 29.837C43.9643 33.8677 42.5575 37.3044 39.7437 40.1469C36.9222 42.9816 33.511 44.399 29.5101 44.399ZM29.5101 38.5742C31.8883 38.5742 33.9292 37.7179 35.6329 36.0054C37.3327 34.2891 38.1826 32.2329 38.1826 29.837C38.1826 27.441 37.3327 25.3849 35.6329 23.6685C33.9292 21.956 31.8883 21.0997 29.5101 21.0997C27.1319 21.0997 25.0909 21.956 23.3873 23.6685C21.6874 25.3849 20.8375 27.441 20.8375 29.837C20.8375 32.2329 21.6874 34.2891 23.3873 36.0054C25.0909 37.7179 27.1319 38.5742 29.5101 38.5742Z" fill="#C9AB8B" />
                        </svg>

                        }
                    />
                    <Card
                        aosDelay={250}
                        header="WARTOŚĆ INWESTYCJI DEWELOPERSKICH"
                        content={'<span class="text-[#C9AB8B] font-medium">592 000 000 zł</span>'}
                        icon={<svg width="108" height="104" viewBox="0 0 108 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M72.53 68.3129C72.53 63.1626 58.0117 58.9911 40.1025 58.9911M72.53 68.3129C72.53 73.4632 58.0117 77.6347 40.1025 77.6347C22.1933 77.6347 7.67509 73.4632 7.67509 68.3129M72.53 68.3129V91.3237C72.53 96.6324 58.0117 100.939 40.1025 100.939C22.1933 100.939 7.67509 96.6371 7.67509 91.3237V68.3129M72.53 68.3129C90.2446 68.3129 104.957 63.7126 104.957 58.9911V12.3823M40.1025 58.9911C22.1933 58.9911 7.67509 63.1626 7.67509 68.3129M40.1025 58.9911C19.6362 58.9911 3.0426 54.3909 3.0426 49.6694V26.365M40.1025 17.0432C19.6362 17.0432 3.0426 21.2147 3.0426 26.365M3.0426 26.365C3.0426 31.5152 19.6362 35.6867 40.1025 35.6867C40.1025 40.4082 55.172 45.0085 72.8867 45.0085C90.5967 45.0085 104.957 40.4082 104.957 35.6867M104.957 12.3823C104.957 7.23204 90.5967 3.06055 72.8867 3.06055C55.172 3.06055 40.8159 7.23204 40.8159 12.3823M104.957 12.3823C104.957 17.5326 90.5967 21.7041 72.8867 21.7041C55.1766 21.7041 40.8159 17.5326 40.8159 12.3823M40.8159 12.3823V59.7649" stroke="#C9AB8B" strokeWidth="6" />
                        </svg>
                        }
                    />
                </div>
            </Container>

            <Container>
                <div id="inwestycje" />
                <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Aktualne inwestycje</H2>
                <P aos="fade-up" delay="200">Nasze aktualne projekty to kontynuacja filozofii tworzenia kameralnych, luksusowych przestrzeni w najbardziej prestiżowych lokalizacjach. Każda inwestycja powstaje z myślą o osobach ceniących najwyższą jakość, ponadczasową estetykę i komfort życia.
                    Z dumą prezentujemy nasze bieżące realizacje – to unikalne miejsca, które łączą elegancką architekturę z funkcjonalnością, a wszystko to w otoczeniu zieleni, spokoju i doskonałej infrastruktury.
                </P>

            </Container>

            <Container className="grid gap-[120px]">
                <div id="inwestycje_aktualne" />
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
            </Container>

            <Container className='bg-[#FBFBFB]'>

                <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Zakończone inwestycje</H2>
                <P aos="fade-up" delay="200">Jeśli jesteś właścicielem nieruchomości z potencjałem inwestycyjnym – wyślij nam wiadomość.
                    Z przyjemnością ją przeanalizujemy i wrócimy z propozycją współpracy.
                </P>
                <div className="flex items-center justify-center">
                    <HashLink className="
                font-poppins
                text-[16px] sm:text-[24px] md:text-[24px] lg:text-[24px]/[48px]
                text-[#C9AB8B]
                
                cursor-pointer
                transition-all duration-200 border-4 px-4 py-2 mt-8
                " smooth to={"/#kontakt"}>Skontaktuj się z nami</HashLink>
                </div>
            </Container>

            <Container className='bg-[#FBFBFB] grid gap-[120px]'>
                <div id="inwestycje_zakonczone" />
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
            </Container>

            <Container>
                <div id="dla_inwestora" />
                <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Dla inwestora</H2>
                <P aos="fade-up" delay="200">
                    Nasz zespół to wykształceni i doświadczeni specjaliści, a wśród nich prawnicy, księgowi, architekci, projektanci, agenci nieruchomości, fachowcy budowlani czy doradcy finansowi. Zakres oraz jakość naszych działań pozwolą Ci nie tylko zamieszkać z klasą, lecz również poczuć komfort i bezpieczeństwo podczas realizacji Twojej inwestycji.
                </P>
                <Ul className="py-8 sm:py-12 md:py-[73px]" aos="fade-up" delay="200">
                    <Li>pełne bezpieczeństwo Twojego kapitału</Li>
                    <Li>wysokie i gwarantowane stopy zwrotu</Li>
                    <Li>topowe lokalizacje</Li>
                    <Li>zróżnicowane inwestycje</Li>
                    <Li>zespół doświadczonych fachowców</Li>
                    <Li>prosty i przejrzysty model działania</Li>
                    <Li>doradztwo prawne, księgowe i finansowe</Li>
                </Ul>
                <P className='underline' aos="fade-up" delay="400">Zapraszamy Inwestorów do wspólnych projektów deweloperskich.</P>
            </Container>


            <Container className='bg-[#FBFBFB]'>
                <div id="zakup_gruntów" />
                <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Masz działkę, która może nas zainteresować?</H2>
                <P aos="fade-up" delay="200">Nasze aktualne projekty to kontynuacja filozofii tworzenia kameralnych, luksusowych przestrzeni w najbardziej prestiżowych lokalizacjach. Każda inwestycja powstaje z myślą o osobach ceniących najwyższą jakość, ponadczasową estetykę i komfort życia.
                    Z dumą prezentujemy nasze bieżące realizacje – to unikalne miejsca, które łączą elegancką architekturę z funkcjonalnością, a wszystko to w otoczeniu zieleni, spokoju i doskonałej infrastruktury.
                </P>

            </Container>

            <FeatureImage src={dom3} title="Działka o wysokim potencjale?" subtitle="Projektujemy eleganckie, kameralne przestrzenie – z myślą o jakości życia i unikalnym charakterze miejsca." />

            <Container className='bg-[#FBFBFB]'>
                <div id="kgd_building" />
                <div id="osoba_prywatna" />
                <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Dla osoby prywatnej</H2>
                <P aos="fade-up" delay="200">Twój wymarzony dom – zaprojektowany i zbudowany przez ekspertów. Powiedz nam, jak chcesz mieszkać – my zajmiemy się resztą. Realizujemy indywidualne projekty domów jednorodzinnych, willi i rezydencji w najwyższym standardzie.</P>
                <div className="flex items-center justify-center">
                    <Link to="/indywidualna" className='
                font-poppins
                text-[16px] sm:text-[24px] md:text-[24px] lg:text-[24px]/[48px]
                text-[#C9AB8B]
                
                cursor-pointer
                transition-all duration-200 border-4 px-4 py-2 mt-8'>Zobacz ofertę</Link>
                </div>

            </Container>

            <FeatureImage src={dom1} title="Twój wymarzony dom zaprojektowany i zbudowany przez ekspertów" subtitle="Rezydencje i wille szyte na miarę – architektura, wykonawstwo i nadzór w jednej ręce." />

            <Container className='bg-[#FBFBFB]'>
                <div id="dla_dewelopera" />
                <H2 aos="fade-up" delay="100" className="text-center" separator={true}>Dla dewelopera</H2>
                <P aos="fade-up" delay="200">Wspieramy  deweloperów – od projektu po sprzedaż.
                    Masz grunt i pomysł na inwestycję, ale brakuje Ci czasu, zespołu lub doświadczenia? KGD wesprze Cię na każdym etapie prowadzenia małego projektu deweloperskiego.</P>
                <div className="flex items-center justify-center">
                    <Link to="/deweloper" className='
                font-poppins
                text-[16px] sm:text-[24px] md:text-[24px] lg:text-[24px]/[48px]
                text-[#C9AB8B]
                
                cursor-pointer
                transition-all duration-200 border-4 px-4 py-2 mt-8'>Zobacz ofertę</Link>
                </div>

            </Container>

            <FeatureImage src={dom2} title="Wspieramy deweloperów od projektu po sprzedaż" subtitle="Strategiczne wsparcie dla kameralnych inwestycji premium – doświadczenie, zespół i pełna realizacja pod marką KGD." />

            <Contact />
            <Footer />
        </div >
    )
}

export default HomePage