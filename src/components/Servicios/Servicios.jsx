import "./Servicios.css";
const Servicios = () => {
  return (
    <section className="m-10 text-white">
      <div className="flex flex-col gap-5 mb-10">
        <h2 className="text-5xl">
          Nuestros<span className="text-[#4090B5]"> Servicios</span>
        </h2>
        <p className="text-xl text-[#B3B3B3]">
          Experimenta una serie de características poderosas en Deckard Digital
          Bank, que incluyen una banca en línea sin complicaciones,
          transacciones seguras e información financiera personalizada.
        </p>

        <div className="flex flex-row gap-5 max-[760px]:flex-col">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row bg-[#1C1C1C] p-10 rounded-xl border border-[#262626] ">
              <div className="flex flex-col justify-around">
                <div className="flex flex-row justify-between">
                  <p>Acceso a tus cuentas 24/7</p>
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673"
                      stroke="#4090B5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-base text-[#B3B3B3]">
                  Disfruta de la conveniencia de acceder a tus cuentas en
                  cualquier momento y lugar a través de nuestra plataforma
                  segura de banca en línea.
                </p>
              </div>
            </div>

            <div className="flex flex-row bg-[#1C1C1C] p-10 rounded-xl border border-[#262626] ">
              <div className="flex flex-col justify-around">
                <div className="flex flex-row justify-between">
                  <p>Transacciones seguras</p>
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673"
                      stroke="#4090B5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-base text-[#B3B3B3]">
                  Garantizamos que tus transacciones están protegidas por las
                  últimas medidas de seguridad en la industria con cifrado y
                  autenticación de múltiples factores.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-row bg-[#1C1C1C] p-10 rounded-xl border border-[#262626] ">
              <div className="flex flex-col justify-around">
                <div className="flex flex-row justify-between">
                  <p>App de Banca Móvil </p>
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673"
                      stroke="#4090B5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-base text-[#B3B3B3]">
                  Mantente conectado a tus finanzas estés donde estés con
                  nuestra fácil de usar aplicación de banca móvil.
                </p>
              </div>
            </div>

            <div className="flex flex-row bg-[#1C1C1C] p-10 rounded-xl border border-[#262626] ">
              <div className="flex flex-col justify-around">
                <div className="flex flex-row justify-between">
                  <p>Pagos con Bizum</p>
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.50007 26.9166L26.9167 8.49994M26.9167 8.49994V26.1799M26.9167 8.49994H9.23673"
                      stroke="#4090B5"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-base text-[#B3B3B3]">
                  Con Bizum puedes enviar y recibir dinero entre amigos, pagar
                  en comercios online y donar a la ONG que tu elijas, todo desde
                  tu móvil.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex place-content-center ">
          <div className="flex flex-row-reverse  bg-[#ffffff] p-5 border max-w-3xl border-[#262626] max-[760px]:flex-col ">
            <div className="flex flex-col justify-around pt-0 p-5 border border-[#262626]">
              <p className="text-[#000] indicador">1/6</p>
              <p className="text-xs text-[#000]">
                Este número es indicativo del riesgo del producto, siendo 1/6
                indicativo de menor riesgo y 6/6 de mayor riesgo
              </p>
            </div>
            <div className="flex flex-col justify-around p-5 border border-[#262626] ">
              <p className="text-base text-[#000] ">
                Deckard Digital Bank se encuentra adherido al Fondo de garantía
                de Depósitos de Entidades de Crédito previsto en el Real Decreto
                16/2011, de 14 de octubre. El importe garantizado tiene como
                límite 100.000 euros por depositante en cada entidad de crédito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
