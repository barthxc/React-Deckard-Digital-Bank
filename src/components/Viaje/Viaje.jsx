const Viaje = () => {
  return (
    <section className="m-10 flex flex-row items-center justify-between gap-5 px-10 py-10 text-white bg-[#1C1C1C] rounded-xl border border-[#262626] max-[760px]:flex-col">
      <div className="flex flex-col gap-4 ">
        <h2 className="text-5xl text-center max-[760px]:text-left">
          ¡Comienza tu viaje financiero en{" "}
          <span className="text-[#4090B5]">Deckard Digital Bank hoy!</span>
        </h2>
        <p className="text-xl text-center max-[760px]:text-justify">
          ¿Listo para tomar el control de tus finanzas? Únete a Deckard Digital
          Bank ahora y permítenos ayudarte a alcanzar tus metas financieras con
          nuestras soluciones personalizadas y un servicio al cliente
          excepcional.
        </p>
        <div className="mt-10 mb-5 relative">
          <button className="bg-[#191919] text-white py-4 rounded-full text-xl w-[213px] hover:bg-[#40c9ff] hover:text-black glow-button">
            Abrir Cuenta
          </button>
        </div>
      </div>
    </section>
  );
};

export default Viaje;
