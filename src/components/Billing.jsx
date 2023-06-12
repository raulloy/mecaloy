// import { apple, bill, google } from '../assets';
import { mechanicalSeal, mechanicalSeal1, VisaMaster } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img
        src={mechanicalSeal}
        alt="centrifugalPump"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <img
        src={mechanicalSeal1}
        alt="centrifugalPump"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Nuestros productos <br className="sm:block hidden" /> y servicios
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Nos enorgullece ofrecer un servicio de alta calidad. Nos esforzamos por
        superar las expectativas de nuestros clientes en todo momento, brindando
        soluciones eficaces y rápidas para sus necesidades de sellos mecánicos y
        bombas centrífugas.
        <br className="sm:block hidden" /> <br className="sm:block hidden" />
        Reparamos sellos mecanicos, vendemos refacciones para sellos mecánicos,
        fabricamos cualquier pieza especial en Carburo de Tungsteno, Carburo de
        Silicio, Teflón, Ceramica, Carbón, etc.
        <br className="sm:block hidden" /> <br className="sm:block hidden" />
        Brindamos servicio de mantenimiento y reparación de bombas centrífugas.
        Fabricación y rectificado de piezas especiales en acero inoxidable como
        Flechas, Cajas, Impulsores, etc.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={VisaMaster}
          alt="google_play"
          className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer"
        />
        {/* <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> */}
      </div>
    </div>
  </section>
);

export default Billing;
