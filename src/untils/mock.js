import doc3 from '../../src/assets/img/doc3.jpg';
import doc2f from '../../src/assets/img/doc2f.jpg';
import doc5 from '../../src/assets/img/doc5.jpg';
import doc6 from '../../src/assets/img/doc6.jpg';
import doc4 from '../../src/assets/img/doc4.jpg';
import doc10 from '../../src/assets/img/doc10.jpg';
import doc8 from '../../src/assets/img/doc8.jpg';
import doc14 from '../../src/assets/img/doc14.jpg';
import doc11 from '../../src/assets/img/doc11.jpg';
import doc12 from '../../src/assets/img/doc12.jpg';
import doc15 from '../../src/assets/img/doc15.jpg';
import doc13 from '../../src/assets/img/doc13.jpg';
import doc16 from '../../src/assets/img/doc16.jpg';
import doc17 from '../../src/assets/img/doc17.jpg';
import doc18 from '../../src/assets/img/doc18.jpg';
import doc22 from '../../src/assets/img/doc22.jpg';
import doc20 from '../../src/assets/img/doc20.jpg';
import doc21 from '../../src/assets/img/doc21.jpg';
import doc23 from '../../src/assets/img/doc23.jpg';
import doc24 from '../../src/assets/img/doc24.jpg';

export const menuItems = [

    {
        id: 0,
        title: 'ПОЛИКЛИНИКА',
        items: [{label: 'Проктология', url: `/proctology`}, {
            label: 'Гинекология',
            url: '/gynecology'
        }, {label: 'Урология', url: '/urology'}, {label: 'Неврология', url: '/neurology'}, {
            label: 'Кардиология',
            url: '/cardiology'
        }, {label: 'Офтальмология', url: '/ophthalmology'},],
    }, {
        id: 1,
        title: 'СТОМАТОЛОГИЯ',
        items: [{label: 'Стоматология во сне', url: '/dreamDentistry'}, {
            label: 'Лечение зубов под микроскопом',
            url: '/dentalTreatment'
        }, // { label: 'Керамические виниры', url: '/' },
            // { label: 'Удаления кариеса', url: '/' },
            // { label: 'Лечение зубов', url: '/' },
            // { label: 'Парадонтология', url: '/' },
        ],
    }, {
        id: 2, title: 'ДИАГНОСТИКА', items: [// { label: 'Амбулаторный прием', url: '/' },
            // { label: 'Регистрация ЭКГ', url: '/' },
            {label: 'Биопсия шейки матки', url: '/biopsy'}, // { label: 'Эхокардиография', url: '/' },
            {label: 'УЗИ-диагностика', url: '/ultraSound'}, // { label: 'Маммография', url: '/' },
        ],
    },];
