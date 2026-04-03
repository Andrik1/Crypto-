// ─── TRANSLATIONS ───
const i18n = {
  uk: {
    nav_exchange: "Обмін", nav_rates: "Курси", nav_how: "Як це працює", nav_legal: "Документи",
    btn_login: "Увійти", btn_register: "Реєстрація",
    hero_badge: "🇺🇦 Офіційний криптообмінник України",
    hero_title: "Обмін крипто<span>валюти</span> в кілька кліків",
    hero_desc: "Найвигідніші курси BTC, ETH, USDT з виведенням на Приват24, Monobank та картки Visa/Mastercard. Автоматичний обмін 24/7.",
    stat1: "Обмінено коштів", stat2: "Клієнтів", stat3: "Рейтинг",
    widget_title: "Обміняти зараз", widget_badge: "Онлайн ✓",
    give: "ВІДПРАВЛЯЄТЕ", get: "ОТРИМУЄТЕ",
    balance: "Доступно:", fee_label: "Комісія:", rate_label: "Курс обміну:",
    min_sum: "Мінімальна сума", processing: "Час обробки", aml: "AML-перевірка", included: "Включено ✓",
    btn_exchange: "Обміняти зараз →",
    why_tag: "Чому ми", why_title: "Безпечно. Швидко. Вигідно.",
    f1_title: "AML/KYC захист", f1_desc: "Автоматична перевірка кожної транзакції через Chainalysis та Crystal Blockchain. Ваші кошти завжди чисті.",
    f2_title: "Миттєвий обмін", f2_desc: "Автоматичні угоди до $5,000 виконуються за 5-15 хвилин. Підтримуємо TRC-20 та ERC-20 для USDT.",
    f3_title: "Найкращий курс", f3_desc: "Курс формується на основі даних Binance та WhiteBIT з мінімальною націнкою 0.8-1.5%.",
    f4_title: "Українські банки", f4_desc: "Виведення на Приват24, Monobank, ПУМБ, А-Банк. Поповнення через Visa/Mastercard.",
    f5_title: "Холодне зберігання", f5_desc: "95% резервів на холодних гаманцях з мультипідписом. 2FA для всіх акаунтів.",
    f6_title: "Легальна робота", f6_desc: "Зареєстровані в ЄС (Естонія). Відповідаємо вимогам AML/VASP Директиви ЄС 5AMLD/6AMLD.",
    rates_tag: "Актуальні курси", rates_title: "Популярні напрямки обміну",
    th_pair: "Пара", th_buy: "Купівля", th_sell: "Продаж", th_change: "Зміна 24г", th_reserve: "Резерв",
    how_tag: "Як це працює", how_title: "4 кроки до обміну",
    s1_title: "Оберіть напрямок", s1_desc: "Вкажіть яку валюту ви відправляєте та що хочете отримати",
    s2_title: "Вкажіть реквізити", s2_desc: "Введіть адресу гаманця або номер картки для зарахування коштів",
    s3_title: "Відправте кошти", s3_desc: "Переведіть вказану суму на наші реквізити, ми підтвердимо отримання",
    s4_title: "Отримайте гроші", s4_desc: "Після підтвердження ви отримаєте кошти протягом 5-30 хвилин",
    legal_tag: "Checklist для бізнесу", legal_title: "Покроковий план запуску",
    tab_legal: "⚖️ Юридична підготовка", tab_tech: "💻 Технічна реалізація",
    tab_security: "🔐 Безпека", tab_launch: "🚀 Запуск",
    l1_title: "Закон «Про віртуальні активи» — статус 2024", l1_desc: "Закон № 2074-IX прийнятий, але не набрав чинності — для цього потрібні зміни до Податкового кодексу. Поки що криптовалюти в 'сірій зоні' — ні заборонені, ні легалізовані.",
    l2_title: "Реєстрація в Естонії або Литві (рекомендовано)", l2_desc: "Естонія: VASP-ліцензія від Finantsinspektsioon (~€3,500-5,000, 3-6 місяців). Литва: реєстрація VASP у FNTT (~€1,000-2,000). Обидва варіанти дозволяють легально обслуговувати клієнтів з України.",
    l3_title: "Оподаткування для фізичних осіб (Україна)", l3_desc: "Дохід від обміну крипто для фізосіб: ПДФО 18% + військовий збір 1.5% = 19.5% від прибутку. Рекомендуємо ФОП 3 група (єдиний податок 5%) для легального проведення операцій через бізнес.",
    l4_title: "AML/KYC — обов'язкові вимоги", l4_desc: "При ліцензії ЄС — обов'язкова KYC верифікація. Підключити AML-скринінг: Chainalysis, Crystal Blockchain. Вести журнали транзакцій 5 років. CTR для операцій від €10,000.",
    l5_title: "Внутрішні документи", l5_desc: "Розробити: Політику AML/CFT, KYC-процедури, Правила Сервісу, Політику конфіденційності (GDPR), Договір публічної оферти. Призначити AML-офіцера.",
    t1_title: "Вибір архітектури: White Label vs власна розробка", t1_desc: "White Label (BoxExchanger, Merkeleon): $2,000-8,000, запуск за 2-4 тижні. Власна розробка: від $50,000+, 6-12 місяців. Рекомендація: на старті — White Label рішення.",
    t2_title: "Стек технологій", t2_desc: "Backend: Laravel або Node.js + TypeScript. Frontend: React.js / Next.js. БД: PostgreSQL + Redis. Блокчейн: BitcoinCore, Geth, TRON Full Node. Платіжні шлюзи: WayForPay, LiqPay (UA). Хостинг: AWS Frankfurt або Hetzner.",
    t3_title: "Модуль гаманців та резервів", t3_desc: "Гарячі гаманці: 5-10% резервів. Холодні гаманці: 90-95% резервів (Ledger/Trezor) з multisig 2-of-3. Підтримка: BTC, ETH (ERC-20), TRON (TRC-20), BNB Smart Chain.",
    t4_title: "Курсоутворення та ліквідність", t4_desc: "API: Binance, WhiteBIT, Bybit для ринкових курсів (WebSocket). Спред 0.8-2%. Для великих угод ($10K+) — ручний режим з OTC-деском.",
    sec1_title: "2FA автентифікація", sec1_desc: "Обов'язкова 2FA для адмінів через TOTP. Рекомендована для клієнтів при виведенні від $500. Апаратні ключі YubiKey для серверного доступу.",
    sec2_title: "Захист від DDoS та атак", sec2_desc: "Cloudflare Pro/Business план. WAF для захисту від SQL-ін'єкцій та XSS. Rate limiting на API. Окремий сервер для адмін-панелі з whitelist IP.",
    sec3_title: "Управління приватними ключами", sec3_desc: "Multisig 2-of-3 для виведення з холодних гаманців. Зберігання seed-фраз в HSM або розподілено між засновниками. Ніколи не зберігати ключі на онлайн-серверах.",
    sec4_title: "Моніторинг та аудит", sec4_desc: "Алерти при аномальних транзакціях (Telegram-бот). Логування всіх дій адмінів. Щоквартальний pentest. Програма Bug Bounty. Резервне копіювання БД щогодини.",
    la1_title: "SEO для українського ринку", la1_desc: "URL структура: /купити-btc-грн, /продати-usdt-trc20. Ключові слова: 'криптообмінник Україна', 'купити біткоін за гривню'. Реєстрація в BestChange, Obmify, Kurs.expert.",
    la2_title: "Агрегатори та моніторинги", la2_desc: "BestChange: реєстрація + верифікація резервів. Obmify, Changer.com, ExchangeSumo. Оновлення курсів через XML/JSON API feed кожні 30 секунд.",
    la3_title: "Маркетинг та партнерська програма", la3_desc: "Реферальна програма: 0.3-0.5% від обсягу. Telegram-канал. Партнерство з Ukrainian crypto-спільнотами. Google Ads. Бонус 50 грн за перший обмін.",
    la4_title: "Підтримка клієнтів", la4_desc: "Live-chat на сайті (Intercom або Crisp). Telegram-бот. Підтримка 24/7. SLA: відповідь 15 хвилин. Публічна сторінка статусу сервісу.",
    footer_desc: "Ліцензований криптообмінник. Зареєстровано в Естонії (VASP ліцензія). Обслуговуємо клієнтів з України з 2022 року.",
    footer_exchange: "Обмін", footer_company: "Компанія", footer_support: "Підтримка",
    fc1_1: "Купити Bitcoin", fc1_2: "Купити USDT TRC-20", fc1_3: "Продати ETH", fc1_4: "BTC → Приват24",
    fc2_1: "Про нас", fc2_2: "AML Політика", fc2_3: "Угода користувача", fc2_4: "Партнерам",
    fc3_1: "FAQ", fc3_2: "Telegram чат", fc3_3: "Статус сервісу", fc3_4: "Відгуки",
    footer_copy: "© 2024 SwapUA OÜ. Реєстр Естонії. VASP ліцензія FVT000XXX",
    footer_risk: "Торгівля криптовалютами пов'язана з ризиками. 18+",
    login_title: "Увійти", login_desc: "Раді вас бачити знову!",
    reg_title: "Реєстрація", reg_desc: "Створіть акаунт та отримайте бонус ₴50",
    email: "Email", password: "Пароль", name: "Ім'я",
    login_success: "Успішно виконано вхід!", reg_success: "Акаунт створено! Бонус ₴50 нараховано."
  },
  en: {
    nav_exchange: "Exchange", nav_rates: "Rates", nav_how: "How it Works", nav_legal: "Documents",
    btn_login: "Login", btn_register: "Register",
    hero_badge: "🇺🇦 Official Ukrainian Crypto Exchange",
    hero_title: "Exchange <span>Crypto</span> in a Few Clicks",
    hero_desc: "Best rates for BTC, ETH, USDT with withdrawal to Privat24, Monobank and Visa/Mastercard. Automatic exchange 24/7.",
    stat1: "Volume Exchanged", stat2: "Clients", stat3: "Rating",
    widget_title: "Exchange Now", widget_badge: "Online ✓",
    give: "YOU SEND", get: "YOU RECEIVE",
    balance: "Available:", fee_label: "Fee:", rate_label: "Exchange Rate:",
    min_sum: "Minimum amount", processing: "Processing time", aml: "AML Check", included: "Included ✓",
    btn_exchange: "Exchange Now →",
    why_tag: "Why Us", why_title: "Safe. Fast. Profitable.",
    f1_title: "AML/KYC Protection", f1_desc: "Automatic verification of every transaction via Chainalysis and Crystal Blockchain. Your funds are always clean.",
    f2_title: "Instant Exchange", f2_desc: "Automatic trades up to $5,000 processed in 5-15 minutes. TRC-20 and ERC-20 USDT supported.",
    f3_title: "Best Rate", f3_desc: "Rates based on Binance and WhiteBIT data with a minimal spread of 0.8-1.5%.",
    f4_title: "Ukrainian Banks", f4_desc: "Withdrawal to Privat24, Monobank, PUMB, A-Bank. Top-up via Visa/Mastercard.",
    f5_title: "Cold Storage", f5_desc: "95% of reserves in cold wallets with multisig. 2FA for all accounts.",
    f6_title: "Legal Operations", f6_desc: "Registered in the EU (Estonia). Compliant with AML/VASP EU Directives 5AMLD/6AMLD.",
    rates_tag: "Live Rates", rates_title: "Popular Exchange Pairs",
    th_pair: "Pair", th_buy: "Buy", th_sell: "Sell", th_change: "24h Change", th_reserve: "Reserve",
    how_tag: "How It Works", how_title: "4 Steps to Exchange",
    s1_title: "Choose Direction", s1_desc: "Specify which currency you're sending and what you want to receive",
    s2_title: "Enter Details", s2_desc: "Enter your wallet address or card number for receiving funds",
    s3_title: "Send Funds", s3_desc: "Transfer the specified amount to our details, we will confirm receipt",
    s4_title: "Receive Money", s4_desc: "After confirmation you will receive funds within 5-30 minutes",
    legal_tag: "Business Checklist", legal_title: "Step-by-Step Launch Plan",
    tab_legal: "⚖️ Legal Setup", tab_tech: "💻 Technical Build",
    tab_security: "🔐 Security", tab_launch: "🚀 Launch",
    l1_title: "Virtual Assets Act — 2024 Status", l1_desc: "Law No. 2074-IX passed but not yet in force — requires amendments to the Tax Code. Crypto remains in a 'grey zone' — neither prohibited nor fully legalized.",
    l2_title: "Register in Estonia or Lithuania (Recommended)", l2_desc: "Estonia: VASP license from Finantsinspektsioon (~€3,500-5,000, 3-6 months). Lithuania: VASP registration with FNTT (~€1,000-2,000). Both allow legally serving Ukrainian clients.",
    l3_title: "Taxation for Individuals (Ukraine)", l3_desc: "Crypto income for individuals: 18% PIT + 1.5% military levy = 19.5% on profit. We recommend FOP Group 3 (5% unified tax) for legally conducting operations through a business.",
    l4_title: "AML/KYC — Mandatory Requirements", l4_desc: "With EU license — mandatory KYC verification. Connect AML screening: Chainalysis, Crystal Blockchain. Keep transaction logs for 5 years. CTR for transactions from €10,000.",
    l5_title: "Internal Documentation", l5_desc: "Develop: AML/CFT Policy, KYC Procedures, Terms of Service, Privacy Policy (GDPR), Public Offer Agreement. Appoint an AML Officer.",
    t1_title: "Architecture: White Label vs Custom Build", t1_desc: "White Label (BoxExchanger, Merkeleon): $2,000-8,000, launch in 2-4 weeks. Custom development: from $50,000+, 6-12 months. Recommendation: start with White Label.",
    t2_title: "Technology Stack", t2_desc: "Backend: Laravel or Node.js + TypeScript. Frontend: React.js / Next.js. DB: PostgreSQL + Redis. Blockchain: BitcoinCore, Geth, TRON Full Node. Payment gateways: WayForPay, LiqPay. Hosting: AWS Frankfurt or Hetzner.",
    t3_title: "Wallet & Reserve Module", t3_desc: "Hot wallets: 5-10% of reserves. Cold wallets: 90-95% of reserves (Ledger/Trezor) with multisig 2-of-3. Support: BTC, ETH (ERC-20), TRON (TRC-20), BNB Smart Chain.",
    t4_title: "Rate Formation & Liquidity", t4_desc: "API: Binance, WhiteBIT, Bybit for market rates (WebSocket). Spread 0.8-2%. For large deals ($10K+) — manual mode with OTC desk.",
    sec1_title: "2FA Authentication", sec1_desc: "Mandatory 2FA for admins via TOTP. Recommended for clients on withdrawal from $500. YubiKey hardware keys for server access.",
    sec2_title: "DDoS & Attack Protection", sec2_desc: "Cloudflare Pro/Business plan. WAF for SQL injection and XSS protection. Rate limiting on API. Separate admin server with IP whitelist.",
    sec3_title: "Private Key Management", sec3_desc: "Multisig 2-of-3 for cold wallet withdrawals. Seed phrase storage in HSM or distributed between founders. Never store keys on online servers.",
    sec4_title: "Monitoring & Audit", sec4_desc: "Alerts for anomalous transactions (Telegram bot). Logging all admin actions. Quarterly pentest. Bug Bounty program. Hourly DB backups.",
    la1_title: "SEO for Ukrainian Market", la1_desc: "URL structure: /buy-btc-uah, /sell-usdt-trc20. Keywords: 'crypto exchange Ukraine', 'buy bitcoin for hryvnia'. Register at BestChange, Obmify, Kurs.expert.",
    la2_title: "Aggregators & Monitors", la2_desc: "BestChange: registration + reserve verification. Obmify, Changer.com, ExchangeSumo. Rate updates via XML/JSON API feed every 30 seconds.",
    la3_title: "Marketing & Referral Program", la3_desc: "Referral program: 0.3-0.5% of volume. Telegram channel. Partnerships with Ukrainian crypto communities. Google Ads. ₴50 bonus for first exchange.",
    la4_title: "Customer Support", la4_desc: "Live chat (Intercom or Crisp). Telegram bot. 24/7 support. SLA: 15-minute response. Public status page.",
    footer_desc: "Licensed crypto exchange. Registered in Estonia (VASP license). Serving Ukrainian clients since 2022.",
    footer_exchange: "Exchange", footer_company: "Company", footer_support: "Support",
    fc1_1: "Buy Bitcoin", fc1_2: "Buy USDT TRC-20", fc1_3: "Sell ETH", fc1_4: "BTC → Privat24",
    fc2_1: "About Us", fc2_2: "AML Policy", fc2_3: "User Agreement", fc2_4: "Partners",
    fc3_1: "FAQ", fc3_2: "Telegram Chat", fc3_3: "Service Status", fc3_4: "Reviews",
    footer_copy: "© 2024 SwapUA OÜ. Estonia Register. VASP License FVT000XXX",
    footer_risk: "Cryptocurrency trading involves risks. 18+",
    login_title: "Login", login_desc: "Welcome back!",
    reg_title: "Register", reg_desc: "Create an account and get a ₴50 bonus",
    email: "Email", password: "Password", name: "Name",
    login_success: "Logged in successfully!", reg_success: "Account created! ₴50 bonus added."
  }
};

