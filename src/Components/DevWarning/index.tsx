import { Warning, Reopen } from "./styles";
import { useState } from "react";
import { RxDoubleArrowDown } from "react-icons/rx";

export function DevWarning() {
  const [disabled, setDisabled] = useState(false);

  if (disabled) {
    return (
      <Reopen onClick={() => setDisabled(false)}>
        <RxDoubleArrowDown />
      </Reopen>
    );
  } else {
    return (
      <Warning>
        <p>O sistema está passando por alterações, o que pode ocasionar em erros durante seu uso. Caso você note um erro peço que nos envie um print neste <a href="mailto:henriquecasagrande@codificaedu.com.br" target="_blank">link</a></p>
        <button onClick={() => setDisabled(true)}>Fechar aviso</button>
      </Warning>
    );
  }
}