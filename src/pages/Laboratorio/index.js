import React from "react";
import { Container /*PoweredBy*/ } from "./styles";
import VergeViewer from "../../components/VergeViewer";
import VergePreloader from "../../components/VergePreloader";
import VergeLogo from "../../components/VergeLogo";
import Menu from "../../components/VergeMenu";
import IconButtons from "../../components/VergeAyudas";
import ModalObjetivos from "../../components/VergeModalObjetivos";
import ModalAyuda from "../../components/VergeModalAyuda";
import ModalEquipo from "../../components/VergeModalEquipo";
import ModalInformacion from "../../components/VergeModalInformacion";
import VergeBotonRetroceso from "../../components/VergeBotonRetroceso";

function Laboratorio() {
  
const menuItems = [
  { id: 'paso1', icon: '/images/icon3.png', ENdescription: 'Free Movement', ESdescription: 'Movimiento Libre' },
  { id: 'paso2', icon: '/images/icon2.png', ENdescription: 'Parts List', ESdescription: 'Lista de partes' },
  { id: 'paso3', icon: '/images/icon5.png', ENdescription: 'Explosion', ESdescription: 'Explosión' },
];

  return (
    <Container>
      <VergePreloader
        labName="Zn Concentrate Filter"
        imageUrl="/images/fondo.png"
        logoUrl="/images/logo-tecsup.png"
       />
      <VergeLogo logoUrl="/images/logo-tecsup.png" />
      <Menu items={menuItems} menuIconImage="/images/icon1.png"/>
      <IconButtons />
      <VergeViewer
        src="/applications/Concentrate_Filter/Concentrate_Filter.html"
        title="Zn Concentrate Filter"
      />
      <input
        id="estado_animacion"
        defaultValue="0"
        style={{ display: "none" }}
      />
      <ModalAyuda />
      <ModalObjetivos />
      <ModalEquipo />
      <ModalInformacion />
      <VergeBotonRetroceso />
    </Container>
  );
}

export default Laboratorio;