let currentLang = 'uk';

function setLang(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`.lang-btn[onclick="setLang('${lang}')"]`).classList.add('active');
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });

  updateRatesTable();
}

// ─── RATES DATA ───
const rates = {
  BTC: { price: 3998000, change: 2.34, reserve: '2.45 BTC', icon: '₿', cls: 'btc' },
  ETH: { price: 158500, change: 1.87, reserve: '45.2 ETH', icon: 'Ξ', cls: 'eth' },
  USDT: { price: 41.20, change: 0.05, reserve: '450,000 ₴', icon: '₮', cls: 'usdt' },
  BNB: { price: 23800, change: -1.12, reserve: '120 BNB', icon: 'B', cls: 'bnb' },
  SOL: { price: 7800, change: 4.56, reserve: '380 SOL', icon: 'S', cls: 'sol' },
};

const coinIcons = { BTC: { icon: '₿', cls: 'btc' }, ETH: { icon: 'Ξ', cls: 'eth' }, USDT: { icon: '₮', cls: 'usdt' }, BNB: { icon: 'B', cls: 'bnb' }, SOL: { icon: 'S', cls: 'sol' }, UAH: { icon: '₴', cls: 'uah' } };

function updateRatesTable() {
  const t = i18n[currentLang];
  const tbody = document.getElementById('ratesTable');
  const btnText = currentLang === 'uk' ? 'Обміняти' : 'Exchange';
  tbody.innerHTML = Object.entries(rates).map(([sym, r]) => {
    const up = r.change >= 0;
    const buy = (r.price * 0.988).toLocaleString('uk-UA');
    const sell = (r.price * 1.012).toLocaleString('uk-UA');
    return `<tr onclick="selectPair('${sym}')">
      <td><div class="pair-name">
        <div class="pair-icons">
          <div class="coin-icon ${r.cls}">${r.icon}</div>
          <div class="coin-icon uah">₴</div>
        </div>
        ${sym}/UAH
      </div></td>
      <td>${buy} ₴</td>
      <td>${sell} ₴</td>
      <td><span class="change-badge ${up ? 'up' : 'down'}">${up ? '↑' : '↓'} ${Math.abs(r.change)}%</span></td>
      <td style="color:var(--muted);font-size:13px">${r.reserve}</td>
      <td><button class="btn-sm" onclick="event.stopPropagation();selectPair('${sym}')">${btnText}</button></td>
    </tr>`;
  }).join('');
}

