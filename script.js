document.addEventListener('DOMContentLoaded', () => {
      const units = [
        { brand: 'KIA', title: 'FORTE SEDÁN GT TURBO 2023', transmission: 'AUTOMÁTICA', price: 399000, km: 88000, tag: 'CERTIFICADO', image: 'assets/kia-forte-gt-turbo-2023.jpeg' },
        { brand: 'KIA', title: 'FORTE SEDÁN GT LINE 2023', transmission: 'AUTOMÁTICA', price: 399000, km: 78000, tag: 'CERTIFICADO', image: 'assets/kia-forte-gt-line-2023.jpeg' },
        { brand: 'KIA', title: 'FORTE SEDÁN EX 2024', transmission: 'AUTOMÁTICA', price: 405000, km: 77000, tag: 'CERTIFICADO', image: 'assets/kia-forte-ex-2024.jpeg' },
        { brand: 'HYUNDAI', title: 'HB20 SEDÁN GL MID 2024', transmission: 'MANUAL', price: 345000, km: 59000, tag: 'GARANTIZADO', image: 'assets/hyundai-hb20-2024.jpeg' },
        { brand: 'KIA', title: 'SORENTO SXL 2024', transmission: 'AUTOMÁTICA', price: 890000, km: 14000, tag: 'CERTIFICADO', image: 'assets/kia-sorento-sxl-2024.jpeg' },
        { brand: 'KIA', title: 'SORENTO EX PACK 2023', transmission: 'AUTOMÁTICA', price: 650000, km: 44000, tag: 'CERTIFICADO', image: 'assets/kia-sorento-ex-pack-2023.jpeg' },
        { brand: 'NISSAN', title: 'X-TRAIL EXCLUSIVE 2021', transmission: 'AUTOMÁTICA', price: 395000, km: 57000, tag: 'GARANTIZADO', image: 'assets/nissan-xtrail-exclusive-2021.jpeg' },
        { brand: 'KIA', title: 'RIO HATCHBACK LX 2022', transmission: 'MANUAL', price: 285000, km: 74000, tag: 'CERTIFICADO', image: 'assets/kia-rio-hatchback-lx-2022.jpeg' },
        { brand: 'KIA', title: 'NIRO EX 2023', transmission: 'AUTOMÁTICA', price: 530000, km: 47000, tag: 'CERTIFICADO', image: 'assets/kia-niro-ex-2023.jpeg' },
        { brand: 'CHEVROLET', title: 'TRACKER LT 2024', transmission: 'AUTOMÁTICA', price: 365000, km: 33500, tag: 'GARANTIZADO', image: 'assets/chevrolet-tracker-lt-2024.jpeg' },
        { brand: 'KIA', title: 'FORTE HATCHBACK GT LINE 2022', transmission: 'MANUAL', price: 395000, km: 65000, tag: 'CERTIFICADO', image: 'assets/kia-forte-gtline-2022.jpeg' },
        { brand: 'KIA', title: 'SELTOS GT LINE 2021', transmission: 'AUTOMÁTICA', price: 345000, km: 85000, tag: 'CERTIFICADO', image: 'assets/kia-seltos-gt-line-2021.jpeg' },
        { brand: 'KIA', title: 'SELTOS GT LINE 2022', transmission: 'AUTOMÁTICA', price: 405000, km: 47000, tag: 'CERTIFICADO', image: 'assets/kia-seltos-gt-line-2022.jpeg' },
        { brand: 'KIA', title: 'FORTE SEDÁN LX 2023', transmission: 'AUTOMÁTICA', price: 365000, km: 58000, tag: 'CERTIFICADO', image: 'assets/kia-forte-lx-2023.jpeg' },
        { brand: 'KIA', title: 'SOUL LX 2020', transmission: 'AUTOMÁTICA', price: 295000, km: 77700, tag: 'CERTIFICADO', image: 'assets/kia-soul-lx-2020.jpeg' },
        { brand: 'KIA', title: 'SELTOS SXL 2025', transmission: 'AUTOMÁTICA', price: 490000, km: 50000, tag: 'CERTIFICADO', image: 'assets/kia-seltos-sxl-2025.jpeg' },
        { brand: 'FORD', title: 'BRONCO SPORT OUTER BANKS 2023', transmission: 'AUTOMÁTICA', price: 599000, km: 56000, tag: 'GARANTIZADO', image: 'assets/ford-bronco-sport-outer-banks-2023.jpeg' },
        { brand: 'TOYOTA', title: 'PRIUS C 2021', transmission: 'AUTOMÁTICA', price: 325000, km: 77500, tag: 'GARANTIZADO', image: 'assets/toyota-prius-c-2021.jpeg' },
        { brand: 'HYUNDAI', title: 'TUCSON LIMITED TECH 2023', transmission: 'AUTOMÁTICA', price: 545000, km: 48000, tag: 'GARANTIZADO', image: 'assets/hyundai-tucson-limited-tech-2023.jpeg' },
        { brand: 'KIA', title: 'RIO LX SEDAN 2023', transmission: 'AUTOMÁTICA', price: 299000, km: 70500, tag: 'CERTIFICADO', image: 'assets/kia-rio-lx-sedan-2023.jpeg' },
        { brand: 'KIA', title: 'K3 EX PACK HATCHBACK 2025', transmission: 'AUTOMÁTICA', price: 375000, km: 6500, tag: 'CERTIFICADO', image: 'assets/kia-k3-ex-pack-hatchback-2025.jpeg' },
        { brand: 'HYUNDAI', title: 'TUCSON GLS PREMIUM 2023', transmission: 'AUTOMÁTICA', price: 445000, km: 33500, tag: 'GARANTIZADO', image: 'assets/hyundai-tucson-gls-premium-2023.jpeg' },
        { brand: 'KIA', title: 'SPORTAGE EX 2023', transmission: 'AUTOMÁTICA', price: 490000, km: 60000, tag: 'CERTIFICADO', image: 'assets/kia-sportage-ex-2023.jpeg' },
      ];

      const inventory = document.querySelector('#inventory');
      const resultCount = document.querySelector('#resultCount');
      const brand = document.querySelector('#brand');
      const transmission = document.querySelector('#price');

      const toPrice = value =>
        new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 }).format(value);

      const render = list => {
        inventory.innerHTML = list
          .map(
            car => `
            <article class="car-card">
              <div class="car-photo">${car.image ? `<img src="${car.image}" alt="${car.title}" loading="lazy" />` : car.brand}</div>
              <div class="car-body">
                <h3 class="car-title">${car.title}</h3>
                <div class="tags">
                  <span class="tag">${car.km.toLocaleString('es-MX')} km</span>
                  <span class="tag">${car.transmission}</span>
                  <span class="tag ok">${car.tag.toLowerCase()}</span>
                </div>
                <div class="price">
                  <strong>${toPrice(car.price)}</strong>
                  
                </div>
                <button class="test-drive" data-unit="${car.title}" data-brand="${car.brand}">Solicitar prueba de manejo</button>
              </div>
            </article>
          `
          )
          .join('');

        resultCount.textContent = `${list.length} resultados`;
      };

      const filter = () => {
        const brandType = brand.value;
        const transmissionType = transmission.value;

        const list = units.filter(car => {
          const matchesBrand = !brandType || car.brand === brandType;

          const matchesTransmission = !transmissionType || car.transmission === transmissionType;

          return matchesBrand && matchesTransmission;
        });

        render(list);
      };

      [brand, transmission].forEach(el => el.addEventListener('input', filter));
      document.querySelector('#clear').addEventListener('click', () => {
        brand.value = '';
        transmission.value = '';
        render(units);
      });

      inventory.addEventListener('click', event => {
        const trigger = event.target.closest('.test-drive');
        if (!trigger) return;

        const selectedUnit = trigger.dataset.unit;
        const selectedBrand = trigger.dataset.brand;
        const message = `Hola, me interesa agendar una prueba de manejo para la unidad: ${selectedBrand} ${selectedUnit}.`;
        const whatsappUrl = `https://wa.me/message/4QTC4XJFXGQPE1?text=${encodeURIComponent(message)}`;

        document.querySelector('#leadMessage').textContent =
          `Te estamos redirigiendo a WhatsApp con la unidad seleccionada: ${selectedBrand} ${selectedUnit}.`;
        window.open(whatsappUrl, '_blank', 'noopener');
      });

      render(units);
});
