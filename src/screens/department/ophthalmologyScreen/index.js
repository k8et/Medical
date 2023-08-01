import styles from "../../department/style.module.css";
import img from "../../../assets/img/oftalmologiya_img.jpg";
import {menuItems} from "../../../untils/mock";
import {Link} from "react-router-dom";
import img2 from "../../../assets/img/oftalmologiya img 2.jpg";
import Reviews from "../../../components/reviews";
import ServiceClinicList from "../../../components/serviceAll/serviceClinicList";
import {useDocData} from "../../../untils/hooks/useDocData";



const OphthalmologyScreen = () => {
    const docs = useDocData()
    return (
        <div className={styles.main}>
            <img className={styles.img} src={img} alt=""/>
            <div className={styles.mainComp}>
                {menuItems.filter(menu => menu.id === 0).map((menu, index) => (
                    <div className={styles.leftSide} key={index}>
                        <h3>{menu.title}</h3>
                        {menu.items.map((item, index) => (
                            <Link key={index} className={styles.link} to={item.url}><p style={{color: 'black'}}>{item.label}</p>
                            </Link>
                        ))}
                    </div>
                ))}
                <div className={styles.rightSide}>
                    <h1>ОФТАЛЬМОЛОГИЯ</h1>
                    <img src={img2} alt=""/>
                    <p>Офтальмолог – это врач, который специализируется на диагностике и лечении глазных заболеваний.
                        Его консультация необходима при ухудшении остроты зрения, появлении мушек перед глазами и других
                        зрительных нарушениях. Кроме того, посещать врача следует и в профилактических целях – людям
                        старше 45 лет, а также имеющим факторы риска рекомендуют это делать не реже 1 раза в год. </p>
                    <h1>КОГДА НУЖНА КОНСУЛЬТАЦИЯ ОФТАЛЬМОЛОГА?</h1>
                    <p>Большинство пациентов записываются на прием к окулисту только при ухудшении зрения. Но
                        периодически обследоваться нужно даже при отсутствии жалоб. В частности, посещать врача раз в
                        год или чаще рекомендуют, если есть следующие факторы риска:</p>
                    <li>
                        <span>ранее диагностированные болезни глаз;</span>
                    </li>
                    <li>
                        <span>семейный анамнез (проблемы со зрением у близких родственников);</span>
                    </li>
                    <li>
                        <span>хронические заболевания (сахарный диабет, атеросклероз, нефропатия, гипертония и пр.);</span>
                    </li>
                    <li>
                        <span>гормональные нарушения;</span>
                    </li>
                    <li>
                        <span>травмы глаз;</span>
                    </li>
                    <li>
                        <span>возраст старше 45 лет.</span>
                    </li>
                    <p>Детям школьного возраста проверять зрение нужно раз в 6-12 месяцев. Из-за увеличения нагрузки на
                        глаза, быстрого роста и гормональной перестройки организма в этот период повышается риск
                        развития близорукости и других нарушений.</p>
                    <h1>СИМПТОМЫ ЗАБОЛЕВАНИЙ ГЛАЗ</h1>
                    <p>Заболевания глаз могут сопровождаться не только ухудшением зрения, но и другими симптомами, а
                        именно:</p>
                    <li>
                        <span>помутнением в глазах после пробуждения и при резком вставании;</span>
                    </li>
                    <li>
                        <span>снижением четкости зрения при наступлении сумерек;</span>
                    </li>
                    <li>
                        <span>уменьшением поля зрения;</span>
                    </li>
                    <li>
                        <span>образованием размытого контура, цветных кругов вокруг разных вещей;</span>
                    </li>
                    <li>
                        <span>возникновением «мушек», «тумана» перед глазами;</span>
                    </li>
                    <li>
                        <span>отеком век и т.д.</span>
                    </li>
                    <p>Такие нарушения могут возникать при разных заболеваниях глаз, а также как осложнения системных
                        патологий. Выяснить точный диагноз можно только по результатам диагностики.</p>
                    <h1>ДИАГНОСТИКА ЗРЕНИЯ</h1>
                    <p>В «Клинико-Диагностический Центр» диагностику зрения проводят с помощью современного
                        компьютерного оборудования экспертного класса. Оно позволяет выявлять заболевания на самых
                        ранних стадиях и максимально точно определять тип и степень нарушений.

                        При первом обращении офтальмолог проверят остроту зрения пациента, а также изучает его жалобы и
                        историю болезни. Иногда на основе этого врач сразу ставит диагноз и назначает лечение или
                        подбирает средства коррекции зрения. При необходимости провести более тщательную диагностику
                        специалист может назначить дополнительные обследования.

                        В клинике «Клинико-Диогностический Центр» применяют такие инструментальные методы диагностики
                        заболеваний глаз:</p>
                    <li>
                        <span>визиометрия – оценка остроты зрения;</span>
                    </li>
                    <li>
                        <span>авторефрактометрия – определение рефракции глаза</span>
                    </li>
                    <li>
                        <span>офтальмоскопия – осмотр глазного дна</span>
                    </li>
                    <li>
                        <span>тонометрия – измерение внутриглазного давления бесконтактным методом;</span>
                    </li>
                    <li>
                        <span>биомикроскопия – осмотр переднего отрезка глаза щелевой лампой;</span>
                    </li>
                    <li>
                        <span>оптическая когерентная томография (ОКТ) – детальная визуализация разных тканей глаза.</span>
                    </li>
                    <p>Эти исследования позволяют поставить точный диагноз и подобрать оптимальный метод лечения. С их
                        помощью можно на ранней стадии диагностировать глаукому и другие серьезные заболевания, которые
                        без своевременной терапии грозят потерей зрения.</p>
                    <h1>КАКИЕ ЗАБОЛЕВАНИЯ ЛЕЧАТ ОФТАЛЬМОЛОГИ?</h1>
                    <p>Пациенты выбирают клинику из-за ряда преимуществ:</p>
                    <li>
                        <span>миопия (близорукость) – снижение остроты зрения на большом расстоянии;</span>
                    </li>
                    <li>
                        <span>гиперметропия (дальнозоркость) – снижение остроты зрения на близком расстоянии</span>
                    </li>
                    <li>
                        <span>астигматизм – нарушение рефракции глаза из-за изменения формы роговицы;</span>
                    </li>
                    <li>
                        <span>косоглазие – нарушение положения глаз;</span>
                    </li>
                    <li>
                        <span>глаукома – нарушение оттока жидкости из глаза;</span>
                    </li>
                    <li>
                        <span>катаракта – помутнение хрусталика;</span>
                    </li>
                    <li>
                        <span>травмы глаза и т.д.</span>
                    </li>
                    <h3>ПРЕИМУЩЕСТВА ОТДЕЛЕНИЯ ОФТАЛЬМОЛОГИИ</h3>
                    <p>Кроме диагностики, специалисты клиники также проводят медикаментозное лечение,
                        физиотерапевтические процедуры и хирургические операции при глаукоме, катаракте и других
                        заболеваниях глаз. В хирургии используются инновационные оперативные методики, сертифицированные
                        препараты и искусственные хрусталики европейских и американских производителей.
                        <br/> <br/>
                        Преимущества офтальмологии:</p>
                    <li><span>проведение компьютерной диагностики на оборудовании экспертного класса;</span></li>
                    <li><span>максимальная точность результатов обследований;</span></li>
                    <li><span>высокая квалификация и многолетний опыт врачей;</span></li>
                    <li><span>комфортные условия посещения клиники;</span></li>
                    <li><span>программа лояльности для постоянных пациентов.</span></li>
                </div>
            </div>
            <div className={styles.ourSpec}>
                <h1>
                    НАШИ <span>СПЕЦИАЛИСТЫ</span>
                </h1>
                <p>
                    <Link className={styles.link} to={'/doc'}>Все специалисты</Link>
                </p>
            </div>
            <div className={styles.cardCon}>
                {docs
                    .filter(item => ['7'].includes(item.id))
                    .map((item) => (
                        <div className={styles.card} key={item.id}>
                            <img src={item.img} alt="doc"/>
                            <h1>{item.name}</h1>
                            <p>Стаж {item.exp} лет</p>
                            <p>{item.category}</p>
                        </div>
                    ))}
            </div>
            <ServiceClinicList>
            </ServiceClinicList>
            <Reviews>
            </Reviews>
        </div>
    );
};

export default OphthalmologyScreen;