function selectPair(sym) {
  document.getElementById('fromCurrency').value = sym;
  const icon = coinIcons[sym];
  document.getElementById('fromIcon').className = `coin-icon ${icon.cls}`;
  document.getElementById('fromIcon').textContent = icon.icon;
  document.getElementById('toCurrency').value = 'UAH';
  document.getElementById('toIcon').className = `coin-icon uah`;
  document.getElementById('toIcon').textContent = '₴';
  updateRate();
  document.getElementById('exchange').scrollIntoView({ behavior: 'smooth' });
}

function updateRate() {
  const from = document.getElementById('fromCurrency').value;
  const to   = document.getElementById('toCurrency').value;
  const fi   = coinIcons[from], ti = coinIcons[to];

  document.getElementById('fromIcon').className   = `coin-icon ${fi.cls}`;
  document.getElementById('fromIcon').textContent = fi.icon;
  document.getElementById('toIcon').className     = `coin-icon ${ti.cls}`;
  document.getElementById('toIcon').textContent   = ti.icon;

  const fromVal = parseFloat(document.getElementById('fromAmount').value);
  calcExchangeNow(fromVal > 0 ? 'from' : 'to');
}

// ─── Конвертація між валютами ───
// rates[sym].price = ціна 1 одиниці sym в UAH
function convertAmount(fromSym, toSym, amt, spread) {
  if (!amt || isNaN(amt) || amt <= 0) return 0;
  const s = spread ?? 0.988;
  // Все зводимо через UAH як базову валюту
  const inUAH = fromSym === 'UAH' ? amt : amt * (rates[fromSym]?.price || 1);
  const result = toSym === 'UAH' ? inUAH : inUAH / (rates[toSym]?.price || 1);
  return result * s;
}

function formatCryptoAmt(sym, val) {
  if (!val || val <= 0) return '';
  if (sym === 'UAH') return val.toFixed(2);
  // Якщо велике число (BNB, SOL тощо) — 4 знаки, якщо мале (BTC) — 8
  if (val >= 1)    return val.toFixed(4).replace(/\.?0+$/, '');
  if (val >= 0.01) return val.toFixed(6).replace(/\.?0+$/, '');
  return val.toFixed(8).replace(/\.?0+$/, '');
}

let _calcTimer = null;

function calcExchange(direction = 'from') {
  // При введенні користувачем — debounce 60ms щоб не рахувати кожен символ
  clearTimeout(_calcTimer);
  _calcTimer = setTimeout(() => _doCalc(direction), 60);
}

function calcExchangeNow(direction = 'from') {
  // Синхронний виклик без debounce — для init та зміни валюти
  clearTimeout(_calcTimer);
  _doCalc(direction);
}

function _doCalc(direction) {
  const fromEl = document.getElementById('fromCurrency');
  const toEl   = document.getElementById('toCurrency');
  if (!fromEl || !toEl) return;

  const from      = fromEl.value;
  const to        = toEl.value;
  const fromInput = document.getElementById('fromAmount');
  const toInput   = document.getElementById('toAmount');
  if (!fromInput || !toInput) return;

  const spread = 0.988;

  if (direction === 'from') {
    const amt = parseFloat(fromInput.value);
    if (!amt || amt <= 0) {
      toInput.value = '';
      updateExchangeUI(from, to, 0, 0);
      return;
    }
    const result = convertAmount(from, to, amt, spread);
    toInput.value = formatCryptoAmt(to, result);
    _animateInput(toInput, true);
    updateExchangeUI(from, to, amt, result);

  } else {
    const amt = parseFloat(toInput.value);
    if (!amt || amt <= 0) {
      fromInput.value = '';
      updateExchangeUI(from, to, 0, 0);
      return;
    }
    // Зворотна конвертація
    const result = convertAmount(to, from, amt, 1 / spread);
    fromInput.value = formatCryptoAmt(from, result);
    _animateInput(fromInput, true);
    updateExchangeUI(from, to, result, amt);
  }
}

function _animateInput(el, hasValue) {
  if (!el) return;
  el.style.transition = 'color 0.2s';
  el.style.color = hasValue ? 'var(--accent)' : 'var(--text)';
  setTimeout(() => { el.style.color = 'var(--text)'; }, 400);
}

function updateExchangeUI(from, to, fromAmt, toAmt) {
  const usdRate = 41.2;
  const spread  = 0.988;

  // USD equivalents
  const fromUAH = from === 'UAH' ? fromAmt : fromAmt * (rates[from]?.price || 0);
  const toUAH   = to   === 'UAH' ? toAmt   : toAmt   * (rates[to]?.price   || 0);
  const fromUSD = fromUAH / usdRate;
  const toUSD   = toUAH   / usdRate;

  const fromUSDEl = document.getElementById('from-usd-equiv');
  const toUSDEl   = document.getElementById('to-usd-equiv');
  if (fromUSDEl) fromUSDEl.textContent = fromAmt > 0 ? '≈ $' + fromUSD.toFixed(2) : '≈ $0.00';
  if (toUSDEl)   toUSDEl.textContent   = toAmt   > 0 ? '≈ $' + toUSD.toFixed(2)   : '≈ $0.00';

  // Rate line: показуємо скільки UAH за 1 одиницю відправки
  let rateText;
  if (from === to) {
    rateText = '1 ' + from + ' = 1 ' + to;
  } else if (from === 'UAH') {
    const r = (rates[to]?.price || 1);
    rateText = `1 UAH = ${(1/r * spread).toFixed(8).replace(/\.?0+$/,'')} ${to}`;
  } else if (to === 'UAH') {
    rateText = `1 ${from} = ${((rates[from]?.price||1) * spread).toLocaleString('uk-UA', {maximumFractionDigits:2})} UAH`;
  } else {
    const crossRate = (rates[from]?.price || 1) / (rates[to]?.price || 1) * spread;
    rateText = `1 ${from} = ${crossRate.toFixed(6).replace(/\.?0+$/,'')} ${to}`;
  }
  const rateEl = document.getElementById('rateDisplay');
  if (rateEl) rateEl.textContent = rateText;

  // Exact amounts summary
  const fmtFrom = fromAmt > 0
    ? (from === 'UAH'
        ? '₴' + fromAmt.toLocaleString('uk-UA', {minimumFractionDigits:2, maximumFractionDigits:2})
        : formatCryptoAmt(from, fromAmt) + ' ' + from)
    : '—';
  const fmtTo = toAmt > 0
    ? (to === 'UAH'
        ? '₴' + toAmt.toLocaleString('uk-UA', {minimumFractionDigits:2, maximumFractionDigits:2})
        : formatCryptoAmt(to, toAmt) + ' ' + to)
    : '—';

  const exactSend = document.getElementById('exact-send');
  const exactGet  = document.getElementById('exact-get');
  if (exactSend) exactSend.textContent = fmtFrom;
  if (exactGet)  exactGet.textContent  = fmtTo;

  // Auto/Manual mode badge
  const AUTO_LIMIT_USD = 3000;
  const isAuto = toUSD <= AUTO_LIMIT_USD && toAmt > 0;
  const modeBadge = document.getElementById('mode-badge');
  if (modeBadge) {
    if (toAmt <= 0) {
      modeBadge.textContent = '—';
      modeBadge.style.background = 'rgba(107,122,153,0.15)';
      modeBadge.style.color = 'var(--muted)';
    } else if (isAuto) {
      modeBadge.textContent = '⚡ Авто';
      modeBadge.style.background = 'rgba(0,229,160,0.12)';
      modeBadge.style.color = 'var(--accent)';
    } else {
      modeBadge.textContent = '👤 Ручний';
      modeBadge.style.background = 'rgba(245,197,24,0.12)';
      modeBadge.style.color = 'var(--gold)';
    }
  }
}

