import { useState } from "react";
import "./styles.css";
import Modal from "./Modal/Modal";

export default function App() {
  const [modal, setModal] = useState({ modal1: false, modal2: false });
  return (
    <div className="App">
      <main>
        <button
          className="open-btn"
          onClick={() => setModal({ ...modal, modal1: true })}
        >
          Open Modal 1
        </button>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          libero ut ipsam exercitationem ea odit dolore quidem quaerat, eos,
          deleniti reiciendis provident error aspernatur nihil sapiente nostrum
          omnis, voluptates aut?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          libero ut ipsam exercitationem ea odit dolore quidem quaerat, eos,
          deleniti reiciendis provident error aspernatur nihil sapiente nostrum
          omnis, voluptates aut?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          libero ut ipsam exercitationem ea odit dolore quidem quaerat, eos,
          deleniti reiciendis provident error aspernatur nihil sapiente nostrum
          omnis, voluptates aut?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          libero ut ipsam exercitationem ea odit dolore quidem quaerat, eos,
          deleniti reiciendis provident error aspernatur nihil sapiente nostrum
          omnis, voluptates aut?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          libero ut ipsam exercitationem ea odit dolore quidem quaerat, eos,
          deleniti reiciendis provident error aspernatur nihil sapiente nostrum
          omnis, voluptates aut?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          libero ut ipsam exercitationem ea odit dolore quidem quaerat, eos,
          deleniti reiciendis provident error aspernatur nihil sapiente nostrum
          omnis, voluptates aut?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          libero ut ipsam exercitationem ea odit dolore quidem quaerat, eos,
          deleniti reiciendis provident error aspernatur nihil sapiente nostrum
          omnis, voluptates aut?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          libero ut ipsam exercitationem ea odit dolore quidem quaerat, eos,
          deleniti reiciendis provident error aspernatur nihil sapiente nostrum
          omnis, voluptates aut?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          libero ut ipsam exercitationem ea odit dolore quidem quaerat, eos,
          deleniti reiciendis provident error aspernatur nihil sapiente nostrum
          omnis, voluptates aut?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          libero ut ipsam exercitationem ea odit dolore quidem quaerat, eos,
          deleniti reiciendis provident error aspernatur nihil sapiente nostrum
          omnis, voluptates aut?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          libero ut ipsam exercitationem ea odit dolore quidem quaerat, eos,
          deleniti reiciendis provident error aspernatur nihil sapiente nostrum
          omnis, voluptates aut?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          libero ut ipsam exercitationem ea odit dolore quidem quaerat, eos,
          deleniti reiciendis provident error aspernatur nihil sapiente nostrum
          omnis, voluptates aut?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
          libero ut ipsam exercitationem ea odit dolore quidem quaerat, eos,
          deleniti reiciendis provident error aspernatur nihil sapiente nostrum
          omnis, voluptates aut?
        </p>
      </main>
      <Modal
        title={"Modal 1 title"}
        isOpened={modal.modal1}
        onModalClose={() => setModal({ ...modal, modal1: false })}
      >
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde sed
        dicta distinctio accusantium minima deleniti cumque dolore repellat
        illum, laboriosam nemo ipsam voluptatem exercitationem autem quaerat
        saepe debitis dolores!{" "}
      </Modal>

      <Modal
        title={"Modal 2 title"}
        isOpened={modal.modal2}
        onModalClose={() => setModal({ ...modal, modal1: false })}
      >
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi unde sed
        dicta distinctio accusantium minima deleniti cumque dolore repellat
        illum, laboriosam nemo ipsam voluptatem exercitationem autem quaerat
        saepe debitis dolores!{" "}
      </Modal>
    </div>
  );
}
