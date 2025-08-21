import React, { useEffect } from 'react'
import Hero from '../blocks/Hero'
import Contact from '../blocks/Contact'
import Footer from '../blocks/Footer'
import Container from '../layout/Container'
import Section from '../layout/Section'
import H2 from '../ui/H2'
import P from '../ui/P'
import { useLocation } from 'react-router-dom'
import heroBg from '../../assets/images/image00003.png';
import NavBar from '../blocks/NavBar'
import TimeLine from '../blocks/TimeLine'
import FeatureImage from '../layout/FeatureImage'
import dom from '../../assets/images/Pylna_Dom_3_a.png'
import Ul from '../ui/Ul'
import Li from '../ui/Li'
import H3 from '../ui/H3'
import Button from '../ui/Button'


const Individual = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <div className='overflow-x-hidden'>
            <NavBar />
            <Hero
                bg={heroBg}
                header="DORADZTWO W PROCESIE BUDOWY DOMU"
                subHeader="Kompleksowe doradztwo w zakresie budowy wymarzonego domu."
            />

            <Container>

                <H2 className="text-center" separator={true}>DLACZEGO WARTO Z NAMI WSPÓŁPRACOWAĆ?</H2>

            </Container>

            <Container>
                <TimeLine
                    index={1}
                    header="Grunt to wiedza"
                    content="Rozpoczynasz nowe przedsięwzięcie i chcesz, by stało się sukcesem otwierającym kolejne możliwości rozwoju na rynku nieruchomości? Oferujemy wsparcie oparte na kompetencjach z zakresu doradztwa strategicznego. Nasz zespół składa się z fachowców, których wiedza i doświadczenie są niezbędne do zbudowania solidnej marki na rynku. Świadczymy kompleksowe usługi wsparcia i doradztwa przez cały okres trwania procesu deweloperskiego."
                />
                <TimeLine
                    index={2}
                    header="Od fundamentów"
                    content="Nasz zespół tworzą specjaliści, którzy od lat realizują projekty na terenie Krakowa i okolic. Dzięki ugruntowanemu doświadczeniu na rynku nieruchomości wiemy, jak zwiększyć rentowność inwestycji oraz jak optymalnie rozplanować działania, by przyspieszyć realizację projektu. Mamy w portfolio wiele pomyślnie zrealizowanych inwestycji. Stworzyliśmy skuteczne plany finansowania dla licznych projektów, a wypracowana strategia pozwala nam ze spokojem podchodzić do każdego etapu inwestycji."
                />
                <TimeLine
                    index={3}
                    header="Aż po dach"
                    content="Jak wygląda współpraca z naszym zespołem? Wsłuchujemy się w Twoją wizję i, w zależności od potrzeb, zapewniamy kontakt z odpowiednimi specjalistami na każdym etapie realizacji inwestycji. Dzięki temu zyskujesz dostęp do przemyślanej strategii oraz sprawdzonych rozwiązań w zakresie finansowania, budowy i sprzedaży projektu. Nasza pomoc w dopełnieniu niezbędnych formalności pozwoli zaoszczędzić Twój czas i pieniądze. W ramach doradztwa strategicznego oferujemy spotkania mentoringowe dla deweloperów na każdym etapie realizacji inwestycji.
                    Jeśli myśl o realizacji własnego pierwszego projektu deweloperskiego napędza Cię do działania, zrób to profesjonalnie - skorzystaj ze wsparcia fachowców i zwiększ swoje szanse na sukces. Od lat z powodzeniem przygotowujemy inwestycje, które budzą zainteresowanie już na etapie planowania. Dbamy o płynny przebieg kolejnych etapów procesu, usprawniając finansowanie i realizację inwestycji, co przekłada się na większy zysk inwestora."
                    isLast={true}
                />
            </Container>

            <FeatureImage src={dom} title="Wiedza, która przekłada się na zysk" subtitle="Strategiczne wsparcie na każdym etapie inwestycji – wiedza, doświadczenie i skuteczne narzędzia, które realnie zwiększają rentowność i przyspieszają realizację projektu." />

            <Container>
                <H2 className="text-center" separator={true}>TAK MOŻEMY CI POMÓC</H2>
                <P className='!font-semibold'>Wybierz pełny pakiet wsparcia lub zdecyduj, w którym z obszarów potrzebujesz doradztwa.</P>

            </Container>
            <Container>
                <H2 className="text-center" separator={true}>TWOJE KORZYŚCI</H2>
                <P>Twój sukces na rynku deweloperskim jest naszym priorytetem. Przejmujemy na siebie wszystkie złożone aspekty procesu inwestycyjnego, byś mógł skupić się na strategicznych decyzjach i rozwoju swojego biznesu.</P>
                <Ul>
                    <Li>Oszczędność czasu i energii - zajmujemy się wszystkimi szczegółami</Li>
                    <Li>Większy zysk dzięki optymalizacji kosztów i sprawnej sprzedaży</Li>
                    <Li>Minimalizacja ryzyka dzięki naszemu doświadczeniu</Li>
                    <Li>Terminowa realizacja zgodna z założeniami</Li>
                    <Li>Zadowoleni klienci i pozytywne referencje</Li>
                    <Li>Solidne podstawy do kolejnych inwestycji</Li>
                </Ul>
            </Container>

            <FeatureImage src={dom} title="Korzyści ze współpracy z KGD" subtitle="Kompleksowe wsparcie inwestycji – oszczędność czasu, większy zysk, mniejsze ryzyko i wysoka jakość realizacji, która buduje Twoją markę." />

            <Container className='bg-[#C9AB8B] mt-[120px]'>
                <H3 className='!font-extralight text-center text-white mb-[60px] lg:mb-[120px]'>Skorzystaj z naszego doświadczenia i zrealizuj swoją inwestycję jak profesjonalista. Umów się na bezpłatną konsultację, podczas której omówimy Twój projekt i przedstawimy konkretne rozwiązania</H3>
                <Section className='flex justify-center'>
                    <Button className="max-w-[620px]" type="secondary">Zadzwoń (+48) 607 186 161</Button>
                </Section>
            </Container>

            <Contact />
            <Footer />
        </div>
    )
}

export default Individual