/* Стандартные вопросы FAQ. Порядок: [AZ, RU, EN].
   Ответы пустые — вопрос без ответа на сайте не показывается.
   Заполняйте ответы в админ-панели → FAQ. */
var DEF_FAQ={
  home:8,
  cats:[
    {id:'c1',n:['Kurs və format','Курсы и формат','Courses & format'],items:[
      {id:'q1',q:['Dərslər onlayndır, yoxsa oflayn? Onları birləşdirmək olar?','Занятия онлайн или офлайн? Можно ли совмещать?','Are classes online or offline? Can they be combined?'],a:['','','']},
      {id:'q2',q:['Kurs nə qədər davam edir və həftədə neçə dərs olur?','Сколько длится курс и сколько занятий в неделю?','How long is the course and how many classes per week?'],a:['','','']},
      {id:'q3',q:['Qruplar nə qədər böyükdür? Fərdi dərslər də var?','Какого размера группы? Индивидуальные занятия тоже есть?','How big are the groups? Are individual lessons available?'],a:['','','']},
      {id:'q4',q:['Dərsləri kim aparır və müəllimlərin sertifikatı varmı?','Кто ведёт занятия и есть ли у преподавателей сертификаты?','Who teaches the classes and do the teachers have certificates?'],a:['','','']},
      {id:'q5',q:['Sınaq dərsi varmı?','Есть ли пробное занятие?','Is there a trial lesson?'],a:['','','']}
    ]},
    {id:'c2',n:['Səviyyə və hazırlıq','Уровень и подготовка','Level & preparation'],items:[
      {id:'q6',q:['Sıfırdan başlayıram, kurs mənə uyğundurmu?','Я начинаю с нуля, подойдёт ли мне курс?','I am starting from zero — is the course suitable for me?'],a:['','','']},
      {id:'q7',q:['Hazırda səviyyəmi necə müəyyən edə bilərəm? (pulsuz test linki)','Как понять, какой уровень у меня сейчас? (ссылка на бесплатный тест)','How can I find out my current level? (free test link)'],a:['','','']},
      {id:'q8',q:['IELTS və ya TOEFL üzrə istədiyim balla hazırlaşmaq üçün nə qədər vaxt lazımdır?','Сколько времени нужно, чтобы подготовиться к IELTS или TOEFL на нужный балл?','How long does it take to prepare for IELTS or TOEFL to reach my target score?'],a:['','','']},
      {id:'q9',q:['Proqrama nələr daxildir: yalnız testlər, yoxsa danışıq praktikası da?','Что входит в программу: только тесты или ещё разговорная практика?','What is included: only tests, or speaking practice too?'],a:['','','']}
    ]},
    {id:'c3',n:['İmtahanlar','Экзамены','Exams'],items:[
      {id:'q10',q:['İmtahana qeydiyyatda kömək edirsiniz?','Помогаете ли вы с регистрацией на экзамен?','Do you help with exam registration?'],a:['','','']},
      {id:'q11',q:['Real imtahan formatında sınaq testləri varmı?','Есть ли пробные тесты в формате реального экзамена?','Are there practice tests in the real exam format?'],a:['','','']},
      {id:'q12',q:['Lazımi balı toplaya bilməsəm nə etmək olar? Pulsuz yenidən imtahan və ya əlavə dərslər varmı?','Что делать, если не сдал с нужным баллом? Есть ли бесплатная пересдача или дополнительные занятия?','What if I don\'t get the score I need? Is there a free retake or extra classes?'],a:['','','']},
      {id:'q13',q:['SAT üçün: ABŞ-da qəbul üçün sənədlərin hazırlanmasında kömək edirsiniz?','Для SAT: поможете ли с подготовкой документов для поступления в США?','For SAT: do you help prepare documents for admission to the USA?'],a:['','','']}
    ]},
    {id:'c4',n:['Ödəniş və şərtlər','Оплата и условия','Payment & terms'],items:[
      {id:'q14',q:['Kursun qiyməti nə qədərdir və taksitlə ödəniş varmı?','Сколько стоит курс и есть ли рассрочка?','How much does the course cost and is installment payment available?'],a:['','','']},
      {id:'q15',q:['Kurs uyğun gəlmirsə pulu geri qaytarmaq olarmı?','Можно ли вернуть деньги, если курс не подошёл?','Can I get a refund if the course does not suit me?'],a:['','','']},
      {id:'q16',q:['Hansı ödəniş üsulları var (kart, köçürmə, Kapital Bank və s.)?','Какие способы оплаты доступны (карта, перевод, Kapital Bank и т. п.)?','What payment methods are available (card, bank transfer, Kapital Bank, etc.)?'],a:['','','']},
      {id:'q17',q:['Qruplar, tələbələr və yenidən qeydiyyat üçün endirim varmı?','Есть ли скидки для групп, студентов или повторной записи?','Are there discounts for groups, students or re-enrollment?'],a:['','','']}
    ]},
    {id:'c5',n:['Duolingo və General English','Duolingo и General English','Duolingo & General English'],items:[
      {id:'q18',q:['Duolingo English Test lazımdırmı, yoxsa bu ayrıca hazırlıqdırmı?','Нужен ли вам Duolingo English Test, или это отдельная подготовка?','Do you need the Duolingo English Test, or is it separate preparation?'],a:['','','']},
      {id:'q19',q:['General English işə və ya səyahətə lazım olan dil üçündür, imtahan üçün deyil — mənə uyğundurmu?','Подходит ли General English тем, кому нужен язык для работы или путешествий, а не экзамен?','Is General English suitable for those who need the language for work or travel rather than an exam?'],a:['','','']}
    ]},
    {id:'c6',n:['Dəstək','Поддержка','Support'],items:[
      {id:'q20',q:['Dərslər arasında müəllimlə necə əlaqə saxlaya bilərəm?','Как связаться с преподавателем между занятиями?','How can I contact the teacher between classes?'],a:['','','']},
      {id:'q21',q:['Kurs bitdikdən sonra dərslərin yazılarına və materiallara çıxış varmı?','Есть ли доступ к записям занятий и материалам после окончания курса?','Will I have access to class recordings and materials after the course ends?'],a:['','','']}
    ]}
  ]
};