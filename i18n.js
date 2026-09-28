// Translations. Ukrainian text lives in index.html; keys missing from `uk`
// fall back to that original markup. PL and EN must cover every key.
window.I18N = (() => {
  const TG = '<a href="https://www.instagram.com/denis.neprokin/" target="_blank" rel="noopener">';
  const SRC = (a, b) => `<a href="https://komunikacja.bielsko-biala.pl/index.php/rozklad-jazdy-do-wydruku/" target="_blank" rel="noopener">komunikacja.bielsko-biala.pl ↗</a> ${a} <a href="https://jakdojade.pl/bielsko-biala" target="_blank" rel="noopener">Jakdojade ↗</a>${b}`;

  const dict = {
    uk: {
      'meta.title': 'New Hope Church Bielsko-Biała — Християнська церква «Нова Надія»',
      'meta.desc': 'Українська християнська церква New Hope у Бельсько-Бялій. Недільне служіння щонеділі о 10:00, молитва в середу о 17:00, домашні групи в п’ятницю о 18:00. ul. Michała Grażyńskiego 20.',
      'ui.toLight': 'Світла тема', 'ui.toDark': 'Темна тема',
      'lb.open': 'Відкрити галерею', 'cafe.title': "Кав'ярня",
      'cap.kidsFest': 'Дитяче свято в церкві', 'cap.allFamily': "Уся церковна сім'я разом",
      'cap.youthTrip': 'Молодь у поїздці', 'cap.youthNight': 'Молодіжний вечір', 'cap.youthNature': 'Молодь на природі',
      'cap.youthXmas': 'Різдвяна зустріч', 'cap.table': 'Спілкування за столом',
      'cap.wCross': 'Поклоніння біля хреста', 'cap.wTeam': 'Команда прославлення', 'cap.wNight': 'Вечір поклоніння',
      'cap.musicians': 'Музиканти', 'cap.praise': 'Прославлення', 'cap.hall': 'Зал церкви', 'cap.media': 'Медіа-команда за пультом',
      'cap.churchFamily': "Церковна сім'я", 'cap.celebrate': 'Святкування разом', 'cap.service': 'Недільне служіння',
      'cap.joy': 'Радість зустрічі', 'cap.word': 'Слово на служінні',
      'cap.coffee': 'Кава після служіння', 'cap.cafe': "Кав'ярня New Hope",
      'cap.homeGroup': 'Домашня група за спільною вечерею',
      'give.copied': 'Скопійовано',
    },

    pl: {
      'meta.title': 'New Hope Church Bielsko-Biała — ukraiński kościół chrześcijański',
      'meta.desc': 'Ukraiński kościół chrześcijański New Hope w Bielsku-Białej. Nabożeństwo w każdą niedzielę o 10:00, ul. Michała Grażyńskiego 20. Uwielbienie, młodzież, szkółka niedzielna, wieczory rodzinne.',
      'ui.toLight': 'Jasny motyw', 'ui.toDark': 'Ciemny motyw',
      'nav.home': 'New Hope Church — na górę', 'nav.menu': 'Menu',
      'nav.about': 'Kim jesteśmy', 'nav.sunday': 'Niedziela', 'nav.ministries': 'Służby', 'nav.cafe': 'Kawiarnia',
      'nav.conf': 'Konferencja', 'nav.life': 'Życie kościoła', 'nav.give': 'Wesprzyj', 'nav.cta': 'Przyjdź w niedzielę',
      'hero.kicker': 'Kościół chrześcijański · Bielsko-Biała',
      'hero.l1': 'Nowa', 'hero.l2': 'nadzieja', 'hero.l3': 'dla każdego',
      'hero.lead': 'Jesteśmy tak różni, ale Bóg nas połączył. Różne charaktery, historie i talenty — jedno serce.',
      'hero.cta': 'Czekamy w niedzielę o 10:00', 'hero.tg': 'Grupa na Telegramie',
      'cd.label': 'Do niedzielnego nabożeństwa', 'cd.d': 'dni', 'cd.h': 'godz', 'cd.m': 'min', 'cd.s': 'sek',
      'cd.live': '● Nabożeństwo trwa — wejdź!',
      'strip.label': 'Zdjęcia z życia kościoła',
      'mq.1': 'Wiara', 'mq.2': 'Rodzina', 'mq.3': 'Uwielbienie', 'mq.4': 'Nadzieja', 'mq.5': 'Dom',
      'about.kicker': '01 — Kim jesteśmy',
      'about.quote': 'Kościół to nie tylko miejsce, do którego przychodzi się w niedzielę. <em>To rodzina. To dom.</em> Miejsce, gdzie razem szukamy Boga i oddajemy Mu chwałę.',
      'about.p1': 'New Hope to ukraiński kościół chrześcijański w sercu Bielska-Białej. Przychodzą tu ci, którzy od dawna są z Bogiem, i ci, którzy stawiają pierwszy krok. Bez dress code’u i bez ceremonii — z żywym uwielbieniem i szczerym słowem.',
      'about.p2': `Pastorem kościoła jest ${TG}Denys Neprokin</a>. Wierzymy, że w Bożej rodzinie jest miejsce dla każdego: dla dzieci i rodziców, dla młodzieży i starszych, dla tych, którzy dopiero przyjechali do Polski i szukają swoich.`,
      'sunday.kicker': '02 — Niedziela', 'sunday.h2': 'Co czeka na ciebie <em>w niedzielę</em>',
      'step1.h': 'Powitanie', 'step1.p': 'Przywitamy cię przy wejściu i pomożemy się odnaleźć.',
      'step2.h': 'Uwielbienie', 'step2.p': 'Muzyka na żywo i wspólny śpiew — współczesne pieśni, szczere serce.',
      'step3.h': 'Słowo', 'step3.p': 'Kazanie z Biblii — zrozumiale, o prawdziwym życiu.',
      'step4.h': 'Wspólnota', 'step4.p': 'Po nabożeństwie jest czas na rozmowy. Łatwo tu znaleźć przyjaciół.',
      'min.kicker': '03 — Służby', 'min.h2': 'Miejsce <em>dla każdego</em>',
      'kids.h': 'Szkółka niedzielna', 'kids.p': 'Gdy dorośli są na nabożeństwie, dzieci poznają Biblię przez historie, zabawy i twórczość.',
      'youth.h': 'Youth', 'youth.p': 'Spotkania młodzieżowe, wyjazdy i obozy. Wiara, przyjaźń i przygoda.',
      'worship.h': 'Worship', 'worship.p': 'Zespół uwielbienia, który prowadzi kościół w uwielbieniu. Śpiewasz albo grasz? Dołącz.',
      'family.h': 'Wieczory rodzinne', 'family.p': 'Ciepłe spotkania dla małżeństw i rodzin: rozmowy, modlitwa, wsparcie.',
      'week.title': 'W ciągu tygodnia', 'week.sun': 'Niedziela', 'week.sunE': 'Nabożeństwo niedzielne', 'week.wed': 'Środa', 'week.wedE': 'Modlitwa', 'week.fri': 'Piątek', 'week.friE': 'Grupy domowe',
      'give.kicker': '07 — Darowizna', 'give.h2': 'Wesprzyj <em>kościół</em>',
      'give.p': 'Jeśli chcesz wesprzeć służbę New Hope, darowiznę możesz przekazać przelewem bankowym lub przez BLIK. Dziękujemy za każdą wpłatę — pomaga kościołowi służyć ludziom w Bielsku-Białej i nie tylko.',
      'give.verse': '«Radosnego dawcę miłuje Bóg»<small>2 Koryntian 9:7</small>',
      'give.recipient': 'Odbiorca', 'give.account': 'Numer konta (Polska)', 'give.iban': 'IBAN (z zagranicy)', 'give.swift': 'SWIFT / BIC',
      'give.blik': 'BLIK na numer telefonu', 'give.title': 'Tytuł przelewu', 'give.copy': 'Kopiuj', 'give.copyBtn': 'Kopiuj', 'give.copied': 'Skopiowano',
      'give.note': 'Przelew z zagranicy — przez IBAN i SWIFT. BLIK — z polskiej aplikacji bankowej.',
      'home.h': 'Grupy domowe', 'home.p': 'W każdy piątek o 18:00 spotykamy się w domach w małych grupach: wspólna kolacja, Biblia, modlitwa i szczere rozmowy.',
      'bapt.h': 'Chrzest', 'bapt.p': 'Chcesz przyjąć chrzest w wodzie? Napisz do nas — powiemy, jak się przygotować.',
      'cafe.kicker': '04 — Kawiarnia', 'cafe.h2': 'Kawa po <em>nabożeństwie</em>', 'cafe.title': 'Kawiarnia',
      'cafe.p': 'Po niedzielnym nabożeństwie nie spieszymy się do domu. W kościelnej kawiarni można napić się kawy, posiedzieć, porozmawiać i poznać nowych ludzi. To właśnie tu nowi najszybciej stają się swoi.',
      'cafe.note': 'W każdą niedzielę po nabożeństwie · ul. Michała Grażyńskiego 20',
      'conf.kicker': '05 — Wydarzenie', 'conf.h2': 'Słyszę <em>Twój głos</em>',
      'conf.meta': 'Konferencja prorocza · 9–10 października 2026',
      'conf.p': 'Dwa dni nauczania, uwielbienia i praktyki. Biblijne podstawy służby proroczej, rozpoznawanie Bożego głosu. Mówcy — Maksym i Julia Biłousowowie.',
      'conf.where': 'Gdzie', 'conf.fee': 'Opłata', 'conf.btn': 'Rejestracja ↗',
      'conf.alt': 'Mówcy konferencji Maksym i Julia Biłousowowie',
      'life.kicker': '06 — Życie kościoła', 'life.h2': 'Chwile, <em>które cenimy</em>', 'life.btn': 'Więcej na Instagramie ↗',
      'tg.kicker': 'Społeczność na Telegramie', 'tg.title': 'Dołącz do <em>naszej grupy</em>',
      'tg.sub': 'Aktualności, ogłoszenia i plan spotkań — wszystko w jednym miejscu. Już ponad 150 osób.', 'tg.btn': 'Dołącz ↗',
      'visit.kicker': '08 — Jak do nas trafić', 'visit.h2': 'Niedziela. 10:00.<br><em>Przyjdź taki, jaki jesteś.</em>',
      'visit.addr': 'Adres', 'visit.how': 'Dojazd', 'visit.phone': 'Telefon',
      'visit.howP': 'Tuż obok przystanek autobusowy «Grażyńskiego Okrzei». 5 minut pieszo od dworca PKP.',
      'visit.route': 'Wyznacz trasę ↗', 'visit.call': 'Zadzwoń',
      'visit.parking': 'Parking przy budynku kościoła', 'visit.map': 'Mapa: New Hope Church, ul. Michała Grażyńskiego 20',
      'bus.title': 'Autobusem w niedzielę',
      'bus.lead': 'Autobusy miejskie MZK Bielsko-Biała. Podane godziny to przyjazd na przystanek przed nabożeństwem o 10:00.',
      'bus1.h': 'Przystanek «Grażyńskiego Okrzei»', 'bus1.walk': '~35 m — tuż przy wejściu',
      'bus1.p': 'Kierunek Podwale Dworzec (z Hałcnowa, Komorowic).<br>Przyjazd o <b>9:15</b>.',
      'bus1.back': 'Powrót z «Podwale Dworzec»: <b>11:38</b>, <b>13:03</b>',
      'bus2.h': 'Przystanek «Komorowicka TSL»', 'bus2.walk': '~350 m — 5 min pieszo',
      'bus3.h': 'Dworzec Bielsko-Biała Główna', 'bus3.walk': '~400 m — 5–7 min pieszo',
      'bus3.p': 'Przystanki «3 Maja Dworzec», «Warszawska Dworzec» — tu w niedzielę zatrzymuje się większość linii miejskich. Obok dworzec autobusowy.',
      'bus.src': 'Rozkład może się zmieniać — sprawdź aktualny na ' + SRC('lub w', ''),
      'footer.verse': '«A nadzieja zawieść nie może»<br><small>Rzymian 5:5</small>',
      'lb.label': 'Galeria', 'lb.close': 'Zamknij', 'lb.prev': 'Poprzednie zdjęcie', 'lb.next': 'Następne zdjęcie', 'lb.open': 'Otwórz galerię',
      'cap.kidsFest': 'Święto dziecięce w kościele', 'cap.allFamily': 'Cała kościelna rodzina razem',
      'cap.youthTrip': 'Młodzież na wyjeździe', 'cap.youthNight': 'Wieczór młodzieżowy', 'cap.youthNature': 'Młodzież na świeżym powietrzu',
      'cap.youthXmas': 'Spotkanie bożonarodzeniowe', 'cap.table': 'Rozmowy przy stole',
      'cap.wCross': 'Uwielbienie przy krzyżu', 'cap.wTeam': 'Zespół uwielbienia', 'cap.wNight': 'Wieczór uwielbienia',
      'cap.musicians': 'Muzycy', 'cap.praise': 'Uwielbienie', 'cap.hall': 'Sala kościoła', 'cap.media': 'Zespół mediów przy konsoli',
      'cap.churchFamily': 'Kościelna rodzina', 'cap.celebrate': 'Wspólne świętowanie', 'cap.service': 'Niedzielne nabożeństwo',
      'cap.joy': 'Radość spotkania', 'cap.word': 'Słowo na nabożeństwie',
      'cap.coffee': 'Kawa po nabożeństwie', 'cap.cafe': 'Kawiarnia New Hope',
      'cap.homeGroup': 'Grupa domowa przy wspólnej kolacji',
    },

    en: {
      'meta.title': 'New Hope Church Bielsko-Biała — Ukrainian Christian church',
      'meta.desc': 'New Hope is a Ukrainian Christian church in Bielsko-Biała, Poland. Sunday service every week at 10:00, ul. Michała Grażyńskiego 20. Worship, youth, Sunday school, family evenings.',
      'ui.toLight': 'Light theme', 'ui.toDark': 'Dark theme',
      'nav.home': 'New Hope Church — back to top', 'nav.menu': 'Menu',
      'nav.about': 'About', 'nav.sunday': 'Sunday', 'nav.ministries': 'Ministries', 'nav.cafe': 'Café',
      'nav.conf': 'Conference', 'nav.life': 'Church life', 'nav.give': 'Give', 'nav.cta': 'Visit on Sunday',
      'hero.kicker': 'Christian church · Bielsko-Biała',
      'hero.l1': 'New', 'hero.l2': 'hope', 'hero.l3': 'for everyone',
      'hero.lead': 'We are so different, yet God has brought us together. Different characters, stories and gifts — one heart.',
      'hero.cta': 'See you Sunday at 10:00', 'hero.tg': 'Telegram group',
      'cd.label': 'Until Sunday service', 'cd.d': 'days', 'cd.h': 'hrs', 'cd.m': 'min', 'cd.s': 'sec',
      'cd.live': '● The service is on now — come in!',
      'strip.label': 'Photos from church life',
      'mq.1': 'Faith', 'mq.2': 'Family', 'mq.3': 'Worship', 'mq.4': 'Hope', 'mq.5': 'Home',
      'about.kicker': '01 — About us',
      'about.quote': 'Church is not just a place you go to on Sundays. <em>It’s a family. It’s home.</em> A place where together we seek God and worship Him.',
      'about.p1': 'New Hope is a Ukrainian Christian church in the heart of Bielsko-Biała. People come here who have walked with God for years, and people taking their very first step. No dress code, no ceremony — just living worship and an honest word.',
      'about.p2': `Our pastor is ${TG}Denys Neprokin</a>. We believe there is a place for everyone in God’s family: children and parents, young and old, and those who have just moved to Poland and are looking for their people.`,
      'sunday.kicker': '02 — Sunday', 'sunday.h2': 'What to expect <em>on Sunday</em>',
      'step1.h': 'Welcome', 'step1.p': 'We’ll greet you at the door and help you find your way.',
      'step2.h': 'Worship', 'step2.p': 'Live music and singing together — modern songs, sincere hearts.',
      'step3.h': 'The Word', 'step3.p': 'A message from the Bible — clear and about real life.',
      'step4.h': 'Fellowship', 'step4.p': 'After the service there’s time to talk. It’s easy to make friends here.',
      'min.kicker': '03 — Ministries', 'min.h2': 'A place <em>for everyone</em>',
      'kids.h': 'Sunday school', 'kids.p': 'While adults are in the service, kids discover the Bible through stories, games and crafts.',
      'youth.h': 'Youth', 'youth.p': 'Youth meetings, trips and camps. Faith, friendship and adventure.',
      'worship.h': 'Worship', 'worship.p': 'The worship team that leads the church in worship. Do you sing or play? Join us.',
      'family.h': 'Family evenings', 'family.p': 'Warm gatherings for couples and families: fellowship, prayer and support.',
      'week.title': 'During the week', 'week.sun': 'Sunday', 'week.sunE': 'Sunday service', 'week.wed': 'Wednesday', 'week.wedE': 'Prayer meeting', 'week.fri': 'Friday', 'week.friE': 'Home groups',
      'give.kicker': '07 — Give', 'give.h2': 'Support <em>the church</em>',
      'give.p': 'If you would like to support the ministry of New Hope, you can give by bank transfer or BLIK. Thank you for every gift — it helps the church serve people in Bielsko-Biała and beyond.',
      'give.verse': '«God loves a cheerful giver»<small>2 Corinthians 9:7</small>',
      'give.recipient': 'Recipient', 'give.account': 'Account number (Poland)', 'give.iban': 'IBAN (from abroad)', 'give.swift': 'SWIFT / BIC',
      'give.blik': 'BLIK to phone number', 'give.title': 'Payment reference', 'give.copy': 'Copy', 'give.copyBtn': 'Copy', 'give.copied': 'Copied',
      'give.note': 'Transfers from abroad — use IBAN and SWIFT. BLIK works from Polish banking apps.',
      'home.h': 'Home groups', 'home.p': 'Every Friday at 18:00 we meet in homes in small groups: a shared dinner, the Bible, prayer and honest conversation.',
      'bapt.h': 'Baptism', 'bapt.p': 'Want to be baptised in water? Get in touch — we’ll tell you how to prepare.',
      'cafe.kicker': '04 — Café', 'cafe.h2': 'Coffee after <em>the service</em>', 'cafe.title': 'Café',
      'cafe.p': 'After the Sunday service we’re in no hurry to go home. In the church café you can grab a coffee, sit down, chat and get to know people. This is where newcomers feel at home the fastest.',
      'cafe.note': 'Every Sunday after the service · ul. Michała Grażyńskiego 20',
      'conf.kicker': '05 — Event', 'conf.h2': 'I hear <em>Your voice</em>',
      'conf.meta': 'Prophetic conference · 9–10 October 2026',
      'conf.p': 'Two days of teaching, worship and practice. The biblical foundations of prophetic ministry and discerning God’s voice. Speakers: Maksym and Yulia Bilousov.',
      'conf.where': 'Where', 'conf.fee': 'Fee', 'conf.btn': 'Register ↗',
      'conf.alt': 'Conference speakers Maksym and Yulia Bilousov',
      'life.kicker': '06 — Church life', 'life.h2': 'Moments <em>we treasure</em>', 'life.btn': 'More on Instagram ↗',
      'tg.kicker': 'Community on Telegram', 'tg.title': 'Join <em>our group</em>',
      'tg.sub': 'News, announcements and meeting times — all in one place. Over 150 members already.', 'tg.btn': 'Join ↗',
      'visit.kicker': '08 — Find us', 'visit.h2': 'Sunday. 10:00.<br><em>Come as you are.</em>',
      'visit.addr': 'Address', 'visit.how': 'Getting here', 'visit.phone': 'Phone',
      'visit.howP': 'The «Grażyńskiego Okrzei» bus stop is right next door. A 5-minute walk from the PKP train station.',
      'visit.route': 'Get directions ↗', 'visit.call': 'Call us',
      'visit.parking': 'Car park by the church building', 'visit.map': 'Map: New Hope Church, ul. Michała Grażyńskiego 20',
      'bus.title': 'By bus on Sunday',
      'bus.lead': 'MZK Bielsko-Biała city buses. Times shown are arrivals at the stop before the 10:00 service.',
      'bus1.h': 'Stop «Grażyńskiego Okrzei»', 'bus1.walk': '~35 m — right by the entrance',
      'bus1.p': 'Towards Podwale Dworzec (from Hałcnów, Komorowice).<br>Arrives at <b>9:15</b>.',
      'bus1.back': 'Back from «Podwale Dworzec»: <b>11:38</b>, <b>13:03</b>',
      'bus2.h': 'Stop «Komorowicka TSL»', 'bus2.walk': '~350 m — 5 min walk',
      'bus3.h': 'Bielsko-Biała Główna station', 'bus3.walk': '~400 m — 5–7 min walk',
      'bus3.p': 'Stops «3 Maja Dworzec» and «Warszawska Dworzec» — most city lines stop here on Sundays. The coach station is next door.',
      'bus.src': 'Timetables can change — check the current one at ' + SRC('or on', ''),
      'footer.verse': '«And hope does not put us to shame»<br><small>Romans 5:5</small>',
      'lb.label': 'Gallery', 'lb.close': 'Close', 'lb.prev': 'Previous photo', 'lb.next': 'Next photo', 'lb.open': 'Open gallery',
      'cap.kidsFest': 'Children’s party at church', 'cap.allFamily': 'The whole church family together',
      'cap.youthTrip': 'Youth on a trip', 'cap.youthNight': 'Youth night', 'cap.youthNature': 'Youth outdoors',
      'cap.youthXmas': 'Christmas gathering', 'cap.table': 'Fellowship at the table',
      'cap.wCross': 'Worship by the cross', 'cap.wTeam': 'Worship team', 'cap.wNight': 'Worship night',
      'cap.musicians': 'Musicians', 'cap.praise': 'Praise', 'cap.hall': 'Church hall', 'cap.media': 'Media team at the desk',
      'cap.churchFamily': 'Church family', 'cap.celebrate': 'Celebrating together', 'cap.service': 'Sunday service',
      'cap.joy': 'The joy of meeting', 'cap.word': 'Preaching at the service',
      'cap.coffee': 'Coffee after the service', 'cap.cafe': 'New Hope Café',
      'cap.homeGroup': 'Home group over a shared dinner',
    },
  };

  // "N photos" with the right plural form per language
  const photos = (n, lang) => {
    if (lang === 'en') return `${n} ${n === 1 ? 'photo' : 'photos'}`;
    if (lang === 'pl') {
      const few = n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14);
      return `${n} ${n === 1 ? 'zdjęcie' : few ? 'zdjęcia' : 'zdjęć'}`;
    }
    return `${n} фото`;
  };

  const LANGS = ['uk', 'pl', 'en'];
  const orig = {};      // Ukrainian markup captured from the page
  const origAttr = {};  // key -> original attribute value
  let lang = 'uk';

  // capture originals once, before anything is translated
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (!(k in orig)) orig[k] = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, k] = pair.split(':');
      if (!(k in origAttr)) origAttr[k] = el.getAttribute(attr);
    });
  });

  const t = key => (dict[lang] && dict[lang][key]) ?? (lang === 'uk' ? (orig[key] ?? origAttr[key] ?? dict.uk[key]) : dict.uk[key] ?? orig[key] ?? origAttr[key]) ?? key;

  const listeners = [];
  const apply = next => {
    lang = LANGS.includes(next) ? next : 'uk';
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = t(el.dataset.i18n); });
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split(';').forEach(pair => {
        const [attr, k] = pair.split(':');
        el.setAttribute(attr, t(k));
      });
    });
    document.title = t('meta.title');
    document.querySelector('meta[name="description"]').setAttribute('content', t('meta.desc'));
    document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    try { localStorage.setItem('nh-lang', lang); } catch (e) {}
    listeners.forEach(fn => fn(lang));
  };

  return { t, apply, photos, onChange: fn => listeners.push(fn), get lang() { return lang; } };
})();