function startExchange() {
  const from    = document.getElementById('fromCurrency').value;
  const to      = document.getElementById('toCurrency').value;
  const fromAmt = parseFloat(document.getElementById('fromAmount').value);
  const toAmt   = parseFloat(document.getElementById('toAmount').value);

  if (!fromAmt || fromAmt <= 0) {
    const fi = document.getElementById('fromAmount');
    fi.style.border = '2px solid var(--danger)';
    setTimeout(() => fi.style.border = '', 1500);
    showToastMsg('⚠️', 'Введіть суму для обміну');
    return;
  }

  // Pre-fill order modal
  const usdRate = 41.2;
  const toUSD   = to === 'UAH' ? toAmt / usdRate : toAmt * (rates[to]?.price || 0) / usdRate;
  const isAuto  = toUSD <= 3000;

  const fmtFrom = from === 'UAH'
    ? '₴' + fromAmt.toLocaleString('uk-UA', {minimumFractionDigits:2}) : fromAmt.toFixed(8).replace(/\.?0+$/,'') + ' ' + from;
  const fmtTo = to === 'UAH'
    ? '₴' + toAmt.toLocaleString('uk-UA', {minimumFractionDigits:2}) : toAmt.toFixed(8).replace(/\.?0+$/,'') + ' ' + to;
  const rateEl = document.getElementById('rateDisplay');

  document.getElementById('ord-from').textContent = fmtFrom;
  document.getElementById('ord-to').textContent   = fmtTo;
  document.getElementById('ord-rate').textContent = rateEl ? rateEl.textContent : '—';

  const modeEl = document.getElementById('ord-mode');
  if (isAuto) {
    modeEl.textContent = '⚡ Авто';
    modeEl.style.background = 'rgba(0,229,160,0.12)';
    modeEl.style.color = 'var(--accent)';
  } else {
    modeEl.textContent = '👤 Ручний';
    modeEl.style.background = 'rgba(245,197,24,0.12)';
    modeEl.style.color = 'var(--gold)';
  }

  // Show/hide card vs wallet address field
  const receivingCrypto = to !== 'UAH';
  document.getElementById('ord-card-group').style.display   = receivingCrypto ? 'none' : 'block';
  document.getElementById('ord-wallet-group').style.display = receivingCrypto ? 'block' : 'none';
  if (receivingCrypto) {
    document.getElementById('ord-wallet-label').textContent = `Адреса ${to}-гаманця *`;
    document.getElementById('ord-wallet').placeholder = to === 'BTC' ? 'bc1q...' : to === 'ETH' || to === 'BNB' ? '0x...' : `${to} address...`;
  }

  // Pre-fill from session
  const user = sessionLoad();
  if (user) {
    const emailInput = document.getElementById('ord-email');
    if (emailInput && !emailInput.value) emailInput.value = user.email;
    const phoneInput = document.getElementById('ord-phone');
    if (phoneInput && !phoneInput.value) phoneInput.value = user.phone || '';
  }

  openModal('order');
}

function formatOrdCard(input) {
  let v = input.value.replace(/\D/g,'').slice(0,16);
  input.value = v.replace(/(\d{4})(?=\d)/g,'$1 ');
}

function submitOrder() {
  const email = document.getElementById('ord-email').value.trim();
  const phone = document.getElementById('ord-phone').value.trim();
  const receivingCrypto = document.getElementById('ord-wallet-group').style.display !== 'none';
  const cardVal   = document.getElementById('ord-card').value.replace(/\s/g,'');
  const walletVal = document.getElementById('ord-wallet').value.trim();

  clearFormError('ord-error');

  if (!validateEmail(email))         return showFormError('ord-error', 'Введіть коректний email');
  if (!validatePhone(phone))         return showFormError('ord-error', 'Введіть коректний номер телефону');
  if (!receivingCrypto && cardVal.length !== 16) return showFormError('ord-error', 'Введіть коректний 16-значний номер картки');
  if (receivingCrypto && walletVal.length < 10)  return showFormError('ord-error', 'Введіть коректну адресу гаманця');

  const orderId = 'SUA-' + Date.now().toString(36).toUpperCase().slice(-6);
  const from    = document.getElementById('fromCurrency').value;
  const to      = document.getElementById('toCurrency').value;
  const fromAmt = parseFloat(document.getElementById('fromAmount').value);
  const toAmt   = parseFloat(document.getElementById('toAmount').value);
  const fmtFrom = from === 'UAH' ? '₴' + fromAmt.toFixed(2) : fromAmt.toFixed(8).replace(/\.?0+$/,'') + ' ' + from;
  const fmtTo   = to   === 'UAH' ? '₴' + toAmt.toFixed(2)   : toAmt.toFixed(8).replace(/\.?0+$/,'') + ' ' + to;
  const usdRate = 41.2;
  const toUSD   = to === 'UAH' ? toAmt / usdRate : toAmt * (rates[to]?.price || 0) / usdRate;
  const isAuto  = toUSD <= 3000;

  // Close order modal, show success
  closeModal('order');

  document.getElementById('order-id-val').textContent = orderId;
  document.getElementById('success-desc').textContent = `Заявку прийнято. Підтвердження надіслано на ${email}.`;

  document.getElementById('order-details-box').innerHTML = `
    <div style="display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid var(--border)">
      <span style="color:var(--muted)">Відправляєте</span><span style="font-weight:600">${fmtFrom}</span>
    </div>
    <div style="display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid var(--border)">
      <span style="color:var(--muted)">Отримуєте</span><span style="font-weight:600;color:var(--accent)">${fmtTo}</span>
    </div>
    <div style="display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid var(--border)">
      <span style="color:var(--muted)">Режим</span>
      <span style="font-weight:700;color:${isAuto ? 'var(--accent)' : 'var(--gold)'}">${isAuto ? '⚡ Автоматичний' : '👤 Ручний'}</span>
    </div>
    <div style="display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid var(--border)">
      <span style="color:var(--muted)">Email</span><span>${email}</span>
    </div>
    <div style="display:flex;justify-content:space-between">
      <span style="color:var(--muted)">${receivingCrypto ? 'Гаманець' : 'Картка'}</span>
      <span style="font-family:monospace;font-size:12px">${receivingCrypto ? walletVal.slice(0,14)+'...' : '•••• •••• •••• '+cardVal.slice(-4)}</span>
    </div>
  `;

  setTimeout(() => openModal('order-success'), 200);
  showToastMsg('🎉', `Заявку ${orderId} прийнято!`);
}

function swapCurrencies() {
  const fromSel = document.getElementById('fromCurrency');
  const toSel = document.getElementById('toCurrency');
  const tmp = fromSel.value;
  fromSel.value = toSel.value;
  toSel.value = tmp;
  updateRate();
}

// ─── TICKER ───
function buildTicker() {
  const items = [
    ...Object.entries(rates).map(([sym, r]) => {
      const up = r.change >= 0;
      return `<div class="ticker-item">
        <span class="coin-icon ${r.cls}" style="width:20px;height:20px;font-size:10px;display:inline-flex;align-items:center;justify-content:center;border-radius:50%">${r.icon}</span>
        <span class="ticker-name">${sym}/UAH</span>
        <span class="ticker-price">${r.price.toLocaleString('uk-UA')} ₴</span>
        <span class="ticker-change ${up ? 'up' : 'down'}">${up ? '▲' : '▼'} ${Math.abs(r.change)}%</span>
      </div>`;
    })
  ];
  const doubled = [...items, ...items].join('');
  document.getElementById('ticker').innerHTML = doubled;
}

// ─── TABS ───
function switchTab(id) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  event.target.classList.add('active');
}

// ══════════════════════════════════════════
// ─── USER DATABASE (localStorage) ─────────
// ══════════════════════════════════════════

const DB_KEY   = 'swapua_users';
const SESS_KEY = 'swapua_session';

