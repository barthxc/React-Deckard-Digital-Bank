import "./Productos.css";
const Productos = () => {
  return (
    <section className="m-10">
      <div className="flex justify-between max-[700px]:flex-col">
        <div className="flex flex-col gap-5 text-white max-w-[893px]">
          <h2 className="text-5xl">
            Nuestros <span className="text-[#4090B5]">Productos</span>
          </h2>
          <p className="text-xl text-[#B3B3B3]">
            Descubre una variedad de productos bancarios integrales y
            personalizables, diseñados para adaptarse a tus necesidades
            financieras y aspiraciones únicas.
          </p>
        </div>

        <div className="flex justify-around mt-5 gap-5 text-2xl h-[80px] text-white bg-[#1C1C1C] rounded-full p-4 items-center">
          <button className="bg-[#4090B5] h-[64px] text-black rounded-full px-10 hover:bg-[#4fb1df]">
            Particulares
          </button>
          <button className="bg-[#9E30A9] h-[64px] rounded-full px-10 hover:bg-[#aa44c0] ">
            Empresas
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-row justify-center items-center text-white max-[978px]:flex-col ">
        <div className="flex flex-row justify-center items-start max-[640px]:flex-col max-[640px]:gap-5 max-[640px]:mb-10 max-[978px]:mb-10">
          {/*Division de 2 */}
          <div className="flex flex-col justify-center items-center gap-4 max-w-[325px] max-[978px]:">
            <svg
              width="99"
              height="98"
              viewBox="0 0 99 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                width="98"
                height="98"
                rx="49"
                fill="url(#paint0_linear_0_1811)"
                fill-opacity="0.05"
              />
              <rect
                x="12.5"
                y="12"
                width="74"
                height="74"
                rx="37"
                fill="url(#paint1_linear_0_1811)"
                fill-opacity="0.1"
              />
              <rect
                x="13"
                y="12.5"
                width="73"
                height="73"
                rx="36.5"
                stroke="url(#paint2_linear_0_1811)"
                stroke-opacity="0.2"
              />
              <path
                d="M47.3789 53.1814C46.4243 53.1814 45.8651 52.644 45.8651 51.6796V50.5637C41.8556 50.2881 37.8597 49.4615 33.7139 47.877V45.6038C38.8144 47.8633 43.9286 48.6624 49.4928 48.6624C55.0707 48.6624 60.1848 47.8633 65.2853 45.6038V47.877C61.1394 49.4615 57.1435 50.2881 53.1341 50.5637V51.6796C53.1341 52.644 52.5749 53.1814 51.6202 53.1814H47.3789ZM37.9279 62.3432H61.0712C63.8943 62.3432 65.2853 60.9656 65.2853 58.1412V44.7359C65.2853 41.9115 63.8943 40.5338 61.0712 40.5338H37.9279C35.1186 40.5338 33.7139 41.9115 33.7139 44.7359V58.1412C33.7139 60.9656 35.1186 62.3432 37.9279 62.3432ZM42.5784 41.7324H44.6923V39.2938C44.6923 38.2467 45.306 37.6543 46.3697 37.6543H52.6294C53.6932 37.6543 54.2933 38.2467 54.2933 39.2938V41.7048H56.4071V39.4454C56.4071 36.8552 55.0569 35.6428 52.5886 35.6428H46.3969C44.0649 35.6428 42.5784 36.8552 42.5784 39.4454V41.7324Z"
                fill="#4090B5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1811"
                  x1="49.5"
                  y1="0"
                  x2="49.5"
                  y2="98"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4090B5" />
                  <stop offset="1" stop-color="#4090B5" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1811"
                  x1="49.5"
                  y1="-37"
                  x2="49.5"
                  y2="203"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" />
                  <stop
                    offset="0.467671"
                    stop-color="#FBFBFB"
                    stop-opacity="0"
                  />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_0_1811"
                  x1="49.5"
                  y1="-116.5"
                  x2="49.5"
                  y2="153"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4090B5" />
                  <stop
                    offset="0.716291"
                    stop-color="#4090B5"
                    stop-opacity="0"
                  />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-2xl">Cuentas Corrientes</p>
            <p className="text-base mx-4 text-[#B3B3B3]">
              Disfruta de un acceso fácil y conveniente a tus fondos con nuestra
              variedad de opciones de cuentas corrientes. Benefíciate de
              características como la banca en línea y móvil, tarjetas de débito
              y acceso gratuito a cajeros automáticos.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 max-w-[325px]">
            <svg
              width="99"
              height="98"
              viewBox="0 0 99 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.500031"
                width="98"
                height="98"
                rx="49"
                fill="url(#paint0_linear_0_1823)"
                fill-opacity="0.05"
              />
              <rect
                x="12.5"
                y="12"
                width="74"
                height="74"
                rx="37"
                fill="url(#paint1_linear_0_1823)"
                fill-opacity="0.1"
              />
              <rect
                x="13"
                y="12.5"
                width="73"
                height="73"
                rx="36.5"
                stroke="url(#paint2_linear_0_1823)"
                stroke-opacity="0.2"
              />
              <path
                d="M37.2813 36.25C35.8143 36.25 34.625 37.4392 34.625 38.9062V39.9688C34.625 41.4358 35.8143 42.625 37.2813 42.625H61.7188C63.1858 42.625 64.375 41.4358 64.375 39.9688V38.9062C64.375 37.4392 63.1858 36.25 61.7188 36.25H37.2813Z"
                fill="#4090B5"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M36.873 44.75L37.6377 57.7496C37.7698 59.996 39.6301 61.75 41.8803 61.75H57.1193C59.3696 61.75 61.2298 59.996 61.362 57.7496L62.1267 44.75H36.873ZM49.5 46.875C50.0868 46.875 50.5625 47.3507 50.5625 47.9375V54.9349L52.9987 52.4987C53.4137 52.0838 54.0864 52.0838 54.5013 52.4987C54.9163 52.9136 54.9163 53.5864 54.5013 54.0013L50.2513 58.2513C49.8364 58.6662 49.1637 58.6662 48.7487 58.2513L44.4987 54.0013C44.0838 53.5864 44.0838 52.9136 44.4987 52.4987C44.9137 52.0838 45.5864 52.0838 46.0013 52.4987L48.4375 54.9349V47.9375C48.4375 47.3507 48.9132 46.875 49.5 46.875Z"
                fill="#4090B5"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1823"
                  x1="49.5"
                  y1="0"
                  x2="49.5"
                  y2="98"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4090B5" />
                  <stop offset="1" stop-color="#4090B5" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1823"
                  x1="49.5"
                  y1="-37"
                  x2="49.5"
                  y2="203"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4090B5" />
                  <stop
                    offset="0.467671"
                    stop-color="#4090B5"
                    stop-opacity="0"
                  />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_0_1823"
                  x1="49.5"
                  y1="-116.5"
                  x2="49.5"
                  y2="153"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#4090B5" />
                  <stop
                    offset="0.716291"
                    stop-color="#4090B5"
                    stop-opacity="0"
                  />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-2xl">Cuentas de Ahorro</p>
            <p className="text-base mx-4 text-[#B3B3B3]">
              Construye tu cuenta de ahorros con nuestras tasas de interés
              competitivas y opciones flexibles de cuentas de ahorro. Ya sea que
              estés ahorrando para un objetivo específico o quieras aumentar tu
              riqueza con el tiempo, tenemos la cuenta adecuada para ti.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-start max-[640px]:flex-col max-[640px]:gap-5 max-[640px]:mb-10">
          {/*Division de 2 */}
          <div className="flex flex-col justify-center items-center gap-4 max-w-[325px]">
            <svg
              width="99"
              height="98"
              viewBox="0 0 99 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                width="98"
                height="98"
                rx="49"
                fill="url(#paint0_linear_0_1832)"
                fill-opacity="0.05"
              />
              <rect
                x="12.5"
                y="12"
                width="74"
                height="74"
                rx="37"
                fill="url(#paint1_linear_0_1832)"
                fill-opacity="0.1"
              />
              <rect
                x="13"
                y="12.5"
                width="73"
                height="73"
                rx="36.5"
                stroke="url(#paint2_linear_0_1832)"
                stroke-opacity="0.2"
              />
              <path
                d="M49.5 42.625C47.7396 42.625 46.3125 44.0521 46.3125 45.8125C46.3125 47.5729 47.7396 49 49.5 49C51.2604 49 52.6875 47.5729 52.6875 45.8125C52.6875 44.0521 51.2604 42.625 49.5 42.625Z"
                fill="#9E30A9"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.625 38.9062C34.625 37.4392 35.8142 36.25 37.2812 36.25H61.7188C63.1858 36.25 64.375 37.4392 64.375 38.9062V52.7188C64.375 54.1858 63.1858 55.375 61.7188 55.375H37.2812C35.8142 55.375 34.625 54.1858 34.625 52.7188V38.9062ZM44.1875 45.8125C44.1875 42.8785 46.566 40.5 49.5 40.5C52.434 40.5 54.8125 42.8785 54.8125 45.8125C54.8125 48.7465 52.434 51.125 49.5 51.125C46.566 51.125 44.1875 48.7465 44.1875 45.8125ZM59.0625 44.75C58.4757 44.75 58 45.2257 58 45.8125V45.8231C58 46.4099 58.4757 46.8856 59.0625 46.8856H59.0731C59.6599 46.8856 60.1356 46.4099 60.1356 45.8231V45.8125C60.1356 45.2257 59.6599 44.75 59.0731 44.75H59.0625ZM38.875 45.8125C38.875 45.2257 39.3507 44.75 39.9375 44.75H39.9481C40.5349 44.75 41.0106 45.2257 41.0106 45.8125V45.8231C41.0106 46.4099 40.5349 46.8856 39.9481 46.8856H39.9375C39.3507 46.8856 38.875 46.4099 38.875 45.8231V45.8125Z"
                fill="#9E30A9"
              />
              <path
                d="M35.6875 57.5C35.1007 57.5 34.625 57.9757 34.625 58.5625C34.625 59.1493 35.1007 59.625 35.6875 59.625C43.3376 59.625 50.747 60.6481 57.7872 62.5644C59.4738 63.0235 61.1875 61.7738 61.1875 59.9864V58.5625C61.1875 57.9757 60.7118 57.5 60.125 57.5H35.6875Z"
                fill="#9E30A9"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_0_1832"
                  x1="49.5"
                  y1="0"
                  x2="49.5"
                  y2="98"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9E30A9" />
                  <stop offset="1" stop-color="#9E30A9" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_0_1832"
                  x1="49.5"
                  y1="-37"
                  x2="49.5"
                  y2="203"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9E30A9" />
                  <stop
                    offset="0.467671"
                    stop-color="#9E30A9"
                    stop-opacity="0"
                  />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_0_1832"
                  x1="49.5"
                  y1="-116.5"
                  x2="49.5"
                  y2="153"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9E30A9" />
                  <stop
                    offset="0.716291"
                    stop-color="#9E30A9"
                    stop-opacity="0"
                  />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-2xl">Depósitos</p>
            <p className="text-base mx-4 text-[#B3B3B3]">
              Haz realidad tus sueños con nuestras opciones flexibles de
              préstamos e hipotecas. Desde préstamos personales hasta hipotecas
              para hogares, nuestros expertos en préstamos están aquí para
              guiarte a través del proceso de solicitud y ayudarte a obtener los
              fondos que necesitas.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 max-w-[325px]">
            <svg
              width="99"
              height="98"
              viewBox="0 0 99 98"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                width="98"
                height="98"
                rx="49"
                fill="url(#paint0_linear_7_10230)"
                fill-opacity="0.05"
              />
              <rect
                x="12.5"
                y="12"
                width="74"
                height="74"
                rx="37"
                fill="url(#paint1_linear_7_10230)"
                fill-opacity="0.1"
              />
              <rect
                x="13"
                y="12.5"
                width="73"
                height="73"
                rx="36.5"
                stroke="url(#paint2_linear_7_10230)"
                stroke-opacity="0.2"
              />
              <path
                d="M49.5 42.625C47.7396 42.625 46.3125 44.0521 46.3125 45.8125C46.3125 47.5729 47.7396 49 49.5 49C51.2604 49 52.6875 47.5729 52.6875 45.8125C52.6875 44.0521 51.2604 42.625 49.5 42.625Z"
                fill="#9E30A9"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M34.625 38.9062C34.625 37.4392 35.8142 36.25 37.2812 36.25H61.7188C63.1858 36.25 64.375 37.4392 64.375 38.9062V52.7188C64.375 54.1858 63.1858 55.375 61.7188 55.375H37.2812C35.8142 55.375 34.625 54.1858 34.625 52.7188V38.9062ZM44.1875 45.8125C44.1875 42.8785 46.566 40.5 49.5 40.5C52.434 40.5 54.8125 42.8785 54.8125 45.8125C54.8125 48.7465 52.434 51.125 49.5 51.125C46.566 51.125 44.1875 48.7465 44.1875 45.8125ZM59.0625 44.75C58.4757 44.75 58 45.2257 58 45.8125V45.8231C58 46.4099 58.4757 46.8856 59.0625 46.8856H59.0731C59.6599 46.8856 60.1356 46.4099 60.1356 45.8231V45.8125C60.1356 45.2257 59.6599 44.75 59.0731 44.75H59.0625ZM38.875 45.8125C38.875 45.2257 39.3507 44.75 39.9375 44.75H39.9481C40.5349 44.75 41.0106 45.2257 41.0106 45.8125V45.8231C41.0106 46.4099 40.5349 46.8856 39.9481 46.8856H39.9375C39.3507 46.8856 38.875 46.4099 38.875 45.8231V45.8125Z"
                fill="#9E30A9"
              />
              <path
                d="M35.6875 57.5C35.1007 57.5 34.625 57.9757 34.625 58.5625C34.625 59.1493 35.1007 59.625 35.6875 59.625C43.3376 59.625 50.747 60.6481 57.7872 62.5644C59.4738 63.0235 61.1875 61.7738 61.1875 59.9864V58.5625C61.1875 57.9757 60.7118 57.5 60.125 57.5H35.6875Z"
                fill="#9E30A9"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_7_10230"
                  x1="49.5"
                  y1="0"
                  x2="49.5"
                  y2="98"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9E30A9" />
                  <stop offset="1" stop-color="#9E30A9" stop-opacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_7_10230"
                  x1="49.5"
                  y1="-37"
                  x2="49.5"
                  y2="203"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9E30A9" />
                  <stop
                    offset="0.467671"
                    stop-color="#9E30A9"
                    stop-opacity="0"
                  />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_7_10230"
                  x1="49.5"
                  y1="-116.5"
                  x2="49.5"
                  y2="153"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9E30A9" />
                  <stop
                    offset="0.716291"
                    stop-color="#9E30A9"
                    stop-opacity="0"
                  />
                </linearGradient>
              </defs>
            </svg>
            <p className="text-2xl">Inversiones</p>
            <p className="text-base mx-4 text-[#B3B3B3]">
              Potencia tu patrimonio con nuestras opciones de inversión
              flexibles. Desde fondos diversificados hasta cuentas de inversión
              personalizadas, nuestro equipo experto está listo para asesorarte
              y ayudarte a alcanzar tus metas financieras a largo plazo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Productos;
