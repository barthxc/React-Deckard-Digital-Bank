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
          transacciones seguras e información financiera personalizada, todo
          diseñado para mejorar tu experiencia bancaria.
        </p>

        <div className="flex flex-row gap-5 max-[760px]:flex-col">
          <div className="flex flex-col gap-5">
            <div className="flex flex-row bg-[#1C1C1C] p-10 rounded-xl border border-[#262626] ">
              <div className="flex flex-col justify-around">
                <div className="flex flex-row justify-between">
                  <p>Acceso a tus cuentas</p>
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
                  segura de banca en línea. Consulta saldos, transfiere fondos y
                  paga tus facturas con facilidad.
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
                  últimas medidas de seguridad en la industria. Utilizamos
                  cifrado y autenticación de múltiples factores para proteger tu
                  información financiera.
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
                  nuestra fácil de usar aplicación de banca móvil. Gestiona tus
                  cuentas, deposita cheques y realiza pagos fácilmente desde tu
                  smartphone o tablet.
                </p>
              </div>
            </div>

            <div className="flex flex-row bg-[#1C1C1C] p-10 rounded-xl border border-[#262626] ">
              <div className="flex flex-col justify-around">
                <div className="flex flex-row justify-between">
                  <p>Pago de facturas y transferencias</p>
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
                  Ahorra tiempo y evita cargos por morosidad con nuestro
                  conveniente servicio de pago de facturas. Configura pagos
                  recurrentes o realiza transferencias únicas entre tus cuentas
                  con solo unos clicks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