function dbLoad() {
  try { return JSON.parse(localStorage.getItem(DB_KEY)) || []; }
  catch { return []; }
}
function dbSave(users) {
  localStorage.setItem(DB_KEY, JSON.stringify(users));
}
function sessionLoad() {
  try { return JSON.parse(localStorage.getItem(SESS_KEY)); }
  catch { return null; }
}
function sessionSave(user) {
  localStorage.setItem(SESS_KEY, JSON.stringify(user));
}
function sessionClear() {
  localStorage.removeItem(SESS_KEY);
}

// Simple hash (FNV-1a style — suitable for demo, not production crypto)
function hashPassword(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (h * 16777619) >>> 0;
  }
  return h.toString(16).padStart(8,'0') + '-' + btoa(str.split('').reverse().join('')).slice(0,12);
}

function generateId() {
  return 'u_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6);
}

function avatarColor(name) {
  const colors = [
    'linear-gradient(135deg,#00e5a0,#00c882)',
    'linear-gradient(135deg,#0077ff,#0055cc)',
    'linear-gradient(135deg,#f5c518,#e0a800)',
    'linear-gradient(135deg,#ff4d6d,#c9184a)',
    'linear-gradient(135deg,#9945ff,#7b2ff7)',
    'linear-gradient(135deg,#ff6b35,#e85d04)',
  ];
  let h = 0;
  for (const c of name) h = (h * 31 + c.charCodeAt(0)) | 0;
  return colors[Math.abs(h) % colors.length];
}

// ─── SEED DEMO DATA ───
(function seedDemo() {
  const users = dbLoad();
  if (users.length === 0) {
    const demo = [
      { id:'u_demo_admin', firstName:'Адміністратор', lastName:'SwapUA', email:'admin@swapua.com',
        phone:'+380501234567', passwordHash: hashPassword('Admin123!'),
        role:'admin', bonus:0, createdAt: new Date(Date.now()-86400000*30).toISOString(),
        lastLogin: new Date().toISOString(), verified:true },
      { id:'u_demo1', firstName:'Олексій', lastName:'Коваленко', email:'alex@gmail.com',
        phone:'+380671112233', passwordHash: hashPassword('Test1234'),
        role:'user', bonus:50, createdAt: new Date(Date.now()-86400000*12).toISOString(),
        lastLogin: new Date(Date.now()-3600000*5).toISOString(), verified:true },
      { id:'u_demo2', firstName:'Марія', lastName:'Бондаренко', email:'maria@ukr.net',
        phone:'+380931234567', passwordHash: hashPassword('Pass5678'),
        role:'user', bonus:50, createdAt: new Date(Date.now()-86400000*3).toISOString(),
        lastLogin: new Date(Date.now()-3600000*2).toISOString(), verified:false },
    ];
    dbSave(demo);
  }
})();

// ─── VALIDATION ───
function validateEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e); }
function validatePassword(p) { return p.length >= 8 && /[A-Z]/.test(p) && /[0-9]/.test(p); }
function validatePhone(p) { return !p || /^\+?[\d\s\-()]{7,15}$/.test(p); }

function checkPasswordStrength(pw) {
  const fill = document.getElementById('pw-strength-fill');
  if (!fill) return;
  let score = 0;
  if (pw.length >= 8) score++;
  if (/[A-Z]/.test(pw)) score++;
  if (/[0-9]/.test(pw)) score++;
  if (/[^A-Za-z0-9]/.test(pw)) score++;
  if (pw.length >= 12) score++;
  const pct = (score / 5) * 100;
  const colors = ['#ff4d6d','#ff6b35','#f5c518','#7ed957','#00e5a0'];
  fill.style.width = pct + '%';
  fill.style.background = colors[score - 1] || '#ff4d6d';
}

// ─── REGISTER ───
function doRegister() {
  const fn    = document.getElementById('reg-firstname').value.trim();
  const ln    = document.getElementById('reg-lastname').value.trim();
  const email = document.getElementById('reg-email').value.trim().toLowerCase();
  const phone = document.getElementById('reg-phone').value.trim();
  const pw    = document.getElementById('reg-password').value;
  const pw2   = document.getElementById('reg-password2').value;
  const terms = document.getElementById('reg-terms').checked;

  if (!fn || !ln)          return showFormError('reg-error', "Введіть ім'я та прізвище");
  if (!validateEmail(email)) return showFormError('reg-error', 'Некоректний email');
  if (!validatePhone(phone)) return showFormError('reg-error', 'Некоректний номер телефону');
  if (!validatePassword(pw)) return showFormError('reg-error', 'Пароль: мін. 8 символів, 1 велика буква, 1 цифра');
  if (pw !== pw2)            return showFormError('reg-error', 'Паролі не збігаються');
  if (!terms)                return showFormError('reg-error', 'Прийміть умови використання');

  const users = dbLoad();
  if (users.find(u => u.email === email))
    return showFormError('reg-error', 'Цей email вже зареєстрований');

  const newUser = {
    id: generateId(),
    firstName: fn, lastName: ln,
    email, phone,
    passwordHash: hashPassword(pw),
    role: 'user',
    bonus: 50,
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString(),
    verified: false,
  };

  users.push(newUser);
  dbSave(users);
  sessionSave(newUser);

  closeModal('register');
  updateHeaderForUser(newUser);
  showToastMsg('🎉', `Вітаємо, ${fn}! Бонус ₴50 нараховано 🎁`);
  setTimeout(() => openCabinet(), 400);
}

// ─── LOGIN ───
function doLogin() {
  const email = document.getElementById('login-email').value.trim().toLowerCase();
  const pw    = document.getElementById('login-password').value;

  if (!validateEmail(email)) return showFormError('login-error','Некоректний email');
  if (!pw) return showFormError('login-error','Введіть пароль');

  const users = dbLoad();
  const user  = users.find(u => u.email === email && u.passwordHash === hashPassword(pw));

  if (!user) return showFormError('login-error','Невірний email або пароль');

  // update lastLogin
  user.lastLogin = new Date().toISOString();
  dbSave(users);
  sessionSave(user);

  closeModal('login');
  updateHeaderForUser(user);
  showToastMsg('✅', `З поверненням, ${user.firstName}! 👋`);
  if (user.role === 'admin') setTimeout(() => openAdminPanel(), 400);
  else setTimeout(() => openCabinet(), 400);
}

// ─── LOGOUT ───
function doLogout() {
  sessionClear();
  closeModal('cabinet');
  closeModal('admin');
  updateHeaderForUser(null);
  showToastMsg('👋', 'Ви вийшли з акаунту');
}

// ─── HEADER STATE ───
function updateHeaderForUser(user) {
  const loginBtn = document.getElementById('header-login-btn');
  const regBtn   = document.getElementById('header-reg-btn');
  const userMenu = document.getElementById('header-user-menu');

  if (!loginBtn || !regBtn || !userMenu) return;

  if (user) {
    loginBtn.style.display = 'none';
    regBtn.style.display   = 'none';
    userMenu.style.display = 'flex';
    const initials = (user.firstName[0] + user.lastName[0]).toUpperCase();
    document.getElementById('header-avatar').textContent = initials;
    document.getElementById('header-avatar').style.background = avatarColor(user.firstName);
    document.getElementById('header-username').textContent = user.firstName;
    if (user.role === 'admin') {
      document.getElementById('header-role-badge').style.display = 'inline';
    }
  } else {
    loginBtn.style.display = '';
    regBtn.style.display   = '';
    userMenu.style.display = 'none';
  }
}

