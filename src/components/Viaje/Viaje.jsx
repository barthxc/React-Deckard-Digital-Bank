const Viaje = () => {
  return (
    <section className="m-10 flex flex-row items-center justify-between gap-5 p-5 text-white bg-[#1C1C1C] rounded-xl border border-[#262626] max-[760px]:flex-col">

      <div className="flex flex-col gap-4">
        <h2 className="text-5xl">
          ¡Comienza tu viaje financiero en{" "}
          <span className="text-[#4090B5]">Deckard Digital Bank hoy!</span>
        </h2>
        <p className="text-xl">
          ¿Listo para tomar el control de tus finanzas? Únete a Deckard Digital
          Bank ahora y permítenos ayudarte a alcanzar tus metas financieras con
          nuestras soluciones personalizadas y un servicio al cliente
          excepcional.
        </p>
      </div>
      <button className="bg-[#4090B5]  text-black  px-10 py-2 rounded-full hover:bg-[#4fb1df] ">Abrir cuenta</button>
    </section>
  );
};

export default Viaje;