export const doctorsData = [{
    id: 1,
    name: 'Хисамиев Ильдар Гамилевич',
    experience: 15,
    category: 'Врач-стоматолог ІІ категории.',
    image: doc3
}, {
    id: 2,
    name: 'Валеева Кадрия Гусмановна',
    experience: 30,
    category: 'Врач репродуктолог, гинеколог высшей категории',
    image: doc2f
}, {
    id: 3,
    name: 'Хайруллин Наиль Талгатович',
    experience: 5,
    category: 'Врач уролог-андролог высшей категории',
    image: doc5
}, {
    id: 4,
    name: 'Шакиров Мансур Исхакович',
    experience: 10,
    category: 'Врач проктолог 1 категории',
    image: doc6
}, {id: 6, name: 'Назипова Альфия Якуповна', experience: 14, category: 'Невролог І категории.', image: doc4}, {
    id: 7,
    name: 'Шурмин Дмитрий Юрьевич',
    experience: 9,
    category: 'Врач-кардиолог ІІ категории',
    image: doc10
}, {id: 8, name: 'Курбанова Алсу Ахметовна', experience: 12, category: 'Врач-офтальмолог', image: doc8}, {
    id: 9, name: 'Хамитова Альбина Ренатовна', experience: 5, category: 'Стоматолог, стоматолог-ортодонт.', image: doc14
}, {
    id: 10,
    name: 'Зайдуллин Дамир Галимуллович',
    experience: 10,
    category: 'Врач-стоматолог ІІ категории.',
    image: doc11
}, {
    id: 11, name: 'Закиров Ленар Габдельбарович', experience: 6, category: 'Врач-стоматолог ІІ категории.', image: doc12
}, {
    id: 12,
    name: 'Филиппова Наталия Евгеньевна',
    experience: 17,
    category: 'Стоматолог-имплантолог, стоматолог, стоматолог-ортопед, стоматолог-хирург.',
    image: doc15
}, {
    id: 13,
    name: 'Юсупов Рамиль Ильдарович',
    experience: 30,
    category: 'Стоматолог-ортопед, стоматолог-хирург, стоматолог-имплантолог, стоматолог.',
    image: doc13
}, {
    id: 14, name: 'Николаев Сергей Викторович', experience: 11, category: 'Врач-стоматолог ІІ категории.', image: doc16
}, {
    id: 15,
    name: 'Гумеров Ильназ Ильдусович',
    experience: 7,
    category: 'Маммолог, онколог-дерматолог, онколог-маммолог,',
    image: doc17
}, {id: 16, name: 'Мухина Равия Гаязовна', experience: 15, category: 'Гинеколог, врач УЗИ', image: doc18}, {
    id: 17,
    name: 'Ахметова Дина Камилевна',
    experience: 3,
    category: 'Заведующий, врач клинической лабораторной диагностики',
    image: doc22
}, {
    id: 18,
    name: 'Мельников Евгений Анатольевич',
    experience: 20,
    category: 'Врач УЗИ диагностики I категории',
    image: doc20
}, {
    id: 19,
    name: 'Габасов Марсель Винерович',
    experience: 17,
    category: 'Гастроэнтеролог, кардиолог, ревматолог, терапевт',
    image: doc21
}, {id: 20, name: 'Гимадиева Лилия Фаридовна', experience: 8, category: 'Врач-лаборант', image: doc23}, {
    id: 21,
    name: 'Глухань Галина Владисировна',
    experience: 9,
    category: 'Врач проктолог 2 категории',
    image: doc24
}];
export const servicesDoctor = [{
    id: 1,
    category: 'Проктология',
    doc1: 'Шакиров Мансур Исхакович',
    doc2: "Глухань Галина Владисировна",
    services: [{service1: "Косультация проктолога", price1: "1500руб"}, {
        service2: "Консультация ведущего специалиста",
        price2: "2000грн"
    }, {service3: "Аноскопия", price3: "700руб"}, {service4: "Ректороманоскопия", price4: "1000руб"}]
}, {
    id: 2,
    category: 'Гинекология',
    doc1: 'Валеева Кадрия Гусмановна',
    doc2: "Мухина Равия Гаязовна",
    services: [{
        service1: "Консультация врача гинеколога",
        price1: "1500грн"
    }, {service2: "Консультация ведущего специалиста", price2: "2000руб"}, {
        service3: "Гигиеническое обучение",
        price3: "750грн"
    }, {service4: "Микроклизма", price4: "500руб"}]
}, {
    id: 3,
    category: 'Урология',
    doc1: 'Хайруллин Наиль Талгатович',
    services: [{
        service1: "Консультация врача уролога",
        price1: "1500грн"
    }, {
        service2: "Массаж предстательной железы (1 процедура)",
        price2: "1200грн"
    }, {service3: "Инстилляция мочевого пузыря", price3: "800грн"}, {
        service4: "Замена эпицистостомы",
        price4: "1400руб"
    }]
}, {
    id: 4,
    category: 'Неврология',
    doc1: 'Назипова Альфия Якуповна',
    services: [{
        service1: "Первичный прием невролога",
        price1: "1500грн"
    }, {
        service2: "Постизометрическая релаксация мышц (1 зона)",
        price2: "600грн"
    }, {service3: "Биопунктура без препарата (1 процедура)", price3: "700грн"}, {
        service4: "Миофасциальная терапия",
        price4: "800руб"
    }]
}, {
    id: 5,
    category: 'Кардиология',
    doc1: 'Шурмин Дмитрий Юрьевич',
    doc2: "Габасов Марсель Винерович",
    services: [{service1: "Консультация кардиолога", price1: "1500грн"}, {
        service2: "Консультация ведущего специалиста",
        price2: "2000грн"
    }, {
        service3: "Электрокардиография (ЭКГ без расшифровки)",
        price3: "500грн"
    }, {service4: "Суточное мониторирование АД", price4: "2000грн"}]
}, {
    id: 6,
    category: 'Офтальмология',
    doc1: 'Курбанова Алсу Ахметовна',
    services: [{
        service1: "Консультация офтальмолога с полным диагностическим обследованием",
        price1: "1500грн"
    }, {
        service2: "Парабульбарная или субконъюктивальная инъекция (без стоимости препарата)",
        price2: "500грн"
    }, {
        service3: "Консервативное лечение гемофтальма",
        price3: "5000грн"
    }, {service4: "Измерение внутриглазного давления", price4: "500грн"}]
}, {
    id: 7,
    category: 'Стомалогия во сне',
    category2: 'Лечение зубов под микроскопом',
    doc1: 'Николаев Сергей Викторович',
    doc2: "Юсупов Рамиль Ильдарович",
    doc3: 'Филиппова Наталия Евгеньевна',
    doc4: 'Закиров Ленар Габдельбарович',
    doc5: 'Зайдуллин Дамир Галимуллович',
    doc6: 'Хамитова Альбина Ренатовна',
    doc7: 'Хисамиев Ильдар Гамилевич',
    services: [{service1: "Седация (2 часа)", price1: "12000грн"}, {
        service2: "Седация",
        price2: "6000грн"
    }, {service3: "Бронирование услуги \"Седация 1 час\"", price3: "2000грн"}, {
        service4: "Аппаратная инструментальная и медикаментозная обработка канала 1-корневого зуба (под микроскопом)",
        price4: "1500грн"
    }, {
        service5: "Распломбировка 1-корневого зуба (под микроскопом)",
        price5: "1400грн"
    }, {service6: "Удаление постороннего тела из канала (под микроскопом)", price6: "3300грн"}, {
        service7: "Пломбирование корневых каналов методом горячей гутаперчи (1 к/к) (под микроскопом)",
        price7: "1500грн"
    }]
}, {
    id: 8,
    category: 'Биопсия шейки матки',
    category2: 'УЗИ-диагностика',
    doc1: 'Ахметова Дина Камилевна',
    doc2: "Гимадиева Лилия Фаридовна",
    services: [{
        service1: "Биопсия",
        price1: "4000грн"
    }, {
        service2: "УЗИ внутричерепных сосудов (дуплексное сканирование)",
        price2: "1500грн"
    }, {
        service3: "УЗИ сосудов шеи (дуплексное сканирование)",
        price3: "2000грн"
    }, {
        service4: "УЗИ органов брюшной полости с допплерографией сосудов брюшной полости",
        price4: "1200грн"
    }, {service5: "УЗИ кожи (дуплексное сканирование)", price5: "1000грн"}]
}]