// ─── USER CABINET ───
function openCabinet() {
  const user = sessionLoad();
  if (!user) { openModal('login'); return; }

  const users = dbLoad();
  const fresh = users.find(u => u.id === user.id) || user;

  const initials = (fresh.firstName[0] + fresh.lastName[0]).toUpperCase();
  const created  = new Date(fresh.createdAt).toLocaleDateString('uk-UA');
  const lastLogin= new Date(fresh.lastLogin).toLocaleString('uk-UA');

  document.getElementById('cabinet-content').innerHTML = `
    <div style="display:flex;align-items:center;gap:14px;margin-bottom:24px">
      <div class="user-avatar" style="background:${avatarColor(fresh.firstName)};width:60px;height:60px;font-size:22px">${initials}</div>
      <div>
        <h2 style="font-family:Syne,sans-serif;font-size:20px;font-weight:800;letter-spacing:-0.5px">${fresh.firstName} ${fresh.lastName}</h2>
        <p style="font-size:12px;color:var(--muted);margin-top:2px">${fresh.email}</p>
        <span class="badge-role ${fresh.role==='admin'?'badge-admin':'badge-user'}">${fresh.role==='admin'?'Адміністратор':'Користувач'}</span>
      </div>
      <button onclick="doLogout()" style="margin-left:auto;padding:8px 14px;background:rgba(255,77,109,0.1);border:1px solid rgba(255,77,109,0.3);border-radius:10px;color:#ff4d6d;font-size:12px;font-weight:600;cursor:pointer">Вийти</button>
    </div>

    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:24px">
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:16px;text-align:center">
        <div style="font-family:Syne,sans-serif;font-size:22px;font-weight:800;color:var(--accent)">₴${fresh.bonus}</div>
        <div style="font-size:11px;color:var(--muted);margin-top:4px">Бонусний баланс</div>
      </div>
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:16px;text-align:center;cursor:pointer" onclick="closeModal('cabinet');setTimeout(openWallet,200)">
        <div style="font-family:Syne,sans-serif;font-size:22px;font-weight:800;color:var(--accent2)">💼</div>
        <div style="font-size:11px;color:var(--muted);margin-top:4px">Мій гаманець</div>
      </div>
      <div style="background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:16px;text-align:center">
        <div style="font-family:Syne,sans-serif;font-size:22px;font-weight:800;color:${fresh.verified?'var(--accent)':'var(--gold)'}">${fresh.verified?'✓':'⏳'}</div>
        <div style="font-size:11px;color:var(--muted);margin-top:4px">KYC статус</div>
      </div>
    </div>

    <div style="background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:20px;margin-bottom:16px">
      <h3 style="font-family:Syne,sans-serif;font-size:15px;font-weight:700;margin-bottom:14px">Профіль</h3>
      <div style="display:grid;gap:8px;font-size:13px">
        <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)">
          <span style="color:var(--muted)">📧 Email</span><span>${fresh.email}</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)">
          <span style="color:var(--muted)">📱 Телефон</span><span>${fresh.phone || '—'}</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)">
          <span style="color:var(--muted)">📅 Реєстрація</span><span>${created}</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:8px 0">
          <span style="color:var(--muted)">🕐 Останній вхід</span><span>${lastLogin}</span>
        </div>
      </div>
    </div>

    ${fresh.role==='admin' ? `<button onclick="closeModal('cabinet');setTimeout(()=>openAdminPanel(),200)" style="width:100%;padding:13px;background:rgba(255,77,109,0.1);border:1px solid rgba(255,77,109,0.3);border-radius:12px;color:#ff4d6d;font-family:Syne,sans-serif;font-size:14px;font-weight:700;cursor:pointer;margin-bottom:10px">🛡️ Відкрити адмін-панель</button>` : ''}
    <button onclick="closeModal('cabinet');setTimeout(openWallet,200)" style="width:100%;padding:13px;background:rgba(0,119,255,0.1);border:1px solid rgba(0,119,255,0.3);border-radius:12px;color:var(--accent2);font-family:Syne,sans-serif;font-size:14px;font-weight:700;cursor:pointer">💼 Відкрити гаманець</button>
  `;
  openModal('cabinet');
}

// ─── ADMIN PANEL ───
function openAdminPanel() {
  const user = sessionLoad();
  if (!user || user.role !== 'admin') {
    showToastMsg('🚫','Доступ заборонено');
    return;
  }
  renderAdminStats();
  renderAdminTable();
  openModal('admin');
}

function renderAdminStats() {
  const users   = dbLoad();
  const total   = users.length;
  const verified= users.filter(u => u.verified).length;
  const today   = users.filter(u => new Date(u.createdAt) > new Date(Date.now()-86400000)).length;

  document.getElementById('admin-stats').innerHTML = `
    <div style="background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:16px;text-align:center">
      <div style="font-family:Syne,sans-serif;font-size:26px;font-weight:800;color:var(--accent)">${total}</div>
      <div style="font-size:11px;color:var(--muted);margin-top:4px">Всього користувачів</div>
    </div>
    <div style="background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:16px;text-align:center">
      <div style="font-family:Syne,sans-serif;font-size:26px;font-weight:800;color:var(--accent2)">${verified}</div>
      <div style="font-size:11px;color:var(--muted);margin-top:4px">Верифіковано (KYC)</div>
    </div>
    <div style="background:var(--bg);border:1px solid var(--border);border-radius:14px;padding:16px;text-align:center">
      <div style="font-family:Syne,sans-serif;font-size:26px;font-weight:800;color:var(--gold)">+${today}</div>
      <div style="font-size:11px;color:var(--muted);margin-top:4px">Нових за сьогодні</div>
    </div>
  `;
}

function renderAdminTable() {
  const q     = (document.getElementById('admin-search')?.value||'').toLowerCase();
  const users = dbLoad().filter(u =>
    u.email.includes(q) ||
    (u.firstName+' '+u.lastName).toLowerCase().includes(q)
  );

  if (users.length === 0) {
    document.getElementById('admin-table').innerHTML =
      '<div style="text-align:center;padding:30px;color:var(--muted);font-size:14px">Користувачів не знайдено</div>';
    return;
  }

  document.getElementById('admin-table').innerHTML = users.map(u => {
    const initials = (u.firstName[0]+u.lastName[0]).toUpperCase();
    const date     = new Date(u.createdAt).toLocaleDateString('uk-UA');
    const walBal   = walletLoad(u.id);
    let totalUAH   = walBal.UAH || 0;
    Object.keys(rates).forEach(sym => { totalUAH += (walBal[sym]||0) * rates[sym].price; });
    const fmtBal   = '₴' + totalUAH.toLocaleString('uk-UA', {maximumFractionDigits:0});
    return `
    <div class="admin-row">
      <div class="user-avatar" style="background:${avatarColor(u.firstName)};width:46px;height:46px;font-size:15px">${initials}</div>
      <div>
        <div style="font-size:13px;font-weight:600">${u.firstName} ${u.lastName}</div>
        <div style="font-size:11px;color:var(--muted)">${u.email}</div>
      </div>
      <div style="font-size:11px;color:var(--muted)">
        <div>${u.phone || '—'}</div>
        <div style="margin-top:3px">Реєстрація: ${date}</div>
        <div style="margin-top:3px;color:var(--accent);font-weight:600">${fmtBal}</div>
      </div>
      <div>
        <span class="badge-role ${u.role==='admin'?'badge-admin':'badge-user'}">${u.role==='admin'?'Admin':'User'}</span>
        <div style="margin-top:5px;font-size:10px;color:${u.verified?'var(--accent)':'var(--gold)'}">${u.verified?'✓ KYC':'⏳ Не верифіковано'}</div>
      </div>
      <div style="display:flex;gap:6px">
        <button onclick="adminToggleKYC('${u.id}')" title="KYC" style="width:30px;height:30px;background:rgba(0,229,160,0.1);border:1px solid rgba(0,229,160,0.2);border-radius:8px;cursor:pointer;font-size:14px">✓</button>
        <button onclick="adminDeleteUser('${u.id}')" title="Видалити" style="width:30px;height:30px;background:rgba(255,77,109,0.1);border:1px solid rgba(255,77,109,0.2);border-radius:8px;cursor:pointer;font-size:14px">🗑</button>
      </div>
    </div>`;
  }).join('');
}

function adminToggleKYC(id) {
  const users = dbLoad();
  const u = users.find(x => x.id === id);
  if (!u) return;
  u.verified = !u.verified;
  dbSave(users);
  renderAdminStats();
  renderAdminTable();
  showToastMsg('✅', `KYC для ${u.firstName}: ${u.verified ? 'підтверджено' : 'скасовано'}`);
}

function adminDeleteUser(id) {
  const users = dbLoad();
  const u = users.find(x => x.id === id);
  if (!u) return;
  if (u.role === 'admin') { showToastMsg('🚫','Не можна видалити адміна'); return; }
  dbSave(users.filter(x => x.id !== id));
  renderAdminStats();
  renderAdminTable();
  showToastMsg('🗑️', `Користувача ${u.email} видалено`);
}

function exportUsers() {
  const data = JSON.stringify(dbLoad(), null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const a    = document.createElement('a');
  a.href     = URL.createObjectURL(blob);
  a.download = `swapua_users_${new Date().toISOString().slice(0,10)}.json`;
  a.click();
}

// ─── MODAL SYSTEM ───
function openModal(type) {
  document.getElementById(`modal-${type}`).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(type) {
  document.getElementById(`modal-${type}`).classList.remove('open');
  document.body.style.overflow = '';
}
function switchModal(from, to) {
  closeModal(from);
  setTimeout(() => openModal(to), 250);
}

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});

