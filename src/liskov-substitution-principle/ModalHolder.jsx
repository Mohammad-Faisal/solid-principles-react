import {ReactElement, useState} from "react";
import Modal from 'react-modal';


export const ModalHolder= ({contentToShow}) => {

    const [visibility , setVisibility] = useState(false);

    return <>
        <button onClick={() => setVisibility(true)}> Show Modal</button>

        <Modal isOpen={visibility}>
           <div>{contentToShow}</div>
        </Modal>
    </>
}