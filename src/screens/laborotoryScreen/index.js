import React from 'react';
import styles from "./style.module.css";
import lab1 from '../../assets/img/lab1.jpg'
import lab2 from '../../assets/img/lab2.jpg'
import lab3 from '../../assets/img/lab3.jpg'
const LaborotoryScreen = () => {
    return (
        <div className={styles.main}>
            <div className={styles.labPos}>
                <h1>Централизованая лаборатория</h1>
                <p>
                    На базе Клинического диагностического центра располагается самая современная лаборатория, оснащенная
                    уникальным высокопроизводительным оборудованием. Фактически это единственный в регионе
                    высокотехнологичный лабораторный комплекс, созданный в государственном секторе медицинских услуг на
                    основе информатизации и автоматизации основных процессов.
                </p>
                <img src={lab1} alt="img"/>
                    <p>Централизованная лаборатория Клинического диагностического центра выполняет огромный спектр
                        исследований:</p>
                    <ul>
                        <li>Биохимические исследования (более 70 показателей);</li>
                        <li>Гематологические исследования (общий анализ крови, развёрнутый анализ крови – более 30
                            показателей);
                        </li>
                        <li>Диагностика и мониторинг сахарного диабета (полный спектр маркеров);</li>
                        <li>Оценка системы гемостаза (коагулограмма, факторы свёртывающей системы);</li>
                        <li>Определение биомаркеров аутоиммунных заболеваний (диагностика всех видов аутоиммунной
                            патологии);
                        </li>
                        <li>Определение биомаркеров различных инфекций (герпес, цитомегаловирус, токсоплазма, гельминты
                            и др.);
                        </li>
                        <li>Определение гормонов и онкомаркеров (маркеры патологии щитовидной железы, ранняя диагностика
                            рака толстого кишечника, молочной железы, щитовидной железы, желудка и поджелудочной железы,
                            предстательной железы и др.);
                        </li>
                        <li>Определение маркеров повреждения сердечно-сосудистой системы и др. систем (липидный спектр,
                            ранняя диагностика сердечной недостаточности, предрасположенности к атеросклерозу и др.);
                        </li>
                        <li>Диагностика аллергии (к ингаляционным и пищевым аллергенам);</li>
                        <li>Диагностика остеопороза (витамин Д, кальцитонин, паратиреоидный гормон).</li>
                    </ul>
                    <p>
                        Непрерывно совершенствуется система взаимодействия с медицинскими учреждениями, внедряются новые
                        информационные и лабораторные технологии, идет дооснащение высокоинтеллектуальными
                        анализаторами, проводится подготовка специалистов высшего и среднего звеньев к работе на новом
                        оборудовании, дорабатывается информационная система под развитие лаборатории, отработан новый
                        механизм инженерно-технического сопровождения анализаторов для безостановочной работы
                        подразделения.
                    </p>
                    <ul>
                        <li>Ежегодно выполняется более 4 млн лабораторных исследований.</li>
                        <li>Современное оборудование, автоматизация процессов,<br/> высокопрофессиональный коллектив.
                        </li>
                        <li>Гарантия безопасности и точности результатов.</li>
                        <li>Высокая скорость выполнения исследований.</li>
                    </ul>
                    <h3>Уникальное оборудование</h3>
                    <p>В Централизованной лаборатории диагностический процесс полностью автоматизирован: начиная от
                        поступления пробирок с биоматериалом (образцами крови) до формирования архива проб.</p>
                    <div className={styles.textImg}>
                        <p>
                            Первый этап большого пути к анализу осуществляет автоматизированная система пре-и
                            постаналитической обработки образцов «Automate 2550», которая позволяет безошибочно
                            идентифицировать биопробы по штрих-кодированию, сверяет соответствие вакуумной пробирки
                            заказанным тестам, проверяет качество биоматериала (гемолиз, липидемия), осуществляет
                            отметку дефектуры, а также распределяет пробы по автоматическим анализаторам с формированием
                            рабочих листов.
                            Лабораторные исследования выполняются на 33 современных высокотехнологических автоматических
                            анализаторах.
                        </p>
                        <img src={lab2} alt="img"/>
                    </div>
                    <div className={styles.sysmex}>
                        <img src={lab3} alt="img"/>
                            <p>Общий (клинический) анализ крови выполняется на уникальном, полностью автоматизированном
                                гематологическом анализаторе «Sysmeх ХN -9000». Обеспечивает высококачественную
                                диагностику и автоматически предоставляет исчерпывающие данные по форменным элементам
                                крови для каждого анализа с определением 48 показателей. Гематологический анализатор
                                «Sysmeх ХN -9000» самый современный в Омской области , который обладает наивысшей
                                степенью автоматизации, что позволяет исключать аналитические ошибки. По результатам
                                исследований можно получить необходимую информацию о состоянии организма, течении
                                заболевания и назначить полноценное лечение. </p>
                    </div>
            </div>
        </div>
    );
};

export default LaborotoryScreen;