// ─── HELPERS ───
function showFormError(id, msg) {
  const el = document.getElementById(id);
  if (el) { el.textContent = '⚠ ' + msg; el.style.display = 'block'; }
}
function clearFormError(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}
function togglePass(id, btn) {
  const input = document.getElementById(id);
  if (!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
  btn.textContent = input.type === 'password' ? '👁' : '🙈';
}

// ─── TOAST ───
function showToast(icon, msgKey) {
  showToastMsg(icon, i18n[currentLang][msgKey] || msgKey);
}
function showToastMsg(icon, text) {
  const toast = document.getElementById('toast');
  document.getElementById('toastIcon').textContent = icon;
  document.getElementById('toastMsg').textContent  = text;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ══════════════════════════════════════════
// ─── WALLET SYSTEM ────────────────────────
// ══════════════════════════════════════════

const WALLET_KEY = 'swapua_wallets';
const TX_KEY     = 'swapua_txns';

function walletLoad(userId) {
  try {
    const all = JSON.parse(localStorage.getItem(WALLET_KEY)) || {};
    if (!all[userId]) {
      all[userId] = { UAH:0, BTC:0, ETH:0, USDT:0, BNB:0, SOL:0 };
      localStorage.setItem(WALLET_KEY, JSON.stringify(all));
    }
    return all[userId];
  } catch { return { UAH:0, BTC:0, ETH:0, USDT:0, BNB:0, SOL:0 }; }
}

function walletSave(userId, balances) {
  try {
    const all = JSON.parse(localStorage.getItem(WALLET_KEY)) || {};
    all[userId] = balances;
    localStorage.setItem(WALLET_KEY, JSON.stringify(all));
  } catch {}
}

function txLoad(userId) {
  try {
    const all = JSON.parse(localStorage.getItem(TX_KEY)) || {};
    return all[userId] || [];
  } catch { return []; }
}

function txSave(userId, txns) {
  try {
    const all = JSON.parse(localStorage.getItem(TX_KEY)) || {};
    all[userId] = txns.slice(0, 100); // keep last 100
    localStorage.setItem(TX_KEY, JSON.stringify(all));
  } catch {}
}

function txAdd(userId, tx) {
  const txns = txLoad(userId);
  txns.unshift({ id: 'tx_' + Date.now().toString(36), ...tx, date: new Date().toISOString() });
  txSave(userId, txns);
}

// Seed demo wallets for existing users
(function seedDemoWallets() {
  const users = dbLoad();
  users.forEach(u => {
    const all = JSON.parse(localStorage.getItem(WALLET_KEY)) || {};
    if (!all[u.id]) {
      if (u.role === 'admin') {
        all[u.id] = { UAH: 25000, BTC: 0.025, ETH: 1.2, USDT: 1500, BNB: 3.5, SOL: 22 };
      } else if (u.id === 'u_demo1') {
        all[u.id] = { UAH: 4350, BTC: 0.0012, ETH: 0.08, USDT: 200, BNB: 0, SOL: 0 };
        txSave(u.id, [
          { id:'tx_d1', type:'topup', currency:'UAH', amount:5000, fee:75, cardLast4:'4441', status:'success', date: new Date(Date.now()-86400000*2).toISOString() },
          { id:'tx_d2', type:'topup', currency:'USDT', amount:200, fee:3, cardLast4:'4441', status:'success', date: new Date(Date.now()-86400000).toISOString() },
          { id:'tx_d3', type:'send', currency:'UAH', amount:650, fee:0, address:'5168XXXXXXXXXXXX', status:'success', date: new Date(Date.now()-3600000*3).toISOString() },
        ]);
      } else {
        all[u.id] = { UAH: 50, BTC: 0, ETH: 0, USDT: 0, BNB: 0, SOL: 0 };
      }
      localStorage.setItem(WALLET_KEY, JSON.stringify(all));
    }
  });
})();

// ─── OPEN WALLET ───
function openWallet() {
  const user = sessionLoad();
  if (!user) { openModal('login'); return; }

  document.getElementById('wallet-user-email').textContent = user.email;
  switchWalletTab('overview');
  renderWalletOverview();
  openModal('wallet');
}

// ─── WALLET TABS ───
function switchWalletTab(tab) {
  document.querySelectorAll('.wtab-content').forEach(t => t.style.display = 'none');
  document.querySelectorAll('.wtab').forEach(b => {
    b.classList.remove('active');
    b.style.background = 'transparent';
    b.style.color = 'var(--muted)';
  });
  document.getElementById('wtab-' + tab).style.display = 'block';
  const activeBtn = document.querySelector(`.wtab[onclick="switchWalletTab('${tab}')"]`);
  if (activeBtn) {
    activeBtn.classList.add('active');
    activeBtn.style.background = 'rgba(0,229,160,0.12)';
    activeBtn.style.color = 'var(--accent)';
  }

  if (tab === 'overview') renderWalletOverview();
  if (tab === 'history')  renderWalletHistory();
  if (tab === 'send')     updateSendBalance();
}

// ─── OVERVIEW ───
function renderWalletOverview() {
  const user = sessionLoad();
  if (!user) return;
  const bal = walletLoad(user.id);

  // Total in UAH
  let totalUAH = bal.UAH || 0;
  Object.keys(rates).forEach(sym => {
    totalUAH += (bal[sym] || 0) * rates[sym].price;
  });
  const totalUSD = totalUAH / 41.2;

  document.getElementById('wallet-total-uah').textContent = '₴' + totalUAH.toLocaleString('uk-UA', {minimumFractionDigits:2, maximumFractionDigits:2});
  document.getElementById('wallet-total-usd').textContent = '≈ $' + totalUSD.toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits:2}) + ' USD';

  const coinDefs = [
    { sym:'UAH', icon:'₴', cls:'uah', name:'Гривня' },
    { sym:'BTC', icon:'₿', cls:'btc', name:'Bitcoin' },
    { sym:'ETH', icon:'Ξ', cls:'eth', name:'Ethereum' },
    { sym:'USDT', icon:'₮', cls:'usdt', name:'Tether' },
    { sym:'BNB', icon:'B', cls:'bnb', name:'BNB Chain' },
    { sym:'SOL', icon:'S', cls:'sol', name:'Solana' },
  ];

  document.getElementById('wallet-coins-list').innerHTML = coinDefs.map(c => {
    const amount = bal[c.sym] || 0;
    const uahVal = c.sym === 'UAH' ? amount : amount * (rates[c.sym]?.price || 0);
    const fmtAmt = c.sym === 'UAH'
      ? '₴' + amount.toLocaleString('uk-UA', {minimumFractionDigits:2, maximumFractionDigits:2})
      : amount.toFixed(6).replace(/\.?0+$/, '') || '0';
    const fmtUAH = '≈ ₴' + uahVal.toLocaleString('uk-UA', {minimumFractionDigits:0, maximumFractionDigits:0});
    const change = rates[c.sym]?.change || 0;
    const up = change >= 0;

    return `
    <div class="coin-balance-row">
      <div style="display:flex;align-items:center;gap:12px">
        <div class="coin-icon ${c.cls}" style="width:38px;height:38px;font-size:16px;flex-shrink:0">${c.icon}</div>
        <div>
          <div style="font-family:Syne,sans-serif;font-size:14px;font-weight:700">${c.sym}</div>
          <div style="font-size:11px;color:var(--muted)">${c.name}</div>
        </div>
      </div>
      <div style="text-align:right">
        <div style="font-family:Syne,sans-serif;font-size:14px;font-weight:700">${fmtAmt}</div>
        <div style="font-size:11px;color:var(--muted)">${c.sym !== 'UAH' ? fmtUAH : '&nbsp;'}</div>
      </div>
      ${c.sym !== 'UAH' ? `<div style="text-align:right;min-width:50px">
        <span style="font-size:11px;color:${up?'var(--accent)':'var(--danger)'}">${up?'▲':'▼'} ${Math.abs(change)}%</span>
      </div>` : '<div></div>'}
    </div>`;
  }).join('');
}

// ─── HISTORY ───
function renderWalletHistory() {
  const user = sessionLoad();
  if (!user) return;
  const txns = txLoad(user.id);
  const el = document.getElementById('wallet-history-list');

  if (txns.length === 0) {
    el.innerHTML = `<div style="text-align:center;padding:40px 20px;color:var(--muted)">
      <div style="font-size:40px;margin-bottom:12px">📭</div>
      <div style="font-size:14px">Транзакцій поки що немає</div>
      <div style="font-size:12px;margin-top:6px">Поповніть гаманець щоб почати</div>
    </div>`;
    return;
  }

  el.innerHTML = txns.map(tx => {
    const isIn  = tx.type === 'topup';
    const date  = new Date(tx.date).toLocaleString('uk-UA', {day:'2-digit',month:'2-digit',hour:'2-digit',minute:'2-digit'});
    const iconBg = isIn ? 'rgba(0,229,160,0.12)' : 'rgba(0,119,255,0.12)';
    const sign   = isIn ? '+' : '−';
    const color  = isIn ? 'var(--accent)' : 'var(--accent2)';
    const statusColor = tx.status === 'success' ? 'var(--accent)' : tx.status === 'pending' ? 'var(--gold)' : 'var(--danger)';
    const statusLabel = tx.status === 'success' ? 'Виконано' : tx.status === 'pending' ? 'В процесі' : 'Помилка';
    const descLine = isIn
      ? `Поповнення з картки •••• ${tx.cardLast4 || '????'}`
      : `Відправлено на ${(tx.address||'').slice(0,12)}...`;

    return `
    <div class="tx-row">
      <div class="tx-icon" style="background:${iconBg}">${isIn ? '⬇️' : '⬆️'}</div>
      <div style="flex:1;min-width:0">
        <div style="font-size:13px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${descLine}</div>
        <div style="font-size:11px;color:var(--muted);margin-top:2px">${date} · <span style="color:${statusColor}">${statusLabel}</span></div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-family:Syne,sans-serif;font-size:14px;font-weight:700;color:${color}">${sign}${tx.amount} ${tx.currency}</div>
        ${tx.fee > 0 ? `<div style="font-size:10px;color:var(--muted)">комісія ${tx.fee}</div>` : ''}
      </div>
    </div>`;
  }).join('');
}

