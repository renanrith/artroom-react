import classes from "./uploadPopUp.module.css"

export default function UploadPopUp() {
    return (
        <div className={classes.fundo}>
            <h1>Informações do produto</h1>
           
            <div className={classes.field}>
                <input
                    type="text"
                    name="itemName"
                    className={classes.dados}
                    placeholder="Nome"
                />
                <br />
            </div>
            <div className={classes.field}>
                <input
                    type="text"
                    name="itemDescription"
                    className={classes.dados}
                    placeholder="Descrição do item"
                />
                <br />
            </div>
            <div className={classes.field}>
                <input
                    type="number"
                    name="cadPassword"
                    className={classes.dados}
                    placeholder="Preço R$"
                />
                <br />
            </div>
            <div className={classes.field}>
                <button> upload a imagem </button>
            </div>
            <div>

                <button>Cadastre-se</button>
                <br />
            </div>
        </div>
    )
}