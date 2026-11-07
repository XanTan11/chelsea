/* Стандартные значения сайта. Админ-панель и сайт используют этот файл. */
var T={
m_services:['Xidmətlər','Услуги','Services'],
m_about:['Haqqımızda','О нас','About us'],
m_ach:['Nailiyyətlər','Достижения','Achievements'],
m_contact:['Əlaqə','Контакты','Contact'],
h1:['İngilis dilini və beynəlxalq imtahanları əminliklə öyrən','Учите английский и готовьтесь к международным экзаменам уверенно','Learn English and prepare for international exams with confidence'],
sub:['Hər hədəf üçün aydın hazırlıq planı.','Понятный план подготовки под каждую цель.','A clear preparation plan for every goal.'],
svc_lead:['İmtahan və ya kursu seçin — ətraflı məlumat açılacaq.','Выберите экзамен или курс — откроется подробная информация.','Choose an exam or course to see the details.'],
about1:['Erdman Chelsea Academy — Bakıda ingilis dili və beynəlxalq imtahanlara hazırlıq üzrə akademiyadır.','Erdman Chelsea Academy — академия английского языка и подготовки к международным экзаменам в Баку.','Erdman Chelsea Academy is an academy in Baku for English language learning and international exam preparation.'],
about2:['Biz IELTS, SAT, TOEFL, Duolingo və ümumi ingilis dili üzrə hazırlıq təklif edirik.','Мы предлагаем подготовку к IELTS, SAT, TOEFL, Duolingo и курс общего английского.','We offer preparation for IELTS, SAT, TOEFL, Duolingo and General English courses.'],
ach_lead:['Tələbələrimizin nəticələri və uğurları burada yerləşdiriləcək.','Здесь будут результаты и успехи наших учеников.','Our students’ results and successes will be shown here.'],
ach_empty:['Nailiyyətlər tezliklə burada görünəcək.','Достижения скоро появятся здесь.','Achievements will appear here soon.'],
c_text:['Səviyyənizi öyrənmək, qrup seçmək və ya qeydiyyatdan keçmək üçün bizə sosial şəbəkələrdə yazın.','Чтобы узнать свой уровень, выбрать группу или записаться — напишите нам в социальных сетях.','To check your level, choose a group or enroll, message us on social media.'],
more:['Ətraflı','Подробнее','Details'],
enroll:['Qeydiyyatdan keç','Записаться','Enroll'],
why:['Nə üçün lazımdır','Для чего нужен','What it is for'],
fmt:['Format','Формат','Format'],
prep:['Hazırlıqda nə edirik','Что мы делаем на подготовке','How we prepare you'],
note:['Format və qaydalar dəyişə bilər — dəqiq məlumatı rəsmi saytda yoxlayın.','Форматы и правила могут меняться — уточняйте на официальном сайте.','Formats and rules may change — check the official website for current details.'],
addr_h:['Ünvanlarımız','Наши адреса','Our locations'],
map_t:['Xəritədə aç','Открыть на карте','Open on map'],
copied:['Nömrə kopyalandı','Номер скопирован','Number copied']
};
var E=[
{id:'ielts',n:'IELTS',s:['Təhsil və miqrasiya üçün','Для учёбы и миграции','For study and migration'],
 sub:['International English Language Testing System','Международная система тестирования английского языка','International English Language Testing System'],
 why:['Xaricdə təhsil, iş və miqrasiya üçün ən geniş tanınan imtahanlardan biri. İki növü var: Academic (universitet) və General Training (iş və miqrasiya).','Один из самых признанных экзаменов для учёбы, работы и миграции за рубежом. Два вида: Academic (университет) и General Training (работа и миграция).','One of the most widely recognised exams for study, work and migration abroad. Two versions: Academic (university) and General Training (work and migration).'],
 fmt:[['Listening — dinləmə','Listening — аудирование','Listening'],['Reading — oxuma','Reading — чтение','Reading'],['Writing — yazı','Writing — письмо','Writing'],['Speaking — şifahi müsahibə','Speaking — устное интервью','Speaking — face-to-face interview'],['Nəticə: 0–9 band','Результат: band от 0 до 9','Score: band 0–9']],
 prep:['Dörd bacarığı məşq edir, Writing və Speaking üçün fərdi rəy verir, sınaq imtahanları keçirir və hədəf band üçün strategiya qururuq.','Отрабатываем все четыре навыка, даём обратную связь по Writing и Speaking, проводим пробные тесты и строим стратегию под нужный балл.','We train all four skills, give personal feedback on Writing and Speaking, run mock tests and build a strategy for your target band.']},
{id:'sat',n:'SAT',s:['ABŞ universitetləri üçün','Для вузов США','For US universities'],
 sub:['Scholastic Assessment Test','Тест для поступления в вузы США','Admission test for US universities'],
 why:['ABŞ və bəzi digər ölkələrin universitetlərinə bakalavr qəbulu üçün standart test. Bəzi təqaüd proqramlarında da nəzərə alınır.','Стандартный тест для поступления на бакалавриат в вузы США и ряда других стран. Учитывается и в некоторых стипендиях.','A standard test for undergraduate admission to US and some other universities. Also considered in some scholarship programs.'],
 fmt:[['Reading & Writing — oxu və yazı','Reading & Writing — чтение и письмо','Reading & Writing'],['Math — riyaziyyat','Math — математика','Math'],['Rəqəmsal format, bal: 400–1600','Цифровой формат, балл: 400–1600','Digital format, score: 400–1600']],
 prep:['Bölmələri mövzu-mövzu işləyir, vaxt idarəetməsini öyrədir və real formatda sınaq testləri həll edirik.','Прорабатываем разделы по темам, учим управлять временем и решаем пробные тесты в реальном формате.','We work through each section by topic, teach time management and practise with full-format mock tests.']},
{id:'toefl',n:'TOEFL',s:['Akademik ingilis dili','Академический английский','Academic English'],
 sub:['Test of English as a Foreign Language','Тест по английскому как иностранному','Test of English as a Foreign Language'],
 why:['ABŞ, Kanada və digər ölkələrin universitetlərinə qəbul üçün akademik ingilis dili biliyini təsdiqləyir.','Подтверждает уровень академического английского при поступлении в университеты США, Канады и других стран.','Proves your academic English level for admission to universities in the US, Canada and elsewhere.'],
 fmt:[['Reading','Reading','Reading'],['Listening','Listening','Listening'],['Speaking','Speaking','Speaking'],['Writing','Writing','Writing'],['Kompüterdə, universitet mövzuları ilə','На компьютере, с университетскими темами','Computer-based, with university-style topics']],
 prep:['Akademik lüğət, mühazirə dinləmə, esse və inteqrasiya olunmuş tapşırıqlar üzərində işləyir, tam sınaq imtahanları keçirik.','Работаем над академической лексикой, лекциями, эссе и интегрированными заданиями, проводим полные пробные экзамены.','We work on academic vocabulary, lecture listening, essays and integrated tasks, with full mock exams.']},
{id:'duolingo',n:'Duolingo',s:['Onlayn imtahan','Онлайн-экзамен','Online exam'],
 sub:['Duolingo English Test','Duolingo English Test','Duolingo English Test'],
 why:['Bir çox xarici universitet tərəfindən qəbul edilən sürətli və əlverişli alternativ; evdən kompüterlə verilir.','Быстрая и удобная альтернатива, которую принимают многие зарубежные вузы; сдаётся дома на компьютере.','A fast, convenient alternative accepted by many universities abroad; taken at home on a computer.'],
 fmt:[['Adaptiv imtahan: çətinlik cavablarınıza görə dəyişir','Адаптивный экзамен: сложность зависит от ваших ответов','Adaptive: difficulty changes with your answers'],['Təxminən 1 saat','Около 1 часа','About 1 hour'],['Bal: 10–160','Балл: 10–160','Score: 10–160']],
 prep:['Tapşırıq tiplərini tanıdır, oxu, yazı, dinləmə və danışığı məşq etdirir, onlayn qaydaları izah edirik.','Знакомим с типами заданий, тренируем чтение, письмо, аудирование и speaking, объясняем правила онлайн-формата.','We introduce the task types, train reading, writing, listening and speaking, and explain the online rules.']},
{id:'general',n:'General English',s:['Ümumi ingilis dili','Общий английский','Everyday English'],
 sub:['Ümumi ingilis dili kursu','Курс общего английского','General English course'],
 why:['Sıfırdan başlayanlar, məktəblilər, tələbələr və böyüklər üçün — danışmaq, anlamaq və özünü rahat hiss etmək istəyənlər üçün.','Для начинающих, школьников, студентов и взрослых — для тех, кто хочет говорить, понимать и чувствовать себя уверенно.','For beginners, school students, university students and adults who want to speak, understand and feel confident.'],
 fmt:[['Qrammatika və lüğət','Грамматика и лексика','Grammar and vocabulary'],['Danışıq və dinləmə','Разговор и аудирование','Speaking and listening'],['Oxu və yazı','Чтение и письмо','Reading and writing'],['Səviyyələr: A1–C2 (CEFR)','Уровни: A1–C2 (CEFR)','Levels: A1–C2 (CEFR)']],
 prep:['Səviyyənizi müəyyən edir, uyğun qrupda başlayırıq. İstəsəniz, sonra imtahan hazırlığına keçə bilərsiniz.','Определяем ваш уровень и начинаем в подходящей группе. При желании потом можно перейти к подготовке к экзамену.','We find your level and start you in the right group. Later you can move on to exam preparation if you wish.']}
];
var ADDR=[
{t:['Neftçilər m/st, 210 №-li məktəbin yanı','м. Нефтчиляр, рядом со школой №210','Neftchilar metro, next to School No. 210'],q:'Neftçilər metrosu 210 nömrəli məktəb Bakı'},
{t:['Xətai m/st, 56 №-li məktəbin yanı','м. Хатаи, рядом со школой №56','Khatai metro, next to School No. 56'],q:'Xətai metrosu 56 nömrəli məktəb Bakı'},
{t:['Ağ şəhər, Avropa liseyinin yanı','Белый город, рядом с Европейским лицеем','White City (Ağ Şəhər), next to the Europe Lyceum'],q:'Avropa liseyi Ağ Şəhər Bakı'}
];
var DEF_CONTACTS={phone:'+994507072061',phone_label:'+994 50 707 20 61',links:[
{label:'WhatsApp',url:'https://wa.me/994507072061'},
{label:'Instagram',url:'https://www.instagram.com/chelseaacademy.az'},
{label:'TikTok',url:'https://www.tiktok.com/@bakuchelsea_academy'}]};
var DEF_SITE={name:'Erdman Chelsea Academy',logo:'',navy:'#0b2a6f',navyd:'#071a47',gold:'#c9a227',goldl:'#e3c565'};