// ─── TOP-UP LOGIC ───
let selectedTopupCurrency = 'UAH';

function selectTopupCurrency(el, cur) {
  document.querySelectorAll('.curr-pick').forEach(e => e.classList.remove('active'));
  el.classList.add('active');
  selectedTopupCurrency = cur;
  updateTopupPreview();
}

function setTopupAmount(val) {
  document.getElementById('topup-amount').value = val;
  updateTopupPreview();
}

function updateTopupPreview() {
  const amt = parseFloat(document.getElementById('topup-amount').value);
  const prev = document.getElementById('topup-preview');
  if (!amt || amt <= 0) { prev.style.display = 'none'; return; }

  const fee     = +(amt * 0.015).toFixed(2);
  const net     = amt - fee;
  const cur     = selectedTopupCurrency;
  const received = cur === 'UAH' ? net : +(net / rates[cur].price).toFixed(8);
  const fmtReceived = cur === 'UAH'
    ? '₴' + received.toLocaleString('uk-UA', {minimumFractionDigits:2})
    : received + ' ' + cur;

  document.getElementById('prev-send').textContent = '₴' + amt.toLocaleString('uk-UA');
  document.getElementById('prev-fee').textContent  = '₴' + fee.toLocaleString('uk-UA');
  document.getElementById('prev-get').textContent  = fmtReceived;
  prev.style.display = 'block';
}

function formatCardNumber(input) {
  let v = input.value.replace(/\D/g,'').slice(0,16);
  input.value = v.replace(/(\d{4})(?=\d)/g,'$1 ');
}

function formatExpiry(input) {
  let v = input.value.replace(/\D/g,'').slice(0,4);
  if (v.length >= 2) v = v.slice(0,2) + '/' + v.slice(2);
  input.value = v;
}

function processTopup() {
  const user   = sessionLoad();
  if (!user) return;

  const amt    = parseFloat(document.getElementById('topup-amount').value);
  const cardNo = document.getElementById('card-number').value.replace(/\s/g,'');
  const expiry = document.getElementById('card-expiry').value;
  const cvv    = document.getElementById('card-cvv').value;
  const name   = document.getElementById('card-name').value.trim();

  clearFormError('topup-error');

  if (!amt || amt < 100)        return showFormError('topup-error','Мінімальна сума поповнення ₴100');
  if (amt > 50000)              return showFormError('topup-error','Максимальна сума ₴50,000 за раз');
  if (cardNo.length !== 16)     return showFormError('topup-error','Введіть коректний 16-значний номер картки');
  if (!/^\d{2}\/\d{2}$/.test(expiry)) return showFormError('topup-error','Формат дати: ММ/РР');
  if (cvv.length !== 3)         return showFormError('topup-error','CVV має містити 3 цифри');
  if (!name || name.length < 3) return showFormError('topup-error','Введіть ім\'я власника картки');

  // Check card expiry
  const [mm, yy] = expiry.split('/').map(Number);
  const now = new Date();
  if (mm < 1 || mm > 12 || yy + 2000 < now.getFullYear() || (yy + 2000 === now.getFullYear() && mm < now.getMonth() + 1))
    return showFormError('topup-error','Термін дії картки закінчився');

  // Animate processing
  const btn = document.getElementById('topup-btn');
  btn.disabled = true;
  btn.style.opacity = '0.7';

  closeModal('wallet');

  // Show processing modal
  document.getElementById('proc-icon').textContent = '⚡';
  document.getElementById('proc-icon').style.animation = 'procSpin 0.8s linear infinite';
  document.getElementById('proc-title').textContent = 'Обробляємо платіж...';
  document.getElementById('proc-desc').textContent  = 'Перевіряємо дані картки та проводимо транзакцію.';
  document.getElementById('proc-bar').style.width   = '0%';
  openModal('processing');

  let progress = 0;
  const steps = [
    { pct: 25, delay: 600,  title: 'Перевірка картки...', desc: '3D Secure авторизація...' },
    { pct: 55, delay: 1400, title: 'Підтвердження банку...', desc: 'Очікуємо підтвердження від банку-емітента.' },
    { pct: 80, delay: 2400, title: 'Зарахування коштів...', desc: 'Конвертація та зарахування на гаманець.' },
    { pct: 100, delay: 3400, title: null, desc: null },
  ];

  steps.forEach(s => {
    setTimeout(() => {
      document.getElementById('proc-bar').style.width = s.pct + '%';
      if (s.title) document.getElementById('proc-title').textContent = s.title;
      if (s.desc)  document.getElementById('proc-desc').textContent  = s.desc;
    }, s.delay);
  });

  setTimeout(() => {
    closeModal('processing');
    btn.disabled = false;
    btn.style.opacity = '1';

    // Commit to wallet
    const fee      = +(amt * 0.015).toFixed(2);
    const net      = amt - fee;
    const cur      = selectedTopupCurrency;
    const bal      = walletLoad(user.id);
    const received = cur === 'UAH' ? net : +(net / rates[cur].price * 0.988).toFixed(8);
    bal[cur]       = +((bal[cur] || 0) + received).toFixed(cur === 'UAH' ? 2 : 8);
    walletSave(user.id, bal);

    txAdd(user.id, {
      type: 'topup',
      currency: cur,
      amount: received,
      fee: fee,
      cardLast4: cardNo.slice(-4),
      status: 'success',
    });

    document.getElementById('proc-icon').textContent = '✅';
    document.getElementById('proc-icon').style.animation = 'none';
    document.getElementById('proc-title').textContent = 'Платіж успішний!';

    const fmtReceived = cur === 'UAH'
      ? '₴' + received.toLocaleString('uk-UA', {minimumFractionDigits:2})
      : received + ' ' + cur;

    showToastMsg('💰', `Гаманець поповнено! Зараховано ${fmtReceived}`);

    // Reset form
    document.getElementById('topup-amount').value  = '';
    document.getElementById('card-number').value   = '';
    document.getElementById('card-expiry').value   = '';
    document.getElementById('card-cvv').value      = '';
    document.getElementById('card-name').value     = '';
    document.getElementById('topup-preview').style.display = 'none';

    setTimeout(() => {
      openWallet();
    }, 600);
  }, 4200);
}

// ─── SEND LOGIC ───
function updateSendBalance() {
  const user = sessionLoad();
  if (!user) return;
  const cur = document.getElementById('send-currency').value;
  const bal = walletLoad(user.id);
  const amt = bal[cur] || 0;
  const fmtAmt = cur === 'UAH'
    ? '₴' + amt.toLocaleString('uk-UA', {minimumFractionDigits:2})
    : amt.toFixed(8).replace(/0+$/, '') + ' ' + cur;
  document.getElementById('send-available').textContent = `Доступно: ${fmtAmt}`;
}

function processSend() {
  const user    = sessionLoad();
  if (!user) return;
  const cur     = document.getElementById('send-currency').value;
  const amt     = parseFloat(document.getElementById('send-amount').value);
  const address = document.getElementById('send-address').value.trim();
  clearFormError('send-error');

  if (!amt || amt <= 0)   return showFormError('send-error', 'Введіть суму');
  if (!address)           return showFormError('send-error', 'Введіть адресу або номер картки');

  const bal = walletLoad(user.id);
  if ((bal[cur] || 0) < amt) return showFormError('send-error', 'Недостатньо коштів на балансі');

  bal[cur] = +((bal[cur] || 0) - amt).toFixed(cur === 'UAH' ? 2 : 8);
  walletSave(user.id, bal);

  txAdd(user.id, {
    type: 'send',
    currency: cur,
    amount: amt,
    fee: 0,
    address: address,
    status: 'success',
  });

  document.getElementById('send-amount').value  = '';
  document.getElementById('send-address').value = '';

  showToastMsg('📤', `Відправлено ${amt} ${cur} ✓`);
  switchWalletTab('overview');
}

// ─── SCROLL REVEAL ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ─── PRICE ANIMATION (simulated) ───
function animatePrices() {
  Object.keys(rates).forEach(sym => {
    const jitter = (Math.random() - 0.5) * 0.001;
    rates[sym].price = Math.round(rates[sym].price * (1 + jitter));
  });
  calcExchangeNow('from');
  updateRatesTable();
  buildTicker();
}

// ─── INIT ───
buildTicker();
updateRatesTable();
calcExchangeNow('from');
setInterval(animatePrices, 5000);

// Restore session on page load
(function restoreSession() {
  const user = sessionLoad();
  if (user) updateHeaderForUser(user);
})();