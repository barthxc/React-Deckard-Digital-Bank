import "./Hero.css";
const Hero = () => {
  //Añadir el responsive de max-[640px]: cambiando algunas letras y tamaños de contenedores
  return (
    <main className="flex items-center justify-around min-h-screen relative mt-10 max-[978px]:flex-col max-[978px]:gap-10 ">
      <div className="absolute inset-0 bg-[url('/toolsimg/HeroBackground.png')] bg-cover bg-center opacity-50 -z-10"></div>
      <div className="flex flex-col gap-10 max-w-[464px] max-[978px]:mt-10 mx-3 max-[978px]:max-w-[410px]">
        <div className="flex gap-2 text-lg bg-[#4090b546] rounded-xl p-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.60288 3.79876C9.42705 2.85093 10.6433 2.25 12 2.25C13.3566 2.25 14.5728 2.85087 15.397 3.79861C16.6501 3.71106 17.9352 4.14616 18.8946 5.10557C19.854 6.06498 20.2891 7.35009 20.2016 8.60319C21.1492 9.42735 21.75 10.6435 21.75 12C21.75 13.3568 21.149 14.5731 20.2011 15.3973C20.2884 16.6502 19.8533 17.935 18.8941 18.8943C17.9348 19.8535 16.65 20.2886 15.3971 20.2013C14.5729 21.1491 13.3567 21.75 12 21.75C10.6434 21.75 9.4272 21.1491 8.60304 20.2014C7.34992 20.289 6.0648 19.8539 5.10537 18.8945C4.14596 17.935 3.71086 16.6499 3.79841 15.3968C2.85079 14.5726 2.25 13.3565 2.25 12C2.25 10.6434 2.85085 9.42723 3.79855 8.60306C3.7111 7.35005 4.14621 6.06507 5.10554 5.10574C6.06488 4.1464 7.34987 3.71129 8.60288 3.79876ZM15.6103 10.1859C15.8511 9.84887 15.773 9.38046 15.4359 9.1397C15.0989 8.89894 14.6305 8.97701 14.3897 9.31407L11.1543 13.8436L9.53033 12.2197C9.23744 11.9268 8.76256 11.9268 8.46967 12.2197C8.17678 12.5126 8.17678 12.9874 8.46967 13.2803L10.7197 15.5303C10.8756 15.6862 11.0921 15.7656 11.3119 15.7474C11.5316 15.7293 11.7322 15.6153 11.8603 15.4359L15.6103 10.1859Z"
              fill="#4090B5"
            />
          </svg>
          <p className="text-white">
            No es requisito que seas empresa. Ni crédito
          </p>
        </div>
        <div className="text-5xl flex flex-col gap-5 text-white">
          <h1 className="font-bold	">Deckard Digital Bank</h1>
          <p>Potencia tu</p>
          <p className="text-[#4090b5]">Viaje Financiero</p>
        </div>

        <p className="text-white">
          En Deckard Digital Bank ofrecemos soluciones bancarias digitales
          diseñadas para tu estilo de vida. Desde cuentas personalizadas hasta
          herramientas de ahorro inteligente, estamos aquí para hacer que tu
          viaje financiero sea excepcional.
        </p>
        <button className="bg-[#4090b5b7] text-black py-4 rounded-full text-2xl w-[213px] hover:bg-[#4fb1df]">
          Abrir Cuenta
        </button>
      </div>

      <div className="flex flex-col w-[515px] items-center border bg-[#2626262c] border-[#262626] rounded mx-3 max-[978px]:w-[410px]">
        <div className="flex flex-col m-4 w-[445px] items-center max-[978px]:w-[410px] max-[978px]:mx-0">
          <p className="text-sm text-white mb-2">Tus Movimientos</p>
          <div className="flex px-2 py-1 bg-[#1c1c1c4d] border-[#262626] w-[445px] items-center gap-2 rounded-lg max-[978px]:w-[400px] ">
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.47084"
                y="0.320068"
                width="38.1496"
                height="38.1496"
                rx="19.0748"
                fill="#9E30A9"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.8756 11.3206C22.5824 11.6365 22.6007 12.1302 22.9165 12.4234L25.1018 14.4527L16.1643 14.4527C15.7334 14.4527 15.384 14.8021 15.384 15.2331C15.384 15.664 15.7334 16.0134 16.1643 16.0134L25.1018 16.0134L22.9165 18.0427C22.6007 18.3359 22.5824 18.8297 22.8756 19.1455C23.1689 19.4613 23.6626 19.4796 23.9784 19.1863L27.62 15.8049C27.779 15.6572 27.8693 15.4501 27.8693 15.2331C27.8693 15.0161 27.779 14.8089 27.62 14.6612L23.9784 11.2798C23.6626 10.9866 23.1689 11.0048 22.8756 11.3206ZM16.2159 19.6442C15.9227 19.3284 15.4289 19.3101 15.1131 19.6033L11.4716 22.9848C11.3126 23.1324 11.2222 23.3396 11.2222 23.5566C11.2222 23.7736 11.3126 23.9808 11.4716 24.1284L15.1131 27.5099C15.4289 27.8031 15.9227 27.7848 16.2159 27.469C16.5092 27.1532 16.4909 26.6595 16.1751 26.3662L13.9897 24.3369H22.9272C23.3582 24.3369 23.7075 23.9876 23.7075 23.5566C23.7075 23.1256 23.3582 22.7763 22.9272 22.7763H13.9897L16.1751 20.747C16.4909 20.4537 16.5092 19.96 16.2159 19.6442Z"
                fill="#1C1C1C"
              />
            </svg>

            <div className="flex flex-col text-white">
              <p className="text-sm">Transferencia</p>
              <p className="text-lg">Javier Sánchez</p>
            </div>
            <p className=" ml-20 text-white text-xl">+70,00€</p>
          </div>

          <div className="flex relative bottom-3  px-2 py-1  border-[#262626]  bg-[#1c1c1c76] w-[400px] items-center gap-2 rounded-lg opacity-80 -z-10 max-[978px]:w-[350px]">
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.47084"
                y="0.320068"
                width="38.1496"
                height="38.1496"
                rx="19.0748"
                fill="#9E30A9"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.8756 11.3206C22.5824 11.6365 22.6007 12.1302 22.9165 12.4234L25.1018 14.4527L16.1643 14.4527C15.7334 14.4527 15.384 14.8021 15.384 15.2331C15.384 15.664 15.7334 16.0134 16.1643 16.0134L25.1018 16.0134L22.9165 18.0427C22.6007 18.3359 22.5824 18.8297 22.8756 19.1455C23.1689 19.4613 23.6626 19.4796 23.9784 19.1863L27.62 15.8049C27.779 15.6572 27.8693 15.4501 27.8693 15.2331C27.8693 15.0161 27.779 14.8089 27.62 14.6612L23.9784 11.2798C23.6626 10.9866 23.1689 11.0048 22.8756 11.3206ZM16.2159 19.6442C15.9227 19.3284 15.4289 19.3101 15.1131 19.6033L11.4716 22.9848C11.3126 23.1324 11.2222 23.3396 11.2222 23.5566C11.2222 23.7736 11.3126 23.9808 11.4716 24.1284L15.1131 27.5099C15.4289 27.8031 15.9227 27.7848 16.2159 27.469C16.5092 27.1532 16.4909 26.6595 16.1751 26.3662L13.9897 24.3369H22.9272C23.3582 24.3369 23.7075 23.9876 23.7075 23.5566C23.7075 23.1256 23.3582 22.7763 22.9272 22.7763H13.9897L16.1751 20.747C16.4909 20.4537 16.5092 19.96 16.2159 19.6442Z"
                fill="#1C1C1C"
              />
            </svg>

            <div className="flex flex-col text-white">
              <p className="text-sm">Transferencia</p>
              <p className="text-lg">Marta López</p>
            </div>
            <p className=" ml-20 text-white text-xl">+150,00€</p>
          </div>

          <div className="flex relative bottom-6  px-2 py-1  border-[#262626] bg-[#1c1c1c76] w-[350px] items-center gap-2 rounded-lg opacity-80 -z-20 max-[978px]:w-[300px]">
            <svg
              width="39"
              height="39"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.47084"
                y="0.320068"
                width="38.1496"
                height="38.1496"
                rx="19.0748"
                fill="#9E30A9"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M22.8756 11.3206C22.5824 11.6365 22.6007 12.1302 22.9165 12.4234L25.1018 14.4527L16.1643 14.4527C15.7334 14.4527 15.384 14.8021 15.384 15.2331C15.384 15.664 15.7334 16.0134 16.1643 16.0134L25.1018 16.0134L22.9165 18.0427C22.6007 18.3359 22.5824 18.8297 22.8756 19.1455C23.1689 19.4613 23.6626 19.4796 23.9784 19.1863L27.62 15.8049C27.779 15.6572 27.8693 15.4501 27.8693 15.2331C27.8693 15.0161 27.779 14.8089 27.62 14.6612L23.9784 11.2798C23.6626 10.9866 23.1689 11.0048 22.8756 11.3206ZM16.2159 19.6442C15.9227 19.3284 15.4289 19.3101 15.1131 19.6033L11.4716 22.9848C11.3126 23.1324 11.2222 23.3396 11.2222 23.5566C11.2222 23.7736 11.3126 23.9808 11.4716 24.1284L15.1131 27.5099C15.4289 27.8031 15.9227 27.7848 16.2159 27.469C16.5092 27.1532 16.4909 26.6595 16.1751 26.3662L13.9897 24.3369H22.9272C23.3582 24.3369 23.7075 23.9876 23.7075 23.5566C23.7075 23.1256 23.3582 22.7763 22.9272 22.7763H13.9897L16.1751 20.747C16.4909 20.4537 16.5092 19.96 16.2159 19.6442Z"
                fill="#1C1C1C"
              />
            </svg>

            <div className="flex flex-col text-white">
              <p className="text-sm">Transferencia</p>
              <p className="text-lg">Alex González</p>
            </div>
            <p className=" ml-20 text-white text-xl">+60,00€</p>
          </div>
        </div>

        <div className="flex flex-col m-4 w-[445px] items-center max-[978px]:w-[300px]">
          <p className="text-sm text-white mb-2">Tipo de cambio</p>
          <div className="bg-[#1c1c1c76]  rounded-lg border border-[#262626]">
            <table className=" w-[445px] max-[978px]:w-[300px] ">
              <tr className="text-white">
                <td className="p-3">
                  <div className="flex gap-2 items-center ">
                    <img src="toolsimg/INR.png" alt="" />
                    <p className="text-sm">INR</p>
                  </div>
                  <p className="text-xs	text-center">Rupias Indias</p>
                </td>
                <td className="p-3">
                  <div className="flex gap-2 items-center ">
                    <img src="toolsimg/USD.png" alt="" />
                    <p className="text-sm">USD</p>
                  </div>
                  <p className="text-xs	text-center">Dólar Americano</p>
                </td>
              </tr>
              <tr className="text-white">
                <td className="p-4">5,0000</td>
                <td className="p-4">12.00</td>
              </tr>
            </table>
          </div>

          <button className="bg-[#9f30a95f] mt-4 text-2xl w-[445px] rounded-full text-[#9E30A9] py-2 hover:bg-[#aa44c0] hover:text-white max-[978px]:w-[200px]">
            Cambio
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
